import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

// Plan prices in cents (matches lib/stripe.ts)
const PLAN_PRICE: Record<string, number> = {
  starter:    3900,
  pro:        9900,
  platinum:   9900,
  all_access: 19900,
}

const PLAN_META: Record<string, { label: string; cls: string; bar: string }> = {
  starter:    { label: 'Core',     cls: 'bg-slate-700 text-slate-300',    bar: 'bg-slate-500' },
  pro:        { label: 'Pro',      cls: 'bg-sky-900 text-sky-300',        bar: 'bg-sky-500' },
  platinum:   { label: 'Pro',      cls: 'bg-violet-900 text-violet-300',  bar: 'bg-violet-500' },
  all_access: { label: 'Elite',    cls: 'bg-amber-900 text-amber-300',    bar: 'bg-amber-500' },
}

export default async function AdminOverviewPage() {
  const supabase = await createClient()

  const [
    { data: purchases },
    { data: profiles },
    { data: attempts },
    { data: recentPurchases },
    { data: recentSignups },
  ] = await Promise.all([
    supabase.from('purchases').select('plan, created_at'),
    supabase.from('profiles').select('id, email, full_name, created_at'),
    supabase.from('exam_attempts').select('passed').not('completed_at', 'is', null),
    supabase
      .from('purchases')
      .select('plan, created_at, profiles(full_name, email), courses(title, brand_color)')
      .order('created_at', { ascending: false })
      .limit(10),
    supabase
      .from('profiles')
      .select('id, full_name, email, created_at')
      .order('created_at', { ascending: false })
      .limit(8),
  ])

  // ── Revenue metrics ──────────────────────────────────────────────────────
  const totalRevenueCents = (purchases ?? []).reduce(
    (sum, p) => sum + (PLAN_PRICE[p.plan] ?? 0), 0
  )

  const now = new Date()
  const thirtyDaysAgo = new Date(now); thirtyDaysAgo.setDate(now.getDate() - 30)
  const sevenDaysAgo  = new Date(now); sevenDaysAgo.setDate(now.getDate() - 7)

  const revenueLast30 = (purchases ?? [])
    .filter(p => new Date(p.created_at) >= thirtyDaysAgo)
    .reduce((sum, p) => sum + (PLAN_PRICE[p.plan] ?? 0), 0)

  const revenueLast7 = (purchases ?? [])
    .filter(p => new Date(p.created_at) >= sevenDaysAgo)
    .reduce((sum, p) => sum + (PLAN_PRICE[p.plan] ?? 0), 0)

  // ── Plan breakdown ──────────────────────────────────────────────────────
  const planCounts: Record<string, number> = {}
  for (const p of purchases ?? []) {
    planCounts[p.plan] = (planCounts[p.plan] ?? 0) + 1
  }

  const totalPurchases = purchases?.length ?? 0
  const plans = ['all_access', 'platinum', 'pro', 'starter'] // highest to lowest

  // ── User metrics ─────────────────────────────────────────────────────────
  const totalUsers  = profiles?.length ?? 0
  const newUsers30  = (profiles ?? []).filter(p => new Date(p.created_at) >= thirtyDaysAgo).length
  const activeUsers = new Set((purchases ?? []).map(p => (p as any).user_id)).size

  // ── Exam metrics ─────────────────────────────────────────────────────────
  const totalAttempts = attempts?.length ?? 0
  const passRate = totalAttempts
    ? Math.round((attempts!.filter(a => a.passed).length / totalAttempts) * 100)
    : 0

  return (
    <div className="space-y-8">

      {/* ── Header ── */}
      <div>
        <h1 className="text-xl font-black text-slate-100">Business Overview</h1>
        <p className="text-slate-500 text-sm mt-1">Revenue, users, and subscription analytics</p>
      </div>

      {/* ── Revenue KPIs ── */}
      <div>
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Revenue</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Total Revenue</div>
            <div className="text-3xl font-black text-emerald-400">
              ${(totalRevenueCents / 100).toLocaleString('en-US', { minimumFractionDigits: 0 })}
            </div>
            <div className="text-xs text-slate-500 mt-1">{totalPurchases} purchases total</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Last 30 Days</div>
            <div className="text-3xl font-black text-sky-400">
              ${(revenueLast30 / 100).toLocaleString('en-US', { minimumFractionDigits: 0 })}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {(purchases ?? []).filter(p => new Date(p.created_at) >= thirtyDaysAgo).length} purchases
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Last 7 Days</div>
            <div className="text-3xl font-black text-violet-400">
              ${(revenueLast7 / 100).toLocaleString('en-US', { minimumFractionDigits: 0 })}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {(purchases ?? []).filter(p => new Date(p.created_at) >= sevenDaysAgo).length} purchases
            </div>
          </div>
        </div>
      </div>

      {/* ── User KPIs ── */}
      <div>
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Users</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Users',     value: totalUsers,    color: 'text-sky-400' },
            { label: 'New (30 days)',    value: newUsers30,    color: 'text-emerald-400' },
            { label: 'Active Buyers',   value: activeUsers,   color: 'text-violet-400' },
            { label: 'Exam Pass Rate',  value: `${passRate}%`, color: 'text-amber-400' },
          ].map(({ label, value, color }) => (
            <div key={label} className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-2">{label}</div>
              <div className={`text-2xl font-black ${color}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Subscription breakdown ── */}
      <div>
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Subscriptions by Plan</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {plans.map(plan => {
            const count  = planCounts[plan] ?? 0
            const rev    = count * (PLAN_PRICE[plan] ?? 0)
            const meta   = PLAN_META[plan]
            return (
              <div key={plan} className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${meta.cls}`}>
                  {meta.label}
                </span>
                <div className="text-2xl font-black text-slate-100 mt-2">{count}</div>
                <div className="text-xs text-slate-500">subscribers</div>
                <div className="text-xs text-emerald-400 font-bold mt-1">
                  ${(rev / 100).toLocaleString()} revenue
                </div>
              </div>
            )
          })}
        </div>

        {/* Bar chart of plan distribution */}
        {totalPurchases > 0 && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <div className="text-xs font-bold text-slate-400 mb-3">Plan distribution</div>
            <div className="space-y-2.5">
              {plans.map(plan => {
                const count = planCounts[plan] ?? 0
                const pct   = totalPurchases > 0 ? Math.round((count / totalPurchases) * 100) : 0
                const meta  = PLAN_META[plan]
                return (
                  <div key={plan} className="flex items-center gap-3">
                    <div className="w-20 text-xs text-slate-400 flex-shrink-0">{meta.label}</div>
                    <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full transition-all ${meta.bar}`} style={{ width: `${pct}%` }} />
                    </div>
                    <div className="w-14 text-right text-xs text-slate-300 flex-shrink-0">
                      {count} <span className="text-slate-600">({pct}%)</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* ── Recent activity ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Recent purchases */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Recent Purchases</h2>
            <Link href="/admin/purchases" className="text-xs text-sky-400 hover:text-sky-300 font-semibold">
              View all →
            </Link>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            {(recentPurchases as any[])?.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 border-b border-slate-800 last:border-0 hover:bg-slate-800/50 transition-colors"
              >
                <div
                  className="w-7 h-7 rounded-lg flex-shrink-0"
                  style={{ background: p.courses?.brand_color ?? '#334155' }}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-slate-200 truncate">
                    {p.profiles?.full_name || p.profiles?.email || 'Unknown'}
                  </div>
                  <div className="text-xs text-slate-500 truncate">{p.courses?.title ?? '—'}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-sm font-black text-emerald-400">
                    ${((PLAN_PRICE[p.plan] ?? 0) / 100).toFixed(0)}
                  </div>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${PLAN_META[p.plan]?.cls ?? 'bg-slate-700 text-slate-400'}`}>
                    {PLAN_META[p.plan]?.label ?? p.plan}
                  </span>
                </div>
              </div>
            ))}
            {(!recentPurchases || recentPurchases.length === 0) && (
              <div className="px-4 py-8 text-center text-slate-500 text-sm">No purchases yet.</div>
            )}
          </div>
        </div>

        {/* Recent signups */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Recent Sign-ups</h2>
            <Link href="/admin/users" className="text-xs text-sky-400 hover:text-sky-300 font-semibold">
              View all →
            </Link>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            {(recentSignups as any[])?.map((u, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 border-b border-slate-800 last:border-0 hover:bg-slate-800/50 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-600 to-violet-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {(u.full_name || u.email || 'U').slice(0, 2).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-slate-200 truncate">{u.full_name || '—'}</div>
                  <div className="text-xs text-slate-500 truncate">{u.email}</div>
                </div>
                <div className="text-xs text-slate-500 flex-shrink-0">
                  {new Date(u.created_at).toLocaleDateString()}
                </div>
              </div>
            ))}
            {(!recentSignups || recentSignups.length === 0) && (
              <div className="px-4 py-8 text-center text-slate-500 text-sm">No users yet.</div>
            )}
          </div>
        </div>

      </div>

      {/* ── Quick nav ── */}
      <div>
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Manage</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { href: '/admin/courses',   icon: '📚', label: 'Courses' },
            { href: '/admin/questions', icon: '❓', label: 'Questions' },
            { href: '/admin/exam-sets', icon: '📝', label: 'Exam Sets' },
            { href: '/admin/users',     icon: '👥', label: 'Users' },
            { href: '/admin/purchases', icon: '💳', label: 'Purchases' },
          ].map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-sky-800 hover:bg-slate-800/70 transition-all flex items-center gap-2 group"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-bold text-slate-300 group-hover:text-sky-400 transition-colors">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}
