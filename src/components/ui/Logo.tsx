import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      className="flex items-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <span className="text-xl font-display font-bold tracking-tight">
        {/* <span className="text-primary">Pank</span> */}
        <span className="text-zinc-300">Pankfolio</span>
      </span>
    </motion.div>
  );
};

export default Logo;