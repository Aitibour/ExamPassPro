import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { buttonVariants } from '@/components/ui/button-variants'

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 h-16 flex items-center justify-between px-6 lg:px-12">
      <div className="flex items-center gap-8">
        <Logo size="md" />
        <div className="hidden md:flex items-center gap-1">
          <Link href="/" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors">Home</Link>
          <Link href="/#courses" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors">Courses</Link>
          <Link href="/#pricing" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors">Pricing</Link>
          <Link href="/about" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors">About</Link>
          <Link href="/contact" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors">Contact</Link>
          <Link href="/coaching" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors">Coaching</Link>
          <Link href="/labs" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors">Labs</Link>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Link href="/login" className={buttonVariants('ghost', 'sm')}>Sign In</Link>
        <Link href="/register" className={buttonVariants('primary', 'sm')}>Get Started</Link>
      </div>
    </nav>
  )
}
