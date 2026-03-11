export default function CTA() {
  return (
    <section className="bg-color-background text-color-white py-24 border-t-8 border-color-donate" id="donate">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        
        <span className="text-color-donate font-heading font-bold uppercase tracking-wider text-sm mb-4 block">
          Join Us
        </span>
        
        <h2 className="text-4xl lg:text-6xl font-heading font-extrabold mb-6">
          The next scholar is waiting.
        </h2>
        
        <p className="text-xl lg:text-2xl text-color-surface/90 font-body mb-12 leading-relaxed">
          Your gift funds a full-tuition scholarship for a student from Chicontla who will go to college, return home, and serve their community for years to come.
        </p>

        <div className="bg-color-white/5 backdrop-blur-sm rounded-3xl p-8 mb-16 text-left border border-color-white/10 shadow-xl">
          <p className="text-lg font-body text-color-surface mb-8">
            Every dollar given to the Coffee Growing Community scholarship fund goes directly toward tuition — giving a young person from a coffee-farming family the chance to become an engineer, a nurse, a teacher, or an accountant. Not somewhere else. <em className="text-color-accent font-bold">Right here, in Chicontla.</em>
          </p>
          <p className="text-lg font-body text-color-surface mb-8">
            When you give, you&apos;re not just funding a degree. You&apos;re funding a doctor who stays in town. A teacher who knows her students&apos; grandparents. An engineer who fixes the roads his family drives every day. You&apos;re funding roots.
          </p>

          <ul className="space-y-4 font-body text-lg text-color-surface/90">
            <li className="flex items-start">
              <span className="text-2xl mr-4 block">🎓</span>
              <span><strong>Full tuition covered</strong> for students who otherwise couldn&apos;t attend</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-4 block">🤝</span>
              <span><strong>Mentorship included</strong> — every student is guided through their entire program</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-4 block">🌱</span>
              <span><strong>Community commitment</strong> — graduates serve locally for at least two years</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-4 block">☕</span>
              <span><strong>Connected to coffee</strong> — your support honors the families who grow the world&apos;s coffee</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
          <a 
            href="https://coffeegrowingcommunity.org/donate/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex justify-center items-center bg-color-donate hover:bg-color-donate/90 text-color-white font-heading font-bold px-10 py-5 rounded-full text-xl shadow-[0_0_20px_rgba(162,129,46,0.5)] hover:shadow-[0_0_30px_rgba(162,129,46,0.8)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Donate to the Scholarship Fund
          </a>
          
          <a 
            href="https://coffeegrowingcommunity.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex justify-center items-center bg-transparent border-2 border-color-white/30 hover:border-color-white/80 text-color-white font-heading font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300"
          >
            Learn more about CGC
          </a>
        </div>
        
        <p className="mt-12 text-sm text-color-surface/50 font-body">
          Coffee Growing Community is a registered nonprofit. All gifts are tax-deductible.
        </p>

      </div>
    </section>
  );
}
