"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/projects", label: "Projects" },
  { href: "/the-great-blue-wave", label: "The Great Blue Wave" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const pathname = usePathname();
  const isWater = pathname === "/the-great-blue-wave";
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`border-t gbw-theme-transition ${
        isWater ? "border-[#0ea5e9]/40 bg-[#013a63]" : "border-ggwDark/10 bg-white/80"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-4">
            <p
              className={`text-xs font-semibold uppercase tracking-[0.4em] ${
                isWater ? "text-[#0ea5e9]" : "text-ggwAccent"
              }`}
            >
              GGWOA
            </p>
            <p className={`text-2xl font-semibold ${isWater ? "text-[#e6f7ff]" : "text-ggwDark"}`}>
              The Great Green Wall of Africa Foundation
            </p>
            <p className={`text-sm ${isWater ? "text-[#e6f7ff]/80" : "text-ggwDark/70"}`}>
              Designing a regenerative belt of climate security, food sovereignty, and cultural pride stretching across the Sahel.
            </p>
          </div>

          <div>
            <p
              className={`text-xs font-semibold uppercase tracking-[0.3em] ${
                isWater ? "text-[#0ea5e9]" : "text-ggwAccent"
              }`}
            >
              Explore
            </p>
            <nav
              className={`mt-4 flex flex-col gap-2 text-sm ${
                isWater ? "text-[#e6f7ff]/80" : "text-ggwDark/70"
              }`}
            >
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    isWater
                      ? "hover:text-[#ffffff] focus-visible:ring-[#0ea5e9] focus-visible:ring-offset-[#013a63]"
                      : "hover:text-ggwDark focus-visible:ring-ggwGreen focus-visible:ring-offset-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p
              className={`text-xs font-semibold uppercase tracking-[0.3em] ${
                isWater ? "text-[#0ea5e9]" : "text-ggwAccent"
              }`}
            >
              Connect
            </p>
            <div
              className={`mt-4 space-y-3 text-sm ${
                isWater ? "text-[#e6f7ff]/90" : "text-ggwDark/70"
              }`}
            >
              <a
                href="mailto:Inquiry@ggwoa.org"
                className={`font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  isWater
                    ? "text-[#0ea5e9] hover:text-[#e6f7ff] focus-visible:ring-[#0ea5e9] focus-visible:ring-offset-[#013a63]"
                    : "text-ggwGreen hover:text-ggwDark focus-visible:ring-ggwGreen focus-visible:ring-offset-white"
                }`}
              >
                Inquiry@ggwoa.org
              </a>
            </div>
            <Link
              href="/contact"
              className={`mt-6 inline-flex rounded-full border px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                isWater
                  ? "border-[#0ea5e9]/50 text-[#e6f7ff] hover:border-[#0ea5e9] hover:bg-[#013a63]/80 focus-visible:ring-[#0ea5e9] focus-visible:ring-offset-[#013a63]"
                  : "border-ggwDark/20 text-ggwDark hover:border-ggwGreen focus-visible:ring-ggwGreen focus-visible:ring-offset-white"
              }`}
            >
              Start a project
            </Link>
          </div>
        </div>

        <div
          className={`mt-10 border-t pt-6 text-xs ${
            isWater ? "border-[#0ea5e9]/30 text-[#e6f7ff]/70" : "border-ggwDark/10 text-ggwDark/60"
          }`}
        >
          © {currentYear} GGWoA Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
