import { motion } from 'framer-motion';

export const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center space-y-6"
      >
        <h1 className="text-7xl md:text-[42px] font-serif font-bold text-white">
          <span className="block text-white">Pankaj Yadav</span>
          {/* <span className="block">Yadav</span> */}
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-xl md:text-2xl text-gray-400 tracking-wide"
        >
          Crafting Digital Dreams Through Code
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-sm text-gray-400 mt-8"
        >
          Click and drag to explore the 3D space
        </motion.div>
      </motion.div>
    </motion.div>
  );
};