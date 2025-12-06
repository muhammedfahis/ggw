import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { GreatBlueWaveHeroIsolated } from "../../components/great-blue-wave/GreatBlueWaveHeroIsolated";

export const metadata = {
  title: "The Great Blue Wave | GGWoA Foundation",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function GreatBlueWavePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - unchanged */}
      <GreatBlueWaveHeroIsolated />

      {/* Scoped water-themed sections */}
      <div className={`gbw-page ${inter.className} bg-[#013a63] text-[#013a63]`}>
        {/* Why Water */}
        <section className="px-6 md:px-10 lg:px-24 py-16 md:py-24 bg-gradient-to-b from-[#013a63] via-[#0993af] to-[#013a63] text-white">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#e6f7ff] uppercase">
                THE WATER CRISIS
              </p>
              <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Turning Dry Frontiers into a Connected Blue Corridor
              </h2>
              <p className="mx-auto max-w-3xl text-sm md:text-base text-[#e6f7ff]">
                Across the Sahel, dependable water access is the thin line between staying rooted and being forced to move. The Great Blue Wave links sites into a continuous, water-secure network.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-3xl bg-white/10 px-6 py-6 backdrop-blur-md border border-white/15">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0993af]/20 text-[#e6f7ff]">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2C8 7 6 10 6 13.5A6 6 0 0 0 18 13.5C18 10 16 7 12 2Z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">The Pressure on Water</h3>
                <p className="text-sm text-[#e6f7ff]">
                  Reduced rainfall, failing boreholes, and growing demand leave communities exposed to climate shocks and displacement.
                </p>
              </div>
              <div className="rounded-3xl bg-white/10 px-6 py-6 backdrop-blur-md border border-white/15">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0993af]/20 text-[#e6f7ff]">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M5 12l4 4L19 6" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">A Distributed Blue Network</h3>
                <p className="text-sm text-[#e6f7ff]">
                  Atmospheric water, storage, and governance are woven into each restoration site, creating a chain of dependable blue hubs.
                </p>
              </div>
              <div className="rounded-3xl bg-white/10 px-6 py-6 backdrop-blur-md border border-white/15">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0993af]/20 text-[#e6f7ff]">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 12h4l3 8 4-16 3 8h4" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Staying, Planting, Thriving</h3>
                <p className="text-sm text-[#e6f7ff]">
                  When water is predictable, families can invest in land, education, and local enterprise instead of preparing to move.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Partners */}
        <section className="bg-[#e6f7ff] px-6 md:px-10 lg:px-24 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#0993af] uppercase">
                STRATEGIC PARTNERS
              </p>
              <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#013a63]">
                A Coalition for Water-Secure Futures
              </h2>
              <p className="mx-auto max-w-3xl text-sm md:text-base text-[#013a63]">
                Humanitarian, technical, and financing partners assemble the Great Blue Wave so communities receive water systems that are as robust as they are dignified.
              </p>
            </div>

            <div className="mb-12 grid gap-8 lg:grid-cols-[3fr,2fr] items-stretch">
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/assets/the-great-blue-wave/children.jpg"
                  alt="Children benefiting from water-secure partnerships"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 60vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(1,58,99,0.9), rgba(3,105,161,0.8), transparent)",
                  }}
                />
                <div className="relative z-10 flex h-full items-center px-8 py-8 md:px-10">
                  <div className="max-w-xl">
                    <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-[#e6f7ff] uppercase">
                      PURPOSE-LED IMPACT
                    </p>
                    <h3 className="mb-3 text-2xl md:text-3xl font-semibold text-white">
                      Water for Every Child, Every Community
                    </h3>
                    <p className="text-sm md:text-base text-[#e6f7ff]">
                      Together we co-design deployments that fit local culture, infrastructure, and humanitarian priorities across the Sahel.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <article className="flex-1 rounded-3xl bg-white/80 px-6 py-6 shadow-md backdrop-blur-md border border-[#0993af]/20">
                  <p className="mb-2 text-[0.7rem] font-semibold tracking-[0.3em] text-[#0993af] uppercase">
                    MAI SABEEL
                  </p>
                  <h3 className="mb-2 text-lg font-semibold text-[#013a63]">
                    Water for Charity, at Scale
                  </h3>
                  <p className="mb-4 text-sm text-[#013a63]">
                    A UAE-based initiative ensuring that every deployment is logistically feasible, financially sustainable, and dedicated to those most in need.
                  </p>
                  <Link
                    href="https://maisabeel.life/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#0993af] hover:text-[#0bb5d4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0993af]"
                  >
                    Visit Mai Sabeel
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M7 17L17 7" />
                      <path d="M9 7h8v8" />
                    </svg>
                  </Link>
                </article>

                <article className="flex-1 rounded-3xl bg-white/80 px-6 py-6 shadow-md backdrop-blur-md border border-[#0993af]/20">
                  <p className="mb-2 text-[0.7rem] font-semibold tracking-[0.3em] text-[#0993af] uppercase">
                    HAWANA WATER
                  </p>
                  <h3 className="mb-2 text-lg font-semibold text-[#013a63]">
                    Atmospheric Water Harvesting Systems
                  </h3>
                  <p className="mb-4 text-sm text-[#013a63]">
                    High-efficiency units generate clean water directly from air humidity, from household scale up to village-scale infrastructure.
                  </p>
                  <Link
                    href="https://www.hawanawater.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#0993af] hover:text-[#0bb5d4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0993af]"
                  >
                    Visit Hawana Water
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M7 17L17 7" />
                      <path d="M9 7h8v8" />
                    </svg>
                  </Link>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Scenarios */}
        <section className="bg-white px-6 md:px-10 lg:px-24 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#0993af] uppercase">
                DEPLOYMENT SCENARIOS
              </p>
              <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#013a63]">
                Where the Great Blue Wave Works
              </h2>
              <p className="mx-auto max-w-3xl text-sm md:text-base text-[#013a63]">
                From emergency response to long-term food security, Great Blue Wave hubs are configured to support communities at different stages of resilience.
              </p>
            </div>

            <div className="mb-12 grid items-center gap-10 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <div className="inline-flex rounded-full bg-[#0993af]/10 px-4 py-1 text-xs font-semibold text-[#0993af] uppercase tracking-[0.18em] mb-4">
                  REAL-WORLD IMPACT
                </div>
                <h3 className="mb-3 text-2xl md:text-3xl font-semibold text-[#013a63]">
                  Meeting Communities Where They Are
                </h3>
                <p className="mb-6 text-sm md:text-base text-[#013a63]">
                  Modular systems can anchor disaster response, refugee settlements, schools, clinics, and regenerative farming plots, with different mixes of generation, storage, and distribution.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="mt-1 h-9 w-9 flex-shrink-0 rounded-2xl bg-[#0993af]/20 flex items-center justify-center text-[#0993af]">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#013a63]">Rapid humanitarian deployment</p>
                      <p className="text-xs text-[#013a63]">
                        Plug-and-play units provide safe water within days of arrival, even where infrastructure is heavily damaged.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="mt-1 h-9 w-9 flex-shrink-0 rounded-2xl bg-[#0993af]/20 flex items-center justify-center text-[#0993af]">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M12 2L4 7v10l8 5 8-5V7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#013a63]">Anchoring long-term programmes</p>
                      <p className="text-xs text-[#013a63]">
                        Water hubs are integrated into education, health, and restoration programmes to sustain outcomes beyond an emergency window.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative order-1 h-80 rounded-3xl overflow-hidden shadow-xl lg:order-2">
                <Image
                  src="/assets/the-great-blue-wave/happy-child.png"
                  alt="Children supported by water-secure programmes"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(1,58,99,0.9), rgba(3,105,161,0.5), transparent)",
                  }}
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-3xl bg-[#e6f7ff]/80 p-6 shadow-md backdrop-blur-md border border-[#0993af]/30">
                <h3 className="mb-2 text-lg font-semibold text-[#013a63]">
                  Humanitarian & Refugee Settings
                </h3>
                <p className="text-sm text-[#013a63]">
                  Flexible units with on-site storage support camps and transit centres, reducing trucking and plastic packaging.
                </p>
              </article>
              <article className="rounded-3xl bg-[#e6f7ff]/80 p-6 shadow-md backdrop-blur-md border border-[#0993af]/30">
                <h3 className="mb-2 text-lg font-semibold text-[#013a63]">
                  Schools, Clinics & Community Hubs
                </h3>
                <p className="text-sm text-[#013a63]">
                  Mid-scale systems provide daily drinking water, handwashing, and basic service needs where reliability matters most.
                </p>
              </article>
              <article className="rounded-3xl bg-[#e6f7ff]/80 p-6 shadow-md backdrop-blur-md border border-[#0993af]/30">
                <h3 className="mb-2 text-lg font-semibold text-[#013a63]">
                  Regenerative Agriculture Sites
                </h3>
                <p className="text-sm text-[#013a63]">
                  Water is paired with soil restoration and agroforestry, stabilising yields while new trees take root.
                </p>
              </article>
              <article className="rounded-3xl bg-[#e6f7ff]/80 p-6 shadow-md backdrop-blur-md border border-[#0993af]/30">
                <h3 className="mb-2 text-lg font-semibold text-[#013a63]">
                  Village & Market Hubs
                </h3>
                <p className="text-sm text-[#013a63]">
                  High-capacity units can serve clusters of households, small enterprises, and local markets through shared infrastructure.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#013a63] via-[#0993af] to-[#0bb5d4] px-6 md:px-10 lg:px-24 py-16 md:py-24 text-white">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#0bb5d4]/40 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#013a63]/70 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#e6f7ff] uppercase">
                CORNERSTONE TECHNOLOGY
              </p>
              <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-semibold">
                Atmospheric Water Systems, Tuned for the Sahel
              </h2>
              <p className="mx-auto max-w-3xl text-sm md:text-base text-[#e6f7ff]">
                Clean water is generated from air humidity using highly efficient, solar-ready units that can operate in off-grid and fragile contexts.
              </p>
            </div>

            <div className="mb-12 grid gap-10 lg:grid-cols-[3fr,2fr] items-center">
              <div className="relative h-80 md:h-96 lg:h-[28rem] rounded-3xl overflow-hidden shadow-2xl border border-white/40">
                <Image
                  src="/assets/the-great-blue-wave/hawana.jpg"
                  alt="Hawana atmospheric water technology"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 60vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(1,58,99,0.9), rgba(3,105,161,0.6), transparent)",
                  }}
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="mb-3 inline-flex rounded-full bg-[#0993af] px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-white">
                    HAWANA WATER SYSTEMS
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    Harvesting Water from Air, Powered by the Sun
                  </h3>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md border border-white/20">
                  <h3 className="mb-2 text-sm font-semibold text-white">Energy Efficient</h3>
                  <p className="text-xs text-[#e6f7ff]">
                    Optimised power consumption and solar compatibility make units viable where grid power is scarce or unreliable.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md border border-white/20">
                  <h3 className="mb-2 text-sm font-semibold text-white">Modular & Maintainable</h3>
                  <p className="text-xs text-[#e6f7ff]">
                    Components are modular, enabling local technicians and youth cooperatives to manage routine maintenance.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md border border-white/20">
                  <h3 className="mb-2 text-sm font-semibold text-white">Scalable Family of Units</h3>
                  <p className="text-xs text-[#e6f7ff]">
                    From household to village-scale, different unit sizes can be combined to match demand and funding models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Scales */}
        <section className="bg-[#e6f7ff] px-6 md:px-10 lg:px-24 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#0993af] uppercase">
                DEPLOYMENT SCALES
              </p>
              <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#013a63]">
                From Households to Whole Villages
              </h2>
              <p className="mx-auto max-w-3xl text-sm md:text-base text-[#013a63]">
                Different unit sizes and financing approaches allow communities, institutions, and partners to on-board water systems at the pace that fits them.
              </p>
            </div>

            <div className="mb-12 grid gap-10 lg:grid-cols-[3fr,2fr] items-center">
              <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/assets/the-great-blue-wave/ss.jpg"
                  alt="Partners co-designing water access"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 60vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(1,58,99,0.9), rgba(3,105,161,0.5), transparent)",
                  }}
                />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="mb-2 text-xs font-semibold tracking-[0.25em] text-[#e6f7ff] uppercase">
                    CO-DESIGN
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold">
                    Matching technology, finance, and operations to local realities.
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <article className="rounded-2xl bg-white p-5 shadow-md border border-[#0993af]/30">
                  <h3 className="mb-1 text-sm font-semibold text-[#013a63]">Residential</h3>
                  <p className="text-xs text-[#013a63]">
                    Compact units for staff housing, teacher accommodation, and frontline workers, reducing reliance on bottled or trucked water.
                  </p>
                </article>
                <article className="rounded-2xl bg-white p-5 shadow-md border border-[#0993af]/30">
                  <h3 className="mb-1 text-sm font-semibold text-[#013a63]">School / Clinic</h3>
                  <p className="text-xs text-[#013a63]">
                    Mid-scale systems with storage and distribution points to serve classrooms, early learning centres, and health posts.
                  </p>
                </article>
                <article className="rounded-2xl bg-white p-5 shadow-md border border-[#0993af]/30">
                  <h3 className="mb-1 text-sm font-semibold text-[#013a63]">Commercial / Village</h3>
                  <p className="text-xs text-[#013a63]">
                    High-capacity units anchoring market hubs and village clusters, often through shared public–private partnerships.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Gallery */}
        <section className="bg-white px-6 md:px-10 lg:px-24 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#0993af] uppercase">
                VISUALISING THE BLUE WAVE
              </p>
              <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#013a63]">
                Water, Infrastructure, and Community Life
              </h2>
              <p className="mx-auto max-w-3xl text-sm md:text-base text-[#013a63]">
                A glimpse of the landscapes and community spaces that the Great Blue Wave seeks to multiply along the Great Green Wall.
              </p>
            </div>

            <div className="mb-12 grid gap-6 md:grid-cols-3">
              {[{
                src: "/assets/the-great-blue-wave/refugee-camp.png",
                alt: "Refugee camp and surrounding community",
              },
              {
                src: "/assets/the-great-blue-wave/rural-water-access.png",
                alt: "Rural agricultural landscape supported by water access",
              },
              {
                src: "/assets/the-great-blue-wave/water-purification-children.png",
                alt: "Children collecting safe water from purification units",
              }].map((img) => (
                <div key={img.src} className="group relative h-64 rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(1,58,99,0.9), rgba(3,105,161,0.4), transparent)",
                      opacity: 0.2,
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0993af] px-8 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105 hover:bg-[#0bb5d4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0993af]"
              >
                Explore Great Blue Wave Opportunities
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M7 17L17 7" />
                  <path d="M9 7h8v8" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-[#e6f7ff] px-6 md:px-10 lg:px-24 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#0993af] uppercase">
                WATCH THE STORY
              </p>
              <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#013a63]">
                The Great Blue Wave in Action
              </h2>
              <p className="mx-auto max-w-3xl text-sm md:text-base text-[#013a63]">
                Discover how atmospheric water harvesting is transforming communities and bringing water security to the Sahel.
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#0993af]/30">
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/zzUQ0cRHswE"
                  title="The Great Blue Wave - Water Security Initiative"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    border: 'none',
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
