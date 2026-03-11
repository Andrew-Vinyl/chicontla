import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-color-background text-color-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-[url('/images/group_photo.JPG')] bg-cover bg-center bg-no-repeat opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        {/* Logo */}
        <div className="mb-12">
          <Image 
            src="/logo.png" 
            alt="Coffee Growing Community" 
            width={200} 
            height={80} 
            className="w-auto h-16 object-contain"
          />
        </div>

        {/* Content */}
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-7xl font-heading font-extrabold leading-tight mb-6">
            What if a cup of coffee could send someone to college?
          </h1>
          <p className="text-lg lg:text-xl text-color-surface/90 mb-10 leading-relaxed font-body">
            In the mountains of Chicontla, Mexico, families have spent generations growing coffee — and for most of that time, a college education felt entirely out of reach. Coffee Growing Community is changing that, one scholarship at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a 
              href="#donate" 
              className="inline-flex justify-center items-center bg-color-donate hover:bg-color-donate/90 text-color-white font-heading font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-color-donate/30"
            >
              Make it possible for the next student
            </a>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 border-t border-color-white/20 pt-12">
          <div>
            <div className="text-4xl font-heading font-extrabold text-color-accent mb-2">10+</div>
            <div className="text-color-surface/80 font-body">Students sponsored through college</div>
          </div>
          <div>
            <div className="text-4xl font-heading font-extrabold text-color-accent mb-2">4</div>
            <div className="text-color-surface/80 font-body">Graduates already serving their communities</div>
          </div>
          <div>
            <div className="text-4xl font-heading font-extrabold text-color-accent mb-2">1</div>
            <div className="text-color-surface/80 font-body">Simple belief: education transforms everything</div>
          </div>
        </div>
      </div>
    </section>
  );
}
