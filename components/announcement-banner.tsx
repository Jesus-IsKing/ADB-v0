'use client';

import { HeroPill } from '@/components/ui/hero-pill';

export function AnnouncementBanner() {
  return (
    <section
      aria-label="Service availability announcement"
      className="w-full border-b border-accent/40 bg-accent/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs font-medium uppercase tracking-wide text-accent">
          Service update
        </div>

        <div className="flex flex-wrap gap-2 sm:justify-end">
          <HeroPill
            href="/contact"
            label="Online appointment scheduling is temporarily unavailable."
            announcement="⚠️ Notice"
            className="bg-primary/5"
          />
          <HeroPill
            href="/contact"
            label="We do not accept walk-ins at this time (appointment-only)."
            announcement="ℹ️ Info"
            className="bg-primary/5"
          />
          <HeroPill
            href="/contact#contact-section"
            label="Two professional chairs available for licensed beauty professionals."
            announcement="💺 Opportunity"
            className="bg-primary/5"
          />
        </div>
      </div>
    </section>
  );
}

