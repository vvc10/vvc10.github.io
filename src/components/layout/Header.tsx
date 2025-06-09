import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';

const navItems = [
  // { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  // { name: 'Team', href: '#team' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const headerVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -20, opacity: 0 }
  };

  return (
    <motion.header 
      className={`fixed justify-between w-full pt-2 z-50`}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      transition={{ duration: 0.5 }}
    >
      <div className={`flex w-[50%] items-center justify-between  backdrop-blur-sm gap-6 px-3 py-4 mx-auto ${
        isScrolled ? 'glassmorphism' : 'glassmorphism'
      }`}>
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-text-secondary hover:text-white font-medium text-sm transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary text-sm px-4 py-2 bg-gradient-to-br from-[#7c4cff] to-[#9872ff] text-white shadow-md border-t-[2px] border-t-white/30 hover:brightness-110 transition-all ">
            Connect
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2"
          >
            <nav className="flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-lg py-4 px-6 mt-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="py-2 text-sm text-text-secondary hover:text-white font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="btn btn-primary text-sm mt-3 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get in Touch
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;