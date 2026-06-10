const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 20;

const hits = new Map<string, number[]>();

export function rateLimit(
  key: string,
  now: number = Date.now()
): { allowed: boolean } {
  const cutoff = now - WINDOW_MS;
  const recent = (hits.get(key) ?? []).filter((t) => t > cutoff);
  if (recent.length >= MAX_REQUESTS) {
    hits.set(key, recent);
    return { allowed: false };
  }
  recent.push(now);
  hits.set(key, recent);
  return { allowed: true };
}

export function resetRateLimits() {
  hits.clear();
}
