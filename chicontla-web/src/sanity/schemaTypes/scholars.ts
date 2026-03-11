import { defineType, defineField } from "sanity";

export const scholarsSectionSchema = defineType({
  name: "scholarsSection",
  type: "document",
  title: "Scholars Section Header",
  fields: [
    defineField({ name: "eyebrow", type: "string", title: "Eyebrow Label" }),
    defineField({ name: "heading", type: "string", title: "Section Heading" }),
    defineField({ name: "description", type: "text", title: "Section Description" }),
  ],
});

export const scholarSchema = defineType({
  name: "scholar",
  type: "document",
  title: "Scholar",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Full Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "photo",
      type: "image",
      title: "Photo",
      options: { hotspot: true },
    }),
    defineField({ name: "quote", type: "text", title: "Pull Quote", rows: 3 }),
    defineField({
      name: "story",
      type: "array",
      title: "Story",
      of: [{ type: "block" }],
    }),
    defineField({ name: "order", type: "number", title: "Display Order" }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
