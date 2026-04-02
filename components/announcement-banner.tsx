'use client';

import { HeroPill } from '@/components/ui/hero-pill';

export function AnnouncementBanner() {
  return (
    <section
      aria-label="Service availability announcement"
      className="w-full border-b border-accent/40 bg-accent/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent/80 text-center sm:text-left">
          Service update
        </div>

        <div className="flex overflow-x-auto pb-1 sm:pb-0 no-scrollbar items-center gap-3 justify-start sm:justify-end -mx-4 px-4 sm:mx-0 sm:px-0">
          <HeroPill
            href="/contact"
            label="Nearly Fully Booked"
            announcement="📅 Status"
            className="bg-primary/5 border-accent/20 flex-shrink-0"
          />
          <HeroPill
            href="/contact"
            label="Appointment Only"
            announcement="The House"
            className="bg-primary/5 border-accent/20 flex-shrink-0"
          />
          <HeroPill
            href="tel:5096794206"
            label="509-679-4206"
            announcement="📱 Call"
            className="bg-primary/5 border-accent/20 flex-shrink-0"
          />
        </div>
      </div>
    </section>
  );
}

