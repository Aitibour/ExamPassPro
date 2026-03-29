import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { AdminSidebar } from '@/components/admin/AdminSidebar'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('role, email, full_name')
    .eq('id', user.id)
    .single()

  if (profile?.role !== 'admin') redirect('/dashboard')

  return (
    <div className="flex min-h-screen bg-slate-950">
      <AdminSidebar />
      <div className="ml-60 flex-1 flex flex-col min-w-0">
        {/* Admin top bar */}
        <header className="sticky top-0 z-30 bg-slate-900 border-b border-slate-800 px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-black bg-red-600 text-white px-2.5 py-1 rounded-md tracking-wide">ADMIN PANEL</span>
            <span className="text-slate-600 text-xs">·</span>
            <span className="text-slate-400 text-xs">Restricted access — changes affect all users</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center text-white font-bold text-xs">
              {((profile as any)?.full_name || (profile as any)?.email || 'A').slice(0, 2).toUpperCase()}
            </div>
            <span className="text-slate-400 text-xs">{(profile as any)?.email}</span>
          </div>
        </header>
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  )
}
