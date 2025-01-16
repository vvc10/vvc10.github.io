import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavigationLinks } from './NavigationLinks';
import { NavigationLogo } from './NavigationLogo';
import { MobileMenu } from './MobileMenu';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full px-8 py-6 z-50 bg-gradient-to-b from-navy-900/90 to-transparent backdrop-blur-sm"
    >
      <div className="container mx-auto flex justify-between items-center">
        <NavigationLogo />
        
        <div className="hidden md:block">
          <NavigationLinks />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neon-cyan hover:text-neon-magenta transition-colors"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </motion.nav>
  );
};