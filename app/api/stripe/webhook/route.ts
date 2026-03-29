import { NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { createServerClient } from '@supabase/ssr'
import type { Database } from '@/lib/supabase/database.types'
import { sendBookingConfirmation, sendBookingNotification } from '@/lib/resend'

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
    const metadata = session.metadata ?? {}

    // Service-role Supabase client (bypasses RLS)
    const supabase = createServerClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://placeholder.supabase.co',
      process.env.SUPABASE_SERVICE_ROLE_KEY ?? 'placeholder',
      { cookies: { getAll: () => [], setAll: () => {} } }
    )

    if (metadata.type === 'coaching') {
      // Insert booking record
      await supabase.from('coaching_bookings').insert({
        user_email:    metadata.client_email,
        user_name:     metadata.client_name,
        package_id:    metadata.package_id,
        package_name:  metadata.package_name,
        slot_date:     metadata.booking_date,
        slot_time:     metadata.booking_time,
        stripe_session_id: session.id,
        status: 'paid',
      })

      // Send confirmation emails (best-effort)
      const bookingInfo = {
        clientName:   metadata.client_name,
        clientEmail:  metadata.client_email,
        packageName:  metadata.package_name,
        slotDate:     metadata.booking_date,
        slotTime:     metadata.booking_time,
      }
      try { await sendBookingConfirmation(bookingInfo) } catch {}
      try { await sendBookingNotification(bookingInfo) } catch {}

    } else if (metadata.course_id && metadata.plan) {
      // Use client_reference_id (set server-side) — never trust metadata.user_id
      const userId = session.client_reference_id
      if (!userId) {
        console.error('Stripe webhook: missing client_reference_id on session', session.id)
        return NextResponse.json({ error: 'Missing user reference' }, { status: 400 })
      }
      await supabase.from('purchases').insert({
        user_id:  userId,
        course_id: metadata.course_id,
        plan:     metadata.plan,
        stripe_session_id: session.id,
      })
      await (supabase as any).rpc('increment_enrolled_count', { course_id_param: metadata.course_id })
    }
  }

  return NextResponse.json({ received: true })
}
