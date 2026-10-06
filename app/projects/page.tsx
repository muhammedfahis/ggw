import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Projects | GGWoA Foundation",
};

type Initiative = {
    title: string;
    summary: string;
    image: string;
    category: string;
    status: "Active" | "Planning";
    location: string;
    href?: string;
};

const initiatives: Initiative[] = [
    {
        title: "The Great Blue Wave",
        summary: "Building water-secure futures across the Sahel through innovative atmospheric water harvesting systems and distributed blue hubs.",
        image: "/assets/the-great-blue-wave/why-water.png",
        category: "Water · Climate",
        status: "Active",
        location: "Sahel Region",
        href: "/the-great-blue-wave",
    },
    {
        title: "COP28 Pre-summit Series",
        summary: "Aligning climate, education, food security, health, and culture coalitions to accelerate 2030 commitments through unprecedented cross-sector collaboration.",
        image: "/assets/projects/rs=w:365,h:365,cg:true.jpeg",
        category: "Climate · Summit",
        status: "Active",
        location: "Global",
        href: "/projects/cop28-pre-summit",
    },
    {
        title: "Thiès Forest Restoration",
        summary: "Transforming former mining land through native planting, water harvesting, and youth employment to create sustainable ecosystems and livelihoods.",
        image: "/assets/projects/rs=w:365,h:365,cg:true_1.jpeg",
        category: "Forest · Senegal",
        status: "Active",
        location: "Thiès Region, Senegal",
        href: "/projects/thies-forest",
    },
    {
        title: "SCALE",
        summary: "Scaling climate-resilient livelihoods along the Great Green Wall with regenerative agriculture hubs that empower local communities.",
        image: "/assets/projects/rs=w:365,h:365,cg:true_2.jpeg",
        category: "Agriculture · Finance",
        status: "Active",
        location: "Multiple Regions",
        href: "/projects/scale",
    },
    {
        title: "IMAGINE-1",
        summary: "Pan-African creative campaign reframing the wall through music, film, and immersive art to inspire global action and local pride.",
        image: "/assets/projects/rs=w:365,h:365,cg:true_3.jpeg",
        category: "Arts · Culture",
        status: "Active",
        location: "Lagos, Nigeria",
        href: "/projects/imagine-1",
    },
    {
        title: "ENGAGE",
        summary: "Community assemblies in 30+ villages to co-design adaptation plans and governance charters that ensure local ownership and success.",
        image: "/assets/projects/rs=w:365,h:365,cg:true_4.jpeg",
        category: "Community · Policy",
        status: "Active",
        location: "30+ Villages",
    },
    {
        title: "WORK",
        summary: "Job awareness labs highlighting the climate careers unlocked by the Great Green Wall, connecting youth with green employment opportunities.",
        image: "/assets/projects/rs=w:365,h:365,cg:true,m.jpeg",
        category: "Jobs · Education",
        status: "Planning",
        location: "Niamey & Ndjamena",
    },
];

