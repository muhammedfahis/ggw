"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Counter } from "@/components/Counter";
import { createSlug } from "@/lib/leaderData";

const impactMetrics = [
  {
    value: "15M+",
    label: "Trees Established",
    detail: "Native species cultivated with community cooperatives.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.71c.16-.46.38-.86.66-1.22C9.47 15.97 12.99 12 17 12V8z" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    accent: "text-primary",
    bg: "bg-primary/10",
  },
  {
    value: "50K+",
    label: "Hectares Restored",
    detail: "Dune stabilization, soil regeneration, and water retention.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l3.707 3.707A1 1 0 0019 17.414V7a1 1 0 00-.293-.707z" clipRule="evenodd" />
      </svg>
    ),
    accent: "text-accent",
    bg: "bg-accent/15",
  },
  {
    value: "120K+",
    label: "Youth & Women Trained",
    detail: "Entrepreneurship, agroforestry, and civic leadership.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    ),
    accent: "text-primary",
    bg: "bg-primary/10",
  },
  {
    value: "11",
    label: "Countries Engaged",
    detail: "Coordinated restoration across the Sahel.",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
      </svg>
    ),
    accent: "text-accent",
    bg: "bg-accent/15",
  },
];

const missionPoints = [
  "Culture is infrastructure: creative expression unlocks momentum and trust.",
  "Communities sit at the design table from day zero and share in the upside.",
  "Policy makers, artists, scientists, and investors solve in the same room.",
];

const workstreams = [
  {
    title: "Regenerative Land Systems",
    detail: "Restoring soil, water, and biodiversity with agroforestry corridors, dune stabilization, and climate-resilient crops.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "bg-accent/15 text-accent border-accent/30",
  },
  {
    title: "Culture & Narrative",
    detail: "Film, music, and design collaborations that make stewardship aspirational and mobilize global allies.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: "bg-accent/15 text-accent border-accent/30",
  },
  {
    title: "Education & Skills",
    detail: "Eco-curricula, early learning canopies, and technical academies preparing youth for green careers.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: "bg-accent/15 text-accent border-accent/30",
  },
  {
    title: "Finance & Governance",
    detail: "Blended finance vehicles, public policy design, and data systems that keep value in communities.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "bg-accent/15 text-accent border-accent/30",
  },
];

const programs = [
  {
    title: "Thiès Forest Restoration",
    location: "Senegal",
    description: "Transforming former mining land through native planting, water harvesting, and youth employment.",
    image: "/assets/home/rs=w:365,h:365,cg:true_1.jpeg",
    href: "/projects/thies-forest",
    status: "Active",
    statusColor: "bg-primary text-offWhite",
  },
  {
    title: "Project SCALE",
    location: "",
    description: "Scaling climate-resilient livelihoods along the Great Green Wall with regenerative agriculture hubs.",
    image: "/assets/home/rs=w:365,h:365,cg:true_2.jpeg",
    href: "/projects/scale",
    status: "Active",
    statusColor: "bg-primary text-offWhite",
  },
  {
    title: "IMAGINE-1",
    location: "",
    description: "Pan-African creative campaign reframing the wall through music, film, and immersive art.",
    image: "/assets/home/rs=w:365,h:365,cg:true.jpeg",
    href: "/projects/imagine-1",
    status: "Active",
    statusColor: "bg-primary text-offWhite",
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
    image: "/assets/projects/rs=w:365,h:365,cg:true_1.jpeg",
    location: "Niger & Djibouti",
  },
];

