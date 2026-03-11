import { groq } from "next-sanity";

// ── Homepage singleton (Hero + Intro + Scholars header) ───────────────────
// Fetch by _type only — the actual document has a UUID, not the string "homepage"
export const homepageQuery = groq`*[_type == "homepage"][0]`;

// ── Individual Scholar profiles ───────────────────────────────────────────
export const scholarsQuery = groq`
  *[_type == "scholar"] | order(order asc) {
    _id,
    name,
    "photo": photo.asset->url,
    quote,
    story,
    order
  }
`;

// ── CTA Section singleton ─────────────────────────────────────────────────
// Fetch by _type only — the actual document has a UUID, not the string "ctaContent"
export const ctaContentQuery = groq`*[_type == "ctaContent"][0]`;

// ── Legacy aliases (kept for compatibility) ───────────────────────────────
export const heroContentQuery = homepageQuery;
export const introContentQuery = homepageQuery;
export const scholarsSectionQuery = homepageQuery;
