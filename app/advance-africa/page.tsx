import Image from "next/image";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Africa's Human Capital Transformation | Advance Africa — GGWoA",
  description:
    "Advance Africa, a strategic partner of the Great Green Wall of Africa, converts trained, underutilized talent into employees and business owners — connected to capital, markets and long-term support.",
};

const ADAF_URL = "https://advanceafrica.org";

const facts = [
  { label: "Model", value: "Training-to-enterprise" },
  { label: "Affiliation", value: "Great Green Wall of Africa" },
];

const pipeline = [
  "Intake",
  "Assessment",
  "Placement",
  "Financing & Market Access",
  "Launch",
  "Grow",
  "Employ Others",
];

const alignment = [
  "A green-job talent pipeline for restoration work along the Wall corridor.",
  "Restored land turned into lasting livelihoods and locally owned enterprises.",
  "Shared development commitments across the Sahelian partner nations.",
];

const sdgs = [
  { n: 1, name: "No Poverty", color: "#E5243B" },
  { n: 2, name: "Zero Hunger", color: "#DDA63A" },
  { n: 5, name: "Gender Equality", color: "#FF3A21" },
  { n: 8, name: "Decent Work", color: "#A21942" },
  { n: 10, name: "Reduced Inequalities", color: "#DD1367" },
  { n: 17, name: "Partnerships", color: "#19486A" },
];

