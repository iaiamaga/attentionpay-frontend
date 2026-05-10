import { ReactNode, HTMLAttributes } from 'react';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const GlassCard = ({ children, className, ...props }: GlassCardProps) => {
  return (
    <div
      className={`
        bg-[rgba(28,27,35,0.6)] backdrop-blur-[12px]
        border border-[rgba(255,255,255,0.1)] rounded-[12px]
        ${className || ''}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;