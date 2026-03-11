"use client";

import { motion } from "framer-motion";
import { GraduationCap, HeartHandshake, Leaf, Users } from "lucide-react";

export default function CTA() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-color-background text-color-white py-32 relative overflow-hidden" id="donate">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-color-donate/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-color-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-color-primary via-color-donate to-color-accent"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-6 rounded-full bg-color-donate/10 text-color-donate font-heading font-bold uppercase tracking-wider text-sm mb-8 border border-color-donate/20">
            Join Us
          </span>
          <h2 className="text-5xl lg:text-7xl font-heading font-extrabold mb-8 tracking-tight">
            The next scholar is waiting.
          </h2>
          <p className="text-xl lg:text-2xl text-color-surface/90 font-body mb-8 leading-relaxed max-w-3xl mx-auto font-light">
            Your gift funds a full-tuition scholarship for a student from Chicontla who will go to college, return home, and serve their community for years to come.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-[2rem] p-8 lg:p-16 mb-20 text-left relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-color-donate/5 to-color-primary/5 pointer-events-none"></div>
          
          <div className="relative z-10 space-y-8">
            <motion.p variants={itemVariants} className="text-xl font-body text-color-surface leading-relaxed">
              Every dollar given to the Coffee Growing Community scholarship fund goes directly toward tuition — giving a young person from a coffee-farming family the chance to become an engineer, a nurse, a teacher, or an accountant. Not somewhere else. <em className="text-color-donate font-bold not-italic border-b-2 border-color-donate/30 pb-0.5">Right here, in Chicontla.</em>
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg font-body text-color-surface/80 leading-relaxed mb-12">
              When you give, you&apos;re not just funding a degree. You&apos;re funding a doctor who stays in town. A teacher who knows her students&apos; grandparents. An engineer who fixes the roads his family drives every day. You&apos;re funding roots.
            </motion.p>

            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <motion.div variants={itemVariants} className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-color-donate/10 flex items-center justify-center mr-6 shrink-0 group-hover:scale-110 group-hover:bg-color-donate/20 transition-all">
                  <GraduationCap className="w-6 h-6 text-color-donate" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl mb-1 text-white">Full tuition covered</h4>
                  <p className="text-color-surface/70 font-body leading-relaxed">For students who otherwise couldn&apos;t attend</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-color-primary/10 flex items-center justify-center mr-6 shrink-0 group-hover:scale-110 group-hover:bg-color-primary/20 transition-all">
                  <Users className="w-6 h-6 text-color-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl mb-1 text-white">Mentorship included</h4>
                  <p className="text-color-surface/70 font-body leading-relaxed">Every student is guided through their entire program</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-color-accent/10 flex items-center justify-center mr-6 shrink-0 group-hover:scale-110 group-hover:bg-color-accent/20 transition-all">
                  <HeartHandshake className="w-6 h-6 text-color-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl mb-1 text-white">Community commitment</h4>
                  <p className="text-color-surface/70 font-body leading-relaxed">Graduates serve locally for at least two years</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-color-white/5 flex items-center justify-center mr-6 shrink-0 group-hover:scale-110 group-hover:bg-color-white/10 transition-all">
                  <Leaf className="w-6 h-6 text-color-surface" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl mb-1 text-white">Connected to coffee</h4>
                  <p className="text-color-surface/70 font-body leading-relaxed">Your support honors the families who grow the world&apos;s coffee</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-6 items-center"
        >
          <a 
            href="https://coffeegrowingcommunity.org/donate/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex justify-center items-center bg-color-donate text-color-white font-heading font-bold px-12 py-5 rounded-full text-xl shadow-[0_4px_20px_rgba(162,129,46,0.3)] hover:shadow-[0_8px_30px_rgba(162,129,46,0.5)] transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out block"></div>
            <span className="relative z-10">Donate to the Scholarship Fund</span>
          </a>
          
          <a 
            href="https://coffeegrowingcommunity.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex justify-center items-center bg-transparent border-2 border-color-white/20 hover:border-color-white/60 hover:bg-white/5 text-color-white font-heading font-semibold px-10 py-5 text-lg rounded-full transition-all duration-300"
          >
            Learn more about CGC
          </a>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center text-sm text-color-surface/40 font-body uppercase tracking-wider"
        >
          Coffee Growing Community is a registered nonprofit. All gifts are tax-deductible.
        </motion.p>
      </div>
    </section>
  );
}
