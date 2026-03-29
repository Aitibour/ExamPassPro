import { createClient } from '@/lib/supabase/server'
import type { ExamSetWithCourse } from '@/lib/supabase/database.types'

export default async function AdminExamSetsPage() {
  const supabase = await createClient()

  const { data: examSetsRaw } = await supabase
    .from('exam_sets')
    .select('*, courses(title)')
    .order('title')

  const examSets = examSetsRaw as unknown as ExamSetWithCourse[] | null

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl font-black text-slate-100">Exam Sets</h1>
        <p className="text-slate-500 text-sm mt-1">{examSets?.length ?? 0} exam sets</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-800">
            <tr>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Title</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Course</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Questions</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Duration</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {examSets?.map(s => (
              <tr key={s.id} className="hover:bg-slate-800/50 transition-colors">
                <td className="px-5 py-3.5 font-semibold text-sm text-slate-200">{s.title}</td>
                <td className="px-5 py-3.5 text-sm text-slate-400">{s.courses?.title ?? '—'}</td>
                <td className="px-5 py-3.5 text-sm text-slate-300">{s.question_ids.length}</td>
                <td className="px-5 py-3.5 text-sm text-slate-300">{s.duration_mins} min</td>
              </tr>
            ))}
            {(!examSets || examSets.length === 0) && (
              <tr>
                <td colSpan={4} className="px-5 py-10 text-center text-slate-500 text-sm">
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
