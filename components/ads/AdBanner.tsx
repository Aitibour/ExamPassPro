'use client'

import { useEffect, useRef } from 'react'

type AdSize = 'leaderboard' | 'banner' | 'rectangle' | 'responsive'

interface AdBannerProps {
  slot: string
  size?: AdSize
  className?: string
}

const SIZE_MAP: Record<AdSize, { width: number; height: number; label: string }> = {
  leaderboard: { width: 728, height: 90,  label: 'Leaderboard 728×90'  },
  banner:      { width: 468, height: 60,  label: 'Banner 468×60'        },
  rectangle:   { width: 300, height: 250, label: 'Rectangle 300×250'    },
  responsive:  { width: 0,   height: 0,   label: 'Responsive Ad'        },
}

const PUBLISHER_ID = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID ?? ''
const IS_DEV       = process.env.NODE_ENV !== 'production'

export function AdBanner({ slot, size = 'leaderboard', className = '' }: AdBannerProps) {
  const insRef    = useRef<HTMLInsElement>(null)
  const pushedRef = useRef(false)
  const { width, height, label } = SIZE_MAP[size]

  useEffect(() => {
    if (pushedRef.current || IS_DEV || !PUBLISHER_ID) return
    try {
      // @ts-expect-error – adsbygoogle injected by the Google script
      ;(window.adsbygoogle = window.adsbygoogle ?? []).push({})
      pushedRef.current = true
    } catch {
      // silently ignore if script not loaded
    }
  }, [])

  /* ── Development / missing publisher ID → show placeholder ── */
  if (IS_DEV || !PUBLISHER_ID) {
    return (
      <div
        className={`flex items-center justify-center border-2 border-dashed border-slate-300 bg-slate-100 text-slate-400 text-xs font-mono select-none ${className}`}
        style={
          size === 'responsive'
            ? { width: '100%', minHeight: 90 }
            : { width, height }
        }
        aria-label="Ad placeholder"
      >
        📢 Ad Slot — {label}
      </div>
    )
  }

  /* ── Production → real AdSense unit ── */
  return (
    <div className={`overflow-hidden ${className}`}>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={
          size === 'responsive'
            ? { display: 'block' }
            : { display: 'inline-block', width, height }
        }
        data-ad-client={PUBLISHER_ID}
        data-ad-slot={slot}
        {...(size === 'responsive' && { 'data-ad-format': 'auto', 'data-full-width-responsive': 'true' })}
      />
    </div>
  )
}
