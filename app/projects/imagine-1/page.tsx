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
    src: "/assets/projects/rs=w:365,h:365,cg:true_3.jpeg",
    alt: "Artists performing at an IMAGINE-1 showcase",
  },
  {
    src: "/assets/projects/rs=w:365,h:365,cg:true.jpeg",
    alt: "Audience at a Great Green Wall storytelling event",
  },
  {
    src: "/assets/projects/rs=w:365,h:365,cg:true_2.jpeg",
    alt: "Film crew capturing scenes in a Sahelian landscape",
  },
  {
    src: "/assets/projects/rs=w:365,h:365,cg:true_4.jpeg",
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
            src="/assets/projects/rs=w:365,h:365,cg:true_3.jpeg"
            alt="Stage lighting at an IMAGINE-1 performance"
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
                CREATIVE CAMPAIGN
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-bold text-offWhite mb-6 leading-[1.08] tracking-tight">
                IMAGINE-1
              </h1>
              <p className="text-lg sm:text-xl text-offWhite/85 max-w-3xl mx-auto leading-relaxed mb-10">
                Pan-African creative campaign reframing the Great Green Wall through music, film, and immersive art so that restoration feels as cultural as it is technical.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-accent"
                >
                  Partner on IMAGINE-1
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
              Culture as Climate Infrastructure
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mb-6" />
            <p className="text-[17px] text-charcoal/75 max-w-3xl mx-auto leading-relaxed">
              IMAGINE-1 invites artists and audiences to see the Great Green Wall not just as a technical project, but as the backbone of stories, sounds, and images that define a generation.
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
                Reframing the Great Green Wall in the Public Imagination
              </h2>
              <div className="w-12 h-0.5 bg-accent mb-6" />
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

          <div className="bg-white rounded border border-deepEarth/10 overflow-hidden">
            <div className="relative h-80 md:h-96 lg:h-[420px] overflow-hidden">
              <Image
                src="/assets/projects/rs=w:365,h:365,cg:true.jpeg"
                alt="Artist speaking on stage about the Great Green Wall"
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
                  "When audiences sing along to restoration anthems, they carry the Great Green Wall into their daily lives."
                </p>
                <p className="text-sm opacity-90">IMAGINE-1 curator</p>
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
              How IMAGINE-1 Comes to Life
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mb-6" />
            <p className="text-[17px] text-charcoal/75 max-w-3xl mx-auto leading-relaxed">
              The programme weaves together residencies, co-creation labs, and showcases so that artists can experiment, produce, and present work in close dialogue with communities along the Wall.
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

      {/* Residency & Showcases Gallery */}
      <section className="px-4 md:px-6 py-16 md:py-20 bg-offWhite">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-3">
              RESIDENCIES & SHOWCASES
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-deepEarth mb-6 tracking-tight leading-tight">
              Moments from IMAGINE-1
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mb-6" />
            <p className="text-[17px] text-charcoal/75 max-w-3xl mx-auto leading-relaxed">
              A glimpse into performances, screenings, and installations that are helping the world feel the promise of the Great Green Wall.
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
              JOIN THE CAMPAIGN
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-offWhite mb-6 tracking-tight leading-tight">
              Co-create the Stories of the Great Green Wall
            </h2>
            <p className="text-lg text-offWhite/80 mb-10 leading-relaxed max-w-2xl mx-auto">
              From commissioning new works to hosting showcases, partners can help IMAGINE-1 bring restoration stories to stages, screens, and public spaces worldwide.
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
