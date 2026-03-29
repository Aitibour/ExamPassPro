import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import type { ExamAttemptWithSet } from '@/lib/supabase/database.types'

export default async function MyResultsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: attemptsRaw } = await supabase
    .from('exam_attempts')
    .select('*, exam_sets(title, courses(title))')
    .eq('user_id', user.id)
    .not('completed_at', 'is', null)
    .order('started_at', { ascending: false })

  const attempts = attemptsRaw as unknown as (ExamAttemptWithSet & {
    exam_sets: { title: string; courses: { title: string } | null } | null
  })[] | null

  const passCount = attempts?.filter(a => a.passed).length ?? 0
  const avgScore = attempts?.length
    ? Math.round(attempts.reduce((s, a) => s + (a.score_pct ?? 0), 0) / attempts.length)
    : 0

  return (
    <div>
      <div className="mb-7">
        <h1 className="text-xl font-black text-slate-900">My Results</h1>
        <p className="text-slate-500 text-sm mt-1">
          {attempts?.length ?? 0} exam{(attempts?.length ?? 0) !== 1 ? 's' : ''} taken
        </p>
      </div>

      {attempts && attempts.length > 0 && (
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Exams Taken', value: attempts.length },
            { label: 'Avg Score', value: `${avgScore}%` },
            { label: 'Pass Rate', value: `${Math.round((passCount / attempts.length) * 100)}%` },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-2">{label}</div>
              <div className="text-3xl font-black text-slate-900">{value}</div>
            </div>
          ))}
        </div>
      )}

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        {attempts && attempts.length > 0 ? (
          attempts.map(a => (
            <div
              key={a.id}
              className="flex items-center gap-4 px-5 py-4 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors"
            >
              <span className={`text-sm font-black px-3 py-1.5 rounded-lg min-w-[56px] text-center flex-shrink-0 ${
                a.passed ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'
              }`}>
                {a.score_pct != null ? `${Math.round(a.score_pct)}%` : '—'}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-slate-900 truncate">
                  {(a.exam_sets as any)?.title ?? 'Unknown Exam'}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {(a.exam_sets as any)?.courses?.title ?? ''} ·{' '}
                  {a.passed ? 'Passed' : 'Failed'} · {a.mode} mode ·{' '}
                  {new Date(a.started_at).toLocaleDateString()}
                </div>
              </div>
              <Link
                href={`/results/${a.id}`}
                className="text-xs text-sky-500 font-semibold flex-shrink-0 hover:text-sky-700 transition-colors"
              >
                Review →
              </Link>
            </div>
          ))
        ) : (
          <div className="px-5 py-12 text-center">
            <div className="text-4xl mb-4">📊</div>
            <p className="text-slate-500 text-sm mb-4">No exam results yet.</p>
            <Link
              href="/exam"
              className="bg-sky-500 text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-sky-600 transition-colors"
            >
              Take Your First Exam
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
