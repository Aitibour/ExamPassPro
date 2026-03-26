import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getStripe } from '@/lib/stripe'

export async function POST() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const stripe = getStripe()
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'

  // Find Stripe customer from recent session
  const { data: purchase } = await supabase
    .from('purchases')
    .select('stripe_session_id')
    .eq('user_id', user.id)
    .not('stripe_session_id', 'is', null)
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (!purchase?.stripe_session_id) {
    return NextResponse.json({ error: 'No active subscription' }, { status: 400 })
  }

  const session = await stripe.checkout.sessions.retrieve(purchase.stripe_session_id)
  if (!session.customer) {
    return NextResponse.json({ error: 'No customer found' }, { status: 400 })
  }

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: session.customer as string,
    return_url: `${appUrl}/dashboard`,
  })

  return NextResponse.json({ url: portalSession.url })
}
