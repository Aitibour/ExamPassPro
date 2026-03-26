// Official certification logos
// Uses Simple Icons CDN where available, inline SVG for ServiceNow (not in Simple Icons)

interface CourseLogoProps {
  slug: string
  size?: number
  fill?: boolean
}

// Confirmed working Simple Icons CDN slugs
const ICON_SLUGS: Record<string, string> = {
  'aws-saa-c03': 'amazonwebservices',
  'azure-az-900': 'microsoftazure',
  'google-cloud-ace': 'googlecloud',
  'comptia-security-plus': 'comptia',
  'vmware-vcp-dcv': 'vmware',
  'cisco-ccna': 'cisco',
  'kubernetes-cka': 'kubernetes',
  'hashicorp-terraform': 'terraform',
  'itil-4-foundation': 'itil',
}

// ServiceNow "N" mark — inline SVG (ServiceNow not in Simple Icons)
function ServiceNowMark({ size, fill: isFill }: { size: number; fill: boolean }) {
  const style = isFill
    ? { width: '100%', height: '100%', filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.25))' }
    : { width: size, height: size, filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.25))' }
  return (
    <svg viewBox="0 0 48 48" fill="none" style={style}>
      <circle cx="24" cy="24" r="21" stroke="white" strokeWidth="3" />
      <path
        d="M14 33 L14 15 L34 33 L34 15"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CourseLogo({ slug, size = 64, fill = false }: CourseLogoProps) {
  if (slug === 'servicenow-csa') {
    return <ServiceNowMark size={size} fill={fill} />
  }

  const iconSlug = ICON_SLUGS[slug]
  if (!iconSlug) return null

  const imgStyle = fill
    ? { width: '100%', height: '100%', objectFit: 'contain' as const, filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.25))' }
    : { width: size, height: size, objectFit: 'contain' as const, filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.25))' }

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={`https://cdn.simpleicons.org/${iconSlug}/ffffff`} alt={slug} style={imgStyle} />
}
