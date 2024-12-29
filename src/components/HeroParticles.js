import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const HeroParticles = ({ count = 1000 }) => {
  const mesh = useRef();
  const light = useRef();
  const clock = new THREE.Clock();

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    const radius = 4;
    
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      
      temp[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
      temp[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      temp[i * 3 + 2] = radius * Math.cos(theta);
    }
    return temp;
  }, [count]);

  useFrame(() => {
    const time = clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = time * 0.1;
      mesh.current.rotation.y = time * 0.15;
      mesh.current.position.z = Math.sin(time * 0.2) * 0.3;
    }
    if (light.current) {
      light.current.position.x = Math.sin(time) * 3;
      light.current.position.y = Math.cos(time) * 3;
      light.current.intensity = 2 + Math.sin(time) * 0.5;
    }
  });

  return (
    <group>
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="#64FFDA"
          sizeAttenuation
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <pointLight ref={light} distance={6} intensity={2} color="#FF49DB" />
    </group>
  );
};