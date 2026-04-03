'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Scroll to top on refresh
        window.scrollTo(0, 0);

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Sync with other scroll-based interactions (optional but recommended)
        const handleScroll = () => {
            // For any manual triggers or scroll-linked animations
        };

        lenis.on('scroll', handleScroll);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};
