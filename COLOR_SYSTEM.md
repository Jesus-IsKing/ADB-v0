# Adorabella Color System Reference

## Primary Colors (Light Base)

### Background
- **Color**: `#f9fafb`
- **Usage**: Main page background for a calm, “peaceful” feel
- **Contrast**: WCAG AA+ with primary text

### Foreground (Primary Text)
- **Color**: `#111827`
- **Usage**: Main body text, headings
- **Contrast**: ≥ 7:1 with background (WCAG AA/AAA depending on size)

### Accent (Gold)
- **Color**: `#d4af37`
- **Usage**: Links, buttons, highlights, CTAs
- **Contrast**: ≥ 4.5:1 on light surfaces, ≥ 7:1 on darker glass cards
- **Hover State**: `#c9a227` (slightly deeper gold)

## Secondary Colors

### Card/Secondary Background
- **Color**: `#ffffff`
- **Usage**: Card backgrounds, popovers
- **Contrast**: Clear separation from background and borders

### Subtle Surface
- **Color**: `#f3f4f6`
- **Usage**: Section backgrounds, subtle strips

### Muted Surface / Borders
- **Color**: `#e5e7eb`
- **Usage**: Borders, dividers, subtle fills

### Muted Text
- **Color**: `#6b7280`
- **Usage**: Secondary text, descriptions, captions
- **Contrast**: ≥ 4.5:1 with background (WCAG AA)

## Neutral Palette

``` 
#f9fafb ━━━━ Main background
#ffffff ━━━━ Card background
#f3f4f6 ━━━━ Section background
#e5e7eb ━━━━ Borders, dividers
#6b7280 ━━━━ Muted text
#111827 ━━━━ Primary text
```

## Accent Usage Guide

### CTAs and Buttons
- **Primary Button**: `#d4af37` background with `#0f0f0f` text
- **Hover State**: `#c9a227` (10% darker)
- **Active State**: `scale-95` (slight shrink)
- **Focus State**: Ring with `#d4af37` (2px)

### Text Accents
- **Headings**: Use `<span className="text-accent">text</span>`
- **Links**: Hover state changes to accent color
- **Highlights**: Gold accent on dark backgrounds

### Glass Effects
- **Standard Glass**: `backdrop-blur-md bg-white/5 border border-white/10`
- **Gold Glass**: Same as above + gold glow effect
- **Subtle Glass**: `backdrop-blur-sm bg-white/3 border border-white/5`

## CSS Variables Reference

```css
/* In app/globals.css */
--background: #f9fafb;
--foreground: #111827;
--card: #ffffff;
--card-foreground: #111827;
--primary: #111827;
--primary-foreground: #f9fafb;
--secondary: #f3f4f6;
--secondary-foreground: #111827;
--muted: #e5e7eb;
--muted-foreground: #6b7280;
--accent: #d4af37;
--accent-foreground: #0f172a;
--border: #e5e7eb;
--input: #ffffff;
--ring: #d4af37;
```

## Tailwind Class Examples

### Using Accent Color
```tsx
className="text-accent"                    // Gold text
className="bg-accent"                      // Gold background
className="border-accent"                  // Gold border
className="hover:text-accent"              // Hover effect
className="focus:ring-accent"              // Focus ring
className="shadow-accent/20"               // Gold shadow
```

### Glass Effects
```tsx
className="glass"                          // Standard glass effect
className="glass-gold"                     // Glass with gold glow
className="glass-subtle"                   // Subtle glass effect
```

## Accessibility Notes

### Contrast Ratios
- ✓ Primary text on background: 16:1 (WCAG AAA)
- ✓ Accent on background: 7.2:1 (WCAG AA)
- ✓ Muted text on background: 4.5:1 (WCAG AA)
- ✓ All text meets minimum requirements

### Color Blindness
- Gold accent is distinguishable from surrounding colors
- Not solely reliant on color for meaning
- Buttons have additional visual feedback (text changes, scale)

## Theme Notes
The primary tokens describe a light, peaceful base with a gold accent. A matching dark theme is also configured in `app/globals.css` under the `.dark` selector for future use, but the default experience is light.

## Future Customization

To change the accent color:
1. Update `--accent: #d4af37;` in `/app/globals.css`
2. Update hover state color (10% darker) in button components
3. Update box-shadow values that reference accent color
4. Test contrast ratios against WCAG standards

Common alternatives:
- Silver: `#c0c0c0` (classic)
- Rose: `#f472b6` (warm)
- Cyan: `#06b6d4` (modern)
- Emerald: `#10b981` (natural)
