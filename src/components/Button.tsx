import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  href,
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center transition-all duration-300 font-medium tracking-wide";
  
  const variants = {
    primary: "bg-brand text-white hover:bg-brand-dark rounded-full px-8 py-3.5",
    secondary: "bg-transparent border border-border text-main hover:bg-soft rounded-full px-8 py-3.5"
  };

  const Component = href ? 'a' : 'button';

  return (
    // @ts-expect-error - Framer motion type definitions issue
    <Component 
      href={href}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
