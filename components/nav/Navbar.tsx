'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { buttonVariants } from '@/components/ui/button-variants'
import { NavUserMenu } from './NavUserMenu'
import { MobileMenu } from './MobileMenu'

interface NavbarProps {
  user?: any
  fullName?: string
  displayName?: string
  initials?: string
  planLabel?: string
}

export function Navbar({ user, displayName = '', initials = '?', planLabel = 'Free' }: NavbarProps) {
  const pathname = usePathname()

  const navLinks = [
    { href: '/',             label: 'Home' },
    { href: '/courses',      label: 'Dumps' },
    { href: '/labs',         label: 'Labs' },
    { href: '/comparisons',  label: 'Compare' },
    { href: '/resources',    label: 'Guide' },
    { href: '/roadmaps',     label: 'Path' },
    { href: '/coaching',     label: 'Coaching' },
    { href: '/#pricing',     label: 'Pricing' },
  ]

  const isActive = (href: string): boolean => {
    // Special case for home
    if (href === '/') {
      return pathname === '/'
    }

    // Pricing is a hash link, never "active" in routing
    if (href === '/#pricing') {
      return false
    }

    // For other routes, check if pathname starts with href
    // but make sure we're not matching a partial path
    if (pathname === href) {
      return true
    }

    // Match /courses, /courses/[slug], etc.
    if (pathname.startsWith(href + '/')) {
      return true
    }

    return false
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 h-16 flex items-center px-6 lg:px-12 relative">

      {/* Left: logo */}
      <Logo size="md" className="flex-shrink-0" />

      {/* Center: desktop navigation links */}
      <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
        {navLinks.map(link => {
          const active = isActive(link.href)
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                active
                  ? 'text-sky-600 bg-sky-50 font-bold'
                  : 'text-slate-600 hover:text-sky-600 hover:bg-sky-50'
              }`}
            >
              {link.label}
            </Link>
          )
        })}
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
