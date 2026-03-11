import { defineType, defineField } from "sanity";

export const ctaContentSchema = defineType({
  name: "ctaContent",
  type: "document",
  title: "CTA Section",
  fields: [
    defineField({ name: "eyebrow", type: "string", title: "Eyebrow Label" }),
    defineField({ name: "headingSmall", type: "string", title: "Heading Line 1 (small)" }),
    defineField({ name: "headingLarge", type: "string", title: "Heading Line 2 (large, last word colored)" }),
    defineField({ name: "bodyText", type: "text", title: "Body Paragraph" }),
    defineField({
      name: "primaryButton",
      type: "object",
      title: "Primary Button",
      fields: [
        { name: "label", type: "string", title: "Label" },
        { name: "url", type: "url", title: "URL" },
      ],
    }),
    defineField({
      name: "secondaryButton",
      type: "object",
      title: "Secondary Button",
      fields: [
        { name: "label", type: "string", title: "Label" },
        { name: "url", type: "url", title: "URL" },
      ],
    }),
    defineField({
      name: "statsGrid",
      type: "array",
      title: "Stats Grid (4 items)",
      of: [
        {
          type: "object",
          name: "statItem",
          fields: [
            { name: "stat", type: "string", title: "Stat Value" },
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "text", title: "Description", rows: 2 },
          ],
        },
      ],
    }),
    defineField({ name: "legalText", type: "string", title: "Legal / Footer Note" }),
  ],
});
