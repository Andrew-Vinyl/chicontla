import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-color-background flex flex-col font-sans">
      <Hero />
      <Intro />
      <Testimonials />
      <CTA />
    </main>
  );
}
