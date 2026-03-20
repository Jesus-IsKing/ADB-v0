'use client';

import React, { useEffect } from 'react';
import { ButtonCTA } from './button-cta';

interface ModalCTAProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalCTA: React.FC<ModalCTAProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

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
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Request Your <span className="text-accent">Invitation</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We are nearly fully booked, but always happy to hear from you. Reach out via call or text to discuss your goals or join our private waitlist.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 pt-4">
          <ButtonCTA
            href="tel:5096794206"
            variant="primary"
            className="w-full h-14 text-lg"
          >
            <div className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.02.04.039.082.059.125 1.476 2.955 3.728 5.207 6.683 6.683.043.02.085.038.125.059l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              Call 509-679-4206
            </div>
          </ButtonCTA>

          <ButtonCTA
            href="sms:5096794206"
            variant="secondary"
            className="w-full h-14 text-lg border-2 border-accent text-accent bg-transparent hover:bg-accent/10"
          >
            <div className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm4 0H9v2h2V9zm2 2h2V9h-2v2z" clipRule="evenodd" />
              </svg>
              Text Message
            </div>
          </ButtonCTA>
        </div>

        {/* Closing Info */}
        <div className="text-center text-sm text-muted-foreground pt-4">
          <p>Direct inquiries handled with premium care.</p>
        </div>
      </div>
    </div>
  );
};
