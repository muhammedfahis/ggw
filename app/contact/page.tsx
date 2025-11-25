export const metadata = {
  title: "Contact | GGWoA Foundation",
};

const contacts = [
  {
    label: "General inquiries",
    value: "Inquiry@ggwoa.org",
    action: "mailto:Inquiry@ggwoa.org",
  },
  {
    label: "Partnership requests",
    value: "+1 (202) 555-0139",
    action: "tel:+12025550139",
  },
  {
    label: "Media & speaking",
    value: "media@ggwoa.org",
    action: "mailto:media@ggwoa.org",
  },
];

const offices = [
  {
    city: "Boca Raton · HQ",
    address: ["433 Plaza Real, Suite 275", "Boca Raton, FL 33432", "United States"],
  },
  {
    city: "Dakar · Regional Lab",
    address: ["Plateau, Dakar", "Senegal"],
  },
];

export default function ContactPage() {
  return (
    <main className="bg-ggwBg text-ggwDark">
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Contact us</p>
          <div className="mt-6 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="text-4xl font-semibold md:text-5xl">Let&apos;s build the Great Green Wall together.</h1>
              <p className="mt-4 text-lg text-ggwDark/80">
                Reach out for partnerships, project collaborations, or to learn how you can support community-led regeneration across the Sahel.
              </p>
              <div className="mt-8 grid gap-4 rounded-[32px] border border-ggwDark/5 bg-white p-6 shadow-sm md:grid-cols-3">
                {contacts.map((contact) => (
                  <a key={contact.label} href={contact.action} className="space-y-1 text-sm transition hover:text-ggwGreen">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">{contact.label}</p>
                    <p className="text-lg font-semibold">{contact.value}</p>
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-[32px] border border-ggwDark/5 bg-white/70 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Offices</p>
              <div className="mt-6 space-y-6">
                {offices.map((office) => (
                  <div key={office.city}>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ggwGreen">{office.city}</p>
                    <p className="mt-2 text-sm text-ggwDark/70">
                      {office.address.map((line, idx) => (
                        <span key={line}>
                          {line}
                          {idx !== office.address.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-12 rounded-[40px] border border-ggwDark/5 bg-white/90 p-6 shadow-sm md:grid-cols-[1.1fr_0.9fr] md:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Send a note</p>
              <h2 className="mt-4 text-3xl font-semibold">Share your ideas, questions, or invitations.</h2>
              <form className="mt-8 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwDark/70">First name *</label>
                    <input type="text" required className="mt-2 w-full rounded-2xl border border-ggwDark/10 bg-white px-4 py-3 focus:border-ggwGreen focus:outline-none" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwDark/70">Last name *</label>
                    <input type="text" required className="mt-2 w-full rounded-2xl border border-ggwDark/10 bg-white px-4 py-3 focus:border-ggwGreen focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwDark/70">Email *</label>
                  <input type="email" required className="mt-2 w-full rounded-2xl border border-ggwDark/10 bg-white px-4 py-3 focus:border-ggwGreen focus:outline-none" />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwDark/70">Organization</label>
                  <input type="text" className="mt-2 w-full rounded-2xl border border-ggwDark/10 bg-white px-4 py-3 focus:border-ggwGreen focus:outline-none" />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwDark/70">Message *</label>
                  <textarea rows={5} required className="mt-2 w-full rounded-2xl border border-ggwDark/10 bg-white px-4 py-3 focus:border-ggwGreen focus:outline-none" />
                </div>
                <button type="submit" className="w-full rounded-full bg-ggwDark px-6 py-4 text-base font-semibold text-white transition hover:bg-ggwGreen hover:text-ggwDark">
                  Send message
                </button>
              </form>
            </div>
            <div className="rounded-[32px] border border-ggwDark/5 bg-ggwBg p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">What to expect</p>
              <ul className="mt-6 space-y-6 text-sm text-ggwDark/80">
                <li>
                  <span className="font-semibold text-ggwDark">48-hour reply</span>
                  <p className="text-ggwDark/70">Our partnerships desk routes your note to the right program lead.</p>
                </li>
                <li>
                  <span className="font-semibold text-ggwDark">Project briefs</span>
                  <p className="text-ggwDark/70">Share any documents or links; we review ahead of intro calls.</p>
                </li>
                <li>
                  <span className="font-semibold text-ggwDark">On-the-ground visits</span>
                  <p className="text-ggwDark/70">We coordinate immersions in Dakar, Abuja, or partner hubs upon request.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
