import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Azure AZ-900 vs Administrator (AZ-104) — ExamPassPro',
  description: 'Compare Azure AZ-900 Fundamentals vs AZ-104 Administrator certifications.',
  alternates: {
    canonical: '/comparisons/azure-az900-vs-administrator',
  },
}

export default function Page() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero with Image */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-xs text-blue-100 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <Link href="/comparisons" className="hover:text-white transition-colors">Comparisons</Link>
              </div>
              <h1 className="text-3xl lg:text-4xl font-black text-white mb-4">
                Azure AZ-900 vs AZ-104
              </h1>
              <p className="text-blue-100 text-base mb-6">
                Compare Azure Fundamentals vs Administrator certifications for your cloud career path.
              </p>
              <div className="flex gap-4">
                <Link href="/courses" className="inline-flex px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  View Azure Courses
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1280&fit=crop"
                alt="Azure cloud platform"
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
          AZ-900 is entry-level fundamentals covering cloud concepts and Azure services. AZ-104 is intermediate administration for managing Azure resources. Most professionals start with AZ-900 then progress to AZ-104.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Exam Comparison</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-blue-200 p-6">
            <h3 className="font-bold text-slate-900 mb-3 text-lg">AZ-900 Fundamentals</h3>
            <ul className="space-y-2">
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Level:</strong> Beginner</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Pass Rate:</strong> 70%+</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Study Time:</strong> 20-40 hours</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Questions:</strong> 40-60</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Duration:</strong> 85 minutes</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border border-blue-200 p-6">
            <h3 className="font-bold text-slate-900 mb-3 text-lg">AZ-104 Administrator</h3>
            <ul className="space-y-2">
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Level:</strong> Intermediate</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Pass Rate:</strong> 40-50%</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Study Time:</strong> 100-150 hours</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Questions:</strong> 40-55</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Duration:</strong> 150 minutes</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Career Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-3">AZ-900 Career Path</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>• Cloud Support Associate</li>
              <li>• Junior Cloud Engineer</li>
              <li>• IT Support Specialist</li>
              <li className="font-semibold text-green-700 mt-3">💰 $45K-$65K/year</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-3">AZ-104 Career Path</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>• Azure Administrator</li>
              <li>• Cloud Operations Engineer</li>
              <li>• Infrastructure Engineer</li>
              <li className="font-semibold text-green-700 mt-3">💰 $90K-$130K/year</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Ready to Study for Azure?</h3>
          <p className="text-slate-600 mb-6">
            ExamPassPro offers practice tests, study guides, and hands-on labs for both AZ-900 and AZ-104.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Azure Courses
          </Link>
        </div>
      </article>
    </div>
  )
}
