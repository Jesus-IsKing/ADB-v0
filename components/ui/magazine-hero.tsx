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
    badge = "A Private Sanctuary",
    title = "Precision & Artistry",
    subtitle = "The Adorabella Portfolio",
    description = "Explore a curated collection of geometric precision and restorative transformations. We push the boundaries of hair health and architectural style.",
    primaryCtaText = "View Portfolio",
    secondaryCtaText = "Join Waitlist",
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
            className="relative w-full min-h-screen flex items-center justify-center bg-background overflow-hidden pt-20 pb-10"
        >
            {/* Background Grain/Noise Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-4 items-center">

                    {/* Left Side: Content Box */}
                    <div className="lg:col-span-5 flex flex-col items-start space-y-8 order-2 lg:order-1">
                        <motion.div
                            style={{ x: textX, y: textY }}
                            className="space-y-6"
                        >
                            {badge && (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                    className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase text-accent"
                                >
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                                    </span>
                                    {badge}
                                </motion.div>
                            )}

                            <div className="space-y-2">
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-medium leading-[0.9] tracking-tighter text-foreground"
                                >
                                    {title}
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="text-xl md:text-2xl font-serif italic text-accent"
                                >
                                    {subtitle}
                                </motion.p>
                            </div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-muted-foreground text-lg max-w-md leading-relaxed"
                            >
                                {description}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="flex flex-wrap gap-4 pt-4"
                            >
                                <Magnetic strength={0.2}>
                                    <button
                                        onClick={onPrimaryCtaClick}
                                        className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-none border border-foreground bg-foreground px-8 text-sm font-bold tracking-widest uppercase text-background transition-all hover:bg-transparent hover:text-foreground focus:outline-none"
                                    >
                                        <span className="relative z-10">{primaryCtaText}</span>
                                        <ArrowRight className="h-4 w-4 relative z-10 transition-transform group-hover:translate-x-1" />
                                    </button>
                                </Magnetic>

                                <Magnetic strength={0.1}>
                                    <button
                                        onClick={onSecondaryCtaClick}
                                        className="inline-flex h-12 items-center justify-center px-8 text-sm font-bold tracking-widest uppercase text-foreground/70 transition-all hover:text-accent focus:outline-none border-b border-transparent hover:border-accent"
                                    >
                                        {secondaryCtaText}
                                    </button>
                                </Magnetic>
                            </motion.div>
                        </motion.div>

                        {/* Magazine Metadata footer style */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="hidden lg:flex flex-col space-y-2 pt-12 text-[10px] font-mono uppercase tracking-[0.2em] border-t border-border/50 w-full"
                        >
                            <div className="flex flex-col space-y-1 text-muted-foreground/50">
                                <span>Adorabella Archive No. 2026-X</span>
                                <span>Issue: Spring / Summer Edition</span>
                                <span>Curated by: Master Artistry Group</span>
                            </div>
                            <div className="flex items-center gap-2 text-accent/80 font-bold">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                                </span>
                                <span>Placement Status: HIGHLY LIMITED</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Editorial Photo Stack */}
                    <div className="lg:col-span-7 relative h-[500px] md:h-[600px] lg:h-[700px] order-1 lg:order-2">

                        {/* Main Center Image */}
                        <motion.div
                            style={{ x: mainImgX, y: mainImgY, rotate: 2 }}
                            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                            animate={{ opacity: 1, scale: 1, rotate: 2 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute z-20 left-[10%] top-[10%] w-[65%] h-[75%] shadow-[20px_40px_80px_-20px_rgba(0,0,0,0.4)] overflow-hidden rounded-sm group/img1"
                        >
                            <Image
                                src={images[0]}
                                alt="Main Showcase"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover/img1:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

                            {/* Watermark/Label */}
                            <div className="absolute bottom-6 right-6 z-30 opacity-60">
                                <span className="font-serif text-white text-sm tracking-[0.4em] uppercase">Private Art</span>
                            </div>

                            {/* Center Reveal Button/Label */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img1:opacity-100 transition-opacity duration-500">
                                <span className="bg-background/20 backdrop-blur-md px-6 py-2 border border-white/30 text-[10px] uppercase tracking-[0.3em] text-white">View Details</span>
                            </div>
                        </motion.div>

                        {/* Secondary Overlapping Image (Top Right) */}
                        <motion.div
                            style={{ x: secondaryImgX, y: secondaryImgY, rotate: -3 }}
                            initial={{ opacity: 0, x: 100, rotate: 0 }}
                            animate={{ opacity: 1, x: 0, rotate: -3 }}
                            transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute z-30 right-[5%] top-[5%] w-[35%] h-[40%] shadow-[10px_20px_40px_-10px_rgba(0,0,0,0.3)] overflow-hidden rounded-sm border-4 border-background group/img2"
                        >
                            <Image
                                src={images[1]}
                                alt="Detail Showcase"
                                fill
                                className="object-cover transition-transform duration-700 group-hover/img2:scale-110"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
                            <div className="absolute top-2 left-2 bg-background/90 backdrop-blur-sm px-2 py-1 flex flex-col opacity-0 group-hover/img2:opacity-100 transition-opacity border-l-2 border-accent">
                                <span className="text-[8px] font-bold tracking-tighter uppercase text-foreground">Project 01</span>
                                <span className="text-[6px] font-medium text-accent uppercase">Precision Cut</span>
                            </div>
                        </motion.div>

                        {/* Tertiary Background Image (Bottom Left) */}
                        <motion.div
                            style={{ x: tertiaryImgX, y: tertiaryImgY, rotate: 1 }}
                            initial={{ opacity: 0, x: -100, rotate: 0 }}
                            animate={{ opacity: 1, x: 0, rotate: 1 }}
                            transition={{ duration: 1.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute z-10 left-[0%] bottom-[5%] w-[40%] h-[45%] shadow-[0px_10px_30px_-5px_rgba(0,0,0,0.2)] overflow-hidden rounded-sm grayscale-[0.5] opacity-80 group/img3 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                        >
                            <Image
                                src={images[2]}
                                alt="Environment Showcase"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-accent/10 mix-blend-multiply group-hover/img3:bg-transparent transition-colors" />
                            <div className="absolute bottom-2 left-2 bg-background/90 backdrop-blur-sm px-2 py-1 flex flex-col opacity-0 group-hover/img3:opacity-100 transition-opacity border-l-2 border-accent">
                                <span className="text-[8px] font-bold tracking-tighter uppercase text-foreground">Project 02</span>
                                <span className="text-[6px] font-medium text-accent uppercase">Master Color</span>
                            </div>
                        </motion.div>

                        {/* Decorative Magazine Elements */}
                        <motion.div
                            style={{ x: textX, y: textY }}
                            className="absolute top-0 right-1/4 z-0 pointer-events-none opacity-10"
                        >
                            <span className="text-[20rem] font-serif leading-none select-none text-foreground">A</span>
                        </motion.div>

                        <div className="absolute bottom-[20%] right-[10%] z-40 bg-accent p-6 flex flex-col items-center justify-center space-y-1 shadow-2xl">
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent-foreground/60">Founded</span>
                            <span className="text-2xl font-serif font-bold text-accent-foreground">2009</span>
                            <div className="h-0.5 w-full bg-accent-foreground/20 my-2" />
                            <span className="text-[8px] font-mono tracking-widest text-accent-foreground/80">LTD. EDITION</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
                onClick={onPrimaryCtaClick}
            >
                <span className="text-[9px] font-bold tracking-[0.5em] uppercase text-muted-foreground/60">Scroll to Explore</span>
                <div className="w-px h-12 bg-gradient-to-b from-accent/50 to-transparent" />
            </motion.div>
        </section>
    );
};
