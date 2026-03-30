import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kubernetes & DevOps Path: Docker to CKA — ExamPassPro',
  description: 'Complete Kubernetes and DevOps certification roadmap from Docker fundamentals to Kubernetes CKA expert. 8-12 month learning path.',
  alternates: {
    canonical: '/roadmaps/kubernetes-devops-path',
  },
  openGraph: {
    title: 'Kubernetes & DevOps Certification Path',
    description: 'Step-by-step path from Docker basics to Kubernetes CKA expert certification.',
    url: 'https://exampasspro.com/roadmaps/kubernetes-devops-path',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kubernetes & DevOps Certification Path',
    description: 'Step-by-step path from Docker basics to Kubernetes CKA expert certification.',
  },
}

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero with Background Image */}
      <section className="relative bg-gradient-to-r from-cyan-600 to-blue-700 min-h-[300px] flex items-center justify-center px-6 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=1920&h=1280&fit=crop"
            alt="Kubernetes and DevOps development path"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-2 text-xs text-cyan-100 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/roadmaps" className="hover:text-white transition-colors">Roadmaps</Link>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Kubernetes & DevOps Path
          </h1>
          <p className="text-cyan-100 text-lg">
            Complete 8-12 month learning path from Docker containerization to Kubernetes orchestration expertise.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Roadmap Overview</h2>
        <p className="text-slate-600 mb-6">
          The DevOps and Kubernetes path is designed for engineers looking to master containerization and orchestration. Progress from Docker basics through advanced Kubernetes administration.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Certification Progression</h2>
        <div className="space-y-6 mb-8">
          <div className="bg-white rounded-lg border-l-4 border-cyan-500 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Level 1: Container Basics</h3>
            <p className="text-slate-600 text-sm mb-3"><strong>Docker Certified Associate (DCA)</strong></p>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li>• Duration: 4-6 weeks study</li>
              <li>• Pass Rate: 60-70%</li>
              <li>• Cost: $295</li>
              <li>• Focus: Docker images, containers, networking, storage</li>
              <li>• Salary: $80K-$110K</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border-l-4 border-cyan-500 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Level 2: Kubernetes Administration</h3>
            <p className="text-slate-600 text-sm mb-3"><strong>Kubernetes Certified Administrator (CKA)</strong></p>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li>• Duration: 8-12 weeks study</li>
              <li>• Pass Rate: 45-55%</li>
              <li>• Cost: $395</li>
              <li>• Focus: Kubernetes architecture, deployments, networking, security</li>
              <li>• Salary: $120K-$150K</li>
              <li>• <span className="font-semibold text-green-700">Format: Hands-on practical exam</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border-l-4 border-cyan-500 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Level 3: Advanced Kubernetes</h3>
            <p className="text-slate-600 text-sm mb-3"><strong>Kubernetes Application Developer (CKAD)</strong></p>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li>• Duration: 6-8 weeks study</li>
              <li>• Pass Rate: 50-60%</li>
              <li>• Cost: $395</li>
              <li>• Focus: Application deployment, scaling, monitoring, troubleshooting</li>
              <li>• Salary: $130K-$160K</li>
              <li>• <span className="font-semibold text-green-700">Format: Hands-on practical exam</span></li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Total Time Investment</h2>
        <div className="bg-cyan-50 rounded-lg border border-cyan-200 p-6 mb-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-black text-cyan-600">4-6 weeks</div>
              <p className="text-sm text-slate-600 mt-1">Docker Certified</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-cyan-600">8-12 weeks</div>
              <p className="text-sm text-slate-600 mt-1">Kubernetes CKA</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-cyan-600">6-8 weeks</div>
              <p className="text-sm text-slate-600 mt-1">Kubernetes CKAD</p>
            </div>
          </div>
          <p className="text-slate-600 text-sm mt-4 text-center">
            <strong>Total: 18-26 weeks (4-6 months intensive, 8-12 months at moderate pace)</strong>
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Who Should Follow This Path?</h2>
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-8">
          <ul className="space-y-2 text-slate-600 text-sm">
            <li>✓ DevOps engineers and SRE professionals</li>
            <li>✓ Backend engineers managing microservices</li>
            <li>✓ Infrastructure engineers deploying containers</li>
            <li>✓ Platform engineers building cloud-native solutions</li>
            <li>✓ System administrators modernizing infrastructure</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-cyan-50 rounded-xl border border-cyan-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Master Kubernetes & DevOps</h3>
          <p className="text-slate-600 mb-6">
            ExamPassPro provides hands-on labs and practice exams for Docker, CKA, and CKAD certifications.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
          >
            Browse Kubernetes Courses
          </Link>
        </div>
      </article>
    </div>
  )
}
