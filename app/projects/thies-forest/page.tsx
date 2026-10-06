import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Thiès Forest Restoration | GGWoA Foundation",
  description:
    "Transforming a former quarry in Thiès, Senegal into a thriving native forest that anchors jobs, water security, and climate resilience.",
};

const stats = [
  {
    value: "5+",
    label: "Hectares Restored",
    detail: "Former quarry land converted into a living forest corridor.",
  },
  {
    value: "92%",
    label: "Tree Survival",
    detail: "Native species adapted to local soils and rainfall patterns.",
  },
  {
    value: "300+",
    label: "Youth Jobs",
    detail: "Seasonal and long-term roles in planting, care, and monitoring.",
  },
];

const approach = [
  {
    title: "Landscape Diagnostics",
    body: "Soil, water, and biodiversity mapping to design terraces, windbreaks, and infiltration points that work with the existing terrain.",
  },
  {
    title: "Native Planting Systems",
    body: "Mixed-species planting with nurse trees, ground cover, and water-harvesting earthworks to stabilize dunes and rebuild topsoil.",
  },
  {
    title: "Youth & Community Stewardship",
    body: "Local youth cooperatives coordinate nurseries, planting waves, and long-term care, turning restoration into a source of dignified work.",
  },
];

const galleryImages = [
  {
    src: "/assets/projects/rs=w:365,h:365,cg:true_1.jpeg",
    alt: "Aerial view of restored forest plots in Thiès, Senegal",
  },
  {
    src: "/assets/projects/rs=w:365,h:365,cg:true.jpeg",
    alt: "Youth planting native trees on terraced quarry slopes",
  },
  {
    src: "/assets/projects/rs=w:365,h:365,cg:true_2.jpeg",
    alt: "Water harvesting basins capturing rainfall around young trees",
  },
  {
    src: "/assets/projects/rs=w:365,h:365,cg:true_3.jpeg",
    alt: "Community members walking through a young forest corridor",
  },
];

export default function ThiesForestPage() {
  return (
    <main className="bg-offWhite text-charcoal min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/projects/rs=w:365,h:365,cg:true_1.jpeg"
            alt="Restored forest landscape in Thiès, Senegal"
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
                RESTORATION PROJECT
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-bold text-offWhite mb-6 leading-[1.08] tracking-tight">
                Thiès Forest Restoration
              </h1>
              <p className="text-lg sm:text-xl text-offWhite/85 max-w-3xl mx-auto leading-relaxed mb-10">
                Turning a former quarry into a thriving native forest that anchors jobs, water security, and climate resilience for nearby communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-accent"
                >
                  Partner on Restoration
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
              From Quarry to Climate Buffer
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mb-6" />
            <p className="text-[17px] text-charcoal/75 max-w-3xl mx-auto leading-relaxed">
              In the Thiès region of Senegal, a disused quarry once defined by bare rock and erosion is being transformed into a living forest corridor. The site now anchors water retention, soil regeneration, and dignified green jobs for local youth.
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
                A Forest Grown from Extraction Scars
              </h2>
              <div className="w-12 h-0.5 bg-accent mb-6" />
            </div>
            <div className="space-y-5 text-lg text-charcoal/80 leading-relaxed">
              <p>
                The Thiès site began as a heavily quarried landscape, with exposed rock faces, compacted soils, and flash flooding threatening nearby homes and roads. Conventional rehabilitation would have stopped at basic leveling and fencing.
              </p>
              <p>
                Instead, GGWoA and local partners designed a regenerative forest system: terraces that slow runoff, basins that capture rainfall, and planting schemes that mix fast-growing nurse species with slower, deep-rooted trees.
              </p>
              <p>
                The result is a living buffer that cools local microclimates, protects infrastructure, and creates hands-on climate careers for youth who now steward the land year-round.
              </p>
            </div>
          </div>

          <div className="bg-white rounded border border-deepEarth/10 overflow-hidden">
            <div className="relative h-80 md:h-96 lg:h-[420px] overflow-hidden">
              <Image
                src="/assets/projects/rs=w:365,h:365,cg:true.jpeg"
                alt="Terraced and replanted slopes at the Thiès restoration site"
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
                  "Where there was once bare rock and dust, children now walk through shade on their way to school."
                </p>
                <p className="text-sm opacity-90">Local community leader, Thiès Region</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restoration Approach */}
      <section className="px-4 md:px-6 py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-3">
              RESTORATION APPROACH
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-deepEarth mb-6 tracking-tight leading-tight">
              How the Forest Holds
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mb-6" />
            <p className="text-[17px] text-charcoal/75 max-w-3xl mx-auto leading-relaxed">
              Thiès serves as a blueprint for quarry and mining rehabilitation along the Great Green Wall: careful diagnostics, native planting, and community ownership from day one.
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

      {/* Project Gallery */}
      <section className="px-4 md:px-6 py-16 md:py-20 bg-offWhite">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-3">
              FIELD GALLERY
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-deepEarth mb-6 tracking-tight leading-tight">
              A Growing Canopy in Thiès
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mb-6" />
            <p className="text-[17px] text-charcoal/75 max-w-3xl mx-auto leading-relaxed">
              Scenes from the early planting waves, water-harvesting earthworks, and the everyday life now emerging around the restored forest.
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
              SCALE THE IMPACT
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-offWhite mb-6 tracking-tight leading-tight">
              Bring Quarry Landscapes Back to Life
            </h2>
            <p className="text-lg text-offWhite/80 mb-10 leading-relaxed max-w-2xl mx-auto">
              Thiès is one of many sites where restoration can convert extraction scars into living infrastructure. Join us in designing more forests that protect people, food systems, and futures.
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
