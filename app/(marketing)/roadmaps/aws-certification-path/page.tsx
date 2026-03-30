import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AWS Certification Path: Cloud Practitioner to Solutions Architect Professional — ExamPassPro',
  description: 'Complete AWS certification roadmap from beginner (Cloud Practitioner) to expert (Solutions Architect Professional). 12-18 month learning path.',
  alternates: {
    canonical: '/roadmaps/aws-certification-path',
  },
  openGraph: {
    title: 'AWS Certification Path & Learning Roadmap',
    description: 'Step-by-step AWS career path from Cloud Practitioner to Solutions Architect Professional.',
    url: 'https://exampasspro.com/roadmaps/aws-certification-path',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero with Image */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-700 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-xs text-orange-100 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <Link href="/roadmaps" className="hover:text-white transition-colors">Roadmaps</Link>
              </div>
              <h1 className="text-3xl lg:text-4xl font-black text-white mb-4">
                AWS Certification Path
              </h1>
              <p className="text-orange-100 text-base mb-6">
                Complete 12-18 month learning path from Cloud Practitioner fundamentals to Solutions Architect Professional expertise.
              </p>
              <div className="flex gap-4">
                <Link href="/courses" className="inline-flex px-6 py-2 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors">
                  Start AWS Path
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=1920&h=1280&fit=crop"
                alt="AWS cloud architecture"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Roadmap Overview</h2>
        <p className="text-slate-600 mb-6">
          The AWS certification path is designed for professionals aiming to become cloud architects. This roadmap takes you from cloud fundamentals through advanced solution design, suitable for both beginners and experienced IT professionals transitioning to cloud.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Certification Progression</h2>
        <div className="space-y-6 mb-8">
          <div className="bg-white rounded-lg border-l-4 border-orange-500 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Level 1: Cloud Foundations</h3>
            <p className="text-slate-600 text-sm mb-3"><strong>AWS Certified Cloud Practitioner (CLF-C02)</strong></p>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li>• Duration: 3-4 weeks study</li>
              <li>• Pass Rate: 75%+</li>
              <li>• Cost: $100</li>
              <li>• Focus: Cloud basics, AWS services overview, pricing</li>
              <li>• Salary: $45K-$60K</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border-l-4 border-orange-500 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Level 2: Solutions Architect Associate</h3>
            <p className="text-slate-600 text-sm mb-3"><strong>AWS Certified Solutions Architect - Associate (SAA-C03)</strong></p>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li>• Duration: 8-12 weeks study</li>
              <li>• Pass Rate: 45-55%</li>
              <li>• Cost: $150</li>
              <li>• Focus: Architecture design, EC2, RDS, S3, networking</li>
              <li>• Salary: $120K-$150K</li>
              <li>• <span className="font-semibold text-green-700">Prerequisite: Cloud Practitioner (recommended)</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border-l-4 border-orange-500 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Level 3: Solutions Architect Professional</h3>
            <p className="text-slate-600 text-sm mb-3"><strong>AWS Certified Solutions Architect - Professional (PAS-C02)</strong></p>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li>• Duration: 12-16 weeks study</li>
              <li>• Pass Rate: 30-40%</li>
              <li>• Cost: $300</li>
              <li>• Focus: Advanced architecture, security, optimization, automation</li>
              <li>• Salary: $155K-$185K+</li>
              <li>• <span className="font-semibold text-green-700">Prerequisite: Solutions Architect Associate (required)</span></li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Total Time Investment</h2>
        <div className="bg-orange-50 rounded-lg border border-orange-200 p-6 mb-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-black text-orange-600">3-4 weeks</div>
              <p className="text-sm text-slate-600 mt-1">Cloud Practitioner</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-orange-600">8-12 weeks</div>
              <p className="text-sm text-slate-600 mt-1">Solutions Architect Assoc.</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-orange-600">12-16 weeks</div>
              <p className="text-sm text-slate-600 mt-1">Solutions Architect Prof.</p>
            </div>
          </div>
          <p className="text-slate-600 text-sm mt-4 text-center">
            <strong>Total: 23-32 weeks (5-8 months of intensive study, 12-18 months at moderate pace)</strong>
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Who Should Follow This Path?</h2>
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-8">
          <ul className="space-y-2 text-slate-600 text-sm">
            <li>✓ Cloud infrastructure engineers wanting architecture expertise</li>
            <li>✓ DevOps engineers transitioning to solutions architecture</li>
            <li>✓ IT managers overseeing cloud implementations</li>
            <li>✓ Consultants designing cloud solutions for clients</li>
            <li>✓ System administrators expanding into cloud platforms</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-orange-50 rounded-xl border border-orange-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Start Your AWS Certification Journey</h3>
          <p className="text-slate-600 mb-6">
            ExamPassPro provides study guides, practice exams, and hands-on labs for every AWS certification level.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
          >
            Browse AWS Courses
          </Link>
        </div>
      </article>
    </div>
  )
}
