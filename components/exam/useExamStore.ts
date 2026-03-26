import { create } from 'zustand'

interface ExamState {
  answers: Record<string, string>  // questionId → 'A'|'B'|'C'|'D'
  flagged: Set<string>
  currentIndex: number
  timeRemaining: number            // seconds
  isSubmitted: boolean

  init: (durationMins: number) => void
  setAnswer: (questionId: string, answer: string) => void
  toggleFlag: (questionId: string) => void
  goTo: (index: number) => void
  next: () => void
  prev: () => void
  tick: () => void
  submit: () => void
}

export const useExamStore = create<ExamState>((set, get) => ({
  answers: {},
  flagged: new Set(),
  currentIndex: 0,
  timeRemaining: 90 * 60,
  isSubmitted: false,

  init: (durationMins) =>
    set({ answers: {}, flagged: new Set(), currentIndex: 0, timeRemaining: durationMins * 60, isSubmitted: false }),

  setAnswer: (questionId, answer) =>
    set(s => ({ answers: { ...s.answers, [questionId]: answer } })),

  toggleFlag: (questionId) =>
    set(s => {
      const flagged = new Set(s.flagged)
      flagged.has(questionId) ? flagged.delete(questionId) : flagged.add(questionId)
      return { flagged }
    }),

  goTo: (index) => set({ currentIndex: index }),
  next: () => set(s => ({ currentIndex: s.currentIndex + 1 })),
  prev: () => set(s => ({ currentIndex: Math.max(0, s.currentIndex - 1) })),
  tick: () => set(s => ({ timeRemaining: Math.max(0, s.timeRemaining - 1) })),
  submit: () => set({ isSubmitted: true }),
}))
