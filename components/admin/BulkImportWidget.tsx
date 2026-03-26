'use client'
import { useState } from 'react'

interface Course {
  id: string
  title: string
}

interface BulkImportWidgetProps {
  courses: Course[]
}

interface ImportQuestion {
  question: string
  options: { A: string; B: string; C: string; D: string }
  correct: string
  explanation: string
  domain?: string
}

export function BulkImportWidget({ courses }: BulkImportWidgetProps) {
  const [courseId, setCourseId] = useState('')
  const [json, setJson] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ success?: number; error?: string } | null>(null)

  async function handleImport() {
    if (!courseId || !json.trim()) return
    setLoading(true)
    setResult(null)

    let parsed: ImportQuestion[]
    try {
      parsed = JSON.parse(json)
      if (!Array.isArray(parsed)) throw new Error('Must be a JSON array')
    } catch (e) {
      setResult({ error: `Invalid JSON: ${(e as Error).message}` })
      setLoading(false)
      return
    }

    const res = await fetch('/api/admin/import-questions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ courseId, questions: parsed }),
    })

    const data = await res.json()
    setResult(res.ok ? { success: data.count } : { error: data.error })
    if (res.ok) { setJson(''); setCourseId('') }
    setLoading(false)
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">Course</label>
          <select
            value={courseId}
            onChange={e => setCourseId(e.target.value)}
            className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-sky-500"
          >
            <option value="">Select course…</option>
            {courses.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">JSON Questions</label>
        <textarea
          value={json}
          onChange={e => setJson(e.target.value)}
          rows={8}
          placeholder={`[\n  {\n    "question": "What is...",\n    "options": {"A": "...", "B": "...", "C": "...", "D": "..."},\n    "correct": "B",\n    "explanation": "Because...",\n    "domain": "Topic Name"\n  }\n]`}
          className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-700 font-mono outline-none focus:border-sky-500 resize-y"
        />
      </div>

      {result && (
        <div className={`p-3 rounded-lg text-sm ${result.error ? 'bg-red-50 text-red-600 border border-red-200' : 'bg-green-50 text-green-700 border border-green-200'}`}>
          {result.error ?? `Successfully imported ${result.success} questions.`}
        </div>
      )}

      <button
        onClick={handleImport}
        disabled={loading || !courseId || !json.trim()}
        className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors disabled:opacity-60"
      >
        {loading ? 'Importing…' : 'Import Questions'}
      </button>
    </div>
  )
}
