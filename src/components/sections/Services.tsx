import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Layers, ShoppingCart } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  technologies: string[];
  useCase: string;
}

const services: Service[] = [
  {
    id: 'Websites & landing pages',
    title: 'Websites & landing pages',
    description: 'We build powerful, scalable web applications using cutting-edge technologies and best practices.',
    icon: Code,
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    useCase: 'We Built SaaS Businesses',
  },
  {
    id: 'ux-design ',
    title: 'ux-design that delivers',
    description: 'Creating intuitive, accessible, and visually striking user interfaces that drive engagement.',
    icon: Palette,
    technologies: ['Figma', 'Framer', 'Prototyping', 'User Testing'],
    useCase: 'We Transformed Brands',
  },
  {
    id: 'saas-product',
    title: 'SaaS Product that scales',
    description: 'End-to-end design and development of scalable Software as a Service products.',
    icon: Layers,
    technologies: ['Custom Dashboards', 'Analytics', 'API Integration', 'Cloud Infrastructure'],
    useCase: 'We Scaled Startups',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & Mobile Apps that sales',
    description: 'Building seamless shopping experiences across web and mobile platforms.',
    icon: ShoppingCart,
    technologies: ['Shopify', 'Flutter', 'React Native', 'Custom E-commerce'],
    useCase: 'We Boosted Sales',
  }
];

const Services = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Decorative backgrounds */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-48 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="grid-container relative z-10">
        <SectionHeading
          title="Services"
          subtitle="I specialize in crafting tailored digital solutions that solve real problems and create meaningful experiences for users."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredId === service.id;
            
            return (
              <motion.div
                key={service.id}
                className="glassmorphism p-8 hover-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="flex items-start mb-6">
                  {/* <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mr-4">
                    <Icon size={24} />
                  </div> */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                    <p className="text-text-secondary">{service.description}</p>
                  </div>
                </div>
                
                {/* <div className="mt-6">
                  <h4 className="text-sm font-medium text-white/70 mb-3">TECHNOLOGIES</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <motion.div
                    className="mt-6 pt-6 border-t border-white/5"
                    animate={{ opacity: isHovered ? 1 : 0.7 }}
                  >
                    <h4 className="text-sm font-medium text-primary mb-1">USE CASE</h4>
                    <p className="text-white font-medium">{service.useCase}</p>
                  </motion.div>
                </div> */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;