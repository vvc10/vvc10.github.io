import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-zinc-950 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <h2 className="text-2xl font-display font-bold tracking-tight">
             
            <span className="text-zinc-500">Pankfolio</span>
          </h2>
          {/* <p className="mt-2 text-text-secondary">Crafting Digital Experiences</p> */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;