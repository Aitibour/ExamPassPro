import { createClient } from '@/lib/supabase/server'
import type { ExamSetWithCourse } from '@/lib/supabase/database.types'

export default async function AdminExamSetsPage() {
  const supabase = await createClient()

  const [{ data: examSetsRaw }] = await Promise.all([
    supabase.from('exam_sets').select('*, courses(title)').order('title'),
    supabase.from('courses').select('id, title').order('title'),
  ])

  const examSets = examSetsRaw as unknown as ExamSetWithCourse[] | null

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-black text-slate-900">Exam Sets</h1>
          <p className="text-slate-500 text-sm mt-1">{examSets?.length ?? 0} exam sets</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Title</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Course</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Questions</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Duration</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {examSets?.map(s => (
              <tr key={s.id} className="hover:bg-slate-50">
                <td className="px-5 py-3.5 font-semibold text-sm text-slate-900">{s.title}</td>
                <td className="px-5 py-3.5 text-sm text-slate-500">{s.courses?.title ?? '—'}</td>
                <td className="px-5 py-3.5 text-sm text-slate-700">{s.question_ids.length}</td>
                <td className="px-5 py-3.5 text-sm text-slate-700">{s.duration_mins} min</td>
              </tr>
            ))}
            {(!examSets || examSets.length === 0) && (
              <tr>
                <td colSpan={4} className="px-5 py-10 text-center text-slate-400 text-sm">
                  No exam sets yet. Add questions first, then create exam sets.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
