export default function Intro() {
  return (
    <section className="bg-color-surface py-20 lg:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-color-accent font-heading font-bold uppercase tracking-wider text-sm">
            The Scholarship Program
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-color-primary mt-4 mb-6">
            A full ride to college — and a commitment to come back home.
          </h2>
        </div>
        
        <div className="prose prose-lg lg:prose-xl mx-auto text-color-text font-body leading-relaxed max-w-3xl">
          <p className="mb-6">
            In the coffee-growing region surrounding Chicontla, Mexico, the path to higher education is steep. Transportation alone can mean rising before dawn to catch overcrowded buses for hour-and-a-half commutes each way. For most families in the area, the cost of tuition is simply impossible.
          </p>
          <p className="mb-6">
            Coffee Growing Community&apos;s college scholarship fund exists to remove that barrier entirely.
          </p>
          <p className="mb-6">
            The program covers <strong className="text-color-primary">full tuition</strong> for students from the Chicontla area — young adults who show promise, passion, and a desire to serve their community — but who lack the economic means to pursue a degree on their own. Each recipient is paired with a <strong className="text-color-primary">dedicated mentor</strong> who walks alongside them throughout their studies, ensuring they have the guidance, accountability, and support they need to succeed.
          </p>
          <p className="mb-6">
            But the scholarship isn&apos;t just about getting a degree. It&apos;s about what comes next.
          </p>
          <p className="mb-6">
            As part of their commitment, scholarship recipients pledge to <strong className="text-color-primary">return to their communities</strong> after graduation and apply their skills locally for at least two years. A nursing student becomes a caregiver for families who&apos;ve never had reliable healthcare. An engineer helps design infrastructure for the roads and schools his neighbors use every day. An accountant manages bookkeeping for a dozen local child development centers. The investment doesn&apos;t leave — it stays, multiplies, and takes root.
          </p>
          <p className="mb-10 lg:mb-16">
            More than <strong className="text-color-primary">10 students</strong> from the Chicontla region have already walked this path. Each one is a first — and each one opens a door for the ones who come next.
          </p>
          
          <blockquote className="border-l-4 border-color-accent pl-6 italic text-xl lg:text-2xl text-color-primary font-heading my-12 py-2">
            "CGC has faith that Hector will continue to steward the gift to better his family and community."
          </blockquote>
          
          <p className="text-center font-bold text-color-primary text-xl lg:text-2xl mt-12 bg-color-white p-8 rounded-2xl shadow-sm border border-gray-100">
            This is community enrichment at its most direct: give one person a chance at education, and watch an entire community grow stronger.
          </p>
        </div>
      </div>
    </section>
  );
}
