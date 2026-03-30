import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { buttonVariants } from '@/components/ui/button-variants'
import { createClient } from '@/lib/supabase/server'
import { NavUserMenu } from './NavUserMenu'
import { MobileMenu } from './MobileMenu'

export async function Navbar() {
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
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 h-16 flex items-center px-6 lg:px-12 relative">

      {/* Left: logo */}
      <Logo size="md" className="flex-shrink-0" />

      {/* Center: desktop navigation links */}
      <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
        <Link href="/"         className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors">Home</Link>
        <Link href="/courses"  className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors">Dumps</Link>
        <Link href="/labs"     className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors">Labs</Link>
        <Link href="/coaching" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors">Coaching</Link>
        <Link href="/#pricing" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors">Pricing</Link>
        <Link href="/about"    className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors">About</Link>
        <Link href="/contact"  className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors">Contact</Link>
      </div>

      {/* Right: auth area + mobile toggle */}
      <div className="flex items-center gap-3 flex-shrink-0 ml-auto">
        {user ? (
          <NavUserMenu displayName={displayName} initials={initials} planLabel={planLabel} />
        ) : (
          <>
            <Link href="/login"    className={`${buttonVariants('ghost',   'sm')} hidden sm:inline-flex`}>Sign In</Link>
            <Link href="/register" className={`${buttonVariants('primary', 'sm')} hidden sm:inline-flex`}>Get Started</Link>
          </>
        )}
        {/* Mobile hamburger — client component */}
        <MobileMenu isLoggedIn={!!user} />
      </div>
    </nav>
  )
}
