import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { buttonVariants } from '@/components/ui/button-variants'
import { createClient } from '@/lib/supabase/server'
import { NavUserMenu } from './NavUserMenu'

export async function Navbar() {
  // Resolve logged-in user from the server session (no extra DB query needed)
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  // Pull display info from auth metadata (set during signUp / OAuth)
  const fullName: string = user?.user_metadata?.full_name ?? ''
  const displayName = fullName
    ? fullName.split(' ')[0]                       // "Marcus"
    : (user?.email?.split('@')[0] ?? '')            // "marcus.r" fallback

  const initials = fullName
    ? fullName.slice(0, 2).toUpperCase()            // "MA"
    : (user?.email?.slice(0, 2).toUpperCase() ?? '?')

  // Plan label (stored in metadata on sign-up; Google OAuth defaults to Free)
  const planRaw: string = user?.user_metadata?.plan ?? 'free'
  const PLAN_LABELS: Record<string, string> = {
    free:       'Free',
    starter:    'Starter',
    pro:        'Pro',
    all_access: 'All-Access',
  }
  const planLabel = PLAN_LABELS[planRaw] ?? 'Free'

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 h-16 flex items-center justify-between px-6 lg:px-12">
      {/* Left: logo + links */}
      <div className="flex items-center gap-8">
        <Logo size="md" />
        <div className="hidden md:flex items-center gap-1">
          <Link href="/"         className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors">Home</Link>
          <Link href="/courses"  className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors">Dumps</Link>
          <Link href="/#pricing" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors">Pricing</Link>
          <Link href="/about"    className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors">About</Link>
          <Link href="/contact"  className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors">Contact</Link>
          <Link href="/coaching" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors">Coaching</Link>
          <Link href="/labs"     className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors">Labs</Link>
        </div>
      </div>

      {/* Right: auth area */}
      <div className="flex items-center gap-3">
        {user ? (
          /* ── Logged-in: show name + dropdown ── */
          <NavUserMenu
            displayName={displayName}
            initials={initials}
            planLabel={planLabel}
          />
        ) : (
          /* ── Logged-out: sign-in / get-started ── */
          <>
            <Link href="/login"    className={buttonVariants('ghost',   'sm')}>Sign In</Link>
            <Link href="/register" className={buttonVariants('primary', 'sm')}>Get Started</Link>
          </>
        )}
      </div>
    </nav>
  )
}
