import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import AnimationWrapper from "@/components/AnimationWrapper";

export const metadata = {
    title: "News | GGWoA Foundation",
};

const feature = {
    title: "Great Green Wall prepares for COP30",
    summary: "GGWoA and ministerial partners unveil an ambitious regenerative finance roadmap, uniting culture, policy, and climate innovators in a groundbreaking initiative that promises to reshape Africa's ecological future at Brazil's pivotal climate summit.",
    date: "Nov 10, 2025",
    image: "/assets/news/rs=w:1920,m.jpeg",
    href: "/news/cop30-briefing",
    category: "Climate Summit",
    readTime: "5 min read"
};

const spotlights = [
    {
        title: "Thiès restoration site reaches 92% tree survival",
        summary: "Community cooperatives piloted new water-harvesting designs that now inform regional scale plans, demonstrating remarkable success in sustainable land management.",
        date: "Nov 18, 2024",
        image: "/assets/news/rs=w:388,h:194,cg:true.jpeg",
        category: "Success Story",
        readTime: "3 min read"
    },
    {
        title: "IMAGINE-1 creative tour launches in Lagos",
        summary: "Artists, filmmakers, and designers co-created immersive experiences to reframe land stewardship through the power of creative expression.",
        date: "Oct 27, 2024",
        image: "/assets/news/rs=w:388,h:194,cg:true_1.jpeg",
        category: "Cultural Initiative",
        readTime: "4 min read"
    },
    {
        title: "Youth climate labs open in Niamey & Ndjamena",
        summary: "Early learning canopies double as entrepreneurship hubs equipping young people for green careers and sustainable futures.",
        date: "Oct 10, 2024",
        image: "/assets/news/rs=w:388,h:194,cg:true_2.jpeg",
        category: "Education",
        readTime: "6 min read"
    },
    {
        title: "Diaspora fund backs microgrants for community water systems",
        summary: "The ENGAGE programme mobilized diaspora capital to expand solar-powered boreholes across rural communities.",
        date: "Sep 25, 2024",
        image: "/assets/news/rs=w:388,h:194,cg:true_3.jpeg",
        category: "Partnership",
        readTime: "4 min read"
    },
];

