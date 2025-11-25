"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/leadership", label: "Leadership" },
  { href: "/news", label: "News" },
  { href: "/gallery", label: "Gallery" },
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
        className={`relative text-sm font-medium transition-colors duration-300 ${active ? "text-primary" : "text-dark/70 hover:text-primary"}`}
      >
        {item.label}
        {active && <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-sm bg-primary"></span>}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-dark/10 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-md border border-primary/30 bg-white shadow-sm">
            <Image src="/assets/about/rs=w:172.png" alt="GGWoA logo" fill className="object-contain p-2" sizes="48px" />
          </div>
          <div className="leading-tight">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-primary">GGWOA</p>
            <p className="text-sm font-semibold text-dark">Great Green Wall of Africa</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">{navItems.map(renderLink)}</nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link href="/projects" className="text-sm font-semibold text-dark/70 hover:text-primary transition-colors">
            Portfolio
          </Link>
          <Link href="/contact" className="btn-primary text-sm px-4 py-2">
            Partner with us
          </Link>
        </div>

        <button
          type="button"
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-dark/20 text-dark md:hidden transition-colors hover:bg-dark/5"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${isOpen ? "translate-y-0 rotate-45" : "-translate-y-1"}`} />
          <span className={`absolute block h-0.5 w-5 bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${isOpen ? "translate-y-0 -rotate-45" : "translate-y-1"}`} />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-dark/10 bg-white px-6 pb-6 pt-4 shadow-lg">
          <div className="flex flex-col gap-4 text-sm">
            {navItems.map(renderLink)}
            <Link
              href="/contact"
              className="btn-primary text-center px-4 py-3"
            >
              Partner with us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
