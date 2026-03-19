'use client';

import React from 'react';

export const VisualAura: React.FC = () => {
    return (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            <div
                className="aura-blob w-[500px] h-[500px] top-[-100px] left-[-100px]"
                style={{
                    animationDelay: '0s',
                    background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0) 70%)'
                }}
            />
            <div
                className="aura-blob w-[600px] h-[600px] bottom-[-200px] right-[-100px]"
                style={{
                    animationDelay: '5s',
                    background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, rgba(212,175,55,0) 70%)'
                }}
            />
            <div
                className="aura-blob w-[400px] h-[400px] top-[40%] right-[-100px]"
                style={{
                    animationDelay: '10s',
                    background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0) 70%)'
                }}
            />
        </div>
    );
};
