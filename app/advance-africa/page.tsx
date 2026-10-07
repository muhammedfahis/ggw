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

function Overline({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      {children}
    </p>
  );
}

function ExternalIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default function AdvanceAfricaPage() {
  return (
    <main className="bg-offWhite text-charcoal font-body">

      {/* ── HERO + FACT BAR ── */}
      <section className="bg-offWhite">
        <div className="max-w-6xl mx-auto px-4 md:px-6 pt-8 pb-14 lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-3 mb-6 pr-4 rounded border border-deepEarth/15 bg-white">
                <Image src="/assets/advance-africa-logo.png" alt="" width={40} height={40} className="rounded-l object-cover" />
                <span className="text-sm font-semibold text-deepEarth">Advance Africa Foundation</span>
              </div>
              <Overline>Strategic Partner · Human Capital</Overline>
              <h1 className="mt-3 font-heading font-bold text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] tracking-tight text-primary">
                Africa&apos;s Human Capital Transformation
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-charcoal/80 max-w-xl">
                Advance Africa Foundation (ADAF) converts trained, underutilized talent into employees and business owners — and connects them to the capital, markets and long-term support they need to create jobs for others.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`${ADAF_URL}/partners`} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Partner With ADAF
                </a>
                <a href={ADAF_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  Visit advanceafrica.org <ExternalIcon />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-deepEarth rounded" aria-hidden="true" />
              <div className="relative aspect-[4/3] overflow-hidden rounded">
                <Image
                  src="/assets/advance-africa-panel.png"
                  alt="An Advance Africa panel discussion with speakers addressing an audience"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute bottom-4 left-4 rounded bg-deepEarth/80 px-3 py-1 text-[11px] italic tracking-wide text-offWhite">
                  Human Capital Transformation Framework
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-deepEarth">
          <dl className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-2 lg:grid-cols-4 divide-offWhite/10 lg:divide-x">
            {facts.map((f) => (
              <div key={f.label} className="py-6 lg:px-6 first:lg:pl-0">
                <dt className="font-accent text-[11px] uppercase tracking-[0.2em] text-accent">{f.label}</dt>
                <dd className="mt-1 font-heading text-lg text-offWhite">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── ABOUT + PRINCIPLES ── */}
      <section className="bg-offWhite py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 relative aspect-[5/4] overflow-hidden rounded border border-deepEarth/10">
              <Image
                src="/assets/advance-africa-conference.png"
                alt="Advance Africa community gathering"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-7">
              <Overline>About ADAF</Overline>
              <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl text-primary tracking-tight">
                An economic conversion system for Africa
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-charcoal/80">
                Millions of Africans finish vocational training or apprenticeships and still can&apos;t reach stable work or ownership. ADAF identifies that talent, assesses readiness, and carries each candidate through placement, financing and launch until they are earning — and hiring.
              </p>
              <blockquote className="mt-6 border-l-2 border-accent pl-5 font-heading italic text-xl text-deepEarth">
                &ldquo;ADAF picks up where training ends.&rdquo;
              </blockquote>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-deepEarth/10 pt-10">
            {principles.map((p, i) => (
              <div key={p.title}>
                <span className="font-heading text-3xl text-accent">0{i + 1}</span>
                <h3 className="mt-2 font-heading font-semibold text-xl text-deepEarth">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PIPELINE ── */}
      <section className="bg-warmGray py-20 px-4 md:px-6 border-y border-deepEarth/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <Overline>The Economic Conversion Model</Overline>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl text-primary tracking-tight">
              The 7-stage transformation pipeline
            </h2>
            <p className="mt-4 text-sm text-charcoal/70">
              Training happens first, independently, through partner institutions. ADAF takes each trained candidate the rest of the way.
            </p>
          </div>

          <ol className="mt-12 relative grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-y-8 gap-x-4">
            <div className="hidden lg:block absolute top-6 left-[7%] right-[7%] h-px bg-accent" aria-hidden="true" />
            {pipeline.map((step, i) => (
              <li key={step} className="relative flex flex-col items-center text-center">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded border border-accent bg-primary font-accent text-sm font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-3 font-heading font-semibold text-deepEarth leading-snug">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="bg-offWhite py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <Overline>Programs</Overline>
          <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl text-primary tracking-tight">
            One core platform, three supporting vehicles
          </h2>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Featured: The Bridge */}
            <a
              href={`${ADAF_URL}/the-bridge`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded border border-deepEarth/10 border-t-2 border-t-accent bg-primary p-8 lg:p-10 text-offWhite"
            >
              <div>
                <span className="inline-block rounded border border-accent px-2 py-0.5 font-accent text-[11px] font-semibold tracking-wider text-accent">
                  AAFB · CORE PLATFORM
                </span>
                <h3 className="mt-5 font-heading font-bold text-3xl">The Bridge</h3>
                <p className="mt-4 text-offWhite/80 leading-relaxed">
                  The entry point to the pipeline. The Bridge verifies a candidate&apos;s completed training with the partner institution, assesses readiness, and places them on a career or business track — with no starting over.
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-offWhite/90">
                  {["Discovery", "Verification", "Readiness assessment", "Track placement"].map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 font-accent text-xs font-semibold uppercase tracking-wider text-accent">
                Explore The Bridge <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </a>

            <div className="grid grid-cols-1 gap-6">
              {vehicles.map((v) => (
                <a
                  key={v.code}
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded border border-deepEarth/10 bg-white p-6 hover:border-primary/40 transition-colors"
                >
                  <span className="inline-block rounded bg-secondary px-2 py-0.5 font-accent text-[11px] font-semibold tracking-wider text-deepEarth">
                    {v.code}
                  </span>
                  <h3 className="mt-3 font-heading font-semibold text-xl text-primary">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{v.body}</p>
                  <span className="link-arrow mt-4">
                    Learn more <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </a>
              ))}

              <div className="rounded border border-deepEarth/10 bg-white p-6">
                <span className="inline-block rounded bg-secondary px-2 py-0.5 font-accent text-[11px] font-semibold tracking-wider text-deepEarth">
                  AAFC
                </span>
                <h3 className="mt-3 font-heading font-semibold text-xl text-primary">The Conference</h3>
                <p className="mt-1 font-accent text-xs font-semibold uppercase tracking-wider text-accentDark">Every April · In-person</p>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
                  The annual Human Capital Transformation Conference brings candidates, graduates, mentors, employers, financiers and government together for a day of learning, recognition and connection.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a href={`${ADAF_URL}/the-conference`} target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm">
                    Register
                  </a>
                  <a href={`${ADAF_URL}/the-conference`} target="_blank" rel="noopener noreferrer" className="btn-outline btn-sm">
                    Sponsor
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT ── */}
      <section className="bg-secondary py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <Overline>Measuring transformation, not participation</Overline>
          </div>
          <dl className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dd className="font-heading font-bold text-5xl text-primary">{s.value}</dd>
                <div className="mx-auto mt-3 h-0.5 w-10 bg-accent" aria-hidden="true" />
                <dt className="mt-3 text-sm text-deepEarth/80">{s.label}</dt>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-center text-[11px] text-deepEarth/50">Source: Advance Africa Foundation</p>
        </div>
      </section>

      {/* ── GGWOA ALIGNMENT + SDGs ── */}
      <section className="bg-primary py-20 px-4 md:px-6 text-offWhite border-t-2 border-accent">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Overline light>Why ADAF × GGWoA</Overline>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl tracking-tight">
              Building the human capital behind the restoration economy
            </h2>
            <ul className="mt-8 space-y-4">
              {alignment.map((a) => (
                <li key={a} className="flex gap-3 text-offWhite/85 leading-relaxed">
                  <svg className="mt-1 h-5 w-5 flex-none text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <p className="eyebrow eyebrow-light">UN Sustainable Development Goals</p>
            <ul className="mt-4 grid grid-cols-3 gap-3">
              {sdgs.map((g) => (
                <li
                  key={g.n}
                  className="aspect-square rounded p-3 flex flex-col justify-between text-white"
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

      {/* ── GET INVOLVED ── */}
      <section className="bg-offWhite py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <Overline>Get involved</Overline>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl text-primary tracking-tight">Where do you fit?</h2>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Organizations */}
            <div className="lg:col-span-7 rounded border border-deepEarth/10 bg-white p-8">
              <p className="eyebrow">For organizations</p>
              <h3 className="mt-2 font-heading font-semibold text-2xl text-deepEarth">Six ways to partner</h3>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                {partnerRoles.map((r, i) => (
                  <li key={r.title} className="flex gap-3">
                    <span className="font-heading text-lg text-accent leading-none mt-0.5">0{i + 1}</span>
                    <div>
                      <p className="font-semibold text-primary">{r.title} Partner</p>
                      <p className="text-sm text-charcoal/70">{r.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-deepEarth/10 pt-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                <ul className="space-y-2 text-sm text-charcoal/80">
                  {partnerBenefits.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="text-primary" aria-hidden="true">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col items-start sm:items-end gap-3">
                  <a href={`${ADAF_URL}/partners`} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Become a Partner
                  </a>
                  <a href={`${ADAF_URL}/become-a-mentor`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary underline decoration-accent underline-offset-4">
                    Become a mentor →
                  </a>
                </div>
              </div>
            </div>

            {/* Candidates */}
            <div className="lg:col-span-5 rounded border border-deepEarth/10 bg-warmGray p-8 flex flex-col">
              <p className="eyebrow">For candidates</p>
              <h3 className="mt-2 font-heading font-semibold text-2xl text-deepEarth">Two doors, one journey</h3>
              <div className="mt-6 space-y-4 flex-1">
                {candidatePaths.map((p) => (
                  <div key={p.title} className="rounded border border-deepEarth/10 bg-white p-5">
                    <p className="font-heading font-semibold text-lg text-primary">{p.title}</p>
                    <p className="mt-2 text-sm text-charcoal/70">
                      {p.steps.join(" → ")}
                    </p>
                  </div>
                ))}
              </div>
              <a href={`${ADAF_URL}/find-your-path`} target="_blank" rel="noopener noreferrer" className="btn-outline mt-6 self-start">
                Find Your Path
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="bg-deepEarth py-20 px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <Image src="/assets/advance-africa-logo.png" alt="Advance Africa Foundation" width={64} height={64} className="rounded object-cover" />
          <h2 className="mt-6 font-heading font-bold text-3xl sm:text-4xl text-offWhite tracking-tight">
            Connect with Advance Africa
          </h2>
          <p className="mt-4 text-offWhite/70 leading-relaxed">
            Whether you are a company, funder, training institution or candidate, ADAF will route you to the right team.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a href="mailto:inquiry@AdvanceAfrica.org" className="text-accent hover:underline underline-offset-4">inquiry@AdvanceAfrica.org</a>
            <a href="https://www.linkedin.com/advance-africa-foundation" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-4">LinkedIn</a>
            <a href={ADAF_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-4">advanceafrica.org</a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`${ADAF_URL}/partners`} target="_blank" rel="noopener noreferrer" className="btn-accent">
              Become a Partner
            </a>
            <a href={`${ADAF_URL}/apply-1`} target="_blank" rel="noopener noreferrer" className="btn-outline-light">
              Apply as a Candidate
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
