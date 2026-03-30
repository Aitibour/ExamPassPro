// Google Analytics 4 Event Tracking

export function trackEvent(
  eventName: string,
  eventParams?: Record<string, string | number | boolean>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams)
  }
}

// Custom Events for Conversions

export function trackSignUp(plan: string) {
  trackEvent('sign_up', {
    method: 'email',
    plan: plan,
  })
}

export function trackPurchase(
  courseId: string,
  courseName: string,
  plan: string,
  value: number
) {
  trackEvent('purchase', {
    transaction_id: courseId,
    value: value,
    currency: 'USD',
    course_name: courseName,
    plan: plan,
  } as Record<string, string | number | boolean>)
}

export function trackCoursePage(courseId: string, courseName: string) {
  trackEvent('view_item', {
    course_id: courseId,
    course_name: courseName,
    item_category: 'certification_course',
  })
}

export function trackLabPage(courseId: string, courseName: string) {
  trackEvent('view_item', {
    course_id: courseId,
    course_name: courseName,
    item_category: 'lab',
    event_label: 'labs_page',
  })
}

export function trackAddToCart(courseId: string, courseName: string, plan: string, value: number) {
  trackEvent('add_to_cart', {
    course_id: courseId,
    course_name: courseName,
    plan: plan,
    value: value,
  })
}

export function trackBeginCheckout(courseId: string, courseName: string, plan: string, value: number) {
  trackEvent('begin_checkout', {
    course_id: courseId,
    course_name: courseName,
    plan: plan,
    value: value,
  })
}

export function trackEmailSignUp() {
  trackEvent('generate_lead', {
    lead_type: 'email_signup',
  })
}

export function trackBookCoaching(duration: string) {
  trackEvent('generate_lead', {
    lead_type: 'coaching_booking',
    coaching_duration: duration,
  })
}

export function trackContactForm() {
  trackEvent('generate_lead', {
    lead_type: 'contact_form',
  })
}

// Global type augmentation for gtag
declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void
    dataLayer: any[]
  }
}

export {}
