import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import type { Course } from '@/lib/supabase/database.types'

export default async function AdminCoursesPage() {
  const supabase = await createClient()
  const { data: coursesRaw } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false })

  const courses = coursesRaw as Course[] | null

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-black text-slate-100">Courses</h1>
          <p className="text-slate-500 text-sm mt-1">{courses?.length ?? 0} courses total</p>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-800">
            <tr>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Course</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Slug</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Price</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Enrolled</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {courses?.map(c => (
              <tr key={c.id} className="hover:bg-slate-800/50 transition-colors">
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex-shrink-0"
                      style={{ background: c.brand_color }} />
                    <span className="font-bold text-sm text-slate-200">{c.title}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-sm text-slate-500 font-mono">{c.slug}</td>
                <td className="px-5 py-3.5 text-sm text-slate-300">${(c.price_cents / 100).toFixed(0)}</td>
                <td className="px-5 py-3.5 text-sm text-slate-300">{c.enrolled_count.toLocaleString()}</td>
                <td className="px-5 py-3.5">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                    c.is_published ? 'bg-green-900 text-green-400' : 'bg-amber-900 text-amber-400'
                  }`}>
                    {c.is_published ? 'Published' : 'Draft'}
                  </span>
                </td>
              </tr>
            ))}
            {(!courses || courses.length === 0) && (
              <tr>
                <td colSpan={5} className="px-5 py-10 text-center text-slate-500 text-sm">
                  No courses yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
