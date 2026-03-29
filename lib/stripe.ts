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

// ── Prices ────────────────────────────────────────────────────────────────
export const PLAN_PRICES: Record<string, number> = {
  starter:    3900,  // $39
  pro:        9900,  // $99
  all_access: 19900, // $199
}

export const PLAN_LABELS: Record<string, string> = {
  free:       'Free',
  starter:    'Core',
  pro:        'Pro',
  all_access: 'Elite',
}

// ── Question & exam constants ─────────────────────────────────────────────

/** Every timed mock exam is always exactly 60 questions (for paid plans) */
export const EXAM_QUESTION_COUNT = 60

/** Free tier: max questions visible in mock exam AND practice/study mode */
export const FREE_QUESTION_LIMIT = 30

// ── Per-plan limits ───────────────────────────────────────────────────────

/**
 * Timed Mock Exams accessible
 * free → 1 (30 Q) | core → 2 (60 Q) | pro → 4 (60 Q each) | elite → 10
 */
export const PLAN_MOCK_LIMITS: Record<string, number> = {
  free:       1,
  starter:    2,
  pro:        4,
  all_access: 10,
}

/**
 * Practice Exams (untimed, with explanations)
 * free → 1 (30 Q only) | core → 2 | pro → 4 | elite → 10
 */
export const PLAN_PRACTICE_LIMITS: Record<string, number> = {
  free:       1,
  starter:    2,
  pro:        4,
  all_access: 10,
}

/**
 * Max questions per exam/study session
 * free → 30 | core → 60 | pro → 60 | elite → 60
 */
export const PLAN_QUESTION_LIMITS: Record<string, number> = {
  free:       30,
  starter:    60,
  pro:        60,
  all_access: 60,
}

/**
 * Live coaching session included (minutes)
 * 0 = none | pro → 60 (standalone $99) | elite → 90 (standalone $149)
 */
export const PLAN_COACHING_MINS: Record<string, number> = {
  free:       0,
  starter:    0,
  pro:        60,
  all_access: 90,
}

// ── Human-readable feature list per plan (for pricing page / UI) ──────────
export const PLAN_FEATURES: Record<string, string[]> = {
  free: [
    '1 mock exam — 30 questions',
    '1 practice exam — 30 questions',
    'Instant answer explanations',
  ],
  starter: [
    '2 mock exams — 60 questions each',
    '2 practice exams',
    'Timed exam simulation',
    'Gemini AI study assistant',
    'Score report & corrections',
  ],
  pro: [
    '4 mock exams — 60 questions each',
    '4 practice exams',
    '1× 60-min coaching session (worth $99)',
    'Gemini AI study assistant',
    'Performance analytics',
  ],
  all_access: [
    '10 mock exams — full question bank',
    '10 practice exams',
    '1× 90-min coaching session (worth $149)',
    'Gemini AI study assistant',
    'Performance analytics',
    '100% Pass Guarantee',
  ],
}
