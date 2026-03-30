import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CompTIA Security+ vs Cisco CCNA — ExamPassPro',
  description: 'Compare CompTIA Security+ vs Cisco CCNA certifications. Cybersecurity vs networking focus, jobs, salary, and career paths.',
  alternates: {
    canonical: '/comparisons/comptia-security-plus-vs-cisco-ccna',
  },
  openGraph: {
    title: 'CompTIA Security+ vs Cisco CCNA',
    description: 'Cybersecurity vs networking: compare Security+ and CCNA certifications.',
    url: 'https://exampasspro.com/comparisons/comptia-security-plus-vs-cisco-ccna',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero with Image */}
      <section className="bg-gradient-to-r from-red-600 to-pink-700 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-xs text-red-100 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <Link href="/comparisons" className="hover:text-white transition-colors">Comparisons</Link>
              </div>
              <h1 className="text-3xl lg:text-4xl font-black text-white mb-4">
                CompTIA Security+ vs Cisco CCNA
              </h1>
              <p className="text-red-100 text-base mb-6">
                Compare cybersecurity (Security+) vs networking (CCNA) certifications for IT professionals seeking specialized expertise.
              </p>
              <div className="flex gap-4">
                <Link href="/courses" className="inline-flex px-6 py-2 bg-white text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors">
                  View Security & Networking Courses
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=400&fit=crop"
                alt="Cybersecurity and networking"
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
          CompTIA Security+ focuses on cybersecurity, threats, and compliance. Cisco CCNA focuses on networking fundamentals and technologies. Both are intermediate-level certifications valued across industries. Choose Security+ for security careers and CCNA for networking specialization.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Exam Comparison</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-red-200 p-6">
            <h3 className="font-bold text-slate-900 mb-3 text-lg">CompTIA Security+</h3>
            <ul className="space-y-2">
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span><strong>Level:</strong> Intermediate</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span><strong>Pass Rate:</strong> 60-70%</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span><strong>Study Time:</strong> 80-120 hours</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span><strong>Questions:</strong> 80-90</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span><strong>Duration:</strong> 90 minutes</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border border-red-200 p-6">
            <h3 className="font-bold text-slate-900 mb-3 text-lg">Cisco CCNA</h3>
            <ul className="space-y-2">
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span><strong>Level:</strong> Intermediate</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span><strong>Pass Rate:</strong> 50-60%</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span><strong>Study Time:</strong> 100-150 hours</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span><strong>Questions:</strong> 100-120</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-red-600 font-bold">•</span>
                <span><strong>Duration:</strong> 120 minutes</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Career Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-3">CompTIA Security+ Career</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>• Security Analyst</li>
              <li>• Information Security Specialist</li>
              <li>• Compliance Officer</li>
              <li className="font-semibold text-green-700 mt-3">💰 $70K-$100K/year</li>
              <li className="text-xs text-slate-500 mt-2">Military/Government Requirement: DoD 8570 certified</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-3">Cisco CCNA Career</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>• Network Administrator</li>
              <li>• Network Engineer</li>
              <li>• Systems Engineer</li>
              <li className="font-semibold text-green-700 mt-3">💰 $75K-$105K/year</li>
              <li className="text-xs text-slate-500 mt-2">Cisco-specific roles and advancement path</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Key Differences</h2>
        <div className="bg-slate-100 rounded-lg p-6 mb-8">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">CompTIA Security+ Focus</h4>
              <ul className="space-y-1 text-slate-600 text-sm">
                <li>• Threat management and risk analysis</li>
                <li>• Cryptography and identity management</li>
                <li>• Compliance and regulations (HIPAA, GDPR)</li>
                <li>• Not hands-on (multiple choice exam)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Cisco CCNA Focus</h4>
              <ul className="space-y-1 text-slate-600 text-sm">
                <li>• Networking fundamentals (OSI model, TCP/IP)</li>
                <li>• Routing and switching technologies</li>
                <li>• Cisco-specific equipment and protocols</li>
                <li>• Requires hands-on networking experience</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-red-50 rounded-xl border border-red-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Advance Your IT Career</h3>
          <p className="text-slate-600 mb-6">
            ExamPassPro offers comprehensive training for both CompTIA Security+ and Cisco CCNA certifications with practice exams and detailed study materials.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
          >
            Browse Security & Networking Courses
          </Link>
        </div>
      </article>
    </div>
  )
}
