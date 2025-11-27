"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
// import { WaterShaders } from "@/components/ui/water-shaders"; // Disabled - no longer available

// Palette (for reference only, do not change):
// deep ocean:   #013a63
// ocean mid:    #0369a1
// sky:          #0ea5e9
// pale:         #e6f7ff
// white:        #ffffff

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

export function GreatBlueWaveHero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const showShader = false; // Always disabled - using CSS-only animation

  return (
    <section
      aria-labelledby="great-blue-wave-heading"
      className="relative w-full overflow-hidden bg-[#013a63] text-white"
    >
      {/* Background layer: SVG/gradient fallback only */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="w-full h-full bg-gradient-to-br from-[#013a63] via-[#0369a1] to-[#0ea5e9]">
          <svg
            className="h-full w-full"
            viewBox="0 0 1440 600"
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
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#0369a1" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#013a63" stopOpacity="1" />
              </linearGradient>
            </defs>
            <rect width="1440" height="600" fill="url(#waveGradient)" />
            <path
              d="M0,400 C240,360 480,440 720,400 C960,360 1200,420 1440,380 L1440,600 L0,600 Z"
              fill="#e6f7ff"
              fillOpacity="0.15"
            />
            <path
              d="M0,450 C240,410 480,470 720,430 C960,390 1200,450 1440,410 L1440,600 L0,600 Z"
              fill="#ffffff"
              fillOpacity="0.1"
            />
          </svg>
        </div>

        {/* Blue overlay for consistent palette & contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#013a63]/60 via-[#0369a1]/60 to-[#013a63]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-4 py-16 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl rounded-3xl border border-white/30 bg-[#e6f7ff]/85 px-6 py-8 shadow-xl backdrop-blur-md sm:px-8 sm:py-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#013a63]">
            WATER RESILIENCE PROGRAMME
          </p>
          <h1
            id="great-blue-wave-heading"
            className="mb-4 text-3xl font-semibold tracking-tight text-[#013a63] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            The Great Blue Wave
          </h1>
          <p className="mb-8 text-base leading-relaxed text-[#013a63] sm:text-lg">
            A water-first initiative weaving atmospheric water, storage, and stewardship into a continuous blue corridor across the Great Green Wall.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#013a63] px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#0369a1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0ea5e9]"
            >
              Partner on water access
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center text-sm font-semibold text-[#013a63] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0ea5e9]"
            >
              Explore water projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
