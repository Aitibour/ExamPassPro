import { createClient } from '@/lib/supabase/server'
import type { Profile } from '@/lib/supabase/database.types'

export default async function AdminUsersPage() {
  const supabase = await createClient()
  const { data: profilesRaw } = await supabase
    .from('profiles')
    .select('*, purchases(count)')
    .order('created_at', { ascending: false })
    .limit(100)

  const profiles = profilesRaw as unknown as Profile[] | null

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl font-black text-slate-100">Users</h1>
        <p className="text-slate-500 text-sm mt-1">{profiles?.length ?? 0} registered users</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-800">
            <tr>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">User</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Email</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Role</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Joined</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {profiles?.map(p => (
              <tr key={p.id} className="hover:bg-slate-800/50 transition-colors">
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-600 to-violet-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {(p.full_name || p.email).slice(0, 2).toUpperCase()}
                    </div>
                    <span className="font-semibold text-sm text-slate-200">{p.full_name || '—'}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-sm text-slate-400">{p.email}</td>
                <td className="px-5 py-3.5">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                    p.role === 'admin' ? 'bg-red-900 text-red-400' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {p.role}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-sm text-slate-500">
                  {new Date(p.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
            {(!profiles || profiles.length === 0) && (
              <tr>
                <td colSpan={4} className="px-5 py-10 text-center text-slate-500 text-sm">
                  No users yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
