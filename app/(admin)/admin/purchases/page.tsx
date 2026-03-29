import { createClient } from '@/lib/supabase/server'

export default async function AdminPurchasesPage() {
  const supabase = await createClient()

  const { data: purchasesRaw } = await supabase
    .from('purchases')
    .select('*, profiles(full_name, email), courses(title, brand_color)')
    .order('created_at', { ascending: false })
    .limit(200)

  const purchases = purchasesRaw as unknown as Array<{
    id: string
    user_id: string
    course_id: string
    plan: string
    stripe_session_id: string
    created_at: string
    profiles: { full_name: string; email: string } | null
    courses: { title: string; brand_color: string } | null
  }> | null

  const planColors: Record<string, string> = {
    starter: 'bg-slate-700 text-slate-300',
    pro: 'bg-sky-900 text-sky-300',
    platinum: 'bg-violet-900 text-violet-300',
    all_access: 'bg-amber-900 text-amber-300',
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl font-black text-slate-100">Purchases</h1>
        <p className="text-slate-400 text-sm mt-1">{purchases?.length ?? 0} total purchases</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-800">
            <tr>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">User</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Course</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Plan</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Date</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Stripe ID</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {purchases?.map(p => (
              <tr key={p.id} className="hover:bg-slate-800/50 transition-colors">
                <td className="px-5 py-3.5">
                  <div className="font-semibold text-sm text-slate-200">{p.profiles?.full_name || '—'}</div>
                  <div className="text-xs text-slate-500">{p.profiles?.email}</div>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: p.courses?.brand_color }} />
                    <span className="text-sm text-slate-300">{p.courses?.title ?? '—'}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full capitalize ${planColors[p.plan] ?? 'bg-slate-700 text-slate-300'}`}>
                    {p.plan}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-sm text-slate-400">
                  {new Date(p.created_at).toLocaleDateString()}
                </td>
                <td className="px-5 py-3.5 text-xs text-slate-600 font-mono truncate max-w-[140px]">
                  {p.stripe_session_id}
                </td>
              </tr>
            ))}
            {(!purchases || purchases.length === 0) && (
              <tr>
                <td colSpan={5} className="px-5 py-10 text-center text-slate-500 text-sm">
                  No purchases yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
