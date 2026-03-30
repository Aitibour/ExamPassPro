import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kubernetes CKA Tips & Tricks: Master the Hands-On Exam — ExamPassPro',
  description: 'Advanced tips for passing Kubernetes CKA exam. Master kubectl shortcuts, debugging techniques, and time-saving tricks for hands-on success.',
  alternates: {
    canonical: '/resources/kubernetes-cka-tips-and-tricks',
  },
  openGraph: {
    title: 'Kubernetes CKA Tips & Tricks',
    description: 'Expert techniques for passing the Kubernetes Certified Administrator hands-on exam.',
    url: 'https://exampasspro.com/resources/kubernetes-cka-tips-and-tricks',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kubernetes CKA Tips & Tricks',
    description: 'Expert techniques for passing the Kubernetes Certified Administrator hands-on exam.',
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
            alt="Kubernetes CKA exam preparation and coding"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-2 text-xs text-cyan-100 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Kubernetes CKA Tips & Tricks
          </h1>
          <p className="text-cyan-100 text-lg">
            Master kubectl shortcuts, debugging techniques, and time-saving tricks for exam success.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">CKA Exam Format</h2>
        <p className="text-slate-600 mb-6">
          Unlike traditional multiple-choice exams, the Kubernetes Certified Administrator (CKA) is a hands-on practical exam where you must complete real Kubernetes tasks on a live cluster. Time management and kubectl mastery are critical.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Essential kubectl Shortcuts</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-cyan-50 rounded-lg border border-cyan-200 p-4">
            <p className="font-mono text-sm font-semibold text-cyan-900 mb-2">kubectl get pods -o wide</p>
            <p className="text-slate-600 text-sm">Shows pods with node info and IP addresses</p>
          </div>
          <div className="bg-cyan-50 rounded-lg border border-cyan-200 p-4">
            <p className="font-mono text-sm font-semibold text-cyan-900 mb-2">kubectl explain pod.spec --recursive</p>
            <p className="text-slate-600 text-sm">See all available fields for pod specification</p>
          </div>
          <div className="bg-cyan-50 rounded-lg border border-cyan-200 p-4">
            <p className="font-mono text-sm font-semibold text-cyan-900 mb-2">kubectl dry-run=client -o yaml</p>
            <p className="text-slate-600 text-sm">Generate YAML without creating resources</p>
          </div>
          <div className="bg-cyan-50 rounded-lg border border-cyan-200 p-4">
            <p className="font-mono text-sm font-semibold text-cyan-900 mb-2">kubectl api-resources</p>
            <p className="text-slate-600 text-sm">List all available resources and API versions</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Debugging Techniques</h2>
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-8">
          <ul className="space-y-3 text-slate-600 text-sm">
            <li><strong>Pod Issues:</strong> kubectl logs, kubectl describe pod, kubectl exec -it</li>
            <li><strong>Network Issues:</strong> kubectl port-forward, kubectl exec nslookup</li>
            <li><strong>Permission Issues:</strong> kubectl auth can-i, kubectl get rbac</li>
            <li><strong>Resource Issues:</strong> kubectl top nodes, kubectl describe nodes</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Time Management Strategy</h2>
        <div className="bg-cyan-50 rounded-lg border border-cyan-200 p-6 mb-8">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-slate-900 font-semibold">Total Time:</span>
              <span className="text-cyan-600 font-bold">2 hours</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-900 font-semibold">Questions:</span>
              <span className="text-cyan-600 font-bold">15-20 tasks</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-900 font-semibold">Per question:</span>
              <span className="text-cyan-600 font-bold">6-8 minutes</span>
            </div>
            <div className="border-t border-cyan-200 pt-3">
              <p className="text-slate-600 text-sm">Strategy: Read all questions first (3 min), do easy ones first (40%), harder ones later (60%)</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-cyan-50 rounded-xl border border-cyan-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Master CKA Exam</h3>
          <p className="text-slate-600 mb-6">
            Get hands-on Kubernetes labs and practice exams to master the CKA.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
          >
            Access CKA Labs
          </Link>
        </div>
      </article>
    </div>
  )
}
