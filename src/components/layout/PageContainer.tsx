import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const maxWidths = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-full',
};

const PageContainer = ({ children, className = '', maxWidth = 'full' }: PageContainerProps) => {
  return (
    <div className={`w-full mx-auto ${maxWidths[maxWidth]} ${className}`}>
      {children}
    </div>
  );
};

export default PageContainer;