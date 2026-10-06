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
    src: "/assets/projects/rs=w:365,h:365,cg:true_2.jpeg",
    alt: "Farmers gathered at a Project SCALE training hub",
  },
  {
    src: "/assets/projects/rs=w:365,h:365,cg:true,m.jpeg",
    alt: "Rows of climate-resilient crops in experimental plots",
  },
  {
    src: "/assets/projects/rs=w:365,h:365,cg:true_3.jpeg",
    alt: "Facilitators and youth leaders planning seasonal activities",
  },
  {
    src: "/assets/projects/rs=w:365,h:365,cg:true_4.jpeg",
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
            src="/assets/projects/rs=w:365,h:365,cg:true_2.jpeg"
            alt="Farmers participating in Project SCALE activities"
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
                LIVELIHOODS PROGRAMME
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-bold text-offWhite mb-6 leading-[1.08] tracking-tight">
                Project SCALE
              </h1>
              <p className="text-lg sm:text-xl text-offWhite/85 max-w-3xl mx-auto leading-relaxed mb-10">
                Scaling climate-resilient livelihoods along the Great Green Wall with regenerative agriculture hubs that put farmers and youth at the centre.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-accent"
                >
                  Partner on SCALE
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
              Livelihoods that Grow with the Land
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mb-6" />
            <p className="text-[17px] text-charcoal/75 max-w-3xl mx-auto leading-relaxed">
              Project SCALE turns restoration sites into living classrooms and markets. Farmers test regenerative practices, access tailored finance, and connect to buyers, ensuring that climate action translates into stable incomes.
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
                Turning Restoration into Everyday Work
              </h2>
              <div className="w-12 h-0.5 bg-accent mb-6" />
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

          <div className="bg-white rounded border border-deepEarth/10 overflow-hidden">
            <div className="relative h-80 md:h-96 lg:h-[420px] overflow-hidden">
              <Image
                src="/assets/projects/rs=w:365,h:365,cg:true,m.jpeg"
                alt="Participants discussing planting strategies at a SCALE hub"
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
                  "When farmers see results in one season, they bring their neighbours the next. SCALE is built on that momentum."
                </p>
                <p className="text-sm opacity-90">Programme lead, Project SCALE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Approach */}
      <section className="px-4 md:px-6 py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-3">
              PROGRAMME DESIGN
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-deepEarth mb-6 tracking-tight leading-tight">
              How SCALE Works on the Ground
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mb-6" />
            <p className="text-[17px] text-charcoal/75 max-w-3xl mx-auto leading-relaxed">
              Each hub is co-designed with local authorities, farmer groups, and youth organisations so that training, finance, and markets reflect real constraints and ambitions.
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

      {/* Programme Visuals Gallery */}
      <section className="px-4 md:px-6 py-16 md:py-20 bg-offWhite">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-3">
              PROGRAMME VISUALS
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-deepEarth mb-6 tracking-tight leading-tight">
              Scenes from Project SCALE
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mb-6" />
            <p className="text-[17px] text-charcoal/75 max-w-3xl mx-auto leading-relaxed">
              Images from training days, experimental plots, and community planning sessions that show how livelihoods and land restoration move together.
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
              SCALE WITH US
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-offWhite mb-6 tracking-tight leading-tight">
              Expand Climate-Resilient Livelihoods Across the Sahel
            </h2>
            <p className="text-lg text-offWhite/80 mb-10 leading-relaxed max-w-2xl mx-auto">
              From concessional finance to technical expertise, your partnership can help replicate Project SCALE hubs in more Great Green Wall communities.
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
