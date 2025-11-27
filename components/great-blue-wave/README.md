# Great Blue Wave Hero

A standalone, water-themed hero section for the **Great Blue Wave** page.

- **Tech**: React/Next.js, Tailwind CSS, `WaterShaders` (WebGL)
- **Palette** (only colors used in this hero):
  - Deep ocean `#013a63`
  - Ocean mid `#0369a1`
  - Sky `#0ea5e9`
  - Pale `#e6f7ff`
  - White `#ffffff`

## Component

`components/great-blue-wave/GreatBlueWaveHero.tsx`

- Full-bleed, responsive hero section.
- Uses `WaterShaders` as animated water background with props:
  - `speed=1.0`
  - `depth=1.2`
  - `clarity=0.8`
  - `waves=1.1`
  - `reflection=0.9`
- Centered frosted-glass card containing:
  - `h1` – “The Great Blue Wave”
  - Short 1–2 line description
  - Primary CTA button (deep ocean background)
  - Secondary text link

## Integration

1. **Import the hero component** in the Great Blue Wave page:

   ```tsx
   import { GreatBlueWaveHero } from "../../components/great-blue-wave/GreatBlueWaveHero";
   ```

2. **Replace the existing top hero `<section>`** in `app/the-great-blue-wave/page.tsx` with:

   ```tsx
   <GreatBlueWaveHero />
   ```

3. Leave all other sections on the page unchanged.

> This keeps the new water theme strictly scoped to the hero.

## Fallback & reduced motion

- Uses `prefers-reduced-motion` to **disable WaterShaders** for users who prefer less motion.
- When reduced motion is enabled, or if WebGL is not available, the hero shows a **static gradient + SVG wave** background using the same palette.
- All overlays and content are rendered with standard HTML/CSS so the hero remains usable without WebGL.

## Accessibility

- Colors chosen for **WCAG AA** contrast:
  - Dark text `#013a63` on pale `#e6f7ff` background.
  - White text on deep ocean `#013a63` CTA.
- Headline and description are inside a semantic `<section>` with `aria-labelledby`.
- Keyboard focus:
  - CTAs have visible `focus-visible` outlines.
  - Both CTAs are reachable using Tab / Shift+Tab.
- No green hues are used; only the five specified colors (plus transparencies) appear in this hero.

## Screenshots (to capture)

Capture these after integrating in the app:

- **Desktop (≥1280px)**
  - Full-width hero with WaterShaders running.
  - Centered frosted card, both CTAs visible.
- **Mobile (~375px width)**
  - Stacked layout, card fills most width, buttons on two lines.

Save them as e.g.:

- `docs/screenshots/great-blue-wave-hero-desktop.png`
- `docs/screenshots/great-blue-wave-hero-mobile.png`

## QA checklist

- Hero only changes the **top section** of `/the-great-blue-wave`; all other sections look unchanged.
- Background uses only the specified blue palette (no green or grey tints).
- Text contrast passes WCAG AA for normal text and large headings.
- With `prefers-reduced-motion: reduce`, WaterShaders is not animating; fallback gradient/SVG is visible.
- Keyboard tab order: logo/nav → hero CTAs → rest of page, with visible focus rings.
- Hero behaves correctly at **mobile, tablet, and desktop** widths (no clipped text or buttons).

## Acceptance criteria

- The Great Blue Wave page renders with the new hero at the top, using only the five specified colors.
- WaterShaders appears when animations are allowed and WebGL is available, with the given props.
- When animations are reduced (or WebGL fails), a static gradient/SVG background is shown instead.
- CTAs are accessible via keyboard and screen readers and have visible focus states.
- No other section on the page has its colors, content, or layout changed.
