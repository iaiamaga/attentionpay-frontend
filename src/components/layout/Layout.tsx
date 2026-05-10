import { ReactNode } from 'react';
import BottomNav from './BottomNav';

interface LayoutProps {
  children: ReactNode;
  showBottomNav?: boolean;
}

const Layout = ({ children, showBottomNav = true }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[#13121b] pb-20">
      {children}
      {showBottomNav && <BottomNav />}
    </div>
  );
};

export default Layout;