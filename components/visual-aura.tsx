'use client';

import React from 'react';

export const VisualAura: React.FC = () => {
    return (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            <div
                className="aura-blob w-[500px] h-[500px] bg-accent/20 top-[-100px] left-[-100px]"
                style={{ animationDelay: '0s' }}
            />
            <div
                className="aura-blob w-[600px] h-[600px] bg-accent/10 bottom-[-200px] right-[-100px]"
                style={{ animationDelay: '5s' }}
            />
            <div
                className="aura-blob w-[400px] h-[400px] bg-accent/15 top-[40%] right-[-100px]"
                style={{ animationDelay: '10s' }}
            />
        </div>
    );
};
