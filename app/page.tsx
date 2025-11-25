import Image from "next/image";
import Link from "next/link";
import { Counter } from "@/components/Counter";
import { ScrollIndicator } from "@/components/ScrollIndicator";

const impactMetrics = [
  { value: "15M+", label: "Trees established", detail: "Native species cultivated with community cooperatives." },
  { value: "50K+", label: "Hectares restored", detail: "Dune stabilization, soil regeneration, and water retention." },
  { value: "120K+", label: "Youth & women trained", detail: "Entrepreneurship, agroforestry, and civic leadership." },
  { value: "11", label: "Countries engaged", detail: "Coordinated restoration across the Sahel." },
];

const programs = [
  {
    title: "Thiès Forest Restoration",
    description: "Transforming former mining land through native planting, water harvesting, and youth employment.",
    image: "/assets/home/rs=w:365,h:365,cg:true_1.jpeg",
    href: "/projects/thies-forest",
  },
  {
    title: "Project SCALE",
    description: "Scaling climate-resilient livelihoods along the Great Green Wall with regenerative agriculture hubs.",
    image: "/assets/home/rs=w:365,h:365,cg:true_2.jpeg",
    href: "/projects/scale",
  },
  {
    title: "IMAGINE-1",
    description: "Pan-African creative campaign reframing the wall through music, film, and immersive art.",
    image: "/assets/home/rs=w:365,h:365,cg:true.jpeg",
    href: "/projects/imagine-1",
  },
];

const successStories = [
  {
    title: "Thiès Quarry Revival",
    story: "A 5‑hectare former quarry in Senegal is now a thriving native forest with 92% tree survival, creating jobs for 300 youth and reducing flood risk for nearby communities.",
    image: "/assets/home/rs=w:730.jpeg",
    location: "Thiès, Senegal",
  },
  {
    title: "Women-Led Cooperatives",
    story: "In Niger and Djibouti, women's cooperatives manage nurseries and micro‑irrigation, boosting household incomes by 45% while planting 2.5 million trees.",
    image: "/assets/home/rs=w:331.png",
    location: "Niger & Djibouti",
  },
];

const team = [
  {
    name: "Dr. Amina Diallo",
    title: "Executive Director",
    role: "Climate Finance & Diplomacy",
    bio: "Former UN climate negotiator with 15+ years experience in international development and environmental policy. Led successful climate finance initiatives across West Africa.",
    photo: "/assets/leadership/rs=w:1023,h:1023,cg:true,m.jpeg",
  },
  {
    name: "Jean-Pierre Mbebe",
    title: "Technical Director",
    role: "Agroforestry & Land Restoration",
    bio: "Specialist in regenerative agriculture and ecosystem restoration. Developed innovative planting techniques that have restored over 100,000 hectares of degraded land.",
    photo: "/assets/leadership/rs=w:1023,h:1023,cg:true.jpeg",
  },
  {
    name: "Dr. Sarah Chen",
    title: "Research Director",
    role: "Climate Science & Monitoring",
    bio: "Climate scientist with expertise in ecosystem monitoring and data analysis. Leads our research initiatives and impact assessment programs.",
    photo: "/assets/leadership/rs=w:1023,h:1023,cg:true_1.jpeg",
  },
  {
    name: "Mohammed Al-Khouri",
    title: "Partnerships Director",
    role: "Strategic Alliances & Development",
    bio: "Expert in building multi-stakeholder partnerships and resource mobilization. Connects communities with governments, donors, and technical partners.",
    photo: "/assets/leadership/rs=w:1023,h:1023,cg:true_2.jpeg",
  },
  {
    name: "Dr. Fatima Zahra",
    title: "Community Programs Director",
    role: "Community Development & Education",
    bio: "Community development specialist focused on women's leadership and youth engagement. Designs and implements community-based restoration programs.",
    photo: "/assets/leadership/rs=w:1023,h:1023,cg:true_3.jpeg",
  },
  {
    name: "Carlos Rodriguez",
    title: "Operations Director",
    role: "Program Management & Logistics",
    bio: "Operations expert with extensive experience in large-scale program management across multiple countries. Ensures efficient implementation of our restoration projects.",
    photo: "/assets/leadership/rs=w:1023,h:1023,cg:true_4.jpeg",
  },
];

