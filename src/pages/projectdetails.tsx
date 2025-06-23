import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Button from '../components/ui/Button';
import ProjectStats from '../components/ui/ProjectStats';
import TechStack from '../components/ui/TechStack';
import ProjectGallery from '../components/ui/ProjectGallery';
import { projects } from '../components/ui/ProjectData'; // Updated import path

const ProjectCaseStudy = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [activeImage, setActiveImage] = useState(0);
  
  // Find the project
  const project = projects.find(p => p.id === projectId);
  
  // Handle case where project is not found
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-text-secondary mb-8">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link 
            to="/projects" 
            className="inline-flex items-center text-primary hover:text-primary/80"
          >
            <ArrowLeft className="mr-2" size={18} /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }
  
  // Use gallery images from project data if available
  const galleryImages = project.galleryImages || [project.image, project.image, project.image, project.image];

  return (
    <section className="relative min-h-screen bg-background text-text-primary mt-12">
      {/* Decorative backgrounds */}
      <div className="absolute top-40 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      
      {/* Back button */}
      <div className="container mx-auto pt-8 px-4">
        <Link to="/projects" className="inline-flex items-center text-text-secondary hover:text-primary transition-colors">
          <ArrowLeft className="mr-2" size={18} /> 
        </Link>
      </div>
      
      {/* Hero section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full -translate-x-1/3 -translate-y-1/3 blur-2xl"></div>
            <div className="relative z-10">
              <motion.img 
                src={project.image} 
                alt={project.title} 
                className="rounded-xl shadow-xl w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block bg-white/10 px-4 py-1 rounded-full text-sm text-primary mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-text-secondary mb-8">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button href={project.link} variant="primary">
                Visit Live Project <ExternalLink className="ml-2" size={18} />
              </Button>
              {project.sourceCodeLink && (
                <Button href={project.sourceCodeLink} variant="outline" disabled>
                  View Source Code
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Stats section */}
      {project.stats && project.stats.length > 0 && (
        <div className="container w-full mx-auto bg-white/5 backdrop-blur-sm rounded-2xl py-16 border-y border-white/10">
          <div className="container mx-auto px-4">
            <ProjectStats items={project.stats} />
          </div>
        </div>
      )}
      
      {/* Case study content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-1">THE CHALLENGE</h3>
                  <p className="text-text-secondary">{project.challenge}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-1">OUR SOLUTION</h3>
                  <p className="text-text-secondary">{project.solution}</p>
                </div>
                
                {project.techStack && project.techStack.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-primary mb-3">TECH STACK</h3>
                    <TechStack technologies={project.techStack} />
                  </div>
                )}
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-6">Case Study</h2>
              
              <div className="space-y-8">
                {project.problem && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">The Problem</h3>
                    <p className="text-text-secondary">{project.problem}</p>
                  </div>
                )}
                
                {project.designProcess && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Design Process</h3>
                    <p className="text-text-secondary mb-4">{project.designProcess}</p>
                    
                    {project.keyInsights && project.keyInsights.length > 0 && (
                      <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-4">
                        <h4 className="text-lg font-semibold text-primary mb-3">Key Insights</h4>
                        <ul className="space-y-2 text-text-secondary">
                          {project.keyInsights.map((insight, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3"></div>
                              {insight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
                
                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">The Solution</h3>
                    {project.solutionDescription && (
                      <p className="text-text-secondary mb-4">{project.solutionDescription}</p>
                    )}
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <h4 className="text-lg font-semibold text-primary mb-3">Key Features</h4>
                      <ul className="space-y-2 text-text-secondary">
                        {project.keyFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                {project.results && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Results & Impact</h3>
                    <p className="text-text-secondary">{project.results}</p>
                    
                    {project.resultStats && project.resultStats.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                        {project.resultStats.map((stat, index) => (
                          <div key={index} className="glassmorphism p-4 rounded-xl text-center">
                            <div className="text-2xl font-bold text-primary">{stat.value}</div>
                            <div className="text-sm text-text-secondary">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gallery section */}
      {galleryImages.length > 0 && (
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-4">Project Gallery</h2>
            <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
              Explore the key screens and interactions that define the {project.title} experience
            </p>
            
            <ProjectGallery 
              images={galleryImages} 
              activeImage={activeImage} 
              setActiveImage={setActiveImage} 
            />
          </div>
        </div>
      )}
      
      {/* CTA section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="glassmorphism rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to create something amazing?</h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              Whether you're looking to build a new product or improve an existing one, I'd love to help bring your vision to life.
            </p>
            <Button variant="primary">Let's Talk About Your Project</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCaseStudy;