"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-color-background text-color-white pt-20 pb-20 lg:pt-32 lg:pb-32">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/group photo.JPG" 
          alt="Coffee Growing Community Students" 
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        {/* Gradient Overlay: Forest Green to Dark Navy/Transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-color-primary/95 via-color-background/80 to-color-background/40 mix-blend-multiply"></div>
        {/* Secondary subtle gradient for text readability at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-color-background shadow-2xl via-transparent to-transparent opacity-90"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <Image 
            src="/logo.png" 
            alt="Coffee Growing Community" 
            width={240} 
            height={96} 
            className="w-auto h-20 object-contain drop-shadow-lg"
          />
        </motion.div>

        {/* Content */}
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl lg:text-7xl font-heading font-extrabold leading-tight mb-8 drop-shadow-xl"
          >
            What if a cup of coffee could send someone to college?
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg lg:text-2xl text-color-surface mb-12 leading-relaxed font-body drop-shadow-md max-w-2xl"
          >
            In the mountains of Chicontla, Mexico, families have spent generations growing coffee — and for most of that time, a college education felt entirely out of reach. <span className="font-semibold text-color-white">Coffee Growing Community is changing that, one scholarship at a time.</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 mb-20"
          >
            <a 
              href="#donate" 
              className="group relative inline-flex justify-center items-center bg-color-donate text-color-white font-heading font-semibold text-xl px-10 py-5 rounded-full overflow-hidden shadow-[0_4px_20px_rgba(162,129,46,0.4)] hover:shadow-[0_8px_30px_rgba(162,129,46,0.6)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              <span className="relative z-10">Make it possible for the next student</span>
            </a>
          </motion.div>
        </div>
        
        {/* Stats Grid - Glassmorphism Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-colors duration-300">
            <div className="text-5xl font-heading font-extrabold text-color-accent mb-3 drop-shadow-md">10+</div>
            <div className="text-color-surface/90 font-body text-lg">Students sponsored through college</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-colors duration-300">
            <div className="text-5xl font-heading font-extrabold text-color-accent mb-3 drop-shadow-md">4</div>
            <div className="text-color-surface/90 font-body text-lg">Graduates already serving their communities</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-colors duration-300">
            <div className="text-5xl font-heading font-extrabold text-color-accent mb-3 drop-shadow-md">1</div>
            <div className="text-color-surface/90 font-body text-lg">Simple belief: education transforms everything</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
