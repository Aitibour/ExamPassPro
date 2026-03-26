import { createClient } from '@/lib/supabase/server'

export default async function AdminUsersPage() {
  const supabase = await createClient()
  const { data: profiles } = await supabase
    .from('profiles')
    .select('*, purchases(count)')
    .order('created_at', { ascending: false })
    .limit(100)

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-black text-slate-900">Users</h1>
          <p className="text-slate-500 text-sm mt-1">{profiles?.length ?? 0} users</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">User</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Email</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Role</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Joined</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {profiles?.map(p => (
              <tr key={p.id} className="hover:bg-slate-50">
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {(p.full_name || p.email).slice(0, 2).toUpperCase()}
                    </div>
                    <span className="font-semibold text-sm text-slate-900">{p.full_name || '—'}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-sm text-slate-500">{p.email}</td>
                <td className="px-5 py-3.5">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                    p.role === 'admin' ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {p.role}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-sm text-slate-400">
                  {new Date(p.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
            {(!profiles || profiles.length === 0) && (
              <tr>
                <td colSpan={4} className="px-5 py-10 text-center text-slate-400 text-sm">
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
