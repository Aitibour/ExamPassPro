import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import type { PurchaseWithCourse } from '@/lib/supabase/database.types'

const PLAN_BADGE: Record<string, { label: string; cls: string; desc: string }> = {
  starter:    { label: 'Starter',    cls: 'bg-slate-100 text-slate-600',    desc: '1 mock exam' },
  pro:        { label: 'Pro',        cls: 'bg-sky-100 text-sky-700',        desc: '3 mock exams + Study Mode' },
  platinum:   { label: 'Platinum',   cls: 'bg-violet-100 text-violet-700',  desc: '5 exams + AI Chat + Coaching' },
  all_access: { label: 'All-Access', cls: 'bg-amber-100 text-amber-700',    desc: '10 exams + full access' },
}

export default async function MyCoursesPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: purchasesRaw } = await supabase
    .from('purchases')
    .select('*, courses(*)')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  const purchases = purchasesRaw as PurchaseWithCourse[] | null

  return (
    <div>
      <div className="mb-7">
        <h1 className="text-xl font-black text-slate-900">My Courses</h1>
        <p className="text-slate-500 text-sm mt-1">
          {purchases?.length ?? 0} enrolled course{(purchases?.length ?? 0) !== 1 ? 's' : ''}
        </p>
      </div>

      {purchases && purchases.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {purchases.map(p => {
            const badge = PLAN_BADGE[p.plan] ?? PLAN_BADGE.starter
            return (
              <div key={p.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-all">
                {/* Course color header */}
                <div className="h-2" style={{ background: p.courses?.brand_color ?? '#0ea5e9' }} />
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-sm font-black flex-shrink-0"
                      style={{ background: p.courses?.brand_color ?? '#0ea5e9' }}
                    >
                      {(p.courses?.title ?? '??').slice(0, 2)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-black text-sm text-slate-900 leading-tight mb-1">
                        {p.courses?.title ?? 'Unknown'}
                      </div>
                      <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${badge.cls}`}>
                        {badge.label}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-4">{badge.desc}</p>

                  <div className="text-xs text-slate-400 mb-4">
                    Enrolled {new Date(p.created_at).toLocaleDateString()}
                  </div>

                  {/* Two action buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href={`/study/${p.course_id}`}
                      className="flex flex-col items-center gap-1 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 text-slate-700 py-3 rounded-xl text-center transition-all group"
                    >
                      <span className="text-lg">📖</span>
                      <span className="text-[11px] font-bold">Take Course</span>
                      <span className="text-[9px] text-slate-400">Study Mode</span>
                    </Link>
                    <Link
                      href={`/exam/${p.course_id}`}
                      className="flex flex-col items-center gap-1 bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl text-center transition-all shadow-sm shadow-sky-200 group"
                    >
                      <span className="text-lg">📝</span>
                      <span className="text-[11px] font-bold">Mock Exam</span>
                      <span className="text-[9px] text-sky-200">Timed · Graded</span>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-xl p-12 text-center">
          <div className="text-4xl mb-4">📚</div>
          <p className="text-slate-600 font-semibold mb-2">No courses yet</p>
          <p className="text-slate-400 text-sm mb-6">Purchase a course to start your exam prep journey.</p>
          <Link
            href="/courses"
            className="bg-sky-500 text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-sky-600 transition-colors"
          >
            Browse Courses
          </Link>
        </div>
      )}
    </div>
  )
}
