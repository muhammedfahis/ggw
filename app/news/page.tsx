import Image from "next/image";
import Link from "next/link";
import AnimationWrapper from "@/components/AnimationWrapper";

export const metadata = {
    title: "News | GGWoA Foundation",
};

const feature = {
    title: "Great Green Wall leaders convene at COP28",
    summary: "GGWoA and ministerial partners unveiled a regenerative finance roadmap, uniting culture, policy, and climate innovators in a groundbreaking initiative that promises to reshape Africa's ecological future.",
    date: "Dec 4, 2024",
    image: "/assets/news/rs=w:1920,m.jpeg",
    href: "/news/cop28-briefing",
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
        date: "Dec 15, 2023",
        title: "COP28 retrospective",
        summary: "A defining year of action where GGWoA helped mobilize private sector capital toward 2030 goals through innovative financing mechanisms.",
        image: "/assets/news/rs=w:600,h:300,cg:true.jpeg",
        category: "Annual Review"
    },
    {
        date: "Sep 30, 2023",
        title: "Announcement of GGWoA participation at COP28",
        summary: "Partnering with PAGGW and AU GGWI to present an accelerated action plan in Dubai that promises transformative impact.",
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

export default function NewsPage() {
    return (
        <main className="bg-offWhite text-charcoal min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/assets/home/rs=w:1920,m.jpeg')] bg-cover bg-center opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/60 to-primary/80"></div>
                </div>
                <div className="relative z-10 px-6 md:px-12 lg:px-32 py-[120px] md:py-[140px] lg:py-[160px]">
                    <div className="max-w-6xl mx-auto text-center">
                        <AnimationWrapper className="space-y-8" animationDelay="0s">
                            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6" style={{animationDelay: '0.2s'}}>NEWSROOM</p>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-offWhite mb-8 leading-tight" style={{animationDelay: '0.4s'}}>
                                Latest Updates
                            </h1>
                            <p className="text-xl md:text-2xl lg:text-3xl text-offWhite/90 max-w-4xl mx-auto leading-relaxed" style={{animationDelay: '0.6s'}}>
                                Stories driving the world's most ambitious restoration effort. From summit halls to field immersions, follow every milestone of the Great Green Wall as we transform landscapes and empower communities across the continent.
                            </p>
                        </AnimationWrapper>
                    </div>
                </div>
            </section>

            {/* Featured Story */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <AnimationWrapper animationDelay="0s">
                            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6" style={{animationDelay: '0.2s'}}>FEATURED STORY</p>
                        </AnimationWrapper>
                        <AnimationWrapper animationDelay="0.1s">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deepEarth mb-8 leading-tight">
                                Breaking News
                            </h2>
                        </AnimationWrapper>
                        <AnimationWrapper animationDelay="0.2s">
                            <div className="w-32 h-1 bg-accent mx-auto mb-8"></div>
                        </AnimationWrapper>
                    </div>
                    
                    <AnimationWrapper animationDelay="0.3s">
                        <article className="group cursor-pointer">
                        <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border border-accent/20">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                {/* Image Section */}
                                <div className="relative h-96 lg:h-full min-h-[500px] overflow-hidden">
                                    <Image 
                                        src={feature.image} 
                                        alt={feature.title} 
                                        fill 
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                                    
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-accent text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                                            {feature.category}
                                        </span>
                                    </div>
                                    
                                    {/* Read Time Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-2 rounded-full text-xs font-semibold">
                                            {feature.readTime}
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Content Section */}
                                <div className="p-12 lg:p-16 flex flex-col justify-center">
                                    <div className="space-y-6">
                                        <p className="font-accent text-xs uppercase tracking-wider text-accent">{feature.date}</p>
                                        <h3 className="text-3xl lg:text-4xl font-heading font-bold text-deepEarth leading-tight group-hover:text-primary transition-colors duration-300">
                                            {feature.title}
                                        </h3>
                                        <p className="text-lg lg:text-xl text-charcoal/80 leading-relaxed">
                                            {feature.summary}
                                        </p>
                                        <Link 
                                            href={feature.href} 
                                            className="inline-flex items-center gap-3 text-accent font-semibold hover:text-primary transition-colors duration-300 group/link"
                                        >
                                            Read Full Story
                                            <svg className="w-5 h-5 transition-transform group-hover/link:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    </AnimationWrapper>
                </div>
            </section>

            {/* Latest News */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-secondary">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <AnimationWrapper animationDelay="0s">
                            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6" style={{animationDelay: '0.2s'}}>LATEST NEWS</p>
                        </AnimationWrapper>
                        <AnimationWrapper animationDelay="0.1s">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deepEarth mb-8 leading-tight">
                                Recent Stories
                            </h2>
                        </AnimationWrapper>
                        <AnimationWrapper animationDelay="0.2s">
                            <div className="w-32 h-1 bg-accent mx-auto mb-8"></div>
                        </AnimationWrapper>
                        <AnimationWrapper animationDelay="0.3s">
                            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
                                Stay updated with our latest milestones, achievements, and insights from across the Great Green Wall initiative.
                            </p>
                        </AnimationWrapper>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
                        {spotlights.map((article, index) => (
                            <AnimationWrapper key={article.title} animationDelay={`${0.4 + index * 0.15}s`}>
                                <article className="group cursor-pointer h-full flex flex-col">
                                    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border border-accent/20 h-full flex flex-col">
                                    {/* Image Section */}
                                    <div className="relative h-72 lg:h-80 overflow-hidden flex-shrink-0">
                                        <Image 
                                            src={article.image} 
                                            alt={article.title} 
                                            fill 
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                                        
                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                                                {article.category}
                                            </span>
                                        </div>
                                        
                                        {/* Read Time Badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-semibold">
                                                {article.readTime}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* Content Section */}
                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="space-y-6 flex-1 flex flex-col justify-between">
                                            <div className="space-y-6 flex-1">
                                                <p className="font-accent text-xs uppercase tracking-wider text-accent">{article.date}</p>
                                                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-deepEarth leading-tight group-hover:text-primary transition-colors duration-300">
                                                    {article.title}
                                                </h3>
                                                <p className="text-lg text-charcoal/80 leading-relaxed flex-1">
                                                    {article.summary}
                                                </p>
                                            </div>
                                            <Link 
                                                href="/news" 
                                                className="inline-flex items-center gap-2 text-accent font-semibold hover:text-primary transition-colors duration-300 group/link"
                                            >
                                                Read More
                                                <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            </AnimationWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* Archive Section */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <AnimationWrapper animationDelay="0s">
                            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6" style={{animationDelay: '0.2s'}}>ARCHIVE</p>
                        </AnimationWrapper>
                        <AnimationWrapper animationDelay="0.1s">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deepEarth mb-8 leading-tight">
                                A Full Chronology of Milestones
                            </h2>
                        </AnimationWrapper>
                        <AnimationWrapper animationDelay="0.2s">
                            <div className="w-32 h-1 bg-accent mx-auto mb-8"></div>
                        </AnimationWrapper>
                        <AnimationWrapper animationDelay="0.3s">
                            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
                                Every headline reflects our mandate—championing culture, policy, climate action, and partnerships across the continent.
                            </p>
                        </AnimationWrapper>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {archive.map((item, index) => (
                            <AnimationWrapper key={`${item.date}-${item.title}`} animationDelay={`${0.4 + index * 0.05}s`}>
                                <article className="group cursor-pointer bg-secondary rounded-3xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-accent/20">
                                    <div className="flex items-start gap-4">
                                    <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 border-accent/20">
                                        <Image 
                                            src={item.image} 
                                            alt={item.title} 
                                            fill 
                                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                                            sizes="80px"
                                        />
                                    </div>
                                    <div className="flex-1 space-y-3">
                                        <div>
                                            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-2">{item.date}</p>
                                            <h4 className="text-lg font-heading font-bold text-deepEarth leading-tight group-hover:text-primary transition-colors duration-300">
                                                {item.title}
                                            </h4>
                                        </div>
                                        <p className="text-sm text-charcoal/80 leading-relaxed line-clamp-3">
                                            {item.summary}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="inline-block px-3 py-1 bg-accent/20 text-primary rounded-full text-xs font-semibold">
                                                {item.category}
                                            </span>
                                            <Link 
                                                href="/news" 
                                                className="text-accent font-semibold hover:text-primary transition-colors duration-300 text-sm inline-flex items-center gap-1"
                                            >
                                                Read
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            </AnimationWrapper>
                        ))}
                    </div>
                    
                    {/* Load More */}
                    <div className="text-center mt-16">
                        <button className="bg-offWhite text-primary px-10 py-5 rounded-full font-semibold text-lg hover:bg-offWhite/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3">
                            Load More Stories
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-gradient-to-br from-primary via-deepEarth to-primary">
                <div className="max-w-4xl mx-auto text-center">
                    <AnimationWrapper className="space-y-8" animationDelay="0s">
                        <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6" style={{animationDelay: '0.2s'}}>STAY CONNECTED</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-offWhite mb-8 leading-tight" style={{animationDelay: '0.4s'}}>
                            Join Our Journey
                        </h2>
                        <p className="text-xl md:text-2xl text-offWhite/90 mb-12 leading-relaxed max-w-3xl mx-auto" style={{animationDelay: '0.6s'}}>
                            Get the latest stories, milestones, and insights from the Great Green Wall delivered directly to your inbox.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" style={{animationDelay: '0.8s'}}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-offWhite placeholder-white/60 transition-all duration-300"
                                required
                            />
                            <button type="submit" className="bg-offWhite text-primary px-10 py-4 rounded-full font-semibold text-lg hover:bg-offWhite/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3">
                                Subscribe
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                                </svg>
                            </button>
                        </form>
                        <p className="text-sm text-offWhite/60 mt-6" style={{animationDelay: '1.0s'}}>
                            Join 10,000+ subscribers. Unsubscribe anytime.
                        </p>
                    </AnimationWrapper>
                </div>
            </section>
        </main>
    );
}
