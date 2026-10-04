import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advance Africa Foundation | Strategic Partner — GGWoA",
  description:
    "Advance Africa Foundation's economic conversion system connects underutilized talent to entrepreneurship, financing, and mentorship across the Great Green Wall corridor.",
};

const programs = [
  {
    code: "AAFB",
    stage: "STAGE 01–03",
    title: "The Bridge",
    description:
      "Candidate discovery, readiness assessment, and placement into apprenticeship or entrepreneurship pathways.",
    label: "Talent Pipeline",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    code: "AAFN",
    stage: "STAGE 04–05",
    title: "The Network",
    description:
      "Platform connecting entrepreneurs, apprentices, and employers for mentorship, market access, and peer learning.",
    label: "Collaborative Ecosystem",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    code: "AAFCA",
    stage: "STAGE 06",
    title: "Capital Access",
    description:
      "Grant funding, equipment financing, and financial literacy for candidates launching their first business.",
    label: "Non-Dilutive Financing",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    code: "AAFC",
    stage: "STAGE 07",
    title: "The Conference",
    description:
      "Annual event bringing candidates, graduates, partners, and employers together for connection and learning.",
    label: "Pan-African Summit",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const alignmentPoints = [
  {
    title: "Restoration Economy",
    body: "ADAF fills the human capital pipeline for green jobs along the Wall — ensuring local land restoration creates permanent, generative livelihood pathways.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "SDG Alignment",
    body: "Jointly advancing SDG 1 (No Poverty), SDG 5 (Gender Equality), SDG 8 (Decent Work), SDG 10 (Reduced Inequalities), and SDG 17 across 11 trans-Sahelian nations.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Shared Values",
    body: "Outcomes over participation. Dignity over dependency. Grounding ecological regeneration in self-sustaining African leadership and capital autonomy.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function AdvanceAfricaPage() {
  return (
    <main className="bg-offWhite text-deepEarth font-body">

      {/* ── HERO ── */}
      <section className="relative w-full min-h-[540px] flex items-center justify-center overflow-hidden bg-deepEarth">
        <Image
          src="/assets/projects/rs=w:365,h:365,cg:true_1.jpeg"
          alt="African Sahel landscape at golden hour"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Blue-earth overlay matching ADAF brand */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4e7de1]/60 to-[#3A2D1A]/85" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 flex flex-col items-center text-center">
          {/* Breadcrumb */}
          <nav className="self-start mb-6 text-xs tracking-wider text-offWhite/60 font-accent uppercase font-medium flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-offWhite/40">/</span>
            <span className="text-white font-semibold">Advance Africa</span>
          </nav>

          {/* Strategic Partner badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4e7de1] bg-[#4e7de1]/20 backdrop-blur-md mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#4e7de1] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-offWhite">Strategic Partner</span>
          </div>

          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[58px] text-white leading-[1.1] tracking-tight mb-4 drop-shadow-md">
            Advance Africa Foundation
          </h1>
          <p className="font-body font-light text-lg sm:text-xl lg:text-[21px] text-offWhite/90 max-w-2xl leading-relaxed mb-8">
            Economic Conversion System for Africa&apos;s Human Capital
          </p>

          {/* Info chips */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://advanceafrica.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/60 bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur-sm transition-all hover:scale-105"
            >
              advanceafrica.org
              <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <div className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#4e7de1] text-white font-medium text-sm shadow-md">
              <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Est. 2020
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION INTRO ── */}
      <section className="w-full bg-secondary py-20 px-6 border-b border-accent/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: blockquote with ADAF blue border */}
          <div className="lg:col-span-5">
            <blockquote className="border-l-4 border-[#4e7de1] pl-6 sm:pl-8 py-2">
              <p className="font-heading italic font-semibold text-2xl sm:text-3xl lg:text-[34px] text-deepEarth leading-[1.25]">
                &ldquo;Training without capital produces plans, not businesses.&rdquo;
              </p>
              <footer className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#4e7de1] font-accent">
                — Core Principle of Economic Conversion
              </footer>
            </blockquote>
          </div>

          {/* Right: body paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-deepEarth/90 font-body text-[17px] leading-relaxed">
            <p>
              Advance Africa Foundation operates an economic conversion pipeline transforming underutilized Africans into entrepreneurs and skilled workers. Their 7-stage process takes candidates from initial intake and diagnostic assessment through tailored placement, financing, launch, and ongoing scale — until candidates are actively hiring others in their communities.
            </p>
            <p>
              Through our strategic partnership, the Great Green Wall of Africa integrates ADAF&apos;s proven pipeline directly across restoration zones. This guarantees that communities stewarding 8,000 kilometers of ecological buffers become the primary economic owners and beneficiaries of renewable land wealth.
            </p>
          </div>

        </div>
      </section>

      {/* ── FOUR PROGRAMS ── */}
      <section className="w-full bg-offWhite py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#4e7de1] font-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">
              Their Four Initiatives
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] text-deepEarth tracking-tight mb-4">
              Four Interconnected Initiatives
            </h2>
            <div className="w-10 h-1 bg-[#4e7de1] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((p) => (
              <div
                key={p.code}
                className="bg-white rounded-2xl p-8 border-t-[3px] border-[#4e7de1] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#4e7de1]/10 flex items-center justify-center text-[#4e7de1] transition-transform group-hover:scale-110">
                      {p.icon}
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-[#4e7de1]/80 bg-[#4e7de1]/5 px-2.5 py-1 rounded-md">
                      {p.stage}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-deepEarth mb-3 group-hover:text-[#4e7de1] transition-colors">
                    {p.title} ({p.code})
                  </h3>
                  <p className="text-deepEarth/80 font-body text-base leading-relaxed">
                    {p.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center text-xs font-semibold uppercase tracking-wider text-[#4e7de1] gap-1.5">
                  <span>{p.label}</span>
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GGWOA ALIGNMENT BAND ── */}
      <section className="w-full bg-primary text-white py-20 px-6 relative overflow-hidden border-y border-primary/60">
        {/* Subtle background ring */}
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <div className="w-[800px] h-[800px] rounded-full border-[40px] border-white" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-accent font-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">
              Strategic Cohesion
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
              Why This Partnership Matters
            </h2>
            <div className="w-10 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {alignmentPoints.map((pt) => (
              <div
                key={pt.title}
                className="bg-primary/60 rounded-2xl p-8 border border-accent/20 flex flex-col items-start hover:border-accent/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-accent mb-6">
                  {pt.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">{pt.title}</h3>
                <p className="text-white/80 font-body text-sm leading-relaxed">{pt.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXTERNAL CTA ── */}
      <section className="w-full bg-deepEarth py-24 md:py-[100px] px-6 text-center relative overflow-hidden">
        {/* Ambient blue glow */}
        <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
          <div className="w-[600px] h-[300px] bg-[#4e7de1] blur-[140px] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full border border-[#4e7de1]/30 bg-[#4e7de1]/10 flex items-center justify-center mb-6 text-[#4e7de1]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[48px] text-offWhite leading-tight tracking-tight mb-6">
            Explore the Advance Africa Ecosystem
          </h2>

          <p className="font-body text-[18px] text-offWhite/75 max-w-[600px] leading-relaxed mb-10">
            Visit advanceafrica.org to learn about candidacy pathways, partner tiers, capital access programs, and how ADAF&apos;s human capital pipeline connects to the Great Green Wall&apos;s restoration economy.
          </p>

          <a
            href="https://advanceafrica.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-14 py-5 rounded-full bg-[#4e7de1] hover:bg-[#6c95ea] text-white font-accent font-semibold text-[20px] shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5 active:scale-95"
          >
            Visit Advance Africa Foundation
            <span className="text-xl">↗</span>
          </a>

          <p className="mt-4 font-body text-[13px] text-offWhite/40">
            Opens advanceafrica.org in a new tab
          </p>
        </div>
      </section>

    </main>
  );
}
