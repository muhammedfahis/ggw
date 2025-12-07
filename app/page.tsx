"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Counter } from "@/components/Counter";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { createSlug } from "@/lib/leaderData";

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
    status: "Active",
    category: "Initiative",
    impact: "High",
  },
  {
    title: "Project SCALE",
    description: "Scaling climate-resilient livelihoods along the Great Green Wall with regenerative agriculture hubs.",
    image: "/assets/home/rs=w:365,h:365,cg:true_2.jpeg",
    href: "/projects/scale",
    status: "Active",
    category: "Initiative",
    impact: "High",
  },
  {
    title: "IMAGINE-1",
    description: "Pan-African creative campaign reframing the wall through music, film, and immersive art.",
    image: "/assets/home/rs=w:365,h:365,cg:true.jpeg",
    href: "/projects/imagine-1",
    status: "Active",
    category: "Initiative",
    impact: "High",
  },
];

const successStories = [
  {
    title: "Thiès Quarry Revival",
    story: "A 5‑hectare former quarry in Senegal is now a thriving native forest with 92% tree survival, creating jobs for 300 youth and reducing flood risk for nearby communities.",
    image: "/assets/home/rs=w:730.jpeg",
    location: "Thiès, Senegal",
    status: "Completed",
  },
  {
    title: "Women-Led Cooperatives",
    story: "In Niger and Djibouti, women's cooperatives manage nurseries and micro‑irrigation, boosting household incomes by 45% while planting 2.5 million trees.",
    image: "/assets/projects/rs=w:365,h:365,cg:true_1.jpeg",
    location: "Niger & Djibouti",
    status: "Completed",
  },
];

const team = [
  // 1. H.E. Alesha Gunobashanjo – Grand Patron
  {
    name: "His Excellency Olusegun Obasanjo",
    title: "Grand Patron",
    role: "Former President of Nigeria",
    bio: "Statesman and Grand Patron of GGWoA, championing pan-African cooperation and long-term investment in the Great Green Wall.",
    photo: "/assets/leadership/Olusegun Obasanjo.png",
  },
  // 2. Aliko Dangote – Patron
  {
    name: "Aliko Dangote, GCON",
    title: "Patron",
    role: "Chairman Dangote Group",
    bio: "Business leader mobilizing private sector capital and industrial know-how to strengthen restoration economies across the Sahel.",
    photo: "/assets/leadership/Aliko Dangote.png",
  },
  // 3. Client (the speaker)
  {
    name: "Dr. Ramatoulaye Diallo N'diaye",
    title: "Chief Executive Officer",
    role: "Visionary African leader blending diplomacy, culture, climate action, and innovative finance.",
    bio: "CEO of the Great Green Wall of Africa Foundation and Chair of the Africa Impact Finance Subgroup of the Global Impact Disclosure Taskforce. Former Minister of Culture, Handicrafts and Tourism of Mali. Her frameworks Culture as Capital, Bridge of Dignity, and Ubuntu Earth Fund guide transformative development honoring Africa's heritage while catalyzing climate resilience and dignity-centered prosperity.",
    photo: "/assets/leadership/Ramatoulaye Diallo N'diaye.jpeg",
  },
  // 4. Joseph Faluyi
  {
    name: "Joseph Faluyi",
    title: "COO and Executive Director",
    role: "Technology executive with 20+ years driving digital transformation in IT, fintech, and sustainable development.",
    bio: "COO and Executive Director for GGWoA with extensive experience in IT transformation, fintech solutions, and climate-focused ventures. Former Managing Principal at Capco, he combines technology expertise with social entrepreneurship, managing strategic partnerships and operations. Holds MBA in Technology Management from University of Phoenix.",
    photo: "/assets/leadership/Joseph Faluyi.png",
  },
  // 5. Dr. Frannie Leautier – Managing Director of Southbridge Investments
  {
    name: "Dr. Frannie Leautier",
    title: "Managing Director of Southbridge Investments",
    role: "Development finance and innovative climate investment.",
    bio: "Renowned development finance expert pioneering blended finance models that unlock inclusive, climate-resilient growth.",
    photo: "/assets/leadership/Dr. Frannie Leautier.png",
  },
  // 6. H.E. Youssou N'Dour – Former Minister of Tourism for Senegal
  {
    name: "H.E. Youssou N'Dour",
    title: "Former Minister of Tourism for Senegal",
    role: "Cultural diplomacy and creative advocacy.",
    bio: "Artist and statesman using his global platform to connect culture, youth, and environmental stewardship for the Great Green Wall.",
    photo: "/assets/leadership/H.E. Youssou N'Dour .png",
  },
];