const iconStroke = { fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24" } as const;

const workstreams = [
    {
        title: "Regenerative Land Systems",
        detail: "Restoring soil, water, and biodiversity with agroforestry corridors, dune stabilization, and climate-resilient crops.",
        iconClass: "bg-emerald-50 text-emerald-700 border-emerald-100",
        icon: (
            <>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 0 1-9-9c0-4.97 4.03-9 9-9 4.97 0 9 4.03 9 9a9 9 0 0 1-9 9z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v9m0-9a3 3 0 0 1 3-3h3m-6 3a3 3 0 0 0-3-3H6" />
            </>
        ),
    },
    {
        title: "Culture & Narrative",
        detail: "Film, music, and design collaborations that make stewardship aspirational and mobilize global allies.",
        iconClass: "bg-purple-50 text-purple-700 border-purple-100",
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
    },
    {
        title: "Education & Skills",
        detail: "Eco-curricula, early learning canopies, and technical academies preparing youth for green careers.",
        iconClass: "bg-sky-50 text-sky-700 border-sky-100",
        icon: (
            <>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
            </>
        ),
    },
    {
        title: "Finance & Governance",
        detail: "Blended finance vehicles, public policy design, and data systems that keep value in communities.",
        iconClass: "bg-amber-50 text-amber-700 border-amber-100",
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    },
];

const impactStats = [
    { value: "12", label: "Countries", detail: "Active engagement", tag: "Senegal to Djibouti" },
    { value: "7", label: "Flagship Initiatives", detail: "Currently active", tag: "Field to Forum" },
    { value: "4", label: "Core Workstreams", detail: "Strategic pillars", tag: "Integrated Impact" },
];

function InitiativeCard({ initiative }: { initiative: Initiative }) {
    const body = (
        <>
            <div className="relative h-56 w-full overflow-hidden bg-stone-800">
                <Image
                    src={initiative.image}
                    alt={initiative.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase text-white shadow ${initiative.status === "Active" ? "bg-primary" : "bg-accentDark"}`}>
                        {initiative.status}
                    </span>
                </div>
                <div className="absolute bottom-3 left-4">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-black/60 backdrop-blur-sm text-secondary">
                        {initiative.category}
                    </span>
                </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="font-heading text-2xl font-bold text-deepEarth mb-2.5 group-hover:text-primary transition-colors">
                        {initiative.title}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed line-clamp-3">{initiative.summary}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
                    <span className="text-xs text-stone-400 font-medium">{initiative.location}</span>
                    {initiative.href ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase text-accent group-hover:text-deepEarth transition-colors shrink-0">
                            View Project <span>→</span>
                        </span>
                    ) : (
                        <span className="text-xs font-bold tracking-wide uppercase text-stone-400 shrink-0">Details Soon</span>
                    )}
                </div>
            </div>
        </>
    );

    const className = "bg-white rounded-2xl overflow-hidden border border-deepEarth/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group";

    return initiative.href ? (
        <Link href={initiative.href} className={className}>{body}</Link>
    ) : (
        <article className={className}>{body}</article>
    );
}

export default function ProjectsPage() {
    return (
        <main className="bg-offWhite text-charcoal min-h-screen">
            {/* Hero */}
            <section className="relative text-white min-h-[480px] flex items-center py-20 px-6 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/about/stitch/sahel-hero.jpg"
                        alt="Sahel landscape at golden hour"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primaryDark/90"></div>
                </div>
                <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <defs>
                            <pattern id="contour" width="120" height="120" patternUnits="userSpaceOnUse">
                                <circle cx="60" cy="60" r="40" fill="none" stroke="#D4AF37" strokeWidth="1.2" />
                                <circle cx="60" cy="60" r="58" fill="none" stroke="#FFFFFF" strokeWidth="0.8" strokeDasharray="4 4" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#contour)" />
                    </svg>
                </div>
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        Pan-African Continental Portfolio
                    </div>
                    <h1 className="font-heading text-4xl sm:text-5xl lg:text-[58px] leading-[1.12] font-bold text-white mb-6 tracking-tight">
                        Shaping the World's Largest Living Structure
                    </h1>
                    <p className="text-lg sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-10">
                        Each initiative combines policy influence, cultural momentum, and community-owned implementation to accelerate the Great Green Wall mandate across the African continent.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a href="#partner" className="px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide border-2 border-white text-white hover:bg-white hover:text-primary transition-all shadow-sm flex items-center gap-2">
                            Partner With Us <span className="text-base leading-none">↓</span>
                        </a>
                        <a href="#programs" className="px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all shadow-sm flex items-center gap-2">
                            Browse Projects <span className="text-base leading-none">→</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Our Reach */}
            <section className="bg-secondary py-20 px-6 border-b border-deepEarth/10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <div className="text-xs uppercase tracking-[0.25em] font-bold text-accent mb-2">Impact at a Glance</div>
                        <h2 className="font-heading text-3xl sm:text-[36px] font-bold text-deepEarth tracking-tight">Our Reach Across Africa</h2>
                        <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {impactStats.map((stat) => (
                            <div key={stat.label} className="bg-offWhite rounded-2xl p-9 shadow-md hover:shadow-lg transition-all border border-black/5 text-center flex flex-col items-center justify-center">
                                <span className="font-heading text-6xl sm:text-7xl font-bold text-primary leading-none mb-3">{stat.value}</span>
                                <h3 className="font-body text-xl font-bold text-deepEarth mb-2 tracking-tight">{stat.label}</h3>
                                <p className="text-sm text-stone-500 italic font-heading">{stat.detail}</p>
                                <div className="mt-4 pt-4 border-t border-deepEarth/10 w-28 text-[11px] uppercase tracking-wider text-primary font-semibold">{stat.tag}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Flagship Programs */}
            <section id="programs" className="bg-offWhite py-24 px-6 scroll-mt-20">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mb-14">
                        <div className="text-xs uppercase tracking-[0.25em] font-bold text-accent mb-2">Active Programs</div>
                        <h2 className="font-heading text-3xl sm:text-[40px] font-bold text-deepEarth leading-tight">Flagship Programs</h2>
                        <div className="w-16 h-1 bg-accent mt-4 mb-4 rounded-full"></div>
                        <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                            From policy summits to forest restoration, each initiative demonstrates our integrated approach to climate action.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {initiatives.map((initiative) => (
                            <InitiativeCard key={initiative.title} initiative={initiative} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Pillars */}
            <section className="bg-secondary py-24 px-6 border-y border-deepEarth/10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="text-xs uppercase tracking-[0.25em] font-bold text-accent mb-2">Our Framework</div>
                        <h2 className="font-heading text-3xl sm:text-[36px] font-bold text-deepEarth tracking-tight">Our Core Pillars</h2>
                        <div className="w-16 h-1 bg-accent mx-auto mt-4 mb-4 rounded-full"></div>
                        <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                            We design multi-year coalitions with ministries, traditional leaders, investors, and creative industries to ensure restoration is measurable and inclusive.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {workstreams.map((stream) => (
                            <Link
                                key={stream.title}
                                href="/about"
                                className="bg-white rounded-2xl p-7 border border-deepEarth/10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 group-hover:scale-105 transition-transform ${stream.iconClass}`}>
                                        <svg className="w-7 h-7" {...iconStroke}>{stream.icon}</svg>
                                    </div>
                                    <h3 className="font-heading text-xl font-bold text-deepEarth mb-3 group-hover:text-primary transition-colors">{stream.title}</h3>
                                    <p className="text-sm text-stone-600 leading-relaxed mb-6">{stream.detail}</p>
                                </div>
                                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent group-hover:text-deepEarth transition-colors">
                                    Learn More <span>→</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="partner" className="bg-primary text-white py-20 px-6 relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none"></div>
                <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-primaryDark/60 blur-3xl pointer-events-none"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-white mb-6 leading-tight">
                        Shape the Future of African Restoration
                    </h2>
                    <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
                        Whether you're a funder, technical expert, community organization, or passionate advocate—there's a place for you in the Great Green Wall story.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link href="/contact" className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide border-2 border-white text-white hover:bg-white hover:text-primary transition-all shadow-sm flex items-center gap-2">
                            Partner With Us <span className="text-base leading-none">→</span>
                        </Link>
                        <Link href="/leadership" className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide border-2 border-white text-white hover:bg-white/15 transition-all shadow-sm flex items-center gap-2">
                            Meet the Leadership <span className="text-base leading-none">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
