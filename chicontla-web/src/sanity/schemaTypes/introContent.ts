import { defineType, defineField } from "sanity";

export const introContentSchema = defineType({
  name: "introContent",
  type: "document",
  title: "Intro Section",
  fields: [
    defineField({ name: "eyebrow", type: "string", title: "Eyebrow Label" }),
    defineField({ name: "headingBlack", type: "string", title: "Heading (Black Part)" }),
    defineField({ name: "headingGreen", type: "string", title: "Heading (Green Accent Part)" }),
    defineField({ name: "bodyText", type: "text", title: "Body Text (separate paragraphs with blank lines)" }),
    defineField({ name: "pullQuote", type: "text", title: "Pull Quote", rows: 3 }),
    defineField({
      name: "groupPhoto",
      type: "image",
      title: "Group Photo",
      options: { hotspot: true },
    }),
    defineField({ name: "photoCaption", type: "string", title: "Photo Caption" }),
    defineField({ name: "photoSubcaption", type: "string", title: "Photo Subcaption" }),
    defineField({ name: "statValue", type: "string", title: "Stat Value (e.g. 10+)" }),
    defineField({ name: "statDescription", type: "text", title: "Stat Description", rows: 3 }),
    defineField({ name: "closingQuote", type: "text", title: "Closing Quote Card", rows: 3 }),
  ],
});
