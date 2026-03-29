import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { StudyMode } from '@/components/exam/StudyMode'
import { PLAN_PRACTICE_LIMITS, PLAN_QUESTION_LIMITS } from '@/lib/stripe'
import type { ExamSet, Question, Purchase } from '@/lib/supabase/database.types'

interface PageProps {
  params: Promise<{ courseId: string }>
  searchParams: Promise<{ setId?: string }>
}

export default async function StudyPage({ params, searchParams }: PageProps) {
  const { courseId } = await params
  const { setId } = await searchParams

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: purchaseRaw } = await supabase
    .from('purchases')
    .select('*')
    .eq('user_id', user.id)
    .eq('course_id', courseId)
    .single()

  const purchase = purchaseRaw as Purchase | null
  if (!purchase) redirect('/dashboard')

  const plan             = purchase.plan
  const practiceLimit    = PLAN_PRACTICE_LIMITS[plan] ?? 1
  const questionLimit    = PLAN_QUESTION_LIMITS[plan] ?? 60

  // Practice exam sets only — mock sets are never shown in study mode
  const { data: allSetsRaw } = await supabase
    .from('exam_sets')
    .select('id, title')
    .eq('course_id', courseId)
    .eq('type', 'practice')
    .order('title')

  const allSets = (allSetsRaw ?? []) as { id: string; title: string }[]

  // Resolve which set to show
  let targetSetId = setId ?? allSets[0]?.id
  if (!targetSetId) notFound()

  // Enforce practice exam limit — check set index
  const setIndex = allSets.findIndex(s => s.id === targetSetId)
  if (setIndex === -1) notFound()

  if (setIndex >= practiceLimit) {
    // Redirect to the exam page with an upgrade prompt
    redirect(`/exam/${courseId}?locked=practice`)
  }

  const { data: examSetRaw } = await supabase
    .from('exam_sets')
    .select('*')
    .eq('id', targetSetId)
    .single()

  const examSet = examSetRaw as ExamSet | null
  if (!examSet) notFound()

  const { data: questionsRaw } = await supabase
    .from('questions')
    .select('*')
    .in('id', examSet.question_ids)

  const questions = questionsRaw as Question[] | null

  // Enforce question limit per plan (free = 10, starter = 60, pro = 180, all_access = 400)
  const orderedQuestions = examSet.question_ids
    .map(id => questions?.find(q => q.id === id))
    .filter((q): q is Question => q != null)
    .slice(0, questionLimit)

  return (
    <div className="max-w-3xl mx-auto">
      {/* Practice set switcher (show locked sets) */}
      {allSets.length > 1 && (
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          {allSets.map((s, i) => {
            const isLocked = i >= practiceLimit
            const isCurrent = s.id === targetSetId
            if (isLocked) {
              return (
                <Link
                  key={s.id}
                  href={`/courses/${courseId}`}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-200 text-slate-400 bg-slate-50 opacity-60 cursor-not-allowed"
                  title="Upgrade to unlock"
                >
                  🔒 {s.title}
                </Link>
              )
            }
            return (
              <Link
                key={s.id}
                href={`/study/${courseId}?setId=${s.id}`}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                  isCurrent
                    ? 'bg-sky-500 border-sky-500 text-white'
                    : 'border-slate-200 text-slate-600 hover:border-sky-300 hover:text-sky-600'
                }`}
              >
                {s.title}
              </Link>
            )
          })}
        </div>
      )}

      <StudyMode
        examSet={examSet}
        questions={orderedQuestions}
        questionLimit={questionLimit}
        totalInSet={examSet.question_ids.length}
      />
    </div>
  )
}
