'use client'
import { useEffect, useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useExamStore } from './useExamStore'
import type { Question, ExamSet } from '@/lib/supabase/database.types'
import { clsx } from 'clsx'

interface ExamEngineProps {
  examSet: ExamSet
  questions: Question[]
  courseId: string
}

function formatTime(secs: number) {
  const m = Math.floor(secs / 60).toString().padStart(2, '0')
  const s = (secs % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

export function ExamEngine({ examSet, questions, courseId }: ExamEngineProps) {
  const router = useRouter()
  const store = useExamStore()
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    store.init(examSet.duration_mins)
  }, [examSet.id])

  useEffect(() => {
    if (store.isSubmitted) return
    const id = setInterval(() => {
      store.tick()
      if (store.timeRemaining <= 1) {
        clearInterval(id)
        handleSubmit()
      }
    }, 1000)
    return () => clearInterval(id)
  }, [store.isSubmitted])

  const handleSubmit = useCallback(async () => {
    if (submitting) return
    setSubmitting(true)
    store.submit()

    const res = await fetch('/api/exam/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        examSetId: examSet.id,
        answers: store.answers,
        questions: questions.map(q => ({ id: q.id, correct: q.correct, domain: q.domain })),
      }),
    })

    const { attemptId } = await res.json()
    router.push(`/results/${attemptId}`)
  }, [submitting, store.answers, examSet.id, questions, router])

  const q = questions[store.currentIndex]
  if (!q) return null

  const answered = Object.keys(store.answers).length
  const isLowTime = store.timeRemaining < 300 // < 5 min

  return (
    <div className="flex gap-6 min-h-[calc(100vh-4rem)]">
      {/* Main */}
      <div className="flex-1 min-w-0">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-black text-slate-900">{examSet.title}</h1>
            <p className="text-xs text-slate-500">Question {store.currentIndex + 1} of {questions.length}</p>
          </div>
          <div className={clsx(
            'font-mono text-lg font-black px-4 py-2 rounded-xl',
            isLowTime ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-700'
          )}>
            {formatTime(store.timeRemaining)}
          </div>
        </div>

        {/* Question card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-4">
          <p className="text-base font-semibold text-slate-900 leading-relaxed mb-6">{q.body}</p>
          <div className="space-y-3">
            {(Object.entries(q.options) as [string, string][]).map(([key, value]) => {
              const isSelected = store.answers[q.id] === key
              return (
                <button
                  key={key}
                  onClick={() => store.setAnswer(q.id, key)}
                  className={clsx(
                    'w-full text-left flex items-start gap-3 p-4 rounded-xl border text-sm transition-all',
                    isSelected
                      ? 'border-sky-500 bg-sky-50 text-sky-900 font-semibold'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                  )}
                >
                  <span className={clsx(
                    'w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5',
                    isSelected ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-300 text-slate-500'
                  )}>
                    {key}
                  </span>
                  <span>{value}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => store.prev()}
            disabled={store.currentIndex === 0}
            className="border border-slate-200 text-slate-600 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-50 disabled:opacity-40 transition-colors"
          >
            ← Previous
          </button>
          <div className="flex gap-3">
            <button
              onClick={() => store.toggleFlag(q.id)}
              className={clsx(
                'px-4 py-2.5 rounded-lg text-sm font-semibold border transition-colors',
                store.flagged.has(q.id)
                  ? 'bg-amber-50 border-amber-300 text-amber-700'
                  : 'border-slate-200 text-slate-500 hover:bg-slate-50'
              )}
            >
              {store.flagged.has(q.id) ? '🚩 Flagged' : '⚑ Flag'}
            </button>
            {store.currentIndex < questions.length - 1 ? (
              <button
                onClick={() => store.next()}
                className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
              >
                Next →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors disabled:opacity-60"
              >
                {submitting ? 'Submitting…' : 'Submit Exam'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar: question navigator */}
      <div className="w-56 flex-shrink-0">
        <div className="bg-white border border-slate-200 rounded-xl p-4 sticky top-8">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">Questions</div>
          <div className="grid grid-cols-5 gap-1.5 mb-4">
            {questions.map((question, i) => {
              const isAnswered = !!store.answers[question.id]
              const isFlagged = store.flagged.has(question.id)
              const isCurrent = i === store.currentIndex
              return (
                <button
                  key={question.id}
                  onClick={() => store.goTo(i)}
                  className={clsx(
                    'w-8 h-8 rounded-lg text-xs font-bold transition-all',
                    isCurrent ? 'bg-sky-500 text-white' :
                    isFlagged ? 'bg-amber-100 text-amber-700 border border-amber-300' :
                    isAnswered ? 'bg-green-100 text-green-700' :
                    'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  )}
                >
                  {i + 1}
                </button>
              )
            })}
          </div>
          <div className="space-y-1.5 text-xs text-slate-500">
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-green-100 rounded" />Answered ({answered})</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-amber-100 rounded border border-amber-300" />Flagged ({store.flagged.size})</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-slate-100 rounded" />Unanswered ({questions.length - answered})</div>
          </div>
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white text-xs font-bold py-2.5 rounded-lg transition-colors disabled:opacity-60"
          >
            Submit Exam
          </button>
        </div>
      </div>
    </div>
  )
}
