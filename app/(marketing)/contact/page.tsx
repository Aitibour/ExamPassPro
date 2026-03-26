export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 py-20 px-6 text-center">
        <h1 className="text-4xl font-black text-white mb-4">Contact Us</h1>
        <p className="text-slate-400 text-lg">We usually respond within a few hours on business days.</p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="text-xl font-black text-slate-900 mb-6">Get in Touch</h2>
            <div className="space-y-5">
              {[
                { label: 'General Support', value: 'support@exampasspro.com' },
                { label: 'Billing & Refunds', value: 'billing@exampasspro.com' },
                { label: 'Coaching Bookings', value: 'coaching@exampasspro.com' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">{label}</div>
                  <a href={`mailto:${value}`} className="text-sky-600 font-semibold hover:text-sky-700 text-sm">
                    {value}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">Support Hours</div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Monday – Friday: 9 am – 6 pm EST<br />
                Saturday: 10 am – 2 pm EST<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="text-xl font-black text-slate-900 mb-6">Send a Message</h2>
            <form className="space-y-4" action="mailto:support@exampasspro.com" method="post">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Subject</label>
                <select className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent">
                  <option>General question</option>
                  <option>Billing / refund</option>
                  <option>Technical issue</option>
                  <option>Coaching booking</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Message</label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 rounded-xl transition-colors text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
