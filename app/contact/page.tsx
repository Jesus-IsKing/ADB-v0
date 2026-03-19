'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ContactForm } from '@/components/contact-form';
import { ButtonCTA } from '@/components/button-cta';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ModalCTA } from '@/components/modal-cta';
import { ModalReasons } from '@/components/modal-reasons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function ContactPage() {
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showReasonsModal, setShowReasonsModal] = useState(false);

  const scrollToContactSection = useCallback(() => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onCTAClick={scrollToContactSection} />

      <main className="w-full pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-accent/5 via-transparent to-background border-b border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 animate-slideUp">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Adorabella is a private boutique destination that is currently <span className="text-accent font-semibold">nearly fully booked</span>. We do not accept walk-ins. To discuss your hair journey or join our private guest list, please reach out directly to Natalie via call or text.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="w-full py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                {/* Phone & Text */}
                <div className="glass-gold p-8 space-y-6 rounded-lg animate-slideInLeft">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <svg
                        className="w-7 h-7 text-accent"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.02.04.039.082.059.125 1.476 2.955 3.728 5.207 6.683 6.683.043.02.085.038.125.059l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Direct Line</h3>
                      <p className="text-sm text-accent font-medium tracking-wide uppercase">Call or Text</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <a
                      href="tel:5096794206"
                      className="block text-3xl sm:text-4xl font-bold text-foreground hover:text-accent transition-colors"
                    >
                      509-679-4206
                    </a>
                    <p className="text-muted-foreground leading-relaxed">
                      Natalie handles all client communications personally to ensure the highest level of care. Whether you prefer a quick text or a detailed call, she is available for your inquiries.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <ButtonCTA href="tel:5096794206" variant="primary" className="flex-1 h-14">
                        Call Now
                      </ButtonCTA>
                      <ButtonCTA href="sms:5096794206" variant="secondary" className="flex-1 h-14 border-2 border-accent text-accent bg-transparent">
                        Send Message
                      </ButtonCTA>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="glass-gold p-8 space-y-4 rounded-lg animate-slideInLeft" style={{ animationDelay: '200ms' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <svg
                        className="w-7 h-7 text-accent"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Our Location</h3>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Adorabella Premium Salon<br />
                    By Appointment Only<br />
                    Wenatchee, WA 98801
                  </p>
                </div>
              </div>

              {/* Notice / Message */}
              <div id="contact-section" className="glass-gold p-8 rounded-lg flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">
                    A Note on <span className="text-accent">Availability</span>
                  </h2>
                  <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                    <p>
                      Because we prioritize quality over quantity, Natalie's schedule is often booked several weeks in advance. To ensure every client receives her undivided attention, we do not use automated booking or generic forms.
                    </p>
                    <p>
                      If you are a new client interested in our signature precision cuts or master color services, please reach out directly. We maintain a private waitlist and will do our best to accommodate your transformation as soon as an opening becomes available.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-accent/5 border border-accent/20 rounded-xl space-y-2">
                  <p className="text-foreground font-bold italic">"I look forward to personally discussing your hair journey."</p>
                  <p className="text-accent font-medium">— Natalie, Owner</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-20 md:py-32 bg-secondary border-y border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center text-balance animate-slideUp">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>

            <Accordion
              type="single"
              collapsible
              className="w-full space-y-3"
            >
              {[
                {
                  q: 'Do I need to book a consultation first?',
                  a: "While not required for all services, we highly recommend a consultation for new clients or major color transformations. This ensures we allocate enough time and understand your goals perfectly.",
                },
                {
                  q: 'What is your cancellation policy?',
                  a: 'We kindly ask for 24-48 hours notice for cancellations or rescheduling. This allows us to offer the time slot to another client. Cancellations made with less than 24 hours notice may be subject to a fee.',
                },
                {
                  q: 'How is your pricing determined?',
                  a: 'Final pricing varies based on the service type, hair complexity, and your specific needs. All clients receive a custom tailored quote during their consultation to ensure the best plan for their hair goals.',
                },
                {
                  q: 'Do you accept walk-ins?',
                  a: 'To ensure each client receives our full attention and a premium experience, we operate primarily on an appointment-only basis. However, you can always call ahead to check if we have any last-minute availability.',
                },
                {
                  q: 'What professional products do you use?',
                  a: 'We use only the highest quality, professional-grade products from world-renowned brands. During your consultation, your stylist will recommend the best products for your hair type and texture to maintain your results at home.',
                },
                {
                  q: 'How long should I allow for my appointment?',
                  a: 'Appointment times vary by service. A haircut typically takes 45-60 minutes, while color services can range from 2 to 4 hours. We will provide an estimated duration when you book.',
                },
                {
                  q: 'Is there parking available?',
                  a: 'Yes! We have dedicated client parking located directly behind the salon, as well as metered street parking on Beauty Street.',
                },
                {
                  q: 'Do you offer bridal or event packages?',
                  a: 'Absolutely. We specialize in bridal and special event styling. Please contact our coordinator to discuss group bookings, on-site services, and tailored packages for your big day.',
                },
              ].map((faq, idx) => (
                <AccordionItem
                  key={faq.q}
                  value={`faq-${idx}`}
                  className="glass-gold border-none rounded-lg animate-slideUp"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <AccordionTrigger className="text-left text-base sm:text-lg font-bold text-foreground">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* CTA */}
            <div className="text-center mt-12 space-y-4 animate-slideUp">
              <p className="text-muted-foreground">
                Still have questions? We're here to help!
              </p>
              <ButtonCTA size="lg" onClick={scrollToContactSection}>
                Get in Touch
              </ButtonCTA>
            </div>
          </div>
        </section>

        {/* Conversion CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-b from-background to-secondary border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 animate-slideUp">
            <div className="glass-gold p-8 md:p-12 rounded-lg space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Ready for Your <span className="text-accent">Transformation?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Schedule your visit to Adorabella and experience the very best in premium beauty care. We look forward to welcoming you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button
                  onClick={() => setShowJoinModal(true)}
                  className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:bg-[#c9a227] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Join Private Waitlist
                </button>
                <button
                  onClick={() => setShowReasonsModal(true)}
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-accent text-accent bg-transparent rounded-lg hover:bg-accent/10 font-bold transition-colors"
                >
                  View Services
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer
        onCTAClick={scrollToContactSection}
        onBackToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      {/* Modals */}
      <ModalCTA
        isOpen={showJoinModal}
        onClose={() => setShowJoinModal(false)}
      />
      <ModalReasons
        isOpen={showReasonsModal}
        onClose={() => setShowReasonsModal(false)}
      />
    </div>
  );
}
