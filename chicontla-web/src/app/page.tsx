import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { sanityFetch } from "@/sanity/lib/live";
import { homepageQuery, scholarsQuery, ctaContentQuery } from "@/sanity/lib/queries";
import type { HomepageContent, Scholar, CtaContent } from "@/sanity/lib/types";

export default async function Home() {
  const [
    { data: homepage },
    { data: scholars },
    { data: ctaData },
  ] = await Promise.all([
    sanityFetch<HomepageContent | null>({ query: homepageQuery }),
    sanityFetch<Scholar[]>({ query: scholarsQuery }),
    sanityFetch<CtaContent | null>({ query: ctaContentQuery }),
  ]);

  return (
    <main className="min-h-screen bg-color-background flex flex-col font-sans">
      <Hero data={homepage} />
      <Intro data={homepage} />
      <Testimonials scholars={scholars ?? []} sectionData={homepage} />
      <CTA data={ctaData} />
    </main>
  );
}
