import { defineType, defineField } from "sanity";

export const ctaContentSchema = defineType({
  name: "ctaContent",
  type: "document",
  title: "CTA Section",
  fields: [
    defineField({ name: "eyebrow", type: "string", title: "Eyebrow Label" }),
    defineField({ name: "headingSmall", type: "string", title: 'Heading Small Line (e.g. "IT\'S TIME TO")' }),
    defineField({ name: "headingLarge", type: "string", title: 'Heading Large Line (e.g. "SUPPORT A SCHOLAR.")' }),
    defineField({ name: "bodyText", type: "text", title: "Body Paragraph", rows: 3 }),
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
      title: "Stats Grid",
      of: [
        {
          type: "object",
          name: "statItem",
          fields: [
            { name: "stat", type: "string", title: "Stat Value" },
            { name: "title", type: "string", title: "Stat Title" },
            { name: "description", type: "text", title: "Stat Description", rows: 2 },
          ],
        },
      ],
    }),
    defineField({ name: "legalText", type: "string", title: "Footer Legal Text" }),
  ],
});
