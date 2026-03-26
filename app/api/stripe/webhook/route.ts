import { NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { createServerClient } from '@supabase/ssr'
import type { Database } from '@/lib/supabase/database.types'

export async function POST(req: Request) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature') ?? ''
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET ?? ''

  const stripe = getStripe()
  let event

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as any
    const { user_id, course_id, plan } = session.metadata ?? {}

    if (user_id && course_id && plan) {
      // Use service role client to bypass RLS
      const supabase = createServerClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://placeholder.supabase.co',
        process.env.SUPABASE_SERVICE_ROLE_KEY ?? 'placeholder',
        { cookies: { getAll: () => [], setAll: () => {} } }
      )

      await supabase.from('purchases').insert({
        user_id,
        course_id,
        plan,
        stripe_session_id: session.id,
      })

      // Increment enrolled count
      await supabase.rpc('increment_enrolled_count' as any, { course_id_param: course_id })
    }
  }

  return NextResponse.json({ received: true })
}
