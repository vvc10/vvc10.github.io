import React from 'react';
import { motion } from 'framer-motion';

const FeaturedProject = () => {
  return (
    <section className="container mx-auto px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[600px] rounded-lg overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1635322966219-b75ed372eb01?auto=format&fit=crop&q=80&w=1920"
          alt="Boundless Art"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
          <div className="absolute bottom-0 p-12 max-w-2xl">
            <h2 className="text-4xl font-serif mb-4">Boundless Art: 3D Discovery</h2>
            <p className="text-gray-300 mb-6">
              A journey through digital landscapes where imagination meets technology.
              Experience the fusion of art and code in this groundbreaking exhibition.
            </p>
            <button className="neon-button">Read More</button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProject;