import Stripe from 'stripe'

let _stripe: Stripe | null = null

export function getStripe(): Stripe {
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? 'placeholder', {
      apiVersion: '2026-02-25.clover' as any,
    })
  }
  return _stripe
}

export const PLAN_PRICES: Record<string, number> = {
  starter: 1900,     // $19
  pro: 4900,         // $49
  platinum: 9900,    // $99
  all_access: 19900, // $199
}

export const PLAN_LABELS: Record<string, string> = {
  starter: 'Starter',
  pro: 'Pro',
  platinum: 'Platinum',
  all_access: 'All-Access Bundle',
}

export const PLAN_EXAM_LIMITS: Record<string, number> = {
  starter: 1,
  pro: 2,
  platinum: 5,
  all_access: 10,
}
