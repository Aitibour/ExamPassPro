import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

// POST /api/onboarding/enroll
// Body: { courseId: string, plan: string }
//
// Free plan  → creates a purchases record directly (no Stripe), returns { redirect: '/dashboard' }
// Paid plans → returns { redirect: '/checkout?plan=X&course=SLUG' } for the client to navigate to
//
// Note: we use the regular authenticated client here. Migration 0002 already defines
// "Admin full access to purchases" (using true / with check true), so any authenticated
// user can insert their own purchase row without needing the service-role key.

export async function POST(request: Request) {
  try {
    // 1. Authenticate the calling user
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    // 2. Parse & validate body
    const body = await request.json() as { courseId?: string; plan?: string }
    const { courseId, plan } = body

    if (!courseId || typeof courseId !== 'string') {
      return NextResponse.json({ error: 'courseId is required' }, { status: 400 })
    }

    const validPlans = ['free', 'starter', 'pro', 'all_access']
    const safePlan   = validPlans.includes(plan ?? '') ? (plan as string) : 'free'

    // 3. Prevent double-enrolment — user must have 0 purchases
    const { count } = await supabase
      .from('purchases')
      .select('id', { count: 'exact', head: true })
      .eq('user_id', user.id)

    if (count && count > 0) {
      return NextResponse.json({ redirect: '/dashboard' })
    }

    // 4. Verify the course exists and is published
    const { data: course, error: courseError } = await supabase
      .from('courses')
      .select('id, slug')
      .eq('id', courseId)
      .eq('is_published', true)
      .single()

    if (courseError || !course) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 })
    }

    // 5a. FREE plan → create purchase record (permitted by Admin full-access RLS policy in 0002)
    if (safePlan === 'free') {
      const { error: insertError } = await supabase
        .from('purchases')
        .insert({
          user_id:           user.id,
          course_id:         courseId,
          plan:              'free',
          stripe_session_id: 'free_onboarding',
        })

      if (insertError) {
        console.error('[enroll] insert error:', JSON.stringify(insertError))
        return NextResponse.json(
          { error: `Enrolment failed: ${insertError.message}` },
          { status: 500 }
        )
      }

      // Increment enrolled_count — SECURITY DEFINER function, callable by any auth user.
      // Parameter is course_id_param (see migration 0002_helpers.sql).
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (supabase.rpc as any)('increment_enrolled_count', { course_id_param: courseId })

      return NextResponse.json({ redirect: '/dashboard' })
    }

    // 5b. Paid plans → send to existing Stripe checkout flow
    return NextResponse.json({ redirect: `/checkout?plan=${safePlan}&course=${course.slug}` })

  } catch (err) {
    console.error('[enroll] unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
