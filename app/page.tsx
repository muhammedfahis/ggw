import Image from "next/image";
import Link from "next/link";

const stats = [
    {
        value: "11",
        label: "countries stewarding the Great Green Wall",
        detail: "Local governments and regional blocs collaborating on land restoration.",
    },
    {
        value: "8,000 km",
        label: "living corridor across the Sahel",
        detail: "A continuous belt of restored land stretching coast to coast.",
    },
    {
        value: "100M ha",
        label: "target for landscape regeneration",
        detail: "Restoring soil health, biodiversity, and water cycles at scale.",
    },
    {
        value: "10M jobs",
        label: "new livelihoods by 2030",
        detail: "Green jobs anchored in climate-smart agriculture and conservation.",
    },
];

const focusAreas = [
    {
        title: "Climate Resilience Labs",
        copy: "Demonstration hubs combine water harvesting, native planting, and regenerative agriculture to safeguard communities against drought.",
        image: "/assets/home/rs=w:365,h:365,cg:true.jpeg",
    },
    {
        title: "Culture & Heritage Media",
        copy: "Story-driven campaigns produced with local artists reframe land stewardship as a source of pride and opportunity.",
        image: "/assets/home/rs=w:365,h:365,cg:true_1.jpeg",
    },
    {
        title: "Early Learning Canopies",
        copy: "Shade structures, libraries, and eco-classrooms expand access to quality education for children living along the wall.",
        image: "/assets/home/rs=w:365,h:365,cg:true_2.jpeg",
    },
    {
        title: "Community Capital Circles",
        copy: "Resident-led cooperatives access microgrants, technical training, and circular-economy toolkits to scale impact.",
        image: "/assets/home/cr=w:365,h:365.jpeg",
    },
];

const initiatives = [
    {
        headline: "Carbon-smart agriculture",
        body: "Scaling farmer-managed natural regeneration, millet intercropping, and water-efficient horticulture for consistent yields.",
    },
    {
        headline: "Education through stewardship",
        body: "Curricula align science, arts, and entrepreneurship so students become land guardians and innovators.",
    },
    {
        headline: "Finance that stays local",
        body: "Impact bonds and diaspora-led funds ensure capital circulates within communities and rewards measurable regeneration.",
    },
];

const timeline = [
    { year: "2024", title: "Listening & mapping", note: "18 research immersions and satellite studies inform a shared baseline." },
    { year: "2025", title: "Momentum projects", note: "Flagship forests, climate labs, and youth mobilization hubs launch across five countries." },
    { year: "2027", title: "Networked scaling", note: "Linked knowledge exchanges allow villages to replicate proven playbooks faster." },
    { year: "2030", title: "Regenerative belt", note: "A self-sustaining corridor of economic and ecological vitality across the Sahel." },
];

const partners = [
    {
        name: "Pan-African Agency of the Great Green Wall",
        subtitle: "Institutional anchor",
        description: "Co-designing multi-country strategies and aligning African Union commitments with community execution.",
        logo: "/assets/home/a8b8cb72-0bd3-42f4-a6ad-d64d7533933e.svg",
    },
    {
        name: "African Union GGW Initiative",
        subtitle: "Policy leadership",
        description: "Translating continental policy into actionable restoration frameworks across eleven frontline nations.",
        logo: "/assets/home/b3b904f2-a92d-467a-936e-a7ca9bd24455.svg",
    },
    {
        name: "Bezos Earth Fund",
        subtitle: "Climate finance",
        description: "Unlocking catalytic capital for carbon-smart agriculture, data systems, and women-led innovation labs.",
        logo: "/assets/home/7754974d-18a2-49bf-9b6b-02e1602491aa.svg",
    },
    {
        name: "African Development Bank Group",
        subtitle: "Infrastructure partner",
        description: "Collaborating on resilient water, transport, and knowledge corridors that keep value in local economies.",
        logo: "/assets/home/ec341136-e43e-4f99-bb1b-783760e1f546.svg",
    },
];

