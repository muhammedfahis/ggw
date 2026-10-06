"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isBlueWavePath } from "@/lib/utils";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/projects", label: "Projects" },
  { href: "/the-great-blue-wave", label: "The Great Blue Wave" },
  { href: "/advance-africa", label: "Advance Africa" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

const offices = [
  { name: "Nigeria", lines: ["8B Amaechi Onuoha Crescent,", "Lekki Phase One, Lagos"] },
  { name: "United States", lines: ["433 Plaza Real, Suite 275,", "Boca Raton, FL 33432"] },
  { name: "UAE", lines: ["DSO - IFZA, IFZA Properties,", "Dubai Silicon Oasis, Dubai"] },
];

export function Footer() {
  const pathname = usePathname();
  const isWater = isBlueWavePath(pathname);
  const currentYear = new Date().getFullYear();

  const t = isWater
    ? {
        shell: "border-water-bright/40 bg-water-deep",
        label: "text-water-bright",
        heading: "text-water-foam",
        body: "text-water-foam/75",
        link: "hover:text-white focus-visible:ring-water-bright focus-visible:ring-offset-water-deep",
        accentLink: "text-water-bright hover:text-water-foam",
        button: "border-water-bright/50 text-water-foam hover:border-water-bright hover:bg-water-bright/10",
        divider: "border-water-bright/25",
      }
    : {
        shell: "border-charcoal/10 bg-warmGray",
        label: "text-accentDark",
        heading: "text-charcoal",
        body: "text-charcoal/70",
        link: "hover:text-primary focus-visible:ring-primary focus-visible:ring-offset-warmGray",
        accentLink: "text-primary hover:text-charcoal",
        button: "border-primary text-primary hover:bg-primary hover:text-offWhite",
        divider: "border-charcoal/10",
      };

  const focusRing = "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  return (
    <footer className={`border-t gbw-theme-transition ${t.shell}`}>
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-6 md:px-6">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className={`inline-flex items-center gap-3 ${focusRing} ${t.link}`}>
              <Image src="/assets/home/logo.png" alt="" width={40} height={40} className="h-10 w-10 object-contain" />
              <span className={`font-heading text-lg font-semibold leading-tight ${t.heading}`}>
                Great Green Wall
                <br />
                of Africa Foundation
              </span>
            </Link>
            <p className={`mt-4 max-w-xs text-sm leading-relaxed ${t.body}`}>
              A regenerative belt of climate security, food sovereignty and cultural pride across the Sahel.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link
                href="/contact"
                className={`btn btn-sm text-sm border-[1.5px] ${t.button}`}
              >
                Start a project
              </Link>
              <a href="mailto:Inquiry@ggwoa.org" className={`text-sm font-semibold transition ${focusRing} ${t.accentLink}`}>
                Inquiry@ggwoa.org
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <p className={`font-accent text-xs font-semibold uppercase tracking-[0.2em] ${t.label}`}>Explore</p>
            <nav className={`mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm ${t.body}`}>
              {footerLinks.map((item) => (
                <Link key={item.href} href={item.href} className={`transition ${focusRing} ${t.link}`}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Offices */}
          <div className="md:col-span-5">
            <p className={`font-accent text-xs font-semibold uppercase tracking-[0.2em] ${t.label}`}>Offices</p>
            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-4">
              {offices.map((o) => (
                <address key={o.name} className={`not-italic text-sm leading-relaxed ${t.body}`}>
                  <span className={`block font-semibold ${t.heading}`}>{o.name}</span>
                  {o.lines.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </address>
              ))}
            </div>
          </div>
        </div>

        <div className={`mt-8 flex flex-col gap-2 border-t pt-5 text-xs sm:flex-row sm:items-center sm:justify-between ${t.divider} ${t.body}`}>
          <p>© {currentYear} GGWoA Foundation. All rights reserved.</p>
          <p>Restoring land. Building livelihoods.</p>
        </div>
      </div>
    </footer>
  );
}
