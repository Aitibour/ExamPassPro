import { createClient } from '@/lib/supabase/server'

export default async function AdminOverviewPage() {
  const supabase = await createClient()

  const [
    { count: usersCount },
    { count: coursesCount },
    { count: questionsCount },
    { count: purchasesCount },
    { data: recentAttempts },
  ] = await Promise.all([
    supabase.from('profiles').select('*', { count: 'exact', head: true }),
    supabase.from('courses').select('*', { count: 'exact', head: true }),
    supabase.from('questions').select('*', { count: 'exact', head: true }),
    supabase.from('purchases').select('*', { count: 'exact', head: true }),
    supabase
      .from('exam_attempts')
      .select('passed, score_pct')
      .not('completed_at', 'is', null),
  ])

  const passRate = recentAttempts?.length
    ? Math.round((recentAttempts.filter(a => a.passed).length / recentAttempts.length) * 100)
    : 0

  return (
    <div>
      <div className="mb-7 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-black text-slate-900">Admin Dashboard</h1>
          <p className="text-slate-500 text-sm mt-1">Manage courses, questions, and users</p>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-xs text-slate-400 flex items-center gap-2">
          <span className="text-amber-400">🔒</span>
          Restricted — <strong className="text-slate-200">role = admin</strong> only
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {[
          { label: 'Total Users', value: usersCount ?? 0 },
          { label: 'Courses', value: coursesCount ?? 0 },
          { label: 'Questions', value: (questionsCount ?? 0).toLocaleString() },
          { label: 'Purchases', value: purchasesCount ?? 0 },
          { label: 'Pass Rate', value: `${passRate}%` },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-2">{label}</div>
            <div className="text-2xl font-black text-slate-900">{value}</div>
          </div>
        ))}
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { href: '/admin/courses', title: 'Manage Courses', desc: 'Add, edit, publish courses', icon: '📚' },
          { href: '/admin/questions', title: 'Manage Questions', desc: 'Add questions, bulk import', icon: '❓' },
          { href: '/admin/exam-sets', title: 'Exam Sets', desc: 'Build mock exam sets', icon: '📝' },
          { href: '/admin/users', title: 'Users', desc: 'View users, grant admin', icon: '👥' },
        ].map(item => (
          <a
            key={item.href}
            href={item.href}
            className="bg-white border border-slate-200 rounded-xl p-5 hover:border-sky-300 hover:shadow-sm transition-all block"
          >
            <div className="text-2xl mb-3">{item.icon}</div>
            <div className="font-bold text-slate-900 text-sm">{item.title}</div>
            <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
