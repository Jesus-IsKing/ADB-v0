'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Reveal } from './ui/reveal';

export const PhilosophySection: React.FC = () => {
    return (
        <section id="philosophy" className="w-full py-24 md:py-40 bg-secondary/30 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* Image Side - Overlapping Layout */}
                    <div className="lg:col-span-6 relative order-2 lg:order-1">
                        <Reveal>
                            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-sm shadow-2xl">
                                <Image
                                    src="/natalie-owner.jpg"
                                    alt="Natalie - Founder of Adorabella House"
                                    fill
                                    className="object-cover grayscale-[0.2]"
                                />
                                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                            </div>
                        </Reveal>

                        {/* Floating Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="absolute -bottom-10 -right-4 md:-right-10 glass-gold p-8 max-w-xs hidden sm:block"
                        >
                            <p className="text-xl font-serif italic text-accent mb-2">"Beauty is a blessing to be nurtured with care."</p>
                            <div className="h-px w-12 bg-accent/30 mb-4" />
                            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-foreground">Natalie // Founder</p>
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:col-span-6 space-y-12 order-1 lg:order-2">
                        <Reveal>
                            <div className="space-y-6">
                                <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-accent">The Philosophy</p>
                                <h2 className="text-4xl xs:text-5xl sm:text-6xl font-serif font-medium text-foreground leading-[1.1] tracking-tight">
                                    A Devoted <br /><span className="text-accent italic">Heart for Artistry</span>
                                </h2>
                                <div className="h-px w-24 bg-accent/40" />
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="space-y-8 text-lg sm:text-xl text-muted-foreground font-light leading-relaxed">
                                <p>
                                    At Adorabella House, we believe your hair is a crown of glory. Founded by Natalie, our house was built on the foundation of excellence, precision, and a faith-based commitment to serving others.
                                </p>
                                <p>
                                    We moved beyond the traditional salon model to create a "Private Destination"—a space where time slows down, and artistry takes center stage. Every cut, every color, and every restorative treatment is an act of devotion to the individual beauty God has bestowed upon you.
                                </p>

                                <div className="grid grid-cols-2 gap-8 pt-4">
                                    <div className="space-y-2">
                                        <span className="text-2xl font-serif text-foreground">15+</span>
                                        <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-accent">Years of Mastery</p>
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-2xl font-serif text-foreground">100%</span>
                                        <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-accent">Private Focus</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.4}>
                            <div className="pt-8">
                                <button className="group flex items-center gap-4 text-[11px] font-bold tracking-[0.4em] uppercase text-foreground hover:text-accent transition-colors">
                                    Read Our Mission
                                    <div className="w-12 h-px bg-foreground group-hover:bg-accent group-hover:w-20 transition-all duration-500" />
                                </button>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};