const partners = [
  { name: "Pan-African Agency of the Great Green Wall", logo: "/assets/home/a8b8cb72-0bd3-42f4-a6ad-d64d7533933e.svg" },
  { name: "African Union GGW Initiative", logo: "/assets/home/b3b904f2-a92d-467a-936e-a7ca9bd24455.svg" },
  { name: "Bezos Earth Fund", logo: "/assets/home/7754974d-18a2-49bf-9b6b-02e1602491aa.svg" },
  { name: "African Development Bank Group", logo: "/assets/home/ec341136-e43e-4f99-bb1b-783760e1f546.svg" },
];

export default function HomePage() {
  return (
    <main className="bg-offWhite text-charcoal font-body">
      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/assets/home/rs=w:1920,m.png"
          alt="Great Green Wall of Africa"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/50 to-primary/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-offWhite max-w-5xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              A Living Infrastructure
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              for Nature, Culture, and Prosperity
            </p>
            <p className="text-lg md:text-xl lg:text-2xl mb-12 font-light max-w-3xl mx-auto opacity-90 animate-fade-in-up" style={{animationDelay: '1s'}}>
              We design regenerative systems alongside governments, traditional leaders, and bold partners so that land restoration becomes the most inspiring development story of this decade.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{animationDelay: '1.4s'}}>
              <Link href="/contact" className="btn-warm text-lg">
                Support Our Work
              </Link>
              <Link href="/about" className="btn-secondary text-lg">
                Discover Our Approach
              </Link>
            </div>
          </div>
        </div>
        <ScrollIndicator />
      </section>

      {/* Impact Metrics */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-32 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8">Our Impact</h2>
            <p className="text-xl md:text-2xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              Measurable results that demonstrate the power of community-led restoration across the Sahel.
            </p>
            <div className="w-32 h-1 bg-accent mx-auto mt-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {impactMetrics.map((stat, index) => (
              <div key={stat.label} className="bg-offWhite p-8 lg:p-12 rounded-3xl border border-charcoal/10 shadow-sm hover:shadow-xl transition-all duration-300 text-center card-hover">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <p className="text-6xl md:text-7xl font-accent font-bold text-primary mb-4">
                  <Counter end={stat.value} />
                </p>
                <p className="text-lg lg:text-xl font-semibold mb-4 text-deepEarth uppercase tracking-wider">{stat.label}</p>
                <p className="text-base text-charcoal/60 leading-relaxed italic">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission/Approach */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-32 bg-offWhite">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <div className="space-y-12">
              <div className="border-l-4 border-accent pl-8">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight text-deepEarth">
                  Restoration is the <span className="text-accent">backbone of climate security</span> and cultural continuity.
                </h2>
              </div>
              <p className="text-xl md:text-2xl text-charcoal leading-relaxed">
                Our teams align national policy ambition with grounded community action. We carry out landscape diagnostics, unlock blended finance, and deploy on-the-ground collectives who know every dune, pasture, and family relying on it.
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-2 group-hover:bg-accent transition-colors duration-300">
                    <div className="w-4 h-4 bg-primary rounded-full group-hover:bg-accent transition-colors duration-300"></div>
                  </div>
                  <p className="text-xl text-charcoal font-medium leading-relaxed">Culture is infrastructure: creative expression unlocks momentum and trust.</p>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-2 group-hover:bg-accent transition-colors duration-300">
                    <div className="w-4 h-4 bg-primary rounded-full group-hover:bg-accent transition-colors duration-300"></div>
                  </div>
                  <p className="text-xl text-charcoal font-medium leading-relaxed">Communities sit at the design table from day zero and share in the upside.</p>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-2 group-hover:bg-accent transition-colors duration-300">
                    <div className="w-4 h-4 bg-primary rounded-full group-hover:bg-accent transition-colors duration-300"></div>
                  </div>
                  <p className="text-xl text-charcoal font-medium leading-relaxed">Policy makers, artists, scientists, and investors solve in the same room.</p>
                </div>
              </div>
              <div className="pt-8">
                <Link href="/about" className="btn-warm-outline inline-flex items-center gap-3 text-lg">
                  Explore Strategy
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative h-96 lg:h-full min-h-[600px] rounded-3xl overflow-hidden border-4 border-accent shadow-2xl group">
              <Image
                src="/assets/home/field-note.jpeg"
                alt="Landscape restoration"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12 text-offWhite">
                <p className="text-sm uppercase tracking-wider mb-3 font-semibold">Field note</p>
                <p className="text-3xl font-heading font-semibold mb-4 leading-tight">
                  "Every hectare we restore tells a story of dignity returned to its people."
                </p>
                <p className="text-lg">Aminata Barry · Community forester, Senegal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-32 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8">Active Programs</h2>
            <p className="text-xl md:text-2xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              Flagship initiatives shaping the Great Green Wall across the continent.
            </p>
            <div className="w-32 h-1 bg-accent mx-auto mt-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {programs.map((program, index) => (
              <div key={program.title} className={`card-hover overflow-hidden ${index === 0 ? 'lg:row-span-2' : ''}`}>
                <div className="relative h-64 lg:h-80 overflow-hidden group">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-skyBlue/90 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                      Active
                    </span>
                  </div>
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-semibold">
                      Initiative
                    </span>
                  </div>
                  
                  {/* Hover Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-heading font-semibold text-offWhite mb-3">{program.title}</h3>
                    <p className="text-offWhite/90 text-sm leading-relaxed mb-4">{program.description}</p>
                    <Link href={program.href} className="text-accent font-semibold hover:text-accent/80 transition-colors inline-flex items-center gap-2">
                      Learn more
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-2xl lg:text-3xl font-heading font-semibold mb-4 text-deepEarth">{program.title}</h3>
                  <p className="text-lg text-charcoal/70 leading-relaxed mb-6">{program.description}</p>
                  <div className="flex items-center gap-4 text-sm text-charcoal/60">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span>Ongoing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <span>High Impact</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-32 bg-offWhite">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8">Success Stories</h2>
            <p className="text-xl md:text-2xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              Real-world examples of how communities, partners, and innovative approaches are turning restoration into lasting prosperity.
            </p>
            <div className="w-32 h-1 bg-accent mx-auto mt-8"></div>
          </div>
          <div className="space-y-32">
            {successStories.map((story, index) => (
              <div key={story.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl group">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent"></div>
                  
                  {/* Location Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <span className="text-sm font-semibold text-deepEarth">{story.location}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-wider text-accent font-semibold">SUCCESS STORY</p>
                      <p className="text-2xl font-heading font-bold text-deepEarth">{story.title}</p>
                    </div>
                  </div>
                  <p className="text-xl text-charcoal leading-relaxed">{story.story}</p>
                  <div className="flex items-center gap-6 pt-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-sunsetOrange" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <span className="text-sm font-semibold text-sunsetOrange">High Impact</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-skyBlue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span className="text-sm font-semibold text-skyBlue">Completed</span>
                    </div>
                  </div>
                  <Link href={`/stories/${story.title.toLowerCase().replace(/\s+/g, '-')}`} className="btn-secondary inline-flex items-center gap-3 text-lg">
                    Read Full Story
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 px-6 md:px-12 lg:px-32 bg-gradient-to-b from-secondary to-offWhite">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-4 animate-fade-in-up">OUR LEADERSHIP</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-tight text-deepEarth animate-slide-in-left">
              Visionaries Rooted in Action
            </h2>
            <div className="w-20 h-0.5 bg-accent mx-auto mb-8 animate-scale-in origin-center"></div>
            <p className="text-xl md:text-2xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Leaders who combine decades of diplomatic influence, grassroots wisdom, and technical excellence to turn restoration into lasting prosperity
            </p>
          </div>

          {/* Leadership Philosophy Statement */}
          <div className="bg-secondary/50 border-t border-b border-accent/20 py-14 px-8 mb-20 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-6xl text-accent/20 mb-6">"</div>
              <p className="text-2xl md:text-3xl font-heading italic text-deepEarth leading-relaxed mb-6">
                We don't lead from boardrooms alone—we lead from the field, the village square, and the negotiation table. Our strength is in bridging worlds.
              </p>
              <p className="text-sm uppercase tracking-wider text-charcoal/60">— The GGWoA Leadership Collective</p>
            </div>
          </div>

          {/* Featured Leaders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-20">
            {team.map((member, index) => (
              <div 
                key={member.name} 
                className="group cursor-pointer"
                style={{animationDelay: `${0.8 + index * 0.15}s`}}
              >
                <div className="bg-offWhite rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-accent overflow-hidden">
                  {/* Photo Section */}
                  <div className="relative h-96 lg:h-[400px] overflow-hidden">
                    <Image
                      src={member.photo}
                      alt={`Portrait of ${member.name}, ${member.title}`}
                      fill
                      className="object-cover object-[center_20%] filter saturate-105 brightness-105 grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                    
                    {/* Decorative Badge */}
                    <div className="absolute top-6 right-6 w-16 h-16 bg-white rounded-full shadow-lg border-4 border-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-accent font-bold text-lg">20+</span>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8 lg:p-10">
                    <h3 className="text-3xl font-heading font-bold text-deepEarth mb-2 tracking-tight">{member.name}</h3>
                    <p className="text-lg font-semibold text-accent uppercase tracking-wider mb-1">{member.title}</p>
                    <p className="text-base italic text-charcoal/70 mb-6">{member.role || 'Climate Finance & Diplomacy'}</p>
                    
                    <div className="w-10 h-0.5 bg-accent mb-6 group-hover:w-full transition-all duration-400"></div>
                    
                    <p className="text-base text-charcoal leading-relaxed mb-6 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                      {member.bio}
                    </p>
                    
                    {/* Key Achievements */}
                    <div className="space-y-3 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-charcoal/85 leading-relaxed">Led $500M climate fund deployment across Sahel</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-charcoal/85 leading-relaxed">Advisor to 5 African heads of state</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-charcoal/85 leading-relaxed">25+ years UN peacekeeping & development</p>
                      </div>
                    </div>
                    
                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1.5 bg-secondary rounded-full text-xs font-medium text-deepEarth border border-accent/30 hover:bg-accent hover:text-white hover:-translate-y-0.5 transition-all duration-300">
                        Climate Policy
                      </span>
                      <span className="px-3 py-1.5 bg-secondary rounded-full text-xs font-medium text-deepEarth border border-accent/30 hover:bg-accent hover:text-white hover:-translate-y-0.5 transition-all duration-300">
                        Diplomacy
                      </span>
                      <span className="px-3 py-1.5 bg-secondary rounded-full text-xs font-medium text-deepEarth border border-accent/30 hover:bg-accent hover:text-white hover:-translate-y-0.5 transition-all duration-300">
                        Finance
                      </span>
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-4 pt-6 border-t border-charcoal/10">
                      <a href="#" className="w-10 h-10 bg-white border-2 border-secondary rounded-full flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white hover:scale-110 hover:rotate-6 transition-all duration-300 group/social">
                        <svg className="w-5 h-5 text-charcoal/60 group-hover/social:text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-white border-2 border-secondary rounded-full flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white hover:scale-110 hover:rotate-6 transition-all duration-300 group/social">
                        <svg className="w-5 h-5 text-charcoal/60 group-hover/social:text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-white border-2 border-secondary rounded-full flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white hover:scale-110 hover:rotate-6 transition-all duration-300 group/social">
                        <svg className="w-5 h-5 text-charcoal/60 group-hover/social:text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </a>
                    </div>
                    
                    {/* CTA Button */}
                    <button className="w-full mt-6 py-3 border-2 border-accent text-accent rounded-lg font-semibold uppercase tracking-wider text-sm hover:bg-accent hover:text-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      View Full Bio
                      <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Leadership Statistics Panel */}
          <div className="bg-gradient-to-r from-secondary to-offWhite py-20 px-8 mb-20 rounded-3xl">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="space-y-4">
                  <div className="w-12 h-12 mx-auto mb-4">
                    <svg className="w-full h-full text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M2 12h20"/>
                      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                    </svg>
                  </div>
                  <p className="text-5xl lg:text-6xl font-accent font-bold text-deepEarth">75+</p>
                  <p className="text-sm text-charcoal/70">Years Combined Experience</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 mx-auto mb-4">
                    <svg className="w-full h-full text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"/>
                    </svg>
                  </div>
                  <p className="text-5xl lg:text-6xl font-accent font-bold text-deepEarth">12</p>
                  <p className="text-sm text-charcoal/70">Countries Represented</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 mx-auto mb-4">
                    <svg className="w-full h-full text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                      <path d="M16 3.13a4 4 0 010 7.75"/>
                    </svg>
                  </div>
                  <p className="text-5xl lg:text-6xl font-accent font-bold text-deepEarth">6</p>
                  <p className="text-sm text-charcoal/70">Languages Spoken</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 mx-auto mb-4">
                    <svg className="w-full h-full text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <p className="text-5xl lg:text-6xl font-accent font-bold text-deepEarth">20+</p>
                  <p className="text-sm text-charcoal/70">Board Positions Held</p>
                </div>
              </div>
            </div>
          </div>

          {/* Extended Team Teaser */}
          <div className="text-center py-16 bg-offWhite rounded-3xl">
            <h3 className="text-3xl lg:text-4xl font-heading font-bold text-deepEarth mb-4">Meet the Extended Team</h3>
            <p className="text-lg text-charcoal/70 mb-8">60+ professionals across 11 countries</p>
            
            {/* Avatar Row */}
            <div className="flex justify-center items-center mb-8 overflow-hidden">
              {team.map((member, index) => (
                <div 
                  key={index} 
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden -ml-4 first:ml-0 hover:scale-115 hover:z-10 transition-all duration-300 group"
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    sizes="64px"
                  />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-deepEarth text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {member.name}
                  </div>
                </div>
              ))}
            </div>
            
            <Link href="/team" className="btn-secondary inline-flex items-center gap-3 text-lg">
              View All Team Members
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
              </svg>
            </Link>
          </div>

          {/* Advisory Board Mention */}
          <div className="bg-white border-l-4 border-accent p-10 rounded-xl my-20 max-w-5xl mx-auto">
            <h4 className="text-lg font-bold uppercase tracking-wider text-deepEarth mb-4">Advisory Board</h4>
            <p className="text-base text-charcoal/80 leading-relaxed mb-6">
              Our work is guided by a distinguished advisory board of 12 global leaders in climate science, finance, and African development.
            </p>
            <Link href="/advisors" className="text-accent font-semibold hover:text-accent/80 transition-colors inline-flex items-center gap-2">
              Meet Our Advisors
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
              </svg>
            </Link>
          </div>

          {/* Join Our Team CTA */}
          <div className="bg-deepEarth text-offWhite py-24 px-8 rounded-3xl">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-4xl lg:text-5xl font-heading font-bold mb-8">
                Shape the Future of African Restoration
              </h3>
              <p className="text-lg lg:text-xl text-offWhite/85 leading-relaxed mb-12 max-w-3xl mx-auto">
                We're always looking for passionate professionals committed to ecological restoration and community empowerment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/careers" className="bg-accent text-deepEarth px-8 py-4 rounded-lg font-semibold text-base hover:bg-accent/90 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  View Open Positions
                </Link>
                <Link href="/contact" className="border border-offWhite/40 text-offWhite px-8 py-4 rounded-lg font-semibold text-base hover:bg-offWhite/10 transition-all duration-300">
                  Send Spontaneous Application
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-32 bg-offWhite">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8">Trusted Partners</h2>
            <p className="text-xl md:text-2xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              Ministries, financiers, and creative networks standing beside community custodians.
            </p>
            <div className="w-32 h-1 bg-accent mx-auto mt-8"></div>
          </div>
          
          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button className="px-6 py-3 bg-accent text-white rounded-full font-semibold transition-all duration-300">
              All Partners
            </button>
            <button className="px-6 py-3 bg-white text-charcoal border border-charcoal/20 rounded-full font-semibold hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
              Government
            </button>
            <button className="px-6 py-3 bg-white text-charcoal border border-charcoal/20 rounded-full font-semibold hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
              Financial
            </button>
            <button className="px-6 py-3 bg-white text-charcoal border border-charcoal/20 rounded-full font-semibold hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
              Creative
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <div key={partner.name} className="bg-white p-8 rounded-xl border border-charcoal/10 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center justify-center h-20">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={70}
                    className="object-contain filter grayscale opacity-60 group-hover:filter-none group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-32 bg-gradient-to-br from-primary via-deepEarth to-primary text-offWhite">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight">
            Partner with us to design the planet's most ambitious restoration effort
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto">
            Whether you bring capital, technology, storytelling, or policy expertise, there is room to co-create lasting impact along the Great Green Wall.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-offWhite text-primary px-10 py-5 rounded-full font-semibold text-lg hover:bg-offWhite/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3">
              Start a Conversation
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
              </svg>
            </Link>
            <Link href="/projects" className="border border-offWhite text-offWhite px-10 py-5 rounded-full font-semibold text-lg hover:bg-offWhite hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3">
              Explore Opportunities
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
              </svg>
            </Link>
          </div>
          <div className="mt-12">
            <Link href="/partnerships" className="text-accent font-semibold hover:text-accent/80 transition-colors inline-flex items-center gap-2">
              Learn about partnership opportunities →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-32 bg-secondary">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8">Stay Connected</h2>
          <p className="text-xl md:text-2xl text-charcoal/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join our newsletter to follow milestones, meet partners, and see how your support fuels the Great Green Wall.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-4 bg-white border border-charcoal/20 rounded-full focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-charcoal placeholder-charcoal/40 transition-all duration-300"
                required
              />
            </div>
            <button type="submit" className="btn-warm px-8 py-4 flex items-center gap-2">
              Subscribe
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </form>
          <p className="text-sm text-charcoal/50 mt-6">
            Join 10,000+ subscribers. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deepEarth text-offWhite py-20 px-6 md:px-12 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div>
              <h3 className="text-3xl font-heading font-bold mb-8">GGWoA</h3>
              <p className="text-offWhite/70 text-lg leading-relaxed">
                Great Green Wall of Africa Foundation. Building a living infrastructure for nature, culture, and prosperity.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <a href="#" className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent transition-all duration-300">
                  <svg className="w-6 h-6 text-offWhite" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent transition-all duration-300">
                  <svg className="w-6 h-6 text-offWhite" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent transition-all duration-300">
                  <svg className="w-6 h-6 text-offWhite" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-8">Navigation</h4>
              <ul className="space-y-4 text-offWhite/70">
                <li><Link href="/about" className="hover:text-accent transition-colors text-lg">About</Link></li>
                <li><Link href="/projects" className="hover:text-accent transition-colors text-lg">Projects</Link></li>
                <li><Link href="/news" className="hover:text-accent transition-colors text-lg">News</Link></li>
                <li><Link href="/contact" className="hover:text-accent transition-colors text-lg">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-8">Get Involved</h4>
              <ul className="space-y-4 text-offWhite/70">
                <li><Link href="/contact" className="hover:text-accent transition-colors text-lg">Partner with us</Link></li>
                <li><Link href="/projects" className="hover:text-accent transition-colors text-lg">Volunteer</Link></li>
                <li><Link href="/projects" className="hover:text-accent transition-colors text-lg">Donate</Link></li>
                <li><Link href="/news" className="hover:text-accent transition-colors text-lg">Newsletter</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-8">Legal</h4>
              <ul className="space-y-4 text-offWhite/70">
                <li><Link href="/privacy" className="hover:text-accent transition-colors text-lg">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-accent transition-colors text-lg">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-offWhite/20 pt-16 text-center">
            <p className="text-lg text-offWhite/60">
              &copy; {new Date().getFullYear()} Great Green Wall of Africa Foundation. All rights reserved.
            </p>
            <p className="text-sm text-offWhite/40 mt-4">
              A registered 501(c)(3) nonprofit organization. EIN: XX-XXXXXXX
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
