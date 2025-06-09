import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare, Mail, Phone } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      
      // Reset form data after success
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset form status after a delay
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Decorative backgrounds */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-48 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="grid-container relative z-10">
        <SectionHeading
          title="Contact me"
          subtitle="Ready to start your next project? Get in touch with me to discuss more."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
             
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Email</h4>
                  <a href="mailto:vvastcore10@gmail.com" className="text-text-secondary hover:text-primary transition-colors">
                    vvastcore10@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">Phone</h4>
                  <a href="tel:+15551234567" className="text-text-secondary hover:text-primary transition-colors">
                   +91-8928-090554
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white mb-1">WhatsApp</h4>
                  <a href="https://wa.me/+918928090554" className="text-text-secondary hover:text-primary transition-colors">
                    Connect on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="glassmorphism p-8 rounded-2xl">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-primary rounded-lg text-white placeholder-text-secondary/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Jane Doe"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-primary rounded-lg text-white placeholder-text-secondary/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="jane@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-primary rounded-lg text-white placeholder-text-secondary/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <Button 
                className="w-fit flex items-center justify-center px-12 mx-auto py-3 rounded-full relative overflow-hidden bg-gradient-to-br from-[#7c4cff] to-[#9872ff] text-white shadow-md border-t-[2px] border-t-white/30 hover:brightness-110 transition-all duration-300 hover:shadow-lg"
                onClick={handleSubmit}
                disabled={formStatus === 'submitting'}
              >
                {formStatus === 'idle' && (
                  <>Send Message <Send className="ml-2 w-4 h-4" /></>
                )}
                {formStatus === 'submitting' && (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                )}
                {formStatus === 'success' && 'Message Sent!'}
                {formStatus === 'error' && 'Error Sending'}
              </Button>
              
              {formStatus === 'success' && (
                <motion.p 
                  className="mt-4 text-sm text-center text-green-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Thank you for your message! We'll get back to you soon.
                </motion.p>
              )}
              
              {formStatus === 'error' && (
                <motion.p 
                  className="mt-4 text-sm text-center text-red-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  There was an error sending your message. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;