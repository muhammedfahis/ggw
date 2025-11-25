import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "About Us | GGWoA Foundation",
    description: "Learn how the Great Green Wall of Africa Foundation mobilizes culture, policy, and communities to regenerate the Sahel.",
};

const pillars = [
    {
        title: "Climate Change Initiative",
        copy: "Promoting bold climate projects that deliver measurable ecological gains and economic opportunity.",
    },
    {
        title: "Culture Building",
        copy: "Mobilizing cultural leaders and storytellers so stewardship becomes an expression of pride and identity.",
    },
    {
        title: "Child Education Expansion",
        copy: "Creating early learning experiences under ‘green canopies’ that connect children to land-based knowledge.",
    },
    {
        title: "Community Empowerment",
        copy: "Investing in local governance, skills, and circular economies so communities design their own pathways.",
    },
];

const stats = [
    { label: "Trees established", value: "15M+", detail: "Native species cultivated with community cooperatives." },
    { label: "Hectares restored", value: "50K+", detail: "Dune stabilization, soil regeneration, and water retention." },
    { label: "Youth & women trained", value: "120K+", detail: "Entrepreneurship, agroforestry, and civic leadership." },
];

const principles = [
    "Culture is infrastructure: creative expression unlocks momentum and trust.",
    "Communities sit at the design table from day zero and share in the upside.",
    "Policy makers, artists, scientists, and investors solve in the same room.",
    "Every hectare is measured for ecological, social, and economic outcomes.",
];

const milestones = [
    { year: "2010–2015", focus: "Listening tours & cultural mapping" },
    { year: "2016–2020", focus: "Pilot forests, creative coalitions, and policy advocacy" },
    { year: "2021–2023", focus: "Cross-border projects, women-led innovation labs" },
    { year: "2024+", focus: "Pan-African alliance scaling regenerative economies" },
];

export default function AboutPage() {
    return (
        <main className="bg-ggwBg text-ggwDark">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <Image
                    src="/assets/about/rs=w:1209.jpeg"
                    alt="GGWoA field work"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-ggwDark/90 via-ggwDark/70 to-ggwDark/20" />
                <div className="relative z-10 mx-auto flex min-h-[420px] max-w-6xl flex-col items-center gap-6 px-4 py-24 text-center text-white md:px-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-ggwGreen">About GGWoA</p>
                    <h1 className="text-4xl font-semibold md:text-5xl">Unlocking the potential in Africa&apos;s landscape.</h1>
                    <p className="max-w-3xl text-base text-white/80 md:text-lg">
                        We leverage culture, policy, and community partnerships to ensure climate adaptation strategies reduce the trade-offs between economic growth and sustainability.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/projects" className="rounded-full bg-ggwGreen px-6 py-3 text-sm font-semibold text-ggwDark hover:bg-white">
                            View flagship work
                        </Link>
                        <Link href="/contact" className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                            Start a conversation
                        </Link>
                    </div>
                </div>
            </section>

            {/* Mission + Image */}
            <section className="py-20">
                <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-6">
                    <div className="space-y-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Mission statement</p>
                        <h2 className="text-3xl font-semibold">Culture-powered climate action.</h2>
                        <p className="text-lg text-ggwDark/80">
                            The Great Green Wall of Africa Foundation supports projects with concurrent high positive impact. We convene communities, stakeholders, and policy makers so that climate adaptation strategies become integrated development strategies.
                        </p>
                        <div className="rounded-3xl border border-ggwDark/10 bg-white/80 p-6 shadow-sm">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ggwGreen">How we work</p>
                            <p className="mt-3 text-sm text-ggwDark/80">
                                Diagnostics and storytelling reveal the cultural context of each landscape. From there, we co-design investments that honour traditional knowledge, integrate technology, and anchor long-term governance.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[420px] overflow-hidden rounded-[32px] shadow-xl">
                        <Image
                            src="/assets/about/rs=w:1160,h:538.jpeg"
                            alt="Community planting efforts"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </section>

            {/* Pillars */}
            <section className="py-20">
                <div className="mx-auto max-w-6xl px-4 md:px-6">
                    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">What we activate</p>
                            <h2 className="mt-3 text-3xl font-semibold">Four pillars to regenerate the Sahel.</h2>
                        </div>
                        <p className="max-w-xl text-sm text-ggwDark/70">
                            Inspired by communities on the frontlines, each pillar combines policy engagement, financing, and storytelling to unlock scale.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        {pillars.map((pillar) => (
                            <article key={pillar.title} className="rounded-3xl border border-ggwDark/5 bg-white p-6 shadow-sm">
                                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ggwGreen">Pillar</p>
                                <h3 className="mt-3 text-2xl font-semibold">{pillar.title}</h3>
                                <p className="mt-3 text-sm text-ggwDark/80">{pillar.copy}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats & Principles */}
            <section className="py-20">
                <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.1fr_0.9fr] md:px-6">
                    <div className="rounded-[32px] border border-ggwDark/5 bg-white/90 p-8 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Impact snapshot</p>
                        <div className="mt-6 grid gap-6 md:grid-cols-3">
                            {stats.map((stat) => (
                                <div key={stat.label} className="rounded-2xl bg-ggwBg/80 p-4">
                                    <p className="text-3xl font-semibold text-ggwDark">{stat.value}</p>
                                    <p className="text-sm font-semibold uppercase tracking-wide text-ggwDark/60">{stat.label}</p>
                                    <p className="mt-2 text-xs text-ggwDark/60">{stat.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-[32px] border border-ggwDark/5 bg-white/90 p-8 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Operating principles</p>
                        <ul className="mt-6 space-y-4 text-sm text-ggwDark/80">
                            {principles.map((principle) => (
                                <li key={principle} className="flex gap-3">
                                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-ggwGreen" />
                                    <span>{principle}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Milestones */}
            <section className="py-20">
                <div className="mx-auto max-w-6xl px-4 md:px-6">
                    <div className="rounded-[40px] border border-ggwDark/5 bg-white/90 p-8 shadow-sm md:p-12">
                        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Journey</p>
                                <h2 className="mt-3 text-3xl font-semibold">From cultural spark to continental coalition.</h2>
                            </div>
                            <Link href="/news" className="text-sm font-semibold text-ggwGreen hover:text-ggwDark">
                                Follow announcements →
                            </Link>
                        </div>
                        <div className="mt-10 grid gap-6 md:grid-cols-4">
                            {milestones.map((milestone) => (
                                <div key={milestone.year} className="rounded-2xl border border-ggwDark/5 bg-ggwBg p-5">
                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ggwGreen">{milestone.year}</p>
                                    <p className="mt-3 text-lg font-semibold">{milestone.focus}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="pb-24">
                <div className="mx-auto max-w-5xl rounded-[40px] border border-ggwDark/5 bg-gradient-to-br from-ggwDark to-ggwDark/80 px-6 py-16 text-center text-white shadow-2xl md:px-12">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-ggwGreen">Join our coalition</p>
                    <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Help design the largest living structure on Earth.</h2>
                    <p className="mt-6 text-lg text-white/80">
                        Whether you represent government, philanthropy, or creative industries, we are ready to co-create long-term impact along the Great Green Wall.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="rounded-full bg-ggwGreen px-8 py-4 text-base font-semibold text-ggwDark transition hover:bg-white">
                            Talk to our team
                        </Link>
                        <Link href="/leadership" className="rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10">
                            Meet the leadership
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
