import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  href?: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  href, 
  className = '', 
  onClick 
}: ButtonProps) => {
  const baseClasses = 'btn';
  
  const variantClasses = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    ghost: 'hover:bg-white/5',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  const buttonContent = (
    <motion.span
      className="relative z-10 flex items-center justify-center"
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {buttonContent}
    </button>
  );
};

export default Button;