function SectionHeader({ eyebrow, title, intro, light = false }: { eyebrow: string; title: string; intro?: ReactNode; light?: boolean }) {
  return (
    <div className="text-center mb-16 md:mb-20">
      <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">{eyebrow}</p>
      <h2 className={`text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight ${light ? "text-offWhite" : "text-deepEarth"}`}>
        {title}
      </h2>
      <div className="w-32 h-1 bg-accent mx-auto mb-8" />
      {intro && (
        <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${light ? "text-offWhite/80" : "text-charcoal/80"}`}>{intro}</p>
      )}
    </div>
  );
}

function ExternalIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
    </svg>
  );
}

export default function AdvanceAfricaPage() {
  return (
    <main className="bg-offWhite text-charcoal min-h-screen">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary">
        {/* Mobile: photo as a banner above the text; md+: full-bleed background */}
        <div className="relative aspect-[4/3] sm:aspect-[16/9] md:absolute md:inset-0 md:aspect-auto">
          <Image
            src="/assets/advance-africa-hero.png"
            alt="Advance Africa — Entrepreneurs across the Sahel"
            fill
            priority
            className="object-cover object-[68%_center] md:object-center"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/10 to-transparent md:bg-gradient-to-br md:from-primary/80 md:via-primary/65 md:to-deepEarth/85" />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-32 pt-6 pb-28 md:py-[140px] lg:py-[160px]">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-offWhite mb-6 md:mb-8 leading-tight break-words">
              Africa&apos;s Human Capital Transformation
            </h1>
            <p className="text-lg md:text-2xl text-offWhite/90 max-w-4xl mx-auto leading-relaxed mb-10 md:mb-12">
              Advance Africa (ADAF) converts trained, underutilized talent into employees and business owners — and connects them to the capital, markets and long-term support they need to create jobs for others.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href={`${ADAF_URL}/partners`} target="_blank" rel="noopener noreferrer" className="btn-warm flex items-center gap-3 justify-center hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Partner With ADAF
                <ArrowIcon />
              </a>
              <a href={ADAF_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-3 justify-center hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Visit advanceafrica.org
                <ExternalIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="px-6 md:px-12 lg:px-32 -mt-16 relative z-20">
        <dl className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {facts.map((f) => (
            <div key={f.label} className="bg-white rounded-3xl p-8 shadow-xl border border-accent/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <dt className="font-accent text-xs uppercase tracking-wider text-accent mb-3">{f.label}</dt>
              <dd className="text-xl font-heading font-bold text-deepEarth leading-snug">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* About ADAF */}
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8">
              <div>
                <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">ABOUT ADAF</p>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-deepEarth mb-8 leading-tight">
                  An economic conversion system for Africa
                </h2>
                <div className="w-20 h-1 bg-accent mb-8" />
                <p className="text-xl text-charcoal leading-relaxed max-w-[65ch]">
                  Millions of Africans finish vocational training or apprenticeships and still can&apos;t reach stable work or ownership. ADAF identifies that talent, assesses readiness, and carries each candidate through placement, financing and launch until they are earning — and hiring.
                </p>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/assets/advance-africa-conference.png"
                alt="Advance Africa community gathering"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="THE ECONOMIC CONVERSION MODEL"
            title="The 7-Stage Transformation Pipeline"
            intro="Training happens first, independently, through partner institutions. ADAF takes each trained candidate the rest of the way."
          />
          <ol className="relative grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-y-10 gap-x-4">
            <div className="hidden lg:block absolute top-8 left-[7%] right-[7%] h-1 bg-accent/40 rounded-full" aria-hidden="true" />
            {pipeline.map((step, i) => (
              <li key={step} className="relative flex flex-col items-center text-center group">
                <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-accent font-heading font-bold text-xl shadow-lg ring-4 ring-secondary group-hover:scale-110 transition-transform duration-300">
                  {i + 1}
                </span>
                <span className="mt-4 font-semibold text-deepEarth leading-snug">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* GGWoA Alignment + SDGs */}
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-gradient-to-br from-primary to-deepEarth text-offWhite">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">WHY ADAF × GGWOA</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
              Building the human capital behind the restoration economy
            </h2>
            <div className="w-20 h-1 bg-accent mb-10" />
            <ul className="space-y-5">
              {alignment.map((a) => (
                <li key={a} className="flex gap-4 text-lg text-offWhite/90 leading-relaxed">
                  <span className="mt-0.5 w-8 h-8 flex-none rounded-full bg-accent/20 flex items-center justify-center">
                    <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/15">
            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">UN SUSTAINABLE DEVELOPMENT GOALS</p>
            <ul className="grid grid-cols-3 gap-4">
              {sdgs.map((g) => (
                <li
                  key={g.n}
                  className="aspect-square rounded-2xl p-3 flex flex-col justify-between text-white shadow-lg hover:scale-105 transition-transform duration-300"
                  style={{ backgroundColor: g.color }}
                >
                  <span className="font-heading font-bold text-3xl leading-none">{g.n}</span>
                  <span className="text-[11px] font-semibold uppercase leading-tight">{g.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-gradient-to-br from-deepEarth to-primary text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-white p-1.5 shadow-2xl mb-8">
            <Image src="/assets/advance-africa-logo.png" alt="Advance Africa" width={84} height={84} className="rounded-full object-cover w-full h-full" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-offWhite mb-8 leading-tight">
            Connect with Advance Africa
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-8" />
          <p className="text-xl text-offWhite/80 leading-relaxed max-w-3xl mb-8">
            Whether you are a company, funder, training institution or candidate, ADAF will route you to the right team.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <a href="mailto:inquiry@AdvanceAfrica.org" className="bg-white/10 backdrop-blur-sm text-offWhite px-5 py-2 rounded-full text-sm font-semibold hover:bg-accent hover:text-primary transition-all duration-300">inquiry@AdvanceAfrica.org</a>
            <a href="https://www.linkedin.com/advance-africa-foundation" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm text-offWhite px-5 py-2 rounded-full text-sm font-semibold hover:bg-accent hover:text-primary transition-all duration-300">LinkedIn</a>
            <a href={ADAF_URL} target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm text-offWhite px-5 py-2 rounded-full text-sm font-semibold hover:bg-accent hover:text-primary transition-all duration-300">advanceafrica.org</a>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href={`${ADAF_URL}/partners`} target="_blank" rel="noopener noreferrer" className="btn-warm flex items-center gap-3 justify-center hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Become a Partner
              <ArrowIcon />
            </a>
            <a href={`${ADAF_URL}/apply-1`} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-3 justify-center hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Apply as a Candidate
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
