import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, ExternalLink, Link } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import cover1 from '../../assets/cover/cover01.png';
import cover2 from '../../assets/cover/cover02.png';
import cover3 from '../../assets/cover04.png';
import cover4 from '../../assets/cover/cover04.png';
import cover5 from '../../assets/cover/cover05.png';
import cover6 from '../../assets/cover/cover07.png';
import { projects } from '../ui/ProjectData';
Link

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  challenge: string;
  solution: string;
  link: string;
}

// const projects: Project[] = [
//   {
//     id: 'lhc',
//     title: 'Luxury Hotel Concierge',
//     description: 'Premium travel booking with personalized services and luxury stays.',
//     image: cover1,
//     category: 'Bookings',
//     challenge: 'Creating a seamless premium booking experience.',
//     solution: 'Clean UI with luxury-focused navigation and service access.',
//     link: 'https://theluxuryhotelconcierge.com/',
//   },
//   {
//     id: 'hmf',
//     title: 'Hedgemyfunds',
//     description: 'Mobile banking with investment insights and real-time tracking.',
//     image: cover4,
//     category: 'FinTech',
//     challenge: 'Building trust in financial services.',
//     solution: 'Secure UI with alerts and easy investment tools.',
//     link: 'https://www.hedgemyfunds.com/',
//   },
//   {
//     id: 'whatsbuy',
//     title: 'Whatsbuy',
//     description: 'Local store discovery and WhatsApp ordering platform.',
//     image: cover6,
//     category: 'SaaS',
//     challenge: 'Bringing offline shops online.',
//     solution: 'Quick catalogs with direct WhatsApp ordering.',
//     link: 'https://whatsbuy.vercel.app/',
//   },
//   {
//     id: 'flashy',
//     title: 'FlashyPanels',
//     description: 'Rental SMM panel service for digital marketing.',
//     image: cover3,
//     category: 'SaaS',
//     challenge: 'Providing fast and simple SMM tools.',
//     solution: 'Modern UI with automation and order tracking.',
//     link: 'https://flashypanels.com/',
//   },
//   {
//     id: 'aideoa',
//     title: 'AIDEOA',
//     description: 'Hub for mining professionals to connect and grow.',
//     image: cover5,
//     category: 'Org',
//     challenge: 'Uniting mining professionals digitally.',
//     solution: 'Community portal with jobs and forums.',
//     link: 'https://www.aideoa.org.in/signup',
//   }
// ];

type Category = 'All' | 'SaaS' | 'FinTech' | 'Bookings' | 'Org';

const categories: Category[] = ['All', 'SaaS', 'FinTech', 'Bookings', 'Org'];

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [cursor, setCursor] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Smooth motion values for the label
  const x = useMotionValue(cursor.x);
  const y = useMotionValue(cursor.y);
  const springX = useSpring(x, { stiffness: 400, damping: 40 });
  const springY = useSpring(y, { stiffness: 400, damping: 40 });

  useEffect(() => {
    x.set(cursor.x + 20);
    y.set(cursor.y + 20);
  }, [cursor, x, y]);

  const handleMouseMove = (e: React.MouseEvent, id: string) => {
    setCursor({ x: e.clientX, y: e.clientY });
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
    <section id="projects" className="py-20 min-h-screen bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="text-gray-500 text-lg mb-2">( Projects )</div>

          <h1 className="text-[45px] text-zinc-500 opacity-85 leading-[90px] mb-6 w-full font-medium text-center">
            Some of my
            <span className="shine-on-hover ml-4 bg-zinc-950 text-zinc-200 border text-[45px] border-surface px-5 py-3 mr-3 font-serif font-light italic rounded-full">
              works
            </span>

          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.slice(0, 4).map((project) => (
            <div
              key={project.id}
              className={`relative rounded-3xl shadow-lg overflow-hidden flex flex-col min-h-[400px] h-[400px] cursor-pointer${hoveredId === project.id ? ' cursor-none' : ''}`}
              onMouseMove={(e) => handleMouseMove(e, project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </div>
          ))}
          {/* Hover label with smooth animation */}
          <AnimatePresence>
            {hoveredId && (
              <motion.div
                className="fixed z-50 flex items-center gap-2 pointer-events-none pl-2 pr-4 py-2 bg-zinc-900 border border-zinc-700 text-white rounded-full text-sm font-medium shadow-lg transition-opacity duration-150 opacity-90"
                style={{
                  left: 0,
                  top: 0,
                  x: springX,
                  y: springY,
                  whiteSpace: 'nowrap',
                  translateX: '-50%',
                  translateY: '-50%',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <div className='text-2xl bg-zinc-700 rounded-full px-4 py-2'>↗</div>
                open {projects.find((p) => p.id === hoveredId)?.title}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
      <div className='flex mt-8 justify-center'>
        <Button
          href="/mywork"
          variant="outline"
          className="group px-8 py-3 rounded-full relative overflow-hidden border border-surface bg-gradient-to-b from-surface to-background text-white shadow-inner shadow-background border-t-[2px] border-t-white/20 hover:brightness-110 transition-all duration-300 hover:shadow-md"
        >
          see all
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
};

export default Projects;