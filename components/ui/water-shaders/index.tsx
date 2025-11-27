"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// Lightweight, CSS-based water background used as a drop-in replacement
// for the original shader-driven WaterShaders component.
//
// This keeps the public API the same so existing imports continue to work,
// but relies on gradients + keyframe animation instead of WebGL.

export interface WaterShadersProps
  extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number;
  depth?: number;
  clarity?: number;
  waves?: number;
  reflection?: number;
}

export const WaterShaders = React.forwardRef<HTMLDivElement, WaterShadersProps>(
  (
    {
      className,
      children,
      // Unused props are kept for API compatibility
      speed,
      depth,
      clarity,
      waves,
      reflection,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative h-full w-full overflow-hidden bg-[#013a63]",
          className,
        )}
        {...props}
      >
        {/* Base gradient */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_0%,#0ea5e9_0,#0369a1_35%,#013a63_80%)]" />

          {/* Animated wave layers */}
          <div className="water-shader-wave pointer-events-none absolute inset-x-[-30%] bottom-[-10%] h-[55%] rounded-[50%] opacity-60 bg-[radial-gradient(circle_at_50%_0%,#0ea5e9,#0369a1,transparent_70%)]" />
          <div className="water-shader-wave-2 pointer-events-none absolute inset-x-[-35%] bottom-[-18%] h-[60%] rounded-[50%] opacity-45 bg-[radial-gradient(circle_at_50%_0%,#0369a1,#013a63,transparent_70%)]" />
        </div>

        {/* Content sits above the waves */}
        <div className="relative z-10 h-full w-full">{children}</div>

        <style jsx>{`
          .water-shader-wave {
            animation: waterShaderWave 14s ease-in-out infinite;
          }

          .water-shader-wave-2 {
            animation: waterShaderWave2 20s ease-in-out infinite;
          }

          @keyframes waterShaderWave {
            0% {
              transform: translate3d(-10%, 10%, 0);
            }
            50% {
              transform: translate3d(12%, -6%, 0);
            }
            100% {
              transform: translate3d(-10%, 10%, 0);
            }
          }

          @keyframes waterShaderWave2 {
            0% {
              transform: translate3d(18%, 4%, 0);
            }
            50% {
              transform: translate3d(-14%, -8%, 0);
            }
            100% {
              transform: translate3d(18%, 4%, 0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .water-shader-wave,
            .water-shader-wave-2 {
              animation: none !important;
            }
          }
        `}</style>
      </div>
    );
  },
);

WaterShaders.displayName = "WaterShaders";
