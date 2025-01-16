import { motion } from 'framer-motion';

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#shop', label: 'Shop' },
  { href: '#contacts', label: 'Contacts' },
];

export const NavigationLinks = () => {
  return (
    <div className="flex space-x-8">
      {links.map((link, i) => (
        <motion.a
          key={link.href}
          href={link.href}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          className="nav-link"
        >
          {link.label}
        </motion.a>
      ))}
    </div>
  );
};