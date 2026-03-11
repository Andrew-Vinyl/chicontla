"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";

import { heroContentSchema } from "./src/sanity/schemaTypes/heroContent";
import { introContentSchema } from "./src/sanity/schemaTypes/introContent";
import { scholarsSectionSchema, scholarSchema } from "./src/sanity/schemaTypes/scholars";
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
            S.listItem()
              .title("Hero Section")
              .child(S.document().schemaType("heroContent").documentId("heroContent")),
            S.listItem()
              .title("Intro Section")
              .child(S.document().schemaType("introContent").documentId("introContent")),
            S.listItem()
              .title("Scholars Section Header")
              .child(S.document().schemaType("scholarsSection").documentId("scholarsSection")),
            S.divider(),
            S.documentTypeListItem("scholar").title("Scholars"),
            S.divider(),
            S.listItem()
              .title("CTA Section")
              .child(S.document().schemaType("ctaContent").documentId("ctaContent")),
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
      heroContentSchema,
      introContentSchema,
      scholarsSectionSchema,
      scholarSchema,
      ctaContentSchema,
    ],
  },
});
