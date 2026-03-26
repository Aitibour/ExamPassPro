import { act } from 'react'
import { useExamStore } from '../useExamStore'

beforeEach(() => {
  act(() => useExamStore.getState().init(90))
})

test('init sets timeRemaining correctly', () => {
  act(() => useExamStore.getState().init(60))
  expect(useExamStore.getState().timeRemaining).toBe(60 * 60)
})

test('setAnswer stores answer', () => {
  act(() => useExamStore.getState().setAnswer('q1', 'B'))
  expect(useExamStore.getState().answers['q1']).toBe('B')
})

test('toggleFlag adds and removes flag', () => {
  act(() => useExamStore.getState().toggleFlag('q1'))
  expect(useExamStore.getState().flagged.has('q1')).toBe(true)
  act(() => useExamStore.getState().toggleFlag('q1'))
  expect(useExamStore.getState().flagged.has('q1')).toBe(false)
})

test('next increments currentIndex', () => {
  act(() => useExamStore.getState().next())
  expect(useExamStore.getState().currentIndex).toBe(1)
})

test('prev decrements currentIndex', () => {
  act(() => useExamStore.getState().next())
  act(() => useExamStore.getState().prev())
  expect(useExamStore.getState().currentIndex).toBe(0)
})

test('prev does not go below 0', () => {
  act(() => useExamStore.getState().prev())
  expect(useExamStore.getState().currentIndex).toBe(0)
})

test('tick decrements timeRemaining', () => {
  const before = useExamStore.getState().timeRemaining
  act(() => useExamStore.getState().tick())
  expect(useExamStore.getState().timeRemaining).toBe(before - 1)
})

test('tick does not go below 0', () => {
  act(() => useExamStore.setState({ timeRemaining: 0 }))
  act(() => useExamStore.getState().tick())
  expect(useExamStore.getState().timeRemaining).toBe(0)
})

test('submit sets isSubmitted true', () => {
  act(() => useExamStore.getState().submit())
  expect(useExamStore.getState().isSubmitted).toBe(true)
})
