"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Intro() {
  const fadeUp: any = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="bg-surface py-24 lg:py-40 border-b border-background/10 overflow-hidden grain-overlay">
      <div className="container mx-auto px-6 max-w-[1320px] relative z-10">

        {/* ── Section header — full width, prominent at top ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-3 text-donate font-body font-bold uppercase tracking-[0.2em] text-sm mb-6"
          >
            <span className="w-8 h-0.5 bg-donate" />
            The Objective
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-heading font-black text-background leading-[0.9] tracking-tight max-w-5xl"
          >
            A FULL RIDE TO COLLEGE, AND A{" "}
            <span className="text-primary">COMMITMENT TO IMPACT THEIR COMMUNITY.</span>
          </motion.h2>
        </motion.div>

        {/* ── Two-column body ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } } }}
            className="order-2 lg:order-1 lg:col-span-6 font-body text-lg lg:text-xl text-background leading-relaxed space-y-8"
          >
            <motion.p variants={fadeUp}>
              In the coffee-growing region surrounding Chicontla, Mexico, the path to higher
              education is steep. Transportation alone can mean rising before dawn to catch
              overcrowded buses for hour-and-a-half commutes each way. For most families in
              the area, the cost of tuition is simply impossible.
            </motion.p>

            <motion.div variants={fadeUp} className="pl-6 py-3 border-l-4 border-donate relative bg-background/5 rounded-r-2xl pr-6">
              <Quote className="absolute -top-6 -left-3 w-10 h-10 text-donate rotate-180 opacity-40" />
              <p className="text-xl sm:text-2xl font-heading font-bold text-background leading-snug">
                Coffee Growing Community&apos;s college scholarship fund exists to remove
                that barrier entirely.
              </p>
            </motion.div>

            <motion.p variants={fadeUp}>
              The program covers <strong className="text-background font-black">full tuition</strong>{" "}
              for students from the Chicontla area — young adults who show promise, passion,
              and a desire to serve their community — but who lack the economic means to
              pursue a degree on their own. Each recipient is paired with a{" "}
              <strong className="text-background font-black">dedicated mentor</strong> who
              walks alongside them throughout their studies, ensuring they have the guidance,
              accountability, and support they need to succeed.
            </motion.p>

            <motion.p variants={fadeUp}>
              But the scholarship isn&apos;t just about getting a degree. It&apos;s about
              what comes next.
            </motion.p>

            <motion.p variants={fadeUp}>
              As part of their commitment, scholarship recipients pledge to{" "}
              <strong className="text-background font-black">return to their communities</strong>{" "}
              after graduation and apply their skills locally for at least two years. A nursing
              student becomes a caregiver for families who&apos;ve never had reliable
              healthcare. An engineer helps design infrastructure for the roads and schools
              his neighbors use every day. An accountant manages bookkeeping for a dozen local
              child development centers. The investment doesn&apos;t leave — it stays,
              multiplies, and takes root.
            </motion.p>
          </motion.div>

          {/* Right: photo + info cards stacked below */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 lg:col-span-6 flex flex-col gap-5"
          >
            {/* Group photo — 4:3 matches the photo's natural ratio exactly */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/group photo.JPG"
                alt="Coffee Growing Community Scholarship Recipients"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Bottom-gradient caption */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/65 to-transparent pt-16 pb-5 px-6 flex items-end justify-between">
                <div>
                  <span className="block w-6 h-0.5 bg-donate mb-2" />
                  <p className="font-body text-white/90 text-xs font-semibold uppercase tracking-[0.18em]">
                    Recent Scholarship Recipients
                  </p>
                  <p className="font-body text-white/50 text-xs mt-0.5 tracking-wide">
                    Chicontla Region, Puebla · Mexico
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-white/35 text-xs font-body uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 rounded-full bg-donate animate-pulse" />
                  CGC
                </div>
              </div>
            </div>

            {/* Card 1: 10+ stat — matches pull-quote style */}
            <div className="pl-6 py-5 border-l-4 border-donate relative bg-background/5 rounded-r-2xl pr-6 flex items-center gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default">
              <p className="font-heading font-black text-5xl text-donate shrink-0">10+</p>
              <p className="font-body text-background/80 text-sm leading-relaxed">
                Students from the Chicontla region have already walked this path. Each one
                is a first — and each one opens a door for the ones who come next.
              </p>
            </div>

            {/* Card 2: Closing quote — exact same style as the inline pull-quote */}
            <div className="pl-6 py-4 border-l-4 border-donate relative bg-background/5 rounded-r-2xl pr-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default">
              <Quote className="absolute -top-5 -left-3 w-9 h-9 text-donate rotate-180 opacity-40" />
              <p className="text-lg sm:text-xl font-heading font-bold text-background leading-snug">
                This is community enrichment at its most direct: give one person a chance at
                education, and watch an entire community grow stronger.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
