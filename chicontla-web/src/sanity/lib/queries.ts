import { defineQuery } from "next-sanity";

export const heroContentQuery = defineQuery(`
  *[_type == "heroContent"][0]{
    eyebrow,
    headingLine1,
    headingLine2,
    bodyText,
    primaryButton,
    secondaryButton,
    backgroundImage,
    stats
  }
`);

export const introContentQuery = defineQuery(`
  *[_type == "introContent"][0]{
    eyebrow,
    headingBlack,
    headingGreen,
    bodyText,
    pullQuote,
    groupPhoto,
    photoCaption,
    photoSubcaption,
    statValue,
    statDescription,
    closingQuote
  }
`);

export const scholarsSectionQuery = defineQuery(`
  *[_type == "scholarsSection"][0]{
    eyebrow,
    heading,
    description
  }
`);

export const scholarsQuery = defineQuery(`
  *[_type == "scholar"] | order(order asc){
    _id,
    name,
    photo,
    quote,
    story,
    order
  }
`);

export const ctaContentQuery = defineQuery(`
  *[_type == "ctaContent"][0]{
    eyebrow,
    headingSmall,
    headingLarge,
    bodyText,
    primaryButton,
    secondaryButton,
    statsGrid,
    legalText
  }
`);
