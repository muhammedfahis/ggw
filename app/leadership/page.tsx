import Image from "next/image";
import Link from "next/link";
import { createSlug } from "@/lib/leaderData";

export const metadata = {
    title: "Leadership | GGWoA Foundation",
    description: "Meet the statespeople, business leaders, creators, and scientists guiding the Great Green Wall of Africa Foundation.",
};

const patrons = [
    {
        title: "Grand Patron",
        name: "His Excellency Olusegun Obasanjo",
        role: "Former President of Nigeria",
        image: "/assets/leadership/Olusegun Obasanjo.png",
        bio: "Former President of Nigeria (1999–2007) and respected African statesman, lending diplomatic authority and long-term vision to the Great Green Wall movement.",
    },
    {
        title: "Patron",
        name: "Aliko Dangote, GCON",
        role: "Chairman Dangote Group",
        image: "/assets/leadership/Aliko Dangote.png",
        bio: "Chairman of the Dangote Group and one of Africa's most influential industrialists, championing private sector participation in climate and restoration initiatives.",
    },
    {
        title: "Distinguished Leader",
        name: "Dr. Ramatoulaye Diallo N'diaye",
        slug: "ramatoulaye-diallo-ndiaye",
        role: "Chief Executive Officer",
        image: "/assets/leadership/Ramatoulaye Diallo N'diaye.jpeg",
        bio: "Visionary African leader blending diplomacy, cultural renaissance, climate action, and innovative finance. As CEO of GGWoA, she leads continent-wide restoration efforts. Former Minister of Culture, Handicrafts and Tourism of Mali, she champions frameworks like Culture as Capital and the Bridge of Dignity. Chair of Africa Impact Finance Subgroup, Global Impact Disclosure Taskforce. Distinguished with National Orders of Mali and France, UNESCO 70th Anniversary Medal, and UAE Government Decoration.",
    },
];

const board = [
    {
        name: "Dr. Frannie Leautier",
        role: "Managing Director of Southbridge Investments",
        image: "/assets/leadership/Dr. Frannie Leautier.png",
        bio: "Senior Partner and CEO at SouthBridge Investments with a distinguished career at the World Bank Group and African Development Bank, leading infrastructure, risk and asset management across the African continent.",
    },
    {
        name: "Joseph Faluyi",
        role: "COO and Executive Director",
        image: "/assets/leadership/Joseph Faluyi.png",
        bio: "Technology executive with over 20 years in IT, digital, and financial services. Former Managing Principal at Capco driving fintech transformation, with experience at Deloitte and Dell Technologies. As COO of GGWoA, he manages internal operations, new business ventures, and strategic partnerships. Previously Executive at Winsun Technologies focusing on climate-sustainable construction. MBA in Technology Management from University of Phoenix.",
    },
    {
        name: "H.E. Youssou N'Dour",
        role: "Former Minister of Tourism for Senegal",
        image: "/assets/leadership/H.E. Youssou N'Dour .png",
        bio: "World‑renowned Senegalese musician, activist and former Minister of Tourism and Culture, using his cultural platform to mobilize support for climate action.",
    },
    {
        name: "H.E. Dr. Lassina Zerbo",
        role: "Executive Secretary Emeritus Comprehensive Nuclear Test-Ban Treaty Organization (CTBTO); Chairman Rwanda Atomic Energy Board (RAEB); Former Prime Minister of Burkina Faso",
        image: "/assets/leadership/H.E. Dr. Lassina Zerbo.png",
        bio: "Geophysicist and nuclear science diplomat, former Executive Secretary of the CTBTO, advising on science‑driven governance and energy security for a resilient Sahel.",
    },
    {
        name: "Richad Soundardjee",
        role: "Managing Director China International Capital Corporation",
        image: "/assets/leadership/Richad Soundardjee.png",
        bio: "Managing Director at CICC with previous senior leadership at Société Générale, structuring capital markets solutions for emerging markets and sustainable infrastructure.",
    },
    {
        name: "Abderrahmane Sissako",
        role: "Film Director, Screenwriter, Producer",
        image: "/assets/leadership/Abderrahmane Sissako .png",
        bio: "Mauritanian‑born Malian filmmaker behind works such as Timbuktu, Bamako and Waiting for Happiness, bringing global attention to stories of justice, culture and the environment.",
    },
    {
        name: "Aliko Dangote, GCON",
        role: "Chairman Dangote Group",
        image: "/assets/leadership/Aliko Dangote.png",
        bio: "Patron and strategic steward bringing private sector scale and long-term investment to the Great Green Wall.",
    },
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
        eyebrow: "Executive Office",
        name: "Dr. Ramatoulaye Diallo N'diaye",
        role: "Chief Executive Officer",
        focus: "Mobilizes culture, finance, and diplomacy to accelerate the Great Green Wall through strategic partnerships and impact capital.",
        bio: "Visionary African leader with deep experience in cultural diplomacy, climate finance, and governance. Former Minister of Culture of Mali, now leading continent-wide restoration while shaping global standards for inclusive impact finance. Her philosophy bridges heritage, dignity, and ecological stewardship as foundations for sustainable prosperity.",
    },
    {
        eyebrow: "Operations & Delivery",
        name: "Joseph Faluyi",
        role: "COO and Executive Director",
        focus: "Manages internal operations, new business ventures, and strategic partnerships across the Great Green Wall initiative.",
        bio: "Technology executive and social entrepreneur with 20+ years driving IT transformation and digital innovation in financial services. As COO of GGWoA, he oversees operational excellence and stakeholder relationships, bringing experience from Capco, Deloitte, Dell Technologies, and climate-focused ventures like Winsun Technologies.",
    },
    {
        eyebrow: "On-Ground Leadership",
        name: "Regional Fellows & Leads",
        role: "Community Leads",
        focus: "Embed with villages to co-design adaptation labs, education hubs, and stewardship campaigns.",
        bio: "Dedicated community facilitators driving grassroots innovation and local capacity building.",
    },
];

