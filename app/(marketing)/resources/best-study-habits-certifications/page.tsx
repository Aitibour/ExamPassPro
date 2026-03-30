import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Building Better Study Habits: The Science of Learning IT Certifications — ExamPassPro',
  description: 'Learn spaced repetition, active recall, and interleaving. Study smarter not longer for IT certification success.',
  alternates: {
    canonical: '/resources/best-study-habits-certifications',
  },
  openGraph: {
    title: 'Science-Based Study Habits for IT Certifications',
    description: 'Learn proven study techniques: spaced repetition, active recall, interleaving.',
    url: 'https://exampasspro.com/resources/best-study-habits-certifications',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero with Background Image */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-violet-700 min-h-[300px] flex items-center justify-center px-6 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1280&fit=crop"
            alt="Study science"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-2 text-xs text-indigo-100 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Science of Learning Certifications
          </h1>
          <p className="text-indigo-100 text-lg">
            Learn proven techniques to study smarter, not longer.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">The Science of Learning</h2>
        <p className="text-slate-600 mb-6">
          Traditional studying (reading and re-reading) wastes time. Cognitive science shows that spaced repetition, active recall, and interleaving dramatically improve retention and test performance.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">1. Spaced Repetition</h2>
        <div className="bg-indigo-50 rounded-lg border border-indigo-200 p-6 mb-8">
          <p className="text-slate-600 text-sm mb-3">
            Review material at increasing intervals (1 day, 3 days, 7 days, 2 weeks, 1 month) to move information into long-term memory.
          </p>
          <div className="bg-white rounded p-4">
            <p className="font-semibold text-slate-900 text-sm mb-2">Why it works:</p>
            <p className="text-slate-600 text-sm">Forgetting curve shows we lose 50% of info within 24 hours. Spaced repetition resets the clock and strengthens neural pathways by 40-50%.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">2. Active Recall</h2>
        <div className="bg-indigo-50 rounded-lg border border-indigo-200 p-6 mb-8">
          <p className="text-slate-600 text-sm mb-3">
            Test yourself instead of passively reading. Use flashcards, practice exams, or teach someone else to retrieve information from memory.
          </p>
          <div className="bg-white rounded p-4">
            <p className="font-semibold text-slate-900 text-sm mb-2">Why it works:</p>
            <p className="text-slate-600 text-sm">Recall strengthens memory 2-3x better than passive reading. Testing effect improves retention by 50%.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">3. Interleaving</h2>
        <div className="bg-indigo-50 rounded-lg border border-indigo-200 p-6 mb-8">
          <p className="text-slate-600 text-sm mb-3">
            Mix different topics or problem types instead of blocking (learning one topic deeply, then moving on).
          </p>
          <div className="bg-white rounded p-4">
            <p className="font-semibold text-slate-900 text-sm mb-2">Why it works:</p>
            <p className="text-slate-600 text-sm">Interleaving forces your brain to discriminate between concepts. Exam performance improves by 30-40%.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Optimal Study Plan</h2>
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-8">
          <div className="space-y-3">
            <div className="flex gap-4">
              <span className="font-bold text-indigo-600 min-w-20">Monday:</span>
              <p className="text-slate-600 text-sm">Learn Domain 1 concepts with videos (1 hour)</p>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-indigo-600 min-w-20">Tuesday:</span>
              <p className="text-slate-600 text-sm">Practice Domain 1 questions + review other domains (1 hour)</p>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-indigo-600 min-w-20">Wednesday:</span>
              <p className="text-slate-600 text-sm">Learn Domain 2 + active recall on Domain 1 (1 hour)</p>
            </div>
            <div className="flex gap-4">
              <span className="font-bold text-indigo-600 min-w-20">Ongoing:</span>
              <p className="text-slate-600 text-sm">Spaced repetition: Flashcards daily, full exams weekly</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-indigo-50 rounded-xl border border-indigo-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Study Smart, Pass Fast</h3>
          <p className="text-slate-600 mb-6">
            Our courses use spaced repetition and active recall to optimize your learning.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Browse All Courses
          </Link>
        </div>
      </article>
    </div>
  )
}
