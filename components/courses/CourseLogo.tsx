// Official certification logos
// Uses Simple Icons CDN where available, inline SVG for logos not in Simple Icons
import React from 'react'

interface Props { slug: string; size?: number; fill?: boolean }

const CDN = 'https://cdn.simpleicons.org'

// ── Inline SVG marks ─────────────────────────────────────────────────────────

function ServiceNowMark({ s, fill }: { s: number; fill: boolean }) {
  const style = fill ? { width: '100%', height: '100%' } : { width: s, height: s }
  return (
    <svg viewBox="0 0 48 48" fill="none" style={style}>
      <circle cx="24" cy="24" r="21" stroke="white" strokeWidth="3" />
      <path d="M13 33 L13 15 L35 33 L35 15" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function AWSMark({ s, fill }: { s: number; fill: boolean }) {
  const style = fill ? { width: '100%', height: '100%' } : { width: s, height: s }
  return (
    <svg viewBox="0 0 80 52" fill="none" style={style}>
      <text x="40" y="30" textAnchor="middle" fontSize="30" fontWeight="900" fill="white" fontFamily="'Arial Black',Arial,sans-serif">aws</text>
      <path d="M16 40 Q40 52 64 40" stroke="#FF9900" strokeWidth="4" fill="none" strokeLinecap="round" />
      <polygon points="58,36 64,40 61,45" fill="#FF9900" />
    </svg>
  )
}

function AzureMark({ s, fill }: { s: number; fill: boolean }) {
  const style = fill ? { width: '100%', height: '100%' } : { width: s, height: s }
  return (
    <svg viewBox="0 0 60 52" fill="none" style={style}>
      <path d="M6 44 L22 6 L36 22 Z" fill="white" opacity="0.95" />
      <path d="M18 44 L54 44 L36 22 Z" fill="white" opacity="0.7" />
      <path d="M6 44 L22 6 L27 14 L14 44 Z" fill="rgba(0,0,0,0.12)" />
    </svg>
  )
}

function ITILMark({ s, fill }: { s: number; fill: boolean }) {
  const style = fill ? { width: '100%', height: '100%' } : { width: s, height: s }
  return (
    <svg viewBox="0 0 80 52" fill="none" style={style}>
      <rect x="4" y="4" width="72" height="44" rx="8" stroke="white" strokeWidth="2.5" fill="rgba(255,255,255,0.1)" />
      <text x="40" y="24" textAnchor="middle" fontSize="16" fontWeight="900" fill="white" fontFamily="Arial,sans-serif" letterSpacing="3">ITIL</text>
      <text x="40" y="41" textAnchor="middle" fontSize="12" fontWeight="700" fill="rgba(255,255,255,0.8)" fontFamily="Arial,sans-serif" letterSpacing="1">Foundation 4</text>
    </svg>
  )
}

function PMIMark({ s, fill }: { s: number; fill: boolean }) {
  const style = fill ? { width: '100%', height: '100%' } : { width: s, height: s }
  return (
    <svg viewBox="0 0 80 52" fill="none" style={style}>
      <rect x="2" y="2" width="76" height="48" rx="6" fill="rgba(255,255,255,0.12)" stroke="white" strokeWidth="2" />
      <text x="40" y="22" textAnchor="middle" fontSize="13" fontWeight="900" fill="white" fontFamily="Arial,sans-serif" letterSpacing="2">PMI</text>
      <text x="40" y="38" textAnchor="middle" fontSize="11" fontWeight="800" fill="rgba(255,255,255,0.9)" fontFamily="Arial,sans-serif" letterSpacing="1.5">PMP®</text>
    </svg>
  )
}

function ScrumMark({ s, fill }: { s: number; fill: boolean }) {
  const style = fill ? { width: '100%', height: '100%' } : { width: s, height: s }
  return (
    <svg viewBox="0 0 60 60" fill="none" style={style}>
      {/* Circular arrow representing a sprint */}
      <circle cx="30" cy="30" r="26" stroke="white" strokeWidth="3" strokeDasharray="120 45" strokeLinecap="round" />
      <polygon points="54,24 60,30 54,36" fill="white" />
      <text x="30" y="35" textAnchor="middle" fontSize="13" fontWeight="900" fill="white" fontFamily="Arial,sans-serif">PSM</text>
    </svg>
  )
}

function Prince2Mark({ s, fill }: { s: number; fill: boolean }) {
  const style = fill ? { width: '100%', height: '100%' } : { width: s, height: s }
  return (
    <svg viewBox="0 0 80 52" fill="none" style={style}>
      <rect x="2" y="2" width="76" height="48" rx="6" fill="rgba(255,255,255,0.12)" stroke="white" strokeWidth="2" />
      <text x="40" y="22" textAnchor="middle" fontSize="13" fontWeight="900" fill="white" fontFamily="Arial,sans-serif" letterSpacing="1">PRINCE2</text>
      <text x="40" y="38" textAnchor="middle" fontSize="10" fontWeight="700" fill="rgba(255,255,255,0.85)" fontFamily="Arial,sans-serif" letterSpacing="1">Foundation</text>
    </svg>
  )
}

function MicrosoftMark({ s, fill }: { s: number; fill: boolean }) {
  const style = fill ? { width: '100%', height: '100%' } : { width: s, height: s }
  return (
    <svg viewBox="0 0 48 48" fill="none" style={style}>
      <rect x="4"  y="4"  width="18" height="18" fill="#F25022" />
      <rect x="26" y="4"  width="18" height="18" fill="#7FBA00" />
      <rect x="4"  y="26" width="18" height="18" fill="#00A4EF" />
      <rect x="26" y="26" width="18" height="18" fill="#FFB900" />
    </svg>
  )
}

function RedHatMark({ s, fill }: { s: number; fill: boolean }) {
  const style = fill ? { width: '100%', height: '100%' } : { width: s, height: s }
  return (
    <svg viewBox="0 0 80 52" fill="none" style={style}>
      <ellipse cx="40" cy="22" rx="22" ry="14" fill="#CC0000" />
      <path d="M18 30 Q30 44 52 38 Q42 50 22 46 Z" fill="#CC0000" />
      <text x="40" y="26" textAnchor="middle" fontSize="11" fontWeight="900" fill="white" fontFamily="Arial,sans-serif" letterSpacing="1">RED HAT</text>
    </svg>
  )
}

function SplunkMark({ s, fill }: { s: number; fill: boolean }) {
  const style = fill ? { width: '100%', height: '100%' } : { width: s, height: s }
  return (
    <svg viewBox="0 0 80 52" fill="none" style={style}>
      <text x="40" y="32" textAnchor="middle" fontSize="22" fontWeight="900" fill="white" fontFamily="'Arial Black',Arial,sans-serif">&gt;_</text>
      <text x="40" y="48" textAnchor="middle" fontSize="9" fontWeight="700" fill="rgba(255,255,255,0.75)" fontFamily="Arial,sans-serif" letterSpacing="2">SPLUNK</text>
    </svg>
  )
}

function KanbanMark({ s, fill }: { s: number; fill: boolean }) {
  const style = fill ? { width: '100%', height: '100%' } : { width: s, height: s }
  return (
    <svg viewBox="0 0 60 52" fill="none" style={style}>
      {/* Three kanban column cards */}
      <rect x="3"  y="8" width="14" height="28" rx="3" fill="white" opacity="0.9" />
      <rect x="23" y="8" width="14" height="20" rx="3" fill="white" opacity="0.9" />
      <rect x="43" y="8" width="14" height="14" rx="3" fill="white" opacity="0.9" />
      <text x="30" y="48" textAnchor="middle" fontSize="9" fontWeight="700" fill="white" fontFamily="Arial,sans-serif" letterSpacing="1">KANBAN</text>
    </svg>
  )
}

// ── Slug → brand resolver ─────────────────────────────────────────────────────

function getLogoRenderer(slug: string): { type: 'inline'; fn: (p: { s: number; fill: boolean }) => React.ReactElement } | { type: 'cdn'; icon: string } | null {
  // ServiceNow family
  if (slug.startsWith('servicenow-')) return { type: 'inline', fn: ServiceNowMark }
  // AWS family
  if (slug.startsWith('aws-')) return { type: 'inline', fn: AWSMark }
  // Azure family
  if (slug.startsWith('azure-')) return { type: 'inline', fn: AzureMark }
  // ITIL family
  if (slug.includes('itil')) return { type: 'inline', fn: ITILMark }
  // PMP/PMI family
  if (slug.startsWith('pmp-') || slug.startsWith('pmi-')) return { type: 'inline', fn: PMIMark }
  // Scrum family
  if (slug.startsWith('scrum-') || slug.includes('scrum')) return { type: 'inline', fn: ScrumMark }
  // Kanban family
  if (slug.startsWith('kanban-') || slug.includes('kanban')) return { type: 'inline', fn: KanbanMark }

  // Inline marks
  if (slug.startsWith('prince2-') || slug.includes('prince2')) return { type: 'inline', fn: Prince2Mark }
  if (slug.startsWith('microsoft-'))  return { type: 'inline', fn: MicrosoftMark }
  if (slug.startsWith('redhat-'))     return { type: 'inline', fn: RedHatMark }
  if (slug.startsWith('splunk-'))     return { type: 'inline', fn: SplunkMark }

  // CDN slugs by prefix / exact match
  if (slug.startsWith('kubernetes-')) return { type: 'cdn', icon: 'kubernetes' }
  if (slug.startsWith('cisco-'))      return { type: 'cdn', icon: 'cisco' }
  if (slug.startsWith('comptia-'))    return { type: 'cdn', icon: 'comptia' }
  if (slug.startsWith('google-'))     return { type: 'cdn', icon: 'googlecloud' }
  if (slug.startsWith('vmware-'))     return { type: 'cdn', icon: 'vmware' }
  if (slug.startsWith('hashicorp-terraform')) return { type: 'cdn', icon: 'terraform' }
  if (slug.startsWith('hashicorp-vault'))     return { type: 'cdn', icon: 'vault' }
  if (slug.startsWith('hashicorp-'))  return { type: 'cdn', icon: 'hashicorp' }
  if (slug.startsWith('jira-') || slug === 'jira') return { type: 'cdn', icon: 'jira' }
  if (slug.startsWith('fortinet-'))   return { type: 'cdn', icon: 'fortinet' }

  return null
}

// ── Main export ──────────────────────────────────────────────────────────────

export function CourseLogo({ slug, size = 64, fill = false }: Props) {
  const resolved = getLogoRenderer(slug)
  if (!resolved) return null

  if (resolved.type === 'inline') {
    return resolved.fn({ s: size, fill })
  }

  const imgStyle = fill
    ? { width: '100%', height: '100%', objectFit: 'contain' as const, filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.25))' }
    : { width: size, height: size, objectFit: 'contain' as const, filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.25))' }

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={`${CDN}/${resolved.icon}/ffffff`} alt={slug} style={imgStyle} />
}

