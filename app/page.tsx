'use client';

import { useState, useRef } from 'react';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { PricingSection } from '@/components/pricing-section';
import { OwnerSection } from '@/components/owner-section';
import { Footer } from '@/components/footer';
import { ModalCTA } from '@/components/modal-cta';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const handleBackToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={topRef} className="min-h-screen bg-background text-foreground">
      <Navbar onCTAClick={() => setIsModalOpen(true)} />

      <main className="w-full pt-16 md:pt-20">
        <HeroSection onCTAClick={() => setIsModalOpen(true)} />
        <FeaturesSection onCTAClick={() => setIsModalOpen(true)} />
        <PricingSection onCTAClick={() => setIsModalOpen(true)} />
        <OwnerSection onCTAClick={() => setIsModalOpen(true)} />
      </main>

      <Footer
        onCTAClick={() => setIsModalOpen(true)}
        onBackToTop={handleBackToTop}
      />

      <ModalCTA isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
