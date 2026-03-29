import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { examSetId, answers } = await req.json()

  if (!examSetId || typeof answers !== 'object') {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  // Fetch correct answers from DB — never trust client-submitted answers
  const { data: examSet } = await supabase
    .from('exam_sets')
    .select('question_ids')
    .eq('id', examSetId)
    .single()

  if (!examSet) return NextResponse.json({ error: 'Exam set not found' }, { status: 404 })

  const { data: questions } = await supabase
    .from('questions')
    .select('id, correct, domain')
    .in('id', examSet.question_ids)

  if (!questions || questions.length === 0) {
    return NextResponse.json({ error: 'Questions not found' }, { status: 404 })
  }

  const total = questions.length
  const correct = questions.filter(q => answers[q.id] === q.correct).length
  const scorePct = Math.round((correct / total) * 100)
  const passed = scorePct >= 70

  const { data: attempt, error } = await supabase
    .from('exam_attempts')
    .insert({
      user_id: user.id,
      exam_set_id: examSetId,
      answers,
      score_pct: scorePct,
      passed,
      mode: 'exam',
      completed_at: new Date().toISOString(),
    })
    .select('id')
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ attemptId: attempt.id })
}
