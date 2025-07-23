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
    <div className="flex flex-row gap-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <div className="text-4xl font-bold text-zinc-200 mb-2">{item.value}</div>
          <div className="text-sm text-zinc-400 uppercase tracking-wider">
            {item.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectStats;