import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 'pankaj',
    name: 'Pankaj Yadav',
    role: 'Developer & UIX',
    bio: 'Pankaj has over 5 years of experience building scalable web applications and leads our development team with a focus on performance and clean code.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'vinay',
    name: 'Vinay nath tiwary',
    role: 'UI/UX Designer',
    bio: 'Vinay combines his background in psychology and visual design to create intuitive user experiences that solve real problems while looking beautiful.',
    image: ''
  },
  {
    id: 'nutesh',
    name: 'Nutesh Tajne',
    role: 'Product Designer',
    bio: 'Nutesh works closely with clients to understand their business needs and translates them into effective product strategies and roadmaps.',
    image: 'https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Team = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  
  return (
    <section id="team" className="section-padding bg-surface/30 relative overflow-hidden">
      {/* Decorative backgrounds */}
      <div className="absolute top-20 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="grid-container relative z-10">
        <SectionHeading
          title="Meet Our Team"
          subtitle="Our talented team of designers and developers brings together diverse expertise to craft exceptional digital experiences."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative mb-6 overflow-hidden rounded-xl aspect-[3/4]">
                <motion.div
                  className="absolute  inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent z-10"
                  animate={{
                    opacity: hoveredId === member.id ? 0.8 : 0.5
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div 
                  // src={member.image} 
                  // alt={member.name}
                  className="h-full w-full bg-gradient-to-tr from-primary/60 via-secondary/60 to-primary/30"
                  animate={{
                    scale: hoveredId === member.id ? 1.05 : 1
                  }}
                  transition={{ duration: 0.4 }}
                />
                
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-6 z-20"
                  animate={{
                    y: hoveredId === member.id ? 0 : 10,
                    opacity: hoveredId === member.id ? 1 : 0.9
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  
                  <motion.p 
                    className="mt-4 text-text-secondary text-sm"
                    animate={{
                      opacity: hoveredId === member.id ? 1 : 0,
                      height: hoveredId === member.id ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {member.bio}
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;