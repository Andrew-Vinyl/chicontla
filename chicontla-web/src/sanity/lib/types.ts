// ── Portable Text block ───────────────────────────────────────────────────
export interface PortableTextBlock {
  _type: "block";
  _key: string;
  style?: string;
  children?: Array<{
    _type: "span";
    _key: string;
    text: string;
    marks?: string[];
  }>;
  markDefs?: Array<{ _type: string; _key: string; [key: string]: unknown }>;
}

// ── Button ────────────────────────────────────────────────────────────────
export interface ButtonField {
  label?: string;
  url?: string;
}

// ── Stat (hero strip) ─────────────────────────────────────────────────────
export interface HeroStat {
  _key?: string;
  value: string;
  label: string;
}

// ── CTA stat grid item ────────────────────────────────────────────────────
export interface CtaStatItem {
  _key?: string;
  stat: string;
  title: string;
  description?: string;
}

// ── Unified Homepage document (Hero + Intro + Scholars header) ────────────
export interface HomepageContent {
  _id?: string;
  _type?: string;

  // Hero
  heroEyebrow?: string;
  heroHeadingLine1?: string;
  heroHeadingLine2?: string;
  heroBodyText?: string;
  heroPrimaryButton?: ButtonField;
  heroSecondaryButton?: ButtonField;
  heroStats?: HeroStat[];

  // Intro
  introEyebrow?: string;
  introHeadingBlack?: string;
  introHeadingGreen?: string;
  introBodyText?: string;
  introPullQuote?: string;
  introGroupPhoto?: { asset?: { url?: string } };
  introPhotoCaption?: string;
  introPhotoSubcaption?: string;
  introStatValue?: string;
  introStatDescription?: string;
  introClosingQuote?: string;

  // Scholars section header
  scholarsEyebrow?: string;
  scholarsHeading?: string;
  scholarsDescription?: string;
}

// ── Scholar profile ───────────────────────────────────────────────────────
export interface Scholar {
  _id: string;
  name: string;
  photo?: string;
  quote?: string;
  story?: PortableTextBlock[];
  order?: number;
}

// ── CTA Section ───────────────────────────────────────────────────────────
export interface CtaContent {
  _id?: string;
  eyebrow?: string;
  headingSmall?: string;
  headingLarge?: string;
  bodyText?: string;
  primaryButton?: ButtonField;
  secondaryButton?: ButtonField;
  statsGrid?: CtaStatItem[];
  legalText?: string;
}

// ── Legacy type aliases (kept so existing component props don't break) ─────
export type HeroContent = HomepageContent;
export type IntroContent = HomepageContent;
export type ScholarsSectionContent = {
  eyebrow?: string;
  heading?: string;
  description?: string;
};
