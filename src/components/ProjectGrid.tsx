import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: '01',
    title: 'Studio 74',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '02',
    title: 'Genesis',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '03',
    title: 'Limra Vol. 1',
    image: 'https://images.unsplash.com/photo-1636955840493-f43a02bfa064?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '04',
    title: 'Core 3.0',
    image: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?auto=format&fit=crop&q=80&w=800',
  },
];

const ProjectGrid = () => {
  return (
    <section className="container mx-auto px-8 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="project-card-overlay p-6">
              <h3 className="text-xl font-serif">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.id}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;