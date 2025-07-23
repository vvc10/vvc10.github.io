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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    try {
      // Send message to Telegram
      const botToken = '7643401756:AAGlOLQoBQYen3ioQ7UmWslQJR9qHt-pJEA';
      const chatId = '1103529211'; // <-- Replace with your chat ID
      const text = `New Portfolio Contact!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
      const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
      const telegramRes = await fetch(telegramUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'Markdown'
        })
      });
      if (telegramRes.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 3000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 3000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="min-h-screen flex items-start justify-center text-center relative overflow-hidden pt-24 bg-zinc-950">
      {/* Decorative backgrounds */}

      <div className="absolute top-1/3 -right-16 w-64 h-64 bg-zinc-200/10 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-zinc-200/10 rounded-full blur-3xl animate-float"></div>
      <div className="relative z-10 px-4 max-w-7xl w-full mx-auto">
        <SectionHeading
          title="Contact me"
          subtitle="Ready to start your next project? Get in touch with me to discuss more."
        />
        <div className="flex flex-col md:flex-row gap-12 mt-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2"
          >
            <div className="flex flex-col gap-8 w-full max-w-md">
              <div className="flex items-start">
                <div className="mr-4 h-12 w-12 flex items-center justify-center rounded-full bg-transparent border border-zinc-800">
                  <Mail size={24} className="text-zinc-500" />
                </div>
                <div className='text-left'>
                  <h4 className="font-medium text-zinc-200 mb-1 text-lg">Email</h4>
                  <a href="mailto:vvastcore10@gmail.com" className="text-zinc-400 hover:text-white transition-colors text-base">
                    vvastcore10@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
              <div className="mr-4 h-12 w-12 flex items-center justify-center rounded-full bg-transparent border border-zinc-800">
              <Phone size={24} className="text-zinc-500" />
                </div>
                <div className='text-left'>
                  <h4 className="font-medium text-zinc-200 mb-1 text-lg">Phone</h4>
                  <a href="tel:+15551234567" className="text-zinc-400 hover:text-white transition-colors text-base">
                    +91-8928-090554
                  </a>
                </div>
              </div>
              <div className="flex items-start">
              <div className="mr-4 h-12 w-12 flex items-center justify-center rounded-full bg-transparent border border-zinc-800">

              <MessageSquare size={24} className="text-zinc-500" />
                </div>
                <div className='text-left'>
                  <h4 className="font-medium text-zinc-200 mb-1 text-lg">WhatsApp</h4>
                  <a href="https://wa.me/+918928090554" className="text-zinc-400 hover:text-white transition-colors text-base">
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
            className="flex justify-center items-start w-full "
          >
            <form onSubmit={handleSubmit} className="backdrop-blur-lg items-start bg-white/5 border border-white/10 shadow-lg p-8 rounded-3xl w-full mx-auto">
              <div className="mb-6 flex flex-col items-start">
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900/60 border border-zinc-700 focus:border-primary rounded-xl text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="mb-6 flex flex-col items-start">
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900/60 border border-zinc-700 focus:border-primary rounded-xl text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="jane@example.com"
                />
              </div>
              <div className="mb-6 flex flex-col items-start">
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-900/60 border border-zinc-700 focus:border-primary rounded-xl text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button
                className="w-fit flex items-center justify-center px-12 mx-auto py-3 rounded-full relative overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-700 text-zinc-900 shadow-md border-t-[2px] border-t-zinc-500 hover:brightness-110 transition-all duration-300 hover:shadow-lg text-lg font-medium"
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