function SectionHeading({ eyebrow, title, copy, tone = "light" }: { eyebrow?: string; title: string; copy: string; tone?: "light" | "sand" }) {
    return (
        <div className="text-center max-w-3xl mx-auto mb-16">
            {eyebrow && (
                <span className="eyebrow block mb-3">
                    {eyebrow}
                </span>
            )}
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight leading-tight text-deepEarth">
                {title}
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-4"></div>
            <p className={`mt-5 text-base leading-relaxed ${tone === "sand" ? "text-charcoal/80" : "text-charcoal/70"}`}>{copy}</p>
        </div>
    );
}

function ProfileLink() {
    return (
        <span className="link-arrow group-hover:text-deepEarth transition-colors">
            View Profile <span className="group-hover:translate-x-1 transition-transform">→</span>
        </span>
    );
}

export default function LeadershipPage() {
    return (
        <main className="bg-offWhite text-charcoal min-h-screen">
            {/* Hero */}
            <section
                className="relative bg-primary text-white min-h-[400px] flex items-center justify-center py-20 px-4 md:px-6 overflow-hidden"
                style={{ backgroundImage: "radial-gradient(rgba(212, 175, 55, 0.12) 1px, transparent 0)", backgroundSize: "28px 28px" }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-primaryDark/40 via-transparent to-primaryDark/70 pointer-events-none"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="eyebrow eyebrow-light inline-flex items-center bg-black/25 border border-accent/40 px-3 py-1 rounded mb-6">
                        Continental Governance &amp; Stewardship
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-bold leading-[1.08] tracking-tight text-white mb-6">
                        Meet Our Leadership Team
                    </h1>
                    <p className="text-lg text-white/85 max-w-3xl mx-auto leading-relaxed">
                        Driving our mission, guiding our vision. Statespeople, business leaders, creators, and scientists combine their disciplines so that communities across the Sahel can thrive.
                    </p>
                </div>
            </section>

            {/* Distinguished Global Leaders */}
            <section className="bg-offWhite py-16 md:py-20 px-4 md:px-6 border-b border-deepEarth/10">
                <div className="max-w-6xl mx-auto">
                    <SectionHeading
                        eyebrow="Distinguished Leaders"
                        title="Distinguished Global Leaders"
                        copy="Providing strategic vision and diplomatic influence to accelerate our impact across the continent."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                        {patrons.map((patron) => (
                            <Link
                                key={patron.name}
                                href={`/leadership/${"slug" in patron ? patron.slug : createSlug(patron.name)}`}
                                className="bg-white rounded border border-deepEarth/10 border-t-2 border-t-accent hover:border-primary/40 transition-colors overflow-hidden flex flex-col group"
                            >
                                <div className="relative w-full h-[380px] overflow-hidden bg-warmGray">
                                    <Image
                                        src={patron.image}
                                        alt={patron.name}
                                        fill
                                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40"></div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="tag mb-3">
                                            {patron.title}
                                        </div>
                                        <h3 className="font-heading font-bold text-2xl text-deepEarth group-hover:text-primary transition-colors">
                                            {patron.name}
                                        </h3>
                                        <p className="text-sm font-medium text-primary mt-1">{patron.role}</p>
                                        <div className="w-10 h-0.5 bg-accent/40 my-4"></div>
                                        <p className="text-charcoal/70 text-sm leading-relaxed">{patron.bio}</p>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-deepEarth/10 flex items-center justify-end text-xs">
                                        <ProfileLink />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Stewards */}
            <section
                className="bg-secondary py-16 md:py-20 px-4 md:px-6 border-b border-deepEarth/10"
                style={{ backgroundImage: "radial-gradient(rgba(58, 45, 26, 0.05) 1px, transparent 0)", backgroundSize: "24px 24px" }}
            >
                <div className="max-w-6xl mx-auto">
                    <SectionHeading
                        tone="sand"
                        eyebrow="Board of Directors"
                        title="Strategic Stewards"
                        copy="Aligning culture, policy, and finance for sustainable impact across the Great Green Wall."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {board.map((member) => (
                            <Link
                                key={member.name}
                                href={`/leadership/${createSlug(member.name)}`}
                                className="bg-white rounded p-6 border border-deepEarth/10 hover:border-primary/40 transition-colors flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="relative w-full aspect-square rounded overflow-hidden mb-5 bg-warmGray">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    </div>
                                    <h3 className="font-heading font-bold text-xl text-deepEarth group-hover:text-primary transition-colors">{member.name}</h3>
                                    <span className="block font-accent text-xs font-semibold text-accentDark uppercase tracking-wider mt-1 mb-3">{member.role}</span>
                                    <p className="text-charcoal/70 text-sm leading-relaxed line-clamp-3">{member.bio}</p>
                                </div>
                                <div className="mt-5 pt-3 border-t border-deepEarth/10 text-[11px]">
                                    <ProfileLink />
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-12 bg-white/70 backdrop-blur-sm rounded p-5 border border-accent/30 flex flex-wrap items-center justify-between gap-4">
                        <span className="text-xs font-medium text-charcoal/70">
                            Our board unites statespeople, financiers, artists, and scientists from across Africa and the world.
                        </span>
                        <a href="#operational" className="link-arrow hover:text-primaryDark">
                            View Operations Team <span>↓</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Operational Leadership */}
            <section id="operational" className="bg-offWhite py-16 md:py-20 px-4 md:px-6 border-b border-deepEarth/10 scroll-mt-20">
                <div className="max-w-6xl mx-auto">
                    <SectionHeading
                        eyebrow="Management Team"
                        title="Operational Leadership"
                        copy="The operational nerve centre driving implementation and community engagement across the Sahel."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {management.map((person, index) => (
                            <article key={person.name} className="bg-white rounded p-8 border border-deepEarth/10">
                                <div className="w-12 h-12 rounded bg-primary/10 text-primary flex items-center justify-center font-heading font-bold text-lg mb-6">
                                    {String(index + 1).padStart(2, "0")}
                                </div>
                                <span className="eyebrow">{person.eyebrow}</span>
                                <h3 className="font-heading font-bold text-2xl text-deepEarth mt-2 mb-1">{person.name}</h3>
                                <p className="text-sm font-semibold text-primary mb-4">{person.role}</p>
                                <p className="text-charcoal/70 text-sm leading-relaxed mb-6">{person.focus}</p>
                                <p className="flex items-start gap-2 text-xs text-charcoal/70 leading-relaxed pt-4 border-t border-deepEarth/10">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span>
                                    {person.bio}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-primary text-white py-16 md:py-20 px-4 md:px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight leading-tight mb-4">
                        Want to Join Our Leadership Team?
                    </h2>
                    <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
                        We're always looking for passionate leaders who want to make a difference in the Sahel region and beyond.
                    </p>
                    <Link href="/contact" className="btn-accent">
                        Contact Us Now →
                    </Link>
                </div>
            </section>
        </main>
    );
}
