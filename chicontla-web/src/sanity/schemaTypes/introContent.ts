import { defineType, defineField } from "sanity";

export const introContentSchema = defineType({
  name: "introContent",
  type: "document",
  title: "Intro Section",
  fields: [
    defineField({ name: "eyebrow", type: "string", title: "Eyebrow Label" }),
    defineField({ name: "headingBlack", type: "string", title: "Heading (black portion)" }),
    defineField({ name: "headingGreen", type: "string", title: "Heading (green accented portion)" }),
    defineField({ name: "bodyText", type: "text", title: "Body Text", rows: 6 }),
    defineField({ name: "pullQuote", type: "text", title: "Pull Quote" }),
    defineField({
      name: "groupPhoto",
      type: "image",
      title: "Group Photo",
      options: { hotspot: true },
    }),
    defineField({ name: "photoCaption", type: "string", title: "Photo Caption (bold)" }),
    defineField({ name: "photoSubcaption", type: "string", title: "Photo Sub-Caption" }),
    defineField({ name: "statValue", type: "string", title: "Stat Value" }),
    defineField({ name: "statDescription", type: "text", title: "Stat Description", rows: 2 }),
    defineField({ name: "closingQuote", type: "text", title: "Closing Quote" }),
  ],
});
