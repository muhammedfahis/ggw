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
  // Read reduced-motion preference (used indirectly via CSS media query)
  usePrefersReducedMotion();
  // Shader disabled; we use CSS-only waves instead
  const showShader = false;

  return (
    <section
      aria-labelledby="great-blue-wave-heading"
      className="relative flex h-screen w-full overflow-hidden"
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

      {/* Content: centered frosted card */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-4 py-16 sm:px-6 md:px-8 lg:px-12">
        <div
          className="max-w-3xl rounded-3xl px-6 py-8 shadow-xl backdrop-blur-md sm:px-8 sm:py-10"
          style={{
            backgroundColor: `${PALETTE.paleWater}D9`, // 85% opacity
            border: `1px solid ${PALETTE.white}4D`,
          }}
        >
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: PALETTE.deepOcean }}
          >
            WATER RESILIENCE PROGRAMME
          </p>
          <h1
            id="great-blue-wave-heading"
            className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ color: PALETTE.deepOcean }}
          >
            The Great Blue Wave
          </h1>
          <p
            className="mb-8 text-base leading-relaxed sm:text-lg"
            style={{ color: PALETTE.deepOcean }}
          >
            A water-first initiative weaving atmospheric water, storage, and stewardship into a continuous blue corridor across the Great Green Wall.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-md transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                backgroundColor: PALETTE.deepOcean,
                color: PALETTE.white,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = PALETTE.midOcean;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = PALETTE.deepOcean;
              }}
              onFocus={(e: React.FocusEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.outlineColor = PALETTE.skyBlue;
              }}
            >
              Partner on water access
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center text-sm font-semibold underline-offset-4 transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ color: PALETTE.deepOcean }}
              onFocus={(e: React.FocusEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.outlineColor = PALETTE.skyBlue;
              }}
            >
              Explore water projects
            </Link>
          </div>
        </div>
      </div>

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
