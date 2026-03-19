'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ParallaxImage } from './ui/parallax-image';
import { Reveal } from './ui/reveal';

const CATEGORIES = ['All', 'Precision Cuts', 'Master Color', 'Restorative Care'] as const;
type Category = (typeof CATEGORIES)[number];

interface LookbookItem {
    id: number;
    title: string;
    category: Category;
    image: string;
    description: string;
    specs?: string[];
    refId: string;
    size: 'small' | 'medium' | 'large';
    aspectRatio?: 'portrait' | 'landscape' | 'square';
}

const LOOKBOOK_ITEMS: LookbookItem[] = [
    {
        id: 1,
        title: 'Nordic Ice Fusion',
        category: 'Master Color',
        image: '/lookbook-real-1.jpg',
        description: 'Level 10 neutralization with high-precision micro-foiling for seamless silver-ash transition.',
        specs: ['Formula 10.1A', 'Micro-Foil', 'Neutralized'],
        refId: 'REF-2026-01-A',
        size: 'large',
        aspectRatio: 'portrait'
    },
    {
        id: 6,
        title: 'Golden Hour Silk',
        category: 'Master Color',
        image: '/lookbook-real-4.jpg',
        description: '3D Dimensional Balayage with warm honey undertones and mirror-like silk finish.',
        specs: ['3D-Balayage', 'Luminous Silk', 'Toned'],
        refId: 'REF-2026-06-B',
        size: 'medium',
        aspectRatio: 'landscape'
    },
    {
        id: 2,
        title: 'Ivory Dimension',
        category: 'Master Color',
        image: '/lookbook-real-2.jpg',
        description: 'High-impact blonde achieved through meticulous micro-foiling techniques.',
        specs: ['High-Impact', 'Micro-Foil', 'Dimensional'],
        refId: 'REF-2026-02-G',
        size: 'small',
        aspectRatio: 'square'
    },
    {
        id: 3,
        title: 'Classic Precision Bob',
        category: 'Precision Cuts',
        image: '/lookbook-precision.png',
        description: 'A sharp, classic bob with natural texture for a timeless look.',
        specs: ['Precision Cut', 'Natural Texture'],
        refId: 'REF-2026-03-C',
        size: 'small',
        aspectRatio: 'portrait'
    },
    {
        id: 7,
        title: 'Lived-In Soft Ash',
        category: 'Master Color',
        image: '/lookbook-real-5.jpg',
        description: 'Low-maintenance ash tones with a soft, natural transition.',
        specs: ['Root Smudge', 'Ash Tones'],
        refId: 'REF-2026-07-D',
        size: 'small',
        aspectRatio: 'square'
    },
    {
        id: 4,
        title: 'Luminous Brunette',
        category: 'Master Color',
        image: '/lookbook-real-3.jpg',
        description: 'Warm contrast highlights on a rich base with deep hydration.',
        specs: ['Hand Painted', 'Hydrated'],
        refId: 'REF-2026-04-E',
        size: 'medium',
        aspectRatio: 'landscape'
    },
    {
        id: 8,
        title: 'Silky Velvet Balayage',
        category: 'Master Color',
        image: '/lookbook-real-6.jpg',
        description: 'Soft, creamy color with a high-shine finish and velvet texture.',
        specs: ['Soft Color', 'High Shine'],
        refId: 'REF-2026-08-H',
        size: 'small',
        aspectRatio: 'square'
    },
    {
        id: 5,
        title: 'Restorative Care',
        category: 'Restorative Care',
        image: '/lookbook-restoration.png',
        description: 'Intensive treatment for hair health, restoring strength and natural shine.',
        specs: ['Hair Health', 'Strength'],
        refId: 'REF-2026-05-F',
        size: 'small',
        aspectRatio: 'portrait'
    },
];

