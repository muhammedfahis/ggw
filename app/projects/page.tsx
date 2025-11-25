import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Projects | GGWoA Foundation",
};

const initiatives = [
    {
        title: "COP28 Pre-summit Series",
        summary: "Aligning climate, education, food security, health, and culture coalitions to accelerate 2030 commitments.",
        image: "/assets/projects/rs=w:365,h:365,cg:true.jpeg",
        tags: ["Policy", "Culture", "Finance"],
    },
    {
        title: "Thiès Forest Restoration",
        summary: "Transforming former mining land through native planting, water harvesting, and youth employment.",
        image: "/assets/projects/rs=w:365,h:365,cg:true_1.jpeg",
        href: "/projects/thies-forest",
        tags: ["Land restoration", "Youth jobs"],
    },
    {
        title: "SCALE",
        summary: "Scaling climate-resilient livelihoods along the Great Green Wall with regenerative agriculture hubs.",
        image: "/assets/projects/rs=w:365,h:365,cg:true_2.jpeg",
        href: "/projects/scale",
        tags: ["Agriculture", "Finance"],
    },
    {
        title: "IMAGINE-1",
        summary: "Pan-African creative campaign reframing the wall through music, film, and immersive art.",
        image: "/assets/projects/rs=w:365,h:365,cg:true_3.jpeg",
        href: "/projects/imagine-1",
        tags: ["Culture", "Storytelling"],
    },
    {
        title: "ENGAGE",
        summary: "Community assemblies in 30+ villages to co-design adaptation plans and governance charters.",
        image: "/assets/projects/rs=w:365,h:365,cg:true_4.jpeg",
        tags: ["Community", "Policy"],
    },
    {
        title: "WORK",
        summary: "Job awareness labs highlighting the climate careers unlocked by the Great Green Wall.",
        image: "/assets/projects/rs=w:365,h:365,cg:true,m.jpeg",
        tags: ["Jobs", "Education"],
    },
];

const workstreams = [
    {
        title: "Regenerative Land Systems",
        detail: "Restoring soil, water, and biodiversity with agroforestry corridors, dune stabilization, and climate-resilient crops.",
    },
    {
        title: "Culture & Narrative",
        detail: "Film, music, and design collaborations that make stewardship aspirational and mobilize global allies.",
    },
    {
        title: "Education & Skills",
        detail: "Eco-curricula, early learning canopies, and technical academies preparing youth for green careers.",
    },
    {
        title: "Finance & Governance",
        detail: "Blended finance vehicles, public policy design, and data systems that keep value in communities.",
    },
];

export default function ProjectsPage() {
    return (
        <main className="bg-ggwBg text-ggwDark">
            <section className="py-20">
                <div className="mx-auto max-w-6xl px-4 md:px-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Projects</p>
                    <div className="mt-6 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
                        <div>
                            <h1 className="text-4xl font-semibold md:text-5xl">Flagship programmes shaping the world&apos;s largest living structure.</h1>
                            <p className="mt-4 text-lg text-ggwDark/80">
                                Each initiative combines policy influence, cultural momentum, and community-owned implementation to accelerate the Great Green Wall mandate.
                            </p>
                        </div>
                        <div className="rounded-[32px] border border-ggwDark/5 bg-white/80 p-6 shadow-sm">
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Where we operate</p>
                            <p className="mt-4 text-sm text-ggwDark/80">Senegal · Nigeria · Ethiopia · Djibouti · Niger · Mali · Chad</p>
                            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Focus 2024–2025</p>
                            <p className="mt-4 text-sm text-ggwDark/80">Carbon-smart agriculture, creative advocacy, regional finance, and youth talent pipelines.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-20">
                <div className="mx-auto max-w-6xl px-4 md:px-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        {initiatives.map((project) => (
                            <article key={project.title} className="overflow-hidden rounded-[32px] border border-ggwDark/5 bg-white shadow-sm">
                                <div className="relative h-64">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <div className="space-y-4 px-6 pb-6 pt-6">
                                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ggwGreen">Initiative</p>
                                    <h2 className="text-2xl font-semibold">{project.title}</h2>
                                    <p className="text-sm text-ggwDark/80">{project.summary}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="rounded-full border border-ggwDark/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ggwDark/70">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    {"href" in project && project.href && (
                                        <div>
                                            <Link href={project.href} className="text-sm font-semibold text-ggwGreen hover:text-ggwDark">
                                                View project
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pb-24">
                <div className="mx-auto max-w-6xl rounded-[40px] border border-ggwDark/5 bg-white/80 px-4 py-12 shadow-sm md:px-8 md:py-16">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Workstreams</p>
                            <h3 className="mt-3 text-3xl font-semibold">Integrated programmes for systemic change.</h3>
                        </div>
                        <p className="max-w-xl text-sm text-ggwDark/70">
                            We design multi-year coalitions with ministries, traditional leaders, investors, and creative industries to ensure restoration is measurable and inclusive.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        {workstreams.map((stream) => (
                            <div key={stream.title} className="rounded-3xl border border-ggwDark/5 bg-ggwBg/70 p-6">
                                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ggwGreen">Stream</p>
                                <h4 className="mt-3 text-xl font-semibold">{stream.title}</h4>
                                <p className="mt-2 text-sm text-ggwDark/80">{stream.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
