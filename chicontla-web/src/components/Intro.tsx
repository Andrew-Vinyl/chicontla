"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Intro() {
  return (
    <section className="bg-color-surface py-24 lg:py-40 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-color-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-color-accent/10 text-color-accent font-heading font-bold uppercase tracking-wider text-sm mb-6">
            The Scholarship Program
          </span>
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-color-primary leading-tight">
            A full ride to college — and a commitment to come back home.
          </h2>
        </motion.div>
        
        <div className="prose prose-lg lg:prose-xl mx-auto text-color-text font-body leading-relaxed max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="mb-8">
              In the coffee-growing region surrounding Chicontla, Mexico, the path to higher education is steep. Transportation alone can mean rising before dawn to catch overcrowded buses for hour-and-a-half commutes each way. For most families in the area, the cost of tuition is simply impossible.
            </p>
            <p className="mb-8 text-2xl font-light text-color-background leading-relaxed">
              Coffee Growing Community&apos;s college scholarship fund exists to remove that barrier entirely.
            </p>
            <p className="mb-8">
              The program covers <strong className="text-color-primary font-semibold">full tuition</strong> for students from the Chicontla area — young adults who show promise, passion, and a desire to serve their community — but who lack the economic means to pursue a degree on their own. Each recipient is paired with a <strong className="text-color-primary font-semibold">dedicated mentor</strong> who walks alongside them throughout their studies, ensuring they have the guidance, accountability, and support they need to succeed.
            </p>
            <p className="mb-8">
              But the scholarship isn&apos;t just about getting a degree. It&apos;s about what comes next.
            </p>
            <p className="mb-8">
              As part of their commitment, scholarship recipients pledge to <strong className="text-color-primary font-semibold">return to their communities</strong> after graduation and apply their skills locally for at least two years. A nursing student becomes a caregiver for families who&apos;ve never had reliable healthcare. An engineer helps design infrastructure for the roads and schools his neighbors use every day. An accountant manages bookkeeping for a dozen local child development centers. The investment doesn&apos;t leave — it stays, multiplies, and takes root.
            </p>
            <p className="mb-16">
              More than <strong className="text-color-primary font-bold text-2xl">10 students</strong> from the Chicontla region have already walked this path. Each one is a first — and each one opens a door for the ones who come next.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Quote className="absolute -top-6 -left-6 w-16 h-16 text-color-donate/20 rotate-180" />
            <blockquote className="relative z-10 border-l-4 border-color-donate pl-8 italic text-2xl lg:text-3xl text-color-primary font-heading my-16 py-4 leading-relaxed font-medium">
              "CGC has faith that Hector will continue to steward the gift to better his family and community."
            </blockquote>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center font-bold text-color-primary text-2xl lg:text-3xl mt-20 bg-color-white p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-color-donate/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 leading-tight block">
              This is community enrichment at its most direct: give one person a chance at education, and watch an entire community grow stronger.
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
