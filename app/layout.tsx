import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ExamPassPro — Pass Your IT Certification First Try',
  description: 'Real exam-style questions, timed mock exams, Gemini AI study assistant, and a 100% Pass Guarantee for 10 top IT certifications.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
