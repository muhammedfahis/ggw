"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getLeaderBySlug } from "@/lib/leaderData";
import { useState, useEffect } from "react";

export default function LeaderProfilePage() {
    const params = useParams();
    const slug = params.slug as string;
    const leader = getLeaderBySlug(slug);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    if (!leader) {
        return (
            <main className="bg-offWhite text-charcoal min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-heading font-bold text-deepEarth mb-4">Leader Not Found</h1>
                    <p className="text-xl text-charcoal/70 mb-8">The leader profile you're looking for doesn't exist.</p>
                    <Link href="/leadership" className="btn-warm inline-flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                        </svg>
                        Back to Leadership
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-offWhite text-charcoal min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary via-deepEarth to-primary">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/assets/home/rs=w:1920,m.jpeg')] bg-cover bg-center"></div>
                </div>
                <div className="relative z-10 px-6 md:px-12 lg:px-32 py-20 md:py-32">
                    <div className="max-w-6xl mx-auto">
                        <div className={`${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
                            {/* Back Button */}
                            <Link
                                href="/leadership"
                                className="inline-flex items-center gap-2 text-offWhite/80 hover:text-offWhite mb-12 transition-colors group"
                            >
                                <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                                </svg>
                                <span className="text-lg font-semibold">Back to Leadership</span>
                            </Link>

                            <div className="grid grid-cols-1 lg:grid-cols-[350px,1fr] gap-12 items-start">
                                {/* Profile Image */}
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-accent">
                                    <div className="relative aspect-[4/5]">
                                        <Image
                                            src={leader.image}
                                            alt={leader.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 350px"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                                    </div>
                                    {/* Category Badge */}
                                    <div className="absolute top-6 left-6">
                                        <span className="px-4 py-2 bg-accent text-primary rounded-full text-sm font-bold uppercase tracking-wide backdrop-blur-sm">
                                            {leader.category === "patron" ? "Distinguished Leader" : leader.category === "board" ? "Board" : "Management"}
                                        </span>
                                    </div>
                                </div>

                                {/* Profile Info */}
                                <div className="text-offWhite">
                                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
                                        {leader.name}
                                    </h1>
                                    <p className="text-2xl md:text-3xl font-semibold text-accent mb-4">
                                        {leader.title}
                                    </p>
                                    <p className="text-xl md:text-2xl text-offWhite/90 mb-8 leading-relaxed">
                                        {leader.role}
                                    </p>

                                    {/* Expertise Tags */}
                                    {leader.expertise && leader.expertise.length > 0 && (
                                        <div className="flex flex-wrap gap-3 mb-8">
                                            {leader.expertise.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-4 py-2 bg-white/10 backdrop-blur-sm text-offWhite rounded-full text-sm font-medium border border-white/20"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Social Links */}
                                    <div className="flex items-center gap-4">
                                        {leader.linkedin && (
                                            <a
                                                href={leader.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-offWhite hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-110 border border-white/20"
                                            >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                                </svg>
                                            </a>
                                        )}
                                        {leader.twitter && (
                                            <a
                                                href={leader.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-offWhite hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-110 border border-white/20"
                                            >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Biography Section */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-12">
                        <p className="font-accent text-xs uppercase tracking-wider text-accent mb-4">BIOGRAPHY</p>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-deepEarth mb-8">About {leader.name.split(' ').slice(-1)[0]}</h2>
                        <div className="w-32 h-1 bg-accent"></div>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        {leader.fullBio.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="text-xl text-charcoal/80 leading-relaxed mb-6">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            {leader.highlights && leader.highlights.length > 0 && (
                <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-secondary">
                    <div className="max-w-5xl mx-auto">
                        <div className="mb-12">
                            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-4">CAREER</p>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-deepEarth mb-8">Key Highlights</h2>
                            <div className="w-32 h-1 bg-accent"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {leader.highlights.map((highlight, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-accent/10"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                            </svg>
                                        </div>
                                        <p className="text-lg text-charcoal/80 leading-relaxed">{highlight}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Distinctions Section */}
            {leader.distinctions && leader.distinctions.length > 0 && (
                <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <div className="mb-12">
                            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-4">HONORS</p>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-deepEarth mb-8">Distinctions & Awards</h2>
                            <div className="w-32 h-1 bg-accent"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {leader.distinctions.map((distinction, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-8 border border-accent/20 hover:border-accent/40 transition-colors"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        </div>
                                        <p className="text-xl font-semibold text-deepEarth leading-relaxed">{distinction}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-gradient-to-br from-primary via-deepEarth to-primary">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-offWhite mb-8">
                        Interested in Our Leadership Team?
                    </h2>
                    <p className="text-xl md:text-2xl text-offWhite/90 mb-12 leading-relaxed max-w-3xl mx-auto">
                        Learn more about how our leaders are shaping the future of climate restoration across the Sahel.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/leadership"
                            className="bg-offWhite text-primary px-10 py-5 rounded-full font-semibold text-lg hover:bg-offWhite/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                            </svg>
                            View All Leaders
                        </Link>
                        <Link
                            href="/contact"
                            className="border border-offWhite text-offWhite px-10 py-5 rounded-full font-semibold text-lg hover:bg-offWhite hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3"
                        >
                            Get in Touch
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
