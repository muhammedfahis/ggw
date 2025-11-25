import Image from "next/image";
import Link from "next/link";
import { Counter } from "@/components/Counter";
import { ScrollIndicator } from "@/components/ScrollIndicator";

const impactMetrics = [
  { value: "15M+", label: "Trees established", detail: "Native species cultivated with community cooperatives." },
  { value: "50K+", label: "Hectares restored", detail: "Dune stabilization, soil regeneration, and water retention." },
  { value: "120K+", label: "Youth & women trained", detail: "Entrepreneurship, agroforestry, and civic leadership." },
  { value: "11", label: "Countries engaged", detail: "Coordinated restoration across the Sahel." },
];

const programs = [
  {
    title: "Thiès Forest Restoration",
    description: "Transforming former mining land through native planting, water harvesting, and youth employment.",
    image: "/assets/home/rs=w:365,h:365,cg:true_1.jpeg",
    href: "/projects/thies-forest",
  },
  {
    title: "Project SCALE",
    description: "Scaling climate-resilient livelihoods along the Great Green Wall with regenerative agriculture hubs.",
    image: "/assets/home/rs=w:365,h:365,cg:true_2.jpeg",
    href: "/projects/scale",
  },
  {
    title: "IMAGINE-1",
    description: "Pan-African creative campaign reframing the wall through music, film, and immersive art.",
    image: "/assets/home/rs=w:365,h:365,cg:true.jpeg",
    href: "/projects/imagine-1",
  },
];

const successStories = [
  {
    title: "Thiès Quarry Revival",
    story: "A 5‑hectare former quarry in Senegal is now a thriving native forest with 92% tree survival, creating jobs for 300 youth and reducing flood risk for nearby communities.",
    image: "/assets/home/rs=w:730.jpeg",
    location: "Thiès, Senegal",
  },
  {
    title: "Women-Led Cooperatives",
    story: "In Niger and Djibouti, women's cooperatives manage nurseries and micro‑irrigation, boosting household incomes by 45% while planting 2.5 million trees.",
    image: "/assets/home/rs=w:331.png",
    location: "Niger & Djibouti",
  },
];

const team = [
  {
    name: "Ramatoulaye Diallo N'Diaye",
    title: "Chief Executive Officer",
    bio: "Leads GGWoA's strategy, partnerships, and global advocacy, bringing 20+ years in development finance and climate policy.",
    photo: "/assets/leadership/rs=w:1023,h:1023,cg:true,m.jpeg",
  },
  {
    name: "Maman Sidikou",
    title: "Chairman of the Board",
    bio: "Former diplomat and senior UN official, provides diplomatic leadership and continental coordination for the Great Green Wall.",
    photo: "/assets/leadership/rs=w:1023,h:1023,cg:true_1.jpeg",
  },
  {
    name: "Aïssa Touré",
    title: "Director of Programs",
    bio: "Designs and scales regenerative land programs, with expertise in agroforestry and community-led governance.",
    photo: "/assets/leadership/rs=w:1023,h:1023,cg:true_2.jpeg",
  },
];

const partners = [
  { name: "Pan-African Agency of the Great Green Wall", logo: "/assets/home/a8b8cb72-0bd3-42f4-a6ad-d64d7533933e.svg" },
  { name: "African Union GGW Initiative", logo: "/assets/home/b3b904f2-a92d-467a-936e-a7ca9bd24455.svg" },
  { name: "Bezos Earth Fund", logo: "/assets/home/7754974d-18a2-49bf-9b6b-02e1602491aa.svg" },
  { name: "African Development Bank Group", logo: "/assets/home/ec341136-e43e-4f99-bb1b-783760e1f546.svg" },
];

