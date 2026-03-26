import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const [{ data: profile }, { data: purchases }, { data: attempts }] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', user.id).single(),
    supabase.from('purchases').select('*, courses(*)').eq('user_id', user.id),
    supabase
      .from('exam_attempts')
      .select('*, exam_sets(title)')
      .eq('user_id', user.id)
      .not('completed_at', 'is', null)
      .order('started_at', { ascending: false })
      .limit(5),
  ])

  const avgScore = attempts?.length
    ? Math.round(attempts.reduce((s, a) => s + (a.score_pct ?? 0), 0) / attempts.length)
    : 0

  return (
    <div>
      <div className="mb-7">
        <h1 className="text-xl font-black text-slate-900">
          Welcome back, {profile?.full_name || user.email?.split('@')[0]} 👋
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          {purchases?.length ?? 0} active course{(purchases?.length ?? 0) !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Exams Taken', value: attempts?.length ?? 0 },
          { label: 'Avg Score', value: attempts?.length ? `${avgScore}%` : '—' },
          { label: 'Questions Answered', value: '—' },
          { label: 'Active Courses', value: purchases?.length ?? 0 },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-2">{label}</div>
            <div className="text-3xl font-black text-slate-900">{value}</div>
          </div>
        ))}
      </div>

      {/* My courses */}
      <h2 className="text-base font-black text-slate-900 mb-3">My Courses</h2>
      {purchases && purchases.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {purchases.map(p => {
            const course = p.courses as any
            return (
              <div key={p.id} className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                    style={{ background: course?.brand_color ?? '#0ea5e9' }}
                  >
                    {(course?.title ?? '??').slice(0, 2)}
                  </div>
                  <div>
                    <div className="font-black text-sm text-slate-900">{course?.title ?? 'Unknown'}</div>
                    <div className="text-xs text-slate-500 capitalize">{p.plan} plan</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/exam/${course?.id}`}
                    className="flex-1 bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold py-2 rounded-lg text-center transition-colors"
                  >
                    Take Exam
                  </Link>
                  <Link
                    href={`/study/${course?.id}`}
                    className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-bold py-2 rounded-lg text-center transition-colors"
                  >
                    Study
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-xl p-10 text-center mb-8">
          <p className="text-slate-400 text-sm mb-4">No courses yet. Purchase a course to get started.</p>
          <Link href="/#pricing" className="bg-sky-500 text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-sky-600 transition-colors">
            Browse Courses
          </Link>
        </div>
      )}

      {/* Recent results */}
      <h2 className="text-base font-black text-slate-900 mb-3">Recent Results</h2>
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        {attempts && attempts.length > 0 ? (
          attempts.map(a => (
            <div key={a.id} className="flex items-center gap-4 px-5 py-3.5 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
              <span className={`text-sm font-black px-2.5 py-1 rounded-lg min-w-[52px] text-center ${
                a.passed ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'
              }`}>
                {a.score_pct != null ? `${Math.round(a.score_pct)}%` : '—'}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-slate-900 truncate">{(a.exam_sets as any)?.title ?? 'Unknown Exam'}</div>
                <div className="text-xs text-slate-400">{a.passed ? 'Passed' : 'Failed'} · {a.mode} mode</div>
              </div>
              <Link href={`/results/${a.id}`} className="text-xs text-sky-500 font-semibold flex-shrink-0">
                Review →
              </Link>
            </div>
          ))
        ) : (
          <div className="px-5 py-8 text-center text-slate-400 text-sm">No exam results yet.</div>
        )}
      </div>
    </div>
  )
}
