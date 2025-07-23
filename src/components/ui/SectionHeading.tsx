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
    > <div className="text-center mb-10">
    <div className="text-gray-500 text-lg mb-2">( contact )</div>

    <h1 className="text-[45px] text-zinc-500 opacity-85 leading-[90px] mb-6 w-full font-medium text-center">
      Something to 
      <span className="shine-on-hover ml-4 bg-zinc-950 text-zinc-200 border text-[45px] border-surface px-5 py-3 mr-3 font-serif font-light italic rounded-full">
      say?
      </span>

    </h1>
  </div>
    </motion.div>
  );
};

export default SectionHeading;