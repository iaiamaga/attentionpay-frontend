import { ReactNode } from 'react';
import Header from './Header';
import BottomNav from './BottomNav';

interface DashboardLayoutProps {
  children: ReactNode;
  showBottomNav?: boolean;
  customHeader?: ReactNode;
  backgroundVariant?: 'default' | 'gradient' | 'gradient-fixed';
}

const DashboardLayout = ({ 
  children, 
  showBottomNav = true,
  customHeader,
  backgroundVariant = 'gradient-fixed'
}: DashboardLayoutProps) => {
  const backgroundStyles = {
    default: 'bg-background',
    gradient: 'bg-background bg-[radial-gradient(circle at 50% -20%, #2900a0 0%, transparent 50%), radial-gradient(circle at 0% 100%, #003641 0%, transparent 40%)]',
    'gradient-fixed': `
      bg-[#13121b]
      bg-[radial-gradient(circle_at_50%_-20%,_rgba(41,0,160,0.3)_0%,_transparent_50%),radial-gradient(circle_at_0%_100%,_rgba(0,54,65,0.3)_0%,_transparent_40%)]
      bg-fixed
    `,
  };

  return (
    <div className={`min-h-screen text-on-surface ${backgroundStyles[backgroundVariant]}`}>
      {customHeader || <Header />}
      
      <main className="pt-24 pb-32 px-container-margin max-w-7xl mx-auto">
        {children}
      </main>

      {showBottomNav && <BottomNav />}
    </div>
  );
};

export default DashboardLayout;