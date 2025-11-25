import Image from "next/image";

export const metadata = {
  title: "Leadership | GGWoA Foundation",
};

const patrons = [
  {
    title: "Grand Patron",
    name: "H.E. Olusegun Obasanjo",
    role: "Former President of Nigeria",
    image: "/assets/leadership/rs=w:1023,h:1023,cg:true.jpeg",
  },
  {
    title: "Patron",
    name: "Aliko Dangote, GCON",
    role: "Chairman, Dangote Group",
    image: "/assets/leadership/rs=w:1023,h:1023,cg:true_1.jpeg",
  },
  {
    title: "Patron",
    name: "H.E. Amb. Maman Sambo Sidikou",
    role: "AU Special Representative for Mali & the Sahel",
    image: "/assets/leadership/rs=w:1023,h:1023,cg:true_2.jpeg",
  },
];

const board = [
  {
    name: "H.E. Ramatoulaye Diallo N'diaye",
    role: "Chairman & CEO",
    image: "/assets/leadership/rs=w:1023,h:1023,cg:true_3.jpeg",
  },
  {
    name: "H.E. Dr. Lassina Zerbo",
    role: "Executive Secretary Emeritus, CTBTO",
    image: "/assets/leadership/rs=w:1023,h:1023,cg:true_4.jpeg",
  },
  {
    name: "H.E. Youssou N'Dour",
    role: "Former Minister of Tourism for Senegal",
    image: "/assets/leadership/rs=w:1023,h:1023,cg:true_5.jpeg",
  },
  {
    name: "Richad Soundardjee",
    role: "Managing Director, CICC",
    image: "/assets/leadership/rs=w:1023,h:1023,cg:true_6.jpeg",
  },
  {
    name: "Dr. Frannie Léautier",
    role: "Managing Director, SouthBridge Investments",
    image: "/assets/leadership/rs=w:1023,h:1023,cg:true_7.jpeg",
  },
  {
    name: "Abderrahmane Sissako",
    role: "Film Director & Producer",
    image: "/assets/leadership/abderrahmane-sissako.jpeg",
  },
];

const management = [
  {
    name: "Ramatoulaye Diallo N'diaye",
    role: "Chief Executive Officer",
    focus: "Mobilizes culture, finance, and diplomacy to accelerate the Great Green Wall.",
  },
  {
    name: "Joseph Faluyi",
    role: "COO & Executive Director",
    focus: "Oversees programme delivery, governance, and field partnerships across the Sahel.",
  },
  {
    name: "Regional Fellows",
    role: "Community Leads",
    focus: "Embed with villages to co-design adaptation labs, education hubs, and stewardship campaigns.",
  },
];

export default function LeadershipPage() {
  return (
    <main className="bg-ggwBg text-ggwDark">
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Leadership</p>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">Patrons, board, and management behind the Great Green Wall.</h1>
          <p className="mt-4 text-lg text-ggwDark/80">
            Statespeople, business leaders, creators, and scientists combine their disciplines so that communities along the Sahel can thrive.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="rounded-[40px] border border-ggwDark/5 bg-white px-6 py-10 shadow-sm md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Patrons</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {patrons.map((patron) => (
                <article key={patron.name} className="rounded-[28px] border border-ggwDark/5 bg-ggwBg/70 p-6 text-center">
                  <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-[24px] border border-ggwDark/10">
                    <Image src={patron.image} alt={patron.name} fill className="object-cover" sizes="160px" />
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-ggwGreen">{patron.title}</p>
                  <h2 className="mt-2 text-xl font-semibold">{patron.name}</h2>
                  <p className="text-sm text-ggwDark/70">{patron.role}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Board of directors</p>
              <h3 className="mt-3 text-3xl font-semibold">Stewards aligning culture, policy, and finance.</h3>
            </div>
            <p className="max-w-xl text-sm text-ggwDark/70">
              The board ensures governance spans diplomacy, private sector innovation, and creative advocacy.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {board.map((member) => (
              <article key={member.name} className="rounded-[32px] border border-ggwDark/5 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-ggwDark/10">
                    <Image src={member.image} alt={member.name} fill className="object-cover" sizes="80px" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{member.name}</h4>
                    <p className="text-sm text-ggwDark/70">{member.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl rounded-[40px] border border-ggwDark/5 bg-white/90 px-6 py-12 shadow-sm md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Management team</p>
              <h3 className="mt-3 text-3xl font-semibold">Operational nerve centre.</h3>
            </div>
            <p className="max-w-xl text-sm text-ggwDark/70">
              Programme directors and regional fellows stay embedded within partner communities to guide implementation.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {management.map((person) => (
              <article key={person.name} className="rounded-[28px] border border-ggwDark/5 bg-ggwBg/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwGreen">{person.role}</p>
                <h4 className="mt-2 text-xl font-semibold">{person.name}</h4>
                <p className="mt-2 text-sm text-ggwDark/70">{person.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
