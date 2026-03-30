import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Microsoft Azure Certification Path: AZ-900 to Solutions Architect — ExamPassPro',
  description: 'Complete Azure certification roadmap from Fundamentals (AZ-900) to Solutions Architect (AZ-305). 10-16 month learning path.',
  alternates: {
    canonical: '/roadmaps/azure-certification-path',
  },
  openGraph: {
    title: 'Microsoft Azure Certification Path & Learning Roadmap',
    description: 'Step-by-step Azure career path from AZ-900 Fundamentals to AZ-305 Solutions Architect.',
    url: 'https://exampasspro.com/roadmaps/azure-certification-path',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft Azure Certification Path & Learning Roadmap',
    description: 'Step-by-step Azure career path from AZ-900 Fundamentals to AZ-305 Solutions Architect.',
  },
}

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero with Background Image */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 min-h-[300px] flex items-center justify-center px-6 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1280&fit=crop"
            alt="Microsoft Azure cloud"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-2 text-xs text-blue-100 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/roadmaps" className="hover:text-white transition-colors">Roadmaps</Link>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Microsoft Azure Certification Path
          </h1>
          <p className="text-blue-100 text-lg">
            Complete 10-16 month learning path from Azure Fundamentals to Solutions Architect expertise.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Roadmap Overview</h2>
        <p className="text-slate-600 mb-6">
          The Microsoft Azure certification path is ideal for professionals in enterprises using Microsoft technologies. Progress from cloud fundamentals through advanced solution architecture designed for Microsoft ecosystems.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Certification Progression</h2>
        <div className="space-y-6 mb-8">
          <div className="bg-white rounded-lg border-l-4 border-blue-500 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Level 1: Azure Fundamentals</h3>
            <p className="text-slate-600 text-sm mb-3"><strong>Azure Fundamentals (AZ-900)</strong></p>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li>• Duration: 2-3 weeks study</li>
              <li>• Pass Rate: 70%+</li>
              <li>• Cost: $99</li>
              <li>• Focus: Cloud concepts, Azure services, security</li>
              <li>• Salary: $45K-$65K</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border-l-4 border-blue-500 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Level 2: Azure Administrator</h3>
            <p className="text-slate-600 text-sm mb-3"><strong>Azure Administrator (AZ-104)</strong></p>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li>• Duration: 6-10 weeks study</li>
              <li>• Pass Rate: 40-50%</li>
              <li>• Cost: $165</li>
              <li>• Focus: Resource management, virtual machines, storage, networking</li>
              <li>• Salary: $90K-$130K</li>
              <li>• <span className="font-semibold text-green-700">Prerequisite: AZ-900 (recommended)</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border-l-4 border-blue-500 p-6">
            <h3 className="font-bold text-slate-900 mb-2">Level 3: Solutions Architect Expert</h3>
            <p className="text-slate-600 text-sm mb-3"><strong>Azure Solutions Architect (AZ-305)</strong></p>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li>• Duration: 10-14 weeks study</li>
              <li>• Pass Rate: 35-45%</li>
              <li>• Cost: $165</li>
              <li>• Focus: Advanced architecture, security, compliance, optimization</li>
              <li>• Salary: $140K-$170K+</li>
              <li>• <span className="font-semibold text-green-700">Prerequisite: AZ-104 (required)</span></li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Total Time Investment</h2>
        <div className="bg-blue-50 rounded-lg border border-blue-200 p-6 mb-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-black text-blue-600">2-3 weeks</div>
              <p className="text-sm text-slate-600 mt-1">AZ-900 Fundamentals</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-blue-600">6-10 weeks</div>
              <p className="text-sm text-slate-600 mt-1">AZ-104 Administrator</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-blue-600">10-14 weeks</div>
              <p className="text-sm text-slate-600 mt-1">AZ-305 Solutions Architect</p>
            </div>
          </div>
          <p className="text-slate-600 text-sm mt-4 text-center">
            <strong>Total: 18-27 weeks (4-7 months intensive, 10-16 months at moderate pace)</strong>
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">Who Should Follow This Path?</h2>
        <div className="bg-white rounded-lg border border-slate-200 p-6 mb-8">
          <ul className="space-y-2 text-slate-600 text-sm">
            <li>✓ Enterprise IT professionals in Microsoft environments</li>
            <li>✓ System administrators moving to cloud management</li>
            <li>✓ Infrastructure engineers designing Azure solutions</li>
            <li>✓ IT consultants specializing in Microsoft cloud</li>
            <li>✓ Professionals seeking hybrid cloud expertise</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Start Your Azure Certification Journey</h3>
          <p className="text-slate-600 mb-6">
            ExamPassPro provides comprehensive study materials for all Azure certifications.
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
