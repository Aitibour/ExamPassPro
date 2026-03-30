import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kubernetes CKA vs Docker Certified Associate — ExamPassPro',
  description: 'Compare Kubernetes CKA vs Docker Certified Associate. Container orchestration vs containerization certifications for DevOps professionals.',
  alternates: {
    canonical: '/comparisons/kubernetes-cka-vs-docker',
  },
  openGraph: {
    title: 'Kubernetes CKA vs Docker Certified Associate',
    description: 'Container orchestration vs containerization — compare CKA and Docker Certified exams.',
    url: 'https://exampasspro.com/comparisons/kubernetes-cka-vs-docker',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero with Image */}
      <section className="bg-gradient-to-r from-blue-500 to-cyan-600 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-xs text-cyan-100 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <Link href="/comparisons" className="hover:text-white transition-colors">Comparisons</Link>
              </div>
              <h1 className="text-3xl lg:text-4xl font-black text-white mb-4">
                Kubernetes CKA vs Docker Certified
              </h1>
              <p className="text-cyan-100 text-base mb-6">
                Compare container orchestration (Kubernetes) vs containerization (Docker) certifications for DevOps engineers.
              </p>
              <div className="flex gap-4">
                <Link href="/courses" className="inline-flex px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-cyan-50 transition-colors">
                  View DevOps Courses
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&h=1280&fit=crop"
                alt="Container orchestration and Kubernetes deployment"
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
          Kubernetes CKA focuses on container orchestration, managing containerized applications at scale. Docker Certified Associate focuses on containerization fundamentals. CKA is more advanced and typically pursued after Docker certification.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Exam Comparison</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-blue-200 p-6">
            <h3 className="font-bold text-slate-900 mb-3 text-lg">Kubernetes CKA</h3>
            <ul className="space-y-2">
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Level:</strong> Advanced</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Pass Rate:</strong> 45-55%</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Study Time:</strong> 150-250 hours</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Format:</strong> Hands-on (perform tasks in live cluster)</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Duration:</strong> 2 hours</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border border-blue-200 p-6">
            <h3 className="font-bold text-slate-900 mb-3 text-lg">Docker Certified Associate</h3>
            <ul className="space-y-2">
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Level:</strong> Intermediate</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Pass Rate:</strong> 60-70%</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Study Time:</strong> 80-120 hours</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Format:</strong> Multiple choice (60 questions)</span>
              </li>
              <li className="text-slate-600 text-sm flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Duration:</strong> 90 minutes</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Career Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-3">Docker Certified Career Path</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>• Docker Developer</li>
              <li>• Container Engineer</li>
              <li>• DevOps Engineer (Junior)</li>
              <li className="font-semibold text-green-700 mt-3">💰 $80K-$110K/year</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-3">Kubernetes CKA Career Path</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>• Kubernetes Engineer</li>
              <li>• Container Orchestration Specialist</li>
              <li>• DevOps Engineer (Senior)</li>
              <li className="font-semibold text-green-700 mt-3">💰 $120K-$160K/year</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Ready to Master Containers?</h3>
          <p className="text-slate-600 mb-6">
            ExamPassPro offers comprehensive Docker and Kubernetes practice tests, labs, and study guides.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Container Courses
          </Link>
        </div>
      </article>
    </div>
  )
}
