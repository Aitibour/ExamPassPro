import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // Verify admin role
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single()
  if (profile?.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const { courseId, questions } = await req.json()

  if (!courseId || !Array.isArray(questions) || questions.length === 0) {
    return NextResponse.json({ error: 'Missing courseId or questions' }, { status: 400 })
  }

  const VALID_ANSWERS = new Set(['A', 'B', 'C', 'D'])

  const rows = questions
    .filter((q: any) =>
      typeof (q.question ?? q.body) === 'string' &&
      (q.question ?? q.body).length > 0 &&
      (q.question ?? q.body).length <= 5000 &&
      VALID_ANSWERS.has(q.correct) &&
      q.options && typeof q.options === 'object'
    )
    .map((q: any) => ({
      course_id: courseId,
      body: (q.question ?? q.body).slice(0, 5000),
      options: q.options,
      correct: q.correct,
      explanation: (q.explanation ?? '').slice(0, 5000),
      domain: (q.domain ?? '').slice(0, 200),
    }))

  const { error } = await supabase.from('questions').insert(rows)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ count: rows.length })
}
