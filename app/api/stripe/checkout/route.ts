import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getStripe, PLAN_PRICES, PLAN_LABELS } from '@/lib/stripe'

export async function POST(req: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { plan, courseId } = await req.json()

  if (!PLAN_PRICES[plan]) {
    return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
  }

  const stripe = getStripe()
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: `ExamPassPro — ${PLAN_LABELS[plan]}`,
            description: `Access plan for one IT certification course`,
          },
          unit_amount: PLAN_PRICES[plan],
        },
        quantity: 1,
      },
    ],
    metadata: {
      user_id: user.id,
      course_id: courseId,
      plan,
    },
    success_url: `${appUrl}/dashboard?payment=success`,
    cancel_url: `${appUrl}/courses/${courseId ?? ''}?payment=cancelled`,
  })

  return NextResponse.json({ url: session.url })
}
