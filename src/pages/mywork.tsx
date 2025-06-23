import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Added for navigation
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import cover1 from '../assets/cover/cover01.png';
import cover2 from '../assets/cover/cover02.png';
import cover3 from '../assets/cover04.png';
import cover4 from '../assets/cover/cover04.png';
import cover5 from '../assets/cover/cover05.png';
import cover6 from '../assets/cover/cover07.png';
import { projects } from '../components/ui/ProjectData';
 

type Category = 'All' | 'SaaS' | 'FinTech' | 'Bookings' | 'Org';

const categories: Category[] = ['All', 'SaaS', 'FinTech', 'Bookings', 'Org'];

const ProjectsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category>('All');
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const navigate = useNavigate(); // Navigation hook

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    // Handle case study navigation
    const handleCaseStudyClick = (projectId: string, e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent card click from triggering
        navigate(`/projects/${projectId}`);
    };

    // Handle card click for case study
    const handleCardClick = (projectId: string) => {
        navigate(`/projects/${projectId}`);
    };

    return (
        <section id="projects" className="section-padding relative overflow-hidden">
            {/* Decorative backgrounds */}
            <div className="absolute top-40 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>

            <div className="grid-container relative z-10">
                <SectionHeading
                    title="My Projects"
                    subtitle="Explore my portfolio of carefully crafted digital experiences that solve real problems."
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
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="glassmorphism group hover-card overflow-hidden cursor-pointer"
                                onMouseEnter={() => setHoveredId(project.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                onClick={() => handleCardClick(project.id)}
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

                                {/* Project content */}
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

                                                <div className="flex gap-3 mt-6">
                                                    <Button
                                                        className="text-sm py-2"
                                                        variant="outline"
                                                        onClick={(e) => handleCaseStudyClick(project.id, e)}
                                                    >
                                                        Case Study
                                                    </Button>
                                                    <Button
                                                        href={project.link}
                                                        className="text-sm py-2"
                                                        variant="primary"
                                                    >
                                                        Live Project <ExternalLink className="ml-2 w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;