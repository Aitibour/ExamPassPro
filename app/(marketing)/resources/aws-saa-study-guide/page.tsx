import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AWS Solutions Architect Associate (SAA-C03) Study Guide — ExamPassPro',
  description: 'Complete AWS SAA-C03 study guide covering all 5 core domains. Learn exam topics, practice strategies, and pass on your first attempt.',
  alternates: {
    canonical: '/resources/aws-saa-study-guide',
  },
  openGraph: {
    title: 'AWS SAA-C03 Study Guide',
    description: 'Comprehensive guide to passing AWS Solutions Architect Associate exam.',
    url: 'https://exampasspro.com/resources/aws-saa-study-guide',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero with Image */}
      <section className="bg-gradient-to-r from-orange-500 to-amber-600 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-xs text-orange-100 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
              </div>
              <h1 className="text-3xl lg:text-4xl font-black text-white mb-4">
                AWS SAA-C03 Study Guide
              </h1>
              <p className="text-orange-100 text-base mb-6">
                Complete guide to passing AWS Solutions Architect Associate exam. Master all 5 domains and exam strategies.
              </p>
              <div className="flex gap-4">
                <Link href="/courses" className="inline-flex px-6 py-2 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors">
                  Practice AWS SAA
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1920&h=1280&fit=crop"
                alt="AWS architecture design"
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
          The AWS Solutions Architect Associate (SAA-C03) certification validates your ability to design secure, reliable, and cost-effective solutions on AWS. This comprehensive guide covers all 5 exam domains and proven strategies for success.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Exam Structure</h2>
        <div className="bg-white rounded-lg border border-orange-200 p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-black text-orange-600">65</div>
              <p className="text-sm text-slate-600 mt-1">Questions</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-orange-600">130 min</div>
              <p className="text-sm text-slate-600 mt-1">Duration</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-orange-600">720</div>
              <p className="text-sm text-slate-600 mt-1">Pass Score</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-orange-600">$150</div>
              <p className="text-sm text-slate-600 mt-1">Cost</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">5 Core Domains</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-orange-50 rounded-lg border border-orange-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">Domain 1: Design Resilient Architectures (26%)</h3>
            <p className="text-slate-600 text-sm">EC2, Auto Scaling, Load Balancing, Multi-AZ deployments, failover strategies</p>
          </div>
          <div className="bg-orange-50 rounded-lg border border-orange-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">Domain 2: Design Performant Architectures (24%)</h3>
            <p className="text-slate-600 text-sm">CloudFront, ElastiCache, RDS optimization, S3 performance, database selection</p>
          </div>
          <div className="bg-orange-50 rounded-lg border border-orange-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">Domain 3: Specify Secure Applications (25%)</h3>
            <p className="text-slate-600 text-sm">IAM, security groups, NACLs, encryption, KMS, VPC security, compliance</p>
          </div>
          <div className="bg-orange-50 rounded-lg border border-orange-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">Domain 4: Design Cost-Optimized Architectures (15%)</h3>
            <p className="text-slate-600 text-sm">Reserved instances, Savings Plans, spot instances, cost management, monitoring</p>
          </div>
          <div className="bg-orange-50 rounded-lg border border-orange-200 p-5">
            <h3 className="font-bold text-slate-900 mb-2">Domain 5: Operational Excellence (10%)</h3>
            <p className="text-slate-600 text-sm">CloudWatch, AWS Systems Manager, automation, monitoring, logging</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Study Strategy (8-12 Weeks)</h2>
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-8">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="text-2xl font-black text-orange-600 min-w-12">Week 1-2</div>
              <div><p className="font-semibold text-slate-900 mb-1">Foundation & Domain 1</p><p className="text-sm text-slate-600">Learn basic AWS services, EC2, networking, Auto Scaling</p></div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl font-black text-orange-600 min-w-12">Week 3-4</div>
              <div><p className="font-semibold text-slate-900 mb-1">Domains 2 & 3</p><p className="text-sm text-slate-600">Database, caching, security, IAM, encryption</p></div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl font-black text-orange-600 min-w-12">Week 5-6</div>
              <div><p className="font-semibold text-slate-900 mb-1">Domains 4 & 5</p><p className="text-sm text-slate-600">Cost optimization, operations, monitoring</p></div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl font-black text-orange-600 min-w-12">Week 7-12</div>
              <div><p className="font-semibold text-slate-900 mb-1">Practice & Review</p><p className="text-sm text-slate-600">Full practice exams, weak area review, final prep</p></div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Key Tips for Success</h2>
        <ul className="space-y-2 text-slate-600 text-sm mb-8">
          <li>✓ Focus on exam-specific topics, not all AWS features</li>
          <li>✓ Take at least 3-4 full-length practice exams</li>
          <li>✓ Understand the "why" behind architectural decisions</li>
          <li>✓ Memorize common architectural patterns</li>
          <li>✓ Review questions you got wrong multiple times</li>
        </ul>

        {/* CTA */}
        <div className="mt-12 p-8 bg-orange-50 rounded-xl border border-orange-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Ready to Master AWS SAA?</h3>
          <p className="text-slate-600 mb-6">
            Get practice exams, study guides, and hands-on labs to pass AWS SAA-C03 on your first attempt.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
          >
            Browse AWS SAA Course
          </Link>
        </div>
      </article>
    </div>
  )
}
