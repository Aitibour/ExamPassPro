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
        className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-slate-100 transition-colors"
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-slate-200 shadow-xl z-50 md:hidden">
          <nav className="px-4 pt-3 pb-2 space-y-0.5">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {!isLoggedIn && (
            <div className="px-4 pt-2 pb-4 border-t border-slate-100 flex gap-2 mt-1">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="flex-1 text-center py-2.5 text-sm font-semibold text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="flex-1 text-center py-2.5 text-sm font-bold text-white bg-sky-500 rounded-xl hover:bg-sky-600 transition-colors"
              >
                Get Started
              </Link>
            </div>
          )}

          {isLoggedIn && (
            <div className="px-4 pt-2 pb-4 border-t border-slate-100 mt-1 space-y-0.5">
              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
                </svg>
                Dashboard
              </Link>
              <Link
                href="/dashboard/courses"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
                </svg>
                My Dumps
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  )
}
