import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { PLAN_MOCK_LIMITS, EXAM_QUESTION_COUNT } from '@/lib/stripe'
import type { Course, Purchase, ExamSet } from '@/lib/supabase/database.types'

interface PageProps {
  params: Promise<{ courseId: string }>
}

export default async function ExamSelectPage({ params }: PageProps) {
  const { courseId } = await params
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const [courseRes, purchaseRes, examSetsRes, attemptsRes] = await Promise.all([
    supabase.from('courses').select('*').eq('id', courseId).single(),
    supabase.from('purchases').select('*').eq('user_id', user.id).eq('course_id', courseId).single(),
    supabase.from('exam_sets').select('*').eq('course_id', courseId).eq('type', 'mock').order('title'),
    supabase
      .from('exam_attempts')
      .select('exam_set_id, score_pct, passed, completed_at')
      .eq('user_id', user.id)
      .not('completed_at', 'is', null)
      .order('completed_at', { ascending: false }),
  ])

  const course = courseRes.data as Course | null
  const purchase = purchaseRes.data as Purchase | null
  const examSets = examSetsRes.data as ExamSet[] | null
  const attempts = attemptsRes.data as Array<{
    exam_set_id: string; score_pct: number | null; passed: boolean | null; completed_at: string
  }> | null

  if (!course) notFound()
  if (!purchase) redirect('/dashboard')

  const limit = PLAN_MOCK_LIMITS[purchase.plan] ?? 1

  // Best score per set
  const bestScores: Record<string, { score_pct: number; passed: boolean }> = {}
  for (const a of attempts ?? []) {
    const existing = bestScores[a.exam_set_id]
    if (!existing || (a.score_pct ?? 0) > existing.score_pct) {
      bestScores[a.exam_set_id] = { score_pct: a.score_pct ?? 0, passed: a.passed ?? false }
    }
  }

  const attemptCounts: Record<string, number> = {}
  for (const a of attempts ?? []) {
    attemptCounts[a.exam_set_id] = (attemptCounts[a.exam_set_id] ?? 0) + 1
  }

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
          <Link href="/dashboard" className="hover:text-slate-600">Dashboard</Link>
          <span>/</span>
          <Link href="/exam" className="hover:text-slate-600">Mock Exams</Link>
          <span>/</span>
          <span className="text-slate-600">{course.title}</span>
        </div>
        <h1 className="text-2xl font-black text-slate-900">Mock Exam — {course.title}</h1>
        <div className="flex items-center gap-4 mt-2">
          <p className="text-slate-500 text-sm capitalize">
            {purchase.plan} plan · {limit} exam{limit !== 1 ? 's' : ''} available · {EXAM_QUESTION_COUNT} questions each
          </p>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span>⏱ Timed</span>
            <span>·</span>
            <span>✓ Auto-graded</span>
            <span>·</span>
            <span>📊 Full corrections</span>
            <span>·</span>
            <span>🤖 AI tutor</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {examSets?.map((set, i) => {
          const isLocked = i >= limit
          const best = bestScores[set.id]
          const tries = attemptCounts[set.id] ?? 0

          return (
            <div
              key={set.id}
              className={`rounded-xl border p-6 ${
                isLocked
                  ? 'bg-slate-50 border-slate-200 opacity-60'
                  : 'bg-white border-slate-200 hover:border-sky-300 hover:shadow-md transition-all'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-black text-slate-900">{set.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {EXAM_QUESTION_COUNT} questions · {set.duration_mins} min
                  </p>
                </div>
                {isLocked ? (
                  <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 text-sm">🔒</div>
                ) : (
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black text-white"
                    style={{ background: course.brand_color }}
                  >
                    {i + 1}
                  </div>
                )}
              </div>

              {/* Attempt history badge */}
              {!isLocked && (
                <div className="mb-4 flex items-center gap-2">
                  {best ? (
                    <>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        best.passed ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'
                      }`}>
                        Best: {Math.round(best.score_pct)}% {best.passed ? '✓' : '✗'}
                      </span>
                      <span className="text-xs text-slate-400">{tries} attempt{tries !== 1 ? 's' : ''}</span>
                    </>
                  ) : (
                    <span className="text-xs text-slate-400">Not attempted yet</span>
                  )}
                </div>
              )}

              {isLocked ? (
                <Link
                  href={`/courses/${course.slug}`}
                  className="w-full block py-2.5 text-center text-sm font-bold border border-slate-200 rounded-lg text-slate-400 hover:border-sky-300 hover:text-sky-500 transition-colors"
                >
                  Upgrade to unlock
                </Link>
              ) : (
                <div className="space-y-2">
                  <Link
                    href={`/exam/${courseId}/${set.id}`}
                    className="w-full block bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold py-2.5 rounded-lg text-center transition-colors"
                  >
                    {best ? '🔄 Retry Exam' : '▶ Start Exam'}
                  </Link>
                  <Link
                    href={`/study/${courseId}`}
                    className="w-full block border border-slate-200 hover:bg-slate-50 text-slate-600 text-sm font-bold py-2.5 rounded-lg text-center transition-colors"
                  >
                    📖 Practice Mode
                  </Link>
                </div>
              )}
            </div>
          )
        })}

        {(!examSets || examSets.length === 0) && (
          <div className="col-span-full bg-white border border-slate-200 rounded-xl p-10 text-center text-slate-400 text-sm">
            No exam sets available yet for this course.
          </div>
        )}
      </div>
    </div>
  )
}
