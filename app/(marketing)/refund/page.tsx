export const metadata = { title: 'Refund Policy — ExamPassPro' }

const LAST_UPDATED = 'March 26, 2026'

export default function RefundPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 px-6 py-16 text-center">
        <p className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-3">Legal</p>
        <h1 className="text-4xl font-black text-white mb-3">Refund Policy</h1>
        <p className="text-slate-400 text-sm">Last updated: {LAST_UPDATED}</p>
      </div>

      {/* Guarantee banner */}
      <div className="bg-green-50 border-b border-green-100">
        <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
          <div className="text-5xl flex-shrink-0">🛡️</div>
          <div>
            <h2 className="text-xl font-black text-green-900">100% Pass Guarantee</h2>
            <p className="text-green-700 text-sm mt-1 leading-relaxed">
              If you follow our study program, take all your available mock exams, and still fail your
              official certification exam, we will give you a <strong>full refund — no questions asked</strong>.
              We stand behind the quality of our content completely.
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-16">

        <p className="text-slate-500 text-sm leading-relaxed mb-8">
          This Refund Policy describes when and how ExamPassPro ("we", "us", "our") will issue refunds
          for purchases made on exampasspro.com. By purchasing a plan, you agree to the terms below.
        </p>

        <Section title="1. Pass Guarantee Refund">
          <p>
            You are eligible for a full refund under our 100% Pass Guarantee if <strong>all</strong> of
            the following conditions are met:
          </p>
          <ul>
            <li>You completed <strong>all mock exams</strong> available in your purchased plan for the relevant course.</li>
            <li>You studied all available study-mode question sets for that course.</li>
            <li>You sat and <strong>failed the official certification exam</strong> within 90 days of your purchase.</li>
            <li>You submit a refund request within <strong>14 days</strong> of receiving your official exam results.</li>
            <li>You provide proof of your official exam failure (score report from the certification body).</li>
          </ul>
          <p>
            Refunds meeting all criteria will be processed within <strong>5–10 business days</strong> to
            the original payment method.
          </p>
        </Section>

        <Section title="2. Standard 7-Day Refund">
          <p>
            Outside the Pass Guarantee, you may request a refund within <strong>7 days</strong> of
            purchase if:
          </p>
          <ul>
            <li>You have completed <strong>fewer than 2 mock exams</strong> from your purchased plan.</li>
            <li>You have not used the coaching session (if included in your plan).</li>
            <li>The request is made for technical reasons (e.g., content is unavailable, platform error).</li>
          </ul>
          <p>
            We reserve the right to decline refund requests that show significant usage of the platform
            content within the 7-day window.
          </p>
        </Section>

        <Section title="3. Non-Refundable Situations">
          <p>Refunds will <strong>not</strong> be issued in the following cases:</p>
          <ul>
            <li>More than 14 days have passed since purchase (outside the Pass Guarantee window).</li>
            <li>You completed all or most of the available mock exams and did not sit the official exam.</li>
            <li>You changed your mind about pursuing the certification.</li>
            <li>The refund request is for a course different from the one for which you sat the exam.</li>
            <li>Your account was terminated due to a violation of our Terms of Service.</li>
            <li>Coaching sessions that were attended or cancelled with less than 24-hour notice.</li>
            <li>Partial refunds for unused mock exams within a multi-exam plan.</li>
          </ul>
        </Section>

        <Section title="4. Coaching Session Refunds">
          <ul>
            <li>
              <strong>Cancelled 24+ hours before session:</strong> Full refund or credit toward
              rescheduling.
            </li>
            <li>
              <strong>Cancelled less than 24 hours before session:</strong> No refund; rescheduling
              at our discretion.
            </li>
            <li>
              <strong>No-show:</strong> Session is forfeited with no refund.
            </li>
            <li>
              <strong>Coach cancels or is unavailable:</strong> Full refund or reschedule at your
              preference.
            </li>
          </ul>
        </Section>

        <Section title="5. How to Request a Refund">
          <p>To submit a refund request:</p>
          <ol>
            <li>Email <a href="mailto:billing@exampasspro.com" className="text-sky-600 hover:text-sky-800">billing@exampasspro.com</a> with subject: <strong>"Refund Request — [Your Name]"</strong></li>
            <li>Include your registered email address and purchase date.</li>
            <li>For Pass Guarantee refunds, attach your official exam score report.</li>
            <li>Describe the reason for your request.</li>
          </ol>
          <p>
            We will acknowledge your request within <strong>1 business day</strong> and process
            eligible refunds within <strong>5–10 business days</strong>.
          </p>
        </Section>

        <Section title="6. Chargebacks">
          <p>
            We ask that you contact us before initiating a chargeback with your bank or card provider.
            Chargebacks initiated without first contacting us may result in account suspension. We are
            committed to resolving all legitimate disputes quickly and fairly.
          </p>
        </Section>

        <Section title="7. Changes to This Policy">
          <p>
            We may update this Refund Policy at any time. Changes apply to purchases made after the
            updated effective date. Your purchase constitutes acceptance of the policy in effect at the
            time of purchase.
          </p>
        </Section>

        <Section title="8. Contact">
          <p>
            Refund inquiries:{' '}
            <a href="mailto:billing@exampasspro.com" className="text-sky-600 hover:text-sky-800">
              billing@exampasspro.com
            </a>
            <br />
            General support:{' '}
            <a href="mailto:support@exampasspro.com" className="text-sky-600 hover:text-sky-800">
              support@exampasspro.com
            </a>
          </p>
        </Section>

        {/* Quick summary table */}
        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
          <div className="bg-slate-900 px-6 py-4">
            <h3 className="font-black text-white text-sm">Refund Quick Reference</h3>
          </div>
          <table className="w-full text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left px-5 py-3 font-bold text-slate-600 text-xs uppercase tracking-wide">Scenario</th>
                <th className="text-left px-5 py-3 font-bold text-slate-600 text-xs uppercase tracking-wide">Eligible?</th>
                <th className="text-left px-5 py-3 font-bold text-slate-600 text-xs uppercase tracking-wide">Deadline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { scenario: 'Failed official exam (all mocks completed)', eligible: '✅ Full refund', deadline: '14 days after exam' },
                { scenario: 'Within 7 days, fewer than 2 exams taken', eligible: '✅ Full refund', deadline: '7 days after purchase' },
                { scenario: 'Coaching cancelled 24h+ before', eligible: '✅ Full refund', deadline: '24h before session' },
                { scenario: 'More than 7 days, no exam taken', eligible: '❌ Not eligible', deadline: '—' },
                { scenario: 'Changed mind after full usage', eligible: '❌ Not eligible', deadline: '—' },
                { scenario: 'Coaching no-show', eligible: '❌ Not eligible', deadline: '—' },
              ].map(row => (
                <tr key={row.scenario} className="hover:bg-slate-50">
                  <td className="px-5 py-3 text-slate-700">{row.scenario}</td>
                  <td className="px-5 py-3 font-semibold">{row.eligible}</td>
                  <td className="px-5 py-3 text-slate-500">{row.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-10">
      <h2 className="text-lg font-black text-slate-900 mb-3">{title}</h2>
      <div className="text-slate-600 text-sm leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1.5 [&_a]:text-sky-600 [&_a]:hover:text-sky-800">
        {children}
      </div>
    </div>
  )
}
