import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "The Great Blue Wave | GGWoA Foundation",
};

export default function GreatBlueWavePage() {
  return (
    <main className="bg-offWhite text-charcoal min-h-screen">
      {/* Hero Section - KEPT AS IS */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/assets/the-great-blue-wave/hero-section.jpeg')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-br from-skyBlue/70 via-primary/80 to-deepEarth/90" />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-32 py-[120px] md:py-[140px] lg:px-[160px]">
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

      {/* Why Water - Redesigned with full-width hero image */}
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">THE WATER CRISIS</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deepEarth mb-8 leading-tight max-w-4xl mx-auto">
              Turning the Great Green Wall into a Great Blue Network
            </h2>
            <p className="text-xl md:text-2xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              Water security is the foundation of climate resilience across the Sahel.
            </p>
          </div>

          {/* Full-width feature image */}
          <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl mb-16">
            <Image
              src="/assets/the-great-blue-wave/why-water.png"
              alt="Why water, why now – Great Blue Wave illustration"
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 text-offWhite">
              <p className="text-sm uppercase tracking-wider mb-3 font-semibold text-accent">Field Insight</p>
              <p className="text-2xl md:text-3xl font-heading font-semibold leading-tight mb-4">
                "Every litre of water harvested from the air is an invitation for families to stay, plant, and thrive on their land."
              </p>
            </div>
          </div>

          {/* Three-column problem statement */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-deepEarth">The Crisis</h3>
              <p className="text-base text-charcoal/80 leading-relaxed">
                Across the Sahel, communities face failing rainfall patterns, dried boreholes, and the collapse of traditional water systems.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-deepEarth">The Solution</h3>
              <p className="text-base text-charcoal/80 leading-relaxed">
                Breakthrough atmospheric water generation technology paired with regenerative land restoration ensures dependable, clean water.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-deepEarth">The Impact</h3>
              <p className="text-base text-charcoal/80 leading-relaxed">
                Every restoration site becomes a water-secure hub for health, education, and enterprise—anchoring communities to their land.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners - Redesigned */}
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-gradient-to-br from-secondary via-offWhite to-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">STRATEGIC PARTNERS</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deepEarth mb-8 leading-tight">
              A Coalition for Water-Secure Futures
            </h2>
            <p className="text-xl md:text-2xl text-charcoal/70 max-w-4xl mx-auto leading-relaxed">
              Uniting humanitarian expertise with cutting-edge atmospheric water technology to serve communities across the Great Green Wall.
            </p>
          </div>

          {/* Feature image with overlay content */}
          <div className="relative mb-20 h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/the-great-blue-wave/children.jpg"
              alt="Children benefiting from water-secure, purpose-driven partnerships"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 md:px-16 max-w-2xl">
                <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">Purpose-Driven Impact</p>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-offWhite mb-4 leading-tight">
                  Water for Every Child, Every Community
                </h3>
                <p className="text-lg text-offWhite/90 leading-relaxed">
                  Through strategic partnerships, we're deploying water solutions that respond to cultural, geographic, and humanitarian needs across the Sahel.
                </p>
              </div>
            </div>
          </div>

          {/* Partner cards - Enhanced */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <article className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-accent/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/assets/the-great-blue-wave/technology.png"
                  alt="Mai Sabeel water for charity technology illustration"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="bg-accent text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                    Partner
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-3">MAI SABEEL</p>
                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-deepEarth mb-4 leading-tight">
                  Water for Charity, at Scale
                </h3>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  A UAE-based initiative built on the principle of "water for charity", designing bespoke logistical and technological solutions for every deployment context.
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-6">
                  Mai Sabeel supports humanitarian, education, and climate programmes with fit-for-purpose water systems that can be rapidly deployed and scaled.
                </p>
                <Link
                  href="https://maisabeel.life/solutions"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:text-primary transition-colors group/link"
                >
                  Visit Mai Sabeel
                  <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                    <path d="M5 5h5V3H3v7h2V5z" />
                  </svg>
                </Link>
              </div>
            </article>

            <article className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-accent/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/assets/the-great-blue-wave/mai-sabeel.png"
                  alt="Hawana Water atmospheric water harvesting technology illustration"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="bg-accent text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                    Technology
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-3">HAWANA WATER</p>
                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-deepEarth mb-4 leading-tight">
                  Atmospheric Water Harvesting
                </h3>
                <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                  State-of-the-art atmospheric water harvesters powered by AERstream technology, condensing humidity into clean, potable water using energy-efficient, solar-ready units.
                </p>
                <p className="text-base text-charcoal/80 leading-relaxed mb-6">
                  These units integrate seamlessly into schools, clinics, farms, and community hubs, ensuring restoration sites have reliable water access from day one.
                </p>
                <p className="text-sm text-charcoal/60 italic">
                  All specifications subject to final deployment planning with partners.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Deployment Scenarios - Redesigned */}
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">DEPLOYMENT SCENARIOS</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deepEarth mb-8 leading-tight">
              Where the Great Blue Wave Works
            </h2>
            <p className="text-xl md:text-2xl text-charcoal/70 max-w-4xl mx-auto leading-relaxed">
              From emergency response to long-term agricultural transformation—serving the full spectrum of restoration and resilience.
            </p>
          </div>

          {/* Feature image with side content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image
                src="/assets/the-great-blue-wave/happy-child.png"
                alt="Children benefiting from humanitarian aid, disaster response, and agricultural resilience"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent" />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full">
                <p className="text-sm font-semibold text-accent uppercase tracking-wider">Real-World Impact</p>
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-deepEarth leading-tight">
                Serving Communities at Every Scale
              </h3>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                The Great Blue Wave is designed to meet communities where they are—whether responding to humanitarian crises or building long-term agricultural resilience.
              </p>
              <div className="flex items-start gap-4 pt-4">
                <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-deepEarth mb-1">Rapid Deployment</p>
                  <p className="text-charcoal/70">Water units ready for immediate humanitarian and disaster response.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Use case cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="group bg-gradient-to-br from-white to-secondary/30 rounded-3xl p-8 lg:p-10 shadow-lg border border-accent/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                <svg className="w-7 h-7 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-heading font-bold text-deepEarth mb-4">
                Humanitarian Aid & Refugee Relief
              </h3>
              <p className="text-base text-charcoal/80 leading-relaxed">
                Rapidly deployable, self-contained atmospheric water units provide safe drinking water in camps and temporary settlements, reducing costly trucking and plastic-heavy distribution.
              </p>
            </article>

            <article className="group bg-gradient-to-br from-white to-secondary/30 rounded-3xl p-8 lg:p-10 shadow-lg border border-accent/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                <svg className="w-7 h-7 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-heading font-bold text-deepEarth mb-4">Disaster Recovery Efforts</h3>
              <p className="text-base text-charcoal/80 leading-relaxed">
                In post-flood or drought-affected regions, atmospheric water systems provide reliable water even when surface and groundwater infrastructure is damaged.
              </p>
            </article>

            <article className="group bg-gradient-to-br from-white to-secondary/30 rounded-3xl p-8 lg:p-10 shadow-lg border border-accent/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                <svg className="w-7 h-7 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.71c.16-.46.38-.86.66-1.22C9.47 15.97 12.99 12 17 12V8z"/>
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-heading font-bold text-deepEarth mb-4">Agricultural & Irrigation Security</h3>
              <p className="text-base text-charcoal/80 leading-relaxed">
                For smallholder farmers and regenerative plots, Great Blue Wave hubs top up irrigation water, stabilise yields, and enable higher-value crops.
              </p>
            </article>

            <article className="group bg-gradient-to-br from-white to-secondary/30 rounded-3xl p-8 lg:p-10 shadow-lg border border-accent/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                <svg className="w-7 h-7 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-heading font-bold text-deepEarth mb-4">
                Climate & Desertification Mitigation
              </h3>
              <p className="text-base text-charcoal/80 leading-relaxed">
                Pairing water access with tree planting and soil regeneration supports communities to stay rooted, adapt locally, and slow desert expansion.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Technology Features - Enhanced */}
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-gradient-to-br from-primary via-deepEarth to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-skyBlue rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">CORNERSTONE TECHNOLOGY</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-offWhite mb-8 leading-tight">
              Atmospheric Water Harvesters, Built for the Sahel
            </h2>
            <p className="text-xl md:text-2xl text-offWhite/90 max-w-4xl mx-auto leading-relaxed">
              Energy-efficient, solar-powered systems designed for remote environments—scalable from households to entire villages.
            </p>
          </div>

          <div className="relative mb-20 h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-2 border-offWhite/30">
            <Image
              src="/assets/the-great-blue-wave/hawana.png"
              alt="Hawana atmospheric water generator and solar-powered technology"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deepEarth/80 via-primary/50 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12">
              <div className="inline-block px-4 py-2 bg-accent rounded-full mb-4">
                <p className="text-xs font-bold text-primary uppercase tracking-wider">AERstream Technology</p>
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-offWhite leading-tight">
                Harvesting Water from Air, Powered by the Sun
              </h3>
            </div>
          </div>

          {/* Tech feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <div className="group bg-offWhite/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border-2 border-offWhite/20 hover:bg-offWhite/20 hover:border-accent transition-all duration-500">
              <div className="w-14 h-14 bg-accent/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <svg className="w-7 h-7 text-offWhite" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-heading font-bold text-offWhite mb-4">Energy Efficient</h3>
              <p className="text-base text-offWhite/90 leading-relaxed">
                Low power consumption with solar-ready configurations, making clean water generation viable in off-grid and fragile settings.
              </p>
            </div>

            <div className="group bg-offWhite/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border-2 border-offWhite/20 hover:bg-offWhite/20 hover:border-accent transition-all duration-500">
              <div className="w-14 h-14 bg-accent/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <svg className="w-7 h-7 text-offWhite" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-heading font-bold text-offWhite mb-4">Easy Maintenance</h3>
              <p className="text-base text-offWhite/90 leading-relaxed">
                Modular components and straightforward servicing enable local technicians and youth cooperatives to manage day-to-day operations.
              </p>
            </div>

            <div className="group bg-offWhite/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border-2 border-offWhite/20 hover:bg-offWhite/20 hover:border-accent transition-all duration-500">
              <div className="w-14 h-14 bg-accent/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <svg className="w-7 h-7 text-offWhite" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.71c.16-.46.38-.86.66-1.22C9.47 15.97 12.99 12 17 12V8z"/>
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-heading font-bold text-offWhite mb-4">Scalable Solutions</h3>
              <p className="text-base text-offWhite/90 leading-relaxed">
                A full family of units, from 12 L/day household devices to 2,400 L/day commercial systems, allows for tailored deployment pathways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Scales - Redesigned */}
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-gradient-to-b from-white via-secondary/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">DEPLOYMENT SCALES</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deepEarth mb-8 leading-tight">
              From Households to Whole Villages
            </h2>
            <p className="text-xl md:text-2xl text-charcoal/70 max-w-4xl mx-auto leading-relaxed">
              Bundling technology, finance, and operations so communities can onboard water systems at the scale they need.
            </p>
          </div>

          {/* Feature image with overlay */}
          <div className="relative mb-20 h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/the-great-blue-wave/ss.jpg"
              alt="Partners co-designing water access from households to whole villages"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 text-offWhite">
              <p className="text-sm uppercase tracking-wider mb-3 font-semibold text-accent">Scalable Impact</p>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-tight">
                Co-Designing Water Access at Every Scale
              </h3>
            </div>
          </div>

          {/* Scale cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <article className="group bg-white rounded-3xl p-8 lg:p-10 shadow-xl border-2 border-accent/20 hover:shadow-2xl hover:border-accent transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-accent/30 group-hover:to-accent/20 transition-colors">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-heading font-bold text-deepEarth mb-4">Residential</h3>
              <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                Compact units designed for households and small offices, providing daily drinking water without reliance on bottled or trucked supply.
              </p>
              <div className="pt-4 border-t border-charcoal/10">
                <p className="text-sm text-charcoal/60 font-medium">Ideal for: Staff housing, teacher accommodation, frontline worker homes</p>
              </div>
            </article>

            <article className="group bg-white rounded-3xl p-8 lg:p-10 shadow-xl border-2 border-accent/20 hover:shadow-2xl hover:border-accent transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-accent/30 group-hover:to-accent/20 transition-colors">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-heading font-bold text-deepEarth mb-4">School / Clinic</h3>
              <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                Mid-sized systems serving classrooms, early learning centres, and primary health posts, integrating water access directly into education and care programmes.
              </p>
              <div className="pt-4 border-t border-charcoal/10">
                <p className="text-sm text-charcoal/60 font-medium">Features: Storage, filtration, distribution points for safe communal use</p>
              </div>
            </article>

            <article className="group bg-white rounded-3xl p-8 lg:p-10 shadow-xl border-2 border-accent/20 hover:shadow-2xl hover:border-accent transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-accent/30 group-hover:to-accent/20 transition-colors">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-heading font-bold text-deepEarth mb-4">Commercial / Village</h3>
              <p className="text-base text-charcoal/80 leading-relaxed mb-4">
                High-capacity units serving markets, agro-processing hubs, or village clusters, anchoring green jobs and circular economies around water.
              </p>
              <div className="pt-4 border-t border-charcoal/10">
                <p className="text-sm text-charcoal/60 font-medium">Model: Public-private partnerships where communities co-own infrastructure</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Visual Gallery - Enhanced */}
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-gradient-to-b from-offWhite via-white to-offWhite">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">VISUALISING THE BLUE WAVE</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deepEarth mb-8 leading-tight">
              Water, Infrastructure, and Community Life
            </h2>
            <p className="text-xl md:text-2xl text-charcoal/70 max-w-4xl mx-auto leading-relaxed">
              Images from existing Great Green Wall programmes illustrating the vibrant, water-secure landscapes the Great Blue Wave seeks to multiply.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16">
            <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/assets/the-great-blue-wave/refugee-camp.png"
                alt="Refugee camp and surrounding community benefiting from restored, water-secure landscapes"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/assets/the-great-blue-wave/rural-water-access.png"
                alt="Rural agricultural landscape supported by reliable water access"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/assets/the-great-blue-wave/water-purification-children.png"
                alt="Children collecting safe water from purification units in their community"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-accent text-primary font-semibold text-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Explore Great Blue Wave Opportunities
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