const team = [
  {
    name: "His Excellency Olusegun Obasanjo",
    title: "Grand Patron",
    role: "Former President of Nigeria",
    bio: "Statesman and Grand Patron of GGWoA, championing pan-African cooperation and long-term investment in the Great Green Wall.",
    photo: "/assets/leadership/Olusegun Obasanjo.png",
    initials: "OO",
  },
  {
    name: "Aliko Dangote, GCON",
    title: "Patron",
    role: "Chairman Dangote Group",
    bio: "Business leader mobilizing private sector capital and industrial know-how to strengthen restoration economies across the Sahel.",
    photo: "/assets/leadership/Aliko Dangote.png",
    initials: "AD",
  },
  {
    name: "Dr. Ramatoulaye Diallo N'diaye",
    title: "Chief Executive Officer",
    role: "Visionary African leader blending diplomacy, culture, climate action, and innovative finance.",
    bio: "CEO of the Great Green Wall of Africa Foundation and Chair of the Africa Impact Finance Subgroup of the Global Impact Disclosure Taskforce. Former Minister of Culture, Handicrafts and Tourism of Mali. Her frameworks Culture as Capital, Bridge of Dignity, and Ubuntu Earth Fund guide transformative development honoring Africa's heritage while catalyzing climate resilience and dignity-centered prosperity.",
    photo: "/assets/leadership/Ramatoulaye Diallo N'diaye.jpeg",
    initials: "RD",
  },
  {
    name: "Joseph Faluyi",
    title: "COO and Executive Director",
    role: "Technology executive with 20+ years driving digital transformation in IT, fintech, and sustainable development.",
    bio: "COO and Executive Director for GGWoA with extensive experience in IT transformation, fintech solutions, and climate-focused ventures. Former Managing Principal at Capco, he combines technology expertise with social entrepreneurship, managing strategic partnerships and operations. Holds MBA in Technology Management from University of Phoenix.",
    photo: "/assets/leadership/Joseph Faluyi.png",
    initials: "JF",
  },
  {
    name: "Dr. Frannie Leautier",
    title: "Managing Director of Southbridge Investments",
    role: "Development finance and innovative climate investment.",
    bio: "Renowned development finance expert pioneering blended finance models that unlock inclusive, climate-resilient growth.",
    photo: "/assets/leadership/Dr. Frannie Leautier.png",
    initials: "FL",
  },
  {
    name: "H.E. Youssou N'Dour",
    title: "Former Minister of Tourism for Senegal",
    role: "Cultural diplomacy and creative advocacy.",
    bio: "Artist and statesman using his global platform to connect culture, youth, and environmental stewardship for the Great Green Wall.",
    photo: "/assets/leadership/H.E. Youssou N'Dour .png",
    initials: "YN",
  },
];

