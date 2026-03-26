import { render, screen, fireEvent } from '@testing-library/react'
import { CourseGrid } from '../CourseGrid'
import type { Course } from '@/lib/supabase/database.types'

const mockCourses: Course[] = [
  {
    id: '1', slug: 'aws-saa-c03', title: 'AWS SAA', description: 'AWS',
    icon_url: null, brand_color: '#232f3e', price_cents: 2900,
    enrolled_count: 1000, is_published: true, created_at: '2026-01-01',
  },
  {
    id: '2', slug: 'servicenow-csa', title: 'ServiceNow CSA', description: 'ServiceNow',
    icon_url: null, brand_color: '#3d9b3d', price_cents: 2900,
    enrolled_count: 4200, is_published: true, created_at: '2026-01-02',
  },
]

test('renders all courses', () => {
  render(<CourseGrid courses={mockCourses} />)
  expect(screen.getByText('AWS SAA')).toBeInTheDocument()
  expect(screen.getByText('ServiceNow CSA')).toBeInTheDocument()
})

test('search filters courses', () => {
  render(<CourseGrid courses={mockCourses} />)
  fireEvent.change(screen.getByPlaceholderText('Search certifications...'), {
    target: { value: 'AWS' },
  })
  expect(screen.getByText('AWS SAA')).toBeInTheDocument()
  expect(screen.queryByText('ServiceNow CSA')).not.toBeInTheDocument()
})

test('shows no results message when no match', () => {
  render(<CourseGrid courses={mockCourses} />)
  fireEvent.change(screen.getByPlaceholderText('Search certifications...'), {
    target: { value: 'zzznomatch' },
  })
  expect(screen.getByText('No courses match your search.')).toBeInTheDocument()
})
