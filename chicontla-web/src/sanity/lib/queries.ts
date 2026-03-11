import { groq } from "next-sanity";

// ── Homepage singleton (Hero + Intro + Scholars header) ───────────────────
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
export const ctaContentQuery = groq`*[_type == "ctaContent" && _id == "ctaContent"][0]`;

// ── Legacy aliases (kept for compatibility) ───────────────────────────────
export const heroContentQuery = homepageQuery;
export const introContentQuery = homepageQuery;
export const scholarsSectionQuery = homepageQuery;
