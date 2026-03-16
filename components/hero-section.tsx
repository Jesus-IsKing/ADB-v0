'use client';

import React from 'react';
import { AnnouncementBanner } from '@/components/announcement-banner';
import { HeroDitheringCard } from '@/components/ui/hero-dithering-card';

interface HeroSectionProps {
  onCTAClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCTAClick }) => {
  const scrollToLookbook = () => {
    document.getElementById('lookbook')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Announcement banner sits below nav but above main hero content */}
      <AnnouncementBanner />

      <HeroDitheringCard
        badge="Private Boutique Portfolio"
        businessName="Adorabella Salon"
        tagline="Artistry in Precision & Restoration"
        description="A private sanctuary for master hair artistry. We are currently nearly fully booked and operating via a private waitlist. Explore our portfolio of geometric precision cutting and restorative color transformations."
        primaryCtaText="View Our Portfolio"
        secondaryCtaText="Join the Private Waitlist"
        secondaryCtaHref="/contact"
        onPrimaryCtaClick={scrollToLookbook}
        onScrollIndicatorClick={scrollToLookbook}
        stats={[
          { value: '15+', label: 'Years of Artistry' },
          { value: 'Fully', label: 'Booked Boutique' },
          { value: 'Cell', label: 'Direct Access' },
        ]}
        minHeight="min-h-[75vh] md:min-h-[80vh]"
      />
    </div>
  );
};
