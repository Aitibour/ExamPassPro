'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import { createClient } from '@/lib/supabase/client'

const NAV_ITEMS = [
  { href: '/admin', icon: '▦', label: 'Overview' },
  { href: '/admin/courses', icon: '📚', label: 'Courses' },
  { href: '/admin/questions', icon: '❓', label: 'Questions' },
  { href: '/admin/exam-sets', icon: '📝', label: 'Exam Sets' },
]

const SYSTEM_ITEMS = [
  { href: '/admin/users', icon: '👥', label: 'Users' },
  { href: '/admin/purchases', icon: '💳', label: 'Purchases' },
  { href: '/admin/links', icon: '🔗', label: 'Link Analytics' },
]

export function AdminSidebar() {
  const pathname = usePathname()

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  return (
    <aside className="fixed inset-y-0 left-0 w-60 bg-slate-900 flex flex-col z-40">
      <div className="p-5 border-b border-slate-800">
        <Link href="/" className="flex items-center gap-2.5 no-underline" title="View public website">
          <svg width="30" height="30" viewBox="0 0 34 34" fill="none" className="flex-shrink-0">
            <rect width="34" height="34" rx="8" fill="#0ea5e9" />
            <polyline points="9,17 14,22 25,11" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div>
            <span className="font-black text-slate-100 text-sm">ExamPassPro</span>
            <span className="ml-1.5 text-[9px] font-bold bg-red-600 text-white px-1.5 py-0.5 rounded-full">ADMIN</span>
          </div>
        </Link>
      </div>

      <nav className="flex-1 py-4 overflow-y-auto">
        <div className="px-3 space-y-0.5">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                pathname === item.href
                  ? 'bg-sky-900/60 text-sky-400 font-semibold'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              )}
            >
              <span className="w-4 text-center text-sm">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="px-3 mt-6">
          <p className="px-3 text-[9px] font-bold text-slate-600 uppercase tracking-widest mb-2">Users & Revenue</p>
          {SYSTEM_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                pathname === item.href
                  ? 'bg-sky-900/60 text-sky-400 font-semibold'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              )}
            >
              <span className="w-4 text-center text-sm">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t border-slate-800 space-y-2">
        <Link
          href="/"
          className="flex items-center gap-2 text-sky-400 text-sm font-medium hover:text-sky-300 transition-colors"
        >
          <span>↗</span>
          View Public Website
        </Link>
        <button
          onClick={handleSignOut}
          className="w-full text-left text-xs text-slate-500 hover:text-slate-300 transition-colors"
        >
          Sign out
        </button>
      </div>
    </aside>
  )
}
