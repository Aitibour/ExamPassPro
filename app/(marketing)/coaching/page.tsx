import Link from 'next/link'

const PACKAGES = [
  {
    id: 'focus-session',
    name: 'Focus Session',
    duration: '60 minutes',
    price: '$99',
    badge: null,
    subline: 'Included in Pro plan',
    features: [
      'Full exam readiness assessment',
      'Focused on your weakest domains',
      'Live Q&A on any exam topic',
      'Personalised study plan',
      'Session recording sent after',
      'Email follow-up for 3 days',
    ],
    cta: 'Book 60-min Session',
    highlight: false,
  },
  {
    id: 'deep-dive',
    name: 'Deep Dive',
    duration: '90 minutes',
    price: '$149',
    subline: 'Included in Elite plan',
    features: [
      'Everything in Focus Session',
      'Domain-by-domain breakdown',
      'Hands-on concept walk-through',
      'Custom study roadmap (PDF)',
      'Recording + timestamped notes',
      'Email support for 7 days',
      'Mock exam strategy review',
    ],
    cta: 'Book 90-min Session',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    id: 'sprint-pack',
    name: 'Sprint Pack',
    duration: '3 × 90-min sessions',
    price: '$399',
    badge: null,
    subline: 'Best for multi-cert candidates',
    features: [
      'Everything in Deep Dive (×3)',
      'Weekly progress check-ins',
      'Unlimited email support',
      'Mock exam review each session',
      '100% Pass Guarantee extension',
      'Priority scheduling',
    ],
    cta: 'Book Sprint Pack',
    highlight: false,
  },
]

const COACHES = [
  {
    name: 'Alex Morgan',
    title: 'Cloud & ITSM Expert',
    certs: 'ServiceNow CSA/CSP · AWS SAA · CKA',
    exp: '12 years in cloud infrastructure & IT service management',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80',
    linkedin: 'https://linkedin.com/in/alex-morgan-itpro',
    sessions: '340+ sessions',
  },
  {
    name: 'Priya Nair',
    title: 'Azure & Google Cloud Specialist',
    certs: 'Azure 900/104 · Google ACE · ITIL 4 MP',
    exp: '9 years in enterprise cloud architecture & DevOps',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80',
    linkedin: 'https://linkedin.com/in/priya-nair-cloud',
    sessions: '280+ sessions',
  },
  {
    name: 'James Okonkwo',
    title: 'Network & Security Coach',
    certs: 'CompTIA Sec+ · CCNA · Terraform Associate',
    exp: '14 years in network engineering, cybersecurity & IaC',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
    linkedin: 'https://linkedin.com/in/james-okonkwo-ccna',
    sessions: '410+ sessions',
  },
]

export default function CoachingPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-slate-900 min-h-[240px] flex items-center justify-center px-6 text-center py-16">
        <div>
          <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
            Live 1-to-1 Sessions · Certified Instructors
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Pass Faster with <span className="text-sky-400">Personal Coaching</span>
          </h1>
          <p className="text-slate-400 text-lg mb-6">
            Book a live session with an expert who has already passed the exam you're preparing for.
          </p>
          <Link
            href="#packages"
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-xl transition-colors inline-block"
          >
            View Packages & Book →
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-black text-slate-900 text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Choose a Package', desc: 'Pick the session length that fits your prep timeline.' },
            { step: '2', title: 'Select a Time Slot', desc: 'Pick a date and time that works for you from our live calendar.' },
            { step: '3', title: 'Pay Securely', desc: 'Complete checkout via Stripe. You\'ll get an instant confirmation email.' },
            { step: '4', title: 'Join & Pass', desc: 'Connect via Google Meet. Leave with a study roadmap and recording.' },
          ].map(({ step, title, desc }) => (
            <div key={step} className="text-center">
              <div className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3 shadow-md">
                {step}
              </div>
              <h3 className="font-black text-slate-900 text-sm mb-1">{title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="bg-slate-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-slate-900 text-center mb-10">Choose Your Package</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {PACKAGES.map(pkg => (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-7 flex flex-col border ${
                  pkg.highlight
                    ? 'border-sky-500 bg-white shadow-lg shadow-sky-100'
                    : 'border-slate-200 bg-white'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {pkg.badge}
                  </div>
                )}
                <div className="mb-5">
                  <h3 className="font-black text-slate-900 text-lg">{pkg.name}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{pkg.duration}</p>
                  <div className="flex items-baseline gap-1 mt-3">
                    <span className="text-3xl font-black text-slate-900">{pkg.price}</span>
                    <span className="text-slate-500 text-sm">/ booking</span>
                  </div>
                </div>
                <ul className="space-y-2.5 mb-7 flex-1">
                  {pkg.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                          <polyline points="1,5 4,8 9,2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-sm text-slate-600">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/coaching/book?package=${pkg.id}`}
                  className={`w-full py-3 rounded-xl text-sm font-bold text-center transition-colors ${
                    pkg.highlight
                      ? 'bg-sky-500 hover:bg-sky-600 text-white'
                      : 'border border-slate-200 hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-6">
            All sessions include a <strong className="text-slate-600">100% Satisfaction Guarantee</strong>.
          </p>
        </div>
      </section>

      {/* Meet Your Coaches */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-black text-slate-900 text-center mb-3">Meet Your Coaches</h2>
        <p className="text-slate-500 text-center text-sm mb-12">
          Every coach has personally passed the exams they teach — multiple times.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {COACHES.map(coach => (
            <div key={coach.name} className="group">
              <div className="relative rounded-2xl overflow-hidden aspect-square mb-5 shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={coach.img}
                  alt={coach.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-black text-lg leading-tight">{coach.name}</div>
                  <div className="text-sky-300 text-xs font-semibold mt-0.5">{coach.title}</div>
                </div>
                <a
                  href={coach.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 w-8 h-8 bg-[#0A66C2] rounded-lg flex items-center justify-center hover:bg-[#004182] transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <p className="text-xs text-sky-600 font-semibold mb-1 leading-relaxed">{coach.certs}</p>
              <p className="text-xs text-slate-500 leading-relaxed mb-2">{coach.exp}</p>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-green-50 text-green-700 px-2 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                {coach.sessions} completed
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sky-500 py-14 px-6 text-center">
        <h2 className="text-2xl font-black text-white mb-3">Ready to accelerate your prep?</h2>
        <p className="text-sky-100 text-sm mb-6">Book a session today and walk into exam day with confidence.</p>
        <Link href="#packages" className="bg-white text-sky-600 hover:bg-sky-50 font-bold px-8 py-3.5 rounded-xl transition-colors inline-block">
          Book a Session →
        </Link>
      </section>
    </div>
  )
}
