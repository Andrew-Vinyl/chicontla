import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";
import { ScholarSection, Scholar } from "@/lib/sanity.types";

const FALLBACK_SECTION: ScholarSection = {
  _type: "scholarSection",
  preheading: "STORIES OUT OF CHICONTLA",
  heading: "MEET THE SCHOLARS",
  subheading:
    "The direct stories of individuals from Chicontla whose lives and communities have been forever changed by a college education.",
};

interface TestimonialsProps {
  scholars: Scholar[];
  sectionData: ScholarSection | null;
}

const FALLBACK_SCHOLARS: Scholar[] = [
  {
    _id: "fallback-1",
    _type: "scholar",
    _createdAt: "",
    _updatedAt: "",
    _rev: "",
    name: "Erika Lizeth Barqueras Perez",
    order: 1,
    quote:
      "Kari will continue to faithfully serve her community and gives God the credit for graciously providing her the opportunity to pursue a college degree.",
    story: [],
  },
  {
    _id: "fallback-2",
    _type: "scholar",
    _createdAt: "",
    _updatedAt: "",
    _rev: "",
    name: "José Julian Hernandez Gomez",
    order: 2,
    quote:
      "He would later become the first person from La Tranca to graduate from college!",
    story: [],
  },
  {
    _id: "fallback-3",
    _type: "scholar",
    _createdAt: "",
    _updatedAt: "",
    _rev: "",
    name: "Naomi Lael Cevedeo Velázquez",
    order: 3,
    quote:
      "By God's grace, Naomi applied and earned a scholarship through Coffee Growing Community. The organization has faith in her that she will bring the dream to fruition.",
    story: [],
  },
  {
    _id: "fallback-4",
    _type: "scholar",
    _createdAt: "",
    _updatedAt: "",
    _rev: "",
    name: "Héctor Ramírez Romero",
    order: 4,
    quote:
      "CGC has faith that Hector will continue to steward the gift to better his family and community.",
    story: [],
  },
];

const scholarImages: Record<string, string> = {
  "Erika Lizeth Barqueras Perez": "/images/Kari-solo.jpeg",
  "José Julian Hernandez Gomez": "/images/Julio-solo.jpeg",
  "Naomi Lael Cevedeo Velázquez": "/images/Naomi-Headshot.jpg",
  "Héctor Ramírez Romero": "/images/Hector-solo.JPG",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function makePortableTextComponents(isFirst: boolean) {
  return {
    block: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      normal: ({ children }: any) =>
        isFirst ? (
          <p className="mb-6 first-letter:text-5xl first-letter:font-heading first-letter:font-black first-letter:text-donate first-letter:mr-1 first-letter:float-left first-line:uppercase first-line:tracking-widest">
            {children}
          </p>
        ) : (
          <p className="mb-6">{children}</p>
        ),
    },
  };
}

export default function Testimonials({ scholars, sectionData }: TestimonialsProps) {
  const section = sectionData ?? FALLBACK_SECTION;
  const displayScholars =
    scholars && scholars.length > 0 ? scholars : FALLBACK_SCHOLARS;
  const sortedScholars = [...displayScholars].sort(
    (a, b) => (a.order ?? 999) - (b.order ?? 999)
  );

  return (
    <section id="scholars" className="bg-cream py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-body font-bold tracking-[0.25em] text-donate uppercase mb-2">
              {section.preheading}
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-green uppercase">
              {section.heading}
            </h2>
          </div>
          <div className="md:text-right md:max-w-xs">
            <p className="text-sm font-body text-text leading-relaxed">
              {section.subheading}
            </p>
          </div>
        </div>

        <hr className="border-donate/30 mb-16" />

        {/* Scholar cards */}
        <div className="space-y-24">
          {sortedScholars.map((scholar, index) => {
            const imageSrc = scholarImages[scholar.name ?? ""] ?? null;

            return (
              <div
                key={scholar._id}
                className={`flex flex-col ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } gap-10 items-start`}
              >
                {/* Left column: photo + quote */}
                <div className="w-full md:w-72 flex-shrink-0">
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded mb-6">
                    {imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt={scholar.name ?? "Scholar"}
                        fill
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full bg-green/20 flex items-center justify-center">
                        <span className="text-green/40 text-4xl">📷</span>
                      </div>
                    )}
                  </div>
                  <div className="bg-green p-4 rounded">
                    <p className="text-cream font-body text-sm leading-relaxed font-bold italic">
                      {scholar.quote}
                    </p>
                  </div>
                </div>

                {/* Right column: name + story */}
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-heading font-black text-green uppercase mb-8">
                    {scholar.name}
                  </h3>

                  <div className="md:columns-2 gap-8 prose prose-lg prose-p:text-text prose-p:font-body prose-p:leading-relaxed max-w-none">
                    {scholar.story && scholar.story.length > 0 ? (
                      <>
                        {/* First paragraph gets the drop-cap treatment */}
                        <PortableText
                          value={[scholar.story[0]]}
                          components={makePortableTextComponents(true)}
                        />
                        {/* Remaining paragraphs are plain body text */}
                        {scholar.story.length > 1 && (
                          <PortableText
                            value={scholar.story.slice(1)}
                            components={makePortableTextComponents(false)}
                          />
                        )}
                      </>
                    ) : (
                      <p className="text-text font-body leading-relaxed">
                        Story coming soon.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
