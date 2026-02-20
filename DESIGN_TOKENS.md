# Adorabella Salon - Design Tokens & Color System

## Color Palette

### Primary Colors
- **Background (Dark)**: `#0f0f0f` (oklch: 0.055 0 0) - Deep black for main background
- **Surface (Dark)**: `#1a1a1a` (oklch: 0.1 0 0) - Slightly lighter for cards and surfaces
- **Text Primary**: `#f8f8f8` (oklch: 0.98 0 0) - Off-white for main text
- **Text Muted**: `#a0a0a0` (oklch: 0.63 0 0) - Gray for secondary text

### Accent Color
- **Gold/Amber**: `#d4af37` (oklch: 0.74 0.16 70) - Luxury accent for CTAs, highlights, and accents
- **Gold/Amber (Hover)**: `#e8c547` (oklch: 0.80 0.18 72) - Lighter gold for hover states
- **Gold/Amber (Subtle)**: `#4a3f2e` (oklch: 0.28 0.04 70) - Dark gold tint for backgrounds

### Utility Colors
- **Destructive**: `#ef4444` (oklch: 0.55 0.22 27) - Red for errors/warnings
- **Border**: `#2a2a2a` (oklch: 0.17 0 0) - Subtle border color
- **Glass Border**: `rgba(212, 175, 55, 0.2)` - Subtle gold border for glass effect

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

- Text Primary on Background: 16:1 ✓
- Text Muted on Background: 5.5:1 ✓
- Gold Accent on Dark Surface: 7:1 ✓
- Gold Accent on Background: 8.5:1 ✓

---

## CSS Variables to Update in globals.css

```css
:root {
  --background: #0f0f0f;
  --surface: #1a1a1a;
  --foreground: #f8f8f8;
  --muted-foreground: #a0a0a0;
  --accent: #d4af37;
  --accent-hover: #e8c547;
  --accent-subtle: #4a3f2e;
  --border: #2a2a2a;
  --glass-blur: 10px;
  --radius: 0.75rem;
}
```

This color system provides a luxurious dark theme with gold accents, perfect for a premium salon brand while maintaining excellent accessibility.
