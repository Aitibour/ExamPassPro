import { createClient } from '@/lib/supabase/server'
import { BulkImportWidget } from '@/components/admin/BulkImportWidget'

export default async function AdminQuestionsPage() {
  const supabase = await createClient()

  const [{ data: questions }, { data: courses }] = await Promise.all([
    supabase.from('questions').select('*, courses(title)').order('created_at', { ascending: false }).limit(50),
    supabase.from('courses').select('id, title').order('title'),
  ])

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-black text-slate-900">Questions</h1>
          <p className="text-slate-500 text-sm mt-1">Manage exam question bank</p>
        </div>
      </div>

      {/* Bulk import */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6">
        <h2 className="font-bold text-slate-900 mb-4">Bulk Import</h2>
        <BulkImportWidget courses={courses ?? []} />
      </div>

      {/* Questions table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center">
          <span className="font-bold text-slate-900 text-sm">Recent Questions (last 50)</span>
        </div>
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Question</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Course</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Domain</th>
              <th className="text-left px-5 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">Correct</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {questions?.map(q => (
              <tr key={q.id} className="hover:bg-slate-50">
                <td className="px-5 py-3.5 text-sm text-slate-700 max-w-xs truncate">{q.body}</td>
                <td className="px-5 py-3.5 text-sm text-slate-500">{(q.courses as any)?.title ?? '—'}</td>
                <td className="px-5 py-3.5 text-xs text-slate-500">{q.domain || '—'}</td>
                <td className="px-5 py-3.5 text-sm font-mono font-bold text-sky-600">{q.correct}</td>
              </tr>
            ))}
            {(!questions || questions.length === 0) && (
              <tr>
                <td colSpan={4} className="px-5 py-10 text-center text-slate-400 text-sm">
                  No questions yet. Use bulk import above.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
