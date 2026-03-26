import { redirect, notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { ExamEngine } from '@/components/exam/ExamEngine'
import { PLAN_EXAM_LIMITS } from '@/lib/stripe'

interface PageProps {
  params: Promise<{ courseId: string; setId: string }>
}

export default async function ExamPage({ params }: PageProps) {
  const { courseId, setId } = await params
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const [{ data: purchase }, { data: examSet }, { data: allSets }] = await Promise.all([
    supabase.from('purchases').select('*').eq('user_id', user.id).eq('course_id', courseId).single(),
    supabase.from('exam_sets').select('*').eq('id', setId).single(),
    supabase.from('exam_sets').select('id').eq('course_id', courseId).order('title'),
  ])

  if (!purchase) redirect('/dashboard')
  if (!examSet) notFound()

  // Enforce plan limit
  const limit = PLAN_EXAM_LIMITS[purchase.plan] ?? 1
  const setIndex = (allSets ?? []).findIndex(s => s.id === setId)
  if (setIndex >= limit) redirect(`/exam/${courseId}`)

  // Fetch questions
  const { data: questions } = await supabase
    .from('questions')
    .select('*')
    .in('id', examSet.question_ids)

  const orderedQuestions = (examSet.question_ids as string[])
    .map(id => questions?.find(q => q.id === id))
    .filter(Boolean) as any[]

  return (
    <div className="max-w-6xl mx-auto">
      <ExamEngine examSet={examSet} questions={orderedQuestions} courseId={courseId} />
    </div>
  )
}
