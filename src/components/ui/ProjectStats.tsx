import { motion } from 'framer-motion';

interface StatItem {
  value: string;
  label: string;
}

interface ProjectStatsProps {
  items: StatItem[];
}

const ProjectStats = ({ items }: ProjectStatsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <div className="text-4xl font-bold text-primary mb-2">{item.value}</div>
          <div className="text-sm text-text-secondary uppercase tracking-wider">
            {item.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectStats;