import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Sparkles, Float, PerspectiveCamera } from '@react-three/drei';
import { HeroTorus } from './HeroTorus';
import { HeroParticles } from './HeroParticles';
import { HeroRings } from './HeroRings';
import { HeroGeometry } from './HeroGeometry';

export const HeroScene = () => {
  const groupRef = useRef();

  return (
    <Canvas dpr={[1, 2]} style={{ touchAction: 'none' }}>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={75} />
      <color attach="background" args={['#0A192F']} />
      <fog attach="fog" args={['#0A192F', 5, 15]} />
      
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#64FFDA" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#FF49DB" />
      
      <Float
        speed={1.5}
        rotationIntensity={0.6}
        floatIntensity={0.8}
      >
        <group ref={groupRef}>
          <HeroTorus />
          <HeroRings />
          <HeroGeometry />
          <HeroParticles count={2000} />
        </group>
      </Float>

      <Stars radius={50} depth={50} count={5000} factor={4} fade speed={2} />
      <Sparkles count={100} scale={10} size={2} speed={0.4} />

      <OrbitControls 
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.8}
        panSpeed={0.8}
        rotateSpeed={0.8}
        minDistance={4}
        maxDistance={16}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
        dampingFactor={0.05}
        enableDamping={true}
      />
    </Canvas>
  );
};