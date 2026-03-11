import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { sanityFetch } from "@/sanity/lib/live";
import {
  heroContentQuery,
  introContentQuery,
  scholarsSectionQuery,
  scholarsQuery,
  ctaContentQuery,
} from "@/sanity/lib/queries";
import type {
  HeroContent,
  IntroContent,
  ScholarsSectionContent,
  Scholar,
  CtaContent,
} from "@/sanity/lib/types";

export default async function Home() {
  const [
    { data: heroData },
    { data: introData },
    { data: scholarsSectionData },
    { data: scholars },
    { data: ctaData },
  ] = await Promise.all([
    sanityFetch<HeroContent | null>({ query: heroContentQuery }),
    sanityFetch<IntroContent | null>({ query: introContentQuery }),
    sanityFetch<ScholarsSectionContent | null>({ query: scholarsSectionQuery }),
    sanityFetch<Scholar[]>({ query: scholarsQuery }),
    sanityFetch<CtaContent | null>({ query: ctaContentQuery }),
  ]);

  return (
    <main className="min-h-screen bg-color-background flex flex-col font-sans">
      <Hero data={heroData} />
      <Intro data={introData} />
      <Testimonials scholars={scholars ?? []} sectionData={scholarsSectionData} />
      <CTA data={ctaData} />
    </main>
  );
}
