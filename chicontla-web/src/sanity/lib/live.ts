import { client } from "./client";
import type { QueryParams } from "@sanity/client";

// Simple sanityFetch wrapper compatible with next-sanity@12 (no defineLive)
export async function sanityFetch<T>({
  query,
  params = {},
}: {
  query: string;
  params?: QueryParams;
}): Promise<{ data: T }> {
  const data = await client.fetch<T>(query, params, {
    next: {
      revalidate: 60,
    },
  });
  return { data };
}

// Stub SanityLive for layout compatibility
export function SanityLive() {
  return null;
}
