import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { OnboardingCourseSelector } from '@/components/onboarding/OnboardingCourseSelector'

export const dynamic = 'force-dynamic'

export default async function OnboardingPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  // If already enrolled in at least one course, skip onboarding
  const { count } = await supabase
    .from('purchases')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', user.id)

  if (count && count > 0) redirect('/dashboard')

  // Load all published courses
  const { data: courses } = await supabase
    .from('courses')
    .select('id, slug, title, description, brand_color, enrolled_count')
    .eq('is_published', true)
    .order('enrolled_count', { ascending: false })

  // Plan stored in auth metadata (set during sign-up step 2).
  // Google OAuth users get 'free' by default.
  const plan: string = (user.user_metadata?.plan as string | undefined) ?? 'free'
  const firstName: string =
    ((user.user_metadata?.full_name as string | undefined) ?? '').split(' ')[0] ||
    user.email?.split('@')[0] ||
    'there'

  return (
    <OnboardingCourseSelector
      courses={courses ?? []}
      plan={plan}
      firstName={firstName}
    />
  )
}
