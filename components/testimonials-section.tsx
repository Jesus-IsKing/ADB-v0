'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './ui/reveal';

const TESTIMONIALS = [
    {
        quote: "Adorabella House is not just a salon; it's a spiritual experience for your crown. Natalie's precision is unmatched, and her heart for her craft shines through every strand.",
        author: "Sarah J.",
        role: "Regular Guest Since 2018",
        rating: 5
    },
    {
        quote: "I drive three hours for my color appointments because nowhere else understands the intersection of hair health and high-end artistry like Adorabella does.",
        author: "Rachel M.",
        role: "Master Color Guest",
        rating: 5
    },
    {
        quote: "Finding a place that values both excellence and grace is rare. I leave feeling not just more beautiful, but truly restored.",
        author: "Elena V.",
        role: "Restorative Care Guest",
        rating: 5
    }
];

export const TestimonialsSection: React.FC = () => {
    return (
        <section id="testimonials" className="w-full py-24 md:py-40 bg-background relative overflow-hidden border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20 md:mb-32">
                    <Reveal>
                        <div className="space-y-6">
                            <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-accent">Testimonials & Praise</p>
                            <h2 className="text-4xl xs:text-5xl sm:text-6xl font-serif font-medium text-foreground leading-[1.1] tracking-tight">
                                Words of <br /><span className="text-accent italic">Excellence</span>
                            </h2>
                        </div>
                    </Reveal>
                </div>

                {/* Staggered Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
                    {TESTIMONIALS.map((t, idx) => (
                        <Reveal key={idx} delay={idx * 0.2}>
                            <div className={`space-y-8 p-10 glass-gold border-accent/10 relative ${idx === 1 ? 'lg:translate-y-12' : ''}`}>
                                <div className="absolute top-[-20px] left-8 text-6xl font-serif text-accent/20">"</div>

                                <p className="text-lg sm:text-xl font-light italic leading-relaxed text-foreground/80">
                                    {t.quote}
                                </p>

                                <div className="space-y-2 pt-4 border-t border-accent/10">
                                    <p className="text-sm font-bold tracking-widest uppercase text-foreground">{t.author}</p>
                                    <p className="text-[9px] font-medium tracking-[0.2em] uppercase text-accent/60">{t.role}</p>
                                </div>

                                <div className="flex gap-1">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <span key={i} className="text-accent text-xs">★</span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Closing Decoration */}
                <div className="mt-32 text-center">
                    <div className="h-px w-24 bg-accent/20 mx-auto mb-8" />
                    <p className="text-[10px] italic text-muted-foreground/40 font-serif tracking-widest uppercase">Devoted to every visitor</p>
                </div>
            </div>
        </section>
    );
};
