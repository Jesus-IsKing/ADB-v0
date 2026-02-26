'use client';

import { ArrowRight } from 'lucide-react';
import { useState, Suspense, lazy } from 'react';

const Dithering = lazy(() =>
  import('@paper-design/shaders-react').then((mod) => ({ default: mod.Dithering }))
);

export interface HeroDitheringCardProps {
  /** Badge text above the headline (e.g. "Premium Salon Rentals") */
  badge?: string;
  /** Business name as the primary H1 (e.g. "Adorabella Salon") – most prominent when set */
  businessName?: string;
  /** Tagline shown directly under the business name (subhead) */
  tagline?: string;
  /** First line of the main headline (used when businessName is not set) */
  titleLine1?: string;
  /** Second line (optional), can use muted styling */
  titleLine2?: string;
  /** Short description below the headline */
  description: string;
  /** Primary CTA button label */
  primaryCtaText: string;
  /** Secondary CTA label (link) */
  secondaryCtaText?: string;
  /** Primary CTA click handler (e.g. open modal) */
  onPrimaryCtaClick?: () => void;
  /** Secondary CTA href (e.g. /contact) */
  secondaryCtaHref?: string;
  /** Optional trust stats: array of { value, label } */
  stats?: Array<{ value: string; label: string }>;
  /** Scroll indicator click (smooth-scroll to next section) */
  onScrollIndicatorClick?: () => void;
  /** Dithering front color (defaults to accent gold) */
  accentColor?: string;
  /** Minimum height of the card (default min-h-[600px]) */
  minHeight?: string;
}

export function HeroDitheringCard({
  badge = 'Premium Salon Rentals',
  businessName,
  tagline,
  titleLine1,
  titleLine2,
  description,
  primaryCtaText,
  secondaryCtaText = 'Learn More',
  onPrimaryCtaClick,
  secondaryCtaHref = '/contact',
  stats,
  onScrollIndicatorClick,
  accentColor = '#d4af37',
  minHeight = 'min-h-[600px] md:min-h-[700px]',
}: HeroDitheringCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const useBusinessNameHeader = Boolean(businessName);

  return (
    <section className="relative py-12 w-full flex justify-center items-center px-4 md:px-6">
      <div
        className="w-full max-w-7xl relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`relative overflow-hidden rounded-[48px] border border-border bg-card shadow-sm ${minHeight} flex flex-col items-center justify-center duration-500`}
        >
          <Suspense fallback={<div className="absolute inset-0 bg-muted/20 animate-pulse" />}>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen">
              <Dithering
                colorBack="#00000000"
                colorFront={accentColor}
                shape="warp"
                type="4x4"
                speed={isHovered ? 0.6 : 0.2}
                className="size-full"
              />
            </div>
          </Suspense>

          {/* Hero content: mobile-first. Padding (px-6) and spacing scale with viewport.
           * Typography: .hero-business-name and .hero-tagline in globals.css use clamp()
           * for fluid type across 320px / 768px / 1024px / 1440px+. */}
          <div className="relative z-10 px-4 sm:px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
            {badge && (
              <div className="hero-header-spacing inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                {badge}
              </div>
            )}

            {/* Primary focus: business name as H1. Semantic, accessible, responsive via .hero-business-name. */}
            {useBusinessNameHeader ? (
              <header className="mb-8 md:mb-10">
                <h1 className="hero-business-name font-serif text-balance mb-3 md:mb-4">
                  {businessName}
                </h1>
                {tagline && (
                  <p className="hero-tagline hero-header-spacing" role="doc-subtitle">
                    {tagline}
                  </p>
                )}
              </header>
            ) : (
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground mb-6 leading-[1.05] text-balance">
                {titleLine1}
                {titleLine2 && (
                  <>
                    <br />
                    <span className="text-foreground/80">{titleLine2}</span>
                  </>
                )}
              </h1>
            )}

            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              {description}
            </p>

            {/* Touch targets: min 44px height/width for mobile (WCAG 2.5.5). h-14 = 56px. */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <button
                type="button"
                onClick={onPrimaryCtaClick}
                className="group relative inline-flex min-h-[44px] h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-accent px-12 text-base font-medium text-accent-foreground transition-all duration-300 hover:bg-[#c9a227] hover:scale-105 active:scale-95 hover:ring-4 hover:ring-accent/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span className="relative z-10">{primaryCtaText}</span>
                <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              {secondaryCtaText && secondaryCtaHref && (
                <a
                  href={secondaryCtaHref}
                  className="inline-flex min-h-[44px] h-14 items-center justify-center rounded-full border-2 border-accent px-8 text-base font-medium text-accent transition-colors hover:bg-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {secondaryCtaText}
                </a>
              )}
            </div>

            {stats && stats.length > 0 && (
              <div className="flex flex-wrap gap-8 justify-center border-t border-border pt-8 w-full max-w-xl">
                {stats.map((stat) => (
                  <div key={stat.label} className="space-y-1 text-center">
                    <p className="text-2xl font-bold text-accent">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {onScrollIndicatorClick && (
        <button
          type="button"
          onClick={onScrollIndicatorClick}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-accent hover:text-[#c9a227] transition-colors animate-bounce focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full"
          aria-label="Scroll to next section"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      )}
    </section>
  );
}
