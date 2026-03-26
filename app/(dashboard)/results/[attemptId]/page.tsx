import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { AIChatWidget } from '@/components/chat/AIChatWidget'
import type { ExamAttempt, Question, ExamSet } from '@/lib/supabase/database.types'

interface PageProps {
  params: Promise<{ attemptId: string }>
}

interface AttemptWithSet extends ExamAttempt {
  exam_sets: (ExamSet & { courses: { title: string } | null }) | null
}

export default async function ResultsPage({ params }: PageProps) {
  const { attemptId } = await params
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: attemptRaw } = await supabase
    .from('exam_attempts')
    .select('*, exam_sets(title, course_id, courses(title))')
    .eq('id', attemptId)
    .eq('user_id', user.id)
    .single()

  if (!attemptRaw) notFound()
  const attempt = attemptRaw as unknown as AttemptWithSet

  const examSet = attempt.exam_sets
  const course = examSet?.courses

  // Fetch questions for this attempt
  const { data: examSetData } = await supabase
    .from('exam_sets')
    .select('question_ids')
    .eq('id', attempt.exam_set_id)
    .single()

  const { data: questionsRaw } = await supabase
    .from('questions')
    .select('*')
    .in('id', (examSetData as ExamSet | null)?.question_ids ?? [])

  const questions = (questionsRaw as Question[] | null) ?? []

  const questionMap = new Map(questions.map(q => [q.id, q]))
  const answers = attempt.answers as Record<string, string>

  // Domain breakdown
  const domainStats: Record<string, { correct: number; total: number }> = {}
  questions.forEach(q => {
    if (!domainStats[q.domain]) domainStats[q.domain] = { correct: 0, total: 0 }
    domainStats[q.domain].total++
    if (answers[q.id] === q.correct) domainStats[q.domain].correct++
  })

  const weakDomains = Object.entries(domainStats)
    .filter(([, s]) => s.total > 0 && s.correct / s.total < 0.7)
    .map(([d]) => d)

  const wrongQuestions = questions.filter(q => answers[q.id] !== q.correct)
  const wrongDomains = [...new Set(wrongQuestions.map(q => q.domain).filter(Boolean))]

  const score = attempt.score_pct ?? 0
  const passed = attempt.passed ?? false

  const initialMessage = `I've analyzed your exam results for **${examSet?.title ?? 'this exam'}**.

**Score: ${Math.round(score)}% — ${passed ? 'PASSED ✓' : 'FAILED ✗'}**

${weakDomains.length > 0
  ? `Your weakest domains are: **${weakDomains.slice(0, 3).join(', ')}**. I recommend focusing your study time here.`
  : 'Great performance across all domains!'
}

You got **${wrongQuestions.length} questions wrong** out of ${questions.length}. Ask me to explain any concept and I'll help you understand it!`

  return (
    <div>
      <div className="flex items-center gap-2 text-sm text-slate-400 mb-5">
        <Link href="/dashboard" className="hover:text-slate-600">Dashboard</Link>
        <span>/</span>
        <span className="text-slate-600">Results</span>
      </div>

      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-slate-900">{examSet?.title ?? 'Exam Results'}</h1>
          <p className="text-slate-500 text-sm mt-1">{course?.title ?? ''}</p>
        </div>
        <div className="text-right">
          <div className={`text-5xl font-black ${passed ? 'text-green-600' : 'text-red-500'}`}>
            {Math.round(score)}%
          </div>
          <div className={`text-sm font-bold mt-1 ${passed ? 'text-green-600' : 'text-red-500'}`}>
            {passed ? '✓ PASSED' : '✗ FAILED'}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: results breakdown */}
        <div className="lg:col-span-2 space-y-6">
          {/* Summary cards */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Score', value: `${Math.round(score)}%` },
              { label: 'Correct', value: `${questions.length - wrongQuestions.length}/${questions.length}` },
              { label: 'Wrong', value: wrongQuestions.length },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white border border-slate-200 rounded-xl p-5 text-center">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1">{label}</div>
                <div className="text-2xl font-black text-slate-900">{value}</div>
              </div>
            ))}
          </div>

          {/* Domain breakdown */}
          {Object.keys(domainStats).length > 0 && (
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="font-black text-slate-900 mb-4">Domain Performance</h2>
              <div className="space-y-3">
                {Object.entries(domainStats).map(([domain, stats]) => {
                  const pct = Math.round((stats.correct / stats.total) * 100)
                  return (
                    <div key={domain}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-slate-700 truncate mr-2">{domain || 'General'}</span>
                        <span className={`font-bold flex-shrink-0 ${pct >= 70 ? 'text-green-600' : 'text-red-500'}`}>
                          {pct}% ({stats.correct}/{stats.total})
                        </span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${pct >= 70 ? 'bg-green-500' : 'bg-red-400'}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Answer review */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100">
              <h2 className="font-black text-slate-900">Answer Review</h2>
            </div>
            <div className="divide-y divide-slate-50">
              {((examSetData as ExamSet | null)?.question_ids ?? []).slice(0, 20).map((qId, i) => {
                const q = questionMap.get(qId)
                if (!q) return null
                const userAnswer = answers[qId]
                const isCorrect = userAnswer === q.correct
                return (
                  <div key={qId} className="px-6 py-4">
                    <div className="flex items-start gap-3">
                      <span className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                        isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'
                      }`}>
                        {isCorrect ? '✓' : '✗'}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-800 mb-2">{i + 1}. {q.body}</p>
                        {!isCorrect && (
                          <div className="text-xs space-y-1">
                            <span className="text-red-500">Your answer: {userAnswer ?? 'Not answered'}</span>
                            <span className="text-green-600 block">
                              Correct: {q.correct}. {q.options[q.correct as keyof typeof q.options]}
                            </span>
                          </div>
                        )}
                        {q.explanation && !isCorrect && (
                          <p className="text-xs text-slate-500 mt-2 leading-relaxed">{q.explanation}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right: AI chat */}
        <div className="lg:col-span-1">
          <AIChatWidget
            context={{ score, passed, weakDomains, wrongDomains, wrongCount: wrongQuestions.length }}
            initialMessage={initialMessage}
          />
        </div>
      </div>
    </div>
  )
}
