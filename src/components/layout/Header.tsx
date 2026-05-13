import { ReactNode } from 'react';
import IdiomButton from '@/components/common/IdiomButton';
import Logo from '@/components/ui/Logo';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  right?: ReactNode;
  showSearch?: boolean;
}

const Header = ({ right }: HeaderProps) => {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-container-margin py-4 bg-surface/60 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(108,92,231,0.2)]">
      <Logo size="sm" />
      <div className="flex items-center gap-4">
        <IdiomButton />
        {right}
      </div>
    </header>
  );
};

export default Header;