// ── Colored partner logos (for light background sections) ───────────────────

export function PartnerLogo({ slug, size = 40 }: { slug: string; size?: number }) {
  if (slug === 'servicenow') {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="21" stroke="#62B947" strokeWidth="3" />
        <path d="M13 33 L13 15 L35 33 L35 15" stroke="#62B947" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (slug === 'aws') {
    return (
      <svg width={size} height={size * 0.65} viewBox="0 0 80 52" fill="none">
        <text x="40" y="28" textAnchor="middle" fontSize="28" fontWeight="900" fill="#232F3E" fontFamily="'Arial Black',Arial,sans-serif">aws</text>
        <path d="M16 38 Q40 50 64 38" stroke="#FF9900" strokeWidth="4" fill="none" strokeLinecap="round" />
        <polygon points="59,34 64,38 61,43" fill="#FF9900" />
      </svg>
    )
  }
  if (slug === 'azure') {
    return (
      <svg width={size} height={size} viewBox="0 0 60 52" fill="none">
        <path d="M6 44 L22 6 L36 22 Z" fill="#0078D4" opacity="0.95" />
        <path d="M18 44 L54 44 L36 22 Z" fill="#0078D4" opacity="0.6" />
      </svg>
    )
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={`${CDN}/${slug}`} alt={slug} width={size} height={size} style={{ objectFit: 'contain' }} />
}
