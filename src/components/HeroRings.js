import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const HeroRings = () => {
  const groupRef = useRef();
  const clock = new THREE.Clock();

  useFrame(() => {
    const time = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.z = time * 0.1;
      groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;
      groupRef.current.rotation.y = Math.cos(time * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(3)].map((_, i) => (
        <mesh 
          key={i} 
          rotation-x={Math.PI / 2} 
          position-y={i * 0.3 - 0.3}
        >
          <torusGeometry args={[2 + i * 0.3, 0.02, 128, 128]} />
          <meshPhongMaterial
            color={i === 1 ? '#FF49DB' : '#64FFDA'}
            emissive={i === 1 ? '#FF49DB' : '#64FFDA'}
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
            shininess={100}
          />
        </mesh>
      ))}
    </group>
  );
};