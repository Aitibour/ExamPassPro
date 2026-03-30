import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kubernetes vs Docker: What\'s the Difference? — ExamPassPro',
  description: 'Understand the difference between Kubernetes and Docker. Container basics, orchestration, use cases, and when to use each technology.',
  alternates: {
    canonical: '/comparisons/kubernetes-vs-docker',
  },
  openGraph: {
    title: 'Kubernetes vs Docker: What\'s the Difference?',
    description: 'Comprehensive guide comparing Kubernetes and Docker container technologies.',
    url: 'https://exampasspro.com/comparisons/kubernetes-vs-docker',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero with Image */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-700 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-xs text-teal-100 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <Link href="/comparisons" className="hover:text-white transition-colors">Comparisons</Link>
              </div>
              <h1 className="text-3xl lg:text-4xl font-black text-white mb-4">
                Kubernetes vs Docker
              </h1>
              <p className="text-teal-100 text-base mb-6">
                Understand the fundamental differences between containerization (Docker) and orchestration (Kubernetes) technologies.
              </p>
              <div className="flex gap-4">
                <Link href="/courses" className="inline-flex px-6 py-2 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors">
                  View Container Courses
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1920&h=1280&fit=crop"
                alt="Container technology architecture"
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
          Docker and Kubernetes are complementary technologies that work together, not against each other. Docker handles containerization (packaging applications), while Kubernetes handles orchestration (managing containers at scale). Think of Docker as the container format and Kubernetes as the container manager.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">What is Docker?</h2>
        <div className="bg-white rounded-lg border border-teal-200 p-6 mb-8">
          <div className="space-y-3">
            <p className="text-slate-600 text-sm">
              <strong>Docker</strong> is a containerization platform that packages applications and their dependencies into containers. A container is a lightweight, isolated environment that can run anywhere.
            </p>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2 text-sm">Key Docker Concepts:</h4>
              <ul className="space-y-1 text-slate-600 text-sm">
                <li>• <strong>Image:</strong> Blueprint for creating containers</li>
                <li>• <strong>Container:</strong> Running instance of an image</li>
                <li>• <strong>Dockerfile:</strong> Script to build Docker images</li>
                <li>• <strong>Docker Hub:</strong> Repository for sharing images</li>
              </ul>
            </div>
            <p className="text-slate-600 text-sm font-semibold">Use Case: Single machine deployments, microservices, development environments</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">What is Kubernetes?</h2>
        <div className="bg-white rounded-lg border border-teal-200 p-6 mb-8">
          <div className="space-y-3">
            <p className="text-slate-600 text-sm">
              <strong>Kubernetes (K8s)</strong> is a container orchestration platform that automates deployment, scaling, and management of containerized applications. It manages multiple containers across a cluster of machines.
            </p>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2 text-sm">Key Kubernetes Concepts:</h4>
              <ul className="space-y-1 text-slate-600 text-sm">
                <li>• <strong>Cluster:</strong> Group of machines running Kubernetes</li>
                <li>• <strong>Pod:</strong> Smallest deployable unit (often wraps a Docker container)</li>
                <li>• <strong>Service:</strong> Network abstraction for pods</li>
                <li>• <strong>Deployment:</strong> Declarative way to manage pods</li>
              </ul>
            </div>
            <p className="text-slate-600 text-sm font-semibold">Use Case: Production deployments, auto-scaling, multi-node clusters, enterprise applications</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Side-by-Side Comparison</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-100 rounded-lg p-6">
            <h3 className="font-bold text-slate-900 mb-4">Docker</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>• <strong>Purpose:</strong> Containerization</li>
              <li>• <strong>Scope:</strong> Single machine focus</li>
              <li>• <strong>Learning Curve:</strong> Easy to learn</li>
              <li>• <strong>Manual Management:</strong> Manage containers manually</li>
              <li>• <strong>Scaling:</strong> Limited to single machine</li>
              <li>• <strong>Networking:</strong> Basic container networking</li>
            </ul>
          </div>
          <div className="bg-slate-100 rounded-lg p-6">
            <h3 className="font-bold text-slate-900 mb-4">Kubernetes</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>• <strong>Purpose:</strong> Orchestration</li>
              <li>• <strong>Scope:</strong> Multi-machine cluster focus</li>
              <li>• <strong>Learning Curve:</strong> Steeper learning curve</li>
              <li>• <strong>Automation:</strong> Automate management</li>
              <li>• <strong>Scaling:</strong> Auto-scaling across clusters</li>
              <li>• <strong>Networking:</strong> Advanced networking & service mesh</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">How They Work Together</h2>
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border border-teal-200 p-6 mb-8">
          <p className="text-slate-700 text-sm mb-4">
            <strong>Docker</strong> creates the containers. <strong>Kubernetes</strong> manages those containers:
          </p>
          <ol className="space-y-2 text-slate-600 text-sm">
            <li><strong>1. Create with Docker:</strong> Build application and package in Docker image</li>
            <li><strong>2. Deploy with Kubernetes:</strong> Submit Docker image to Kubernetes cluster</li>
            <li><strong>3. Kubernetes Manages:</strong> Auto-scaling, health checks, updates, networking</li>
          </ol>
          <p className="text-slate-700 text-sm mt-4 font-semibold">
            Result: Scalable, self-healing, production-ready application infrastructure
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">When to Use Each</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900 mb-3">Docker Alone</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>✓ Development environments</li>
              <li>✓ Small projects</li>
              <li>✓ Testing and CI/CD pipelines</li>
              <li>✓ Single machine deployments</li>
              <li>✓ Learning containerization basics</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900 mb-3">Docker + Kubernetes</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>✓ Production deployments</li>
              <li>✓ Multi-node clusters</li>
              <li>✓ Auto-scaling applications</li>
              <li>✓ Self-healing requirements</li>
              <li>✓ Enterprise applications</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-teal-50 rounded-xl border border-teal-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Master Docker & Kubernetes</h3>
          <p className="text-slate-600 mb-6">
            ExamPassPro offers hands-on training for both Docker and Kubernetes. Learn containerization, then master orchestration with our comprehensive courses.
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
