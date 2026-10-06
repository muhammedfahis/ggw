import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "COP28 Pre-summit Series | GGWoA Foundation",
  description:
    "Aligning climate, education, food security, health, and culture coalitions ahead of COP28 through cross-sector dialogues and showcases.",
};

const stats = [
  {
    value: "12",
    label: "Countries Engaged",
    detail: "Coalitions and leaders connected across the Great Green Wall and beyond.",
  },
  {
    value: "5+",
    label: "Thematic Tracks",
    detail: "Climate, education, food systems, health, and culture brought into one conversation.",
  },
  {
    value: "100+",
    label: "Stakeholders",
    detail: "Officials, practitioners, artists, and funders participating in the series.",
  },
];

const approach = [
  {
    title: "Strategic Dialogues",
    body: "High-level sessions aligning ministries, multilaterals, and technical partners around shared COP28 priorities.",
  },
  {
    title: "Coalition Building",
    body: "Working groups that bridge climate, health, education, food security, and culture so commitments reinforce each other.",
  },
  {
    title: "Story-led Sessions",
    body: "Panels and showcases that elevate frontline experiences and cultural narratives alongside policy discussions.",
  },
];

const galleryImages = [
  {
    src: "/assets/projects/rs=w:365,h:365,cg:true.jpeg",
    alt: "Speakers on stage at a COP28 pre-summit session",
  },
  {
    src: "/assets/projects/rs=w:365,h:365,cg:true_1.jpeg",
    alt: "Participants engaged in a breakout discussion circle",
  },
  {
    src: "/assets/projects/rs=w:365,h:365,cg:true_2.jpeg",
    alt: "Delegates networking around the Great Green Wall exhibit",
  },
  {
    src: "/assets/projects/rs=w:365,h:365,cg:true_3.jpeg",
    alt: "Artist-led performance during the pre-summit series",
  },
];

export default function Cop28PreSummitPage() {
  return (
    <main className="bg-offWhite text-charcoal min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/projects/rs=w:365,h:365,cg:true.jpeg"
            alt="Stage and audience during a COP28 pre-summit event"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/60 to-primary/80" />
        </div>

        <div className="relative z-10 px-4 md:px-6 py-20 md:py-24">
          <div className="max-w-6xl mx-auto text-center">
            <div>
              <p className="eyebrow eyebrow-light mb-3">
                CLIMATE SUMMIT SERIES
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-bold text-offWhite mb-6 leading-[1.08] tracking-tight">
                COP28 Pre-summit Series
              </h1>
              <p className="text-lg sm:text-xl text-offWhite/85 max-w-3xl mx-auto leading-relaxed mb-10">
                Aligning climate, education, food security, health, and culture coalitions ahead of COP28 through cross-sector dialogues that put communities at the centre.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-accent"
                >
                  Explore Partnerships
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
                  </svg>
                </Link>
                <Link
                  href="/projects"
                  className="btn-outline-light"
                >
                  Browse All Projects
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview + Stats */}
      <section className="px-4 md:px-6 py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <p className="eyebrow mb-3">
              PROJECT OVERVIEW
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-deepEarth mb-6 tracking-tight leading-tight">
              One Table for Many Coalitions
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mb-6" />
            <p className="text-[17px] text-charcoal/75 max-w-3xl mx-auto leading-relaxed">
              The COP28 Pre-summit Series convened leaders from multiple sectors so that commitments on paper translate into coordinated action across ministries, agencies, and movements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center bg-secondary rounded p-10 border border-accent/20"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
                  {stat.value}
                </div>
                <div className="font-accent text-sm font-semibold text-deepEarth mb-2 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-charcoal/70 leading-relaxed text-base">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Background */}
      <section className="px-4 md:px-6 py-16 md:py-20 bg-offWhite">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="mb-8">
              <p className="eyebrow mb-3">
                PROJECT BACKGROUND
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-deepEarth mb-6 tracking-tight leading-tight">
                Preparing the Ground Before the Summit Stage
              </h2>
              <div className="w-12 h-0.5 bg-accent mb-6" />
            </div>
            <div className="space-y-5 text-lg text-charcoal/80 leading-relaxed">
              <p>
                Large summits often move quickly, leaving limited space for deep coordination. The Pre-summit Series created a slower, more intentional runway where partners could align priorities, clarify roles, and surface gaps before arriving at COP28.
              </p>
              <p>
                Sessions were designed with communities in mind: what does a health commitment mean for a village clinic; how does a food systems pledge reach farmers in the Sahel; how can culture keep momentum alive after delegates fly home.
              </p>
              <p>
                By bringing together climate, health, education, food security, and arts leaders, the series helped move from parallel efforts to a more braided approach.
              </p>
            </div>
          </div>

          <div className="bg-white rounded border border-deepEarth/10 overflow-hidden">
            <div className="relative h-80 md:h-96 lg:h-[420px] overflow-hidden">
              <Image
                src="/assets/projects/rs=w:365,h:365,cg:true_1.jpeg"
                alt="Panel of speakers addressing cross-sector collaboration at COP28 pre-summit"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-offWhite">
                <p className="eyebrow eyebrow-light mb-2">
                  FIELD NOTE
                </p>
                <p className="text-xl md:text-2xl font-heading font-semibold leading-tight mb-2">
                  "When climate, health, and culture sit at the same table, we design commitments real people can feel."
                </p>
                <p className="text-sm opacity-90">Participant, COP28 Pre-summit Series</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Design */}
      <section className="px-4 md:px-6 py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-3">
              PROGRAMME DESIGN
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-deepEarth mb-6 tracking-tight leading-tight">
              How the Series Was Structured
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mb-6" />
            <p className="text-[17px] text-charcoal/75 max-w-3xl mx-auto leading-relaxed">
              Each gathering layered strategic briefings with grounded stories and creative interventions, so that decisions were anchored in lived realities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {approach.map((item) => (
              <div
                key={item.title}
                className="bg-offWhite rounded p-8 border border-deepEarth/10 hover:border-primary/40 transition-colors flex flex-col"
              >
                <div className="w-12 h-12 rounded bg-accent/10 flex items-center justify-center mb-5">
                  <span className="w-3 h-3 rounded-full bg-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-deepEarth mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-charcoal/80 leading-relaxed text-base flex-1">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Series Gallery */}
      <section className="px-4 md:px-6 py-16 md:py-20 bg-offWhite">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-3">
              SERIES HIGHLIGHTS
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-deepEarth mb-6 tracking-tight leading-tight">
              Scenes from the Pre-summit Series
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mb-6" />
            <p className="text-[17px] text-charcoal/75 max-w-3xl mx-auto leading-relaxed">
              Moments from plenaries, working groups, and cultural performances that shaped the road to COP28.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {galleryImages.map((image) => (
              <div
                key={image.alt}
                className="bg-white rounded border border-deepEarth/10 overflow-hidden group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-charcoal/80 leading-relaxed">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 md:px-6 py-16 md:py-20 bg-gradient-to-br from-primary via-deepEarth to-primary">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <p className="eyebrow eyebrow-light mb-3">
              BEYOND THE SUMMIT
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-offWhite mb-6 tracking-tight leading-tight">
              Turn Commitments into Coordinated Action
            </h2>
            <p className="text-lg text-offWhite/80 mb-10 leading-relaxed max-w-2xl mx-auto">
              Work with GGWoA to design convenings, coalitions, and creative moments that keep the spirit of the COP28 Pre-summit Series alive in communities across the Sahel and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-accent"
              >
                Start a Conversation
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="btn-outline-light"
              >
                Explore Flagship Work
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
