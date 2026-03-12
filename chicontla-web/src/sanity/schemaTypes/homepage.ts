import { defineType, defineField } from "sanity";

export const homepageSchema = defineType({
  name: "homepage",
  type: "document",
  title: "Homepage",
  fields: [
    // ── HERO SECTION ─────────────────────────────────────────────────
    defineField({
      name: "heroEyebrow",
      type: "string",
      title: "Hero · Eyebrow Label",
      group: "hero",
    }),
    defineField({
      name: "heroHeadingLine1",
      type: "string",
      title: "Hero · Heading Line 1 (white)",
      group: "hero",
    }),
    defineField({
      name: "heroHeadingLine2",
      type: "string",
      title: "Hero · Heading Line 2 (green accent)",
      group: "hero",
    }),
    defineField({
      name: "heroBodyText",
      type: "text",
      title: "Hero · Body Paragraph",
      rows: 3,
      group: "hero",
    }),
    defineField({
      name: "heroPrimaryButton",
      type: "object",
      title: "Hero · Primary Button",
      group: "hero",
      fields: [
        { name: "label", type: "string", title: "Label" },
        { name: "url", type: "string", title: "URL" },
      ],
    }),
    defineField({
      name: "heroSecondaryButton",
      type: "object",
      title: "Hero · Secondary Button",
      group: "hero",
      fields: [
        { name: "label", type: "string", title: "Label" },
        { name: "url", type: "string", title: "URL" },
      ],
    }),
    defineField({
      name: "heroStats",
      type: "array",
      title: "Hero · Stats Strip",
      group: "hero",
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

    // ── INTRO SECTION ────────────────────────────────────────────────
    defineField({
      name: "introEyebrow",
      type: "string",
      title: "Intro · Eyebrow Label",
      group: "intro",
    }),
    defineField({
      name: "introHeadingBlack",
      type: "string",
      title: "Intro · Heading (black portion)",
      group: "intro",
    }),
    defineField({
      name: "introHeadingGreen",
      type: "string",
      title: "Intro · Heading (green accent portion)",
      group: "intro",
    }),
    defineField({
      name: "introBodyText",
      type: "array",
      title: "Intro · Body Text",
      group: "intro",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "introPullQuote",
      type: "text",
      title: "Intro · Pull Quote",
      rows: 2,
      group: "intro",
    }),
    defineField({
      name: "introGroupPhoto",
      type: "image",
      title: "Intro · Group Photo",
      group: "intro",
      options: { hotspot: true },
    }),
    defineField({
      name: "introPhotoCaption",
      type: "string",
      title: "Intro · Photo Caption (bold)",
      group: "intro",
    }),
    defineField({
      name: "introPhotoSubcaption",
      type: "string",
      title: "Intro · Photo Sub-Caption",
      group: "intro",
    }),
    defineField({
      name: "introStatValue",
      type: "string",
      title: "Intro · Stat Value (e.g. "10+")",
      group: "intro",
    }),
    defineField({
      name: "introStatDescription",
      type: "text",
      title: "Intro · Stat Description",
      rows: 2,
      group: "intro",
    }),
    defineField({
      name: "introClosingQuote",
      type: "text",
      title: "Intro · Closing Quote",
      rows: 2,
      group: "intro",
    }),

    // ── SCHOLARS SECTION HEADER ───────────────────────────────────────
    defineField({
      name: "scholarsEyebrow",
      type: "string",
      title: "Scholars · Eyebrow Label",
      group: "scholars",
    }),
    defineField({
      name: "scholarsHeading",
      type: "string",
      title: "Scholars · Section Heading",
      group: "scholars",
    }),
    defineField({
      name: "scholarsDescription",
      type: "text",
      title: "Scholars · Section Description",
      rows: 3,
      group: "scholars",
    }),
  ],

  groups: [
    { name: "hero", title: "🦸 Hero Section" },
    { name: "intro", title: "📖 Intro Section" },
    { name: "scholars", title: "🎓 Scholars Section Header" },
  ],
});
