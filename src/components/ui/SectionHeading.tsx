import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: SectionHeadingProps) => {
  return (
    <motion.div 
      className={`mb-16 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="gradient-text font-bold mb-4">{title}</h2>
      <p className="text-lg md:text-xl">{subtitle}</p>
    </motion.div>
  );
};

export default SectionHeading;