import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Art Unbound Odyssey',
    description: 'Personal Project',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'TNQ Project',
    description: 'Client Work',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Dreams 2',
    description: 'Exhibition',
    image: 'https://images.unsplash.com/photo-1636955840493-f43a02bfa064?auto=format&fit=crop&q=80&w=800',
  },
];

const ProjectScroll = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="flex space-x-8 overflow-x-auto pb-8 scrollbar-hide">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex-none w-80 project-card"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectScroll;