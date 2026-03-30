import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface ComparisonContent {
  title: string
  description: string
  metaDescription: string
  sections: Array<{
    title: string
    content: string
  }>
}

const comparisonsData: Record<string, ComparisonContent> = {
  'aws-saa-vs-developer': {
    title: 'AWS Solutions Architect Associate vs Developer Associate: Complete Comparison',
    description: 'Compare AWS SAA-C03 vs AWS Developer Associate certifications. Learn the differences in exam focus, difficulty, job roles, and salary potential.',
    metaDescription: 'AWS SAA vs Developer Associate comparison. Learn which certification is right for you: difficulty, exam topics, job roles, and salary expectations.',
    sections: [
      {
        title: 'Quick Overview',
        content: `<p class="text-slate-600 mb-4">Both AWS Solutions Architect Associate (SAA-C03) and AWS Developer Associate are intermediate-level AWS certifications, but they target different career paths:</p>
<ul class="space-y-2 text-slate-600">
<li><strong>AWS SAA:</strong> For architects designing AWS infrastructure, focusing on scalability, high availability, and cost optimization</li>
<li><strong>AWS Developer:</strong> For developers building applications on AWS, focusing on coding, APIs, and application development</li>
</ul>`
      },
      {
        title: 'Exam Difficulty & Pass Rate',
        content: `<table class="w-full text-sm border-collapse">
<tr class="border-b border-slate-200">
<th class="text-left py-2 px-2 bg-slate-100">Metric</th>
<th class="text-left py-2 px-2 bg-slate-100">SAA-C03</th>
<th class="text-left py-2 px-2 bg-slate-100">Developer Associate</th>
</tr>
<tr class="border-b border-slate-200">
<td class="py-2 px-2">Difficulty</td>
<td class="py-2 px-2">Moderate-Hard</td>
<td class="py-2 px-2">Moderate</td>
</tr>
<tr class="border-b border-slate-200">
<td class="py-2 px-2">Pass Rate</td>
<td class="py-2 px-2">~45-55%</td>
<td class="py-2 px-2">~55-65%</td>
</tr>
<tr>
<td class="py-2 px-2">Study Time</td>
<td class="py-2 px-2">120-200 hours</td>
<td class="py-2 px-2">100-150 hours</td>
</tr>
</table>`
      },
      {
        title: 'Exam Content & Topics',
        content: `<div class="space-y-4">
<div>
<h4 class="font-semibold text-slate-900 mb-2">AWS SAA-C03 (65 questions, 130 min)</h4>
<ul class="space-y-1 text-slate-600 text-sm">
<li>✓ Design resilient architectures (30%)</li>
<li>✓ Design high-performing architectures (28%)</li>
<li>✓ Design secure applications & architectures (24%)</li>
<li>✓ Design cost-optimized architectures (18%)</li>
<li>✓ Focus: Infrastructure, networking, storage, databases, security groups, IAM policies</li>
</ul>
</div>
<div>
<h4 class="font-semibold text-slate-900 mb-2">Developer Associate (65 questions, 130 min)</h4>
<ul class="space-y-1 text-slate-600 text-sm">
<li>✓ Write secure and optimized code (25%)</li>
<li>✓ Develop AWS-hosted applications (33%)</li>
<li>✓ Deploy securely and at scale (22%)</li>
<li>✓ Write code for AWS services (20%)</li>
<li>✓ Focus: SDKs, APIs, Lambda, DynamoDB, CodeDeploy, CloudFormation templates</li>
</ul>
</div>
</div>`
      },
      {
        title: 'Job Roles & Career Paths',
        content: `<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<h4 class="font-semibold text-slate-900 mb-2">After AWS SAA</h4>
<ul class="space-y-1 text-slate-600 text-sm">
<li>• Solutions Architect</li>
<li>• Cloud Infrastructure Engineer</li>
<li>• DevOps Engineer</li>
<li>• Enterprise Architect</li>
<li>• Technical Lead</li>
<li>Avg Salary: $130,000 - $160,000/year</li>
</ul>
</div>
<div>
<h4 class="font-semibold text-slate-900 mb-2">After Developer Associate</h4>
<ul class="space-y-1 text-slate-600 text-sm">
<li>• AWS Developer</li>
<li>• Backend Engineer</li>
<li>• Full Stack Developer</li>
<li>• Cloud Application Developer</li>
<li>• Senior Developer</li>
<li>Avg Salary: $120,000 - $150,000/year</li>
</ul>
</div>
</div>`
      },
      {
        title: 'Prerequisite Knowledge',
        content: `<div class="space-y-4">
<div class="p-4 bg-blue-50 rounded-lg">
<h4 class="font-semibold text-slate-900 mb-2">AWS SAA-C03 Prerequisites</h4>
<p class="text-sm text-slate-600">Recommended: AWS Cloud Practitioner certification (or equivalent knowledge)</p>
<ul class="mt-2 space-y-1 text-sm text-slate-600">
<li>• Understanding of AWS core services (EC2, S3, RDS, VPC)</li>
<li>• Knowledge of networking (subnets, security groups, NACLs)</li>
<li>• Database concepts (relational vs NoSQL)</li>
<li>• Basic infrastructure design principles</li>
</ul>
</div>
<div class="p-4 bg-green-50 rounded-lg">
<h4 class="font-semibold text-slate-900 mb-2">Developer Associate Prerequisites</h4>
<p class="text-sm text-slate-600">Recommended: AWS Cloud Practitioner + 1 year AWS development experience</p>
<ul class="mt-2 space-y-1 text-sm text-slate-600">
<li>• Proficiency in at least one programming language (Python, Java, Node.js)</li>
<li>• Understanding of REST APIs and microservices</li>
<li>• Knowledge of CI/CD concepts</li>
<li>• Familiarity with AWS SDK usage</li>
</ul>
</div>
</div>`
      },
      {
        title: 'Which Certification Should You Choose?',
        content: `<div class="space-y-4">
<div class="p-4 border-l-4 border-blue-500 bg-blue-50">
<h4 class="font-semibold text-slate-900 mb-2">Choose AWS SAA If...</h4>
<ul class="space-y-1 text-sm text-slate-600">
<li>✓ You want to design and architect cloud solutions</li>
<li>✓ You're interested in infrastructure and operations roles</li>
<li>✓ You prefer high-level system design over coding</li>
<li>✓ You want to become a Solutions Architect or Cloud Architect</li>
<li>✓ You're making career transitions from IT Operations</li>
</ul>
</div>
<div class="p-4 border-l-4 border-green-500 bg-green-50">
<h4 class="font-semibold text-slate-900 mb-2">Choose Developer Associate If...</h4>
<ul class="space-y-1 text-sm text-slate-600">
<li>✓ You're a software developer wanting to specialize in AWS</li>
<li>✓ You build applications and services on AWS</li>
<li>✓ You prefer hands-on coding over infrastructure design</li>
<li>✓ You want to become an AWS-focused Backend or Full Stack Developer</li>
<li>✓ You're already comfortable with programming concepts</li>
</ul>
</div>
</div>`
      },
      {
        title: 'Study Plan & Resources',
        content: `<div class="space-y-4">
<h4 class="font-semibold text-slate-900 mb-3">Both certifications require:</h4>
<ul class="space-y-2 text-sm text-slate-600">
<li>📚 Official AWS training courses (A Cloud Guru, Linux Academy, or AWS Training)</li>
<li>🧪 Practice exams with 1000+ real exam-style questions</li>
<li>👨‍💻 Hands-on labs and real AWS account experience</li>
<li>📖 White papers: AWS Best Practices, Architectural Patterns</li>
<li>💬 Study groups and community Q&A</li>
</ul>
<p class="mt-4 text-sm text-slate-600"><strong>Pro Tip:</strong> Consider getting both certifications. Many professionals do SAA first for architecture foundation, then Developer Associate for development skills. The knowledge overlaps significantly (~40%), making the second cert easier to achieve.</p>
</div>`
      },
    ],
  },
  'azure-az900-vs-administrator': {
    title: 'Azure AZ-900 vs Azure Administrator (AZ-104): Complete Guide',
    description: 'Compare Azure AZ-900 Fundamentals vs AZ-104 Administrator. Learn the differences, difficulty, job roles, and career paths.',
    metaDescription: 'Azure AZ-900 vs AZ-104 Administrator certification comparison. Difficulty, exam topics, job roles, and which to choose.',
    sections: [
      {
        title: 'Overview: Fundamentals vs Administration',
        content: `<p class="text-slate-600 mb-4">Two distinct Microsoft Azure certifications for different career levels:</p>
<ul class="space-y-2 text-slate-600">
<li><strong>AZ-900:</strong> Entry-level fundamentals - basic Azure concepts, cloud principles, and services</li>
<li><strong>AZ-104:</strong> Administrator - managing Azure subscriptions, resources, networking, and infrastructure</li>
</ul>
<p class="text-slate-600 mt-4 p-3 bg-yellow-50 rounded">⚠️ <strong>Important:</strong> AZ-104 is the advanced certification. Most people start with AZ-900 as foundation.</p>`
      },
      {
        title: 'Exam Difficulty & Time Investment',
        content: `<table class="w-full text-sm border-collapse">
<tr class="border-b border-slate-200">
<th class="text-left py-2 px-2 bg-slate-100">Factor</th>
<th class="text-left py-2 px-2 bg-slate-100">AZ-900</th>
<th class="text-left py-2 px-2 bg-slate-100">AZ-104</th>
</tr>
<tr class="border-b border-slate-200">
<td class="py-2 px-2">Level</td>
<td class="py-2 px-2">Beginner (Entry-level)</td>
<td class="py-2 px-2">Intermediate (Administrator)</td>
</tr>
<tr class="border-b border-slate-200">
<td class="py-2 px-2">Questions</td>
<td class="py-2 px-2">40-60</td>
<td class="py-2 px-2">40-55</td>
</tr>
<tr class="border-b border-slate-200">
<td class="py-2 px-2">Time Limit</td>
<td class="py-2 px-2">85 minutes</td>
<td class="py-2 px-2">150 minutes</td>
</tr>
<tr class="border-b border-slate-200">
<td class="py-2 px-2">Pass Rate</td>
<td class="py-2 px-2">~70%+</td>
<td class="py-2 px-2">~40-50%</td>
</tr>
<tr>
<td class="py-2 px-2">Study Time</td>
<td class="py-2 px-2">20-40 hours</td>
<td class="py-2 px-2">100-150 hours</td>
</tr>
</table>`
      },
      {
        title: 'Exam Topics & Content',
        content: `<div class="space-y-4">
<div class="p-4 bg-blue-50 rounded-lg">
<h4 class="font-semibold text-slate-900 mb-2">AZ-900 Topics (40% each)</h4>
<ul class="space-y-1 text-slate-600 text-sm">
<li>• Cloud concepts: benefits, types, services models</li>
<li>• Core Azure services: compute, networking, storage</li>
<li>• Azure security, compliance, cost management</li>
<li>• Basic Azure Portal navigation and resource creation</li>
</ul>
</div>
<div class="p-4 bg-purple-50 rounded-lg">
<h4 class="font-semibold text-slate-900 mb-2">AZ-104 Topics</h4>
<ul class="space-y-1 text-slate-600 text-sm">
<li>• Manage Azure identities & governance (25%)</li>
<li>• Implement & manage storage (10%)</li>
<li>• Deploy & manage Azure compute resources (25%)</li>
<li>• Configure & manage virtual networks (20%)</li>
<li>• Monitor & maintain Azure resources (20%)</li>
</ul>
</div>
</div>`
      },
      {
        title: 'Career Progression & Salaries',
        content: `<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="p-4 border border-slate-200 rounded-lg">
<h4 class="font-semibold text-slate-900 mb-3">AZ-900 Career Impact</h4>
<p class="text-sm text-slate-600 mb-3">Good for career starters and transition:</p>
<ul class="space-y-1 text-sm text-slate-600">
<li>• Cloud Support Associate</li>
<li>• Junior Cloud Engineer</li>
<li>• IT Support Specialist</li>
<li>• Cloud Operations Associate</li>
<li class="mt-3 text-yellow-700">💰 ~$45,000 - $65,000</li>
</ul>
</div>
<div class="p-4 border border-slate-200 rounded-lg">
<h4 class="font-semibold text-slate-900 mb-3">AZ-104 Career Impact</h4>
<p class="text-sm text-slate-600 mb-3">Opens door to administration roles:</p>
<ul class="space-y-1 text-sm text-slate-600">
<li>• Azure Administrator</li>
<li>• Cloud Operations Engineer</li>
<li>• Systems Administrator</li>
<li>• Infrastructure Engineer</li>
<li class="mt-3 text-green-700">💰 $90,000 - $130,000</li>
</ul>
</div>
</div>`
      },
      {
        title: 'Learning Path: AZ-900 → AZ-104',
        content: `<div class="space-y-4">
<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
<h4 class="font-semibold text-slate-900 mb-2">Recommended Learning Path</h4>
<ol class="space-y-2 text-sm text-slate-600">
<li><strong>1. Start with AZ-900</strong> (4-6 weeks)</li>
<li class="text-xs text-slate-500">↓ Builds cloud fundamentals foundation</li>
<li><strong>2. Gain hands-on experience</strong> (2-3 months)</li>
<li class="text-xs text-slate-500">↓ Create VMs, storage, networks in Azure Portal</li>
<li><strong>3. Pursue AZ-104</strong> (3-4 months)</li>
<li class="text-xs text-slate-500">↓ Advanced administration and management</li>
<li><strong>4. Optional: AZ-305 (Solutions Architect)</strong></li>
<li class="text-xs text-slate-500">Build on your admin knowledge for architecture roles</li>
</ol>
</div>
<p class="text-sm text-slate-600 p-3 bg-yellow-50 rounded mt-4">
<strong>Timeline:</strong> Combined learning path = 6-9 months total to reach AZ-104 level
</p>
</div>`
      },
    ],
  },
  'comptia-aplus-vs-network': {
    title: 'CompTIA A+ vs CompTIA Network+: Entry-Level CompTIA Comparison',
    description: 'Compare CompTIA A+ vs Network+ certifications. Learn which is easier, job demand, salary, and which to pursue first.',
    metaDescription: 'CompTIA A+ vs Network+ comparison: difficulty, job roles, salary, and which to take first.',
    sections: [
      {
        title: 'Quick Comparison: A+ vs Network+',
        content: `<div class="space-y-4">
<p class="text-slate-600"><strong>CompTIA A+:</strong> Hardware, software, operating systems, troubleshooting. For support roles.</p>
<p class="text-slate-600"><strong>CompTIA Network+:</strong> Networking, protocols, infrastructure. For network roles.</p>
<p class="text-slate-600 p-3 bg-blue-50 rounded mt-3">💡 <strong>Many start with A+, then Network+</strong> because A+ provides essential IT fundamentals that help with Network+ study.</p>
</div>`
      },
      {
        title: 'Exam Difficulty & Requirements',
        content: `<table class="w-full text-sm border-collapse">
<tr class="border-b border-slate-200">
<th class="text-left py-2 px-2 bg-slate-100">Metric</th>
<th class="text-left py-2 px-2 bg-slate-100">A+</th>
<th class="text-left py-2 px-2 bg-slate-100">Network+</th>
</tr>
<tr class="border-b border-slate-200">
<td class="py-2 px-2">Exams Required</td>
<td class="py-2 px-2">2 (Core + Practical)</td>
<td class="py-2 px-2">1 comprehensive</td>
</tr>
<tr class="border-b border-slate-200">
<td class="py-2 px-2">Difficulty</td>
<td class="py-2 px-2">Entry-level, moderate</td>
<td class="py-2 px-2">Intermediate, harder</td>
</tr>
<tr class="border-b border-slate-200">
<td class="py-2 px-2">Questions</td>
<td class="py-2 px-2">90/100 each</td>
<td class="py-2 px-2">65</td>
</tr>
<tr class="border-b border-slate-200">
<td class="py-2 px-2">Pass Rate</td>
<td class="py-2 px-2">~50-60%</td>
<td class="py-2 px-2">~40-50%</td>
</tr>
<tr>
<td class="py-2 px-2">Study Time</td>
<td class="py-2 px-2">150-200 hours</td>
<td class="py-2 px-2">120-180 hours</td>
</tr>
</table>`
      },
      {
        title: 'Job Roles & Career Paths',
        content: `<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<h4 class="font-semibold text-slate-900 mb-3">CompTIA A+ Opens Doors To:</h4>
<ul class="space-y-1 text-slate-600 text-sm">
<li>• Desktop Support Technician</li>
<li>• IT Support Specialist</li>
<li>• Field Service Technician</li>
<li>• Junior Systems Administrator</li>
<li class="pt-2 text-green-700 font-semibold">Salary: $38,000-$52,000</li>
</ul>
</div>
<div>
<h4 class="font-semibold text-slate-900 mb-3">CompTIA Network+ Opens Doors To:</h4>
<ul class="space-y-1 text-slate-600 text-sm">
<li>• Network Technician</li>
<li>• Junior Network Administrator</li>
<li>• NOC Technician</li>
<li>• IT Systems Administrator</li>
<li class="pt-2 text-green-700 font-semibold">Salary: $50,000-$70,000</li>
</ul>
</div>
</div>`
      },
    ],
  },
  'kubernetes-cka-vs-docker': {
    title: 'Kubernetes CKA vs Docker Certified: Container Certification Comparison',
    description: 'Compare Kubernetes CKA vs Docker Certified. Learn the differences in focus, difficulty, hands-on requirements, and career paths.',
    metaDescription: 'Kubernetes CKA vs Docker Certified comparison: difficulty, hands-on focus, job demand, and which to pursue.',
    sections: [
      {
        title: 'Understanding Kubernetes vs Docker',
        content: `<div class="space-y-4">
<p class="text-slate-600"><strong>Docker:</strong> Containerization platform - packages applications into containers. The foundation of modern container technology.</p>
<p class="text-slate-600"><strong>Kubernetes:</strong> Container orchestration - manages, scales, and deploys containers across clusters. The industry standard for production.</p>
<p class="text-slate-600 p-3 bg-blue-50 rounded mt-3">💡 <strong>Relationship:</strong> Docker is what you use to build containers. Kubernetes is what you use to manage containers at scale.</p>
</div>`
      },
      {
        title: 'Certification Difficulty & Format',
        content: `<table class="w-full text-sm border-collapse">
<tr class="border-b border-slate-200">
<th class="text-left py-2 px-2 bg-slate-100">Factor</th>
<th class="text-left py-2 px-2 bg-slate-100">Kubernetes CKA</th>
<th class="text-left py-2 px-2 bg-slate-100">Docker Certified</th>
</tr>
<tr class="border-b border-slate-200">
<td class="py-2 px-2">Level</td>
<td class="py-2 px-2">Advanced/Expert</td>
<td class="py-2 px-2">Intermediate</td>
</tr>
<tr class="border-b border-slate-200">
<td class="py-2 px-2">Format</td>
<td class="py-2 px-2">100% practical/hands-on</td>
<td class="py-2 px-2">Multiple choice + practical</td>
</tr>
<tr class="border-b border-slate-200">
<td class="py-2 px-2">Time</td>
<td class="py-2 px-2">2 hours (intense)</td>
<td class="py-2 px-2">90 minutes</td>
</tr>
<tr class="border-b border-slate-200">
<td class="py-2 px-2">Pass Rate</td>
<td class="py-2 px-2">~45-55%</td>
<td class="py-2 px-2">~60-70%</td>
</tr>
<tr>
<td class="py-2 px-2">Study Time</td>
<td class="py-2 px-2">200-300 hours</td>
<td class="py-2 px-2">80-120 hours</td>
</tr>
</table>`
      },
      {
        title: 'Exam Content Overview',
        content: `<div class="space-y-4">
<div class="p-4 bg-red-50 rounded-lg">
<h4 class="font-semibold text-slate-900 mb-2">Kubernetes CKA Exam (100% Hands-on Lab)</h4>
<ul class="space-y-1 text-slate-600 text-sm">
<li>✓ Core Concepts (13%) - Pods, ConfigMaps, ReplicaSets</li>
<li>✓ Workloads (20%) - Deployments, StatefulSets, DaemonSets</li>
<li>✓ Services & Networking (20%)</li>
<li>✓ Storage (10%)</li>
<li>✓ Troubleshooting (30%) - Debugging clusters, nodes, pods</li>
<p class="text-xs text-slate-500 mt-3 font-semibold">💻 Must know kubectl commands, YAML, cluster troubleshooting by heart</p>
</ul>
</div>
<div class="p-4 bg-blue-50 rounded-lg">
<h4 class="font-semibold text-slate-900 mb-2">Docker Certified Associate (Mix of Theory + Practice)</h4>
<ul class="space-y-1 text-slate-600 text-sm">
<li>✓ Image Creation, Management, Registry (20%)</li>
<li>✓ Container Lifecycle (25%)</li>
<li>✓ Storage & Volumes (10%)</li>
<li>✓ Networking (15%)</li>
<li>✓ Docker Compose (10%)</li>
<li>✓ Security (20%)</li>
</ul>
</div>
</div>`
      },
      {
        title: 'Career Paths & Salaries',
        content: `<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="p-4 border border-slate-200 rounded-lg">
<h4 class="font-semibold text-slate-900 mb-3">Kubernetes CKA Path</h4>
<p class="text-sm text-slate-600 mb-3">For DevOps & SRE roles:</p>
<ul class="space-y-1 text-sm text-slate-600">
<li>• Kubernetes Administrator</li>
<li>• DevOps Engineer</li>
<li>• Site Reliability Engineer (SRE)</li>
<li>• Platform Engineer</li>
<li class="pt-3 text-green-700 font-semibold">💰 $120,000-$170,000</li>
</ul>
</div>
<div class="p-4 border border-slate-200 rounded-lg">
<h4 class="font-semibold text-slate-900 mb-3">Docker Certified Path</h4>
<p class="text-sm text-slate-600 mb-3">For DevOps & application dev:</p>
<ul class="space-y-1 text-sm text-slate-600">
<li>• DevOps Engineer</li>
<li>• Backend/Cloud Developer</li>
<li>• Systems Engineer</li>
<li>• Release Engineer</li>
<li class="pt-3 text-green-700 font-semibold">💰 $100,000-$150,000</li>
</ul>
</div>
</div>`
      },
    ],
  },
}

export function generateMetadata({ params }: { params: { comparison: string } }): Metadata {
  const content = comparisonsData[params.comparison]
  if (!content) return {}

  return {
    title: `${content.title} — ExamPassPro`,
    description: content.metaDescription,
    alternates: {
      canonical: `/comparisons/${params.comparison}`,
    },
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      url: `https://exampasspro.com/comparisons/${params.comparison}`,
      type: 'article',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  }
}

export default function ComparisonPage({ params }: { params: { comparison: string } }) {
  const content = comparisonsData[params.comparison]
  if (!content) return notFound()

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb & Hero */}
      <section className="bg-slate-900 py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link href="/" className="hover:text-slate-200 transition-colors">Home</Link>
            <span>›</span>
            <Link href="/comparisons" className="hover:text-slate-200 transition-colors">Comparisons</Link>
            <span>›</span>
            <span className="text-slate-200 truncate">{content.title}</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white mb-3">
            {content.title}
          </h1>
          <p className="text-slate-400 text-base">
            {content.description}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto py-12 px-6">
        <div className="prose prose-sm max-w-none">
          {content.sections.map((section, idx) => (
            <div key={idx} className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {section.title}
              </h2>
              <div
                className="text-slate-600 space-y-4"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-sky-50 rounded-xl border border-sky-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Ready to Study for Your Certification?</h3>
          <p className="text-slate-600 mb-6">
            ExamPassPro offers comprehensive exam dumps, practice tests, hands-on labs, and AI-powered study assistance for all these certifications.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-colors"
          >
            Browse Exam Dumps & Practice Tests
          </Link>
        </div>
      </article>
    </div>
  )
}
