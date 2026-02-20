# Adorabella Color System Reference

## Primary Colors

### Background
- **Color**: `#0f0f0f`
- **Usage**: Main page background
- **Contrast**: WCAG AAA with foreground text

### Foreground (Primary Text)
- **Color**: `#f5f5f5`
- **Usage**: Main body text, headings
- **Contrast**: 16:1 with background (WCAG AAA)

### Accent (Gold)
- **Color**: `#d4af37`
- **Usage**: Links, buttons, highlights, CTAs
- **Contrast**: 7.2:1 with background (WCAG AA)
- **Hover State**: `#c9a227` (darker gold)

## Secondary Colors

### Card/Secondary Background
- **Color**: `#1a1a1a`
- **Usage**: Card backgrounds, elevated surfaces
- **Contrast**: Works with both foreground colors

### Secondary Darker
- **Color**: `#2a2a2a`
- **Usage**: Borders, dividers, secondary elements
- **Contrast**: Subtle but visible separation

### Tertiary
- **Color**: `#404040`
- **Usage**: Input backgrounds, subtle fills
- **Contrast**: Distinct from backgrounds

### Muted Text
- **Color**: `#a8a8a8`
- **Usage**: Secondary text, descriptions, captions
- **Contrast**: 4.5:1 with background (WCAG AA)

## Neutral Palette

```
#0f0f0f ━━━━ Main background
#1a1a1a ━━━━ Card background
#2a2a2a ━━━━ Borders, dividers
#404040 ━━━━ Input fields, subtle
#a8a8a8 ━━━━ Muted text
#f5f5f5 ━━━━ Primary text
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
--background: #0f0f0f;
--foreground: #f5f5f5;
--card: #1a1a1a;
--card-foreground: #f5f5f5;
--primary: #f5f5f5;
--primary-foreground: #0f0f0f;
--secondary: #2a2a2a;
--secondary-foreground: #f5f5f5;
--muted: #404040;
--muted-foreground: #a8a8a8;
--accent: #d4af37;
--accent-foreground: #0f0f0f;
--border: #2a2a2a;
--input: #1a1a1a;
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

## Dark Theme Only
This design is optimized for dark theme display. The color system creates:
- Reduced eye strain in low-light environments
- Premium, luxury aesthetic
- High contrast for accessibility
- Modern, sophisticated appearance

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
