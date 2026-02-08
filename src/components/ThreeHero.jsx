import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Stars, OrbitControls, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function SpinTorus() {
  const meshRef = useRef();
  const { pointer } = useThree();
  const [hovered, setHovered] = useState(false);
  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * (hovered ? 0.6 : 0.25);
    meshRef.current.rotation.y += delta * (hovered ? 0.7 : 0.35);
    meshRef.current.rotation.y += pointer.x * 0.02;
    meshRef.current.rotation.x += -pointer.y * 0.02;
  });
  return (
    <Float speed={1.5} rotationIntensity={0.35} floatIntensity={0.7}>
      <mesh
        ref={meshRef}
        castShadow
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.08 : 1}
      >
        <torusKnotGeometry args={[1.4, 0.4, 256, 64]} />
        <meshStandardMaterial
          color={hovered ? '#7dd3fc' : '#60a5fa'}
          metalness={0.6}
          roughness={0.25}
          emissive={hovered ? '#1e3a8a' : '#1e40af'}
          emissiveIntensity={hovered ? 0.45 : 0.3}
        />
      </mesh>
    </Float>
  );
}

export default function ThreeHero() {
  const enabled =
    typeof window !== 'undefined'
      ? !window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : true;
  if (!enabled) return null;
  return (
    <div className="absolute inset-0 -z-0 pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#0f172a']} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 3]} intensity={1.2} />
        <SpinTorus />
        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.4}
          scale={8}
          blur={2}
          far={4}
        />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
        <Stars radius={50} depth={20} count={800} factor={4} saturation={0} fade speed={0.6} />
      </Canvas>
    </div>
  );
}
