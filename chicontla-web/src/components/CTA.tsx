"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CTA() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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
        {/* Forest Green overlay — same treatment as Hero */}
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
              For The Future
            </span>
            <h2 className="font-heading font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              <span className="block text-3xl lg:text-4xl xl:text-5xl mb-1">IT&apos;S TIME TO</span>
              <span className="block text-5xl lg:text-6xl xl:text-7xl">SUPPORT&nbsp;A <span className="text-donate">SCHOLAR.</span></span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/80 font-body leading-relaxed mb-10 border-l-4 border-donate pl-6">
              Your gift funds a full-tuition scholarship for a student from Chicontla who will go to college, return home, and serve their community for years to come.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href="https://coffeegrowingcommunity.org/#/fundraising/forms/8NDR96EK%20"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center bg-donate hover:bg-accent text-white font-body font-bold text-sm tracking-widest uppercase px-10 py-5 rounded-full transition-colors duration-300 w-full sm:w-auto text-center shadow-lg"
              >
                Donate Now
              </a>
              <a
                href="https://coffeegrowingcommunity.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center bg-transparent border border-white/30 hover:bg-white/10 text-white font-body font-bold text-sm tracking-widest uppercase px-10 py-5 rounded-full transition-colors duration-300 w-full sm:w-auto text-center"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Right Column: Key Details Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-l border-white/10"
          >
            {/* Grid Item 1 */}
            <motion.div variants={itemVariants} className="p-8 border-b border-r border-white/10 hover:bg-white/5 transition-colors">
              <p className="font-heading font-bold text-4xl text-donate mb-2">100%</p>
              <h4 className="font-heading font-bold text-xl mb-2 text-white uppercase">Full Tuition Covered</h4>
              <p className="text-white/60 font-body text-sm leading-relaxed">For students who otherwise couldn't attend.</p>
            </motion.div>

            {/* Grid Item 2 */}
            <motion.div variants={itemVariants} className="p-8 border-b border-r border-white/10 hover:bg-white/5 transition-colors">
              <p className="font-heading font-bold text-4xl text-donate mb-2">1:1</p>
              <h4 className="font-heading font-bold text-xl mb-2 text-white uppercase">Mentorship Included</h4>
              <p className="text-white/60 font-body text-sm leading-relaxed">Every student is guided through their entire program.</p>
            </motion.div>

            {/* Grid Item 3 */}
            <motion.div variants={itemVariants} className="p-8 border-b border-r border-white/10 hover:bg-white/5 transition-colors">
              <p className="font-heading font-bold text-4xl text-donate mb-2">2 Yrs</p>
              <h4 className="font-heading font-bold text-xl mb-2 text-white uppercase">Community Contract</h4>
              <p className="text-white/60 font-body text-sm leading-relaxed">Graduates serve locally for at least two years.</p>
            </motion.div>

            {/* Grid Item 4 */}
            <motion.div variants={itemVariants} className="p-8 border-b border-r border-white/10 hover:bg-white/5 transition-colors">
              <div className="mb-4">
                <Image src="/logo.png" alt="Coffee Growing Community" width={120} height={40} className="h-8 w-auto" />
              </div>
              <h4 className="font-heading font-bold text-xl mb-2 text-white uppercase">Connected To Coffee</h4>
              <p className="text-white/60 font-body text-sm leading-relaxed">Your support honors the families who grow the world's coffee.</p>
            </motion.div>

          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center text-xs text-white/40 font-body uppercase tracking-widest border-t border-white/10 pt-8"
        >
          Coffee Growing Community is a registered nonprofit. All gifts are tax-deductible.
        </motion.p>
      </div>
    </section>
  );
}
