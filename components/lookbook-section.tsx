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
    size: 'small' | 'medium' | 'large';
    aspectRatio?: 'portrait' | 'landscape' | 'square';
}

const LOOKBOOK_ITEMS: LookbookItem[] = [
    {
        id: 1,
        title: 'Nordic Ice Fusion',
        category: 'Master Color',
        image: '/lookbook-real-1.jpg',
        description: 'Precision platinum highlights with a cold-toned finish and seamless blending.',
        size: 'large',
        aspectRatio: 'portrait'
    },
    {
        id: 6,
        title: 'Golden Hour Silk',
        category: 'Master Color',
        image: '/lookbook-real-4.jpg',
        description: 'Warm, luminous honey tones with a mirror-like finish and precision edge.',
        size: 'medium',
        aspectRatio: 'landscape'
    },
    {
        id: 2,
        title: 'Ivory Dimension',
        category: 'Master Color',
        image: '/lookbook-real-2.jpg',
        description: 'High-impact blonde achieved through meticulous micro-foiling techniques.',
        size: 'small',
        aspectRatio: 'square'
    },
    {
        id: 3,
        title: 'Geometric Precision Bob',
        category: 'Precision Cuts',
        image: '/lookbook-precision.png',
        description: 'Sharp lines and architectural silhouette for a timeless look.',
        size: 'small',
        aspectRatio: 'portrait'
    },
    {
        id: 7,
        title: 'Ash Lived-In Luxury',
        category: 'Master Color',
        image: '/lookbook-real-5.jpg',
        description: 'Sophisticated ash-blonde transformation with natural depth and movement.',
        size: 'small',
        aspectRatio: 'square'
    },
    {
        id: 4,
        title: 'Brunette Luminescence',
        category: 'Master Color',
        image: '/lookbook-real-3.jpg',
        description: 'Hand-painted dimensional highlights on a deep, rich chocolate base.',
        size: 'medium',
        aspectRatio: 'landscape'
    },
    {
        id: 8,
        title: 'Creamy HD Balayage',
        category: 'Master Color',
        image: '/lookbook-real-6.jpg',
        description: 'High-definition color saturation with a soft, creamy velvet texture.',
        size: 'small',
        aspectRatio: 'square'
    },
    {
        id: 5,
        title: 'Molecular Hair Repair',
        category: 'Restorative Care',
        image: '/lookbook-restoration.png',
        description: 'Transformation of stressed cuticles into vibrant, healthy silk.',
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
                            <p className="text-sm font-bold tracking-[0.3em] uppercase text-accent">Master Portfolio</p>
                            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-serif font-medium text-foreground tracking-tight leading-[0.9]">
                                Private <br /><span className="text-accent italic">Artistry</span>
                            </h2>
                            <p className="text-xl text-muted-foreground font-light leading-relaxed">
                                A curated selection of our highest-level work. Every style is a testament to our dedication to precision and hair health.
                            </p>
                        </div>

                        {/* Category Tabs */}
                        <div className="flex flex-wrap gap-3">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-8 py-3 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-500 ${activeCategory === cat
                                        ? 'bg-accent text-accent-foreground shadow-[0_10px_30px_-10px_rgba(212,175,55,0.5)] scale-105'
                                        : 'bg-secondary/50 text-muted-foreground hover:bg-accent/10 hover:text-accent backdrop-blur-sm'
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
                    layout
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[minmax(200px,auto)] grid-flow-dense"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                                className={`relative group overflow-hidden glass-gold rounded-3xl ${item.size === 'large' ? 'md:col-span-8 md:row-span-4' :
                                    item.size === 'medium' ? 'md:col-span-6 md:row-span-3' :
                                        'md:col-span-4 md:row-span-3'
                                    }`}
                            >
                                <ParallaxImage
                                    src={item.image}
                                    alt={item.title}
                                    speed={0.05 + (index % 3) * 0.02}
                                    className="h-full w-full"
                                    showWatermark={item.size === 'large'}
                                />

                                {/* Overlay content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out space-y-3">
                                        <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">{item.category}</span>
                                        <h3 className="text-3xl font-serif font-medium text-white tracking-tight">{item.title}</h3>
                                        <p className="text-white/70 text-base leading-relaxed max-w-sm font-light">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Closing Quote */}
                <Reveal delay={0.5}>
                    <div className="mt-32 text-center">
                        <p className="text-3xl md:text-5xl font-serif font-light italic text-foreground max-w-4xl mx-auto leading-[1.2]">
                            "Hair is the ultimate accessory. We don't just change your look; we enhance <span className="text-accent underline decoration-1 underline-offset-8">your personal architecture</span>."
                        </p>
                        <div className="mt-12 h-px w-32 bg-accent/30 mx-auto" />
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

