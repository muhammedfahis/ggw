import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-ggwDark/10 bg-white/80">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-ggwAccent">GGWOA</p>
            <p className="text-2xl font-semibold text-ggwDark">The Great Green Wall of Africa Foundation</p>
            <p className="text-sm text-ggwDark/70">
              Designing a regenerative belt of climate security, food sovereignty, and cultural pride stretching across the Sahel.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Explore</p>
            <nav className="mt-4 flex flex-col gap-2 text-sm text-ggwDark/70">
              {footerLinks.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-ggwDark">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ggwAccent">Connect</p>
            <div className="mt-4 space-y-3 text-sm text-ggwDark/70">
              <a href="mailto:Inquiry@ggwoa.org" className="font-semibold text-ggwGreen transition hover:text-ggwDark">
                Inquiry@ggwoa.org
              </a>
            </div>
            <Link href="/contact" className="mt-6 inline-flex rounded-full border border-ggwDark/20 px-5 py-2.5 text-sm font-semibold text-ggwDark transition hover:border-ggwGreen">
              Start a project
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-ggwDark/10 pt-6 text-xs text-ggwDark/60">© {currentYear} GGWoA Foundation. All rights reserved.</div>
      </div>
    </footer>
  );
}
