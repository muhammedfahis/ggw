"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function LeadershipPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const patrons = [
        {
            title: "Grand Patron",
            name: "H.E. Olusegun Obasanjo",
            role: "Former President of Nigeria",
            image: "/assets/leadership/rs=w:1023,h:1023,cg:true.jpeg",
            bio: "Distinguished statesman and global leader committed to sustainable development across Africa."
        },
        {
            title: "Patron",
            name: "Aliko Dangote, GCON",
            role: "Chairman, Dangote Group",
            image: "/assets/leadership/rs=w:1023,h:1023,cg:true_1.jpeg",
            bio: "Visionary business leader driving economic empowerment and environmental stewardship."
        },
        {
            title: "Patron",
            name: "Maman Sidikou",
            role: "AU Special Representative",
            image: "/assets/leadership/rs=w:1023,h:1023,cg:true_2.jpeg",
            bio: "Diplomatic champion fostering regional cooperation and peace-building initiatives."
        },
    ];

    const board = [
        {
            name: "H.E. Ramatoulaye Diallo N’Daiye",
            role: "Chairman and CEO",
            image: "/assets/leadership/rs=w:1023,h:1023,cg:true_3.jpeg",
            bio: "Strategic leader uniting culture, finance, and diplomacy to accelerate the Great Green Wall vision."
        },
        {
            name: "H.E. Dr. Lassina Zerbo",
            role: "Executive Secretary Emeritus, CTBTO & President, RAEB",
            image: "/assets/leadership/rs=w:1023,h:1023,cg:true_4.jpeg",
            bio: "International expert bringing scientific excellence and global governance experience."
        },
        {
            name: "H.E. Youssou N'Dour",
            role: "Former Minister of Tourism for Senegal",
            image: "/assets/leadership/rs=w:1023,h:1023,cg:true_5.jpeg",
            bio: "Cultural icon and advocate leveraging artistic influence for environmental advocacy."
        },
        {
            name: "Richard Soundardjee",
            role: "Managing Director, CICC",
            image: "/assets/leadership/rs=w:1023,h:1023,cg:true_6.jpeg",
            bio: "Financial strategist mobilizing investment for sustainable infrastructure development."
        },
        {
            name: "Dr. Frannie Léautier",
            role: "Managing Director, SouthBridge Investments",
            image: "/assets/leadership/rs=w:1023,h:1023,cg:true_7.jpeg",
            bio: "Development finance expert pioneering innovative funding models for climate resilience."
        },
        {
            name: "Abderrahmane Sissako",
            role: "Film Director",
            image: "/assets/leadership/abderrahmane-sissako.jpeg",
            bio: "Acclaimed filmmaker using storytelling to amplify environmental narratives."
        },
    ];

    const management = [
        {
            name: "Ramatoulaye Diallo N’Daiye",
            role: "Chief Executive Officer",
            focus: "Mobilizes culture, finance, and diplomacy to accelerate the Great Green Wall.",
            bio: "Visionary executive leading cross-sector partnerships and strategic initiatives."
        },
        {
            name: "Joseph Faluyi",
            role: "COO and Executive Director",
            focus: "Oversees programme delivery, governance, and field partnerships across the Sahel.",
            bio: "Operations expert ensuring effective implementation and community engagement."
        },
        {
            name: "Regional Fellows",
            role: "Community Leads",
            focus: "Embed with villages to co-design adaptation labs, education hubs, and stewardship campaigns.",
            bio: "Dedicated community facilitators driving grassroots innovation and local capacity building."
        },
    ];

    return (
        <main className="bg-offWhite text-charcoal min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/assets/home/rs=w:1920,m.jpeg')] bg-cover bg-center opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/60 to-primary/80"></div>
                </div>
                <div className="relative z-10 px-6 md:px-12 lg:px-32 py-[120px] md:py-[140px] lg:py-[160px]">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className={`space-y-8 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
                            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6" style={{animationDelay: '0.2s'}}>LEADERSHIP</p>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-offWhite mb-8 leading-tight" style={{animationDelay: '0.4s'}}>
                                Meet Our Leadership Team
                            </h1>
                            <p className="text-xl md:text-2xl lg:text-3xl text-offWhite/90 max-w-4xl mx-auto leading-relaxed" style={{animationDelay: '0.6s'}}>
                                Driving our mission, guiding our vision. Statespeople, business leaders, creators, and scientists combine their disciplines so that communities along the Sahel can thrive.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Patrons Section */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6 animate-fade-in-up">GRAND PATRONS</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deepEarth mb-8 leading-tight animate-slide-in-left">
                            Distinguished Global Leaders
                        </h2>
                        <div className="w-32 h-1 bg-accent mx-auto mb-8 animate-scale-in origin-center"></div>
                        <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                            Providing strategic vision and diplomatic influence to accelerate our mission across the continent.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {patrons.map((patron, index) => (
                            <article 
                                key={patron.name}
                                className="group cursor-pointer animate-fade-in-up h-full flex flex-col"
                                style={{animationDelay: `${0.4 + index * 0.15}s`}}
                            >
                                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border border-accent/20 h-full flex flex-col">
                                    {/* Image Container */}
                                    <div className="relative aspect-[3/4] overflow-hidden flex-shrink-0">
                                        <Image
                                            src={patron.image}
                                            alt={patron.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                        
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-deepEarth/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        
                                        {/* Title Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-4 py-2 bg-accent text-primary rounded-full text-sm font-bold uppercase tracking-wide backdrop-blur-sm">
                                                {patron.title}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex-1 flex flex-col">
                                        <h3 className="text-2xl lg:text-3xl font-heading font-bold text-deepEarth mb-3 leading-tight">{patron.name}</h3>
                                        <p className="text-lg font-semibold text-primary mb-4">{patron.role}</p>
                                        <p className="text-charcoal/80 leading-relaxed text-lg flex-1">{patron.bio}</p>
                                        
                                        {/* Hover Link */}
                                        <div className="mt-6 flex items-center gap-2 text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="text-sm">View Full Profile</span>
                                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Board Section */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-secondary">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6 animate-fade-in-up">BOARD OF DIRECTORS</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deepEarth mb-8 leading-tight animate-slide-in-left">
                            Strategic Stewards
                        </h2>
                        <div className="w-32 h-1 bg-accent mx-auto mb-8 animate-scale-in origin-center"></div>
                        <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                            Aligning culture, policy, and finance for sustainable impact across the Great Green Wall.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {board.map((member, index) => (
                            <article 
                                key={member.name}
                                className="group cursor-pointer animate-fade-in-up h-full flex flex-col"
                                style={{animationDelay: `${0.4 + index * 0.15}s`}}
                            >
                                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border border-accent/20 h-full flex flex-col">
                                    {/* Image Container */}
                                    <div className="relative aspect-[3/4] overflow-hidden flex-shrink-0">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                        
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        
                                        {/* Board Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-bold uppercase tracking-wide backdrop-blur-sm">
                                                BOARD
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex-1 flex flex-col">
                                        <h3 className="text-2xl lg:text-3xl font-heading font-bold text-deepEarth mb-3 leading-tight">{member.name}</h3>
                                        <p className="text-lg font-semibold text-primary mb-4">{member.role}</p>
                                        <p className="text-charcoal/80 leading-relaxed text-lg flex-1">{member.bio}</p>
                                        
                                        {/* Social Links */}
                                        <div className="mt-6 flex items-center gap-3">
                                            <button className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                                                </svg>
                                            </button>
                                            <button className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                                </svg>
                                            </button>
                                            <Link href="#" className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Management Section */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6 animate-fade-in-up">MANAGEMENT TEAM</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-deepEarth mb-8 leading-tight animate-slide-in-left">
                            Operational Leadership
                        </h2>
                        <div className="w-32 h-1 bg-accent mx-auto mb-8 animate-scale-in origin-center"></div>
                        <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                            The operational nerve centre driving implementation and community engagement across the Sahel.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {management.map((person, index) => (
                            <article 
                                key={person.name}
                                className="group cursor-pointer animate-fade-in-up"
                                style={{animationDelay: `${0.4 + index * 0.15}s`}}
                            >
                                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 p-8 border border-accent/20">
                                    {/* Role Badge */}
                                    <div className="mb-6">
                                        <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-bold uppercase tracking-wide">
                                            {person.role}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl lg:text-3xl font-heading font-bold text-deepEarth mb-4 leading-tight">{person.name}</h3>
                                    <p className="text-lg text-charcoal/80 leading-relaxed mb-6">{person.focus}</p>
                                    <p className="text-charcoal/70 leading-relaxed text-lg">{person.bio}</p>
                                    
                                    {/* Contact Link */}
                                    <div className="mt-8 flex items-center gap-2 text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                        </svg>
                                        <span className="text-sm">Get in Touch</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 md:px-12 lg:px-32 py-20 md:py-32 bg-gradient-to-br from-primary via-deepEarth to-primary">
                <div className="max-w-4xl mx-auto text-center">
                    <div className={`space-y-8 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6" style={{animationDelay: '0.2s'}}>JOIN OUR TEAM</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-offWhite mb-8 leading-tight" style={{animationDelay: '0.4s'}}>
                            Want to Join Our Leadership Team?
                        </h2>
                        <p className="text-xl md:text-2xl text-offWhite/90 mb-12 leading-relaxed max-w-3xl mx-auto" style={{animationDelay: '0.6s'}}>
                            We're always looking for passionate leaders who want to make a difference in the Sahel region and beyond.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center" style={{animationDelay: '0.8s'}}>
                            <Link href="/contact" className="bg-offWhite text-primary px-10 py-5 rounded-full font-semibold text-lg hover:bg-offWhite/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3">
                                View Open Roles
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                                </svg>
                            </Link>
                            <Link href="/contact" className="border border-offWhite text-offWhite px-10 py-5 rounded-full font-semibold text-lg hover:bg-offWhite hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3">
                                Contact Team
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
