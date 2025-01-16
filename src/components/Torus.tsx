import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export const Torus = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[2, 0.5, 32, 100]} />
      <meshStandardMaterial
        color="#64FFDA"
        metalness={0.7}
        roughness={0.2}
        emissive="#64FFDA"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};