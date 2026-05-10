import { ReactNode } from 'react';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  right?: ReactNode;
}

const Header = ({ title, showBack, onBack, right }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between px-4 py-4">
      <div className="flex items-center gap-3">
        {showBack && (
          <button onClick={onBack} className="text-white/70 hover:text-white">
            ←
          </button>
        )}
        {title && (
          <h1 className="text-xl font-semibold text-white">{title}</h1>
        )}
      </div>
      {right && <div>{right}</div>}
    </header>
  );
};

export default Header;