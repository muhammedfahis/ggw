import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Gallery | GGWoA Foundation",
};

const showcases = [
    {
        title: "2024 CC Forum’s Global Investment in Sustainable Development",
        description: "Leaders and investors outlining regenerative finance instruments to accelerate the wall.",
        images: ["/assets/gallery/rs=w:1110_1.jpeg", "/assets/gallery/rs=w:1110_2.jpeg", "/assets/gallery/rs=w:1110_3.jpeg"],
    },
    {
        title: "2024 COP16 Events",
        description: "Panels, media briefings, and cultural activations during the CBD COP in Colombia.",
        images: ["/assets/gallery/rs=w:1110_4.jpeg", "/assets/gallery/rs=w:1110_5.jpeg", "/assets/gallery/rs=w:1110_6.jpeg"],
    },
    {
        title: "2024 COP29 Events",
        description: "Coalition-building moments with ministers, creatives, and private sector allies.",
        images: ["/assets/gallery/rs=w:1110_7.jpeg", "/assets/gallery/rs=w:1110_8.jpeg", "/assets/gallery/rs=w:1110_9.jpeg"],
    },
    {
        title: "Summit of the Future 2024",
        description: "Dialogue circles centering youth voices and indigenous knowledge keepers.",
        images: ["/assets/gallery/rs=w:1110_10.jpeg", "/assets/gallery/rs=w:1110_11.jpeg", "/assets/gallery/rs=w:1110_12.jpeg"],
    },
    {
        title: "NDC Summit 2024",
        description: "Member states aligning Great Green Wall outcomes with revised national commitments.",
        images: ["/assets/gallery/rs=w:1110_13.jpeg", "/assets/gallery/rs=w:1110_14.jpeg", "/assets/gallery/rs=w:1110_15.jpeg"],
    },
    {
        title: "UAE–Africa Economic Corridor Summit 2024",
        description: "Investment briefings focused on infrastructure, logistics, and circular economies.",
        images: ["/assets/gallery/rs=w:1110_16.jpeg", "/assets/gallery/rs=w:1110_17.jpeg", "/assets/gallery/rs=w:1110_18.jpeg"],
    },
    {
        title: "Climate Action Africa Forum (CAAF24)",
        description: "Creative showcases and policy hackathons accelerating climate entrepreneurship.",
        images: ["/assets/gallery/rs=w:1110_19.jpeg", "/assets/gallery/rs=w:1110_20.jpeg", "/assets/gallery/rs=w:1110_21.jpeg"],
    },
    {
        title: "Africa Fertilizer & Soil Health Summit 2024",
        description: "Demonstrations of soil regeneration science with farmer cooperatives.",
        images: ["/assets/gallery/rs=w:1110_22.jpeg", "/assets/gallery/rs=w:1110_23.jpeg", "/assets/gallery/rs=w:1110_24.jpeg"],
    },
    {
        title: "African Diaspora Investment Symposium 2024",
        description: "Diaspora leaders mobilizing capital and storytelling for restoration projects.",
        images: ["/assets/gallery/rs=w:1110_25.jpeg", "/assets/gallery/rs=w:1110_26.jpeg", "/assets/gallery/rs=w:1110_27.jpeg"],
    },
];

const video = {
    title: "COP28 GGWoA Concert",
    description: "An immersive performance celebrating the guardians of the Great Green Wall.",
    thumbnail: "/assets/gallery/rs=w:740_1.jpeg",
};

export default function GalleryPage() {
    return (
        <main className="bg-ggwBg text-ggwDark">
            <section className="py-20">
                <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Gallery</p>
                    <h1 className="mt-4 text-4xl font-semibold md:text-5xl">Events, summits, and field immersions.</h1>
                    <p className="mt-4 text-lg text-ggwDark/80">Browse the chapters powering the Great Green Wall—from policy rooms to Sahel dunes.</p>
                </div>
            </section>

            <section className="pb-20">
                <div className="mx-auto max-w-6xl space-y-12 px-4 md:px-6">
                    {showcases.map((event) => (
                        <article key={event.title} className="rounded-[40px] border border-ggwDark/5 bg-white/90 p-6 shadow-sm md:p-10">
                            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwGreen">Event</p>
                                    <h2 className="mt-3 text-3xl font-semibold">{event.title}</h2>
                                </div>
                                <p className="max-w-xl text-sm text-ggwDark/70">{event.description}</p>
                            </div>
                            <div className="mt-6 grid gap-4 md:grid-cols-3">
                                {event.images.map((img, index) => (
                                    <div key={img} className="group relative overflow-hidden rounded-[28px] border border-ggwDark/5 bg-ggwBg">
                                        <div className="relative aspect-[4/3]">
                                            <Image
                                                src={img}
                                                alt={`${event.title} image ${index + 1}`}
                                                fill
                                                className="object-cover transition duration-500 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 20vw"
                                            />
                                        </div>
                                        <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                                            <div className="absolute inset-0 bg-gradient-to-t from-ggwDark/80 to-transparent" />
                                            <div className="absolute bottom-0 left-0 right-0 p-3 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                                                {event.title}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="pb-16">
                <div className="mx-auto max-w-6xl rounded-[40px] border border-ggwDark/5 bg-white px-6 py-10 shadow-sm md:flex md:items-center md:gap-10 md:px-10">
                    <div className="relative h-60 w-full overflow-hidden rounded-[28px] border border-ggwDark/10 md:h-64 md:w-1/2">
                        <Image src={video.thumbnail} alt={video.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-ggwDark/70 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-ggwDark font-semibold">▶</span>
                        </div>
                    </div>
                    <div className="mt-6 md:mt-0 md:flex-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Video highlight</p>
                        <h3 className="mt-3 text-3xl font-semibold">{video.title}</h3>
                        <p className="mt-3 text-sm text-ggwDark/80">{video.description}</p>
                        <Link href="/news" className="mt-6 inline-flex rounded-full bg-ggwDark px-6 py-3 text-sm font-semibold text-white transition hover:bg-ggwGreen hover:text-ggwDark">
                            See event coverage
                        </Link>
                    </div>
                </div>
            </section>

            <section className="pb-24">
                <div className="mx-auto max-w-5xl rounded-[40px] border border-ggwDark/5 bg-white px-6 py-16 text-center shadow-sm md:px-12">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Connect with us</p>
                    <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Need full-resolution assets or editorial stories?</h2>
                    <p className="mt-4 text-lg text-ggwDark/80">
                        The GGWoA media desk curates ready-to-publish sets for partners, press, and collaborators. Let us know what you need.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="rounded-full bg-ggwDark px-6 py-3 text-sm font-semibold text-white transition hover:bg-ggwGreen hover:text-ggwDark">
                            Contact media desk
                        </Link>
                        <Link href="/news" className="rounded-full border border-ggwDark/20 px-6 py-3 text-sm font-semibold text-ggwDark hover:border-ggwGreen">
                            Browse news archive
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