const partners = [
  { name: "Pan-African Agency of the Great Green Wall", logo: "/assets/home/rs=h:100,cg:true,m.jpeg" },
  { name: "African Union GGW Initiative", logo: "/assets/home/rs=h:100,cg:true,m_1.jpeg", imgClassName: "max-h-12" },
  { name: "Bezos Earth Fund", logo: "/assets/home/rs=h:100,cg:true,m.png" },
  { name: "African Development Bank Group", logo: "/assets/home/rs=h:100,cg:true,m.jpeg" },
];

const workstreams = [
  {
    title: "Regenerative Land Systems",
    detail: "Restoring soil, water, and biodiversity with agroforestry corridors, dune stabilization, and climate-resilient crops.",
    icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.71c.16-.46.38-.86.66-1.22C9.47 15.97 12.99 12 17 12V8z" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>,
    color: "from-green-600 to-green-800"
  },
  {
    title: "Culture & Narrative",
    detail: "Film, music, and design collaborations that make stewardship aspirational and mobilize global allies.",
    icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
    color: "from-purple-600 to-purple-800"
  },
  {
    title: "Education & Skills",
    detail: "Eco-curricula, early learning canopies, and technical academies preparing youth for green careers.",
    icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" /></svg>,
    color: "from-blue-600 to-blue-800"
  },
  {
    title: "Finance & Governance",
    detail: "Blended finance vehicles, public policy design, and data systems that keep value in communities.",
    icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>,
    color: "from-amber-600 to-amber-800"
  },
];

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="bg-offWhite text-charcoal font-body">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/assets/home/rs=w:1920,m.png"
          alt="Great Green Wall of Africa"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-offWhite max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16 lg:py-20">
            <div className={`space-y-6 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
              {/* GGWA Logo */}
              <div className="flex justify-center" style={{ animationDelay: '0.1s' }}>
                <div className="relative">
                  <Image
                    src="/assets/home/logo.png"
                    alt="GGWA Foundation"
                    width={260}
                    height={130}
                    className="object-contain filter drop-shadow-2xl hover:scale-105 transition-all duration-700"
                    priority
                  />
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-4 leading-tight" style={{ animationDelay: '0.3s' }}>
                A Living Infrastructure
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl font-light mb-6 leading-relaxed" style={{ animationDelay: '0.5s' }}>
                for Nature, Culture, and Prosperity
              </p>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 font-light max-w-4xl mx-auto opacity-90 leading-relaxed" style={{ animationDelay: '0.7s' }}>
                We design regenerative systems alongside governments, traditional leaders, and bold partners so that land restoration becomes the most inspiring development story of this decade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.9s' }}>
                <Link href="/about" className="btn-warm text-lg px-8 py-4 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Discover Our Approach
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-offWhite/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-offWhite/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* The Great Blue Wave Introduction */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-32 overflow-hidden border-y border-charcoal/10">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/assets/the-great-blue-wave/water-bg.png"
          >
            <source src="/assets/home/Water_Animation_Video_Creation.mp4" type="video/mp4" />
          </video>
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/50 to-blue-900/70"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex rounded-full bg-white/20 backdrop-blur-md px-6 py-3 text-sm font-semibold text-white uppercase tracking-wider border border-white/30 mb-8 animate-fade-in-up shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
              Water Security Initiative
            </div>

            {/* Main Heading */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight text-white mb-6 animate-fade-in-up drop-shadow-2xl" style={{ animationDelay: '0.1s' }}>
              The Great Blue Wave
            </h2>

            {/* Subtitle */}
            <p className="text-2xl md:text-3xl text-white/95 leading-relaxed mb-6 font-light drop-shadow-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Building water-secure futures across the Sahel through innovative atmospheric water harvesting systems
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto drop-shadow-md animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Discover how we're creating a distributed network of water hubs that anchor humanitarian response, schools, clinics, and regenerative farming — turning dry frontiers into thriving communities.
            </p>

            {/* CTA Button */}
            <div className="pt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link
                href="/the-great-blue-wave"
                className="inline-flex items-center gap-3 bg-white text-blue-900 px-10 py-5 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              >
                Learn More
                <svg className="w-6 h-6 transition-transform group-hover:translate-x-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
                </svg>
              </Link>
            </div>

            {/* Decorative water ripples */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 opacity-30">
              <div className="w-3 h-3 bg-white rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
              <div className="w-3 h-3 bg-white rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
              <div className="w-3 h-3 bg-white rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-32 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 animate-fade-in-up">Our Impact</h2>
            <p className="text-xl md:text-2xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Measurable results that demonstrate the power of community-led restoration across the Sahel.
            </p>
            <div className="w-32 h-1 bg-accent mx-auto mt-8 animate-scale-in origin-center" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {impactMetrics.map((stat, index) => (
              <div key={stat.label} className="bg-offWhite p-8 lg:p-12 rounded-3xl border border-charcoal/10 shadow-lg hover:shadow-2xl transition-all duration-500 text-center transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <p className="text-5xl md:text-6xl font-accent font-bold text-primary mb-4">
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
              <div className="border-l-4 border-accent pl-8 animate-slide-in-left">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-deepEarth">
                  Restoration is the <span className="text-accent">backbone of climate security</span> and cultural continuity.
                </h2>
              </div>
              <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <p className="text-xl md:text-2xl text-charcoal leading-relaxed max-w-[70ch]">
                  Our teams align national policy ambition with grounded community action. We carry out landscape diagnostics, unlock blended finance, and deploy on-the-ground collectives who know every dune, pasture, and family relying on it.
                </p>
              </div>
              <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
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
              <div className="pt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <Link href="/about" className="btn-warm-outline inline-flex items-center gap-3 text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  Explore Strategy
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative h-96 lg:h-full min-h-[600px] rounded-3xl overflow-hidden border-4 border-accent shadow-2xl group animate-slide-in-right">
              <Image
                src="/assets/home/field-note.jpeg"
                alt="Landscape restoration"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
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

      {/* Core Pillars */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-32 bg-gradient-to-br from-primary to-deepEarth">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 text-offWhite animate-fade-in-up">Core Pillars</h2>
            <p className="text-xl md:text-2xl text-offWhite/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Four integrated workstreams that restore ecosystems while building resilient livelihoods across the Sahel.
            </p>
            <div className="w-32 h-1 bg-accent mx-auto mt-8 animate-scale-in origin-center" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workstreams.map((stream, index) => (
              <div key={stream.title} className="bg-offWhite/10 backdrop-blur-sm rounded-3xl p-8 border border-offWhite/20 hover:bg-offWhite/20 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${0.6 + index * 0.15}s` }}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stream.color} flex items-center justify-center mb-6 text-offWhite shadow-lg`}>
                  {stream.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-offWhite">{stream.title}</h3>
                <p className="text-offWhite/80 leading-relaxed">{stream.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-32 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 animate-fade-in-up">Active Programs</h2>
            <p className="text-xl md:text-2xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Flagship initiatives shaping the Great Green Wall across the continent.
            </p>
            <div className="w-32 h-1 bg-accent mx-auto mt-8 animate-scale-in origin-center" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {programs.map((program, index) => (
              <div key={program.title} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden animate-fade-in-up" style={{ animationDelay: `${0.6 + index * 0.15}s` }}>
                <div className="relative h-64 overflow-hidden group">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-skyBlue/90 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                      {program.status}
                    </span>
                  </div>

                  {/* Category Tag */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-semibold">
                      {program.category}
                    </span>
                  </div>

                  {/* Hover Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-heading font-semibold text-offWhite mb-3">{program.title}</h3>
                    <p className="text-offWhite/90 text-sm leading-relaxed mb-4">{program.description}</p>
                    <Link href={program.href} className="text-accent font-semibold hover:text-accent/80 transition-colors inline-flex items-center gap-2">
                      Learn more
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-2xl lg:text-3xl font-heading font-semibold mb-4 text-deepEarth">{program.title}</h3>
                  <p className="text-lg text-charcoal/70 leading-relaxed mb-6">{program.description}</p>
                  <div className="flex items-center gap-4 text-sm text-charcoal/60">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sunsetOrange" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span>{program.impact} Impact</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-skyBlue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <span>{program.status}</span>
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
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 animate-fade-in-up">Success Stories</h2>
            <p className="text-xl md:text-2xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Real-world examples of how communities, partners, and innovative approaches are turning restoration into lasting prosperity.
            </p>
            <div className="w-32 h-1 bg-accent mx-auto mt-8 animate-scale-in origin-center" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <div className="space-y-32">
            {successStories.map((story, index) => (
              <div key={story.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center animate-fade-in-up ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`} style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
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
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      <span className="text-sm font-semibold text-deepEarth">{story.location}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-wider text-accent font-semibold">SUCCESS STORY</p>
                      <p className="text-2xl font-heading font-bold text-deepEarth">{story.title}</p>
                    </div>
                  </div>
                  <p className="text-xl text-charcoal leading-relaxed max-w-[70ch]">{story.story}</p>
                  <div className="flex items-center gap-6 pt-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-sunsetOrange" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-sm font-semibold text-sunsetOrange">High Impact</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-skyBlue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <span className="text-sm font-semibold text-skyBlue">{story.status}</span>
                    </div>
                  </div>
                  <Link href="/projects" className="btn-secondary inline-flex items-center gap-3 text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    Read Full Story
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 md:px-12 lg:px-32 bg-gradient-to-b from-secondary to-offWhite">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-4 animate-fade-in-up">OUR LEADERSHIP</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-tight text-deepEarth animate-slide-in-left">
              Visionaries Rooted in Action
            </h2>
            <div className="w-20 h-0.5 bg-accent mx-auto mb-8 animate-scale-in origin-center"></div>
            <p className="text-xl md:text-2xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Leaders who combine decades of diplomatic influence, grassroots wisdom, and technical excellence to turn restoration into lasting prosperity
            </p>
          </div>

          {/* Featured Leaders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-20">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
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

                    {/* CTA Button */}
                    <Link href={`/leadership/${createSlug(member.name)}`} className="w-full mt-6 py-3 border-2 border-accent text-accent rounded-lg font-semibold uppercase tracking-wider text-sm hover:bg-accent hover:text-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      View Full Bio
                      <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-32 bg-offWhite border-t border-charcoal/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 animate-fade-in-up">Trusted Partners</h2>
            <p className="text-xl md:text-2xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Ministries, financiers, and creative networks standing beside community custodians.
            </p>
            <div className="w-32 h-1 bg-accent mx-auto mt-8 animate-scale-in origin-center" style={{ animationDelay: '0.4s' }}></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={partner.name} className="bg-white p-8 rounded-xl border border-charcoal/10 shadow-sm hover:shadow-lg transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                <div className="flex items-center justify-center h-24">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={180}
                    height={90}
                    className={`object-contain transition-all duration-300 group-hover:scale-110 ${partner.imgClassName ?? ''}`}
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight animate-fade-in-up">
            Partner with us to design the planet's most ambitious restoration effort
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Whether you bring capital, technology, storytelling, or policy expertise, there is room to co-create lasting impact along the Great Green Wall.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link href="/contact" className="bg-offWhite text-primary px-10 py-5 rounded-full font-semibold text-lg hover:bg-offWhite/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3">
              Start a Conversation
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
              </svg>
            </Link>
            <Link href="/projects" className="border border-offWhite text-offWhite px-10 py-5 rounded-full font-semibold text-lg hover:bg-offWhite hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3">
              Explore Opportunities
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-32 bg-secondary border-t border-charcoal/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 animate-fade-in-up">Stay Connected</h2>
          <p className="text-xl md:text-2xl text-charcoal/70 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Join our newsletter to follow milestones, meet partners, and see how your support fuels the Great Green Wall.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-4 bg-white border border-charcoal/20 rounded-full focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-charcoal placeholder-charcoal/40 transition-all duration-300"
                required
              />
            </div>
            <button type="submit" className="btn-warm px-8 py-4 flex items-center gap-2 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Subscribe
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
          <p className="text-sm text-charcoal/50 mt-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Join 10,000+ subscribers. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deepEarth text-offWhite py-20 px-6 md:px-12 lg:px-32 border-t border-offWhite/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div>
              <h3 className="text-3xl font-heading font-bold mb-8">GGWoA</h3>
              <p className="text-offWhite/70 text-lg leading-relaxed">
                Great Green Wall of Africa Foundation. Building a living infrastructure for nature, culture, and prosperity.
              </p>
              <div className="mt-4 space-y-3 text-sm text-offWhite/70">
                <div>
                  <p className="font-semibold text-offWhite">Nigeria Office</p>
                  <p>8B Amaechi Onuoha Crescent, Lekki Phase One, Lekki, Lagos, Nigeria</p>
                </div>
                <div>
                  <p className="font-semibold text-offWhite">US Office</p>
                  <p>433 Plaza Real, Suite 275, Boca Raton, Florida 33432, United States</p>
                </div>
                <div>
                  <p className="font-semibold text-offWhite">UAE Office</p>
                  <p>Great Green wall of Africa, DSO - IFZA, IFZA PROPERTIES, Dubai Silicon Oasis, Dubai, UAE</p>
                </div>
              </div>
              <a
                href="mailto:Inquiry@ggwoa.org"
                className="mt-2 inline-block text-sm font-semibold text-accent hover:text-offWhite"
              >
                Inquiry@ggwoa.org
              </a>
              <div className="flex items-center gap-4 mt-8">
                <a href="#" className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent transition-all duration-300">
                  <svg className="w-6 h-6 text-offWhite" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent transition-all duration-300">
                  <svg className="w-6 h-6 text-offWhite" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent transition-all duration-300">
                  <svg className="w-6 h-6 text-offWhite" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
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
          </div>
        </div>
      </footer>
    </main>
  );
}
