import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { projects } from '../components/ui/ProjectData';
import ProjectCaseStudy from './projectdetails';

type Category = 'All' | 'SaaS' | 'FinTech' | 'Bookings' | 'Org';
const categories: Category[] = ['All', 'SaaS', 'FinTech', 'Bookings', 'Org'];

const ProjectsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category>('All');
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [cursor, setCursor] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [modalProjectId, setModalProjectId] = useState<string | null>(null);
    const x = useMotionValue(cursor.x);
    const y = useMotionValue(cursor.y);
    const springX = useSpring(x, { stiffness: 400, damping: 40 });
    const springY = useSpring(y, { stiffness: 400, damping: 40 });
    // const navigate = useNavigate();

    useEffect(() => {
        x.set(cursor.x + 20);
        y.set(cursor.y + 20);
    }, [cursor, x, y]);

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    // const handleCaseStudyClick = (projectId: string, e: React.MouseEvent) => {
    //     e.stopPropagation();
    //     navigate(`/mywork/${projectId.toLowerCase()}`);
    // };
    // const handleCardClick = (projectId: string) => {
    //     navigate(`/mywork/${projectId.toLowerCase()}`);
    // };
    const handleCardClick = (projectId: string) => {
        setModalProjectId(projectId);
    };
    const handleModalClose = () => {
        setModalProjectId(null);
    };
    const handleMouseMove = (e: React.MouseEvent, id: string) => {
        setCursor({ x: e.clientX, y: e.clientY });
        setHoveredId(id);
    };
    const handleMouseLeave = () => {
        setHoveredId(null);
    };

    return (
        <section id="projects" className="py-20 min-h-screen bg-zinc-950 relative overflow-hidden">
            {/* Decorative backgrounds */}
            <div className="absolute top-40 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
            <div className="max-w-7xl mt-12 mx-auto px-4 relative z-10">
                <motion.div
                    className={`mb-16 max-w-3xl mx-auto text-center`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                > <div className="text-center mb-10">
                        <div className="text-gray-500 text-lg mb-2">( Projects )</div>

                        <h1 className="text-[45px] text-zinc-500 opacity-85 leading-[90px] mb-6 w-full font-medium text-center">
                            Some of my
                            <span className="shine-on-hover ml-4 bg-zinc-950 text-zinc-200 border text-[45px] border-surface px-5 py-3 mr-3 font-serif font-light italic rounded-full">
                                works
                            </span>

                        </h1>
                    </div>
                </motion.div>
                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className={`relative rounded-3xl shadow-lg overflow-hidden flex flex-col min-h-[400px] h-[400px] cursor-pointer${hoveredId === project.id ? ' cursor-none' : ''}`}
                            onMouseMove={(e) => handleMouseMove(e, project.id)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleCardClick(project.id)}
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
                                open {filteredProjects.find((p) => p.id === hoveredId)?.title}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                {/* Modal for project details */}
                <AnimatePresence>
                    {modalProjectId && (
                        <motion.div
                            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleModalClose}
                        >
                            <div
                                className="relative max-w-5xl w-full mx-auto"
                                onClick={e => e.stopPropagation()}
                            >
                                <button
                                    onClick={e => { e.stopPropagation(); handleModalClose(); }}
                                    className="absolute top-4 right-4 z-10 text-zinc-400 hover:text-white text-2xl bg-zinc-900/80 rounded-full p-2 border border-zinc-700"
                                    aria-label="Close"
                                >
                                    ×
                                </button>
                                <div className="overflow-y-auto max-h-[90vh] rounded-2xl">
                                    <ProjectCaseStudy myworkId={modalProjectId} isModal />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default ProjectsPage;