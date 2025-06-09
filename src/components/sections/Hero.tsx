import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import ParticleBackground from '../ui/ParticleBackground';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center relative overflow-hidden pt-24">
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 -right-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float"></div>

      <div className="relative z-10 px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex flex-col items-center justify-center text-center gap-3'
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-[#9872ff] mb-4">Hey! My name is Pankaj!</p>
            <h1 className="text-[65px] opacity-85 leading-[1.2] mb-6 w-full font-medium text-center">
              I Craft <span className="shine-on-hover bg-[#100c1a] text-[#d3c3ff] border text-[60px] border-gray-800 px-4 py-1 mr-3 font-serif font-light italic rounded-full">Digital  </span>
              Experience that Transcend  <span className="shine-on-hover border bg-[#100c1a] text-[#d3c3ff]  text-[60px] border-gray-800 px-4 py-1 mr-3 font-serif font-light italic rounded-full">Boundaries</span>
            </h1>

          </motion.div>

          <motion.p
            className="text-lg px-8 md:text-xl mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            We're a premium design studio specializing in creating immersive digital products and experiences that push the boundaries of what's possible on the web.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button
              href="#projects"
              className="px-8 py-3 rounded-full relative overflow-hidden bg-gradient-to-br from-[#7c4cff] to-[#9872ff] text-white shadow-md border-t-[2px] border-t-white/30 hover:brightness-110 transition-all duration-300 hover:shadow-lg"
            >
             View my work
            </Button>

            <Button
              href="#services"
              variant="outline"
              className="group px-8 py-3 rounded-full relative overflow-hidden border border-gray-800 bg-gradient-to-b from-[#1f1f1f] to-[#111] text-white shadow-inner shadow-gray-900 border-t-[2px] border-t-white/20 hover:brightness-110 transition-all duration-300 hover:shadow-md"
            >
              What i do
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>

          </motion.div>
        </motion.div>
        {/* 
        <motion.div
          className="absolute bottom-2 left-1/2 "
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatType: 'reverse' }}
        >
          <a
            href="#services"
            className="text-white/50 hover:text-white flex flex-col items-center transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <span className="w-0.5 h-10 bg-gradient-to-b from-white/50 to-transparent"></span>
          </a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
