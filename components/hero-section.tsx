'use client';

import React from 'react';
import { AnnouncementBanner } from '@/components/announcement-banner';
import { HeroDitheringCard } from '@/components/ui/hero-dithering-card';

interface HeroSectionProps {
  onCTAClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCTAClick }) => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Announcement banner sits below nav but above main hero content */}
      <AnnouncementBanner />

      <HeroDitheringCard
        badge="Premium Salon Rentals"
        businessName="Adorabella Salon"
        tagline="Premium Chair Rentals for Beauty Professionals"
        description="Start your salon business with Adorabella. Flexible terms, premium facilities, and dedicated support to help you thrive."
        primaryCtaText="Get Started Today"
        secondaryCtaText="Learn More"
        secondaryCtaHref="/contact"
        onPrimaryCtaClick={onCTAClick}
        onScrollIndicatorClick={scrollToFeatures}
        stats={[
          { value: '50+', label: 'Beauty Professionals' },
          { value: '100%', label: 'Satisfaction Rate' },
          { value: '24/7', label: 'Support Available' },
        ]}
        minHeight="min-h-[75vh] md:min-h-[80vh]"
      />
    </div>
  );
};
