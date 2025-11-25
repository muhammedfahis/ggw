import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "News | GGWoA Foundation",
};

const feature = {
    title: "Great Green Wall leaders convene at COP28",
    summary: "GGWoA and ministerial partners unveiled a regenerative finance roadmap, uniting culture, policy, and climate innovators.",
    date: "Dec 4, 2024",
    image: "/assets/news/rs=w:1920,m.jpeg",
    href: "/news/cop28-briefing",
};

const spotlights = [
    {
        title: "Thiès restoration site reaches 92% tree survival",
        summary: "Community cooperatives piloted new water-harvesting designs that now inform regional scale plans.",
        date: "Nov 18, 2024",
        image: "/assets/news/rs=w:388,h:194,cg:true.jpeg",
    },
    {
        title: "IMAGINE-1 creative tour launches in Lagos",
        summary: "Artists, filmmakers, and designers co-created immersive experiences to reframe land stewardship.",
        date: "Oct 27, 2024",
        image: "/assets/news/rs=w:388,h:194,cg:true_1.jpeg",
    },
    {
        title: "Youth climate labs open in Niamey & Ndjamena",
        summary: "Early learning canopies double as entrepreneurship hubs equipping young people for green careers.",
        date: "Oct 10, 2024",
        image: "/assets/news/rs=w:388,h:194,cg:true_2.jpeg",
    },
    {
        title: "Diaspora fund backs microgrants for community water systems",
        summary: "The ENGAGE programme mobilized diaspora capital to expand solar-powered boreholes.",
        date: "Sep 25, 2024",
        image: "/assets/news/rs=w:388,h:194,cg:true_3.jpeg",
    },
];

const archive = [
    {
        date: "Dec 15, 2023",
        title: "COP28 retrospective",
        summary: "A defining year of action where GGWoA helped mobilize private sector capital toward 2030 goals.",
        image: "/assets/news/rs=w:600,h:300,cg:true.jpeg",
    },
    {
        date: "Sep 30, 2023",
        title: "Announcement of GGWoA participation at COP28",
        summary: "Partnering with PAGGW and AU GGWI to present an accelerated action plan in Dubai.",
        image: "/assets/news/rs=w:600,h:300,cg:true_1.jpeg",
    },
    {
        date: "Oct 29, 2023",
        title: "5 hectares of an old quarry restored in Thiès, Senegal",
        summary: "In partnership with DEFCCS and ASERGMV, native species were planted to combat flooding and climate change.",
        image: "/assets/news/rs=w:388,h:194,cg:true_4.jpeg",
    },
    {
        date: "Oct 29, 2023",
        title: "Arabia CSR Awards event in UAE",
        summary: "Leadership highlighted sustainability wins alongside regional champions.",
        image: "/assets/news/rs=w:388,h:194,cg:true_5.jpeg",
    },
    {
        date: "Oct 29, 2023",
        title: "Participation at the Africa Diaspora Network’s Beyond Remittance",
        summary: "CEO Ramatoulaye Diallo N’Diaye catalyzed partnerships with innovators, entrepreneurs, and investors.",
        image: "/assets/news/rs=w:388,h:194,cg:true_6.jpeg",
    },
    {
        date: "Sep 22, 2023",
        title: "Meeting with AfDB to discuss partnership",
        summary: "Engagement with VP Kevin Kariuki reinforced GGWoA’s role in Africa’s climate agenda.",
        image: "/assets/news/rs=w:388,h:194,cg:true_7.jpeg",
    },
    {
        date: "Sep 20, 2023",
        title: "Private sector engagement event planning in Senegal",
        summary: "Discussions with President Macky Sall to champion Dakar’s January 2024 convening.",
        image: "/assets/news/rs=w:388,h:194,cg:true_8.jpeg",
    },
    {
        date: "Sep 20, 2023",
        title: "Climate and Capital event during UNGA78",
        summary: "LG Nova and GGWoA explored investment pathways born from climate opportunity.",
        image: "/assets/news/rs=w:388,h:194,cg:true_9.jpeg",
    },
    {
        date: "Aug 7, 2023",
        title: "Partnership with Afriwocc",
        summary: "Highlighting women-led inclusion at the African Women and Children Inclusion & Climate Action Conference.",
        image: "/assets/news/rs=w:388,h:194,cg:true_10.jpeg",
    },
    {
        date: "Jun 5, 2023",
        title: "Private sector engagement in Niger",
        summary: "Collaboration with the Issoufou Mahamadou Foundation to grow human capital and biodiversity protection.",
        image: "/assets/news/rs=w:388,h:194,cg:true_11.jpeg",
    },
    {
        date: "Dec 12, 2022",
        title: "Official launch of GGWoA Foundation",
        summary: "Grand Patron H.E. Olusegun Obasanjo joined the CEO at the US-Africa Summit in Washington DC.",
        image: "/assets/news/rs=w:388,h:194,cg:true_12.jpeg",
    },
    {
        date: "Nov 2, 2022",
        title: "Residence of Artists in Benguerir, Morocco",
        summary: "Project IMAGINE united art with ecological stewardship in North Africa.",
        image: "/assets/news/rs=w:388,h:194,cg:true_13.jpeg",
    },
    {
        date: "Oct 29, 2022",
        title: "Chairman’s first official travel",
        summary: "Ambassador Sidikou strengthened partnerships during a strategic delegation to Morocco.",
        image: "/assets/news/rs=w:388,h:194,cg:true_14.jpeg",
    },
    {
        date: "Sep 27, 2022",
        title: "Chairman announcement",
        summary: "Ambassador Maman Sidikou named Chairman of the Board, bringing decades of diplomatic leadership.",
        image: "/assets/news/rs=w:388,h:194,cg:true.jpeg",
    },
    {
        date: "Sep 19, 2022",
        title: "Meeting with Bezos Earth Fund",
        summary: "Discussing potential partnerships that scale land restoration financing.",
        image: "/assets/news/rs=w:388,h:194,cg:true_1.jpeg",
    },
    {
        date: "Jul 27, 2022",
        title: "Initiation of GGWoA",
        summary: "Founders met with Nigeria’s former President Olusegun Obasanjo to chart the movement’s beginnings.",
        image: "/assets/news/rs=w:388,h:194,cg:true_2.jpeg",
    },
];

