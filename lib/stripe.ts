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
  starter:    1900,  // $19
  pro:        4900,  // $49
  all_access: 19900, // $199
}

export const PLAN_LABELS: Record<string, string> = {
  free:       'Free',
  starter:    'Starter',
  pro:        'Pro',
  all_access: 'All-Access',
}

// ── Question & exam constants ─────────────────────────────────────────────

/** Every timed mock exam is always exactly 60 questions (for paid plans) */
export const EXAM_QUESTION_COUNT = 60

/** Free tier: max questions visible in mock exam AND practice/study mode */
export const FREE_QUESTION_LIMIT = 30

// ── Per-plan limits ───────────────────────────────────────────────────────

/**
 * Timed Mock Exams accessible
 * free → 1 (30 Q) | starter → 1 (60 Q) | pro → 3 (60 Q each) | all_access → 10
 */
export const PLAN_MOCK_LIMITS: Record<string, number> = {
  free:       1,
  starter:    1,
  pro:        3,
  all_access: 10,
}

/**
 * Practice Exams (untimed, with explanations)
 * free → 1 (30 Q only) | starter → 1 | pro → 3 | all_access → 10
 */
export const PLAN_PRACTICE_LIMITS: Record<string, number> = {
  free:       1,
  starter:    1,
  pro:        3,
  all_access: 10,
}

/**
 * Max questions accessible per exam/study session
 * free → 30 | starter → 60 | pro → 180 | all_access → 400
 */
export const PLAN_QUESTION_LIMITS: Record<string, number> = {
  free:       30,
  starter:    60,
  pro:        180,
  all_access: 400,
}

/**
 * Live coaching session included (minutes)
 * 0 = none
 */
export const PLAN_COACHING_MINS: Record<string, number> = {
  free:       0,
  starter:    0,
  pro:        0,
  all_access: 30,
}

// ── Human-readable feature list per plan (for pricing page / UI) ──────────
export const PLAN_FEATURES: Record<string, string[]> = {
  free: [
    '1 mock exam — 30 questions',
    '1 practice exam — 30 questions',
    'Instant answer explanations',
  ],
  starter: [
    '1 mock exam — 60 questions (2026)',
    '1 practice exam',
    'Timed exam simulation',
    'Score report & corrections',
  ],
  pro: [
    '3 mock exams — 180 questions (2026)',
    '3 practice exams',
    'Timed exam simulation',
    'Gemini AI study assistant',
    'Performance analytics',
  ],
  all_access: [
    '10 mock exams',
    '400-question full bank',
    '10 practice exams',
    '30 min live coaching session',
    'Gemini AI study assistant',
    'Performance analytics',
    '100% Pass Guarantee',
  ],
}
