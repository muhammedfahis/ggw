import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "About Us | GGWoA Foundation",
    description: "Learn how the Great Green Wall of Africa Foundation mobilizes culture, policy, and communities to regenerate the Sahel.",
};

const pillars = [
    {
        title: "Climate Change Initiative",
        copy: "Promoting bold climate projects that deliver measurable ecological gains and economic opportunity through innovative restoration strategies.",
        icon: "🌍",
        color: "from-green-600 to-green-800"
    },
    {
        title: "Culture Building",
        copy: "Mobilizing cultural leaders and storytellers so stewardship becomes an expression of pride and identity across communities.",
        icon: "🎭",
        color: "from-purple-600 to-purple-800"
    },
    {
        title: "Child Education Expansion",
        copy: "Creating early learning experiences under 'green canopies' that connect children to land-based knowledge and environmental stewardship.",
        icon: "📚",
        color: "from-blue-600 to-blue-800"
    },
    {
        title: "Community Empowerment",
        copy: "Investing in local governance, skills, and circular economies so communities design their own pathways to sustainable prosperity.",
        icon: "🤝",
        color: "from-amber-600 to-amber-800"
    },
];

const stats = [
    { label: "Trees established", value: "15M+", detail: "Native species cultivated with community cooperatives.", icon: "🌳" },
    { label: "Hectares restored", value: "50K+", detail: "Dune stabilization, soil regeneration, and water retention.", icon: "🏞️" },
    { label: "Youth & women trained", value: "120K+", detail: "Entrepreneurship, agroforestry, and civic leadership.", icon: "👥" },
];

const principles = [
    {
        title: "Culture is infrastructure",
        description: "Creative expression unlocks momentum and trust in communities."
    },
    {
        title: "Communities lead from day zero",
        description: "Local partners sit at the design table and share in the upside."
    },
    {
        title: "Cross-sector collaboration",
        description: "Policy makers, artists, scientists, and investors solve in the same room."
    },
    {
        title: "Measurable impact",
        description: "Every hectare is measured for ecological, social, and economic outcomes."
    },
];

const milestones = [
    { 
        year: "2010–2015", 
        focus: "Listening tours & cultural mapping",
        description: "Building foundational relationships and understanding local contexts across the Sahel region."
    },
    { 
        year: "2016–2020", 
        focus: "Pilot forests, creative coalitions, and policy advocacy",
        description: "Testing restoration models and building strategic partnerships for scale."
    },
    { 
        year: "2021–2023", 
        focus: "Cross-border projects, women-led innovation labs",
        description: "Expanding impact across multiple countries with community-centered approaches."
    },
    { 
        year: "2024+", 
        focus: "Pan-African alliance scaling regenerative economies",
        description: "Building continental coalition for systemic transformation and sustainable growth."
    },
];

export default function AboutPage() {
    return (
        <main className="bg-offWhite text-charcoal min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/about/rs=w:1209.jpeg"
                        alt="GGWoA field work"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-deepEarth/80 to-primary/70"></div>
                </div>
                <div className="relative z-10 px-6 md:px-12 lg:px-32 py-24 md:py-32">
                    <div className="max-w-7xl mx-auto text-center">
                        <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6 animate-fade-in-up">ABOUT GGWOA</p>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-offWhite mb-8 leading-tight animate-slide-in-left">
                            Unlocking the Potential in Africa's Landscape
                        </h1>
                        <p className="text-xl md:text-2xl text-offWhite/90 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                            We leverage culture, policy, and community partnerships to ensure climate adaptation strategies reduce the trade-offs between economic growth and sustainability.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                            <Link href="/projects" className="btn-warm px-8 py-4 flex items-center gap-3 justify-center">
                                View Flagship Work
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
                                </svg>
                            </Link>
                            <Link href="/contact" className="btn-secondary px-8 py-4 flex items-center gap-3 justify-center">
                                Start a Conversation
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                        <div className="space-y-8">
                            <div>
                                <p className="font-accent text-xs uppercase tracking-wider text-accent mb-4">MISSION STATEMENT</p>
                                <h2 className="text-4xl md:text-5xl font-heading font-bold text-deepEarth mb-6 leading-tight">
                                    Culture-Powered Climate Action
                                </h2>
                                <p className="text-lg text-charcoal/80 leading-relaxed">
                                    The Great Green Wall of Africa Foundation supports projects with concurrent high positive impact. We convene communities, stakeholders, and policy makers so that climate adaptation strategies become integrated development strategies.
                                </p>
                            </div>
                            
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-accent/20">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-accent font-bold text-lg">💡</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-heading font-bold text-deepEarth mb-3">How We Work</h3>
                                        <p className="text-charcoal/80 leading-relaxed">
                                            Diagnostics and storytelling reveal the cultural context of each landscape. From there, we co-design investments that honour traditional knowledge, integrate technology, and anchor long-term governance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-xl">
                            <Image
                                src="/assets/about/rs=w:1160,h:538.jpeg"
                                alt="Community planting efforts"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Four Pillars Section */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-gradient-to-br from-secondary/50 to-offWhite">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="font-accent text-xs uppercase tracking-wider text-accent mb-4">WHAT WE ACTIVATE</p>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-deepEarth mb-6">Four Pillars to Regenerate the Sahel</h2>
                        <p className="text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
                            Inspired by communities on the frontlines, each pillar combines policy engagement, financing, and storytelling to unlock scale.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {pillars.map((pillar, index) => (
                            <div 
                                key={pillar.title}
                                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-accent/20"
                                style={{animationDelay: `${index * 0.1}s`}}
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    {pillar.icon}
                                </div>
                                <h3 className="text-xl font-heading font-bold text-deepEarth mb-4 group-hover:text-primary transition-colors duration-300">
                                    {pillar.title}
                                </h3>
                                <p className="text-charcoal/80 leading-relaxed">
                                    {pillar.copy}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Snapshot & Principles */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                    {/* Impact Stats */}
                    <div>
                        <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">IMPACT SNAPSHOT</p>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-deepEarth mb-12">Measurable Progress</h2>
                        
                        <div className="space-y-8">
                            {stats.map((stat, index) => (
                                <div 
                                    key={stat.label}
                                    className="bg-white rounded-2xl p-8 shadow-lg border border-accent/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                                    style={{animationDelay: `${index * 0.1}s`}}
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                                            {stat.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-4xl font-heading font-bold text-primary mb-2">{stat.value}</div>
                                            <div className="text-lg font-semibold text-deepEarth mb-2">{stat.label}</div>
                                            <div className="text-charcoal/70">{stat.detail}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Operating Principles */}
                    <div>
                        <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">OPERATING PRINCIPLES</p>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-deepEarth mb-12">Our Guiding Values</h2>
                        
                        <div className="space-y-6">
                            {principles.map((principle, index) => (
                                <div 
                                    key={principle.title}
                                    className="bg-white rounded-2xl p-8 shadow-lg border border-accent/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                                    style={{animationDelay: `${index * 0.1}s`}}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-accent font-bold text-lg">{index + 1}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-heading font-bold text-deepEarth mb-3">{principle.title}</h3>
                                            <p className="text-charcoal/80 leading-relaxed">{principle.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="font-accent text-xs uppercase tracking-wider text-accent mb-4">OUR JOURNEY</p>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-deepEarth mb-6">From Cultural Spark to Continental Coalition</h2>
                        <p className="text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed mb-8">
                            Follow our evolution from local listening tours to Pan-African movement building.
                        </p>
                        <Link href="/news" className="inline-flex items-center gap-2 text-accent font-semibold hover:text-primary transition-colors duration-300">
                            Follow Announcements
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
                            </svg>
                        </Link>
                    </div>
                    
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden lg:block"></div>
                        
                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <div 
                                    key={milestone.year}
                                    className="relative flex items-start gap-8 lg:gap-12"
                                    style={{animationDelay: `${index * 0.1}s`}}
                                >
                                    {/* Timeline Dot */}
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                            {index + 1}
                                        </div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-accent/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                                            <h3 className="text-2xl font-heading font-bold text-deepEarth">{milestone.year}</h3>
                                        </div>
                                        <h4 className="text-xl font-semibold text-primary mb-4">{milestone.focus}</h4>
                                        <p className="text-charcoal/80 leading-relaxed">{milestone.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Our Coalition CTA */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-gradient-to-br from-primary to-deepEarth">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">JOIN OUR COALITION</p>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-offWhite mb-8 leading-tight">
                        Help Design the Largest Living Structure on Earth
                    </h2>
                    <p className="text-xl text-offWhite/90 mb-12 leading-relaxed">
                        Whether you represent government, philanthropy, or creative industries, we are ready to co-create long-term impact along the Great Green Wall.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-warm px-8 py-4 flex items-center gap-3 justify-center">
                            Talk to Our Team
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                            </svg>
                        </Link>
                        <Link href="/leadership" className="btn-secondary px-8 py-4 flex items-center gap-3 justify-center">
                            Meet the Leadership
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16 7c0 2.21-1.79 4-4 4S8 9.21 8 7s1.79-4 4-4 4 1.79 4 4zm-4 6c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
