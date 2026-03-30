/**
 * PayPal IPN (Instant Payment Notification) utilities
 * Handles verification and processing of PayPal payment notifications
 */

const PAYPAL_VERIFY_URL = process.env.PAYPAL_IPN_VERIFY_URL || 'https://ipnpb.paypal.com/cgi-bin/webscr'

/**
 * Verify an IPN message came from PayPal
 * https://developer.paypal.com/docs/ipn/integration-guide/verify-ipn-message/
 */
export async function verifyIPN(body: string): Promise<boolean> {
  try {
    const verifyBody = 'cmd=_notify-validate&' + body
    const response = await fetch(PAYPAL_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: verifyBody,
    })
    const text = await response.text()
    return text === 'VERIFIED'
  } catch (err) {
    console.error('PayPal IPN verification failed:', err)
    return false
  }
}

/**
 * Map PayPal payment amount (in cents) and item_name to a plan or coaching session
 * Returns { type: 'plan' | 'coaching', key: string } or null if unmapped
 */
export function mapAmountToPlan(
  amountCents: number,
  itemName: string = ''
): { type: 'plan' | 'coaching'; key: string } | null {
  const itemLower = itemName.toLowerCase()
  const isCoaching = itemLower.includes('coach') || itemLower.includes('session')

  // Unique amounts (no collision)
  if (amountCents === 3900) return { type: 'plan', key: 'starter' }
  if (amountCents === 15900) return { type: 'coaching', key: 'deep-dive' }

  // Collision at $99: pro plan vs focus-session coaching
  if (amountCents === 9900) {
    if (isCoaching) return { type: 'coaching', key: 'focus-session' }
    return { type: 'plan', key: 'pro' }
  }

  // Collision at $199: elite plan vs sprint-pack coaching
  if (amountCents === 19900) {
    if (isCoaching) return { type: 'coaching', key: 'sprint-pack' }
    return { type: 'plan', key: 'all_access' }
  }

  // Unrecognized amount
  return null
}

/**
 * Parse URL-encoded form data (PayPal IPN POST body)
 */
export function parseIPN(body: string): Record<string, string> {
  const params = new URLSearchParams(body)
  const result: Record<string, string> = {}
  params.forEach((value, key) => {
    result[key] = value
  })
  return result
}
