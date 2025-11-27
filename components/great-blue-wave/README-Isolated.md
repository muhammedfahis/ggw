# Great Blue Wave Hero (Isolated)

A self‑contained, fully isolated React/Tailwind hero component for the Great Blue Wave page.

- **Palette only**: Deep ocean `#013a63`, Mid ocean `#0369a1`, Sky `#0ea5e9`, Pale `#e6f7ff`, White `#ffffff`
- **No style leakage**: All colors and styles are scoped to this component via inline styles or explicit Tailwind classes.
- **WaterShaders integration**: Animated GPU background with non‑WebGL fallback.
- **Reduced motion support**: Respects `prefers-reduced-motion`.
- **WCAG AA contrast**: All text meets contrast requirements.
- **Keyboard navigation**: Visible focus outlines on CTAs.

---

## Installation & usage

1. **Place the component**  
   Copy `GreatBlueWaveHeroIsolated.tsx` into `components/great-blue-wave/`.

2. **Import and use** in the Great Blue Wave page (`app/the-great-blue-wave/page.tsx`):

   ```tsx
   import { GreatBlueWaveHeroIsolated } from "../../components/great-blue-wave/GreatBlueWaveHeroIsolated";

   export default function GreatBlueWavePage() {
     return (
       <main className="bg-white text-charcoal min-h-screen">
         <GreatBlueWaveHeroIsolated />
         {/* all other sections remain unchanged */}
       </main>
     );
   }
   ```

3. **No global changes needed**  
   - The component uses only local styles/inline colors; it does not modify Tailwind config, global CSS, or other sections.

---

## WaterShaders integration

- The component imports `WaterShaders` from `@/components/ui/water-shaders` (shadcn‑style re‑export).
- Props used:
  - `speed={1.0}`
  - `depth={1.2}`
  - `clarity={0.8}`
  - `waves={1.1}`
  - `reflection={0.9}`
- Positioned absolutely with `pointer-events-none` so it never blocks clicks.
- Behind the content card (z‑index layering).

---

## Fallback (non‑WebGL) & reduced motion

- **Reduced motion**: When `prefers-reduced-motion: reduce` is detected, the component renders a static CSS gradient + lightweight SVG wave background using the same palette.
- **WebGL unavailable**: If the browser does not support WebGL, the same static fallback is shown.
- The fallback still respects the water palette and maintains full‑bleed coverage.

---

## How the component avoids impacting other site sections

- **Scoped styles**: All colors are applied via inline `style` attributes or explicit Tailwind classes; no global CSS is added.
- **No global Tailwind config changes**: Uses hex literals directly.
- **No font changes**: Inherits the page’s fonts; does not set `font-family`.
- **No layout bleed**: The component is a single `<section>` with `h-screen`, contained within the page flow.
- **Pointer events**: Background layer has `pointer-events-none`; only the content card is interactive.

---

## QA checklist

- [ ] **No green tones**: Inspect the hero in dev tools; only the five water palette colors appear.
- [ ] **Shader runs**: With normal motion settings, WaterShaders animates behind the card and does not block clicks.
- [ ] **Fallback displays**: With `prefers-reduced-motion: reduce` or WebGL disabled, a static gradient/SVG background appears.
- [ ] **WCAG AA contrast**: Dark text on pale card and white text on deep‑ocean button both meet AA contrast.
- [ ] **Keyboard focus**: Tab to both CTAs; sky‑blue outlines are visible.
- [ ] **Responsive behavior**: Mobile (~375px) and desktop (≥1280px) layouts look correct; card stays centered.
- [ ] **Isolation**: Scrolling past the hero shows the rest of the page unchanged (no color/font/layout bleed).

---

## Acceptance criteria

- The hero renders as a full‑bleed, full‑viewport‑height section using only the water palette.
- WaterShaders animates with the specified props; a static gradient/SVG is shown when motion is reduced or WebGL is unavailable.
- The frosted content card is centered, contains the correct heading, description, primary CTA, and secondary link.
- All text meets WCAG AA contrast; keyboard focus states are visible.
- The component does not modify any global styles or affect other sections of the page.
- The page remains responsive on both mobile and desktop.

---

## Screenshots (placeholders)

After integration, capture:

- **Desktop** (≥1280px): Full‑bleed hero with animated background, centered frosted card, two CTAs.
- **Mobile** (~375px): Stacked layout, card fills most width, CTAs stacked.

Save as:
- `docs/screenshots/great-blue-wave-hero-isolated-desktop.png`
- `docs/screenshots/great-blue-wave-hero-isolated-mobile.png`
