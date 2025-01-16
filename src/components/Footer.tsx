import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-800 py-12">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-serif mb-6 md:mb-0">SS</div>
          
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a href="#about" className="nav-link">About</a>
            <a href="#work" className="nav-link">Work</a>
            <a href="#shop" className="nav-link">Shop</a>
            <a href="#contacts" className="nav-link">Contacts</a>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="social-icon"><Github className="w-5 h-5" /></a>
            <a href="#" className="social-icon"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="social-icon"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Simon Sparks. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;