"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { homepageSchema } from "./src/sanity/schemaTypes/homepage";
import { scholarSchema } from "./src/sanity/schemaTypes/scholars";
import { ctaContentSchema } from "./src/sanity/schemaTypes/ctaContent";

// IDs of the singleton documents that already contain content in Sanity
const HOMEPAGE_DOC_ID = "694e7b59-8b97-417f-b3f6-f98668b35e1a";
const CTA_DOC_ID = "879e84c0-6b8f-4c58-ae99-2eef51e620b9";

export default defineConfig({
  name: "chicontla",
  title: "Chicontla Scholarship Site",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  basePath: "/studio",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // ── Singleton: Homepage (Hero + Intro + Scholars Header) ──
            S.listItem()
              .title("🏠 Homepage")
              .child(
                S.document()
                  .schemaType("homepage")
                  .documentId(HOMEPAGE_DOC_ID)
                  .title("Homepage Content")
              ),

            S.divider(),

            // ── Collection: Individual Scholar profiles ──
            S.documentTypeListItem("scholar").title("🎓 Scholars"),

            S.divider(),

            // ── Singleton: CTA Section ──
            S.listItem()
              .title("📣 CTA Section")
              .child(
                S.document()
                  .schemaType("ctaContent")
                  .documentId(CTA_DOC_ID)
                  .title("CTA Section")
              ),
          ]),
    }),
    // presentationTool removed — was causing ?__vercel_draft=1 redirect on the live site
  ],

  schema: {
    types: [
      homepageSchema,
      scholarSchema,
      ctaContentSchema,
    ],
  },
});
