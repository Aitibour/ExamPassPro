import Link from 'next/link'

const PACKAGES = [
  {
    name: 'Quick Session',
    duration: '30 minutes',
    price: '$49',
    features: [
      'Focused on your weakest domains',
      'Live Q&A on any exam topic',
      'Personalised study plan for the remaining days',
      'Recording sent after session',
    ],
    cta: 'Book 30-min Session',
    highlight: false,
  },
  {
    name: '1-to-1 Deep Dive',
    duration: '60 minutes',
    price: '$89',
    features: [
      'Full exam readiness assessment',
      'Domain-by-domain breakdown',
      'Hands-on walk-through of difficult concepts',
      'Custom study roadmap (PDF)',
      'Recording + notes sent after session',
      'Follow-up email support for 7 days',
    ],
    cta: 'Book 1-Hour Session',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Exam Sprint Pack',
    duration: '3 × 60-min sessions',
    price: '$229',
    features: [
      'Everything in 1-to-1 Deep Dive (×3)',
      'Weekly progress check-ins',
      'Unlimited email support',
      'Mock exam review session included',
      'Pass guarantee extension',
    ],
    cta: 'Book Sprint Pack',
    highlight: false,
  },
]

const COACHES = [
  { name: 'Alex Morgan', certs: 'ServiceNow CSA/CSP · AWS SAA · CKA', exp: '12 years in cloud & ITSM' },
  { name: 'Priya Nair', certs: 'Azure 900/104 · Google ACE · ITIL 4 MP', exp: '9 years in enterprise IT' },
  { name: 'James Okonkwo', certs: 'CompTIA A+/Sec+ · CCNA · Terraform', exp: '14 years in networking & security' },
]

export default function CoachingPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-20 px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-500/30 text-sky-300 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
          Live 1-to-1 Sessions with Certified Experts
        </div>
        <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
          Pass Faster with Personal Coaching
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
          Book a live session with a certified instructor who has already passed the exam you're preparing for.
          Get your questions answered, weak spots identified, and a clear study plan.
        </p>
        <Link
          href="#packages"
          className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-xl transition-colors inline-block"
        >
          View Packages →
        </Link>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-black text-slate-900 text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Choose a Package', desc: 'Pick the session length that fits your timeline and budget.' },
            { step: '2', title: 'Book Your Slot', desc: 'Select a time that works for you from your coach\'s calendar.' },
            { step: '3', title: 'Join the Session', desc: 'Connect via Google Meet or Zoom for your live coaching call.' },
            { step: '4', title: 'Get a Study Plan', desc: 'Leave with a personalised roadmap and recording of the session.' },
          ].map(({ step, title, desc }) => (
            <div key={step} className="text-center">
              <div className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3">
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
          <h2 className="text-2xl font-black text-slate-900 text-center mb-10">Coaching Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {PACKAGES.map(pkg => (
              <div
                key={pkg.name}
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
                    <span className="text-slate-500 text-sm">/ session</span>
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
                  href="/contact"
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
            All coaching sessions are covered by our <strong className="text-slate-600">100% Satisfaction Guarantee</strong>.
          </p>
        </div>
      </section>

      {/* Coaches */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-black text-slate-900 text-center mb-10">Meet Your Coaches</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {COACHES.map(coach => (
            <div key={coach.name} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center text-white text-xl font-black mb-4">
                {coach.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="font-black text-slate-900 mb-1">{coach.name}</h3>
              <p className="text-xs text-sky-600 font-semibold mb-2 leading-relaxed">{coach.certs}</p>
              <p className="text-xs text-slate-500">{coach.exp}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sky-500 py-14 px-6 text-center">
        <h2 className="text-2xl font-black text-white mb-3">Ready to accelerate your prep?</h2>
        <p className="text-sky-100 text-sm mb-6">Book a session today and walk into exam day confident.</p>
        <Link
          href="/contact"
          className="bg-white text-sky-600 hover:bg-sky-50 font-bold px-8 py-3.5 rounded-xl transition-colors inline-block"
        >
          Book a Session →
        </Link>
      </section>
    </div>
  )
}
