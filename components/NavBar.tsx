
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const renderLink = (item: (typeof navItems)[number]) => {
    const active = pathname === item.href;
    return (
      <Link
        key={item.href}
        href={item.href}
        className={`relative text-sm font-medium transition-colors ${active ? "text-ggwDark" : "text-ggwDark/70 hover:text-ggwDark"}`}
      >
        {item.label}
        {active && <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-ggwGreen" />}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-40 border-b border-ggwDark/10 bg-white/90 shadow-[0_10px_30px_rgba(28,59,45,0.08)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-ggwGreen/60 bg-white shadow-sm">
            <Image src="/assets/about/rs=w:172.png" alt="GGWoA logo" fill className="object-contain p-2" sizes="48px" />
          </div>
          <div className="leading-tight">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-ggwAccent">GGWOA</p>
            <p className="text-sm font-semibold text-ggwDark">Great Green Wall of Africa</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">{navItems.map(renderLink)}</nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link href="/projects" className="text-sm font-semibold text-ggwDark/70 hover:text-ggwDark">
            Portfolio
          </Link>
          <Link href="/contact" className="rounded-full bg-ggwDark px-4 py-2 text-sm font-semibold text-white transition hover:bg-ggwGreen hover:text-ggwDark">
            Partner with us
          </Link>
        </div>

        <button
          type="button"
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-ggwDark/20 text-ggwDark md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className={`block h-0.5 w-5 bg-current transition ${isOpen ? "translate-y-0 rotate-45" : "-translate-y-1"}`} />
          <span className={`absolute block h-0.5 w-5 bg-current transition ${isOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-0.5 w-5 bg-current transition ${isOpen ? "translate-y-0 -rotate-45" : "translate-y-1"}`} />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-ggwDark/10 bg-white px-4 pb-6 pt-4 shadow-lg">
          <div className="flex flex-col gap-4 text-sm">
            {navItems.map(renderLink)}
            <Link
              href="/contact"
              className="rounded-full bg-ggwDark px-4 py-3 text-center font-semibold text-white transition hover:bg-ggwGreen hover:text-ggwDark"
            >
              Partner with us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
