import { motion } from 'framer-motion';

export const NavigationLogo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-2xl font-serif text-neon-cyan glow"
    >
      SS
    </motion.div>
  );
};