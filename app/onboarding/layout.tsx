// Minimal layout for the onboarding flow — no sidebar, no nav clutter.
// Auth is enforced by the proxy (see proxy.ts matcher).
export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {children}
    </div>
  )
}
