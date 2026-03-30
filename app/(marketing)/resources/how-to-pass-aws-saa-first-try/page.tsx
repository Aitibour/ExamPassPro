import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Pass AWS SAA-C03 on Your First Try: Expert Strategy — ExamPassPro',
  description: 'Proven 12-week study plan for AWS SAA. Learn what to prioritize, practice exam strategies, and time management for first-attempt success.',
  alternates: {
    canonical: '/resources/how-to-pass-aws-saa-first-try',
  },
  openGraph: {
    title: 'Pass AWS SAA-C03 on First Try',
    description: 'Expert 12-week study strategy for AWS Solutions Architect Associate certification.',
    url: 'https://exampasspro.com/resources/how-to-pass-aws-saa-first-try',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero with Background Image */}
      <section className="relative bg-gradient-to-r from-amber-500 to-yellow-600 min-h-[300px] flex items-center justify-center px-6 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1280&fit=crop"
            alt="AWS architecture study materials and infrastructure"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-2 text-xs text-amber-100 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Pass AWS SAA on First Try
          </h1>
          <p className="text-amber-100 text-lg">
            Expert 12-week study plan with proven strategies for first-attempt success.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">12-Week Proven Plan</h2>
        <p className="text-slate-600 mb-6">
          This expert-designed 12-week plan ensures you master all critical topics and develop exam-taking skills for guaranteed first-attempt success.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Phase 1: Foundation (Weeks 1-4)</h2>
        <div className="bg-amber-50 rounded-lg border border-amber-200 p-6 mb-8">
          <h3 className="font-bold text-slate-900 mb-3">Goals</h3>
          <ul className="space-y-2 text-slate-600 text-sm">
            <li>• Understand core AWS services and architecture principles</li>
            <li>• Memorize exam-relevant services and their use cases</li>
            <li>• Take first practice test (expect 50-55% score)</li>
          </ul>
          <h3 className="font-bold text-slate-900 mt-4 mb-2">Study Method</h3>
          <p className="text-slate-600 text-sm">2 hours/day: Video lectures + note-taking + flashcard creation</p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Phase 2: Domain Mastery (Weeks 5-8)</h2>
        <div className="bg-amber-50 rounded-lg border border-amber-200 p-6 mb-8">
          <h3 className="font-bold text-slate-900 mb-3">Goals</h3>
          <ul className="space-y-2 text-slate-600 text-sm">
            <li>• Deep dive into each exam domain</li>
            <li>• Understand architectural patterns and trade-offs</li>
            <li>• Score 65-70% on practice exams</li>
          </ul>
          <h3 className="font-bold text-slate-900 mt-4 mb-2">Study Method</h3>
          <p className="text-slate-600 text-sm">2.5 hours/day: Domain-specific courses + domain practice tests</p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Phase 3: Exam Preparation (Weeks 9-12)</h2>
        <div className="bg-amber-50 rounded-lg border border-amber-200 p-6 mb-8">
          <h3 className="font-bold text-slate-900 mb-3">Goals</h3>
          <ul className="space-y-2 text-slate-600 text-sm">
            <li>• Score 75%+ consistently on full practice exams</li>
            <li>• Master exam timing and question strategy</li>
            <li>• Confidently pass the real exam</li>
          </ul>
          <h3 className="font-bold text-slate-900 mt-4 mb-2">Study Method</h3>
          <p className="text-slate-600 text-sm">2 hours/day: Full-length exams (130 min) + review weak areas</p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Exam Day Strategy</h2>
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-8">
          <ul className="space-y-3 text-slate-600 text-sm">
            <li><strong>First 10 min:</strong> Read all questions, mark difficult ones</li>
            <li><strong>Easy questions (40%):</strong> Answer quickly (1 min each)</li>
            <li><strong>Medium questions (50%):</strong> Analyze carefully (2-3 min each)</li>
            <li><strong>Hard questions (10%):</strong> Review last, use elimination</li>
            <li><strong>Final 10 min:</strong> Review marked questions only</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-amber-50 rounded-xl border border-amber-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Get Your Study Plan</h3>
          <p className="text-slate-600 mb-6">
            Access practice exams, study schedules, and expert tips for AWS SAA success.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
          >
            Access Study Plan
          </Link>
        </div>
      </article>
    </div>
  )
}
