/**
 * JSON-LD Schema utilities for SEO
 */

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ExamPassPro',
  url: 'https://exampasspro.com',
  logo: 'https://exampasspro.com/logo.png',
  description: 'IT certification exam preparation platform with real exam-style questions, timed mock exams, and 100% Pass Guarantee.',
  sameAs: [
    'https://www.linkedin.com/company/exampasspro',
    'https://twitter.com/exampasspro',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-support-phone',
    contactType: 'Customer Support',
    email: 'support@exampasspro.com',
  },
}

export function generateCourseSchema(courseData: {
  title: string
  description: string
  slug: string
  icon_url?: string | null
  brand_color?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: courseData.title,
    description: courseData.description,
    url: `https://exampasspro.com/courses/${courseData.slug}`,
    provider: {
      '@type': 'Organization',
      name: 'ExamPassPro',
      url: 'https://exampasspro.com',
    },
    image: courseData.icon_url || 'https://exampasspro.com/default-course-icon.png',
    offers: [
      {
        '@type': 'Offer',
        name: 'Core Plan',
        price: '39.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Pro Plan',
        price: '99.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Elite Plan',
        price: '199.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    ],
  }
}

export const coachingServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ExamPassPro Coaching',
  url: 'https://exampasspro.com/coaching',
  description: 'Expert live coaching sessions for IT certification exam prep.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Virtual',
    addressCountry: 'US',
  },
  areaServed: 'US',
  serviceType: ['Tutoring', 'Exam Prep Coaching'],
  offers: [
    {
      '@type': 'Offer',
      name: 'Focus Session - 45 minutes',
      price: '99.00',
      priceCurrency: 'USD',
    },
    {
      '@type': 'Offer',
      name: 'Deep Dive - 90 minutes',
      price: '159.00',
      priceCurrency: 'USD',
    },
    {
      '@type': 'Offer',
      name: 'Intensive Session - 120 minutes',
      price: '199.00',
      priceCurrency: 'USD',
    },
  ],
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