export default function NewsPage() {
    return (
        <main className="bg-ggwBg text-ggwDark">
            <section className="py-20">
                <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Newsroom</p>
                    <h1 className="mt-4 text-4xl font-semibold md:text-5xl">Stories driving the world&apos;s most ambitious restoration effort.</h1>
                    <p className="mt-4 text-lg text-ggwDark/80">From summit halls to field immersions, follow every milestone of the Great Green Wall of Africa.</p>
                </div>
            </section>

            <section className="pb-20">
                <div className="mx-auto max-w-6xl px-4 md:px-6">
                    <article className="overflow-hidden rounded-[40px] border border-ggwDark/5 bg-white shadow-sm md:grid md:grid-cols-2">
                        <div className="relative h-80 md:h-full">
                            <Image src={feature.image} alt={feature.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                        <div className="space-y-4 px-6 py-8 md:px-10 md:py-12">
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">{feature.date}</p>
                            <h2 className="text-3xl font-semibold">{feature.title}</h2>
                            <p className="text-sm text-ggwDark/80">{feature.summary}</p>
                            <Link href={feature.href} className="inline-flex text-sm font-semibold text-ggwGreen hover:text-ggwDark">
                                Read briefing →
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

            <section className="pb-20">
                <div className="mx-auto max-w-6xl px-4 md:px-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        {spotlights.map((article) => (
                            <article key={article.title} className="overflow-hidden rounded-[32px] border border-ggwDark/5 bg-white shadow-sm">
                                <div className="relative h-56">
                                    <Image src={article.image} alt={article.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                                </div>
                                <div className="space-y-3 px-6 py-6">
                                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">{article.date}</p>
                                    <h3 className="text-2xl font-semibold">{article.title}</h3>
                                    <p className="text-sm text-ggwDark/80">{article.summary}</p>
                                    <Link href="/news" className="text-sm font-semibold text-ggwGreen hover:text-ggwDark">
                                        Read more →
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pb-24">
                <div className="mx-auto max-w-6xl rounded-[40px] border border-ggwDark/5 bg-white/90 px-4 py-12 shadow-sm md:px-8 md:py-16">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Archive</p>
                            <h3 className="mt-3 text-3xl font-semibold">A full chronology of milestones.</h3>
                        </div>
                        <p className="max-w-xl text-sm text-ggwDark/70">
                            Every headline reflects the mandate outlined on the official GGWoA site—championing culture, policy, climate action, and partnerships.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        {archive.map((item) => (
                            <article key={`${item.date}-${item.title}`} className="rounded-[28px] border border-ggwDark/5 bg-ggwBg/80 p-5">
                                <div className="flex items-center gap-4">
                                    <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-ggwDark/10">
                                        <Image src={item.image} alt={item.title} fill className="object-cover" sizes="64px" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">{item.date}</p>
                                        <h4 className="text-lg font-semibold">{item.title}</h4>
                                    </div>
                                </div>
                                <p className="mt-3 text-sm text-ggwDark/80">{item.summary}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
