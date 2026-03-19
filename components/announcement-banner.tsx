'use client';

import { HeroPill } from '@/components/ui/hero-pill';

export function AnnouncementBanner() {
  return (
    <section
      aria-label="Service availability announcement"
      className="w-full border-b border-accent/40 bg-accent/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 sm:py-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-accent opacity-70">
          Service update
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center sm:justify-end">
          <HeroPill
            href="/contact"
            label="Nearly Fully Booked — Text for openings"
            announcement="⚠️ Notice"
            className="bg-primary/5 border-accent/20"
          />
          <HeroPill
            href="/contact"
            label="Appointment Only — No walk-ins"
            announcement="🔒 Private"
            className="bg-primary/5 border-accent/20"
          />
          <HeroPill
            href="tel:5096794206"
            label="Natalie: 509-679-4206"
            announcement="📱 Cell"
            className="bg-primary/5 border-accent/20"
          />
        </div>
      </div>
    </section>
  );
}

