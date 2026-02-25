'use client';

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';
import { Environment, Html } from '@react-three/drei';

// Suppress THREE.Clock deprecation warning
if (typeof window !== 'undefined') {
  const originalWarn = console.warn;
  console.warn = function(...args: any[]) {
    if (args[0]?.includes?.('THREE.Clock')) {
      return;
    }
    originalWarn.apply(console, args);
  };
}

// 3D Chair Component
function RotatingChair() {
  const groupRef = useRef<Group>(null);

  useFrame(({ delta }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005 * (delta || 0.016);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Chair Base - Gold pedestal */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.6, 0.8, 0.3, 32]} />
        <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Chair Seat - Black leather */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.15, 32]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Backrest - Curved black */}
      <mesh position={[0, 1.2, -0.1]}>
        <boxGeometry args={[1, 1.2, 0.15]} />
        <meshStandardMaterial color="#0f0f0f" metalness={0.2} roughness={0.5} />
      </mesh>

      {/* Armrests - Gold accents */}
      <mesh position={[-0.6, 0.8, 0]}>
        <boxGeometry args={[0.15, 0.4, 0.4]} />
        <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.6, 0.8, 0]}>
        <boxGeometry args={[0.15, 0.4, 0.4]} />
        <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Hydraulic Cylinder - Silver */}
      <mesh position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.5, 16]} />
        <meshStandardMaterial color="#a8a8a8" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Wheels - Black */}
      {[
        [-0.4, -0.15, -0.4],
        [0.4, -0.15, -0.4],
        [-0.4, -0.15, 0.4],
        [0.4, -0.15, 0.4],
      ].map((pos, idx) => (
        <mesh key={idx} position={pos as [number, number, number]}>
          <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} rotation={[Math.PI / 2, 0, 0]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.4} roughness={0.6} />
        </mesh>
      ))}

      {/* Headrest - Black padded */}
      <mesh position={[0, 1.8, -0.15]}>
        <cylinderGeometry args={[0.35, 0.35, 0.2, 32]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.1} roughness={0.6} />
      </mesh>
    </group>
  );
}

// Glow effect for floating particles
function FloatingParticles() {
  const particlesRef = useRef<Group>(null);

  useFrame(({ delta }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.0001 * (delta || 0.016);
      particlesRef.current.rotation.y += 0.0002 * (delta || 0.016);
    }
  });

  return (
    <group ref={particlesRef}>
      {[...Array(20)].map((_, i) => {
        const x = (Math.random() - 0.5) * 6;
        const y = (Math.random() - 0.5) * 6;
        const z = (Math.random() - 0.5) * 6;
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial
              color="#d4af37"
              emissive="#d4af37"
              emissiveIntensity={0.5}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export function Chair3DScene() {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas
        camera={{ position: [0, 1, 3], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
        dpr={typeof window !== 'undefined' ? window.devicePixelRatio : 1}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} color="#ffffff" />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1}
          color="#ffffff"
          castShadow
        />
        <directionalLight
          position={[-5, 10, -5]}
          intensity={0.5}
          color="#d4af37"
        />
        <pointLight position={[0, 2, 2]} intensity={0.8} color="#d4af37" />

        {/* Scene Content */}
        <RotatingChair />
        <FloatingParticles />

        {/* Environment - Studio lighting */}
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
