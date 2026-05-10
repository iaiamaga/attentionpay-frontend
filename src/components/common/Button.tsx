import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
}

const Button = ({ variant = 'primary', children, className, ...props }: ButtonProps) => {
  const baseStyles = 'px-4 py-3 rounded-lg font-medium transition-all duration-200';
  
  const variants = {
    primary: 'bg-[#6c5ce7] text-white hover:brightness-110 shadow-lg shadow-[#6c5ce7]/30',
    secondary: 'border border-[#00d9ff] text-[#00d9ff] bg-transparent hover:bg-[#00d9ff]/10',
    ghost: 'text-white/70 hover:text-white bg-transparent',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className || ''}`} {...props}>
      {children}
    </button>
  );
};

export default Button;