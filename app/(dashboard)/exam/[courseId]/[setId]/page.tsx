import { redirect, notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { ExamEngine } from '@/components/exam/ExamEngine'
import { PLAN_MOCK_LIMITS, EXAM_QUESTION_COUNT } from '@/lib/stripe'
import type { Purchase, ExamSet, Question } from '@/lib/supabase/database.types'

interface PageProps {
  params: Promise<{ courseId: string; setId: string }>
}

export default async function ExamPage({ params }: PageProps) {
  const { courseId, setId } = await params
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const [purchaseRes, examSetRes, allSetsRes] = await Promise.all([
    supabase.from('purchases').select('*').eq('user_id', user.id).eq('course_id', courseId).single(),
    supabase.from('exam_sets').select('*').eq('id', setId).single(),
    supabase.from('exam_sets').select('id').eq('course_id', courseId).eq('type', 'mock').order('title'),
  ])

  const purchase = purchaseRes.data as Purchase | null
  const examSet = examSetRes.data as ExamSet | null
  const allSets = allSetsRes.data as { id: string }[] | null

  if (!purchase) redirect('/dashboard')
  if (!examSet) notFound()

  // Enforce plan limit
  const limit = PLAN_MOCK_LIMITS[purchase.plan] ?? 1
  const setIndex = (allSets ?? []).findIndex(s => s.id === setId)
  if (setIndex >= limit) redirect(`/exam/${courseId}`)

  // Fetch questions in order
  const { data: questionsRaw } = await supabase
    .from('questions')
    .select('*')
    .in('id', examSet.question_ids)

  const questions = questionsRaw as Question[] | null

  // Always exactly 60 questions per exam — slice to enforce the cap
  const orderedQuestions = examSet.question_ids
    .map(id => questions?.find(q => q.id === id))
    .filter((q): q is Question => q != null)
    .slice(0, EXAM_QUESTION_COUNT)

  return (
    <div className="max-w-6xl mx-auto">
      <ExamEngine examSet={examSet} questions={orderedQuestions} courseId={courseId} />
    </div>
  )
}
