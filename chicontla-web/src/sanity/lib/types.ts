// TypeScript types for Sanity content

export interface SanityImageAsset {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface HeroStat {
  _key: string;
  value: string;
  label: string;
}

export interface ButtonField {
  label: string;
  url: string;
}

export interface HeroContent {
  eyebrow: string;
  headingLine1: string;
  headingLine2: string;
  bodyText: string;
  primaryButton: ButtonField;
  secondaryButton: ButtonField;
  backgroundImage?: SanityImageAsset;
  stats: HeroStat[];
}

export interface IntroContent {
  eyebrow: string;
  headingBlack: string;
  headingGreen: string;
  bodyText: string;
  pullQuote: string;
  groupPhoto?: SanityImageAsset;
  photoCaption: string;
  photoSubcaption: string;
  statValue: string;
  statDescription: string;
  closingQuote: string;
}

export interface ScholarsSectionContent {
  eyebrow: string;
  heading: string;
  description: string;
}

// Portable Text block type (simplified)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PortableTextBlock = any;

export interface Scholar {
  _id: string;
  name: string;
  photo?: SanityImageAsset;
  quote: string;
  story: PortableTextBlock[];
  order: number;
}

export interface CtaStatItem {
  _key: string;
  stat: string;
  title: string;
  description: string;
}

export interface CtaContent {
  eyebrow: string;
  headingSmall: string;
  headingLarge: string;
  bodyText: string;
  primaryButton: ButtonField;
  secondaryButton: ButtonField;
  statsGrid: CtaStatItem[];
  legalText: string;
}