const archive = [
    {
        date: "Oct 15, 2025",
        title: "COP30 preparations accelerate",
        summary: "GGWoA mobilizes private sector capital toward 2030 goals through innovative financing mechanisms ahead of the Brazil summit.",
        image: "/assets/news/rs=w:600,h:300,cg:true.jpeg",
        category: "Annual Review"
    },
    {
        date: "Sep 30, 2025",
        title: "Announcement of GGWoA participation at COP30",
        summary: "Partnering with PAGGW and AU GGWI to present an accelerated action plan in Brazil that promises transformative impact.",
        image: "/assets/news/rs=w:600,h:300,cg:true_1.jpeg",
        category: "Climate Summit"
    },
    {
        date: "Oct 29, 2023",
        title: "5 hectares of an old quarry restored in Thiès, Senegal",
        summary: "In partnership with DEFCCS and ASERGMV, native species were planted to combat flooding and climate change.",
        image: "/assets/news/rs=w:388,h:194,cg:true_4.jpeg",
        category: "Restoration"
    },
    {
        date: "Oct 29, 2023",
        title: "Arabia CSR Awards event in UAE",
        summary: "Leadership highlighted sustainability wins alongside regional champions at this prestigious recognition ceremony.",
        image: "/assets/news/rs=w:388,h:194,cg:true_5.jpeg",
        category: "Recognition"
    },
    {
        date: "Oct 29, 2023",
        title: "Participation at the Africa Diaspora Network's Beyond Remittance",
        summary: "CEO Ramatoulaye Diallo N'Diaye catalyzed partnerships with innovators, entrepreneurs, and investors.",
        image: "/assets/news/rs=w:388,h:194,cg:true_6.jpeg",
        category: "Partnership"
    },
    {
        date: "Sep 22, 2023",
        title: "Meeting with AfDB to discuss partnership",
        summary: "Engagement with VP Kevin Kariuki reinforced GGWoA's role in Africa's climate agenda and sustainable development.",
        image: "/assets/news/rs=w:388,h:194,cg:true_7.jpeg",
        category: "Partnership"
    },
    {
        date: "Sep 20, 2023",
        title: "Private sector engagement event planning in Senegal",
        summary: "Discussions with President Macky Sall to champion Dakar's January 2024 convening of global leaders.",
        image: "/assets/news/rs=w:388,h:194,cg:true_8.jpeg",
        category: "Engagement"
    },
    {
        date: "Sep 20, 2023",
        title: "Climate and Capital event during UNGA78",
        summary: "LG Nova and GGWoA explored investment pathways born from climate opportunity and sustainable innovation.",
        image: "/assets/news/rs=w:388,h:194,cg:true_9.jpeg",
        category: "Finance"
    },
    {
        date: "Aug 7, 2023",
        title: "Partnership with Afriwocc",
        summary: "Highlighting women-led inclusion at the African Women and Children Inclusion & Climate Action Conference.",
        image: "/assets/news/rs=w:388,h:194,cg:true_10.jpeg",
        category: "Inclusion"
    },
    {
        date: "Jun 5, 2023",
        title: "Private sector engagement in Niger",
        summary: "Collaboration with the Issoufou Mahamadou Foundation to grow human capital and biodiversity protection.",
        image: "/assets/news/rs=w:388,h:194,cg:true_11.jpeg",
        category: "Partnership"
    },
    {
        date: "Dec 12, 2022",
        title: "Official launch of GGWoA Foundation",
        summary: "Grand Patron H.E. Olusegun Obasanjo joined the CEO at the US-Africa Summit in Washington DC.",
        image: "/assets/news/rs=w:388,h:194,cg:true_12.jpeg",
        category: "Launch"
    },
    {
        date: "Nov 2, 2022",
        title: "Residence of Artists in Benguerir, Morocco",
        summary: "Project IMAGINE united art with ecological stewardship in North Africa through creative collaboration.",
        image: "/assets/news/rs=w:388,h:194,cg:true_13.jpeg",
        category: "Cultural Initiative"
    },
    {
        date: "Oct 29, 2022",
        title: "Chairman's first official travel",
        summary: "Ambassador Sidikou strengthened partnerships during a strategic delegation to Morocco.",
        image: "/assets/news/rs=w:388,h:194,cg:true_14.jpeg",
        category: "Diplomacy"
    },
    {
        date: "Sep 27, 2022",
        title: "Chairman announcement",
        summary: "Ambassador Maman Sidikou named Chairman of the Board, bringing decades of diplomatic leadership.",
        image: "/assets/news/rs=w:388,h:194,cg:true.jpeg",
        category: "Leadership"
    },
    {
        date: "Sep 19, 2022",
        title: "Meeting with Bezos Earth Fund",
        summary: "Discussing potential partnerships that scale land restoration financing across the continent.",
        image: "/assets/news/rs=w:388,h:194,cg:true_1.jpeg",
        category: "Partnership"
    },
    {
        date: "Jul 27, 2022",
        title: "Initiation of GGWoA",
        summary: "Founders met with Nigeria's former President Olusegun Obasanjo to chart the movement's beginnings.",
        image: "/assets/news/rs=w:388,h:194,cg:true_2.jpeg",
        category: "Foundation"
    },
];

function Overline({ children, light = false }: { children: ReactNode; light?: boolean }) {
    return (
        <p className={`font-accent text-xs font-semibold uppercase tracking-[0.2em] ${light ? "text-accent" : "text-accentDark"}`}>
            {children}
        </p>
    );
}

function SectionHeader({ overline, title, description }: { overline: string; title: string; description?: string }) {
    return (
        <div className="max-w-2xl">
            <Overline>{overline}</Overline>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">{title}</h2>
            {description && <p className="mt-4 text-[17px] leading-relaxed text-charcoal/75">{description}</p>}
        </div>
    );
}

