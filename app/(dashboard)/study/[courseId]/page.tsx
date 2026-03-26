import { redirect, notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { StudyMode } from '@/components/exam/StudyMode'
import type { ExamSet, Question } from '@/lib/supabase/database.types'

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

  const { data: purchase } = await supabase
    .from('purchases')
    .select('*')
    .eq('user_id', user.id)
    .eq('course_id', courseId)
    .single()

  if (!purchase) redirect('/dashboard')

  // Get exam set — use first set if none specified
  let examSetId = setId
  if (!examSetId) {
    const { data: sets } = await supabase
      .from('exam_sets')
      .select('id')
      .eq('course_id', courseId)
      .order('title')
      .limit(1)
    examSetId = sets?.[0]?.id
  }

  if (!examSetId) notFound()

  const { data: examSetRaw } = await supabase
    .from('exam_sets')
    .select('*')
    .eq('id', examSetId)
    .single()

  const examSet = examSetRaw as ExamSet | null
  if (!examSet) notFound()

  const { data: questionsRaw } = await supabase
    .from('questions')
    .select('*')
    .in('id', examSet.question_ids)

  const questions = questionsRaw as Question[] | null
  const orderedQuestions = examSet.question_ids
    .map(id => questions?.find(q => q.id === id))
    .filter((q): q is Question => q != null)

  return (
    <div className="max-w-3xl mx-auto">
      <StudyMode examSet={examSet} questions={orderedQuestions} />
    </div>
  )
}
