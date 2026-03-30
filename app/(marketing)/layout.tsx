import { Navbar } from '@/components/nav/Navbar'
import { Footer } from '@/components/nav/Footer'
import { createClient } from '@/lib/supabase/server'

export default async function MarketingLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const fullName: string = user?.user_metadata?.full_name ?? ''
  const displayName = fullName
    ? fullName.split(' ')[0]
    : (user?.email?.split('@')[0] ?? '')

  const initials = fullName
    ? fullName.slice(0, 2).toUpperCase()
    : (user?.email?.slice(0, 2).toUpperCase() ?? '?')

  const planRaw: string = user?.user_metadata?.plan ?? 'free'
  const PLAN_LABELS: Record<string, string> = {
    free: 'Free', starter: 'Core', pro: 'Pro', all_access: 'Elite',
  }
  const planLabel = PLAN_LABELS[planRaw] ?? 'Free'

  return (
    <>
      <Navbar user={user} displayName={displayName} initials={initials} planLabel={planLabel} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