function Arrow() {
    return <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>;
}

export default function NewsPage() {
    return (
        <main className="bg-offWhite text-charcoal">
            {/* Hero */}
            <section className="relative overflow-hidden bg-deepEarth">
                <div className="absolute inset-0 bg-[url('/assets/home/rs=w:1920,m.png')] bg-cover bg-center opacity-15" aria-hidden="true" />
                <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
                    <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 font-accent text-xs uppercase tracking-wider text-offWhite/60">
                        <Link href="/" className="hover:text-offWhite transition-colors">Home</Link>
                        <span aria-hidden="true">/</span>
                        <span className="font-semibold text-offWhite">News</span>
                    </nav>
                    <AnimationWrapper className="max-w-2xl">
                        <Overline light>Newsroom</Overline>
                        <h1 className="mt-3 font-heading text-4xl font-bold leading-tight tracking-tight text-offWhite sm:text-5xl">
                            Latest Updates
                        </h1>
                        <p className="mt-5 text-lg leading-relaxed text-offWhite/80">
                            Stories driving the world&apos;s most ambitious restoration effort. From summit halls to field immersions, follow every milestone of the Great Green Wall as we transform landscapes and empower communities across the continent.
                        </p>
                    </AnimationWrapper>
                </div>
            </section>

            {/* Featured story */}
            <section className="px-4 py-16 md:px-6 md:py-20">
                <div className="mx-auto max-w-6xl">
                    <SectionHeader overline="Featured story" title="Breaking News" />
                    <AnimationWrapper className="mt-10" animationDelay="0.1s">
                        <article className="group grid grid-cols-1 overflow-hidden rounded border border-deepEarth/10 border-t-2 border-t-accent bg-white lg:grid-cols-12">
                            <div className="relative min-h-[300px] lg:col-span-7 lg:min-h-[440px]">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    priority
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                    sizes="(max-width: 1024px) 100vw, 58vw"
                                />
                                <span className="absolute left-4 top-4 rounded border border-accent/60 bg-primary px-3 py-1 font-accent text-[11px] font-semibold uppercase tracking-wider text-accent">
                                    {feature.category}
                                </span>
                            </div>
                            <div className="flex flex-col justify-center p-8 lg:col-span-5 lg:p-12">
                                <p className="font-accent text-xs uppercase tracking-wider text-charcoal/60">
                                    {feature.date} <span aria-hidden="true">·</span> {feature.readTime}
                                </p>
                                <h3 className="mt-3 font-heading text-3xl font-bold leading-tight text-deepEarth transition-colors group-hover:text-primary">
                                    {feature.title}
                                </h3>
                                <p className="mt-4 leading-relaxed text-charcoal/75">{feature.summary}</p>
                                <Link
                                    href={feature.href}
                                    className="mt-8 inline-flex items-center gap-2 self-start rounded bg-primary px-6 py-3 text-sm font-semibold text-offWhite transition-colors hover:bg-primaryDark"
                                >
                                    Read full story <Arrow />
                                </Link>
                            </div>
                        </article>
                    </AnimationWrapper>
                </div>
            </section>

            {/* Recent stories */}
            <section className="border-y border-deepEarth/10 bg-warmGray px-4 py-16 md:px-6 md:py-20">
                <div className="mx-auto max-w-6xl">
                    <SectionHeader
                        overline="Latest news"
                        title="Recent Stories"
                        description="Stay updated with our latest milestones, achievements, and insights from across the Great Green Wall initiative."
                    />
                    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                        {spotlights.map((article, index) => (
                            <AnimationWrapper key={article.title} animationDelay={`${0.1 + index * 0.08}s`}>
                                <article className="group flex h-full flex-col overflow-hidden rounded border border-deepEarth/10 bg-white transition-colors hover:border-primary/40">
                                    <div className="relative aspect-[16/10] flex-shrink-0 overflow-hidden">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <span className="absolute left-4 top-4 rounded bg-secondary px-2.5 py-1 font-accent text-[11px] font-semibold uppercase tracking-wider text-deepEarth">
                                            {article.category}
                                        </span>
                                    </div>
                                    <div className="flex flex-1 flex-col p-6">
                                        <p className="font-accent text-xs uppercase tracking-wider text-charcoal/60">
                                            {article.date} <span aria-hidden="true">·</span> {article.readTime}
                                        </p>
                                        <h3 className="mt-2 font-heading text-2xl font-semibold leading-snug text-deepEarth transition-colors group-hover:text-primary">
                                            {article.title}
                                        </h3>
                                        <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/75">{article.summary}</p>
                                        <Link
                                            href="/news"
                                            className="mt-5 inline-flex items-center gap-1 self-start font-accent text-xs font-semibold uppercase tracking-wider text-primary"
                                        >
                                            Read more <Arrow />
                                        </Link>
                                    </div>
                                </article>
                            </AnimationWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* Archive */}
            <section className="px-4 py-16 md:px-6 md:py-20">
                <div className="mx-auto max-w-6xl">
                    <SectionHeader
                        overline="Archive"
                        title="A Full Chronology of Milestones"
                        description="Every headline reflects our mandate—championing culture, policy, climate action, and partnerships across the continent."
                    />
                    <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {archive.map((item, index) => (
                            <AnimationWrapper key={`${item.date}-${item.title}`} animationDelay={`${0.05 + index * 0.03}s`}>
                                <article className="group flex h-full gap-4 rounded border border-deepEarth/10 bg-white p-4 transition-colors hover:border-primary/40">
                                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            sizes="80px"
                                        />
                                    </div>
                                    <div className="flex min-w-0 flex-1 flex-col">
                                        <p className="font-accent text-[11px] uppercase tracking-wider text-charcoal/60">{item.date}</p>
                                        <h3 className="mt-1 font-heading text-base font-semibold leading-snug text-deepEarth transition-colors group-hover:text-primary">
                                            {item.title}
                                        </h3>
                                        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-charcoal/70">{item.summary}</p>
                                        <div className="mt-auto flex items-center justify-between pt-3">
                                            <span className="rounded bg-secondary px-2 py-0.5 font-accent text-[10px] font-semibold uppercase tracking-wider text-deepEarth">
                                                {item.category}
                                            </span>
                                            <Link href="/news" className="inline-flex items-center gap-1 font-accent text-[11px] font-semibold uppercase tracking-wider text-primary">
                                                Read <Arrow />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            </AnimationWrapper>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded border-[1.5px] border-primary px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-offWhite"
                        >
                            Load more stories
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="border-t-2 border-accent bg-primary px-4 py-16 md:px-6 md:py-20">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-12">
                    <div className="lg:col-span-6">
                        <Overline light>Stay connected</Overline>
                        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-offWhite sm:text-4xl">Join Our Journey</h2>
                        <p className="mt-4 text-[17px] leading-relaxed text-offWhite/80">
                            Get the latest stories, milestones, and insights from the Great Green Wall delivered directly to your inbox.
                        </p>
                    </div>
                    <div className="lg:col-span-6">
                        <form className="flex flex-col gap-3 sm:flex-row">
                            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                            <input
                                id="newsletter-email"
                                type="email"
                                placeholder="Enter your email"
                                autoComplete="email"
                                className="flex-1 rounded border border-offWhite/25 bg-offWhite/10 px-4 py-3.5 text-offWhite placeholder:text-offWhite/50 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                                required
                            />
                            <button
                                type="submit"
                                className="rounded bg-accent px-7 py-3.5 text-sm font-semibold text-deepEarth transition-colors hover:bg-accentDark"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="mt-3 text-sm text-offWhite/60">Join 10,000+ subscribers. Unsubscribe anytime.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
