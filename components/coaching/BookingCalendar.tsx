'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const TIME_SLOTS = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00']

const TIME_LABELS: Record<string, string> = {
  '09:00': '9:00 AM', '10:00': '10:00 AM', '11:00': '11:00 AM', '12:00': '12:00 PM',
  '14:00': '2:00 PM', '15:00': '3:00 PM', '16:00': '4:00 PM', '17:00': '5:00 PM',
}

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December']

function getNextWeekdays(count: number): Date[] {
  const days: Date[] = []
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  d.setDate(d.getDate() + 1)
  while (days.length < count) {
    if (d.getDay() !== 0 && d.getDay() !== 6) days.push(new Date(d))
    d.setDate(d.getDate() + 1)
  }
  return days
}

function formatDate(d: Date) {
  return `${DAY_NAMES[d.getDay()]}, ${MONTH_NAMES[d.getMonth()]} ${d.getDate()}`
}

function toKey(d: Date, t: string) {
  return `${d.toISOString().split('T')[0]} ${t}`
}

interface Props {
  packageId: string
  packageName: string
  price: string
  duration: string
  takenSlots: string[]
}

export function BookingCalendar({ packageId, packageName, price, duration, takenSlots }: Props) {
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [step, setStep] = useState<'calendar' | 'details'>('calendar')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const days = getNextWeekdays(14)
  const taken = new Set(takenSlots)

  const availableTimes = selectedDate
    ? TIME_SLOTS.filter(t => !taken.has(toKey(selectedDate, t)))
    : []

  const handleDateSelect = (d: Date) => {
    setSelectedDate(d)
    setSelectedTime(null)
  }

  const handleProceed = () => {
    if (!selectedDate || !selectedTime) return
    setStep('details')
  }

  const handleBook = async () => {
    if (!name.trim() || !email.trim() || !selectedDate || !selectedTime) {
      setError('Please fill in all fields.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/coaching/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          packageId,
          date: selectedDate.toISOString().split('T')[0],
          time: selectedTime,
          name: name.trim(),
          email: email.trim(),
        }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError(data.error ?? 'Something went wrong. Please try again.')
        setLoading(false)
      }
    } catch {
      setError('Network error. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Package summary */}
      <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 mb-8 flex items-center justify-between">
        <div>
          <div className="font-black text-slate-900">{packageName}</div>
          <div className="text-sm text-slate-500">{duration} · Live Google Meet session</div>
        </div>
        <div className="text-2xl font-black text-sky-600">{price}</div>
      </div>

      {step === 'calendar' && (
        <div className="grid md:grid-cols-2 gap-8">
          {/* Date picker */}
          <div>
            <h3 className="font-black text-slate-900 mb-4">Select a Date</h3>
            <div className="space-y-2">
              {days.map(d => {
                const isSelected = selectedDate?.toDateString() === d.toDateString()
                const availableCount = TIME_SLOTS.filter(t => !taken.has(toKey(d, t))).length
                return (
                  <button
                    key={d.toISOString()}
                    onClick={() => handleDateSelect(d)}
                    disabled={availableCount === 0}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-semibold transition-all ${
                      isSelected
                        ? 'border-sky-500 bg-sky-500 text-white shadow-md'
                        : availableCount === 0
                        ? 'border-slate-100 bg-slate-50 text-slate-300 cursor-not-allowed'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:bg-sky-50'
                    }`}
                  >
                    <span>{formatDate(d)}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                      isSelected ? 'bg-white/20 text-white' :
                      availableCount === 0 ? 'bg-slate-100 text-slate-300' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {availableCount === 0 ? 'Full' : `${availableCount} slots`}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Time slots */}
          <div>
            <h3 className="font-black text-slate-900 mb-4">
              {selectedDate ? `Available Times — ${formatDate(selectedDate)}` : 'Select a date first'}
            </h3>
            {!selectedDate && (
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-8 text-center text-slate-400 text-sm">
                Pick a date on the left to see available time slots.
              </div>
            )}
            {selectedDate && (
              <div className="grid grid-cols-2 gap-2">
                {TIME_SLOTS.map(t => {
                  const isTaken = taken.has(toKey(selectedDate, t))
                  const isSelected = selectedTime === t
                  return (
                    <button
                      key={t}
                      onClick={() => !isTaken && setSelectedTime(t)}
                      disabled={isTaken}
                      className={`py-3 rounded-xl border text-sm font-bold transition-all ${
                        isSelected
                          ? 'border-sky-500 bg-sky-500 text-white shadow-md'
                          : isTaken
                          ? 'border-slate-100 bg-slate-50 text-slate-300 cursor-not-allowed'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:bg-sky-50'
                      }`}
                    >
                      {TIME_LABELS[t]}
                      {isTaken && <span className="block text-[9px] font-normal mt-0.5">Booked</span>}
                    </button>
                  )
                })}
              </div>
            )}

            {selectedDate && selectedTime && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                <div className="text-sm font-bold text-green-800">Selected slot:</div>
                <div className="text-sm text-green-700">{formatDate(selectedDate)} at {TIME_LABELS[selectedTime]} EST</div>
              </div>
            )}

            {selectedDate && selectedTime && (
              <button
                onClick={handleProceed}
                className="mt-4 w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3.5 rounded-xl transition-colors text-sm"
              >
                Continue to Details →
              </button>
            )}
          </div>
        </div>
      )}

      {step === 'details' && selectedDate && selectedTime && (
        <div className="max-w-md mx-auto">
          <button
            onClick={() => setStep('calendar')}
            className="text-sm text-slate-500 hover:text-slate-700 mb-6 flex items-center gap-1"
          >
            ← Change date/time
          </button>

          {/* Confirmed slot */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
            <div className="text-xs font-bold text-green-700 uppercase tracking-wide mb-1">Your Slot</div>
            <div className="font-bold text-slate-900">{formatDate(selectedDate)} at {TIME_LABELS[selectedTime]} EST</div>
            <div className="text-xs text-slate-500 mt-0.5">{duration}</div>
          </div>

          <h3 className="font-black text-slate-900 mb-5">Your Details</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Jane Smith"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="jane@example.com"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              <p className="text-[11px] text-slate-400 mt-1">Confirmation and meeting link will be sent here.</p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-600">{error}</div>
            )}

            <button
              onClick={handleBook}
              disabled={loading}
              className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-sky-300 text-white font-bold py-4 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeDasharray="31.4" strokeDashoffset="10" />
                  </svg>
                  Redirecting to payment…
                </>
              ) : (
                `Pay ${price} & Confirm Booking →`
              )}
            </button>
            <p className="text-center text-[11px] text-slate-400">
              Secure payment via Stripe · 100% Satisfaction Guarantee
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
