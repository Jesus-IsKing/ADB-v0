'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Magnetic } from './magnetic';

interface MagazineHeroProps {
    badge?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    primaryCtaText?: string;
    secondaryCtaText?: string;
    onPrimaryCtaClick?: () => void;
    onSecondaryCtaClick?: () => void;
    images?: string[];
}

export const MagazineHero: React.FC<MagazineHeroProps> = ({
    badge = "The Adorabella House",
    title = "Precision & Artistry",
    subtitle = "The Adorabella Portfolio",
    description = "Discover a dedicated destination for hair artistry. We operate a private guest list to ensure every guest receives our undivided attention.",
    primaryCtaText = "Enter the Archive",
    secondaryCtaText = "Join Guest List",
    onPrimaryCtaClick,
    onSecondaryCtaClick,
    images = [
        "/lookbook-real-1.jpg",
        "/lookbook-real-4.jpg",
        "/lookbook-real-2.jpg",
    ]
}) => {
    const sectionRef = useRef<HTMLElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring physics for smooth movement
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 2; // -1 to 1
        const y = (clientY / innerHeight - 0.5) * 2; // -1 to 1
        mouseX.set(x);
        mouseY.set(y);
    };

    // Parallax transforms for various elements
    const mainImgX = useTransform(smoothX, [-1, 1], [-20, 20]);
    const mainImgY = useTransform(smoothY, [-1, 1], [-20, 20]);

    const secondaryImgX = useTransform(smoothX, [-1, 1], [40, -40]);
    const secondaryImgY = useTransform(smoothY, [-1, 1], [40, -40]);

    const tertiaryImgX = useTransform(smoothX, [-1, 1], [-60, 60]);
    const tertiaryImgY = useTransform(smoothY, [-1, 1], [60, -60]);

    const textX = useTransform(smoothX, [-1, 1], [10, -10]);
    const textY = useTransform(smoothY, [-1, 1], [10, -10]);

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="relative w-full min-h-screen flex items-center justify-center bg-background overflow-hidden pt-24 pb-12"
        >
            {/* Background Texture & Audio Visuals */}
            <div className="noise-overlay" />

            <div className="container mx-auto px-6 relative z-10 lg:pl-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-4 items-center">

                    {/* Left Side: Content Box */}
                    <div className="lg:col-span-5 flex flex-col items-start space-y-8 md:space-y-12 order-2 lg:order-1 px-4 sm:px-0">
                        <motion.div
                            style={{ x: textX, y: textY }}
                            className="space-y-6 md:space-y-8"
                        >
                            <div className="space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-[9px] sm:text-[10px] font-bold tracking-[0.5em] uppercase text-accent/60 flex items-center gap-4"
                                >
                                    <div className="h-px w-6 sm:w-8 bg-accent/30" />
                                    The Destination
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                                    className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-serif font-medium leading-[1.1] sm:leading-[0.85] tracking-tight text-foreground text-balance"
                                >
                                    ADORABELLA <br className="hidden xs:block sm:block" /> HOUSE
                                </motion.h1>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="relative flex flex-col gap-4 sm:gap-6"
                            >
                                <div className="absolute -left-4 sm:-left-8 top-0 h-full w-[1px] bg-gradient-to-b from-accent/40 to-transparent" />
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif italic text-accent/80 leading-snug max-w-md">
                                    "A sanctuary for hair artistry & grace."
                                </h2>
                                <p className="text-muted-foreground/80 text-base sm:text-lg max-w-sm leading-relaxed font-light">
                                    Elevating beauty through precision and faith-based devotion. Our private boutique offers an exclusive, curated experience.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="flex flex-wrap gap-4 sm:gap-8 pt-4 sm:pt-8"
                            >
                                <Magnetic strength={0.2}>
                                    <button
                                        onClick={onPrimaryCtaClick}
                                        className="group relative h-14 sm:h-16 items-center flex px-8 sm:px-10 bg-foreground text-background text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-accent transition-all duration-500 overflow-hidden w-full sm:w-auto justify-center"
                                    >
                                        Reserve Your Moment
                                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                    </button>
                                </Magnetic>

                                <button
                                    onClick={onSecondaryCtaClick}
                                    className="h-14 sm:h-16 flex items-center text-[10px] font-bold tracking-[0.3em] uppercase text-foreground hover:text-accent border-b border-border hover:border-accent transition-all duration-500 w-full sm:w-auto justify-center sm:justify-start"
                                >
                                    The Philosophy
                                </button>
                            </motion.div>
                        </motion.div>

                        {/* Subtle Faith Metric */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="pt-10 sm:pt-16 flex items-center gap-6"
                        >
                            <span className="text-[18px] font-serif italic text-accent/40 w-8 inline-block text-center">†</span>
                            <div className="flex flex-col">
                                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-muted-foreground/40">Proverbs 31:30</span>
                                <span className="text-[10px] font-light italic text-muted-foreground/60">"Crowned in Grace"</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Overlapping Editorial Stack */}
                    <div className="lg:col-span-7 relative h-[450px] sm:h-[600px] lg:h-[800px] order-1 lg:order-2">

                        {/* Main Image Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                            className="absolute z-10 right-0 top-1/2 -translate-y-1/2 w-[90%] sm:w-[85%] h-[90%] sm:h-[80%] overflow-hidden rounded-sm"
                        >
                            <Image
                                src={images[0]}
                                alt="Main Showcase"
                                fill
                                className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                        </motion.div>

                        {/* Overlapping Glass Prompt Card 1 */}
                        <motion.div
                            style={{ x: secondaryImgX, y: secondaryImgY }}
                            className="absolute z-20 left-0 top-[10%] sm:top-[15%] w-[65%] sm:w-[50%] lg:w-[45%] p-5 sm:p-10 glass-gold border-white/10 backdrop-blur-2xl space-y-3 sm:space-y-4"
                        >
                            <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.4em] uppercase text-accent">Artistry</span>
                            <p className="text-base sm:text-xl font-serif text-foreground leading-[1.2]">Unveiling the <br /><span className="italic text-accent">Collection</span></p>
                            <div className="h-px w-full bg-accent/20" />
                            <span className="text-[7px] sm:text-[8px] font-mono text-muted-foreground uppercase tracking-widest">ART №01 / EST 2009</span>
                        </motion.div>

                        {/* Overlapping Glass Prompt Card 2 */}
                        <motion.div
                            style={{ x: tertiaryImgX, y: tertiaryImgY }}
                            className="absolute z-30 right-[2%] sm:right-[5%] lg:right-[10%] bottom-[5%] sm:bottom-[10%] w-[55%] sm:w-[45%] lg:w-[40%] p-5 sm:p-8 glass-gold border-white/10 backdrop-blur-2xl flex flex-col items-center text-center space-y-2 sm:space-y-3"
                        >
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-accent/30 flex items-center justify-center">
                                <span className="text-[9px] sm:text-[10px] italic text-accent">A</span>
                            </div>
                            <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.4em] uppercase text-foreground">Technique</span>
                            <span className="text-[11px] sm:text-[14px] font-serif italic text-muted-foreground">"Precision in every strand"</span>
                        </motion.div>

                        {/* Sub-image Floating */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 1.2 }}
                            className="absolute z-0 left-[-2%] sm:left-[-5%] bottom-[10%] sm:bottom-[15%] w-[35%] h-[35%] sm:h-[40%] border-4 sm:border-8 border-background shadow-2xl overflow-hidden"
                        >
                            <Image
                                src={images[1]}
                                alt="Detail"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Aesthetic Scroll Reveal Tag */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute left-8 bottom-12 hidden lg:flex flex-col items-start gap-4"
            >
                <span className="archive-number !text-[8px] opacity-40">SPRING // SUMMER 2026</span>
                <div className="h-24 w-px bg-gradient-to-t from-accent/40 to-transparent mx-auto" />
            </motion.div>
        </section>

    );
};
