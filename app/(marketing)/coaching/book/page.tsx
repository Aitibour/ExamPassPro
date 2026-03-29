import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { BookingCalendar } from '@/components/coaching/BookingCalendar'

const PACKAGES: Record<string, { name: string; price: string; duration: string }> = {
  'focus-session': { name: 'Focus Session', price: '$99', duration: '60 minutes' },
  'deep-dive':     { name: 'Deep Dive Session', price: '$149', duration: '90 minutes' },
  'sprint-pack':   { name: 'Exam Sprint Pack (3 sessions)', price: '$399', duration: '3 × 90 min' },
}

interface PageProps {
  searchParams: Promise<{ package?: string }>
}

export default async function CoachingBookPage({ searchParams }: PageProps) {
  const { package: packageId } = await searchParams
  const pkg = packageId ? PACKAGES[packageId] : null
  if (!pkg) notFound()

  // Fetch taken slots for the next 30 days (graceful fallback if DB not connected)
  let takenSlots: string[] = []
  try {
    const supabase = await createClient()
    const from = new Date()
    const to = new Date()
    to.setDate(to.getDate() + 30)

    const { data } = await supabase
      .from('coaching_bookings')
      .select('slot_date, slot_time')
      .eq('status', 'paid')
      .gte('slot_date', from.toISOString().split('T')[0])
      .lte('slot_date', to.toISOString().split('T')[0])

    takenSlots = (data ?? []).map((r: { slot_date: string; slot_time: string }) => `${r.slot_date} ${r.slot_time}`)
  } catch {
    // DB not connected — all slots available
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-1">
            <a href="/coaching" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Coaching</a>
            <span className="text-slate-300 text-xs">›</span>
            <span className="text-xs text-slate-500">Book a Session</span>
          </div>
          <h1 className="text-2xl font-black text-slate-900 mt-2">Book a Coaching Session</h1>
          <p className="text-slate-500 text-sm mt-1">Select your preferred date and time below — EST timezone</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <BookingCalendar
          packageId={packageId!}
          packageName={pkg.name}
          price={pkg.price}
          duration={pkg.duration}
          takenSlots={takenSlots}
        />
      </div>
    </div>
  )
}
