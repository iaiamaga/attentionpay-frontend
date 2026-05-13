import { ReactNode } from 'react';
import Logo from '@/components/ui/Logo';
import LanguageToggle from '@/components/ui/LanguageToggle';
import { useI18n } from '@/context';

interface AuthLayoutProps {
  children: ReactNode;
  showLanguageToggle?: boolean;
  backgroundVariant?: 'default' | 'gradient' | 'mesh';
}

const AuthLayout = ({ 
  children, 
  showLanguageToggle = true,
  backgroundVariant = 'gradient'
}: AuthLayoutProps) => {
  const { t } = useI18n();
  const backgroundStyles = {
    default: 'bg-background',
    gradient: `
      bg-background
      bg-[radial-gradient(circle at_50%_-20%,_rgba(41,0,160,0.3)_0%,_transparent_50%),radial-gradient(circle_at_0%_100%,_rgba(0,54,65,0.3)_0%,_transparent_40%)]
      bg-fixed
    `,
    mesh: 'bg-mesh',
  };

  return (
    <div className={`min-h-screen text-on-surface flex flex-col relative overflow-hidden ${backgroundStyles[backgroundVariant]}`}>
      {/* Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-container-margin py-4 bg-surface/60 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(108,92,231,0.2)]">
        <Logo size="sm" />
        <div className="flex items-center gap-4">
          {showLanguageToggle && <LanguageToggle />}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-container-margin pt-32 pb-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-8 px-container-margin text-center">
        <p className="text-[12px] font-bold tracking-widest text-on-surface-variant/30 uppercase">
          © 2024 AttnPay Ecosystem. {t('footer.rights')}
        </p>
      </footer>
    </div>
  );
};

export default AuthLayout;