"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { HomepageContent } from "@/sanity/lib/types";

interface HeroProps {
  data?: HomepageContent | null;
}

// Hardcoded fallbacks so the page still renders if Sanity is unavailable
const FALLBACK = {
  eyebrow: "Invest in the Future",
  headingLine1: "SCHOLARSHIP",
  headingLine2: "PROGRAM",
  bodyText:
    "Coffee Growing Community provides full-ride college scholarships to young people from Chicontla, Mexico — empowering them to transform their lives, families, and community.",
  primaryButton: { label: "Fund a Scholar", url: "https://coffeegrowingcommunity.org/?give=8NDR96EK" },
  secondaryButton: { label: "Read Stories", url: "#stories" },
  stats: [
    { _key: "s1", value: "100%", label: "Tuition Covered" },
    { _key: "s2", value: "4 Years", label: "Coached & Mentored" },
    { _key: "s3", value: "Puebla, MX", label: "Target Region" },
  ],
};

export default function Hero({ data }: HeroProps) {
  // Read from the new prefixed homepage fields, fallback to FALLBACK values
  const eyebrow = data?.heroEyebrow ?? FALLBACK.eyebrow;
  const headingLine1 = data?.heroHeadingLine1 ?? FALLBACK.headingLine1;
  const headingLine2 = data?.heroHeadingLine2 ?? FALLBACK.headingLine2;
  const bodyText = data?.heroBodyText ?? FALLBACK.bodyText;
  const primaryButton = data?.heroPrimaryButton ?? FALLBACK.primaryButton;
  const secondaryButton = data?.heroSecondaryButton ?? FALLBACK.secondaryButton;
  const stats = data?.heroStats ?? FALLBACK.stats;

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="min-h-screen relative flex flex-col overflow-hidden">
      {/* Background: Ken Burns zoom loop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.12] }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <Image
            src="/images/Chicontla-Joanne-WEB-038.jpg"
            alt="Coffee farming community"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
        </motion.div>
        <div className="absolute inset-0 bg-primary/82" />
      </div>

      {/* Brand Logo */}
      <div className="absolute top-8 left-6 md:left-12 z-50">
        <Image
          src="/logo.png"
          alt="Coffee Growing Community"
          width={240}
          height={80}
          className="w-48 md:w-64 h-auto"
          priority
        />
      </div>

      {/* Text content */}
      <div className="container mx-auto px-6 max-w-[1400px] relative z-10 flex-1 flex flex-col justify-center pt-28 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="mb-8 flex items-center gap-4">
            <span className="w-12 h-1 bg-donate" />
            <span className="text-donate font-body tracking-[0.2em] font-bold text-sm uppercase">
              {eyebrow}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-[38px] sm:text-8xl lg:text-[110px] xl:text-[130px] font-heading font-black text-white leading-[0.85] tracking-tighter mb-10"
          >
            {headingLine1}
            <br />
            <span className="text-donate">{headingLine2}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl text-white/90 font-body leading-relaxed max-w-2xl mb-12 border-l-4 border-donate pl-6 py-2"
          >
            {bodyText}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-16"
          >
            <a
              href={primaryButton.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-donate text-white hover:bg-accent font-body font-bold text-sm tracking-widest uppercase px-10 py-5 rounded-full transition-colors duration-300 w-full sm:w-auto text-center shadow-lg"
            >
              {primaryButton.label}
            </a>
            <a
              href={secondaryButton.url}
              className="bg-transparent border border-white/30 text-white hover:bg-white/10 font-body font-bold text-sm tracking-widest uppercase px-10 py-5 rounded-full transition-colors duration-300 w-full sm:w-auto text-center"
            >
              {secondaryButton.label}
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-8"
          >
            {stats?.map((stat, i) => (
              <div key={stat._key ?? i} className={stats.length > 2 && i === stats.length - 1 ? "col-span-2 sm:col-span-2" : ""}>
                <p className="font-heading font-bold text-4xl text-donate mb-1">{stat.value}</p>
                <p className="font-body text-xs text-white/70 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
