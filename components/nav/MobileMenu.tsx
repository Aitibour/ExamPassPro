'use client'

import { useState } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '/',         label: 'Home' },
  { href: '/courses',  label: 'Dumps' },
  { href: '/labs',     label: 'Labs' },
  { href: '/coaching', label: 'Coaching' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/about',    label: 'About' },
  { href: '/contact',  label: 'Contact' },
]

interface Props { isLoggedIn: boolean }

export function MobileMenu({ isLoggedIn }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Hamburger button — visible on mobile only */}
      <button
        onClick={() => setOpen(o => !o)}
        className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg hover:bg-slate-100 transition-colors"
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {/* Slide-in panel from top */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
            onClick={() => setOpen(false)}
          />

          {/* Menu panel */}
          <div className="absolute top-16 left-0 right-0 bg-white rounded-b-2xl shadow-lg z-50 md:hidden border-t border-slate-100">
            {/* Navigation links */}
            <nav className="px-4 py-4 space-y-1">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-sky-50 rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Auth section */}
            {!isLoggedIn ? (
              <div className="px-4 py-4 border-t border-slate-100 space-y-2">
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="block text-center py-3 text-base font-semibold text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="block text-center py-3 text-base font-bold text-white bg-sky-500 rounded-xl hover:bg-sky-600 transition-colors"
                >
                  Get Started Free
                </Link>
              </div>
            ) : (
              <div className="px-4 py-4 border-t border-slate-100 space-y-1">
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-base font-medium text-slate-700 hover:bg-sky-50 rounded-xl transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
                  </svg>
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/courses"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-base font-medium text-slate-700 hover:bg-sky-50 rounded-xl transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
                  </svg>
                  My Dumps
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </>
  )
}
