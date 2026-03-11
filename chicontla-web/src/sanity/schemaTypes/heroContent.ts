import { defineType, defineField } from "sanity";

export const heroContentSchema = defineType({
  name: "heroContent",
  type: "document",
  title: "Hero Section",
  fields: [
    defineField({ name: "eyebrow", type: "string", title: "Eyebrow Label" }),
    defineField({ name: "headingLine1", type: "string", title: "Heading Line 1" }),
    defineField({ name: "headingLine2", type: "string", title: "Heading Line 2 (accented color)" }),
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
        { name: "url", type: "string", title: "URL" },
      ],
    }),
    defineField({
      name: "backgroundImage",
      type: "image",
      title: "Background Image",
      options: { hotspot: true },
    }),
    defineField({
      name: "stats",
      type: "array",
      title: "Stats Strip",
      of: [
        {
          type: "object",
          name: "stat",
          fields: [
            { name: "value", type: "string", title: "Value" },
            { name: "label", type: "string", title: "Label" },
          ],
        },
      ],
    }),
  ],
});
