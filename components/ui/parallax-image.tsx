'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxImageProps {
    src: string;
    alt: string;
    fill?: boolean;
    className?: string;
    speed?: number;
    showGlow?: boolean;
    showWatermark?: boolean;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
    src,
    alt,
    fill = true,
    className = "",
    speed = 0.1,
    showGlow = true,
    showWatermark = false,
}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}%`, `${speed * 100}%`]);

    return (
        <div ref={ref} className={`relative overflow-hidden group/img ${className}`}>
            <motion.div
                style={{ y, height: '110%', top: '-5%', position: 'absolute', width: '100%', willChange: 'transform' }}
                className={showGlow ? "transition-shadow duration-1000 group-hover/img:shadow-[0_0_100px_-20px_rgba(212,175,55,0.3)]" : ""}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill={fill}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={src.includes('hero')}
                />
            </motion.div>

            {showWatermark && (
                <div className="absolute bottom-6 right-6 opacity-20 pointer-events-none select-none">
                    <span className="font-serif text-lg font-light tracking-[0.5em] text-white uppercase">Adorabella</span>
                </div>
            )}

            {showGlow && (
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[inherit] transition-opacity duration-500 opacity-50 group-hover/img:opacity-100" />
            )}
        </div>
    );
};