export default function HomePage() {
  return (
    <main className="bg-neutral text-dark font-body">
      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/assets/home/rs=w:1920,m.png"
          alt="Great Green Wall of Africa"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-neutral max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              A Living Infrastructure for Nature, Culture, and Prosperity
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
              We design regenerative systems alongside governments, traditional leaders, and bold partners so that land restoration becomes the most inspiring development story of this decade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Support Our Work
              </Link>
              <Link href="/about" className="btn-secondary text-lg px-8 py-4">
                Discover Our Approach
              </Link>
            </div>
          </div>
        </div>
        <ScrollIndicator />
      </section>

      {/* Impact Metrics */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-dark/70 max-w-2xl mx-auto">
              Measurable results that demonstrate the power of community-led restoration across the Sahel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <p className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                  <Counter end={stat.value} />
                </p>
                <p className="text-lg font-semibold mb-2">{stat.label}</p>
                <p className="text-sm text-dark/60 max-w-xs mx-auto">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission/Approach */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Restoration is the backbone of climate security and cultural continuity.
              </h2>
              <p className="text-lg text-dark/80 mb-8 leading-relaxed">
                Our teams align national policy ambition with grounded community action. We carry out landscape diagnostics, unlock blended finance, and deploy on-the-ground collectives who know every dune, pasture, and family relying on it.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-dark/70">Culture is infrastructure: creative expression unlocks momentum and trust.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-dark/70">Communities sit at the design table from day zero and share in the upside.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-dark/70">Policy makers, artists, scientists, and investors solve in the same room.</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 lg:h-full min-h-[500px] rounded-md overflow-hidden">
              <Image
                src="/assets/home/field-note.jpeg"
                alt="Landscape restoration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-neutral">
                <p className="text-sm uppercase tracking-wider mb-2">Field note</p>
                <p className="text-2xl font-heading font-semibold mb-2">
                  "Every hectare we restore tells a story of dignity returned to its people."
                </p>
                <p className="text-sm">Aminata Barry · Community forester, Senegal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Active Programs</h2>
            <p className="text-lg text-dark/70 max-w-2xl mx-auto">
              Flagship initiatives shaping the Great Green Wall across the continent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.title} className="card group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-3">{program.title}</h3>
                  <p className="text-dark/70 mb-4 line-clamp-3">{program.description}</p>
                  {program.href && (
                    <Link href={program.href} className="text-primary font-semibold hover:text-primary/80 transition-colors">
                      Learn more →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-dark/70 max-w-2xl mx-auto">
              Real-world examples of how communities, partners, and innovative approaches are turning restoration into lasting prosperity.
            </p>
          </div>
          <div className="space-y-12">
            {successStories.map((story, index) => (
              <div key={story.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="relative h-64 lg:h-96 rounded-md overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-primary mb-2">{story.location}</p>
                  <h3 className="text-3xl font-heading font-bold mb-4">{story.title}</h3>
                  <p className="text-dark/70 leading-relaxed">{story.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Leadership Team</h2>
            <p className="text-lg text-dark/70 max-w-2xl mx-auto">
              Dedicated professionals driving the Great Green Wall vision forward.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.title}</p>
                <p className="text-dark/60 text-sm max-w-xs mx-auto">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Trusted Partners</h2>
            <p className="text-lg text-dark/70 max-w-2xl mx-auto">
              Ministries, financiers, and creative networks standing beside community custodians.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center justify-center h-20">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-primary text-neutral">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Partner with us to design the planet's most ambitious restoration effort
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you bring capital, technology, storytelling, or policy expertise, there is room to co-create lasting impact along the Great Green Wall.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-neutral text-primary px-8 py-4 rounded-md font-semibold hover:bg-neutral/90 transition-colors">
              Start a Conversation
            </Link>
            <Link href="/projects" className="border border-neutral text-neutral px-8 py-4 rounded-md font-semibold hover:bg-neutral hover:text-primary transition-colors">
              Explore Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Stay Connected</h2>
          <p className="text-lg text-dark/70 mb-8 max-w-2xl mx-auto">
            Join our newsletter to follow milestones, meet partners, and see how your support fuels the Great Green Wall.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-dark/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-neutral py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-heading font-semibold mb-4">GGWoA</h3>
              <p className="text-neutral/70 text-sm">
                Great Green Wall of Africa Foundation. Building a living infrastructure for nature, culture, and prosperity.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-neutral/70 text-sm">
                <li><Link href="/about" className="hover:text-neutral transition-colors">About</Link></li>
                <li><Link href="/projects" className="hover:text-neutral transition-colors">Projects</Link></li>
                <li><Link href="/news" className="hover:text-neutral transition-colors">News</Link></li>
                <li><Link href="/contact" className="hover:text-neutral transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Get Involved</h4>
              <ul className="space-y-2 text-neutral/70 text-sm">
                <li><Link href="/contact" className="hover:text-neutral transition-colors">Partner with us</Link></li>
                <li><Link href="/projects" className="hover:text-neutral transition-colors">Volunteer</Link></li>
                <li><Link href="/projects" className="hover:text-neutral transition-colors">Donate</Link></li>
                <li><Link href="/news" className="hover:text-neutral transition-colors">Newsletter</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-neutral/70 text-sm">
                <li><Link href="/privacy" className="hover:text-neutral transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-neutral transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral/20 pt-8 text-center text-neutral/60 text-sm">
            <p>&copy; {new Date().getFullYear()} Great Green Wall of Africa Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
