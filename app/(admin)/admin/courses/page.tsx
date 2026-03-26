import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

export default async function AdminCoursesPage() {
  const supabase = await createClient()
  const { data: courses } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-black text-slate-900">Courses</h1>
          <p className="text-slate-500 text-sm mt-1">{courses?.length ?? 0} courses total</p>
        </div>
        <Link
          href="/admin/courses/new"
          className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold px-4 py-2.5 rounded-lg transition-colors"
        >
          + New Course
        </Link>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Course</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Slug</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Price</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Enrolled</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Status</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {courses?.map(c => (
              <tr key={c.id} className="hover:bg-slate-50">
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex-shrink-0"
                      style={{ background: c.brand_color }} />
                    <span className="font-bold text-sm text-slate-900">{c.title}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-sm text-slate-500 font-mono">{c.slug}</td>
                <td className="px-5 py-3.5 text-sm text-slate-700">${(c.price_cents / 100).toFixed(0)}</td>
                <td className="px-5 py-3.5 text-sm text-slate-700">{c.enrolled_count.toLocaleString()}</td>
                <td className="px-5 py-3.5">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                    c.is_published ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
                  }`}>
                    {c.is_published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex gap-2">
                    <Link href={`/admin/courses/${c.id}/edit`}
                      className="text-xs bg-sky-50 text-sky-600 font-semibold px-3 py-1.5 rounded-lg hover:bg-sky-100 transition-colors">
                      Edit
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
            {(!courses || courses.length === 0) && (
              <tr>
                <td colSpan={6} className="px-5 py-10 text-center text-slate-400 text-sm">
                  No courses yet. <Link href="/admin/courses/new" className="text-sky-500 font-semibold">Add one →</Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
