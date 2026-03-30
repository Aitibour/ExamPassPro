import { verifyIPN, parseIPN, mapAmountToPlan } from '@/lib/paypal'
import { sendPlanConfirmationEmail } from '@/lib/resend'
import { createServerClient } from '@supabase/ssr'
import type { Database } from '@/lib/supabase/database.types'
import { PLAN_LABELS, PLAN_FEATURES } from '@/lib/stripe'

export async function POST(request: Request) {
  try {
    const body = await request.text()

    // Verify with PayPal
    const isValid = await verifyIPN(body)
    if (!isValid) {
      console.warn('[PayPal IPN] Verification failed')
      return new Response('Verification failed', { status: 400 })
    }

    // Parse IPN data
    const ipnData = parseIPN(body)
    const {
      payer_email,
      mc_gross,
      item_name,
      txn_id,
      payment_status,
    } = ipnData

    console.log('[PayPal IPN] Received:', { payer_email, mc_gross, payment_status, txn_id })

    // Only process completed payments
    if (payment_status !== 'Completed') {
      console.log(`[PayPal IPN] Skipping status: ${payment_status}`)
      return new Response('OK', { status: 200 })
    }

    if (!payer_email || !mc_gross || !txn_id) {
      console.warn('[PayPal IPN] Missing required fields')
      return new Response('Missing fields', { status: 400 })
    }

    // Map amount to plan
    const amountCents = Math.round(parseFloat(mc_gross) * 100)
    const planMap = mapAmountToPlan(amountCents, item_name)

    if (!planMap) {
      console.warn('[PayPal IPN] Unrecognized amount:', mc_gross)
      return new Response('Unrecognized amount', { status: 400 })
    }

    const supabaseServiceRole = createServerClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://placeholder.supabase.co',
      process.env.SUPABASE_SERVICE_ROLE_KEY ?? 'placeholder',
      { cookies: { getAll: () => [], setAll: () => {} } }
    )

    // Look up user by PayPal email in profiles table
    const { data: profile, error: profileError } = await supabaseServiceRole
      .from('profiles')
      .select('id, full_name')
      .eq('email', payer_email)
      .single()

    if (profileError || !profile) {
      console.warn('[PayPal IPN] User not found:', payer_email)
      return new Response('User not found', { status: 400 })
    }

    const userId = profile.id
    const userName = profile.full_name || payer_email.split('@')[0]

    // For plan purchases: insert purchase records for ALL courses
    if (planMap.type === 'plan') {
      // Get all courses
      const { data: courses, error: coursesError } = await supabaseServiceRole
        .from('courses')
        .select('id')

      if (coursesError || !courses) {
        console.error('[PayPal IPN] Failed to fetch courses:', coursesError)
        return new Response('Database error', { status: 500 })
      }

      // Insert purchase for each course (idempotent via upsert)
      const sessionId = `paypal_${txn_id}`
      for (const course of courses) {
        await supabaseServiceRole
          .from('purchases')
          .upsert(
            {
              user_id: userId,
              course_id: course.id,
              plan: planMap.key,
              stripe_session_id: `${sessionId}_${course.id}`,
            },
            { onConflict: 'user_id,course_id' }
          )
      }

      // Send confirmation email with plan features
      const planLabel = PLAN_LABELS[planMap.key] || planMap.key
      const features = PLAN_FEATURES[planMap.key] || []
      const loginUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'https://exampasspro.vercel.app'}/login`

      await sendPlanConfirmationEmail({
        email: payer_email,
        name: userName,
        planLabel,
        planFeatures: features,
        loginUrl,
      })

      console.log('[PayPal IPN] Plan purchase processed:', {
        user_id: userId,
        plan: planMap.key,
        courses_count: courses.length,
      })
    }
    // For coaching purchases: insert into coaching_bookings (different flow)
    else if (planMap.type === 'coaching') {
      // Coaching purchases are typically handled via the /api/coaching/checkout flow
      // For now, just log them and send a notification
      console.log('[PayPal IPN] Coaching purchase received:', {
        user_id: userId,
        session: planMap.key,
        amount: mc_gross,
      })

      // Could send a notification email here if needed
    }

    return new Response('OK', { status: 200 })
  } catch (error) {
    console.error('[PayPal IPN] Error:', error)
    return new Response('Internal error', { status: 500 })
  }
}
