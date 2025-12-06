"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { createSlug } from "@/lib/leaderData";

export default function LeadershipPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const patrons = [
        // 2. Grand Patron – His Excellency Olusegun Obasanjo – Former President of Nigeria
        {
            title: "Grand Patron",
            name: "His Excellency Olusegun Obasanjo",
            role: "Former President of Nigeria",
            image: "/assets/leadership/Olusegun Obasanjo.png",
            bio: "Former President of Nigeria (1999–2007) and respected African statesman, lending diplomatic authority and long-term vision to the Great Green Wall movement.",
        },
        // 3. Aliko Dangote.jpeg = Patron – Aliko Dangote, GCON – Chairman Dangote Group
        {
            title: "Patron",
            name: "Aliko Dangote, GCON",
            role: "Chairman Dangote Group",
            image: "/assets/leadership/Aliko Dangote.png",
            bio: "Chairman of the Dangote Group and one of Africa's most influential industrialists, championing private sector participation in climate and restoration initiatives.",
        },
        // Chief Executive Officer – Ramatoulaye Diallo N'diaye
        {
            title: "Distinguished Leader",
            name: "Dr. Ramatoulaye Diallo N'diaye",
            role: "Chief Executive Officer",
            image: "/assets/leadership/Ramatoulaye Diallo N'diaye.jpeg",
            bio: "Visionary African leader blending diplomacy, cultural renaissance, climate action, and innovative finance. As CEO of GGWoA, she leads continent-wide restoration efforts. Former Minister of Culture, Handicrafts and Tourism of Mali, she champions frameworks like Culture as Capital and the Bridge of Dignity. Chair of Africa Impact Finance Subgroup, Global Impact Disclosure Taskforce. Distinguished with National Orders of Mali and France, UNESCO 70th Anniversary Medal, and UAE Government Decoration.",
        },
    ];

    const board = [
        // Dr. Frannie Leautier – Managing Director of Southbridge Investments
        {
            name: "Dr. Frannie Leautier",
            role: "Managing Director of Southbridge Investments",
            image: "/assets/leadership/Dr. Frannie Leautier.png",
            bio: "Senior Partner and CEO at SouthBridge Investments with a distinguished career at the World Bank Group and African Development Bank, leading infrastructure, risk and asset management across the African continent.",
        },
        // 8. COO and Executive Director – Joseph Faluyi
        {
            name: "Joseph Faluyi",
            role: "COO and Executive Director",
            image: "/assets/leadership/Joseph Faluyi.png",
            bio: "Technology executive with over 20 years in IT, digital, and financial services. Former Managing Principal at Capco driving fintech transformation, with experience at Deloitte and Dell Technologies. As COO of GGWoA, he manages internal operations, new business ventures, and strategic partnerships. Previously Executive at Winsun Technologies focusing on climate-sustainable construction. MBA in Technology Management from University of Phoenix.",
        },
        // 1. H.E. Youssou N'Dour – Former Minister of Tourism for Senegal
        {
            name: "H.E. Youssou N'Dour",
            role: "Former Minister of Tourism for Senegal",
            image: "/assets/leadership/H.E. Youssou N'Dour .png",
            bio: "World‑renowned Senegalese musician, activist and former Minister of Tourism and Culture, using his cultural platform to mobilize support for climate action.",
        },
        // 3. H.E. Dr. Lassina Zerbo – full role description
        {
            name: "H.E. Dr. Lassina Zerbo",
            role: "Executive Secretary Emeritus Comprehensive Nuclear Test-Ban Treaty Organization (CTBTO); Chairman Rwanda Atomic Energy Board (RAEB); Former Prime Minister of Burkina Faso",
            image: "/assets/leadership/H.E. Dr. Lassina Zerbo.png",
            bio: "Geophysicist and nuclear science diplomat, former Executive Secretary of the CTBTO, advising on science‑driven governance and energy security for a resilient Sahel.",
        },
        // 4. Richad Soundardjee – Managing Director China International Capital Corporation
        {
            name: "Richad Soundardjee",
            role: "Managing Director China International Capital Corporation",
            image: "/assets/leadership/Richad Soundardjee.png",
            bio: "Managing Director at CICC with previous senior leadership at Société Générale, structuring capital markets solutions for emerging markets and sustainable infrastructure.",
        },
        // 5. Abderrahmane Sissako – Film Director, Screenwriter, Producer
        {
            name: "Abderrahmane Sissako",
            role: "Film Director, Screenwriter, Producer",
            image: "/assets/leadership/Abderrahmane Sissako .png",
            bio: "Mauritanian‑born Malian filmmaker behind works such as Timbuktu, Bamako and Waiting for Happiness, bringing global attention to stories of justice, culture and the environment.",
        },
        // 6. Patron – Aliko Dangote, GCON – Chairman Dangote Group (Strategic Steward card shares Patron image)
        {
            name: "Aliko Dangote, GCON",
            role: "Chairman Dangote Group",
            image: "/assets/leadership/Aliko Dangote.png",
            bio: "Patron and strategic steward bringing private sector scale and long-term investment to the Great Green Wall.",
        },
        // 7. Patron – H.E. Ambassador Maman Sambo Sidikou
        {
            name: "H.E. Ambassador Maman Sambo Sidikou",
            role: "AU Special Rep for Mali and the Sahel; Former UN Special Rep. of the Secretary-General for West Africa and the Sahel",
            image: "/assets/leadership/Sambo Sidikou.png",
            bio: "Diplomatic champion fostering regional cooperation, peace-building and strategic partnerships across the Sahel and West Africa.",
        },
        {
            name: "Anna Getaneh",
            role: "Founder of African Mosaique",
            image: "/assets/leadership/Anna Getaneh.png",
            bio: "Former international model and fashion designer. Founder of African Mosaique (fashion design & manufacturing hub) and The Ethiopian Children's Fund (ECF) serving 1,000+ children. Design philosophy: Source, Design and Develop in Africa. Featured in Vogue, Marie Claire, ELLE. University of Maryland graduate in Business Management.",
        },
        {
            name: "Vanessa Moungar",
            role: "Chief Diversity Officer of the LVMH Group",
            image: "/assets/leadership/Vanessa Moungar.png",
            bio: "Chief Diversity Officer at LVMH, recognised for championing inclusive growth, gender equity and youth empowerment across the public and private sectors.",
        },
        {
            name: "Dr Mariam Aidara Ba",
            role: "CEO of Dakar Science Po",
            image: "/assets/leadership/Dr Mariam Aidara Ba.png",
            bio: "Political scientist and CEO of Dakar Science Po, shaping the next generation of African leaders in governance, policy and democratic innovation.",
        },
        {
            name: "Manny Aly Ansar",
            role: "Founder, Timbuktu Cultural Desert Festival",
            image: "/assets/leadership/Manny Aly Ansar.png",
            bio: "Founder of the Timbuktu Cultural Desert Festival, using music, culture and storytelling to promote peace-building, dialogue and resilience in the Sahel.",
        },
        {
            name: "Kenza Bounjou",
            role: "Lawyer, Founding Partner at URITI",
            image: "/assets/leadership/Kenza Bounjou.png",
            bio: "Lawyer and founding partner at URITI, advising on governance, investment and impact structures that align climate action with social justice.",
        },
        {
            name: "Will Mbiakop",
            role: "Founder and Executive Chairman – African Sports and Creative Institute (ASCI)",
            image: "/assets/leadership/Will Mbiakop.png",
            bio: "Innovative sports business leader of Cameroonian and Moroccan heritage. Executive Chairman of AMW Consulting Dubai and ASCI. Led NBA Africa's business development generating 70% of revenue through ground-breaking partnerships. Author of 'Africa Sports Industry: Facts, Challenges and Opportunities'. Launched 'One Million Wins' sports & sustainability program.",
        },
    ];

    const management = [
        {
            name: "Dr. Ramatoulaye Diallo N'diaye",
            role: "Chief Executive Officer",
            focus: "Mobilizes culture, finance, and diplomacy to accelerate the Great Green Wall through strategic partnerships and impact capital.",
            bio: "Visionary African leader with deep experience in cultural diplomacy, climate finance, and governance. Former Minister of Culture of Mali, now leading continent-wide restoration while shaping global standards for inclusive impact finance. Her philosophy bridges heritage, dignity, and ecological stewardship as foundations for sustainable prosperity."
        },
        {
            name: "Joseph Faluyi",
            role: "COO and Executive Director",
            focus: "Manages internal operations, new business ventures, and strategic partnerships across the Great Green Wall initiative.",
            bio: "Technology executive and social entrepreneur with 20+ years driving IT transformation and digital innovation in financial services. As COO of GGWoA, he oversees operational excellence and stakeholder relationships, bringing experience from Capco, Deloitte, Dell Technologies, and climate-focused ventures like Winsun Technologies."
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
                            <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6" style={{ animationDelay: '0.2s' }}>LEADERSHIP</p>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-offWhite mb-8 leading-tight" style={{ animationDelay: '0.4s' }}>
                                Meet Our Leadership Team
                            </h1>
                            <p className="text-xl md:text-2xl lg:text-3xl text-offWhite/90 max-w-4xl mx-auto leading-relaxed" style={{ animationDelay: '0.6s' }}>
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
                        <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Providing strategic vision and diplomatic influence to accelerate our mission across the continent.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {patrons.map((patron, index) => (
                            <Link
                                key={patron.name}
                                href={`/leadership/${createSlug(patron.name)}`}
                                className="group cursor-pointer animate-fade-in-up h-full flex flex-col"
                                style={{ animationDelay: `${0.4 + index * 0.15}s` }}
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
                                                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
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
                        <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Aligning culture, policy, and finance for sustainable impact across the Great Green Wall.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {board.map((member, index) => (
                            <Link
                                key={member.name}
                                href={`/leadership/${createSlug(member.name)}`}
                                className="group cursor-pointer animate-fade-in-up h-full flex flex-col"
                                style={{ animationDelay: `${0.4 + index * 0.15}s` }}
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

                                        {/* View Profile Link */}
                                        <div className="mt-6 flex items-center gap-2 text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="text-sm">View Full Profile</span>
                                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
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
                        <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            The operational nerve centre driving implementation and community engagement across the Sahel.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {management.map((person, index) => (
                            <article
                                key={person.name}
                                className="group cursor-pointer animate-fade-in-up"
                                style={{ animationDelay: `${0.4 + index * 0.15}s` }}
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
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
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
                        <p className="font-accent text-xs uppercase tracking-wider text-accent mb-6" style={{ animationDelay: '0.2s' }}>JOIN OUR TEAM</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-offWhite mb-8 leading-tight" style={{ animationDelay: '0.4s' }}>
                            Want to Join Our Leadership Team?
                        </h2>
                        <p className="text-xl md:text-2xl text-offWhite/90 mb-12 leading-relaxed max-w-3xl mx-auto" style={{ animationDelay: '0.6s' }}>
                            We're always looking for passionate leaders who want to make a difference in the Sahel region and beyond.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center" style={{ animationDelay: '0.8s' }}>
                            <Link href="/contact" className="bg-offWhite text-primary px-10 py-5 rounded-full font-semibold text-lg hover:bg-offWhite/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3">
                                View Open Roles
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
                                </svg>
                            </Link>
                            <Link href="/contact" className="border border-offWhite text-offWhite px-10 py-5 rounded-full font-semibold text-lg hover:bg-offWhite hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3">
                                Contact Team
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
