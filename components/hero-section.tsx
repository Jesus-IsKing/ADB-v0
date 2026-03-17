'use client';

import React from 'react';
import { AnnouncementBanner } from '@/components/announcement-banner';
import { MagazineHero } from '@/components/ui/magazine-hero';
import { useRouter } from 'next/navigation';

interface HeroSectionProps {
  onCTAClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCTAClick }) => {
  const router = useRouter();

  const scrollToLookbook = () => {
    document.getElementById('lookbook')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSecondaryAction = () => {
    router.push('/contact');
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Announcement banner sits below nav but above main hero content */}
      <AnnouncementBanner />

      <MagazineHero
        badge="Private Boutique Portfolio"
        title="Precision & Artistry"
        subtitle="The Adorabella Journal"
        description="A private sanctuary for master hair artistry. Nearly fully booked and operating via an exclusive waitlist. Explore our portfolio of geometric precision and restorative transformations."
        primaryCtaText="Expose The Art"
        secondaryCtaText="Join The Waitlist"
        onPrimaryCtaClick={scrollToLookbook}
        onSecondaryCtaClick={handleSecondaryAction}
        images={[
          "/lookbook-real-1.jpg",
          "/lookbook-real-4.jpg",
          "/lookbook-real-2.jpg",
        ]}
      />
    </div>
  );
};

