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
  { href: "/the-great-blue-wave", label: "The Great Blue Wave" },
];

export function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isWater = pathname === "/the-great-blue-wave";

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const renderLink = (item: (typeof navItems)[number]) => {
    const active = pathname === item.href;
    const isWaterTab = item.href === "/the-great-blue-wave";
    const baseClasses = "relative text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

    // Special styling for The Great Blue Wave tab - always water-themed and distinguished
    if (isWaterTab) {
      return (
        <Link
          key={item.href}
          href={item.href}
          className="gbw-nav-tab relative inline-flex items-center px-6 py-3 rounded-full font-semibold text-sm transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 overflow-hidden group"
          style={{
            background: active 
              ? `linear-gradient(135deg, #013a63 0%, #0369a1 60%, #013a63 100%)`
              : `linear-gradient(135deg, #013a63 0%, #0369a1 50%, #013a63 100%)`,
            color: active ? '#ffffff' : '#ffffff',
            boxShadow: active 
              ? '0 8px 32px rgba(1, 58, 99, 0.4), 0 0 0 2px rgba(14, 165, 233, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
              : '0 6px 24px rgba(1, 58, 99, 0.3), 0 0 0 1px rgba(14, 165, 233, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            letterSpacing: '0.05em',
            textShadow: active ? '0 1px 2px rgba(1, 58, 99, 0.3)' : '0 1px 2px rgba(1, 58, 99, 0.2)',
          }}
          onMouseEnter={(e) => {
            if (!active) {
              e.currentTarget.style.background = 'linear-gradient(135deg, #013a63 0%, #0ea5e9 50%, #013a63 100%)';
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(1, 58, 99, 0.5), 0 0 0 2px rgba(14, 165, 233, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
            }
          }}
          onMouseLeave={(e) => {
            if (!active) {
              e.currentTarget.style.background = 'linear-gradient(135deg, #013a63 0%, #0369a1 50%, #013a63 100%)';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(1, 58, 99, 0.3), 0 0 0 1px rgba(14, 165, 233, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
            }
          }}
        >
          <span className="relative z-10">{item.label}</span>
          
          {/* Premium water shimmer animation */}
          <span 
            className="gbw-nav-tab-shimmer absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: 'linear-gradient(105deg, transparent 30%, rgba(14, 165, 233, 0.4) 50%, transparent 70%)',
              animation: active ? 'gbwShimmerFlow 4s ease-in-out infinite' : 'none',
            }}
          />
          
          {/* Active state glow pulse */}
          {active && (
            <span 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.2) 0%, transparent 60%)',
                animation: 'gbwGlowPulse 3s ease-in-out infinite',
              }}
            />
          )}

          {/* Focus ring styling */}
          <style jsx>{`
            .gbw-nav-tab:focus-visible {
              outline: none;
              box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.5), 0 8px 32px rgba(1, 58, 99, 0.4), 0 0 0 2px rgba(14, 165, 233, 0.3);
            }

            @keyframes gbwShimmerFlow {
              0% { 
                transform: translateX(-100%) skewX(-25deg); 
                opacity: 0;
              }
              20% {
                opacity: 0.6;
              }
              50% { 
                transform: translateX(100%) skewX(-25deg); 
                opacity: 0.8;
              }
              80% {
                opacity: 0.6;
              }
              100% { 
                transform: translateX(200%) skewX(-25deg); 
                opacity: 0;
              }
            }

            @keyframes gbwGlowPulse {
              0%, 100% { 
                opacity: 0.3; 
                transform: scale(1);
              }
              50% { 
                opacity: 0.6; 
                transform: scale(1.05);
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .gbw-nav-tab-shimmer,
              .gbw-nav-tab[class*="gbwGlowPulse"] {
                animation: none !important;
                opacity: 0.2 !important;
              }
              .gbw-nav-tab {
                transition: none !important;
              }
            }
          `}</style>
        </Link>
      );
    }

    // Water theme for other tabs when on water page
    if (isWater) {
      return (
        <Link
          key={item.href}
          href={item.href}
          className={`${baseClasses} focus-visible:ring-[#0ea5e9] focus-visible:ring-offset-[#013a63] ${
            active ? "text-[#e6f7ff]" : "text-[#e6f7ff]/80 hover:text-[#ffffff]"
          }`}
        >
          {item.label}
          {active && <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-sm bg-[#0ea5e9]" />}
        </Link>
      );
    }

    // Default theme for regular pages
    return (
      <Link
        key={item.href}
        href={item.href}
        className={`${baseClasses} focus-visible:ring-primary focus-visible:ring-offset-white ${
          active ? "text-primary" : "text-dark/70 hover:text-primary"
        }`}
      >
        {item.label}
        {active && <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-sm bg-primary"></span>}
      </Link>
    );
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-sm shadow-sm gbw-theme-transition ${
        isWater ? "border-[#0ea5e9]/40 bg-[#013a63]/95" : "border-dark/10 bg-white/95"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div
            className={`relative h-12 w-12 overflow-hidden rounded-md border bg-white shadow-sm ${
              isWater ? "border-[#0ea5e9]/60" : "border-primary/30"
            }`}
          >
            <Image src="/assets/about/rs=w:172.png" alt="GGWoA logo" fill className="object-contain p-2" sizes="48px" />
          </div>
          <div className="leading-tight">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.4em]"
              style={{ color: isWater ? "#e6f7ff" : undefined }}
            >
              GGWOA
            </p>
            <p className={`text-sm font-semibold ${isWater ? "text-[#e6f7ff]" : "text-dark"}`}>
              Great Green Wall of Africa
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex ml-12">{navItems.map(renderLink)}</nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contact"
            className={`text-sm px-4 py-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
              isWater
                ? "bg-[#013a63] text-white hover:bg-[#0369a1] focus-visible:ring-[#0ea5e9] focus-visible:ring-offset-[#013a63]"
                : "btn-primary"
            }`}
          >
            Partner with us
          </Link>
        </div>

        <button
          type="button"
          className={`relative inline-flex h-10 w-10 items-center justify-center rounded-md border md:hidden transition-colors hover:bg-dark/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
            isWater
              ? "border-[#0ea5e9]/50 text-[#e6f7ff] hover:bg-[#013a63]/60 focus-visible:ring-[#0ea5e9] focus-visible:ring-offset-[#013a63]"
              : "border-dark/20 text-dark focus-visible:ring-primary focus-visible:ring-offset-white"
          }`}
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
        <div
          className={`md:hidden border-t px-6 pb-6 pt-4 shadow-lg gbw-theme-transition ${
            isWater ? "border-[#0ea5e9]/40 bg-[#013a63]" : "border-dark/10 bg-white"
          }`}
        >
          <div className="flex flex-col gap-4 text-sm">
            {navItems.map(renderLink)}
            <Link
              href="/contact"
              className={`text-center px-4 py-3 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                isWater
                  ? "bg-[#013a63] text-white hover:bg-[#0369a1] focus-visible:ring-[#0ea5e9] focus-visible:ring-offset-[#013a63]"
                  : "btn-primary"
              }`}
            >
              Partner with us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
