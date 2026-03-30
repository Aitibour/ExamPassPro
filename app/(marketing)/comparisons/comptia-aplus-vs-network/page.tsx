import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CompTIA A+ vs CompTIA Network+ — ExamPassPro',
  description: 'Compare CompTIA A+ vs Network+: hardware & OS fundamentals vs networking certifications. Choose your CompTIA career path.',
  alternates: {
    canonical: '/comparisons/comptia-aplus-vs-network',
  },
  openGraph: {
    title: 'CompTIA A+ vs CompTIA Network+',
    description: 'Compare CompTIA A+ vs Network+ certifications: difficulty, topics, jobs, and salary.',
    url: 'https://exampasspro.com/comparisons/comptia-aplus-vs-network',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero with Image */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-700 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-xs text-orange-100 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <Link href="/comparisons" className="hover:text-white transition-colors">Comparisons</Link>
              </div>
              <h1 className="text-3xl lg:text-4xl font-black text-white mb-4">
                CompTIA A+ vs Network+
              </h1>
              <p className="text-orange-100 text-base mb-6">
                Compare entry-level CompTIA certifications: A+ (hardware & OS) vs Network+ (networking fundamentals).
              </p>
              <div className="flex gap-4">
                <Link href="/courses" className="inline-flex px-6 py-2 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors">
                  View CompTIA Courses
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1920&h=1280&fit=crop"
                alt="Network infrastructure and IT equipment setup"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
        <p className="text-slate-600 mb-6">
          CompTIA A+ covers hardware, operating systems, and IT support fundamentals. CompTIA Network+ builds on A+ knowledge and focuses on networking concepts. Most professionals pursue A+ first, then progress to Network+.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Exam Comparison</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-orange-200 p-6">
            <h3 className="font-bold text-slate-900 mb-3 text-lg">CompTIA A+</h3>
            <ul className="space-y-2">
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Level:</strong> Entry-Level</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Pass Rate:</strong> 60-70%</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Study Time:</strong> 40-60 hours</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Questions:</strong> 90 (two exams)</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Duration:</strong> 90 min each exam</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border border-orange-200 p-6">
            <h3 className="font-bold text-slate-900 mb-3 text-lg">CompTIA Network+</h3>
            <ul className="space-y-2">
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Level:</strong> Entry-to-Intermediate</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Pass Rate:</strong> 50-60%</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Study Time:</strong> 60-100 hours</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Questions:</strong> 50-60</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Duration:</strong> 90 minutes</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Career Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-3">CompTIA A+ Career Path</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>• IT Support Technician</li>
              <li>• Help Desk Specialist</li>
              <li>• Computer Support Specialist</li>
              <li className="font-semibold text-green-700 mt-3">💰 $35K-$50K/year</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-3">CompTIA Network+ Career Path</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>• Network Administrator</li>
              <li>• Network Technician</li>
              <li>• System Administrator</li>
              <li className="font-semibold text-green-700 mt-3">💰 $50K-$75K/year</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-orange-50 rounded-xl border border-orange-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Ready to Study for CompTIA?</h3>
          <p className="text-slate-600 mb-6">
            ExamPassPro offers practice tests, study guides, and hands-on labs for both CompTIA A+ and Network+.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
          >
            Browse CompTIA Courses
          </Link>
        </div>
      </article>
    </div>
  )
}
