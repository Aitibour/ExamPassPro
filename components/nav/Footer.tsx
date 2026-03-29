import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Logo size="sm" inverted className="mb-4" />
            <p className="text-sm leading-relaxed mb-4">
              The most trusted IT certification prep platform. 100% Pass Guarantee or full refund.
            </p>
            <div className="flex items-center gap-2">
              <div className="bg-green-500 w-2 h-2 rounded-full" />
              <span className="text-xs text-green-400 font-semibold">98.2% pass rate</span>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Courses</h4>
            <ul className="space-y-2 text-sm">
              {['ServiceNow CSA', 'AWS SAA-C03', 'Azure AZ-900', 'Google Cloud ACE', 'CompTIA Security+'].map(c => (
                <li key={c}><Link href="/#courses" className="hover:text-white transition-colors">{c}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/coaching" className="hover:text-white transition-colors">Coaching</Link></li>
              <li><Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/login" className="hover:text-white transition-colors">Sign In</Link></li>
              <li><Link href="/register" className="hover:text-white transition-colors">Get Started</Link></li>
              <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Help Center</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">© {new Date().getFullYear()} ExamPassPro. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
