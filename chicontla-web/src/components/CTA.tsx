"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { CtaContent } from "@/sanity/lib/types";

interface CTAProps {
  data?: CtaContent | null;
}

const FALLBACK: CtaContent = {
  eyebrow: "For The Future",
  headingSmall: "IT'S TIME TO",
  headingLarge: "SUPPORT A SCHOLAR.",
  bodyText:
    "Your gift funds a full-tuition scholarship for a student from Chicontla who will go to college, return home, and serve their community for years to come.",
  primaryButton: {
    label: "Donate Now",
    url: "https://coffeegrowingcommunity.org/?give=8NDR96EK",
  },
  secondaryButton: {
    label: "Learn More",
    url: "https://coffeegrowingcommunity.org/youth-leadership-program-inspires-the-next-generation/",
  },
  statsGrid: [
    {
      _key: "s1",
      stat: "100%",
      title: "Full Tuition Covered",
      description: "For students who otherwise couldn't attend.",
    },
    {
      _key: "s2",
      stat: "1:1",
      title: "Mentorship Included",
      description: "Every student is guided through their entire program.",
    },
    {
      _key: "s3",
      stat: "2 Yrs",
      title: "Community Contract",
      description: "Graduates serve locally for at least two years.",
    },
    {
      _key: "s4",
      stat: "10+",
      title: "Graduates",
      description: "More than ten scholars have completed their degrees and returned to serve.",
    },
  ],
  legalText:
    "Coffee Growing Community is a registered nonprofit. All gifts are tax-deductible.",
};

export default function CTA({ data }: CTAProps) {
  const d = data ?? FALLBACK;

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative py-32 overflow-hidden" id="donate">
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Chicontla-Joanne-WEB-015.jpg"
          alt="Coffee farming landscape"
          fill
          className="object-cover object-center"
          quality={90}
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 text-donate font-body font-bold uppercase tracking-[0.2em] text-sm mb-6 border-b-2 border-donate pb-1">
              {d.eyebrow}
            </span>
            <h2 className="font-heading font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              <span className="block text-3xl lg:text-4xl xl:text-5xl mb-1">{d.headingSmall}</span>
              <span className="block text-5xl lg:text-6xl xl:text-7xl">
                {(() => {
                  const words = d.headingLarge.split(" ");
                  const last = words.pop();
                  return (
                    <>
                      {words.join(" ")}&nbsp;
                      <span className="text-donate">{last}</span>
                    </>
                  );
                })()}
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/80 font-body leading-relaxed mb-10 border-l-4 border-donate pl-6">
              {d.bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href={d.primaryButton.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center bg-donate hover:bg-accent text-white font-body font-bold text-sm tracking-widest uppercase px-10 py-5 rounded-full transition-colors duration-300 w-full sm:w-auto text-center shadow-lg"
              >
                {d.primaryButton.label}
              </a>
              <a
                href={d.secondaryButton.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center bg-transparent border border-white/30 hover:bg-white/10 text-white font-body font-bold text-sm tracking-widest uppercase px-10 py-5 rounded-full transition-colors duration-300 w-full sm:w-auto text-center"
              >
                {d.secondaryButton.label}
              </a>
            </div>
          </motion.div>

          {/* Right Column: Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-l border-white/10"
          >
            {d.statsGrid?.map((item, idx) => (
              <motion.div
                key={item._key ?? idx}
                variants={itemVariants}
                className="p-8 border-b border-r border-white/10 hover:bg-white/5 transition-colors"
              >
                <p className="font-heading font-bold text-4xl text-donate mb-2">{item.stat}</p>
                <h4 className="font-heading font-bold text-xl mb-2 text-white uppercase">
                  {item.title}
                </h4>
                <p className="text-white/60 font-body text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center text-xs text-white/40 font-body uppercase tracking-widest border-t border-white/10 pt-8"
        >
          {d.legalText}
        </motion.p>
      </div>
    </section>
  );
}
