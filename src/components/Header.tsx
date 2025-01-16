import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Torus } from './Torus';
import { Menu, Github, Twitter, Linkedin } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative h-screen flex flex-col items-center justify-center">
      <nav className="absolute top-0 w-full px-8 py-6 flex justify-between items-center z-10">
        <div className="text-2xl font-serif">SS</div>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="nav-link">About</a>
          <a href="#work" className="nav-link">Work</a>
          <a href="#shop" className="nav-link">Shop</a>
          <a href="#contacts" className="nav-link">Contacts</a>
        </div>
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      <div className="w-full h-96">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Torus />
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>

      <div className="text-center mt-8 space-y-4">
        <h1 className="text-6xl font-serif font-bold glow text-neon-cyan">
          Simon Sparks
        </h1>
        <p className="text-xl text-gray-400">Generative Design</p>
      </div>

      <div className="absolute bottom-8 flex space-x-6">
        <a href="#" className="social-icon"><Github className="w-6 h-6" /></a>
        <a href="#" className="social-icon"><Twitter className="w-6 h-6" /></a>
        <a href="#" className="social-icon"><Linkedin className="w-6 h-6" /></a>
      </div>
    </header>
  );
};

export default Header;