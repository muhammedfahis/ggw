import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Projects | GGWoA Foundation",
};

const initiatives = [
    {
        title: "COP28 Pre-summit Series",
        summary: "Aligning climate, education, food security, health, and culture coalitions to accelerate 2030 commitments through unprecedented cross-sector collaboration.",
        image: "/assets/projects/rs=w:365,h:365,cg:true.jpeg",
        tags: ["Policy", "Culture", "Finance"],
        category: "Climate Summit",
        status: "Active",
        location: "Global",
        impact: "12 Countries Engaged",
        href: "/projects/cop28-pre-summit"
    },
    {
        title: "Thiès Forest Restoration",
        summary: "Transforming former mining land through native planting, water harvesting, and youth employment to create sustainable ecosystems and livelihoods.",
        image: "/assets/projects/rs=w:365,h:365,cg:true_1.jpeg",
        tags: ["Land restoration", "Youth jobs"],
        category: "Restoration",
        status: "Active",
        location: "Thiès Region, Senegal",
        impact: "5 Hectares Restored",
        href: "/projects/thies-forest"
    },
    {
        title: "SCALE",
        summary: "Scaling climate-resilient livelihoods along the Great Green Wall with regenerative agriculture hubs that empower local communities.",
        image: "/assets/projects/rs=w:365,h:365,cg:true_2.jpeg",
        tags: ["Agriculture", "Finance"],
        category: "Livelihoods",
        status: "Active",
        location: "Multiple Regions",
        impact: "300+ Farmers Trained",
        href: "/projects/scale"
    },
    {
        title: "IMAGINE-1",
        summary: "Pan-African creative campaign reframing the wall through music, film, and immersive art to inspire global action and local pride.",
        image: "/assets/projects/rs=w:365,h:365,cg:true_3.jpeg",
        tags: ["Culture", "Storytelling"],
        category: "Arts & Culture",
        status: "Active",
        location: "Lagos, Nigeria",
        impact: "50+ Artists Engaged",
        href: "/projects/imagine-1"
    },
    {
        title: "ENGAGE",
        summary: "Community assemblies in 30+ villages to co-design adaptation plans and governance charters that ensure local ownership and success.",
        image: "/assets/projects/rs=w:365,h:365,cg:true_4.jpeg",
        tags: ["Community", "Policy"],
        category: "Governance",
        status: "Active",
        location: "30+ Villages",
        impact: "2,000+ Community Members",
        href: "/projects/engage"
    },
    {
        title: "WORK",
        summary: "Job awareness labs highlighting the climate careers unlocked by the Great Green Wall, connecting youth with green employment opportunities.",
        image: "/assets/projects/rs=w:365,h:365,cg:true,m.jpeg",
        tags: ["Jobs", "Education"],
        category: "Education",
        status: "Planning",
        location: "Niamey & Ndjamena",
        impact: "450 Youth Reached",
        href: "/projects/work"
    },
];

const workstreams = [
    {
        title: "Regenerative Land Systems",
        detail: "Restoring soil, water, and biodiversity with agroforestry corridors, dune stabilization, and climate-resilient crops.",
        icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.71c.16-.46.38-.86.66-1.22C9.47 15.97 12.99 12 17 12V8z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>,
        color: "from-green-600 to-green-800"
    },
    {
        title: "Culture & Narrative",
        detail: "Film, music, and design collaborations that make stewardship aspirational and mobilize global allies.",
        icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
        color: "from-purple-600 to-purple-800"
    },
    {
        title: "Education & Skills",
        detail: "Eco-curricula, early learning canopies, and technical academies preparing youth for green careers.",
        icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>,
        color: "from-blue-600 to-blue-800"
    },
    {
        title: "Finance & Governance",
        detail: "Blended finance vehicles, public policy design, and data systems that keep value in communities.",
        icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>,
        color: "from-amber-600 to-amber-800"
    },
];

const impactStats = [
    { value: "12", label: "Countries", detail: "Active engagement" },
    { value: "6", label: "Flagship Initiatives", detail: "Currently active" },
    { value: "4", label: "Core Workstreams", detail: "Strategic pillars" },
];

