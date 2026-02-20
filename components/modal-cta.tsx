'use client';

import React, { useEffect } from 'react';
import { ButtonCTA } from './button-cta';

interface ModalCTAProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalCTA: React.FC<ModalCTAProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="glass-gold max-w-md w-full mx-4 p-8 space-y-6 animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6 text-foreground"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            Start Your <span className="text-accent">Journey</span> Today
          </h2>
          <p className="text-muted-foreground">
            Ready to join Adorabella? Reach out to us and let's discuss which plan is perfect for you.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <svg
              className="w-5 h-5 text-accent flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.02.04.039.082.059.125 1.476 2.955 3.728 5.207 6.683 6.683.043.02.085.038.125.059l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <a
              href="tel:+1234567890"
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              (123) 456-7890
            </a>
          </div>
          <div className="flex items-center gap-3">
            <svg
              className="w-5 h-5 text-accent flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <a
              href="mailto:info@adorabella.com"
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              info@adorabella.com
            </a>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3 pt-4 border-t border-white/10">
          <ButtonCTA
            href="/contact"
            variant="primary"
            className="w-full"
            onClick={() => onClose()}
          >
            Contact Us
          </ButtonCTA>
          <ButtonCTA
            variant="secondary"
            className="w-full"
            onClick={onClose}
          >
            Maybe Later
          </ButtonCTA>
        </div>

        {/* Trust Badge */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            <span className="text-accent">24/7</span> Response Guarantee
          </p>
        </div>
      </div>
    </div>
  );
};
