'use client';

import React from 'react';

export const VisualAura: React.FC = () => {
    return (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            <div
                className="aura-blob w-[800px] h-[800px] top-[-200px] left-[-200px]"
                style={{
                    animationDelay: '0s',
                    background: 'radial-gradient(circle, oklch(0.9 0.1 70 / 0.15) 0%, oklch(0.9 0.1 70 / 0) 70%)'
                }}
            />
            <div
                className="aura-blob w-[1000px] h-[1000px] bottom-[-300px] right-[-200px]"
                style={{
                    animationDelay: '5s',
                    background: 'radial-gradient(circle, oklch(0.85 0.15 75 / 0.1) 0%, oklch(0.85 0.15 75 / 0) 70%)'
                }}
            />
            <div
                className="aura-blob w-[600px] h-[600px] top-[20%] right-[-100px]"
                style={{
                    animationDelay: '10s',
                    background: 'radial-gradient(circle, oklch(0.95 0.05 80 / 0.12) 0%, oklch(0.95 0.05 80 / 0) 70%)'
                }}
            />
        </div>
    );
};