export default function ProjectsPage() {
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
                        <div className="space-y-8">
                            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">FLAGSHIP PROGRAMMES</p>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-offWhite mb-8 leading-tight">
                                Shaping the World's Largest Living Structure
                            </h1>
                            <p className="text-xl md:text-2xl lg:text-3xl text-offWhite/90 max-w-4xl mx-auto leading-relaxed mb-12">
                                Each initiative combines policy influence, cultural momentum, and community-owned implementation to accelerate the Great Green Wall mandate across the African continent.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link href="/contact" className="bg-offWhite text-primary px-10 py-5 rounded-full font-semibold text-lg hover:bg-offWhite/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3">
                                    Partner With Us
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
                                    </svg>
                                </Link>
                                <Link href="#initiatives" className="border border-offWhite text-offWhite px-10 py-5 rounded-full font-semibold text-lg hover:bg-offWhite hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3">
                                    Browse Projects
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Stats Section */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">IMPACT AT A GLANCE</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deepEarth mb-8 leading-tight">
                            Our Reach Across Africa
                        </h2>
                        <div className="w-32 h-1 bg-accent mx-auto mb-8"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {impactStats.map((stat, index) => (
                            <div 
                                key={stat.label}
                                className="text-center bg-secondary rounded-3xl p-12 shadow-lg border border-accent/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="text-5xl lg:text-6xl font-heading font-bold text-primary mb-4">{stat.value}</div>
                                <div className="text-xl font-semibold text-deepEarth mb-2">{stat.label}</div>
                                <div className="text-charcoal/70 leading-relaxed">{stat.detail}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Initiatives Grid */}
            <section id="initiatives" className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-offWhite">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-20">
                        <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">ACTIVE INITIATIVES</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deepEarth mb-8 leading-tight">
                            Flagship Programs
                        </h2>
                        <div className="w-32 h-1 bg-accent mb-8"></div>
                        <p className="text-xl text-charcoal/80 max-w-3xl">
                            From policy summits to forest restoration, each initiative demonstrates our integrated approach to climate action.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {initiatives.map((initiative, index) => (
                            <article 
                                key={initiative.title} 
                                className="group cursor-pointer"
                            >
                                <Link href={initiative.href}>
                                    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border border-accent/20">
                                        {/* Image Section */}
                                        <div className="relative h-72 lg:h-80 overflow-hidden">
                                            <Image 
                                                src={initiative.image} 
                                                alt={initiative.title} 
                                                fill 
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                                            
                                            {/* Status Badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase backdrop-blur-sm ${
                                                    initiative.status === 'Active' 
                                                        ? 'bg-green-500/90 text-white' 
                                                        : 'bg-blue-500/90 text-white'
                                                }`}>
                                                    {initiative.status}
                                                </span>
                                            </div>
                                            
                                            {/* Location Badge */}
                                            <div className="absolute top-4 right-4">
                                                <span className="bg-white/90 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2">
                                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                                    </svg>
                                                    {initiative.location}
                                                </span>
                                            </div>
                                            
                                            {/* Impact Badge */}
                                            <div className="absolute bottom-4 left-4">
                                                <span className="bg-accent text-primary px-4 py-2 rounded-full text-xs font-bold">
                                                    {initiative.impact}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        {/* Content Section */}
                                        <div className="p-8">
                                            <div className="space-y-6">
                                                {/* Category Tags */}
                                                <div className="flex flex-wrap gap-2">
                                                    {initiative.tags.map((tag) => (
                                                        <span key={tag} className="px-3 py-1 bg-secondary/50 text-primary rounded-full text-xs font-semibold">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                
                                                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-deepEarth leading-tight group-hover:text-primary transition-colors duration-300">
                                                    {initiative.title}
                                                </h3>
                                                
                                                <p className="text-charcoal/80 leading-relaxed line-clamp-3 text-lg">
                                                    {initiative.summary}
                                                </p>
                                                
                                                <div className="flex items-center justify-between pt-6 border-t border-charcoal/10">
                                                    <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                                                        {initiative.category}
                                                    </span>
                                                    <div className="flex items-center gap-2 text-accent font-semibold group-hover:text-primary transition-colors duration-300">
                                                        <span className="text-sm">View Project</span>
                                                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Workstreams Section */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-secondary">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">STRATEGIC WORKSTREAMS</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deepEarth mb-8 leading-tight">
                            Our Core Pillars
                        </h2>
                        <div className="w-32 h-1 bg-accent mx-auto mb-8"></div>
                        <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
                            We design multi-year coalitions with ministries, traditional leaders, investors, and creative industries to ensure restoration is measurable and inclusive.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {workstreams.map((stream, index) => (
                            <div 
                                key={stream.title}
                                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-accent/20"
                            >
                                <div className={`w-20 h-20 bg-gradient-to-br ${stream.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    {stream.icon}
                                </div>
                                <h3 className="text-xl font-heading font-bold text-deepEarth mb-4 group-hover:text-primary transition-colors duration-300">
                                    {stream.title}
                                </h3>
                                <p className="text-charcoal/80 leading-relaxed mb-6">
                                    {stream.detail}
                                </p>
                                <div className="pt-6 border-t border-charcoal/10">
                                    <Link href="/about" className="text-accent font-semibold hover:text-primary transition-colors duration-300 inline-flex items-center gap-2">
                                        Learn More
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Get Involved CTA */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-gradient-to-br from-primary via-deepEarth to-primary">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="space-y-8">
                        <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">JOIN THE MOVEMENT</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-offWhite mb-8 leading-tight">
                            Shape the Future of African Restoration
                        </h2>
                        <p className="text-xl md:text-2xl text-offWhite/90 mb-12 leading-relaxed max-w-3xl mx-auto">
                            Whether you're a funder, technical expert, community organization, or passionate advocate—there's a place for you in the Great Green Wall story.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact" className="bg-offWhite text-primary px-10 py-5 rounded-full font-semibold text-lg hover:bg-offWhite/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3">
                                Partner With Us
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
                                </svg>
                            </Link>
                            <Link href="/leadership" className="border border-offWhite text-offWhite px-10 py-5 rounded-full font-semibold text-lg hover:bg-offWhite hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3">
                                Meet the Leadership
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 7c0 2.21-1.79 4-4 4S8 9.21 8 7s1.79-4 4-4 4 1.79 4 4zm-4 6c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
