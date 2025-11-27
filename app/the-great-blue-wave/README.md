# The Great Blue Wave Page (Water-Themed Inner Sections)

This README describes the rebuilt non-hero sections of `/the-great-blue-wave`.

- **Hero/banner**: left as-is and controlled by `GreatBlueWaveHeroIsolated`.
- **All inner sections**: fully rethemed to a water-only palette and scoped under `.gbw-page` so nothing leaks to other routes.

## Files

- `app/the-great-blue-wave/page.tsx`
  - Imports `Inter` locally and applies it only inside `.gbw-page`.
  - Uses `<GreatBlueWaveHeroIsolated />` for the hero (unchanged.
  - Wraps all redesigned sections in:
    ```tsx
    <div className={`gbw-page ${inter.className} bg-[#013a63] text-[#013a63]`}>
      {/* sections */}
    </div>
    ```

## Palette (page-wide constraint)

Used only these colors (with transparent/rgba variants):

- Deep ocean `#013a63`
- Ocean mid `#0369a1`
- Sky blue `#0ea5e9`
- Pale water `#e6f7ff`
- White `#ffffff`

All gradients and overlays use RGBA values derived from the same hex codes.

## Integration

`page.tsx` is already wired for `/the-great-blue-wave`.

- Hero remains `<GreatBlueWaveHeroIsolated />` at the top.
- Inner sections are inside `.gbw-page` and use only water colors.
- No global Tailwind config or global CSS was changed.

If you ever need to revert to the previous layout, restore the older version of `page.tsx` from version control.

## Water theming of inner sections

Sections rebuilt:

1. **Why Water**
   - Deep blue gradient background.
   - Three frosted cards describing pressure on water, the distributed blue network, and impact.
2. **Strategic Partners**
   - Pale water background.
   - Feature image with blue gradient overlay.
   - Two frosted partner cards (Mai Sabeel, Hawana) with water-only CTAs.
3. **Deployment Scenarios**
   - White background with blue typography.
   - Side-by-side text + image block and four frosted use-case cards.
4. **Technology**
   - Deep-to-sky gradient background with circular blue glows.
   - Hawana image with blue overlay and three technology feature cards.
5. **Deployment Scales**
   - Pale water background.
   - Image + explanatory cards for residential, school/clinic, and commercial/village scales.
6. **Visual Gallery**
   - White background.
   - Three image tiles with subtle blue overlays and a primary deep-ocean CTA.

## Isolation & scoping

- All custom styles are applied via Tailwind classes and inline styles inside `.gbw-page`.
- No `body`, `html`, or `:root` selectors are used.
- Local font (`Inter`) is only applied through `inter.className` inside `.gbw-page`; other pages keep their existing fonts.
- Buttons and links use explicit hex colors from the palette; nothing uses Tailwind color tokens that might map to green.

## Accessibility notes

- Headings use weight 600; body text uses 400–500 via Inter.
- Primary buttons: `#013a63` background with white text (high contrast).
- Secondary links and text use `#0369a1` / `#0ea5e9` on pale or white backgrounds.
- Focus states: `focus-visible:outline-[#0ea5e9]` with `outline-2` and offset.
- Gradients and overlays are tuned so white or pale-water text remains above WCAG AA.

## QA checklist (for this page)

- [ ] No greens: inspect with dev tools; all colors are from the five approved hex values or their rgba variants.
- [ ] Hero remains unchanged and uses its own logic; inner sections all share the water theme.
- [ ] Text contrast: check headings and body text on each background; confirm WCAG AA.
- [ ] Keyboard navigation: tab through all CTAs and links; verify visible blue focus outlines.
- [ ] Responsiveness: verify layouts at 375px, 768px, 1024px, and 1440px.
- [ ] Images: confirm blue gradient overlays remove any green casts.
- [ ] Other routes (e.g. Home, Projects) retain their original look.

## Screenshot placeholders

After visually confirming the page:

- Capture **desktop** screenshot of `/the-great-blue-wave` showing hero + top of Why Water section.
- Capture **mobile** screenshot (~375px width) showing hero + first part of Why Water.

Suggested filenames:

- `docs/screenshots/great-blue-wave-page-desktop.png`
- `docs/screenshots/great-blue-wave-page-mobile.png`

## Testing notes

Recommended browsers/devices:

- Desktop: Chrome, Safari, Firefox (latest stable).
- Mobile: iOS Safari, Android Chrome.

Since only CSS gradients and overlays are used (no WebGL on inner sections), compatibility is broad across modern browsers.
