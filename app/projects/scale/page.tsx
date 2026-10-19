import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Project SCALE | GGWoA Foundation",
  description:
    "Scaling climate-resilient livelihoods along the Great Green Wall through regenerative agriculture hubs and youth-led enterprises.",
};

const stats = [
  {
    value: "300+",
    label: "Farmers Trained",
    detail: "Smallholder farmers equipped with regenerative and climate-smart practices.",
  },
  {
    value: "4",
    label: "Pilot Hubs",
    detail: "Demonstration sites linking training, finance, and market access.",
  },
  {
    value: "11",
    label: "GGW Countries",
    detail: "SCALE contributes to the broader Great Green Wall mandate across the region.",
  },
];

const approach = [
  {
    title: "Regenerative Agriculture Hubs",
    body: "Field schools where farmers test drought-resilient crops, soil regeneration techniques, and community irrigation models.",
  },
  {
    title: "Blended Climate Finance",
    body: "Partnerships with public and philanthropic capital to unlock affordable tools, inputs, and starter capital for producers.",
  },
  {
    title: "Youth-Led Enterprises",
    body: "Youth cooperatives managing nurseries, processing units, and digital tools that keep value in communities.",
  },
];

const galleryImages = [
  {
    src: "/assets/projects/rs=w:365,h:365,cg:true_2.webp",
    alt: "Farmers gathered at a Project SCALE training hub",
  },
  {
    src: "/assets/projects/rs=w:365,h:365,cg:true,m.webp",
    alt: "Rows of climate-resilient crops in experimental plots",
  },
  {
    src: "/assets/projects/rs=w:365,h:365,cg:true_3.webp",
    alt: "Facilitators and youth leaders planning seasonal activities",
  },
  {
    src: "/assets/projects/rs=w:365,h:365,cg:true_4.webp",
    alt: "Community members discussing farm plans around a field map",
  },
];

export default function ScaleProjectPage() {
  return (
    <main className="bg-offWhite text-charcoal min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/projects/rs=w:365,h:365,cg:true_2.webp"
            alt="Farmers participating in Project SCALE activities"
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
                LIVELIHOODS PROGRAMME
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-offWhite mb-8 leading-tight">
                Project SCALE
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-offWhite/90 max-w-4xl mx-auto leading-relaxed mb-12">
                Scaling climate-resilient livelihoods along the Great Green Wall with regenerative agriculture hubs that put farmers and youth at the centre.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="bg-offWhite text-primary px-10 py-5 rounded-full font-semibold text-lg hover:bg-offWhite/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3 justify-center"
                >
                  Partner on SCALE
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
              Livelihoods that Grow with the Land
            </h2>
            <div className="w-32 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
              Project SCALE turns restoration sites into living classrooms and markets. Farmers test regenerative practices, access tailored finance, and connect to buyers, ensuring that climate action translates into stable incomes.
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
                Turning Restoration into Everyday Work
              </h2>
              <div className="w-24 h-1 bg-accent mb-6" />
            </div>
            <div className="space-y-5 text-lg text-charcoal/80 leading-relaxed">
              <p>
                Across the Sahel, millions of young people are entering the labour market as land degrades and rainfall becomes less predictable. Project SCALE responds by embedding practical training and income opportunities directly into restoration sites.
              </p>
              <p>
                Hubs combine demonstration plots, simple processing equipment, and business support so that farmers can test new crops, reduce risk, and tap into emerging green value chains.
              </p>
              <p>
                By centring farmers and youth, SCALE ensures that the Great Green Wall is not just a line of trees, but a fabric of livelihoods that can withstand climate shocks.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-accent/20 overflow-hidden">
            <div className="relative h-80 md:h-96 lg:h-[420px] overflow-hidden">
              <Image
                src="/assets/projects/rs=w:365,h:365,cg:true,m.webp"
                alt="Participants discussing planting strategies at a SCALE hub"
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
                  "When farmers see results in one season, they bring their neighbours the next. SCALE is built on that momentum."
                </p>
                <p className="text-sm opacity-90">Programme lead, Project SCALE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Approach */}
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">
              PROGRAMME DESIGN
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deepEarth mb-8 leading-tight">
              How SCALE Works on the Ground
            </h2>
            <div className="w-32 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
              Each hub is co-designed with local authorities, farmer groups, and youth organisations so that training, finance, and markets reflect real constraints and ambitions.
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

      {/* Programme Visuals Gallery */}
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-offWhite">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">
              PROGRAMME VISUALS
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deepEarth mb-8 leading-tight">
              Scenes from Project SCALE
            </h2>
            <div className="w-32 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
              Images from training days, experimental plots, and community planning sessions that show how livelihoods and land restoration move together.
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
              SCALE WITH US
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-offWhite mb-8 leading-tight">
              Expand Climate-Resilient Livelihoods Across the Sahel
            </h2>
            <p className="text-xl md:text-2xl text-offWhite/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              From concessional finance to technical expertise, your partnership can help replicate Project SCALE hubs in more Great Green Wall communities.
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
