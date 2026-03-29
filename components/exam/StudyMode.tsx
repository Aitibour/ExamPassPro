'use client'
import { useState } from 'react'
import type { Question, ExamSet } from '@/lib/supabase/database.types'
import { clsx } from 'clsx'

interface StudyModeProps {
  examSet: ExamSet
  questions: Question[]
  /** Max questions allowed by the user's plan (used for upgrade nudge) */
  questionLimit?: number
  /** Total questions in this set before plan slicing */
  totalInSet?: number
}

export function StudyMode({ examSet, questions, questionLimit, totalInSet }: StudyModeProps) {
  const isLimited = totalInSet != null && questionLimit != null && questions.length < totalInSet
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [correct, setCorrect] = useState(0)
  const [wrong, setWrong] = useState(0)
  const [done, setDone] = useState(false)

  const q = questions[currentIndex]
  const isAnswered = selected !== null

  function handleSelect(key: string) {
    if (isAnswered) return
    setSelected(key)
    if (key === q.correct) {
      setCorrect(c => c + 1)
    } else {
      setWrong(w => w + 1)
    }
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1)
      setSelected(null)
    } else {
      setDone(true)
    }
  }

  if (done) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-2xl font-black text-slate-900 mb-2">Study Session Complete!</h2>
        <p className="text-slate-500 mb-6">{examSet.title} — Study Mode</p>
        <div className="flex justify-center gap-8 mb-8">
          <div className="text-center">
            <div className="text-3xl font-black text-green-600">{correct}</div>
            <div className="text-xs text-slate-500 mt-1">Correct</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-red-500">{wrong}</div>
            <div className="text-xs text-slate-500 mt-1">Wrong</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-sky-500">
              {Math.round((correct / questions.length) * 100)}%
            </div>
            <div className="text-xs text-slate-500 mt-1">Score</div>
          </div>
        </div>
        <button
          onClick={() => { setCurrentIndex(0); setSelected(null); setCorrect(0); setWrong(0); setDone(false) }}
          className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-3 rounded-xl transition-colors"
        >
          Study Again
        </button>
      </div>
    )
  }

  if (!q) return null

  return (
    <div>
      {/* Plan limit notice */}
      {isLimited && (
        <div className="mb-4 flex items-center justify-between bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm">
          <span className="text-amber-800">
            ⚡ Showing <strong>{questions.length}</strong> of <strong>{totalInSet}</strong> questions on your current plan.
          </span>
          <a href="/courses" className="text-amber-700 font-bold hover:text-amber-900 underline underline-offset-2 whitespace-nowrap ml-4">
            Upgrade →
          </a>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-black text-slate-900">{examSet.title} — Practice Exam</h1>
          <p className="text-xs text-slate-500 mt-1">Question {currentIndex + 1} of {questions.length}</p>
        </div>
        <div className="flex gap-4 text-sm">
          <span className="text-green-600 font-bold">{correct} correct</span>
          <span className="text-red-500 font-bold">{wrong} wrong</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-slate-100 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-sky-500 rounded-full transition-all"
          style={{ width: `${((currentIndex) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-4">
        <p className="text-base font-semibold text-slate-900 leading-relaxed mb-6">{q.body}</p>
        <div className="space-y-3">
          {(Object.entries(q.options) as [string, string][]).map(([key, value]) => {
            let style = 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
            let circleStyle = 'border-slate-300 text-slate-500'

            if (isAnswered) {
              if (key === q.correct) {
                style = 'border-green-500 bg-green-50 text-green-900'
                circleStyle = 'border-green-500 bg-green-500 text-white'
              } else if (key === selected && key !== q.correct) {
                style = 'border-red-400 bg-red-50 text-red-900'
                circleStyle = 'border-red-400 bg-red-400 text-white'
              }
            } else if (selected === key) {
              style = 'border-sky-500 bg-sky-50 text-sky-900'
              circleStyle = 'border-sky-500 bg-sky-500 text-white'
            }

            return (
              <button
                key={key}
                onClick={() => handleSelect(key)}
                disabled={isAnswered}
                className={clsx('w-full text-left flex items-start gap-3 p-4 rounded-xl border text-sm transition-all', style)}
              >
                <span className={clsx('w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5', circleStyle)}>
                  {key}
                </span>
                <span>{value}</span>
              </button>
            )
          })}
        </div>

        {/* Explanation */}
        {isAnswered && q.explanation && (
          <div className={clsx(
            'mt-5 p-4 rounded-xl border text-sm leading-relaxed',
            selected === q.correct
              ? 'bg-green-50 border-green-200 text-green-800'
              : 'bg-amber-50 border-amber-200 text-amber-800'
          )}>
            <strong className="block mb-1">{selected === q.correct ? '✓ Correct!' : `✗ Incorrect. Correct answer: ${q.correct}`}</strong>
            {q.explanation}
          </div>
        )}
      </div>

      {isAnswered && (
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-6 py-2.5 rounded-xl transition-colors"
          >
            {currentIndex < questions.length - 1 ? 'Next Question →' : 'Finish Study Session'}
          </button>
        </div>
      )}
    </div>
  )
}
