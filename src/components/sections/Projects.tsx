import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import cover1 from '../../assets/cover/cover01.png';
import cover2 from '../../assets/cover/cover02.png';
import cover3 from '../../assets/cover04.png';
import cover4 from '../../assets/cover/cover04.png';
import cover5 from '../../assets/cover/cover05.png';
import cover6 from '../../assets/cover/cover07.png';

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

const projects: Project[] = [
  {
    id: 'lhc',
    title: 'Luxury Hotel Concierge',
    description: 'Premium travel booking with personalized services and luxury stays.',
    image: cover1,
    category: 'Bookings',
    challenge: 'Creating a seamless premium booking experience.',
    solution: 'Clean UI with luxury-focused navigation and service access.',
    link: 'https://theluxuryhotelconcierge.com/',
  },
  {
    id: 'hmf',
    title: 'Hedgemyfunds',
    description: 'Mobile banking with investment insights and real-time tracking.',
    image: cover4,
    category: 'FinTech',
    challenge: 'Building trust in financial services.',
    solution: 'Secure UI with alerts and easy investment tools.',
    link: 'https://www.hedgemyfunds.com/',
  },
  {
    id: 'whatsbuy',
    title: 'Whatsbuy',
    description: 'Local store discovery and WhatsApp ordering platform.',
    image: cover6,
    category: 'SaaS',
    challenge: 'Bringing offline shops online.',
    solution: 'Quick catalogs with direct WhatsApp ordering.',
    link: 'https://whatsbuy.in/',
  },
  {
    id: 'flashy',
    title: 'FlashyPanels',
    description: 'Rental SMM panel service for digital marketing.',
    image: cover3,
    category: 'SaaS',
    challenge: 'Providing fast and simple SMM tools.',
    solution: 'Modern UI with automation and order tracking.',
    link: 'https://flashypanels.com/',
  },
  {
    id: 'aideoa',
    title: 'AIDEOA',
    description: 'Hub for mining professionals to connect and grow.',
    image: cover5,
    category: 'Org',
    challenge: 'Uniting mining professionals digitally.',
    solution: 'Community portal with jobs and forums.',
    link: 'https://aideoa.org/',
  }
];

type Category = 'All' | 'SaaS' | 'FinTech' | 'Bookings' | 'Org';

const categories: Category[] = ['All', 'SaaS', 'FinTech', 'Bookings', 'Org'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Decorative backgrounds */}
      <div className="absolute top-40 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="grid-container relative z-10">
        <SectionHeading
          title="My Projects"
          subtitle="Explore my portfolio of digital solutions that solve real-world problems with innovative approaches."
        />

        {/* Category filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white/5 text-text-secondary hover:bg-white/10'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.slice(0, 4).map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glassmorphism group hover-card overflow-hidden"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Project image */}
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredId === project.id ? 1.05 : 1
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/10 px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                    {project.category}
                  </div>
                </div>

                {/* Project details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-text-secondary mb-6">{project.description}</p>

                  {/* Expanded details on hover */}
                  <AnimatePresence>
                    {hoveredId === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-white/10"
                      >
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-primary mb-1">THE CHALLENGE</h4>
                          <p className="text-sm text-text-secondary">{project.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-1">OUR SOLUTION</h4>
                          <p className="text-sm text-text-secondary">{project.solution}</p>
                        </div>

                        <Button
                          href={project.link}
                          className="mt-6 text-sm py-2"
                          variant="outline"
                        >
                          View Project <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View all button */}
        <div className="w-full items-center justify-center flex mt-12">
          <a
            href="/projects"
            className="inline-block text-[15px] relative overflow-hidden bg-gradient-to-br w-fit mx-auto from-[#434343] to-[#000000] text-white shadow-md border-t-[2px] border-t-white/30 hover:brightness-110 transition-all duration-300 hover:shadow-lg px-4 py-2 rounded-full text-lg"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;