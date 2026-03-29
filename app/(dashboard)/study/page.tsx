import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import type { PurchaseWithCourse } from '@/lib/supabase/database.types'

export default async function StudyIndexPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: purchasesRaw } = await supabase
    .from('purchases')
    .select('*, courses(*)')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  const purchases = purchasesRaw as PurchaseWithCourse[] | null

  // If only one course, redirect directly
  if (purchases?.length === 1) {
    redirect(`/study/${purchases[0].course_id}`)
  }

  return (
    <div>
      <div className="mb-7">
        <h1 className="text-xl font-black text-slate-900">Study Mode</h1>
        <p className="text-slate-500 text-sm mt-1">Select a dump to study with instant feedback</p>
      </div>

      {purchases && purchases.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {purchases.map(p => (
            <Link
              key={p.id}
              href={`/study/${p.course_id}`}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-sky-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-sm font-black flex-shrink-0"
                  style={{ background: p.courses?.brand_color ?? '#0ea5e9' }}
                >
                  {(p.courses?.title ?? '??').slice(0, 2)}
                </div>
                <div className="min-w-0">
                  <div className="font-black text-sm text-slate-900 leading-tight group-hover:text-sky-600 transition-colors">
                    {p.courses?.title ?? 'Unknown'}
                  </div>
                  <div className="text-xs text-slate-500 capitalize mt-0.5">{p.plan} plan</div>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Study with explanations</span>
                <span className="text-sky-500 font-semibold group-hover:translate-x-1 transition-transform inline-block">Study →</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-xl p-12 text-center">
          <div className="text-4xl mb-4">📖</div>
          <p className="text-slate-600 font-semibold mb-2">No dumps enrolled</p>
          <p className="text-slate-400 text-sm mb-6">Purchase a dump to access study mode.</p>
          <Link
            href="/courses"
            className="bg-sky-500 text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-sky-600 transition-colors"
          >
            Browse Dumps
          </Link>
        </div>
      )}
    </div>
  )
}
