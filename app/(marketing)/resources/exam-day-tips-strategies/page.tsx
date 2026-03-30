import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '15 Proven Exam Day Tips & Strategies for IT Certification Success — ExamPassPro',
  description: 'Science-backed exam day techniques to maximize your score. Learn test strategy, time management, stress reduction, and problem-solving.',
  alternates: {
    canonical: '/resources/exam-day-tips-strategies',
  },
  openGraph: {
    title: 'IT Certification Exam Day Tips',
    description: 'Proven strategies to excel on IT certification exam day.',
    url: 'https://exampasspro.com/resources/exam-day-tips-strategies',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero with Image */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-xs text-green-100 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
              </div>
              <h1 className="text-3xl lg:text-4xl font-black text-white mb-4">
                Exam Day Tips & Strategies
              </h1>
              <p className="text-green-100 text-base mb-6">
                15 science-backed techniques to maximize your exam score.
              </p>
              <div className="flex gap-4">
                <Link href="/courses" className="inline-flex px-6 py-2 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors">
                  Get Study Materials
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1557821552-17105176677c?w=1920&h=1280&fit=crop"
                alt="Exam success"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">15 Proven Exam Day Tips</h2>
        <p className="text-slate-600 mb-6">
          Success on exam day isn't just about studying—it's about mental preparation, time management, and smart test-taking strategies. Here are 15 science-backed techniques.
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-green-50 rounded-lg border border-green-200 p-4">
            <h3 className="font-bold text-slate-900 mb-1">1. Get Good Sleep the Night Before</h3>
            <p className="text-slate-600 text-sm">Sleep improves memory retention and cognitive function by 20-30%</p>
          </div>
          <div className="bg-green-50 rounded-lg border border-green-200 p-4">
            <h3 className="font-bold text-slate-900 mb-1">2. Eat a Balanced Breakfast</h3>
            <p className="text-slate-600 text-sm">Avoid sugar spikes; eat protein and whole grains for sustained energy</p>
          </div>
          <div className="bg-green-50 rounded-lg border border-green-200 p-4">
            <h3 className="font-bold text-slate-900 mb-1">3. Arrive 15 Minutes Early</h3>
            <p className="text-slate-600 text-sm">Gives you time to adjust to the testing environment and calm your nerves</p>
          </div>
          <div className="bg-green-50 rounded-lg border border-green-200 p-4">
            <h3 className="font-bold text-slate-900 mb-1">4. Take a Deep Breath Before Starting</h3>
            <p className="text-slate-600 text-sm">5-minute breathing exercise reduces anxiety by 25-40%</p>
          </div>
          <div className="bg-green-50 rounded-lg border border-green-200 p-4">
            <h3 className="font-bold text-slate-900 mb-1">5. Read Every Question Completely</h3>
            <p className="text-slate-600 text-sm">Misreading causes 15% of careless mistakes</p>
          </div>
          <div className="bg-green-50 rounded-lg border border-green-200 p-4">
            <h3 className="font-bold text-slate-900 mb-1">6. Don't Linger on Difficult Questions</h3>
            <p className="text-slate-600 text-sm">Mark and come back; easy questions first (80/20 rule)</p>
          </div>
          <div className="bg-green-50 rounded-lg border border-green-200 p-4">
            <h3 className="font-bold text-slate-900 mb-1">7. Use Process of Elimination</h3>
            <p className="text-slate-600 text-sm">Eliminates 2-3 obvious wrong answers, improving odds 25-40%</p>
          </div>
          <div className="bg-green-50 rounded-lg border border-green-200 p-4">
            <h3 className="font-bold text-slate-900 mb-1">8. Manage Your Time</h3>
            <p className="text-slate-600 text-sm">Allocate equal time per question (total time ÷ # questions)</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-green-50 rounded-xl border border-green-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Ace Your Exam</h3>
          <p className="text-slate-600 mb-6">
            Get complete study materials and practice exams to prepare for success.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            Start Exam Prep
          </Link>
        </div>
      </article>
    </div>
  )
}
