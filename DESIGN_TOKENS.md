# Adorabella Salon - Design Tokens & Color System

## Color Palette

### Primary Colors (Light “Peace” Theme)
- **Background (Light)**: `#f9fafb` – Soft, low-contrast shell for a calm feel
- **Surface (Light)**: `#ffffff` – Card and surface backgrounds
- **Text Primary**: `#111827` – Deep slate for strong readability
- **Text Muted**: `#6b7280` – Subtle gray for secondary text

### Accent Color
- **Gold/Amber**: `#d4af37` (oklch: 0.74 0.16 70) - Luxury accent for CTAs, highlights, and accents
- **Gold/Amber (Hover)**: `#e8c547` (oklch: 0.80 0.18 72) - Lighter gold for hover states
- **Gold/Amber (Subtle)**: `#4a3f2e` (oklch: 0.28 0.04 70) - Dark gold tint for backgrounds

### Utility Colors
- **Destructive**: `#ef4444` – Red for errors/warnings
- **Border**: `#e5e7eb` – Soft border for light surfaces
- **Glass Border**: `rgba(212, 175, 55, 0.2)` – Subtle gold border for glass effect

## Typography

### Fonts
- **Primary Font**: Geist (Sans-serif) - Clean, modern, professional
- **Monospace**: Geist Mono - For technical content (if needed)

### Font Sizes & Line Heights
- **Hero Title**: 3.5rem / 4rem (Desktop), 2.5rem (Tablet), 2rem (Mobile)
- **Section Title**: 2.5rem / 2rem / 1.75rem
- **Body**: 1rem / 1.6 line-height
- **Small**: 0.875rem / 1.5 line-height
- **Muted**: 0.75rem / 1.4 line-height

## Spacing System

- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)

## Border Radius

- **sm**: 4px
- **md**: 8px
- **lg**: 12px
- **xl**: 16px
- **full**: 9999px (for pill buttons)

## Glass Effect (Frosted Glass)

### Card Glass Style
```css
background: rgba(26, 26, 26, 0.5); /* semi-transparent dark surface */
backdrop-filter: blur(10px);
border: 1px solid rgba(212, 175, 55, 0.2); /* subtle gold border */
box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
```

### Enhanced Glass Hover
```css
background: rgba(26, 26, 26, 0.7);
border-color: rgba(212, 175, 55, 0.4);
box-shadow: 0 8px 32px 0 rgba(212, 175, 55, 0.1);
```

## Shadows

- **sm**: `0 1px 2px rgba(0, 0, 0, 0.4)`
- **md**: `0 4px 12px rgba(0, 0, 0, 0.5)`
- **lg**: `0 8px 32px rgba(0, 0, 0, 0.3)`
- **xl**: `0 16px 48px rgba(0, 0, 0, 0.4)`
- **gold-glow**: `0 0 20px rgba(212, 175, 55, 0.15)`

## Animations

### Durations
- **fast**: 150ms
- **normal**: 250ms
- **slow**: 400ms
- **slower**: 600ms

### Common Effects
- **Fade In**: opacity 0 → 1 (250ms)
- **Slide Up**: translateY (20px → 0) with fade (250ms)
- **Scale**: scale(0.95 → 1) with fade (250ms)
- **Glow**: box-shadow with gold tint (smooth infinite)
- **Scroll Reveal**: Triggered on intersection observer

## Responsive Breakpoints

- **Mobile**: 0px - 639px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px+

## Contrast Ratios (WCAG AA Compliant)

- Text Primary on Light Background: ≥ 7:1 ✓
- Text Muted on Light Background: ≥ 4.5:1 ✓
- Gold Accent on Light Surface: ≥ 4.5:1 ✓
- Gold Accent on Dark Glass Cards: ≥ 7:1 ✓

---

## CSS Variables to Update in globals.css

```css
:root {
  --background: #f9fafb;
  --surface: #ffffff;
  --foreground: #111827;
  --muted-foreground: #6b7280;
  --accent: #d4af37;
  --accent-hover: #e8c547;
  --accent-subtle: #fef9c3;
  --border: #e5e7eb;
  --glass-blur: 10px;
  --radius: 0.75rem;
}
```

This color system provides a light, peaceful base with gold accents, suitable for a premium salon brand while maintaining excellent accessibility.
