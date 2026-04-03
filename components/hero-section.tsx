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

  const scrollToPhilosophy = () => {
    document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Announcement banner sits below nav but above main hero content */}
      <AnnouncementBanner />

      <MagazineHero
        badge="A Private Boutique Dedicated to Christ"
        title="Glory & Excellence"
        subtitle="Adorabella: Following Jesus"
        description="A private destination for artistic excellence, where beauty is a devotion to the Creator. We serve one guest at a time with undivided attention at Adorabella House. Guided by Faith, Precision, and Grace."
        primaryCtaText="Join the Experience"
        secondaryCtaText="The Vision"
        onPrimaryCtaClick={scrollToLookbook}
        onSecondaryCtaClick={scrollToPhilosophy}
        images={[
          "/lookbook-real-1.jpg",
          "/lookbook-real-4.jpg",
          "/lookbook-real-2.jpg",
        ]}
      />
    </div>
  );
};

