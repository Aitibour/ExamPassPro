import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Google Cloud Professional vs Associate — ExamPassPro',
  description: 'Google Cloud Professional vs Associate: difficulty, exam topics, jobs, and salary comparison.',
  alternates: {
    canonical: '/comparisons/google-cloud-professional-vs-associate',
  },
  openGraph: {
    title: 'Google Cloud Professional vs Associate',
    description: 'Compare Google Cloud Professional vs Associate certifications.',
    url: 'https://exampasspro.com/comparisons/google-cloud-professional-vs-associate',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Cloud Professional vs Associate',
    description: 'Compare Google Cloud Professional vs Associate certifications.',
  },
}

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero with Background Image */}
      <section className="relative bg-gradient-to-r from-blue-500 to-blue-700 min-h-[300px] flex items-center justify-center px-6 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&h=1280&fit=crop"
            alt="Google Cloud infrastructure"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-2 text-xs text-blue-100 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/comparisons" className="hover:text-white transition-colors">Comparisons</Link>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Google Cloud Professional vs Associate
          </h1>
          <p className="text-blue-100 text-lg">
            Compare Google Cloud Professional and Associate level certifications side-by-side.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Quick Overview</h2>
        <p className="text-slate-600 mb-6">
          Google Cloud Associate focuses on foundational cloud knowledge, while Google Cloud Professional certifications require advanced expertise in specific domains like architecture, engineering, and cloud solutions.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Difficulty Comparison</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-slate-200 p-5">
            <h3 className="font-bold text-slate-900 mb-3">Google Cloud Associate</h3>
            <ul className="space-y-2">
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Difficulty: Beginner-Intermediate</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Pass Rate: 70-75%</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Study Time: 60-100 hours</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Questions: 50</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-5">
            <h3 className="font-bold text-slate-900 mb-3">Google Cloud Professional</h3>
            <ul className="space-y-2">
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Difficulty: Hard</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Pass Rate: 40-50%</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Study Time: 150-250 hours</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Questions: 50-60</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Career Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-slate-200 p-5">
            <h3 className="font-bold text-slate-900 mb-3">After Associate</h3>
            <ul className="space-y-2">
              <li className="text-slate-600 text-sm">• Cloud Support Engineer</li>
              <li className="text-slate-600 text-sm">• Junior Cloud Engineer</li>
              <li className="text-slate-600 text-sm">• IT Operations</li>
              <li className="text-slate-600 text-sm font-semibold text-green-700 mt-3">Salary: $90K-$120K/year</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-5">
            <h3 className="font-bold text-slate-900 mb-3">After Professional</h3>
            <ul className="space-y-2">
              <li className="text-slate-600 text-sm">• Cloud Solutions Architect</li>
              <li className="text-slate-600 text-sm">• Senior Cloud Engineer</li>
              <li className="text-slate-600 text-sm">• Cloud Infrastructure Lead</li>
              <li className="text-slate-600 text-sm font-semibold text-green-700 mt-3">Salary: $140K-$180K/year</li>
            </ul>
          </div>
        </div>

        {/* Related Resources */}
        <div className="mt-12 p-8 bg-slate-100 rounded-xl border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Explore Related Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/resources" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-400 transition-colors">
              <p className="font-semibold text-slate-900">📚 Study Guides</p>
              <p className="text-sm text-slate-600">In-depth tutorials and exam strategies</p>
            </Link>
            <Link href="/roadmaps" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-400 transition-colors">
              <p className="font-semibold text-slate-900">🗺️ Certification Paths</p>
              <p className="text-sm text-slate-600">Career progression and learning roadmaps</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 p-8 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Ready to Study for Your Google Cloud Certification?</h3>
          <p className="text-slate-600 mb-6">
            ExamPassPro offers comprehensive exam dumps, practice tests, and AI-powered study assistance.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Exam Dumps & Practice Tests
          </Link>
        </div>
      </article>
    </div>
  )
}
