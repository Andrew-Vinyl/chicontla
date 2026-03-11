import { client } from "./client";
import type { QueryParams } from "@sanity/client";

// Simple sanityFetch wrapper compatible with next-sanity@12 (no defineLive)
// For real-time Live Content API, upgrade to next-sanity v9+ when stable for Next.js 16.
export async function sanityFetch<T>({
  query,
  params = {},
}: {
  query: string;
  params?: QueryParams;
}): Promise<{ data: T }> {
  const data = await client.fetch<T>(query, params, {
    next: {
      // Revalidate every 60 seconds (or on-demand when Sanity webhooks hit /api/revalidate)
      revalidate: 60,
    },
  });
  return { data };
}

// Stub SanityLive for layout compatibility (no-op if defineLive unavailable)
export function SanityLive() {
  return null;
}
