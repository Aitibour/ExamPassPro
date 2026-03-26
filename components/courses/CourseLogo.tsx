// Inline SVG logos for each certification course — no external image dependencies

interface CourseLogoProps {
  slug: string
  size?: number
}

export function CourseLogo({ slug, size = 48 }: CourseLogoProps) {
  const s = size

  switch (slug) {
    case 'servicenow-csa':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="20" fill="rgba(255,255,255,0.15)" />
          <text x="50" y="68" textAnchor="middle" fontSize="40" fontWeight="900" fill="white" fontFamily="Arial">NOW</text>
        </svg>
      )
    case 'aws-saa-c03':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
          <text x="50" y="52" textAnchor="middle" fontSize="22" fontWeight="900" fill="#FF9900" fontFamily="Arial">aws</text>
          <text x="50" y="72" textAnchor="middle" fontSize="11" fontWeight="700" fill="rgba(255,255,255,0.7)" fontFamily="Arial">SAA-C03</text>
        </svg>
      )
    case 'azure-az-900':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
          <path d="M50 15 L80 75 L20 75 Z" fill="white" opacity="0.9" />
          <path d="M50 15 L80 75 L65 55 Z" fill="rgba(0,120,212,0.5)" />
        </svg>
      )
    case 'google-cloud-ace':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="40" r="22" fill="none" stroke="white" strokeWidth="6" />
          <rect x="28" y="58" width="44" height="10" rx="5" fill="white" />
          <rect x="38" y="68" width="24" height="10" rx="5" fill="white" />
        </svg>
      )
    case 'comptia-security-plus':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
          <path d="M50 10 L85 28 L85 55 C85 72 70 85 50 92 C30 85 15 72 15 55 L15 28 Z" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="3" />
          <text x="50" y="60" textAnchor="middle" fontSize="26" fontWeight="900" fill="white" fontFamily="Arial">+</text>
        </svg>
      )
    case 'vmware-vcp-dcv':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
          <text x="50" y="58" textAnchor="middle" fontSize="28" fontWeight="900" fill="white" fontFamily="Arial">Vm</text>
          <text x="50" y="76" textAnchor="middle" fontSize="13" fontWeight="700" fill="rgba(255,255,255,0.7)" fontFamily="Arial">ware</text>
        </svg>
      )
    case 'cisco-ccna':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
          {[20,32,44,56,68,80].map((x, i) => (
            <rect key={i} x={x - 5} y={i % 2 === 0 ? 30 : 38} width="10" height={i % 2 === 0 ? 40 : 24} rx="2" fill="white" opacity={0.8 - i * 0.1} />
          ))}
        </svg>
      )
    case 'kubernetes-cka':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="5" />
          <text x="50" y="58" textAnchor="middle" fontSize="20" fontWeight="900" fill="white" fontFamily="Arial">K8s</text>
        </svg>
      )
    case 'hashicorp-terraform':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
          <path d="M20 30 L20 70 L50 55 L50 15 Z" fill="white" opacity="0.9" />
          <path d="M55 15 L55 55 L85 40 L85 0 Z" fill="white" opacity="0.6" />
          <path d="M20 75 L50 90 L80 75 L50 60 Z" fill="white" opacity="0.4" />
        </svg>
      )
    case 'itil-4-foundation':
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
          <rect x="20" y="20" width="60" height="60" rx="8" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="3" />
          <text x="50" y="58" textAnchor="middle" fontSize="22" fontWeight="900" fill="white" fontFamily="Arial">ITIL</text>
        </svg>
      )
    default:
      return (
        <svg width={s} height={s} viewBox="0 0 100 100" fill="none">
          <rect x="20" y="20" width="60" height="60" rx="8" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="3" />
          <text x="50" y="58" textAnchor="middle" fontSize="16" fontWeight="900" fill="white" fontFamily="Arial">
            {slug.slice(0, 3).toUpperCase()}
          </text>
        </svg>
      )
  }
}
