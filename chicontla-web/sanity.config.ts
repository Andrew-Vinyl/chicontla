"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";

import { homepageSchema } from "./src/sanity/schemaTypes/homepage";
import { scholarSchema } from "./src/sanity/schemaTypes/scholars";
import { ctaContentSchema } from "./src/sanity/schemaTypes/ctaContent";

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
                  .documentId("homepage")
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
                  .documentId("ctaContent")
                  .title("CTA Section")
              ),
          ]),
    }),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
  ],

  schema: {
    types: [
      homepageSchema,
      scholarSchema,
      ctaContentSchema,
    ],
  },
});
