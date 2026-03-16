# Adorabella - Premium Visuals Implementation Plan

This plan outlines the steps to elevate the Adorabella website from a standard business site to a **High-End Digital Portfolio** with "State of the Art" aesthetics.

---

## 1. Elevated Typography Strategy
*Goal: Introduce high-contrast font pairing to evoke luxury and prestige (The "Vogue" Effect).*

- [x] **Select & Install Serif Font**: Add a premium Serif font (e.g., `Cormorant Garamond` or `Playfair Display`) via `next/font/google`.
- [x] **Define Typographic Hierarchy**:
    - Use **Serif** for: Hero headings, section titles, and pull-quotes.
    - Use **Geist (Sans)** for: Navigation, body text, buttons, and metadata.
- [x] **Update CSS Variables**: Create `--font-serif` and `--font-sans` in `globals.css`.
- [x] **Audit Component Text**: Apply `.font-serif` to key titles in:
    - `hero-section.tsx`
    - `lookbook-section.tsx`
    - `features-section.tsx`
    - `pricing-section.tsx`

---

## 2. Immersive Visual Depth
*Goal: Create a tactile, "alive" atmosphere using noise and light.*

- [x] **Global Noise Overlay**: 
    - Create a fixed `div` with a subtle noise/film-grain texture (0.04 opacity).
    - Ensure it doesn't interfere with pointer events.
- [x] **Ambient Moving Gradients**:
    - Implement "Aura" blobs in the background of main sections.
    - Use `framer-motion` or CSS to animate their positions slowly.
- [ ] **High-Shutter Video Integration**:
    - Identify key areas for video (e.g., Hero background or Lookbook feature).
    - Implement progressive video loading with a static image fallback.
    - Apply a subtle desaturation or gold tint filter to match the brand.

---

## 3. Editorial "Magazine" Layouts
*Goal: Break the standard grid to create an artistic, curated feeling.*

- [x] **Asymmetrical Masonry Lookbook**:
    - Refactor `lookbook-section.tsx` to use more varied `span-rows` and `span-cols`.
    - Introduce "Passive Space": Intentional gaps in the grid to let the design breathe.
- [x] **Scroll-Linked Parallax**:
    - Use `framer-motion`'s `useScroll` and `useTransform`.
    - Apply subtle vertical parallax to images in the `lookbook-section`.

---

## 4. Premium Micro-Interactions
*Goal: Delight the user with high-end, responsive feel.*

- [x] **Magnetic Cursor (Optional/Opt-in)**:
    - Create a `CustomCursor` component that follows the mouse with ease.
- [x] **Magnetic Buttons**:
    - Update `button-cta.tsx` or `ui/button.tsx` to include a magnetic pull effect.
- [x] **Page & Section Transitions**:
    - Implement a "Curtain" or "Staggered Fade" entrance for sections as they enter the viewport.

    - Ensure smooth cross-fades between page navigations using Framer Motion's `AnimatePresence`.

---

## 5. Signature Branding & Glow
*Goal: Add the "Finishing Touch" that defines the luxury experience.*

- [ ] **Digital Watermarking**:
    - Place a low-opacity Adorabella monogram (`A` or Logo) in the corner of large images or background strips.
- [ ] **The "Aura" Glow Effect**:
    - Apply a soft `shadow-accent/20` or `box-shadow: 0 0 40px ...` to primary images when they are in view.
    - Use `whileInView` observers to trigger the glow naturally.
- [ ] **Refined Glassmorphism**:
    - Tighten the glass effects in `DESIGN_TOKENS.md` to use thinner borders (0.5px) and higher saturation blurs.

---

## Implementation Rules
1. **Performance First**: All animations must be GPU-accelerated (transform/opacity).
2. **Accessibility**: Never sacrifice readability or tab-navigation for aesthetics.
3. **Subtlety**: Precision is key. If it feels "too much," dial it back by 50%.
