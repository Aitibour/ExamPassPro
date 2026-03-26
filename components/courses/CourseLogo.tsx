// Official certification logos via Simple Icons CDN (cdn.simpleicons.org)

interface CourseLogoProps {
  slug: string
  size?: number
  fill?: boolean
}

const ICON_SLUGS: Record<string, string> = {
  'servicenow-csa': 'servicenow',
  'aws-saa-c03': 'amazonaws',
  'azure-az-900': 'microsoftazure',
  'google-cloud-ace': 'googlecloud',
  'comptia-security-plus': 'comptia',
  'vmware-vcp-dcv': 'vmware',
  'cisco-ccna': 'cisco',
  'kubernetes-cka': 'kubernetes',
  'hashicorp-terraform': 'terraform',
  'itil-4-foundation': 'axelos',
}

export function CourseLogo({ slug, size = 64, fill = false }: CourseLogoProps) {
  const iconSlug = ICON_SLUGS[slug]
  if (!iconSlug) return null

  if (fill) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`https://cdn.simpleicons.org/${iconSlug}/ffffff`}
        alt={slug}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.25))',
        }}
      />
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${iconSlug}/ffffff`}
      alt={slug}
      width={size}
      height={size}
      style={{ objectFit: 'contain', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.25))' }}
    />
  )
}
