import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "IMAGINE-1 | GGWoA Foundation",
  description:
    "Pan-African creative campaign reframing the Great Green Wall through music, film, and immersive art to inspire global action and local pride.",
};

const stats = [
  {
    value: "50+",
    label: "Artists Engaged",
    detail: "Musicians, filmmakers, visual artists, and storytellers from across the continent.",
  },
  {
    value: "3+",
    label: "Cities & Hubs",
    detail: "Programming anchored in key Great Green Wall and cultural hubs.",
  },
  {
    value: "Millions",
    label: "Digital Impressions",
    detail: "Audiences reached through concerts, screenings, and digital campaigns.",
  },
];

const approach = [
  {
    title: "Music & Live Performance",
    body: "Concerts and sonic collaborations that position restoration as a shared cultural project, not just a policy target.",
  },
  {
    title: "Film & Visual Storytelling",
    body: "Short films, documentaries, and visual essays that follow communities along the Great Green Wall in their own words.",
  },
  {
    title: "Immersive & Digital Art",
    body: "Installations, exhibitions, and online experiences that invite audiences to imagine resilient Sahel futures.",
  },
];

const galleryImages = [
  {
    src: "/assets/projects/rs=w:365,h:365,cg:true_3.webp",
    alt: "Artists performing at an IMAGINE-1 showcase",
  },
  {
    src: "/assets/projects/rs=w:365,h:365,cg:true.webp",
    alt: "Audience at a Great Green Wall storytelling event",
  },
  {
    src: "/assets/projects/rs=w:365,h:365,cg:true_2.webp",
    alt: "Film crew capturing scenes in a Sahelian landscape",
  },
  {
    src: "/assets/projects/rs=w:365,h:365,cg:true_4.webp",
    alt: "Immersive installation inspired by the Great Green Wall",
  },
];

export default function ImagineOnePage() {
  return (
    <main className="bg-offWhite text-charcoal min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/projects/rs=w:365,h:365,cg:true_3.webp"
            alt="Stage lighting at an IMAGINE-1 performance"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/60 to-primary/80" />
        </div>

        <div className="relative z-10 px-6 md:px-12 lg:px-32 py-[120px] md:py-[140px] lg:py-[160px]">
          <div className="max-w-6xl mx-auto text-center">
            <div className="space-y-8">
              <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">
                CREATIVE CAMPAIGN
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-offWhite mb-8 leading-tight">
                IMAGINE-1
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-offWhite/90 max-w-4xl mx-auto leading-relaxed mb-12">
                Pan-African creative campaign reframing the Great Green Wall through music, film, and immersive art so that restoration feels as cultural as it is technical.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="bg-offWhite text-primary px-10 py-5 rounded-full font-semibold text-lg hover:bg-offWhite/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3 justify-center"
                >
                  Partner on IMAGINE-1
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
                  </svg>
                </Link>
                <Link
                  href="/projects"
                  className="border border-offWhite text-offWhite px-10 py-5 rounded-full font-semibold text-lg hover:bg-offWhite hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3 justify-center"
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
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">
              PROJECT OVERVIEW
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deepEarth mb-8 leading-tight">
              Culture as Climate Infrastructure
            </h2>
            <div className="w-32 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
              IMAGINE-1 invites artists and audiences to see the Great Green Wall not just as a technical project, but as the backbone of stories, sounds, and images that define a generation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center bg-secondary rounded-3xl p-10 shadow-lg border border-accent/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-deepEarth mb-2 uppercase tracking-wide">
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
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-offWhite">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="mb-8">
              <p className="font-accent text-xs uppercase tracking-wider text-accent mb-4">
                PROJECT BACKGROUND
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-deepEarth mb-6 leading-tight">
                Reframing the Great Green Wall in the Public Imagination
              </h2>
              <div className="w-24 h-1 bg-accent mb-6" />
            </div>
            <div className="space-y-5 text-lg text-charcoal/80 leading-relaxed">
              <p>
                While policymakers negotiate targets and financiers structure deals, artists are often the ones who make climate futures feel tangible. IMAGINE-1 gathers a constellation of creators to tell the story of the Great Green Wall as a cultural renaissance.
              </p>
              <p>
                Through residencies, labs, and commissions, the programme supports works that travel between festivals, neighbourhood venues, and digital platforms, ensuring that Sahelian voices are centred in global conversations.
              </p>
              <p>
                Every song, film, and installation becomes an entry point for new allies—from local youth to international audiences—to see themselves inside the restoration story.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-accent/20 overflow-hidden">
            <div className="relative h-80 md:h-96 lg:h-[420px] overflow-hidden">
              <Image
                src="/assets/projects/rs=w:365,h:365,cg:true.webp"
                alt="Artist speaking on stage about the Great Green Wall"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-offWhite">
                <p className="text-xs uppercase tracking-wider mb-2 font-semibold">
                  FIELD NOTE
                </p>
                <p className="text-xl md:text-2xl font-heading font-semibold leading-tight mb-2">
                  "When audiences sing along to restoration anthems, they carry the Great Green Wall into their daily lives."
                </p>
                <p className="text-sm opacity-90">IMAGINE-1 curator</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Design */}
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">
              PROGRAMME DESIGN
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deepEarth mb-8 leading-tight">
              How IMAGINE-1 Comes to Life
            </h2>
            <div className="w-32 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
              The programme weaves together residencies, co-creation labs, and showcases so that artists can experiment, produce, and present work in close dialogue with communities along the Wall.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {approach.map((item) => (
              <div
                key={item.title}
                className="bg-offWhite rounded-3xl p-8 shadow-lg border border-accent/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-5">
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

      {/* Residency & Showcases Gallery */}
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-offWhite">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">
              RESIDENCIES & SHOWCASES
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deepEarth mb-8 leading-tight">
              Moments from IMAGINE-1
            </h2>
            <div className="w-32 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
              A glimpse into performances, screenings, and installations that are helping the world feel the promise of the Great Green Wall.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {galleryImages.map((image) => (
              <div
                key={image.alt}
                className="bg-white rounded-3xl shadow-lg border border-accent/20 overflow-hidden group"
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
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-gradient-to-br from-primary via-deepEarth to-primary">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">
              JOIN THE CAMPAIGN
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-offWhite mb-8 leading-tight">
              Co-create the Stories of the Great Green Wall
            </h2>
            <p className="text-xl md:text-2xl text-offWhite/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              From commissioning new works to hosting showcases, partners can help IMAGINE-1 bring restoration stories to stages, screens, and public spaces worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-offWhite text-primary px-10 py-5 rounded-full font-semibold text-lg hover:bg-offWhite/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3 justify-center"
              >
                Start a Conversation
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="border border-offWhite text-offWhite px-10 py-5 rounded-full font-semibold text-lg hover:bg-offWhite hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3 justify-center"
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
