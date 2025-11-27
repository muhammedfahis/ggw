"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Toggles a scoped water theme on the root <html> element
 * when the user is on `/the-great-blue-wave`.
 *
 * This does not change any global Tailwind tokens; it only
 * adds or removes the `data-theme="water"` attribute, which
 * header/footer styles can opt into.
 */
export function WaterThemeWatcher() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;

    if (pathname === "/the-great-blue-wave") {
      root.setAttribute("data-theme", "water");
    } else if (root.getAttribute("data-theme") === "water") {
      root.removeAttribute("data-theme");
    }
  }, [pathname]);

  return null;
}
