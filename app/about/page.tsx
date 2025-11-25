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
        icon: <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.71c.16-.46.38-.86.66-1.22C9.47 15.97 12.99 12 17 12V8z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>,
        color: "from-green-600 to-green-800"
    },
    {
        title: "Culture Building",
        copy: "Mobilizing cultural leaders and storytellers so stewardship becomes an expression of pride and identity across communities.",
        icon: <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
        color: "from-purple-600 to-purple-800"
    },
    {
        title: "Child Education Expansion",
        copy: "Creating early learning experiences under 'green canopies' that connect children to land-based knowledge and environmental stewardship.",
        icon: <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>,
        color: "from-blue-600 to-blue-800"
    },
    {
        title: "Community Empowerment",
        copy: "Investing in local governance, skills, and circular economies so communities design their own pathways to sustainable prosperity.",
        icon: <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5V18h2v-7.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5V18h2v-4h3v4h2v-4c0-1.11-.89-2-2-2h-1c-1.11 0-2 .89-2 2v1h-2v-1c0-1.11-.89-2-2-2h-1c-1.11 0-2 .89-2 2v1h-2v-1c0-1.11-.89-2-2-2H6c-1.11 0-2 .89-2 2v4h2z"/></svg>,
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
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/60 to-primary/80"></div>
                </div>
                <div className="relative z-10 px-6 md:px-12 lg:px-32 py-[120px] md:py-[140px] lg:py-[160px]">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className="space-y-8">
                            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">ABOUT GGWOA</p>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-offWhite mb-8 leading-tight">
                                Unlocking the potential in Africa’s landscape
                            </h1>
                            <p className="text-xl md:text-2xl lg:text-3xl text-offWhite/90 max-w-4xl mx-auto leading-relaxed mb-12">
                                We leverage culture, policy, and community partnerships to ensure climate adaptation strategies reduce the trade-offs between economic growth and sustainability.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link href="/projects" className="btn-warm px-8 py-4 flex items-center gap-3 justify-center hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                                    View Flagship Work
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
                                    </svg>
                                </Link>
                                <Link href="/contact" className="btn-secondary px-8 py-4 flex items-center gap-3 justify-center hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                                    Start a Conversation
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Statement Section */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">MISSION STATEMENT</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deepEarth mb-8 leading-tight">
                            Culture-Powered Climate Action
                        </h2>
                        <div className="w-32 h-1 bg-accent mx-auto mb-8"></div>
                        <p className="text-xl md:text-2xl text-charcoal leading-relaxed max-w-[70ch] mx-auto">
                            The Great Green Wall of Africa Foundation supports projects with concurrent high positive impact. We convene communities, stakeholders, and policy makers so that climate adaptation strategies become integrated development strategies.
                        </p>
                    </div>
                    
                    {/* How We Work Block */}
                    <div className="bg-white rounded-3xl p-12 shadow-xl border border-accent/20 max-w-4xl mx-auto">
                        <div className="flex items-start gap-8">
                            <div className="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <span className="text-accent font-bold text-2xl">💡</span>
                            </div>
                            <div>
                                <h3 className="text-3xl font-heading font-bold text-deepEarth mb-6">How We Work</h3>
                                <p className="text-xl text-charcoal/80 leading-relaxed max-w-[65ch]">
                                    Diagnostics and storytelling reveal the cultural context of each landscape. From there, we co-design investments that honour traditional knowledge, integrate technology, and anchor long-term governance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section with Alternating Layout */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-secondary">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">OUR STORY</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deepEarth mb-8 leading-tight">
                            From Cultural Spark to Continental Movement
                        </h2>
                        <div className="w-32 h-1 bg-accent mx-auto mb-8"></div>
                    </div>
                    
                    {/* First Story Block */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-3xl lg:text-4xl font-heading font-bold text-deepEarth mb-6 leading-tight">
                                    Rooted in Community Wisdom
                                </h3>
                                <p className="text-xl text-charcoal leading-relaxed max-w-[65ch]">
                                    Our journey began with listening tours across the Sahel, where we learned that the most powerful restoration strategies emerge when cultural knowledge guides climate action. Communities weren't just stakeholders—they were the architects of change.
                                </p>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-accent/20">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                        </svg>
                                    </div>
                                    <p className="font-semibold text-deepEarth">Key Insight</p>
                                </div>
                                <p className="text-charcoal/80 leading-relaxed">
                                    Cultural identity is the most powerful driver of environmental stewardship.
                                </p>
                            </div>
                        </div>
                        
                        <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-3xl shadow-2xl">
                            <Image
                                src="/assets/about/rs=w:1160,h:538.jpeg"
                                alt="Community planting efforts"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                            <div className="absolute bottom-6 left-6">
                                <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                    </svg>
                                    <span className="text-sm font-semibold text-deepEarth">Sahel Region</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Second Story Block (Reversed) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center lg:flex-row-reverse">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-3xl lg:text-4xl font-heading font-bold text-deepEarth mb-6 leading-tight">
                                    Scaling Through Partnership
                                </h3>
                                <p className="text-xl text-charcoal leading-relaxed max-w-[65ch]">
                                    Today, we convene governments, financiers, artists, and communities around shared restoration goals. By creating platforms for cross-sector collaboration, we've transformed local insights into continental impact.
                                </p>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-accent/20">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                                            <circle cx="9" cy="7" r="4"/>
                                            <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                                            <path d="M16 3.13a4 4 0 010 7.75"/>
                                        </svg>
                                    </div>
                                    <p className="font-semibold text-deepEarth">Our Network</p>
                                </div>
                                <p className="text-charcoal/80 leading-relaxed">
                                    11 countries, 100+ partners, and thousands of community leaders working together.
                                </p>
                            </div>
                        </div>
                        
                        <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-3xl shadow-2xl">
                            <Image
                                src="/assets/home/rs=w:730.jpeg"
                                alt="Partnership meeting"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                            <div className="absolute bottom-6 left-6">
                                <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                    </svg>
                                    <span className="text-sm font-semibold text-deepEarth">Partnership Success</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Four Pillars Section */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-offWhite">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">WHAT WE ACTIVATE</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deepEarth mb-8 leading-tight">
                            Four Pillars to Regenerate the Sahel
                        </h2>
                        <div className="w-32 h-1 bg-accent mx-auto mb-8"></div>
                        <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
                            Inspired by communities on the frontlines, each pillar combines policy engagement, financing, and storytelling to unlock scale.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {pillars.map((pillar, index) => (
                            <div 
                                key={pillar.title}
                                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-accent/20"
                            >
                                <div className={`w-20 h-20 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
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
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-secondary">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                    {/* Impact Stats */}
                    <div>
                        <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">IMPACT SNAPSHOT</p>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-deepEarth mb-12 leading-tight">
                            Measurable Progress
                        </h2>
                        <div className="w-20 h-1 bg-accent mb-12"></div>
                        
                        <div className="space-y-8">
                            {stats.map((stat, index) => (
                                <div 
                                    key={stat.label}
                                    className="bg-white rounded-3xl p-8 shadow-lg border border-accent/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                                            {stat.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-4xl font-heading font-bold text-primary mb-2">{stat.value}</div>
                                            <div className="text-lg font-semibold text-deepEarth mb-2">{stat.label}</div>
                                            <div className="text-charcoal/70 leading-relaxed">{stat.detail}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Operating Principles */}
                    <div>
                        <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">OPERATING PRINCIPLES</p>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-deepEarth mb-12 leading-tight">
                            Our Guiding Values
                        </h2>
                        <div className="w-20 h-1 bg-accent mb-12"></div>
                        
                        <div className="space-y-6">
                            {principles.map((principle, index) => (
                                <div 
                                    key={principle.title}
                                    className="bg-white rounded-3xl p-8 shadow-lg border border-accent/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
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
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-offWhite">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">OUR JOURNEY</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deepEarth mb-8 leading-tight">
                            From Cultural Spark to Continental Coalition
                        </h2>
                        <div className="w-32 h-1 bg-accent mx-auto mb-8"></div>
                        <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed mb-8">
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
                                >
                                    {/* Timeline Dot */}
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                            {index + 1}
                                        </div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="flex-1 bg-white rounded-3xl p-8 shadow-lg border border-accent/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
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
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-gradient-to-br from-primary via-deepEarth to-primary">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="space-y-8">
                        <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">JOIN OUR COALITION</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-offWhite mb-8 leading-tight">
                            Help Design the Largest Living Structure on Earth
                        </h2>
                        <p className="text-xl md:text-2xl text-offWhite/90 mb-12 leading-relaxed max-w-3xl mx-auto">
                            Whether you represent government, philanthropy, or creative industries, we are ready to co-create long-term impact along the Great Green Wall.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact" className="bg-offWhite text-primary px-10 py-5 rounded-full font-semibold text-lg hover:bg-offWhite/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3">
                                Talk to Our Team
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
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
