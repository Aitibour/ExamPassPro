import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

interface SubmitBody {
  examSetId: string
  answers: Record<string, string>
  questions: Array<{ id: string; correct: string; domain: string }>
}

export async function POST(req: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body: SubmitBody = await req.json()
  const { examSetId, answers, questions } = body

  const total = questions.length
  const correct = questions.filter(q => answers[q.id] === q.correct).length
  const scorePct = total > 0 ? Math.round((correct / total) * 100) : 0
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
