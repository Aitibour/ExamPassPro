import { NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { createClient } from '@/lib/supabase/server'

const COACHING_PRICES: Record<string, number> = {
  'focus-session': 9900,   // $99
  'deep-dive':     14900,  // $149
  'sprint-pack':   29900,  // $299
}

const COACHING_NAMES: Record<string, string> = {
  'focus-session': 'Focus Session (60 min)',
  'deep-dive':     'Deep Dive Session (90 min)',
  'sprint-pack':   'Sprint Pack (3 × 60-min sessions)',
}

export async function POST(req: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { packageId, date, time, name, email } = await req.json()

  if (!packageId || !COACHING_PRICES[packageId] || !date || !time || !name || !email) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  // Force the booking email to the authenticated user's email
  const bookingEmail = user.email ?? email

  const stripe = getStripe()
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    customer_email: bookingEmail,
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: `ExamPassPro Coaching — ${COACHING_NAMES[packageId]}`,
            description: `Live 1-to-1 coaching session via Google Meet · ${date} at ${time} EST`,
          },
          unit_amount: COACHING_PRICES[packageId],
        },
        quantity: 1,
      },
    ],
    metadata: {
      type: 'coaching',
      package_id: packageId,
      package_name: COACHING_NAMES[packageId],
      client_name: name,
      client_email: bookingEmail,
      booking_date: date,
      booking_time: time,
    },
    success_url: `${appUrl}/coaching/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url:  `${appUrl}/coaching/book?package=${packageId}`,
  })

  return NextResponse.json({ url: session.url })
}
