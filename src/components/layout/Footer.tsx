import { motion } from 'framer-motion';
import { Github, Twitter, Instagram, Linkedin } from 'lucide-react';
import Logo from '../ui/Logo';

const socialLinks = [
  { name: 'Twitter', href: 'https://x.com/pankajstwt', icon: Twitter },
  { name: 'Instagram', href: 'https://instagram.com/itspank89', icon: Instagram },
  // { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/vvc10', icon: Github }
];

const Footer = () => {
  return (
    <footer className="bg-zinc-950 bg-surface/50 pt-20 pb-8">
      <div className="grid-container">
        <div className="flex flex-col items-center justify-center text-center gap-6">
          <Logo />

          <div className="flex justify-center gap-6 mt-6 text-gray-400 text-sm">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/#projects" className="hover:text-white">Work</a>
            <a href="/#contact" className="hover:text-white">Contact</a>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                aria-label={link.name}
                className="text-gray-400 hover:text-white transition"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
