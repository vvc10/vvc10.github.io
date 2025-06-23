import { motion } from 'framer-motion';

interface Technology {
  name: string;
  icon: string;
}

interface TechStackProps {
  technologies: Technology[];
}

const TechStack = ({ technologies }: TechStackProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          className="px-3 py-2 bg-white/5 rounded-lg flex items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="w-5 h-5 mr-2 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-background">
              {tech.icon.charAt(0)}
            </span>
          </div>
          <span className="text-sm text-text-secondary">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStack;