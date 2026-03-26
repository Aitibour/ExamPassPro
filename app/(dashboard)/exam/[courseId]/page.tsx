import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { PLAN_EXAM_LIMITS } from '@/lib/stripe'
import type { Course, Purchase, ExamSet } from '@/lib/supabase/database.types'

interface PageProps {
  params: Promise<{ courseId: string }>
}

export default async function ExamSelectPage({ params }: PageProps) {
  const { courseId } = await params
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const [courseRes, purchaseRes, examSetsRes] = await Promise.all([
    supabase.from('courses').select('*').eq('id', courseId).single(),
    supabase.from('purchases').select('*').eq('user_id', user.id).eq('course_id', courseId).single(),
    supabase.from('exam_sets').select('*').eq('course_id', courseId).order('title'),
  ])

  const course = courseRes.data as Course | null
  const purchase = purchaseRes.data as Purchase | null
  const examSets = examSetsRes.data as ExamSet[] | null

  if (!course) notFound()
  if (!purchase) redirect('/dashboard')

  const limit = PLAN_EXAM_LIMITS[purchase.plan] ?? 1

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
          <Link href="/dashboard" className="hover:text-slate-600">Dashboard</Link>
          <span>/</span>
          <span className="text-slate-600">{course.title}</span>
        </div>
        <h1 className="text-2xl font-black text-slate-900">Choose Mock Exam</h1>
        <p className="text-slate-500 text-sm mt-1">
          {purchase.plan.charAt(0).toUpperCase() + purchase.plan.slice(1)} plan · {limit} exam{limit !== 1 ? 's' : ''} available
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {examSets?.map((set, i) => {
          const isLocked = i >= limit
          return (
            <div
              key={set.id}
              className={`rounded-xl border p-6 ${isLocked ? 'bg-slate-50 border-slate-200 opacity-60' : 'bg-white border-slate-200 hover:border-sky-300 hover:shadow-md transition-all'}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-black text-slate-900">{set.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {set.question_ids.length} questions · {set.duration_mins} min
                  </p>
                </div>
                {isLocked ? (
                  <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 text-sm">🔒</div>
                ) : (
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black text-white"
                    style={{ background: course.brand_color }}>
                    {i + 1}
                  </div>
                )}
              </div>

              {isLocked ? (
                <Link
                  href={`/courses/${course.slug}`}
                  className="w-full block py-2.5 text-center text-sm font-bold border border-slate-200 rounded-lg text-slate-400 hover:border-sky-300 hover:text-sky-500 transition-colors"
                >
                  Upgrade to unlock
                </Link>
              ) : (
                <div className="flex gap-2">
                  <Link
                    href={`/exam/${courseId}/${set.id}`}
                    className="flex-1 bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold py-2.5 rounded-lg text-center transition-colors"
                  >
                    Start Exam
                  </Link>
                  <Link
                    href={`/study/${courseId}?setId=${set.id}`}
                    className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-600 text-sm font-bold py-2.5 rounded-lg text-center transition-colors"
                  >
                    Study Mode
                  </Link>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
