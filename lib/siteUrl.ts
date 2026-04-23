export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const fallback = "http://localhost:3000";
  const raw = fromEnv && fromEnv.length > 0 ? fromEnv : fallback;
  return raw.endsWith("/") ? raw.slice(0, -1) : raw;
}
