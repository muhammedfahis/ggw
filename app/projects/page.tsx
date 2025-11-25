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
        icon: "🌱",
        color: "from-green-600 to-green-800"
    },
    {
        title: "Culture & Narrative",
        detail: "Film, music, and design collaborations that make stewardship aspirational and mobilize global allies.",
        icon: "🎭",
        color: "from-purple-600 to-purple-800"
    },
    {
        title: "Education & Skills",
        detail: "Eco-curricula, early learning canopies, and technical academies preparing youth for green careers.",
        icon: "📚",
        color: "from-blue-600 to-blue-800"
    },
    {
        title: "Finance & Governance",
        detail: "Blended finance vehicles, public policy design, and data systems that keep value in communities.",
        icon: "💼",
        color: "from-amber-600 to-amber-800"
    },
];

export default function ProjectsPage() {
    return (
        <main className="bg-offWhite text-charcoal min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-deepEarth/90 to-primary/95"></div>
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/assets/home/rs=w:1920,m.jpeg')] bg-cover bg-center opacity-20"></div>
                </div>
                <div className="relative px-6 md:px-12 lg:px-32 py-24 md:py-32">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20 items-center">
                            <div className="lg:col-span-2">
                                <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6 animate-fade-in-up">FLAGSHIP PROGRAMMES</p>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-offWhite mb-8 leading-tight animate-slide-in-left">
                                    Shaping the World's Largest Living Structure
                                </h1>
                                <p className="text-xl md:text-2xl text-offWhite/90 max-w-3xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                                    Each initiative combines policy influence, cultural momentum, and community-owned implementation to accelerate the Great Green Wall mandate across the African continent.
                                </p>
                            </div>
                            <div className="lg:col-span-1">
                                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                                    <h3 className="text-lg font-bold text-offWhite mb-6">Impact at a Glance</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                                                <span className="text-accent font-bold text-lg">12</span>
                                            </div>
                                            <div>
                                                <p className="text-offWhite font-semibold">Countries</p>
                                                <p className="text-offWhite/70 text-sm">Active engagement</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                                                <span className="text-accent font-bold text-lg">6</span>
                                            </div>
                                            <div>
                                                <p className="text-offWhite font-semibold">Flagship Initiatives</p>
                                                <p className="text-offWhite/70 text-sm">Currently active</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                                                <span className="text-accent font-bold text-lg">4</span>
                                            </div>
                                            <div>
                                                <p className="text-offWhite font-semibold">Core Workstreams</p>
                                                <p className="text-offWhite/70 text-sm">Strategic pillars</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Controls */}
            <section className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-accent/20 z-40 px-6 md:px-12 lg:px-32 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4 overflow-x-auto">
                        <button className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium whitespace-nowrap">
                            All Projects
                        </button>
                        <button className="px-4 py-2 bg-transparent border border-accent/30 text-charcoal rounded-full text-sm font-medium hover:bg-accent transition-colors whitespace-nowrap">
                            Restoration
                        </button>
                        <button className="px-4 py-2 bg-transparent border border-accent/30 text-charcoal rounded-full text-sm font-medium hover:bg-accent transition-colors whitespace-nowrap">
                            Livelihoods
                        </button>
                        <button className="px-4 py-2 bg-transparent border border-accent/30 text-charcoal rounded-full text-sm font-medium hover:bg-accent transition-colors whitespace-nowrap">
                            Arts & Culture
                        </button>
                        <button className="px-4 py-2 bg-transparent border border-accent/30 text-charcoal rounded-full text-sm font-medium hover:bg-accent transition-colors whitespace-nowrap">
                            Education
                        </button>
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-sm text-charcoal/60">
                        <span>Showing 6 projects</span>
                    </div>
                </div>
            </section>

            {/* Initiatives Grid */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-deepEarth mb-4">Active Initiatives</h2>
                        <div className="w-20 h-1 bg-accent"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {initiatives.map((initiative, index) => (
                            <article 
                                key={initiative.title} 
                                className="group cursor-pointer"
                                style={{animationDelay: `${index * 0.1}s`}}
                            >
                                <Link href={initiative.href}>
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                                        {/* Image Section */}
                                        <div className="relative h-64 lg:h-72 overflow-hidden">
                                            <Image 
                                                src={initiative.image} 
                                                alt={initiative.title} 
                                                fill 
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent"></div>
                                            
                                            {/* Status Badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                                                    initiative.status === 'Active' 
                                                        ? 'bg-green-500/90 text-white' 
                                                        : 'bg-blue-500/90 text-white'
                                                }`}>
                                                    {initiative.status}
                                                </span>
                                            </div>
                                            
                                            {/* Location Badge */}
                                            <div className="absolute top-4 right-4">
                                                <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-semibold">
                                                    📍 {initiative.location}
                                                </span>
                                            </div>
                                            
                                            {/* Impact Badge */}
                                            <div className="absolute bottom-4 left-4">
                                                <span className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold">
                                                    {initiative.impact}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        {/* Content Section */}
                                        <div className="p-8">
                                            <div className="space-y-4">
                                                {/* Category Tags */}
                                                <div className="flex flex-wrap gap-2">
                                                    {initiative.tags.map((tag) => (
                                                        <span key={tag} className="px-2 py-1 bg-secondary/50 text-primary rounded-full text-xs font-semibold">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                
                                                <h3 className="text-2xl font-heading font-bold text-deepEarth leading-tight group-hover:text-primary transition-colors duration-300">
                                                    {initiative.title}
                                                </h3>
                                                
                                                <p className="text-charcoal/80 leading-relaxed line-clamp-3">
                                                    {initiative.summary}
                                                </p>
                                                
                                                <div className="flex items-center justify-between pt-4 border-t border-charcoal/10">
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

            {/* Workstreams Section */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-gradient-to-br from-secondary/50 to-offWhite">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-deepEarth mb-4">Strategic Workstreams</h2>
                        <div className="w-20 h-1 bg-accent"></div>
                        <p className="text-lg text-charcoal/80 mt-6 max-w-3xl">
                            We design multi-year coalitions with ministries, traditional leaders, investors, and creative industries to ensure restoration is measurable and inclusive.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {workstreams.map((stream, index) => (
                            <div 
                                key={stream.title}
                                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-accent/20"
                                style={{animationDelay: `${index * 0.1}s`}}
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${stream.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    {stream.icon}
                                </div>
                                <h3 className="text-xl font-heading font-bold text-deepEarth mb-4 group-hover:text-primary transition-colors duration-300">
                                    {stream.title}
                                </h3>
                                <p className="text-charcoal/80 leading-relaxed">
                                    {stream.detail}
                                </p>
                                <div className="mt-6 pt-6 border-t border-charcoal/10">
                                    <Link href="/workstreams" className="text-accent font-semibold hover:text-primary transition-colors duration-300 inline-flex items-center gap-2">
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
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-gradient-to-br from-primary to-deepEarth">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-offWhite mb-8">
                        Shape the Future of African Restoration
                    </h2>
                    <p className="text-xl text-offWhite/90 mb-12 leading-relaxed">
                        Whether you're a funder, technical expert, community organization, or passionate advocate—there's a place for you in the Great Green Wall story.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-warm px-8 py-4 flex items-center gap-3 justify-center">
                            Partner With Us
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
                            </svg>
                        </Link>
                        <Link href="/projects" className="btn-secondary px-8 py-4 flex items-center gap-3 justify-center">
                            View All Projects
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
