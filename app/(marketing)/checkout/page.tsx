import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getStripe, PLAN_PRICES, PLAN_LABELS } from '@/lib/stripe'

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string; course?: string }>
}) {
  const { plan, course } = await searchParams

  if (!plan || !PLAN_PRICES[plan]) {
    redirect('/#pricing')
  }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    const next = `/checkout?plan=${plan}${course ? `&course=${course}` : ''}`
    redirect(`/login?next=${encodeURIComponent(next)}`)
  }

  if (!course) {
    redirect(`/courses?plan=${plan}`)
  }

  const stripe = getStripe()
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://exampasspro.vercel.app'

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: `ExamPassPro — ${PLAN_LABELS[plan]}`,
            description: 'Access plan for one IT certification course',
          },
          unit_amount: PLAN_PRICES[plan],
        },
        quantity: 1,
      },
    ],
    client_reference_id: user!.id,
    metadata: {
      course_id: course,
      plan,
    },
    success_url: `${appUrl}/dashboard?payment=success`,
    cancel_url: `${appUrl}/courses/${course}?payment=cancelled`,
  })

  redirect(session.url!)
}
