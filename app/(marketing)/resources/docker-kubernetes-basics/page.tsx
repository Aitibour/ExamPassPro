import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Docker vs Kubernetes: Understanding Containerization Basics — ExamPassPro',
  description: 'Learn the difference between Docker and Kubernetes. Container basics, orchestration, use cases, and when to use each technology.',
  alternates: {
    canonical: '/resources/docker-kubernetes-basics',
  },
  openGraph: {
    title: 'Docker vs Kubernetes Guide',
    description: 'Complete guide to understanding Docker containerization and Kubernetes orchestration.',
    url: 'https://exampasspro.com/resources/docker-kubernetes-basics',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Docker vs Kubernetes Guide',
    description: 'Complete guide to understanding Docker containerization and Kubernetes orchestration.',
  },
}

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero with Background Image */}
      <section className="relative bg-gradient-to-r from-teal-600 to-cyan-700 min-h-[300px] flex items-center justify-center px-6 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=1920&h=1280&fit=crop"
            alt="Docker and Kubernetes container development"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-2 text-xs text-teal-100 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Docker vs Kubernetes Basics
          </h1>
          <p className="text-teal-100 text-lg">
            Understand container fundamentals and when to use each technology.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Docker: Containerization</h2>
        <p className="text-slate-600 mb-6">
          Docker is a containerization platform that packages applications with all dependencies into a single unit (container) that runs consistently anywhere.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Kubernetes: Orchestration</h2>
        <p className="text-slate-600 mb-6">
          Kubernetes is a container orchestration platform that manages Docker containers at scale, handling deployment, scaling, and networking across multiple machines.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Key Differences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-teal-50 rounded-lg border border-teal-200 p-6">
            <h3 className="font-bold text-slate-900 mb-3">Docker</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>✓ Single machine focus</li>
              <li>✓ Containerizes applications</li>
              <li>✓ Easy to learn</li>
              <li>✓ Limited scaling</li>
              <li>✓ Manual management</li>
            </ul>
          </div>
          <div className="bg-cyan-50 rounded-lg border border-cyan-200 p-6">
            <h3 className="font-bold text-slate-900 mb-3">Kubernetes</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>✓ Multi-machine clusters</li>
              <li>✓ Orchestrates containers</li>
              <li>✓ Steeper learning curve</li>
              <li>✓ Automatic scaling</li>
              <li>✓ Self-healing</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">How They Work Together</h2>
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-8">
          <div className="space-y-3">
            <div className="flex gap-4">
              <span className="text-lg font-black text-teal-600">1</span>
              <div>
                <p className="font-semibold text-slate-900">Create with Docker</p>
                <p className="text-slate-600 text-sm">Build application, package in Docker image</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-lg font-black text-teal-600">2</span>
              <div>
                <p className="font-semibold text-slate-900">Deploy with Kubernetes</p>
                <p className="text-slate-600 text-sm">Submit Docker image to Kubernetes cluster</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-lg font-black text-teal-600">3</span>
              <div>
                <p className="font-semibold text-slate-900">Manage Automatically</p>
                <p className="text-slate-600 text-sm">Kubernetes handles scaling, updates, healing</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-teal-50 rounded-xl border border-teal-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Master Containers & Orchestration</h3>
          <p className="text-slate-600 mb-6">
            Get hands-on labs and courses for Docker and Kubernetes.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
          >
            Browse Container Courses
          </Link>
        </div>
      </article>
    </div>
  )
}
