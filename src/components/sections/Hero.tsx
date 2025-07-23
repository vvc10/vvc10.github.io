import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import ParticleBackground from '../ui/ParticleBackground';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center relative overflow-hidden pt-24 bg-zinc-950">
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 -right-16 w-64 h-64 bg-zinc-200/10 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-zinc-200/10 rounded-full blur-3xl animate-float"></div>

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
            <p className="text-zinc-200 mb-4 font-extralight">( Hey! My name is Pankaj. )</p>
            <h1 className="text-[65px] text-zinc-500 opacity-85 leading-[90px] mb-6 w-full font-medium text-center">
              I Craft 
              <span className="shine-on-hover ml-4 bg-zinc-950 text-zinc-200 border text-[55px] border-surface px-10 py-3 mr-3 font-serif font-light italic rounded-full">Digital  </span>
              Experience that Transcend  
              <span className="shine-on-hover ml-4 bg-zinc-950 text-zinc-200 border text-[55px] border-surface px-10 py-3 mr-3 font-serif font-light italic rounded-full">Boundaries</span>
            </h1>

          </motion.div>

          <motion.p
            className="text-lg text-zinc-500 px-8 md:text-xl mb-8 text-center"
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
              href="#contact"
              className="px-8 py-3 rounded-full relative overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-700 text-zinc-900 shadow-md border-t-[2px] border-t-zinc-500 hover:brightness-110 transition-all duration-300 hover:shadow-lg"
            >
             Let's talk
            </Button>

            <Button
              href="#services"
              variant="outline"
              className="group px-8 py-3 rounded-full relative overflow-hidden border border-surface bg-gradient-to-b from-surface to-background text-white shadow-inner shadow-background border-t-[2px] border-t-white/20 hover:brightness-110 transition-all duration-300 hover:shadow-md"
            >
              view my work
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
