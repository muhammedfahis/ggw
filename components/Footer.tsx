"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const isWater = pathname === "/the-great-blue-wave";
  // trailingSlash is on, so the Blue Wave path may arrive as "/the-great-blue-wave/".
  const isBlueWave = pathname?.replace(/\/$/, "") === "/the-great-blue-wave";
  const currentYear = new Date().getFullYear();

  const t = isWater
    ? {
        shell: "border-[#0ea5e9]/40 bg-[#013a63]",
        label: "text-[#0ea5e9]",
        heading: "text-[#e6f7ff]",
        body: "text-[#e6f7ff]/75",
        link: "hover:text-white focus-visible:ring-[#0ea5e9] focus-visible:ring-offset-[#013a63]",
        accentLink: "text-[#0ea5e9] hover:text-[#e6f7ff]",
        button: "border-[#0ea5e9]/50 text-[#e6f7ff] hover:border-[#0ea5e9] hover:bg-[#0ea5e9]/10",
        divider: "border-[#0ea5e9]/25",
      }
    : {
        shell: `border-ggwDark/10 ${isBlueWave ? "bg-white" : "bg-warmGray"}`,
        label: "text-ggwAccent",
        heading: "text-ggwDark",
        body: "text-ggwDark/70",
        link: `hover:text-ggwGreen focus-visible:ring-ggwGreen ${isBlueWave ? "focus-visible:ring-offset-white" : "focus-visible:ring-offset-warmGray"}`,
        accentLink: "text-ggwGreen hover:text-ggwDark",
        button: "border-ggwGreen text-ggwGreen hover:bg-ggwGreen hover:text-offWhite",
        divider: "border-ggwDark/10",
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
                className={`inline-flex rounded border-[1.5px] px-4 py-2 text-sm font-semibold transition ${focusRing} ${t.button}`}
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
            <p className={`text-xs font-semibold uppercase tracking-[0.25em] ${t.label}`}>Explore</p>
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
            <p className={`text-xs font-semibold uppercase tracking-[0.25em] ${t.label}`}>Offices</p>
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
