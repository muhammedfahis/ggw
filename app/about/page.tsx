import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "About Us | GGWoA Foundation",
    description: "Learn how the Great Green Wall of Africa Foundation mobilizes culture, policy, and communities to regenerate the Sahel.",
};

const iconStroke = { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" } as const;

const pillars = [
    {
        title: "Climate Change Initiative",
        copy: "Promoting bold climate projects that deliver measurable ecological gains and economic opportunity through innovative restoration strategies.",
        iconClass: "bg-primary/10 border-primary/20 text-primary group-hover:bg-primary",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />,
    },
    {
        title: "Culture Building",
        copy: "Mobilizing cultural leaders and storytellers so stewardship becomes an expression of pride and identity across communities.",
        iconClass: "bg-primary/10 border-primary/20 text-primary group-hover:bg-primary",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
    },
    {
        title: "Child Education Expansion",
        copy: "Creating early learning experiences under 'green canopies' that connect children to land-based knowledge and environmental stewardship.",
        iconClass: "bg-primary/10 border-primary/20 text-primary group-hover:bg-primary",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
    },
    {
        title: "Community Empowerment",
        copy: "Investing in local governance, skills, and circular economies so communities design their own pathways to sustainable prosperity.",
        iconClass: "bg-primary/10 border-primary/20 text-primary group-hover:bg-primary",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    },
];

const stats = [
    {
        value: "15M+",
        label: "Trees established",
        detail: "Indigenous acacia, baobab, and shea species cultivated with community cooperatives.",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />,
    },
    {
        value: "50K+",
        label: "Hectares restored",
        detail: "Dune stabilization, soil regeneration, and water retention across degraded land.",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />,
    },
    {
        value: "120K+",
        label: "Youth & women trained",
        detail: "Entrepreneurship, agroforestry, and civic leadership.",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />,
    },
];

const principles = [
    {
        title: "Culture is Infrastructure",
        description: "Creative expression unlocks momentum and trust in communities.",
    },
    {
        title: "Communities Lead from Day Zero",
        description: "Local partners sit at the design table and share in the upside.",
    },
    {
        title: "Cross-Sector Collaboration",
        description: "Policy makers, artists, scientists, and investors solve in the same room.",
    },
    {
        title: "Measurable Impact",
        description: "Every hectare is measured for ecological, social, and economic outcomes.",
    },
];

const milestones = [
    {
        year: "2010 – 2015",
        focus: "Listening Tours & Cultural Mapping",
        description: "Building foundational relationships and understanding local contexts across the Sahel region.",
    },
    {
        year: "2016 – 2020",
        focus: "Pilot Forests, Creative Coalitions, and Policy Advocacy",
        description: "Testing restoration models and building strategic partnerships for scale.",
    },
    {
        year: "2021 – 2023",
        focus: "Cross-Border Projects & Women-Led Innovation Labs",
        description: "Expanding impact across multiple countries with community-centered approaches.",
    },
    {
        year: "2024+",
        focus: "Pan-African Alliance Scaling Regenerative Economies",
        description: "Building a continental coalition for systemic transformation and sustainable growth.",
    },
];

const collage = [
    { src: "/assets/about/stitch/elder-council.jpg", alt: "Sahel community elders and youth planning restoration", caption: "Elder Council Dialogue" },
    { src: "/assets/about/stitch/micro-catchments.jpg", alt: "Aerial view of agroforestry restoration in the Sahel", caption: "Living Wall Micro-Catchments" },
    { src: "/assets/about/stitch/solar-wellhead.jpg", alt: "Solar-powered community water system", caption: "Atmospheric & Solar Wellhead" },
    { src: "/assets/about/stitch/agro-lab.jpg", alt: "Youth climate technology and agro-ecology lab", caption: "Agro-technology Lab" },
];

function SectionRule({ className = "mx-auto" }: { className?: string }) {
    return <div className={`w-12 h-0.5 bg-accent ${className}`}></div>;
}

export default function AboutPage() {
    return (
        <main className="bg-offWhite text-charcoal min-h-screen">
            {/* Hero */}
            <section className="relative min-h-[520px] w-full flex items-center overflow-hidden py-24">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/about/stitch/sahel-hero.jpg"
                        alt="Sahel landscape with acacia trees at golden hour"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-primary/65"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-black/30"></div>
                </div>
                <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        <span className="eyebrow eyebrow-light">Continental Living Infrastructure</span>
                    </div>
                    <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] tracking-tight max-w-4xl">
                        Unlocking the potential in Africa’s landscape
                    </h1>
                    <p className="text-white/85 text-lg sm:text-[20px] leading-relaxed max-w-3xl mt-5">
                        We leverage culture, policy, and community partnerships to ensure climate adaptation strategies reduce the trade-offs between economic growth and sustainability.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                        <Link href="/projects" className="group btn-accent">
                            View Progress Work
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                        <Link href="/leadership" className="group btn-outline-light">
                            Our Leadership
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Culture-Powered Climate Action */}
            <section className="bg-offWhite py-16 md:py-20 px-4 md:px-6 border-b border-deepEarth/10">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <h2 className="font-heading font-bold text-primary text-3xl sm:text-4xl tracking-tight leading-tight">
                        Culture-Powered Climate Action
                    </h2>
                    <SectionRule className="my-4" />
                    <p className="text-charcoal/80 text-[17px] leading-relaxed max-w-2xl mt-2">
                        The Great Green Wall of Africa Foundation supports projects with concurrent high positive impact. We convene communities, stakeholders, and policy makers so that climate adaptation strategies become integrated development strategies.
                    </p>
                    <div className="mt-12 bg-white rounded p-7 sm:p-9 border border-deepEarth/10 text-left max-w-3xl w-full flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <div className="w-14 h-14 rounded bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A9.49 9.49 0 0 0 12 21c7 0 11-8 11-8s-2.5 1-6 1c0 0 4-4 2-8a9.12 9.12 0 0 0-2 2zM12 19c-2.12 0-3.89-.9-4.83-2.19C9.28 13.9 12.75 11.23 18 10.3c-.63 3.63-2.73 8.7-6 8.7z" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <span className="eyebrow block mb-1.5">Institutional Philosophy</span>
                            <h3 className="font-heading font-bold text-primary text-xl mb-2">How We Work</h3>
                            <p className="text-charcoal/70 text-sm leading-relaxed">
                                Diagnostics and storytelling reveal the cultural context of each landscape. From there, we co-design investments that honour traditional knowledge, integrate technology, and anchor long-term governance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* From Cultural Spark to Continental Movement */}
            <section id="wisdom" className="bg-secondary py-16 md:py-20 px-4 md:px-6 border-b border-deepEarth/10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="eyebrow">Our Evolution &amp; Praxis</span>
                        <h2 className="font-heading font-bold text-deepEarth text-3xl sm:text-4xl tracking-tight mt-3">
                            From Cultural Spark to Continental Movement
                        </h2>
                        <SectionRule className="mx-auto mt-3" />
                    </div>

                    <div className="space-y-20">
                        {/* Rooted in Community Wisdom */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                            <div className="lg:col-span-5 space-y-4">
                                <span className="eyebrow block">Grassroots Architecture</span>
                                <h3 className="font-heading font-bold text-deepEarth text-2xl sm:text-[26px] leading-tight">
                                    Rooted in Community Wisdom
                                </h3>
                                <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed">
                                    Our journey began with listening tours across the Sahel, where we learned that the most powerful restoration strategies emerge when cultural knowledge guides climate action.
                                </p>
                                <p className="text-charcoal/80 text-sm leading-relaxed">
                                    Communities weren't just stakeholders—they were the architects of change. By aligning modern science with elder council stewardship, restoration becomes something communities own, cultivate, and defend.
                                </p>
                                <div className="bg-white/80 backdrop-blur-sm border border-deepEarth/15 rounded p-4 flex items-start gap-3.5 mt-4">
                                    <div className="w-9 h-9 rounded bg-accent/20 flex items-center justify-center shrink-0 text-deepEarth">
                                        <svg className="w-5 h-5" {...iconStroke}>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.674M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-accent font-semibold text-deepEarth text-xs uppercase tracking-wider">Our Insight</h4>
                                        <p className="text-charcoal/80 text-xs mt-0.5 leading-relaxed">
                                            Cultural identity is the most powerful driver of environmental stewardship. Restoration fails when imposed top-down.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-7">
                                <div className="grid grid-cols-2 gap-4">
                                    {collage.map((photo) => (
                                        <div key={photo.src} className="relative rounded overflow-hidden group h-40 sm:h-52">
                                            <Image
                                                src={photo.src}
                                                alt={photo.alt}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 1024px) 50vw, 30vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                            <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] font-medium leading-tight">
                                                {photo.caption}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Scaling Through Partnership */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8 border-t border-deepEarth/15">
                            <div className="lg:col-span-5 space-y-4">
                                <span className="eyebrow block">Institutional Synthesis</span>
                                <h3 className="font-heading font-bold text-deepEarth text-2xl sm:text-[26px] leading-tight">
                                    Scaling Through Partnership
                                </h3>
                                <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed">
                                    Today, we convene governments, financiers, artists, and communities around shared restoration goals. By creating platforms for cross-sector collaboration, we've transformed local insights into continental impact.
                                </p>
                                <p className="text-charcoal/80 text-sm leading-relaxed">
                                    Through strategic alliances with partners like the Advance Africa Foundation, we convert environmental interventions into green employment, enterprise, and sustainable trade.
                                </p>
                                <div className="bg-white/80 backdrop-blur-sm border border-deepEarth/15 rounded p-4 flex items-start gap-3.5 mt-4">
                                    <div className="w-9 h-9 rounded bg-primary/20 flex items-center justify-center shrink-0 text-primary">
                                        <svg className="w-5 h-5" {...iconStroke}>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-accent font-semibold text-deepEarth text-xs uppercase tracking-wider">Our Network</h4>
                                        <p className="text-charcoal/80 text-xs mt-0.5 leading-relaxed">
                                            11 countries, 100+ partners, and thousands of community leaders working together.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-7">
                                <div className="relative rounded overflow-hidden border border-deepEarth/10 group h-[300px] sm:h-[380px]">
                                    <Image
                                        src="/assets/about/stitch/nursery-cooperative.jpg"
                                        alt="Community stewards working in an agroforestry nursery"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 1024px) 100vw, 60vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-5 left-6 right-6 text-white">
                                        <span className="inline-block px-2.5 py-0.5 bg-accent text-deepEarth font-accent font-bold text-[10px] uppercase tracking-wider rounded mb-2">Equitable Co-Development</span>
                                        <h4 className="font-heading font-bold text-lg leading-tight">Women-Led Agroforestry &amp; Native Nursery Cooperatives</h4>
                                        <p className="text-xs text-white/80 mt-1 max-w-xl">
                                            Local nursery workers cultivating indigenous seedlings for Sahel reforestation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Four Pillars */}
            <section id="pillars" className="bg-white py-16 md:py-20 px-4 md:px-6 border-b border-deepEarth/10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-heading font-bold text-primary text-3xl sm:text-4xl tracking-tight leading-tight">
                            Four Pillars to Regenerate the Sahel
                        </h2>
                        <SectionRule className="mx-auto my-3" />
                        <p className="text-charcoal/70 text-[17px] leading-relaxed mt-3">
                            Inspired by communities on the frontlines, each pillar combines policy engagement, financing, and storytelling to unlock scale.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pillars.map((pillar) => (
                            <Link
                                key={pillar.title}
                                href="/projects"
                                className="bg-offWhite border border-deepEarth/10 rounded p-6 hover:border-primary/40 transition-colors flex flex-col justify-between group"
                            >
                                <div>
                                    <div className={`w-12 h-12 rounded border flex items-center justify-center mb-5 group-hover:text-white transition-colors duration-300 ${pillar.iconClass}`}>
                                        <svg className="w-6 h-6" {...iconStroke}>{pillar.icon}</svg>
                                    </div>
                                    <h3 className="font-heading font-bold text-primary text-xl mb-3">{pillar.title}</h3>
                                    <p className="text-charcoal/70 text-sm leading-relaxed">{pillar.copy}</p>
                                </div>
                                <div className="link-arrow pt-6 mt-4 border-t border-deepEarth/10 group-hover:text-accentDark transition-colors">
                                    <span>Learn More</span>
                                    <span className="ml-1.5 group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Measurable Progress & Guiding Values */}
            <section className="bg-secondary py-16 md:py-20 px-4 md:px-6 border-b border-deepEarth/10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="bg-white/90 backdrop-blur-sm rounded p-8 sm:p-10 border border-deepEarth/15">
                        <span className="eyebrow block mb-3">Impact Verified Across 11 Nations</span>
                        <h2 className="font-heading font-bold text-primary text-2xl sm:text-3xl tracking-tight leading-tight">Measurable Progress</h2>
                        <SectionRule className="w-10 mt-3 mb-8" />
                        <div className="space-y-6">
                            {stats.map((stat) => (
                                <div key={stat.label} className="flex items-start gap-4 p-4 rounded bg-offWhite border border-deepEarth/10">
                                    <div className="w-12 h-12 rounded bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0 text-accentDark">
                                        <svg className="w-6 h-6" {...iconStroke}>{stat.icon}</svg>
                                    </div>
                                    <div>
                                        <div className="flex flex-wrap items-baseline gap-x-2">
                                            <span className="font-heading font-bold text-3xl text-deepEarth">{stat.value}</span>
                                            <span className="font-accent font-semibold text-xs tracking-wider text-primary uppercase">{stat.label}</span>
                                        </div>
                                        <p className="text-xs text-charcoal/70 mt-1 leading-relaxed">{stat.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/90 backdrop-blur-sm rounded p-8 sm:p-10 border border-deepEarth/15">
                        <span className="eyebrow block mb-3">Guiding Ethical Pillars</span>
                        <h2 className="font-heading font-bold text-primary text-2xl sm:text-3xl tracking-tight leading-tight">Our Guiding Values</h2>
                        <SectionRule className="w-10 mt-3 mb-8" />
                        <div className="space-y-6">
                            {principles.map((principle) => (
                                <div key={principle.title} className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 text-white mt-0.5">
                                        <svg className="w-4 h-4" {...iconStroke}>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-bold text-deepEarth text-lg">{principle.title}</h3>
                                        <p className="text-xs text-charcoal/70 mt-1 leading-relaxed">{principle.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="bg-offWhite py-16 md:py-20 px-4 md:px-6 border-b border-deepEarth/10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="eyebrow block mb-3">Our Historical Journey</span>
                        <h2 className="font-heading font-bold text-primary text-3xl sm:text-4xl tracking-tight leading-tight">
                            From Cultural Spark to Continental Coalition
                        </h2>
                        <SectionRule className="mx-auto my-3" />
                    </div>
                    <div className="relative">
                        <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-accent/40 hidden sm:block"></div>
                        <div className="space-y-8">
                            {milestones.map((milestone, index) => {
                                const isCurrent = index === milestones.length - 1;
                                return (
                                    <div key={milestone.year} className="relative flex items-start gap-4 sm:gap-6 group">
                                        <div className="w-12 h-12 rounded-full bg-accent text-deepEarth font-heading font-bold text-lg flex items-center justify-center shrink-0 border-2 border-white ring-4 ring-secondary/40 z-10">
                                            {index + 1}
                                        </div>
                                        <div className="flex-1 bg-white p-6 sm:p-7 rounded border border-deepEarth/10 group-hover:border-accent transition-colors">
                                            <span className={`inline-block px-3 py-1 ${isCurrent ? "bg-accent" : "bg-secondary"} text-deepEarth font-accent font-bold text-xs uppercase tracking-wider rounded mb-2`}>
                                                {milestone.year}
                                            </span>
                                            <h3 className="font-heading font-bold text-primary text-xl mb-1.5">{milestone.focus}</h3>
                                            <p className="text-charcoal/70 text-sm leading-relaxed">{milestone.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-primary text-white py-16 md:py-20 px-4 md:px-6 relative overflow-hidden">
                <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full border border-white/10 pointer-events-none"></div>
                <div className="absolute -right-12 -bottom-12 w-96 h-96 rounded-full border border-white/5 pointer-events-none"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
                    <span className="eyebrow eyebrow-light mb-3">Join The Continental Mobilization</span>
                    <h2 className="font-heading font-bold text-3xl sm:text-4xl tracking-tight leading-tight">
                        Help Design the Largest Living Structure on Earth
                    </h2>
                    <p className="text-white/80 text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
                        Whether you represent government, philanthropy, or creative industries, we are ready to co-create long-term impact along the Great Green Wall.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 mt-9">
                        <Link href="/contact" className="group btn-accent">
                            Talk to Our Team
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                        <Link href="/leadership" className="group btn-outline-light">
                            Meet the Leadership
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
