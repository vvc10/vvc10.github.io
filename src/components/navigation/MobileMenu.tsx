import { motion } from 'framer-motion';

export const MobileMenu = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-navy-900/95 backdrop-blur-lg z-40 md:hidden"
    >
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <a href="#about" className="nav-link text-2xl" onClick={onClose}>About</a>
        <a href="#work" className="nav-link text-2xl" onClick={onClose}>Work</a>
        <a href="#shop" className="nav-link text-2xl" onClick={onClose}>Shop</a>
        <a href="#contacts" className="nav-link text-2xl" onClick={onClose}>Contacts</a>
      </div>
    </motion.div>
  );
};