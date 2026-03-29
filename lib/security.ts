/**
 * Validates a redirect path is same-host only (prevents open redirect).
 * Safe to use on both server and client.
 */
export function safeRedirectPath(
  next: string | null,
  fallback = "/dashboard"
): string {
  if (!next) return fallback;
  try {
    // Must be a relative path starting with / but not //
    if (!next.startsWith("/") || next.startsWith("//")) return fallback;
    // Parse against a known base to extract host
    const url = new URL(next, "https://exampasspro.vercel.app");
    if (url.host !== "exampasspro.vercel.app") return fallback;
    return next;
  } catch {
    return fallback;
  }
}

// Rate limit tiers keyed by route prefix
// Format: [requests, windowSeconds]
export const RATE_LIMIT_CONFIG: Record<string, [number, number]> = {
  "/api/ai":                     [20, 60],   // 20 AI requests per minute per IP
  "/api/exam/submit":            [30, 60],   // 30 exam submits per minute per IP
  "/api/stripe/checkout":        [10, 60],   // 10 checkout attempts per minute per IP
  "/api/coaching/checkout":      [10, 60],   // 10 coaching checkouts per minute per IP
  "/api/admin/import-questions": [5,  60],   // 5 bulk imports per minute per IP
};