export const LookbookSection: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('All');

    const filteredItems = LOOKBOOK_ITEMS.filter(
        (item) => activeCategory === 'All' || item.category === activeCategory
    );

    return (
        <section id="lookbook" className="w-full py-24 md:py-40 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <Reveal>
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
                        <div className="max-w-xl space-y-4">
                            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-accent border-l border-accent/30 pl-4 py-1">Our Gallery of Blessings</p>
                            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-serif font-medium text-foreground tracking-tight leading-[0.9]">
                                Devoted <br /><span className="text-accent italic">Artistry</span>
                            </h2>
                            <p className="text-xl text-muted-foreground font-light leading-relaxed">
                                A humble showcase of our finest work, dedicated to excellence and the beauty of creation.
                            </p>
                        </div>

                        {/* Category Tabs */}
                        <div className="flex flex-wrap gap-4">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-8 py-4 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-700 ${activeCategory === cat
                                        ? 'bg-foreground text-background scale-105'
                                        : 'bg-secondary/20 text-muted-foreground hover:bg-accent/10 hover:text-accent border border-border/50'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </Reveal>

                {/* Gallery Grid - Editorial Masonry */}
                <motion.div
                    className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
                                whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
                                viewport={{ once: true, margin: "-50px" }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: index * 0.05 }}
                                className="break-inside-avoid relative group overflow-hidden border border-white/5 bg-secondary/5 rounded-sm"
                            >
                                <div className="absolute top-4 left-4 z-40">
                                    <span className="archive-number">{item.refId}</span>
                                </div>

                                <div className={`relative overflow-hidden ${item.aspectRatio === 'portrait' ? 'aspect-[3/4]' :
                                    item.aspectRatio === 'landscape' ? 'aspect-[4/3]' :
                                        'aspect-square'
                                    }`}>
                                    <ParallaxImage
                                        src={item.image}
                                        alt={item.title}
                                        speed={0.04}
                                        className="h-full w-full grayscale-[0.3] group-hover:grayscale-0 transition-[filter] duration-1000"
                                        showWatermark={item.size === 'large'}
                                    />

                                    {/* Shutter Blur Overlay - Reduced backdrop tax */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                </div>

                                {/* Mastery Specs Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-between p-10 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 pointer-events-none">
                                    <div className="flex justify-end gap-2">
                                        {item.specs?.map(spec => (
                                            <span key={spec} className="px-2 py-1 bg-black/60 border border-accent/20 text-accent font-technical">
                                                {spec}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="space-y-4">
                                        <div className="space-y-1">
                                            <span className="text-accent text-[8px] font-bold tracking-[0.4em] uppercase">{item.category}</span>
                                            <h3 className="text-3xl font-serif font-medium text-white tracking-tight leading-none">{item.title}</h3>
                                        </div>
                                        <p className="text-white/60 text-xs leading-relaxed max-w-xs font-light">
                                            {item.description}
                                        </p>
                                        <div className="pt-4 pointer-events-auto">
                                            <button className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent border-b border-accent/30 pb-1 hover:border-accent transition-all">
                                                Get in Touch
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Scarcity CTA Bottom */}
                <Reveal delay={0.5}>
                    <div className="mt-32 p-12 lg:p-24 bg-secondary/30 border-y border-border/50 text-center relative overflow-hidden group">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-accent/0 via-accent/20 to-accent/0" />

                        <div className="relative z-10 space-y-8">
                            <h3 className="text-4xl md:text-6xl font-serif font-light text-foreground max-w-4xl mx-auto leading-[1.1]">
                                We serve a limited number of clients to ensure <span className="text-accent italic">exceptional quality</span>. Join our waitlist for the next availability.
                            </h3>

                            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                                <button className="px-12 py-5 bg-foreground text-background text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-accent transition-colors duration-500">
                                    Join Our Waitlist
                                </button>
                                <button className="px-12 py-5 border border-border text-foreground text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-secondary/50 transition-all">
                                    View Service Menu
                                </button>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

