import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default function CoachingSuccessPage() {
  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {/* Checkmark icon */}
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        <h1 className="text-2xl font-black text-slate-900 mb-3">Booking Confirmed!</h1>
        <p className="text-slate-500 text-sm leading-relaxed mb-8">
          Your coaching session has been booked and paid for. Check your inbox — a confirmation
          email with your session details is on its way. The Google Meet link will be sent
          30&nbsp;minutes before your session starts.
        </p>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 mb-8 text-left space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Confirmation email</div>
              <div className="text-sm text-slate-700 mt-0.5">Sent to your inbox with all session details</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Google Meet link</div>
              <div className="text-sm text-slate-700 mt-0.5">Sent 30 minutes before your session</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/dashboard"
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/coaching"
            className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            Back to Coaching
          </Link>
        </div>
      </div>
    </div>
  )
}
