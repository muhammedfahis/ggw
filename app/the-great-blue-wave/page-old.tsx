import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "The Great Blue Wave | GGWoA Foundation",
};

export default function GreatBlueWavePage() {
  return (
    <main className="bg-offWhite text-charcoal min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/assets/the-great-blue-wave/hero-section.jpeg')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-br from-skyBlue/70 via-primary/80 to-deepEarth/90" />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-32 py-[120px] md:py-[140px] lg:py-[160px]">
          <div className="max-w-5xl mx-auto text-center">
            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">
              WATER SECURITY INITIATIVE
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-offWhite mb-8 leading-tight">
              The Great Blue Wave Initiative
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-offWhite/90 max-w-4xl mx-auto leading-relaxed mb-10">
              A partnership to bring atmospheric water generation, resilient infrastructure, and community-led governance to the heart of the Great Green Wall.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-offWhite text-primary px-10 py-5 rounded-full font-semibold text-lg hover:bg-offWhite/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3"
              >
                Discuss Partnership
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="border border-offWhite text-offWhite px-10 py-5 rounded-full font-semibold text-lg hover:bg-offWhite hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3"
              >
                View Related Projects
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Water, Why Now */}
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16 items-start">
          <div className="space-y-6">
            <p className="font-accent text-xs uppercase tracking-wider text-accent">WHY WATER, WHY NOW</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-deepEarth leading-tight">
              Turning the Great Green Wall into a Great Blue Network of water-secure communities.
            </h2>
            <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed">
              Across the Sahel and neighbouring regions, the climate crisis is increasingly a water crisis. Communities on the frontlines of
              desertification face failing rainfall patterns, dried boreholes, and the collapse of traditional water systems.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              The Great Blue Wave Initiative brings together regenerative land restoration with breakthrough atmospheric water generation
              technology, ensuring that new trees, farms, schools, and clinics are anchored by dependable, clean water.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              By combining policy design, community organising, and scalable technology, we aim to turn every restoration site into a
              water-secure hub for health, education, and enterprise.
            </p>
          </div>
          <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl border border-accent/40">
            <Image
              src="/assets/the-great-blue-wave/why-water.png"
              alt="Why water, why now – Great Blue Wave illustration (close-up)"
              fill
              className="object-cover object-center scale-110"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-offWhite">
              <p className="text-xs uppercase tracking-wider mb-2 font-semibold">Field Insight</p>
              <p className="text-lg font-medium leading-relaxed">
                "Every litre of water harvested from the air is an invitation for families to stay, plant, and thrive on their land."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-4">STRATEGIC PARTNERS</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-deepEarth mb-4">
              A coalition for water-secure futures.
            </h2>
            <p className="text-lg md:text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
              The Great Blue Wave Initiative aligns Great Green Wall ambitions with partners who specialise in humanitarian water access and
              atmospheric water generation.
            </p>
          </div>

          <div className="relative mb-16 h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl border border-accent/30">
            <Image
              src="/assets/the-great-blue-wave/children.jpg"
              alt="Children benefiting from water-secure, purpose-driven partnerships"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <article className="bg-white rounded-3xl p-8 shadow-lg border border-accent/20">
              <div className="relative mb-6 h-48 rounded-2xl overflow-hidden">
                <Image
                  src="/assets/the-great-blue-wave/technology.png"
                  alt="Mai Sabeel water for charity technology illustration"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-4">MAI SABEEL</p>
              <h3 className="text-2xl font-heading font-bold text-deepEarth mb-4">
                Water for Charity, at Scale
              </h3>
              <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                Mai Sabeel is a UAE-based initiative built on the principle of "water for charity". It designs bespoke logistical and
                technological solutions so that every deployment responds to the specific cultural, geographic, and political context.
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed mb-6">
                Within the Great Blue Wave, Mai Sabeel supports humanitarian, education, and climate programmes with fit-for-purpose water
                systems that can be rapidly deployed and scaled.
              </p>
              <Link
                href="https://maisabeel.life/solutions"
                target="_blank"
                rel="noreferrer"
                className="text-accent font-semibold inline-flex items-center gap-2 hover:text-primary"
              >
                Visit Mai Sabeel
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                  <path d="M5 5h5V3H3v7h2V5z" />
                </svg>
              </Link>
            </article>

            <article className="bg-white rounded-3xl p-8 shadow-lg border border-accent/20">
              <div className="relative mb-6 h-48 rounded-2xl overflow-hidden">
                <Image
                  src="/assets/the-great-blue-wave/mai-sabeel.png"
                  alt="Hawana Water atmospheric water harvesting technology illustration"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-4">HAWANA WATER</p>
              <h3 className="text-2xl font-heading font-bold text-deepEarth mb-4">
                Atmospheric Water Harvesting Technology
              </h3>
              <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                Hawana Water manufactures state-of-the-art atmospheric water harvesters powered by AERstream technology. These systems
                condense humidity from the air into clean, potable water using energy-efficient, solar-ready units.
              </p>
              <p className="text-base text-charcoal/80 leading-relaxed mb-6">
                Through the Great Blue Wave, these units can be integrated into schools, clinics, farms, and community hubs along the Great
                Green Wall, ensuring that restoration sites have reliable water access from day one.
              </p>
              <p className="text-sm text-charcoal/70 italic">
                Note: All descriptions are indicative and may evolve with partners as deployment plans are finalised.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-28 bg-offWhite">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-4">DEPLOYMENT SCENARIOS</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-deepEarth mb-4">
              Where the Great Blue Wave Works
            </h2>
            <p className="text-lg md:text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
              The initiative is designed to serve the full spectrum of restoration and resilience efforts  from emergency response to
              long-term agricultural transformation.
            </p>
          </div>

          <div className="relative mb-16 h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl border border-accent/30">
            <Image
              src="/assets/the-great-blue-wave/happy-child.png"
              alt="Children benefiting from humanitarian aid, disaster response, and agricultural resilience"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <article className="bg-white rounded-3xl p-8 shadow-lg border border-charcoal/10">
              <h3 className="text-xl font-heading font-bold text-deepEarth mb-3">
                Humanitarian Aid & Refugee Relief
              </h3>
              <p className="text-base text-charcoal/80 leading-relaxed">
                Rapidly deployable, self-contained atmospheric water units provide safe drinking water in camps and temporary settlements,
                reducing the need for costly trucking and plastic-heavy distribution.
              </p>
            </article>

            <article className="bg-white rounded-3xl p-8 shadow-lg border border-charcoal/10">
              <h3 className="text-xl font-heading font-bold text-deepEarth mb-3">Disaster Recovery Efforts</h3>
              <p className="text-base text-charcoal/80 leading-relaxed">
                In post-flood or drought-affected regions, atmospheric water systems can be installed as part of recovery corridors,
                providing reliable water even when surface and groundwater infrastructure is damaged.
              </p>
            </article>

            <article className="bg-white rounded-3xl p-8 shadow-lg border border-charcoal/10">
              <h3 className="text-xl font-heading font-bold text-deepEarth mb-3">Agricultural & Irrigation Security</h3>
              <p className="text-base text-charcoal/80 leading-relaxed">
                For smallholder farmers, village orchards, and regenerative demonstration plots, Great Blue Wave hubs can top up irrigation
                water, stabilise yields, and enable higher-value crops.
              </p>
            </article>

            <article className="bg-white rounded-3xl p-8 shadow-lg border border-charcoal/10">
              <h3 className="text-xl font-heading font-bold text-deepEarth mb-3">
                Climate Effects & Desertification Mitigation
              </h3>
              <p className="text-base text-charcoal/80 leading-relaxed">
                By pairing water access with tree planting, dune stabilisation, and soil regeneration, the initiative supports communities to
                stay rooted, adapt locally, and slow the expansion of the desert.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-28 bg-gradient-to-br from-primary via-deepEarth to-primary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-4 text-offWhite">CORNERSTONE TECHNOLOGY</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-offWhite mb-4">
              Atmospheric Water Harvesters, Built for the Sahel.
            </h2>
            <p className="text-lg md:text-xl text-offWhite/85 max-w-3xl mx-auto leading-relaxed">
              Energy-efficient systems designed to run on solar, easy to maintain in remote environments, and scalable from households to
              villages.
            </p>
          </div>

          <div className="relative mb-16 h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl border border-offWhite/30">
            <Image
              src="/assets/the-great-blue-wave/hawana.jpg"
              alt="Hawana atmospheric water generator and solar-powered technology"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deepEarth/70 via-primary/40 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-offWhite/10 backdrop-blur-sm rounded-3xl p-8 border border-offWhite/20">
              <h3 className="text-xl font-heading font-bold text-offWhite mb-3">Energy Efficient</h3>
              <p className="text-base text-offWhite/85 leading-relaxed">
                Low power consumption with solar-ready configurations, making clean water generation viable in off-grid and fragile settings.
              </p>
            </div>

            <div className="bg-offWhite/10 backdrop-blur-sm rounded-3xl p-8 border border-offWhite/20">
              <h3 className="text-xl font-heading font-bold text-offWhite mb-3">Easy Maintenance</h3>
              <p className="text-base text-offWhite/85 leading-relaxed">
                Modular components and straightforward servicing enable local technicians and youth cooperatives to manage day-to-day
                operations.
              </p>
            </div>

            <div className="bg-offWhite/10 backdrop-blur-sm rounded-3xl p-8 border border-offWhite/20">
              <h3 className="text-xl font-heading font-bold text-offWhite mb-3">Scalable Solutions</h3>
              <p className="text-base text-offWhite/85 leading-relaxed">
                A full family of units, from 12 L/day household devices to 2,400 L/day commercial systems, allows for tailored deployment
                pathways across regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Scales */}
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-4">DEPLOYMENT SCALES</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-deepEarth mb-4">
              From Households to Whole Villages
            </h2>
            <p className="text-lg md:text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
              The Great Blue Wave bundles technology, finance, and operations so that different communities can onboard water systems at
              the scale they need.
            </p>
          </div>

          <div className="relative mb-16 h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl border border-charcoal/15">
            <Image
              src="/assets/the-great-blue-wave/partnership.png"
              alt="Partners co-designing water access from households to whole villages"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-secondary/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <article className="bg-offWhite rounded-3xl p-8 shadow-lg border border-charcoal/10">
              <h3 className="text-xl font-heading font-bold text-deepEarth mb-3">Residential</h3>
              <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                Compact units designed for households and small offices, providing daily drinking water without reliance on bottled or
                trucked supply.
              </p>
              <p className="text-sm text-charcoal/70">Ideal for staff housing, teacher accommodation, and frontline worker homes.</p>
            </article>

            <article className="bg-offWhite rounded-3xl p-8 shadow-lg border border-charcoal/10">
              <h3 className="text-xl font-heading font-bold text-deepEarth mb-3">School / Clinic</h3>
              <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                Mid-sized systems serving classrooms, early learning centres, and primary health posts, integrating water access directly
                into education and care programmes.
              </p>
              <p className="text-sm text-charcoal/70">Configured with storage, filtration, and distribution points for safe communal use.</p>
            </article>

            <article className="bg-offWhite rounded-3xl p-8 shadow-lg border border-charcoal/10">
              <h3 className="text-xl font-heading font-bold text-deepEarth mb-3">Commercial / Village</h3>
              <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                High-capacity units serving markets, agro-processing hubs, or village clusters, anchoring green jobs and circular economies
                around water.
              </p>
              <p className="text-sm text-charcoal/70">Suitable for public-private models where communities co-own infrastructure and value.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-28 bg-offWhite border-t border-charcoal/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-4">VISUALISING THE BLUE WAVE</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-deepEarth mb-4">
              Water, Infrastructure, and Community Life
            </h2>
            <p className="text-base md:text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
              These images from existing Great Green Wall programmes illustrate the kind of vibrant, water-secure landscapes the Great Blue
              Wave seeks to multiply.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="relative h-64 md:h-72 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/assets/the-great-blue-wave/refugee-camp.png"
                alt="Refugee camp and surrounding community benefiting from restored, water-secure landscapes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative h-64 md:h-72 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/assets/the-great-blue-wave/rural-water-access.png"
                alt="Rural agricultural landscape supported by reliable water access"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative h-64 md:h-72 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/assets/the-great-blue-wave/water-purification-children.png"
                alt="Children collecting safe water from purification units in their community"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-accent text-accent font-semibold text-sm tracking-wider uppercase hover:bg-accent hover:text-white transition-all duration-300"
            >
              Explore Great Blue Wave Opportunities
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