const partners = [
  { name: "Pan-African Agency of the Great Green Wall", logo: "/assets/home/rs=h:100,cg:true,m.jpeg" },
  { name: "African Union GGW Initiative", logo: "/assets/home/rs=h:100,cg:true,m_1.jpeg", imgClassName: "max-h-12" },
  { name: "Bezos Earth Fund", logo: "/assets/home/rs=h:100,cg:true,m.png" },
];

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => { setIsLoaded(true); }, []);

  return (
    <main className="bg-offWhite text-charcoal font-body overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[88vh] flex items-start justify-center text-center text-offWhite overflow-hidden pt-6 md:pt-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/home/rs=w:1920,m.png"
            alt="Great Green Wall of Africa"
            fill
            priority
            className="object-cover object-center brightness-50 contrast-110"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deepEarth/90 via-primary/60 to-primary/50" />
        </div>

        <div className={`relative z-10 max-w-4xl mx-auto px-6 pt-4 pb-20 md:pt-6 flex flex-col items-center transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {/* Emblem */}
          <div className="w-20 h-20 rounded-full border-2 border-accent bg-deepEarth/70 backdrop-blur-md flex items-center justify-center mb-6 shadow-2xl">
            <Image src="/assets/home/logo.png" alt="GGWoA" width={52} height={52} className="object-contain" />
          </div>

          <div className="eyebrow eyebrow-light inline-flex items-center gap-2 px-3 py-1 rounded bg-accent/15 border border-accent/40 mb-6 backdrop-blur-sm">
            Continental Ecological Renewal
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.08] tracking-tight mb-4 drop-shadow-md">
            A Living Infrastructure
          </h1>
          <h2 className="font-heading italic text-2xl md:text-3xl text-accent/90 font-medium mb-6 max-w-2xl drop-shadow">
            for Nature, Culture, and Prosperity
          </h2>
          <p className="font-body text-base md:text-lg text-offWhite/85 max-w-2xl leading-relaxed mb-10">
            We design regenerative systems alongside governments, traditional leaders, and bold partners so that land restoration becomes the most inspiring development story of this decade.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/about" className="btn-accent">
              Discover Our Approach
            </Link>
            <Link href="/projects" className="btn-outline-light backdrop-blur-sm">
              Explore Sahel Impact
            </Link>
          </div>

          <div className="mt-16 flex flex-col items-center gap-2 text-accent/70 font-accent text-xs tracking-[0.2em] uppercase animate-bounce">
            <span>Scroll Down</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── THE GREAT BLUE WAVE ── */}
      <section className="relative py-16 md:py-20 bg-water-deep text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen" poster="/assets/the-great-blue-wave/water-bg.png">
            <source src="/assets/home/Water_Animation_Video_Creation.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-water-deep/40 via-water-deep/30 to-water-deep/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-water-bright/15 border border-water-bright/40 font-accent text-xs font-semibold uppercase tracking-[0.2em] text-water-foam mb-6 backdrop-blur-sm">
            <svg className="w-3.5 h-3.5 text-water-bright" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
            Water Security Initiative
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
            The Great Blue Wave
          </h2>
          <p className="font-heading italic text-xl md:text-2xl text-water-foam/90 mb-6 max-w-2xl font-light">
            Building water-secure futures across the Sahel through innovative atmospheric water harvesting systems
          </p>
          <p className="font-body text-base md:text-lg text-white/80 max-w-2xl leading-relaxed mb-10">
            Discover how we&apos;re creating a distributed network of water hubs that anchor humanitarian response, schools, clinics, and regenerative farming — turning dry frontiers into thriving communities.
          </p>

          <Link href="/the-great-blue-wave" className="btn bg-white text-water-deep hover:bg-water-foam">
            Learn More →
          </Link>

        </div>
      </section>

      {/* ── ADVANCE AFRICA ── */}
      <section className="relative bg-secondary py-16 md:py-20 border-y border-accent/30">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="bg-offWhite rounded overflow-hidden border border-accent/30 border-t-2 border-t-accent grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">

            {/* Left: editorial image */}
            <div className="relative w-full h-80 lg:h-auto overflow-hidden bg-deepEarth">
              <Image
                src="/assets/advance-africa-hero.png"
                alt="Advance Africa Foundation — Entrepreneurs across the Sahel"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-deepEarth/85 via-deepEarth/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-deepEarth/90 via-transparent to-transparent" />
              <div className="absolute top-10 left-8 max-w-xs text-white hidden sm:block">
                <span className="eyebrow eyebrow-light">Strategic Alliance</span>
                <p className="font-heading italic text-base mt-2 text-white/90 leading-snug">
                  &ldquo;Training without capital produces plans, not businesses.&rdquo;
                </p>
              </div>
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-3 px-4 py-2 rounded bg-deepEarth/80 backdrop-blur-md border border-accent/50">
                  <Image src="/assets/advance-africa-logo.png" alt="Advance Africa Foundation" width={36} height={36} className="rounded object-cover" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-offWhite tracking-wider uppercase">Advance Africa</span>
                    <span className="font-accent text-[10px] text-accent font-medium tracking-[0.2em] uppercase">Foundation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: content */}
            <div className="bg-offWhite p-8 md:p-14 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-primary text-accent border border-accent/60 font-accent font-semibold text-[11px] tracking-wider uppercase mb-5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Strategic Partner</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-deepEarth leading-tight mb-4">
                Transforming Human Capital Across Africa
              </h2>
              <div className="w-12 h-0.5 bg-accent mb-6" />
              <p className="font-body text-base text-charcoal/80 leading-relaxed mb-8">
                Advance Africa Foundation bridges the gap between trained talent and economic opportunity — connecting candidates across the Sahel to entrepreneurship, financing, and mentorship networks that strengthen the Great Green Wall corridor.
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                {["4 Core Programs", "6 Partner Tiers", "SDG-Aligned"].map((chip) => (
                  <div key={chip} className="px-3 py-1.5 bg-white rounded border border-accent/60 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="font-accent text-xs font-semibold text-deepEarth tracking-wide">{chip}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link href="/advance-africa" className="btn-accent inline-flex items-center gap-2 whitespace-nowrap">
                  Discover Advance Africa <span aria-hidden="true">→</span>
                </Link>
                <Link href="/advance-africa" className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium text-charcoal/70 hover:text-deepEarth underline decoration-accent/50 underline-offset-4 transition-colors">
                  About the partnership <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR IMPACT ── */}
      <section className="py-16 md:py-20 bg-secondary text-deepEarth border-b border-accent/20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow block mb-3">Measurable Renewal</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-deepEarth mb-4">Our Impact</h2>
            <p className="font-body text-base text-charcoal/75">
              Measurable results that demonstrate the power of community-led restoration across the Sahel.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((stat) => (
              <div key={stat.label} className="bg-offWhite p-8 rounded border border-accent/30 hover:border-accent transition-colors flex flex-col">
                <div>
                  <div className={`w-12 h-12 rounded ${stat.bg} ${stat.accent} flex items-center justify-center mb-6`}>
                    {stat.icon}
                  </div>
                  <div className="font-heading text-4xl font-bold text-primary mb-2">
                    <Counter end={stat.value} />
                  </div>
                  <div className="font-body font-semibold text-lg text-deepEarth mb-2">{stat.label}</div>
                </div>
                <p className="font-body text-xs italic text-charcoal/70 border-t border-accent/20 pt-4 mt-4">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION / RESTORATION ── */}
      <section className="py-16 md:py-20 bg-offWhite text-deepEarth overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left */}
            <div className="lg:col-span-7">
              <div className="eyebrow mb-4">
                Foundational Doctrine
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-deepEarth leading-tight mb-8">
                Restoration is the{" "}
                <span className="text-accent">backbone of climate security</span>{" "}
                and cultural continuity.
              </h2>

              <p className="font-body text-base text-charcoal/80 leading-relaxed mb-8">
                Our teams align national policy ambition with grounded community action. We carry out landscape diagnostics, unlock blended finance, and deploy on-the-ground collectives who know every dune, pasture, and family relying on it.
              </p>
              <ul className="space-y-4 mb-10">
                {missionPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-accent mt-1.5 flex-shrink-0 shadow-sm" />
                    <p className="font-body text-base text-charcoal/80">{pt}</p>
                  </li>
                ))}
              </ul>

              <Link href="/about" className="btn-outline">
                Explore Strategy →
              </Link>
            </div>

            {/* Right: editorial image */}
            <div className="lg:col-span-5">
              <div className="relative rounded overflow-hidden border border-deepEarth/10">
                <Image
                  src="/assets/home/field-note.jpeg"
                  alt="Landscape restoration field note"
                  width={600}
                  height={700}
                  className="w-full h-[520px] object-cover contrast-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deepEarth via-deepEarth/30 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="w-10 h-0.5 bg-accent mb-4" />
                  <p className="font-heading italic text-lg md:text-xl text-offWhite leading-relaxed mb-3">
                    &ldquo;Every hectare we restore tells a story of dignity returned to its people.&rdquo;
                  </p>
                  <div className="eyebrow eyebrow-light">
                    Aminata Barry · Community forester, Senegal
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE PILLARS ── */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary to-deepEarth text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow eyebrow-light block mb-3">Institutional Architecture</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">Core Pillars</h2>
            <p className="font-body text-base text-white/80">
              Four integrated workstreams that restore ecosystems while building resilient livelihoods across the Sahel.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workstreams.map((stream) => (
              <div key={stream.title} className="bg-white/5 backdrop-blur-md border border-white/10 rounded p-8 hover:bg-white/10 hover:border-accent/40 transition-all flex flex-col justify-between group">
                <div>
                  <div className={`w-12 h-12 rounded ${stream.color} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {stream.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-3">{stream.title}</h3>
                  <p className="font-body text-sm text-white/70 leading-relaxed">{stream.detail}</p>
                </div>
                <div className="link-arrow text-accent mt-6 pt-4 border-t border-white/10 group-hover:translate-x-1 transition-transform">
                  Learn More →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACTIVE PROGRAMS ── */}
      <section className="py-16 md:py-20 bg-secondary text-deepEarth">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow block mb-3">On-The-Ground Operations</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">Active Programs</h2>
            <p className="font-body text-base text-charcoal/75">
              Flagship initiatives shaping the Great Green Wall across the continent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Link key={program.title} href={program.href} className="bg-white rounded overflow-hidden border border-deepEarth/10 hover:border-primary/40 transition-colors flex flex-col group">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className={`absolute top-4 right-4 tag ${program.statusColor}`}>
                    {program.status}
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-deepEarth mb-3">{program.title}</h3>
                    <p className="font-body text-sm text-charcoal/80 leading-relaxed mb-6">{program.description}</p>
                  </div>
                  <div className="link-arrow group-hover:text-deepEarth transition-colors">
                    Learn more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUCCESS STORIES ── */}
      <section className="py-16 md:py-20 bg-offWhite text-deepEarth border-b border-accent/20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow block mb-3">Voices from the Field</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">Success Stories</h2>
            <p className="font-body text-base text-charcoal/75">
              Real-world examples of how communities, partners, and innovative approaches are turning restoration into lasting prosperity.
            </p>
          </div>

          <div className="space-y-10">
            {successStories.map((story, i) => (
              <div key={story.title} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 md:p-12 rounded border border-deepEarth/10">
                <div className={`lg:col-span-6 relative rounded overflow-hidden h-64 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 tag bg-deepEarth/85 text-accent backdrop-blur-sm">
                    {story.location}
                  </div>
                </div>
                <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="eyebrow block mb-3">Success Story</span>
                  <h3 className="font-heading text-3xl font-bold text-deepEarth mb-4">{story.title}</h3>
                  <p className="font-body text-base text-charcoal/80 leading-relaxed">
                    {story.story}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-secondary to-offWhite text-deepEarth">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow block mb-3">Our Leadership</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">Visionaries Rooted in Action</h2>
            <p className="font-body text-base text-charcoal/75">
              Leaders who combine decades of diplomatic influence, grassroots wisdom, and technical excellence to turn restoration into lasting prosperity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <Link
                key={member.name}
                href={`/leadership/${createSlug(member.name)}`}
                className="bg-white rounded p-6 border border-deepEarth/10 hover:border-primary/40 transition-colors flex flex-col group"
              >
                <div className="w-24 h-24 rounded-full border-2 border-accent mx-auto mb-5 overflow-hidden relative flex-shrink-0">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-[center_20%]"
                    sizes="96px"
                  />
                </div>
                <div className="text-center mb-4">
                  <h4 className="font-heading font-bold text-xl text-deepEarth group-hover:text-primary transition-colors">{member.name}</h4>
                  <div className="font-accent text-xs font-semibold text-accentDark uppercase tracking-wider mt-1">{member.title}</div>
                  <div className="text-xs text-charcoal/60 mt-0.5 italic line-clamp-2" title={member.role}>{member.role}</div>
                </div>
                <p className="font-body text-xs text-charcoal/75 text-center leading-relaxed line-clamp-4">{member.bio}</p>
                <span className="mt-auto pt-4 text-center font-accent text-[11px] font-semibold uppercase tracking-wider text-primary group-hover:text-deepEarth transition-colors">
                  View profile →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUSTED PARTNERS ── */}
      <section className="py-16 md:py-20 bg-offWhite text-deepEarth border-b border-accent/20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow block mb-3">Continental & Global Coalitions</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">Trusted Partners</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Advance Africa featured partner */}
            <Link href="/advance-africa" className="flex flex-col items-center justify-center h-32 p-6 bg-white rounded border border-accent/40 hover:border-accent transition-colors group">
              <Image src="/assets/advance-africa-logo.png" alt="Advance Africa Foundation" width={52} height={52} className="object-contain mb-2" />
              <span className="font-accent text-[10px] uppercase tracking-[0.2em] text-accentDark font-semibold">Strategic Partner</span>
            </Link>

            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center justify-center h-32 p-6 bg-white rounded border border-deepEarth/10 hover:border-accent/40 transition-colors">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={64}
                  className={`object-contain max-h-12 ${partner.imgClassName ?? ""}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary via-primary to-deepEarth text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
          <span className="eyebrow eyebrow-light block mb-3">Join The Movement</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-8">
            Partner with us to design the planet&apos;s most ambitious restoration effort
          </h2>
          <p className="font-body text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you bring capital, technology, storytelling, or policy expertise, there is room to co-create lasting impact along the Great Green Wall.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-accent">
              Start a Conversation
            </Link>
            <Link href="/projects" className="btn-outline-light">
              Explore Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-16 md:py-20 bg-secondary text-deepEarth border-b border-accent/20">
        <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
          <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent mx-auto mb-4 flex items-center justify-center text-deepEarth">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-3">Stay Connected</h2>
          <p className="font-body text-sm md:text-base text-charcoal/75 mb-8">
            Join our newsletter to follow milestones, meet partners, and see how your support fuels the Great Green Wall.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your official email address"
              className="flex-grow px-4 py-3.5 rounded bg-white border border-deepEarth/15 text-charcoal placeholder:text-charcoal/50 text-sm transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <button type="submit" className="btn-accent flex-shrink-0">
              Subscribe
            </button>
          </form>
          <span className="text-[11px] text-charcoal/60 mt-3 block">Join 10,000+ subscribers. Unsubscribe anytime.</span>
        </div>
      </section>

    </main>
  );
}
