import Image from "next/image";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Africa's Human Capital Transformation | Advance Africa Foundation — GGWoA",
  description:
    "Advance Africa Foundation, a strategic partner of the Great Green Wall of Africa, converts trained, underutilized talent into employees and business owners — connected to capital, markets and long-term support.",
};

const ADAF_URL = "https://advanceafrica.org";

const facts = [
  { label: "Model", value: "Training-to-enterprise" },
  { label: "Core platform", value: "The Bridge (AAFB)" },
  { label: "Flagship event", value: "Annual conference, every April" },
  { label: "Affiliation", value: "Great Green Wall of Africa" },
];

const principles = [
  { title: "Outcomes over participation", body: "Success is income earned, businesses surviving and jobs created — not people trained." },
  { title: "Partnership over duplication", body: "Builds on training already delivered across Africa instead of competing with it." },
  { title: "Dignity over dependency", body: "Every pathway leads toward self-reliance, not ongoing assistance." },
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

const vehicles = [
  {
    code: "AAFN",
    title: "The Network",
    body: "Placement, market access and recurring peer events connecting entrepreneurs, apprentices and employers.",
    href: `${ADAF_URL}/the-network`,
  },
  {
    code: "AAFCA",
    title: "Capital Access",
    body: "Pooled grant capital for assessed candidates today, with investment-ready introductions to institutional finance over time.",
    href: `${ADAF_URL}/capital-access`,
  },
];

const stats = [
  { value: "42%", label: "Average income increase" },
  { value: "68%", label: "Business survival at 24 months" },
  { value: "310", label: "Businesses launched" },
  { value: "980", label: "Jobs created" },
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

const partnerRoles = [
  { title: "Demand", body: "Share the talent and suppliers you'll need in 12–36 months." },
  { title: "Capability", body: "Provide equipment, facilities, technology or standards." },
  { title: "Capital", body: "Fund cohorts or contribute startup capital." },
  { title: "Market", body: "Open procurement, distribution or subcontracting." },
  { title: "Training", body: "Refer your trained graduates to The Bridge." },
  { title: "Practitioner", body: "Host apprentices in your workshop or business." },
];

const partnerBenefits = [
  "A work-ready talent pipeline",
  "New suppliers, customers and markets",
  "Measurable ESG and social-investment outcomes",
];

const candidatePaths = [
  { title: "Build My Career", steps: ["Apply", "Assess", "Employment", "Growth"] },
  { title: "Build My Business", steps: ["Apply", "Assess", "Launch", "Scale"] },
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/advance-africa-hero.png"
            alt="Advance Africa Foundation — Entrepreneurs across the Sahel"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/65 to-deepEarth/85" />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-32 py-[120px] md:py-[140px] lg:py-[160px]">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-8 pl-1.5 pr-5 py-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow-lg">
              <Image src="/assets/advance-africa-logo.png" alt="" width={36} height={36} className="rounded-full object-cover" />
              <span className="text-sm font-semibold text-deepEarth">Advance Africa Foundation</span>
            </div>
            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6">STRATEGIC PARTNER · HUMAN CAPITAL</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-offWhite mb-8 leading-tight">
              Africa&apos;s Human Capital Transformation
            </h1>
            <p className="text-xl md:text-2xl text-offWhite/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Advance Africa Foundation (ADAF) converts trained, underutilized talent into employees and business owners — and connects them to the capital, markets and long-term support they need to create jobs for others.
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
        <dl className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
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
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-accent/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-deepEarth">Our Promise</p>
                </div>
                <p className="text-xl font-heading italic text-charcoal/80 leading-relaxed">
                  &ldquo;ADAF picks up where training ends.&rdquo;
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
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-sm font-semibold text-deepEarth">Annual Conference</span>
                </div>
              </div>
            </div>
          </div>

          {/* Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((p, i) => (
              <div key={p.title} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-accent/20">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-heading font-bold text-primary">0{i + 1}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-deepEarth mb-4 group-hover:text-primary transition-colors duration-300">{p.title}</h3>
                <p className="text-charcoal/80 leading-relaxed">{p.body}</p>
              </div>
            ))}
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

      {/* Programs */}
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-offWhite">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="PROGRAMS" title="One Core Platform, Three Supporting Vehicles" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured: The Bridge */}
            <a
              href={`${ADAF_URL}/the-bridge`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-3xl bg-gradient-to-br from-primary to-deepEarth p-10 lg:p-12 text-offWhite shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div>
                <span className="inline-block bg-accent text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                  AAFB · Core Platform
                </span>
                <h3 className="mt-6 text-4xl font-heading font-bold">The Bridge</h3>
                <p className="mt-4 text-lg text-offWhite/85 leading-relaxed">
                  The entry point to the pipeline. The Bridge verifies a candidate&apos;s completed training with the partner institution, assesses readiness, and places them on a career or business track — with no starting over.
                </p>
                <ul className="mt-8 grid grid-cols-2 gap-3">
                  {["Discovery", "Verification", "Readiness assessment", "Track placement"].map((s) => (
                    <li key={s} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-offWhite/95">
                      <span className="h-2 w-2 rounded-full bg-accent flex-none" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="mt-10 inline-flex items-center gap-2 font-semibold text-accent">
                Explore The Bridge
                <span className="transition-transform duration-300 group-hover:translate-x-1"><ArrowIcon /></span>
              </span>
            </a>

            <div className="grid grid-cols-1 gap-8">
              {vehicles.map((v) => (
                <a
                  key={v.code}
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-accent/20"
                >
                  <span className="inline-block bg-accent/20 text-deepEarth px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">
                    {v.code}
                  </span>
                  <h3 className="mt-4 text-2xl font-heading font-bold text-deepEarth group-hover:text-primary transition-colors duration-300">{v.title}</h3>
                  <p className="mt-3 text-charcoal/80 leading-relaxed">{v.body}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">
                    Learn more
                    <span className="transition-transform duration-300 group-hover:translate-x-1"><ArrowIcon /></span>
                  </span>
                </a>
              ))}

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-accent/20">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-block bg-accent/20 text-deepEarth px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">AAFC</span>
                  <span className="font-accent text-xs uppercase tracking-wider text-accent">Every April · In-person</span>
                </div>
                <h3 className="mt-4 text-2xl font-heading font-bold text-deepEarth">The Conference</h3>
                <p className="mt-3 text-charcoal/80 leading-relaxed">
                  The annual Human Capital Transformation Conference brings candidates, graduates, mentors, employers, financiers and government together for a day of learning, recognition and connection.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={`${ADAF_URL}/the-conference`} target="_blank" rel="noopener noreferrer" className="bg-primary text-offWhite px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Register
                  </a>
                  <a href={`${ADAF_URL}/the-conference`} target="_blank" rel="noopener noreferrer" className="border border-accent text-accent px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-accent hover:text-primary">
                    Sponsor
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="IMPACT" title="Measuring Transformation, Not Participation" />
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-3xl p-8 text-center shadow-lg border border-accent/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <dd className="text-5xl font-heading font-bold text-primary mb-3">{s.value}</dd>
                <dt className="text-lg font-semibold text-deepEarth">{s.label}</dt>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-center text-sm text-charcoal/50">Source: Advance Africa Foundation</p>
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

      {/* Get Involved */}
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-offWhite">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="GET INVOLVED" title="Where Do You Fit?" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Organizations */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-accent/20">
              <p className="font-accent text-xs uppercase tracking-wider text-accent mb-3">FOR ORGANIZATIONS</p>
              <h3 className="text-3xl font-heading font-bold text-deepEarth mb-8">Six Ways to Partner</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {partnerRoles.map((r, i) => (
                  <li key={r.title} className="flex gap-4">
                    <span className="w-10 h-10 flex-none rounded-full bg-accent/20 flex items-center justify-center font-heading font-bold text-primary">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-deepEarth">{r.title} Partner</p>
                      <p className="text-sm text-charcoal/70 leading-relaxed">{r.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-8 border-t border-accent/20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                <ul className="space-y-3 text-charcoal/80">
                  {partnerBenefits.map((b) => (
                    <li key={b} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm" aria-hidden="true">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col items-start sm:items-end gap-4">
                  <a href={`${ADAF_URL}/partners`} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-3 whitespace-nowrap">
                    Become a Partner
                    <ArrowIcon />
                  </a>
                  <a href={`${ADAF_URL}/become-a-mentor`} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:text-accent transition-colors">
                    Become a mentor →
                  </a>
                </div>
              </div>
            </div>

            {/* Candidates */}
            <div className="lg:col-span-5 bg-secondary rounded-3xl p-8 md:p-12 shadow-xl border border-accent/20 flex flex-col">
              <p className="font-accent text-xs uppercase tracking-wider text-accent mb-3">FOR CANDIDATES</p>
              <h3 className="text-3xl font-heading font-bold text-deepEarth mb-8">Two Doors, One Journey</h3>
              <div className="space-y-5 flex-1">
                {candidatePaths.map((p) => (
                  <div key={p.title} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <p className="text-xl font-heading font-bold text-primary mb-4">{p.title}</p>
                    <div className="flex flex-wrap items-center gap-2">
                      {p.steps.map((s, i) => (
                        <span key={s} className="flex items-center gap-2">
                          <span className="bg-accent/20 text-deepEarth px-3 py-1 rounded-full text-xs font-semibold">{s}</span>
                          {i < p.steps.length - 1 && <span className="text-accent" aria-hidden="true">→</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <a href={`${ADAF_URL}/find-your-path`} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 self-start inline-flex items-center gap-3">
                Find Your Path
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-gradient-to-br from-deepEarth to-primary text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-white p-1.5 shadow-2xl mb-8">
            <Image src="/assets/advance-africa-logo.png" alt="Advance Africa Foundation" width={84} height={84} className="rounded-full object-cover w-full h-full" />
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
