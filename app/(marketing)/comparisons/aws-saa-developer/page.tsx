import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AWS SAA vs Developer Associate — ExamPassPro',
  description: 'AWS SAA vs Developer Associate: difficulty, exam topics, jobs, and salary.',
  alternates: {
    canonical: '/comparisons/aws-saa-developer',
  },
  openGraph: {
    title: 'AWS SAA vs Developer Associate',
    description: 'Compare AWS Solutions Architect Associate vs Developer Associate certifications.',
    url: 'https://exampasspro.com/comparisons/aws-saa-developer',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero with Background Image */}
      <section className="relative bg-gradient-to-r from-orange-500 to-yellow-600 min-h-[300px] flex items-center justify-center px-6 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1280&fit=crop"
            alt="AWS server infrastructure"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-2 text-xs text-orange-100 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/comparisons" className="hover:text-white transition-colors">Comparisons</Link>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            AWS SAA vs Developer Associate
          </h1>
          <p className="text-orange-100 text-lg">
            Compare AWS Solutions Architect Associate vs Developer Associate certifications.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Quick Overview</h2>
        <p className="text-slate-600 mb-6">
          AWS SAA focuses on infrastructure design, while AWS Developer Associate focuses on application development. Both are intermediate-level certifications.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Difficulty Comparison</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-slate-200 p-5">
            <h3 className="font-bold text-slate-900 mb-3">AWS SAA-C03</h3>
            <ul className="space-y-2">
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-sky-600 font-bold">•</span>
                <span>Difficulty: Moderate-Hard</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-sky-600 font-bold">•</span>
                <span>Pass Rate: 45-55%</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-sky-600 font-bold">•</span>
                <span>Study Time: 120-200 hours</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-sky-600 font-bold">•</span>
                <span>Questions: 65</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-5">
            <h3 className="font-bold text-slate-900 mb-3">Developer Associate</h3>
            <ul className="space-y-2">
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-sky-600 font-bold">•</span>
                <span>Difficulty: Moderate</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-sky-600 font-bold">•</span>
                <span>Pass Rate: 55-65%</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-sky-600 font-bold">•</span>
                <span>Study Time: 100-150 hours</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-sky-600 font-bold">•</span>
                <span>Questions: 65</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-sky-50 rounded-xl border border-sky-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Ready to Study?</h3>
          <p className="text-slate-600 mb-6">
            ExamPassPro offers comprehensive exam dumps, practice tests, and AI-powered study assistance.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-colors"
          >
            Browse Exam Dumps
          </Link>
        </div>
      </article>
    </div>
  )
}