export default function HomePage() {
    return (
        <main className="bg-ggwBg text-ggwDark">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <Image
                    src="/assets/home/rs=w:1920,m.png"
                    alt="Great Green Wall of Africa"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-ggwDark/90 via-ggwDark/75 to-ggwDark/30" />
                <div className="absolute inset-0">
                    <div className="h-full w-full opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #A7D26333, transparent 45%)" }} />
                </div>

                <div className="relative z-10 mx-auto flex min-h-[640px] max-w-6xl flex-col gap-12 px-4 py-24 md:px-6 lg:px-8 lg:flex-row lg:items-center">
                    <div className="space-y-8 lg:w-7/12">
                        <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                            Impact Report · 2024
                        </div>
                        <div>
                            <p className="text-base font-semibold uppercase tracking-[0.2em] text-ggwGreen">Great Green Wall of Africa</p>
                            <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl lg:text-7xl">
                                A living infrastructure powering nature, culture, and prosperity.
                        </h1>
                        </div>
                        <p className="text-lg leading-relaxed text-white/90 md:text-xl">
                            We design regenerative systems alongside governments, traditional leaders, and bold partners so that land restoration becomes the most
                            inspiring development story of this decade.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/projects"
                                className="rounded-full bg-ggwGreen px-8 py-4 text-base font-semibold text-ggwDark transition hover:bg-white"
                            >
                                Explore active work
                            </Link>
                            <Link
                                href="/about"
                                className="rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                            >
                                Discover our approach
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur">
                        <p className="text-sm uppercase tracking-[0.3em] text-white/70">Field momentum</p>
                        <div className="mt-6 space-y-6">
                            <div>
                                <p className="text-4xl font-semibold text-white">63</p>
                                <p className="text-sm text-white/70">community-led pilots activated in 2024</p>
                            </div>
                            <div className="h-px bg-white/20" />
                            <div>
                                <p className="text-4xl font-semibold text-ggwGreen">92%</p>
                                <p className="text-sm text-white/70">survival rate of newly planted native species</p>
                            </div>
                            <div className="h-px bg-white/20" />
                            <div>
                                <p className="text-sm uppercase tracking-[0.2em] text-white/70">Partner spotlight</p>
                                <p className="mt-2 text-base">
                                    Ministries, indigenous custodians, and innovators in Senegal, Nigeria, Ethiopia, and Djibouti co-designed this year&apos;s programmes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="relative py-24">
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/5 to-transparent opacity-10" />
                <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2 md:px-6 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="group rounded-2xl border border-ggwDark/5 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-ggwGreen/40 hover:shadow-xl">
                            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Impact</span>
                            <p className="mt-4 text-3xl font-semibold text-ggwDark md:text-4xl">{stat.value}</p>
                            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-ggwDark/70">{stat.label}</p>
                            <p className="mt-4 text-sm text-ggwDark/70">{stat.detail}</p>
                        </div>
                    ))}
                                </div>
            </section>

            {/* Narrative section */}
            <section className="py-24">
                <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:px-6 lg:items-center">
                    <div className="md:w-1/2">
                        <div className="relative overflow-hidden rounded-3xl bg-ggwDark/90 shadow-xl">
                            <Image
                                src="/assets/home/field-note.jpeg"
                                alt="Landscape restoration"
                                width={900}
                                height={700}
                                className="h-full w-full object-cover opacity-70"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ggwDark via-ggwDark/40 to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <p className="text-sm uppercase tracking-[0.3em] text-white/60">Field note</p>
                                <p className="mt-3 text-2xl font-semibold leading-snug">
                                    “Every hectare we restore tells a story of dignity returned to its people.”
                                </p>
                                <p className="mt-2 text-sm text-white/70">Aminata Barry · Community forester, Senegal</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 md:w-1/2">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Why it matters</p>
                            <h2 className="mt-4 text-3xl font-semibold">Restoration is the backbone of climate security and cultural continuity.</h2>
                        </div>
                        <p className="text-lg text-ggwDark/80">
                            Our teams align national policy ambition with grounded community action. We carry out landscape diagnostics, unlock blended finance, and deploy
                            on-the-ground collectives who know every dune, pasture, and family relying on it.
                        </p>
                        <div className="grid gap-6 rounded-2xl border border-ggwDark/5 bg-white/70 p-6 shadow-sm">
                            {initiatives.map((item) => (
                                <div key={item.headline}>
                                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-ggwGreen">Initiative</p>
                                    <p className="mt-2 text-xl font-semibold text-ggwDark">{item.headline}</p>
                                    <p className="mt-2 text-sm text-ggwDark/70">{item.body}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Focus areas */}
            <section className="py-24">
                <div className="mx-auto max-w-6xl px-4 md:px-6">
                    <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Program architecture</p>
                            <h2 className="mt-3 text-3xl font-semibold">Built with communities, tested on the ground.</h2>
                        </div>
                        <Link href="/projects" className="rounded-full border border-ggwDark/20 px-6 py-3 text-sm font-semibold text-ggwDark hover:border-ggwGreen">
                            View portfolio
                        </Link>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2">
                        {focusAreas.map((area) => (
                            <article key={area.title} className="group relative overflow-hidden rounded-3xl border border-ggwDark/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={area.image}
                                        alt={area.title}
                                        fill
                                        className="object-cover transition duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-ggwDark/70 to-transparent" />
                                </div>
                                <div className="space-y-4 px-6 pb-8 pt-6">
                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ggwGreen">Focus area</p>
                                    <h3 className="text-2xl font-semibold">{area.title}</h3>
                                    <p className="text-sm text-ggwDark/80">{area.copy}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section className="py-24">
                <div className="mx-auto max-w-6xl px-4 md:px-6">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Our partners</p>
                            <h2 className="mt-3 text-3xl font-semibold">Alliances that match ambition with delivery.</h2>
                        </div>
                        <p className="max-w-xl text-sm text-ggwDark/70">
                            Ministries, financiers, and creative networks stand beside community custodians to make sure every promise is measurable and inclusive.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        {partners.map((partner) => (
                            <article key={partner.name} className="rounded-[32px] border border-ggwDark/5 bg-white p-6 shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-ggwDark/10 bg-ggwBg">
                                        <Image src={partner.logo} alt={partner.name} fill className="object-contain p-3" sizes="56px" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwGreen">{partner.subtitle}</p>
                                        <h3 className="text-lg font-semibold">{partner.name}</h3>
                                </div>
                            </div>
                                <p className="mt-4 text-sm text-ggwDark/80">{partner.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24">
                <div className="mx-auto max-w-6xl px-4 md:px-6">
                    <div className="rounded-3xl border border-ggwDark/5 bg-white/80 p-8 shadow-sm md:p-12">
                        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Roadmap</p>
                                <h2 className="mt-3 text-3xl font-semibold">From first roots to continental corridor.</h2>
                            </div>
                            <Link href="/news" className="text-sm font-semibold text-ggwGreen hover:text-ggwDark">
                                Read latest briefings →
                            </Link>
                        </div>

                        <div className="grid gap-8 md:grid-cols-4">
                            {timeline.map((milestone) => (
                                <div key={milestone.year} className="rounded-2xl border border-ggwDark/5 bg-ggwBg p-5">
                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ggwGreen">{milestone.year}</p>
                                    <p className="mt-3 text-xl font-semibold text-ggwDark">{milestone.title}</p>
                                    <p className="mt-2 text-sm text-ggwDark/70">{milestone.note}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="pb-24">
                <div className="mx-auto max-w-5xl rounded-[40px] border border-ggwDark/5 bg-gradient-to-br from-ggwDark to-ggwDark/80 px-6 py-16 text-center text-white shadow-2xl md:px-12">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-ggwGreen">Take action</p>
                    <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Partner with us to design the planet&apos;s most ambitious restoration effort.</h2>
                    <p className="mt-6 text-lg text-white/80">
                        Whether you bring capital, technology, storytelling, or policy expertise, there is room to co-create lasting impact along the Great Green Wall.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="rounded-full bg-ggwGreen px-8 py-4 text-base font-semibold text-ggwDark transition hover:bg-white">
                            Start a conversation
                        </Link>
                        <Link href="/leadership" className="rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10">
                            Meet the leadership
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
