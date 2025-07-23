import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Code, ExternalLink } from 'lucide-react';
import Button from '../components/ui/Button';
import ProjectStats from '../components/ui/ProjectStats';
import TechStack from '../components/ui/TechStack';
import ProjectGallery from '../components/ui/ProjectGallery';
import { projects } from '../components/ui/ProjectData'; // Updated import path
import CtaSection from '../components/sections/ctasection';

interface ProjectCaseStudyProps {
  myworkId?: string;
  isModal?: boolean;
}

const ProjectCaseStudy = ({ myworkId: propId, isModal }: ProjectCaseStudyProps) => {
  const { myworkId: paramId } = useParams<{ myworkId: string }>();
  const myworkId = propId || paramId;
  console.log('myworkId:', myworkId, 'all ids:', projects.map(p => p.id));
  const [activeImage, setActiveImage] = useState(0);

  // Find the project (case-insensitive)
  const project = projects.find(p => p.id.toLowerCase() === (myworkId || '').toLowerCase());

  // Handle case where project is not found
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-zinc-200 mb-4">Project Not Found</h1>
          <p className="text-zinc-500 mb-8">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/mywork"
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
    <section className="relative min-h-screen bg-zinc-950 text-zinc-200 px-10">
      {/* Decorative backgrounds */}
      <div className="absolute top-40 -left-48 w-96 h-96 bg-zinc-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-zinc-500/5 rounded-full blur-3xl"></div>
      {/* Back button */}
      {/* <div className="max-w-7xl mt-12 mx-auto px-4 relative z-10">
      <Link to="/mywork" className="inline-flex items-center text-zinc-500 hover:text-primary transition-colors">
          <ArrowLeft className="mr-2" size={18} />
        </Link>
      </div> */}
      {/* Hero section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute top-0 left-0 w-32 h-32 bg-zinc-200/10 rounded-full -translate-x-1/3 -translate-y-1/3 blur-2xl"></div>
            <div className="relative z-10">
              <motion.img
                src={project.image}
                alt={project.title}
                className="rounded-2xl shadow-2xl w-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-md"
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
            className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 shadow-lg backdrop-blur-md"
          >
            <span className="inline-block bg-zinc-900/80 px-4 py-1 rounded-full text-sm text-zinc-500 mb-4 border border-zinc-800 font-semibold tracking-wide">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-200 mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-zinc-500 mb-8">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-4">

              <Button
                href={project.link}
                className="px-8 py-3 rounded-full relative overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-700 text-zinc-900 shadow-md border-t-[2px] border-t-zinc-500 hover:brightness-110 transition-all duration-300 hover:shadow-lg"

               >
                Visit Live
                <span className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" >↗</span>
              </Button>
              {/* {project.sourceCodeLink && (
                <Button
                  href={project.sourceCodeLink}
                  className="group px-8 py-3 rounded-full relative overflow-hidden border border-surface bg-gradient-to-b from-surface to-background text-white shadow-inner shadow-background border-t-[2px] border-t-white/20 hover:brightness-110 transition-all duration-300 hover:shadow-md"
                  >
                  View code <Code className="ml-2" size={18} />
                </Button>
              )} */}
            </div>
          </motion.div>
        </div>
      </div>
      {/* Stats section */}
      {/* {project.stats && project.stats.length > 0 && (
        <div className="w-fit mx-auto text-center bg-zinc-900/60 backdrop-blur-lg rounded-full py-5 px-5 border-y border-zinc-800 shadow-lg">
          <div className="mx-auto px-4">
            <ProjectStats items={project.stats} />
          </div>
        </div>
      )} */}
      {/* Case study content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-zinc-200 mb-6">Project Overview</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-400 mb-1">THE CHALLENGE</h3>
                  <p className="text-zinc-500">{project.challenge}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-400  mb-1">OUR SOLUTION</h3>
                  <p className="text-zinc-500">{project.solution}</p>
                </div>
                {project.techStack && project.techStack.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-400  mb-3">TECH STACK</h3>
                    <TechStack technologies={project.techStack} />
                  </div>
                )}
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-zinc-200 mb-6">Case Study</h2>
              <div className="space-y-8">
                {project.problem && (
                  <div className="bg-zinc-900/60 border border-zinc-700 rounded-2xl p-6 shadow-md">
                    <h3 className="text-xl font-bold text-zinc-200 mb-4">The Problem</h3>
                    <p className="text-zinc-500">{project.problem}</p>
                  </div>
                )}
                {project.designProcess && (
                  <div className="bg-zinc-900/60 border border-zinc-700 rounded-2xl p-6 shadow-md">
                    <h3 className="text-xl font-bold text-zinc-200 mb-4">Design Process</h3>
                    <p className="text-zinc-500 mb-4">{project.designProcess}</p>
                    {project.keyInsights && project.keyInsights.length > 0 && (
                      <div className="bg-zinc-900/80 rounded-xl p-6 border border-zinc-700 mb-4">
                        <h4 className="text-lg font-semibold text-zinc-200 mb-3">Key Insights</h4>
                        <ul className="space-y-2 ">
                          {project.keyInsights.map((insight, index) => (
                            <li key={index} className="flex items-start text-zinc-500 ">
                              <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full mt-2 mr-3"></div>
                              {insight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <div className="bg-zinc-900/60 border border-zinc-700 rounded-2xl p-6 shadow-md">
                    <h3 className="text-xl font-bold text-zinc-200 mb-4">The Solution</h3>
                    {project.solutionDescription && (
                      <p className="text-zinc-500 mb-4">{project.solutionDescription}</p>
                    )}
                    <div className="bg-zinc-900/80 rounded-xl p-6 border border-zinc-700">
                      <h4 className="text-lg font-semibold text-zinc-200 mb-3">Key Features</h4>
                      <ul className="space-y-2 text-zinc-500">
                        {project.keyFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full mt-2 mr-3"></div>
                              {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {project.results && (
                  <div className="bg-zinc-900/60 border border-zinc-700 rounded-2xl p-6 shadow-md">
                    <h3 className="text-xl font-bold text-zinc-200 mb-4">Feedback</h3>
                    <p className="text-zinc-500">{project.results}</p>
                    {/* {project.resultStats && project.resultStats.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                        {project.resultStats.map((stat, index) => (
                          <div key={index} className="bg-zinc-900/80 p-4 rounded-xl text-center border border-zinc-700">
                            <div className="text-2xl font-bold text-primary">{stat.value}</div>
                            <div className="text-sm text-zinc-500">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )} */}
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
            <h2 className="text-3xl font-bold text-zinc-200 text-center mb-4">Project Gallery</h2>
            <p className="text-zinc-500 text-center max-w-2xl mx-auto mb-12">
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
      <CtaSection />
    </section>  
  );
};

export default ProjectCaseStudy;