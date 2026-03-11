"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import type { Scholar, ScholarsSectionContent } from "@/sanity/lib/types";

interface TestimonialsProps {
  scholars?: Scholar[];
  sectionData?: ScholarsSectionContent | null;
}

const FALLBACK_SECTION: ScholarsSectionContent = {
  eyebrow: "Stories Out of Chicontla",
  heading: "MEET THE SCHOLARS",
  description:
    "The direct stories of individuals from Chicontla whose lives and communities have been forever changed by a college education.",
};

// Hardcoded scholars as fallback if Sanity returns none
const FALLBACK_SCHOLARS: Scholar[] = [
  {
    _id: "kari",
    name: "Erika Lizeth Barqueras Perez",
    quote:
      "Kari will continue to faithfully serve her community and gives God the credit for graciously providing her the opportunity to pursue a college degree.",
    story: [],
    order: 1,
  },
  {
    _id: "julio",
    name: "José Julian Hernandez Gomez",
    quote: "He would later become the first person from La Tranca to graduate from college!",
    story: [],
    order: 2,
  },
  {
    _id: "naomi",
    name: "Naomi Lael Cevedeo Velázquez",
    quote:
      "By God's grace, Naomi applied and earned a scholarship through Coffee Growing Community.",
    story: [],
    order: 3,
  },
  {
    _id: "hector",
    name: "Héctor Ramírez Romero",
    quote: "CGC has faith that Hector will continue to steward the gift to better his family and community.",
    story: [],
    order: 4,
  },
];

const SCHOLAR_IMAGES: Record<string, string> = {
  "Erika Lizeth Barqueras Perez": "/images/Kari-solo.JPG",
  "José Julian Hernandez Gomez": "/images/Julio-solo.JPG",
  "Naomi Lael Cevedeo Velázquez": "/images/Naomi-solo.JPG",
  "Héctor Ramírez Romero": "/images/Hector-solo.JPG",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function makePortableTextComponents(isFirst: boolean) {
  return {
    block: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      normal: ({ children }: any) =>
        isFirst ? (
          <p className="mb-6 first-letter:text-5xl first-letter:font-heading first-letter:font-black first-letter:text-donate first-letter:mr-1 first-letter:float-left first-line:uppercase first-line:tracking-widest">
            {children}
          </p>
        ) : (
          <p className="mb-6">{children}</p>
        ),
    },
  };
}

export default function Testimonials({ scholars, sectionData }: TestimonialsProps) {
  const section = sectionData ?? FALLBACK_SECTION;
  const displayScholars = scholars && scholars.length > 0 ? scholars : FALLBACK_SCHOLARS;

  return (
    <section className="bg-surface py-24 lg:py-32 relative border-b border-background/10" id="stories">
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b-2 border-background/10 pb-6 gap-6"
        >
          <div>
            <span className="inline-block text-donate font-body font-bold uppercase tracking-[0.2em] text-sm mb-4">
              {section.eyebrow}
            </span>
            <h2 className="text-4xl lg:text-5xl font-heading font-black text-primary tracking-tighter uppercase">
              {section.heading}
            </h2>
          </div>
          <p className="text-text font-body text-lg max-w-sm md:text-right">
            {section.description}
          </p>
        </motion.div>

        {/* Scholars List */}
        <div className="flex flex-col gap-24">
          {displayScholars.map((scholar, i) => {
            // Use uploaded Sanity image if available, otherwise fall back to local
            const imgSrc = SCHOLAR_IMAGES[scholar.name] ?? "/images/Kari-solo.JPG";

            return (
              <motion.div
                key={scholar._id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.05 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start group"
              >
                {/* Image & Pull Quote Column */}
                <div className={`lg:col-span-4 ${i % 2 === 1 ? "lg:order-2 lg:col-start-9" : ""}`}>
                  <div className="aspect-[4/5] relative bg-background/5 border border-background/10 overflow-hidden rounded-2xl">
                    <Image
                      src={imgSrc}
                      alt={scholar.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  {/* Desktop pull quote */}
                  <div className="mt-6 pl-5 py-4 border-l-4 border-donate bg-background/5 rounded-r-2xl pr-5 hidden lg:block">
                    <p className="font-heading font-bold text-base text-background leading-snug">
                      {scholar.quote}
                    </p>
                  </div>
                </div>

                {/* Story Column */}
                <div className={`lg:col-span-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-primary uppercase tracking-tight mb-8">
                    {scholar.name}
                  </h3>

                  <div className="md:columns-2 gap-8 prose prose-lg prose-p:text-text prose-p:font-body prose-p:leading-relaxed max-w-none">
                    {scholar.story && scholar.story.length > 0 ? (
                      <>
                        {/* First paragraph gets the drop-cap treatment */}
                        <PortableText
                          value={[scholar.story[0]]}
                          components={makePortableTextComponents(true)}
                        />
                        {/* Remaining paragraphs are plain body text */}
                        {scholar.story.length > 1 && (
                          <PortableText
                            value={scholar.story.slice(1)}
                            components={makePortableTextComponents(false)}
                          />
                        )}
                      </>
                    ) : (
                      <p className="text-text font-body leading-relaxed">
                        Story coming soon.
                      </p>
                    )}
                  </div>

                  {/* Mobile pull quote */}
                  <div className="mt-6 pl-5 py-4 border-l-4 border-donate bg-background/5 rounded-r-2xl pr-5 lg:hidden">
                    <p className="font-heading font-bold text-base text-background leading-snug">
                      {scholar.quote}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
