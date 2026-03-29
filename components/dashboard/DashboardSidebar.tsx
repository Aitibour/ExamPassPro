'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import { Logo } from '@/components/ui/Logo'
import { createClient } from '@/lib/supabase/client'
import type { Profile } from '@/lib/supabase/database.types'

interface NavItem {
  href: string
  icon: string
  label: string
}

const NAV_ITEMS: NavItem[] = [
  { href: '/dashboard', icon: '▦', label: 'Dashboard' },
  { href: '/dashboard/courses', icon: '📚', label: 'My Dumps' },
  { href: '/exam', icon: '📝', label: 'Take Exam' },
  { href: '/study', icon: '📖', label: 'Study Mode' },
  { href: '/dashboard/results', icon: '📊', label: 'My Results' },
]

const ACCOUNT_ITEMS: NavItem[] = [
  { href: '/dashboard/settings', icon: '⚙️', label: 'Settings' },
]

interface DashboardSidebarProps {
  profile: Profile
}

export function DashboardSidebar({ profile }: DashboardSidebarProps) {
  const pathname = usePathname()

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  return (
    <aside className="fixed inset-y-0 left-0 w-60 bg-white border-r border-slate-200 flex flex-col z-40">
      <div className="p-5 border-b border-slate-100">
        <Logo size="sm" />
      </div>

      <nav className="flex-1 py-4 overflow-y-auto">
        <div className="px-3 space-y-0.5">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))
                  ? 'bg-sky-50 text-sky-600 font-semibold border-r-2 border-sky-500'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              )}
            >
              <span className="w-4 text-center text-base">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="px-3 mt-6">
          <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Account</p>
          {ACCOUNT_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                pathname === item.href
                  ? 'bg-sky-50 text-sky-600 font-semibold'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              )}
            >
              <span className="w-4 text-center text-base">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t border-slate-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
            {profile.full_name ? profile.full_name.slice(0, 2).toUpperCase() : profile.email.slice(0, 2).toUpperCase()}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-slate-900 truncate">{profile.full_name || profile.email}</p>
            <p className="text-xs text-slate-500 truncate">{profile.email}</p>
          </div>
        </div>
        <button
          onClick={handleSignOut}
          className="w-full text-left text-xs text-slate-400 hover:text-slate-600 transition-colors"
        >
          Sign out
        </button>
      </div>
    </aside>
  )
}
