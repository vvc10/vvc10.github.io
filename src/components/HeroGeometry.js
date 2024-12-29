import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const HeroGeometry = () => {
  const meshRef = useRef();
  const clock = new THREE.Clock();

  useFrame(() => {
    const time = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
      meshRef.current.rotation.y = Math.cos(time * 0.2) * 0.2;
      meshRef.current.position.z = Math.sin(time * 0.4) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={0.8}>
      <icosahedronGeometry args={[1, 4]} />
      <MeshDistortMaterial
        color="#FF49DB"
        roughness={0.1}
        metalness={1}
        distort={0.5}
        speed={3}
        emissive="#FF49DB"
        emissiveIntensity={0.4}
      />
    </mesh>
  );
};