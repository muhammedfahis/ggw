"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
// import { WaterShaders } from "@/components/ui/water-shaders"; // Disabled to avoid shader errors

// Water palette (do not introduce any other colors)
const PALETTE = {
  deepOcean: "#013a63",
  midOcean: "#0369a1",
  skyBlue: "#0ea5e9",
  paleWater: "#e6f7ff",
  white: "#ffffff",
} as const;

function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReduced(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReduced;
}

/**
 * Detect WebGL support.
 */
function hasWebGL(): boolean {
  if (typeof window === "undefined" || typeof document === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    return !!gl;
  } catch {
    return false;
  }
}

/**
 * Fully isolated Great Blue Wave hero.
 * - Uses only the water palette.
 * - Full-bleed, full-viewport-height.
 * - WaterShaders animated background with non-WebGL fallback.
 * - Reduced-motion support.
 * - Frosted-glass centered content card.
 * - WCAG AA contrast and keyboard focus styles.
 * - No styles leak outside this component.
 */
export function GreatBlueWaveHeroIsolated() {
  // Read reduced-motion preference for scroll and animation fallbacks
  const prefersReducedMotion = usePrefersReducedMotion();
  // Shader disabled; we use CSS-only waves instead
  const showShader = false;

  const handleScrollClick = () => {
    if (typeof window === "undefined") return;

    const main = document.querySelector("main");
    if (!main) return;

    const sections = main.querySelectorAll("section");
    if (sections.length < 2) return;

    const target = sections[1] as HTMLElement;
    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section
      aria-labelledby="great-blue-wave-heading"
      className="gbw-hero relative flex min-h-[78vh] max-h-[820px] w-full overflow-hidden items-center"
      style={{ backgroundColor: PALETTE.deepOcean }}
    >
      {/* Background layer: static gradient/SVG fallback only */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="h-full w-full"
          style={{
            background: `linear-gradient(to bottom right, ${PALETTE.deepOcean}, ${PALETTE.midOcean}, ${PALETTE.skyBlue})`,
          }}
        >
          <svg
            className="h-full w-full"
            viewBox="0 0 1440 800"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            aria-label="Abstract water background"
          >
            <defs>
              <linearGradient
                id="waveGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={PALETTE.skyBlue} stopOpacity="0.9" />
                <stop offset="50%" stopColor={PALETTE.midOcean} stopOpacity="0.9" />
                <stop offset="100%" stopColor={PALETTE.deepOcean} stopOpacity="1" />
              </linearGradient>
            </defs>
            <rect width="1440" height="800" fill="url(#waveGradient)" />
            <path
              d="M0,500 C240,460 480,540 720,500 C960,460 1200,520 1440,480 L1440,800 L0,800 Z"
              fill={PALETTE.paleWater}
              fillOpacity="0.15"
            />
            <path
              d="M0,550 C240,510 480,570 720,530 C960,490 1200,550 1440,510 L1440,800 L0,800 Z"
              fill={PALETTE.white}
              fillOpacity="0.08"
            />
          </svg>
        </div>

        {/* Subtle overlay to improve contrast and keep palette */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${PALETTE.deepOcean}99, ${PALETTE.midOcean}99, ${PALETTE.deepOcean}CC)` ,
          }}
        />

        {/* Animated wave layers (CSS only, no WebGL) */}
        <>
          <div
            className="absolute pointer-events-none gbw-wave-1"
            style={{
              left: '-35%',
              right: '-35%',
              bottom: '-4%',
              height: '45%',
              borderRadius: '50%',
              opacity: 0.55,
              background: `radial-gradient(circle at 50% 0%, ${PALETTE.skyBlue}CC, ${PALETTE.midOcean}AA, transparent 70%)`,
            }}
          />
          <div
            className="absolute pointer-events-none gbw-wave-2"
            style={{
              left: '-40%',
              right: '-40%',
              bottom: '-18%',
              height: '52%',
              borderRadius: '50%',
              opacity: 0.4,
              background: `radial-gradient(circle at 50% 0%, ${PALETTE.midOcean}CC, ${PALETTE.skyBlue}99, transparent 70%)`,
            }}
          />
        </>
      </div>

      {/* Content: premium overlay without card */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-4 pt-10 pb-24 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl text-center">
          {/* Elegant label with subtle underline effect */}
          <div className="mb-4 inline-block">
            <p
              className="text-[0.65rem] font-semibold uppercase tracking-[0.35em]"
              style={{ color: PALETTE.paleWater }}
            >
              Water Resilience Programme
            </p>
            <div 
              className="mt-1 h-px w-full"
              style={{ 
                background: `linear-gradient(to right, transparent, ${PALETTE.paleWater}66, transparent)` 
              }}
            />
          </div>

          {/* Premium heading with gradient text effect */}
          <h1
            id="great-blue-wave-heading"
            className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none"
            style={{ 
              color: PALETTE.white,
              textShadow: `0 2px 20px ${PALETTE.deepOcean}66, 0 0 40px ${PALETTE.midOcean}33`
            }}
          >
            The Great Blue Wave
          </h1>

          {/* Refined description with better contrast */}
          <p
            className="mb-8 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed font-medium"
            style={{ 
              color: PALETTE.paleWater,
              textShadow: `0 1px 3px ${PALETTE.deepOcean}99`
            }}
          >
            A water-first initiative weaving atmospheric water, storage, and stewardship into a continuous blue corridor across the Great Green Wall.
          </p>

          {/* Premium CTA buttons with enhanced styling */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-6">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:ring-[#0ea5e9]"
              style={{ 
                backgroundColor: PALETTE.white,
                color: PALETTE.deepOcean,
                boxShadow: `0 8px 32px -12px ${PALETTE.deepOcean}66, 0 0 0 1px ${PALETTE.white}33`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = PALETTE.paleWater;
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = `0 12px 40px -12px ${PALETTE.deepOcean}99, 0 0 0 1px ${PALETTE.white}66`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = PALETTE.white;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 8px 32px -12px ${PALETTE.deepOcean}66, 0 0 0 1px ${PALETTE.white}33`;
              }}
            >
              Partner on Water Access
              <svg 
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                style={{ color: PALETTE.deepOcean }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <Link
              href="/projects"
              className="group inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:ring-[#0ea5e9]"
              style={{ 
                backgroundColor: 'transparent',
                color: PALETTE.white,
                border: `2px solid ${PALETTE.white}66`,
                boxShadow: `0 4px 20px -8px ${PALETTE.deepOcean}66`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = `${PALETTE.white}1A`;
                e.currentTarget.style.borderColor = PALETTE.white;
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = `0 8px 32px -8px ${PALETTE.deepOcean}99`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = `${PALETTE.white}66`;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 4px 20px -8px ${PALETTE.deepOcean}66`;
              }}
            >
              Explore Water Projects
              <svg 
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                style={{ color: PALETTE.white }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <button
        type="button"
        aria-label="Scroll to content"
        onClick={handleScrollClick}
        className="gbw-hero-scroll group absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0ea5e9] focus-visible:ring-offset-[#013a63]"
      >
        <span className="sr-only">Scroll to content</span>
        <div className="relative flex h-10 w-6 items-start justify-center rounded-full border border-white/30">
          <span className="gbw-hero-scroll-dot mt-1 h-1.5 w-1.5 rounded-full bg-[#e6f7ff]" />
        </div>
      </button>

      <style jsx>{`
        .gbw-hero .gbw-hero-scroll-dot {
          animation: gbw-hero-scroll-dot 1.6s ease-in-out infinite;
        }

        @keyframes gbw-hero-scroll-dot {
          0% {
            opacity: 0;
            transform: translateY(2px);
          }
          20% {
            opacity: 1;
            transform: translateY(0);
          }
          80% {
            opacity: 1;
            transform: translateY(10px);
          }
          100% {
            opacity: 0;
            transform: translateY(12px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gbw-hero .gbw-hero-scroll-dot {
            animation: none;
          }
        }
      `}</style>

      {/* Global CSS for wave animations */}
      <style jsx global>{`
        .gbw-wave-1 {
          animation: gbw-wave-1 9s ease-in-out infinite;
        }

        .gbw-wave-2 {
          animation: gbw-wave-2 13s ease-in-out infinite;
        }

        @keyframes gbw-wave-1 {
          0% { transform: translate3d(-18%, 8%, 0); }
          25% { transform: translate3d(-6%, 0%, 0); }
          50% { transform: translate3d(12%, -6%, 0); }
          75% { transform: translate3d(0%, 2%, 0); }
          100% { transform: translate3d(-18%, 8%, 0); }
        }

        @keyframes gbw-wave-2 {
          0% { transform: translate3d(20%, 2%, 0); }
          25% { transform: translate3d(8%, -10%, 0); }
          50% { transform: translate3d(-12%, -4%, 0); }
          75% { transform: translate3d(-4%, 4%, 0); }
          100% { transform: translate3d(20%, 2%, 0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .gbw-wave-1,
          .gbw-wave-2 {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
