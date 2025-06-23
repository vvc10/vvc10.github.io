import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import ProjectStats from '../components/ui/ProjectStats';
import TechStack from '../components/ui/TechStack';
import ProjectGallery from '../components/ui/ProjectGallery';

const ProjectCaseStudy = ({ project }) => {
  const [activeImage, setActiveImage] = useState(0);
  
  // Mock gallery images for demonstration
  const galleryImages = [
    project.image,
    project.image,
    project.image,
    project.image
  ];

  return (
    <section className="relative min-h-screen bg-background text-text-primary">
      {/* Decorative backgrounds */}
      <div className="absolute top-40 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      
      {/* Back button */}
      <div className="container mx-auto pt-8 px-4">
        <Link to="/projects" className="inline-flex items-center text-text-secondary hover:text-primary transition-colors">
          <ArrowLeft className="mr-2" size={18} /> Back to Projects
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
              <Button variant="outline">
                View Source Code
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Stats section */}
      <div className="bg-white/5 backdrop-blur-sm py-16 border-y border-white/10">
        <div className="container mx-auto px-4">
          <ProjectStats 
            items={[
              { value: "40%", label: "Conversion Increase" },
              { value: "15K", label: "Monthly Users" },
              { value: "92%", label: "User Satisfaction" },
              { value: "3.2s", label: "Avg. Load Time" }
            ]}
          />
        </div>
      </div>
      
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
                
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-3">TECH STACK</h3>
                  <TechStack 
                    technologies={[
                      { name: "React", icon: "react" },
                      { name: "TypeScript", icon: "typescript" },
                      { name: "Tailwind CSS", icon: "tailwind" },
                      { name: "Node.js", icon: "nodejs" },
                      { name: "MongoDB", icon: "mongodb" },
                      { name: "Framer Motion", icon: "framer" }
                    ]}
                  />
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-6">Case Study</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">The Problem</h3>
                  <p className="text-text-secondary mb-4">
                    In today's fast-paced digital landscape, {project.title} faced significant challenges in 
                    {project.category === 'FinTech' ? ' building trust with users in financial services' : 
                     project.category === 'Bookings' ? ' delivering a premium booking experience' : 
                     project.category === 'SaaS' ? ' bringing offline shops online efficiently' : 
                     ' uniting professionals digitally'}.
                  </p>
                  <p className="text-text-secondary">
                    Users struggled with {project.category === 'FinTech' ? 'understanding complex financial data' : 
                    project.category === 'Bookings' ? 'finding personalized luxury accommodations' : 
                    project.category === 'SaaS' ? 'discovering local stores and ordering easily' : 
                    'connecting with peers in the mining industry'}, resulting in low conversion rates and user retention.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Design Process</h3>
                  <p className="text-text-secondary mb-4">
                    Our team followed a user-centered design approach, starting with in-depth research and interviews. 
                    We identified key pain points and created user personas to guide our design decisions.
                  </p>
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-4">
                    <h4 className="text-lg font-semibold text-primary mb-3">Key Insights</h4>
                    <ul className="space-y-2 text-text-secondary">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3"></div>
                        {project.category === 'FinTech' ? 'Users needed simplified financial data visualization' : 
                         project.category === 'Bookings' ? 'Travelers desired personalized recommendations' : 
                         project.category === 'SaaS' ? 'Shop owners wanted quick setup with minimal technical knowledge' : 
                         'Professionals sought industry-specific networking opportunities'}
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3"></div>
                        {project.category === 'FinTech' ? 'Security concerns were the primary barrier to adoption' : 
                         project.category === 'Bookings' ? 'Luxury travelers valued exclusive experiences over price' : 
                         project.category === 'SaaS' ? 'Customers preferred ordering through familiar channels like WhatsApp' : 
                         'Members wanted access to specialized industry knowledge'}
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3"></div>
                        {project.category === 'FinTech' ? 'Mobile-first approach was essential for financial tracking' : 
                         project.category === 'Bookings' ? 'High-quality visuals significantly impacted booking decisions' : 
                         project.category === 'SaaS' ? 'Real-time inventory updates were crucial for store owners' : 
                         'Job seekers needed specialized industry job boards'}
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">The Solution</h3>
                  <p className="text-text-secondary mb-4">
                    We designed {project.title} to address these challenges through a combination of intuitive UI, 
                    powerful functionality, and thoughtful user experience design.
                  </p>
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h4 className="text-lg font-semibold text-primary mb-3">Key Features</h4>
                    <ul className="space-y-2 text-text-secondary">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3"></div>
                        {project.category === 'FinTech' ? 'Real-time investment tracking with clear visualizations' : 
                         project.category === 'Bookings' ? 'Personalized concierge service integrated with booking flow' : 
                         project.category === 'SaaS' ? 'One-click WhatsApp ordering with automated catalog generation' : 
                         'Industry-specific job board with personalized recommendations'}
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3"></div>
                        {project.category === 'FinTech' ? 'Biometric authentication and bank-level security' : 
                         project.category === 'Bookings' ? 'Luxury property showcase with 360° virtual tours' : 
                         project.category === 'SaaS' ? 'Inventory management with automatic stock level updates' : 
                         'Professional networking with interest-based matching'}
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3"></div>
                        {project.category === 'FinTech' ? 'AI-powered financial insights and recommendations' : 
                         project.category === 'Bookings' ? 'Exclusive access to high-end experiences and events' : 
                         project.category === 'SaaS' ? 'Analytics dashboard for tracking orders and customer behavior' : 
                         'Resource library with industry research and publications'}
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Results & Impact</h3>
                  <p className="text-text-secondary">
                    After launching {project.title}, we observed significant improvements across key metrics:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="glassmorphism p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold text-primary">40%</div>
                      <div className="text-sm text-text-secondary">Conversion Increase</div>
                    </div>
                    <div className="glassmorphism p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold text-primary">15K+</div>
                      <div className="text-sm text-text-secondary">Monthly Active Users</div>
                    </div>
                    <div className="glassmorphism p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold text-primary">92%</div>
                      <div className="text-sm text-text-secondary">User Satisfaction</div>
                    </div>
                    <div className="glassmorphism p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold text-primary">4.8★</div>
                      <div className="text-sm text-text-secondary">Average Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gallery section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Project Gallery</h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
            Explore the key screens and interactions that define the {project.title} experience
          </p>
          
          <ProjectGallery images={galleryImages} activeImage={activeImage} setActiveImage={setActiveImage} />
        </div>
      </div>
      
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

// Example usage in a route
const ProjectPageWrapper = () => {
  // This would normally come from your router params
  const projectId = "lhc"; 
  const project = projects.find(p => p.id === projectId) || projects[0];
  
  return <ProjectCaseStudy project={project} />;
};

export default ProjectCaseStudy;