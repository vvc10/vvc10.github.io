import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const HeroTorus = () => {
  const meshRef = useRef();
  const clock = new THREE.Clock();

  useFrame(() => {
    const time = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
      meshRef.current.scale.x = 1 + Math.sin(time * 0.5) * 0.1;
      meshRef.current.scale.y = 1 + Math.cos(time * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <torusKnotGeometry args={[1, 0.3, 128, 32]} />
      <MeshDistortMaterial
        color="#64FFDA"
        roughness={0.1}
        metalness={1}
        distort={0.4}
        speed={2}
        emissive="#64FFDA"
        emissiveIntensity={0.5}
        wireframe={true}
      />
    </mesh>
  );
};