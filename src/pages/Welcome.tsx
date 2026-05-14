import { useNavigate } from 'react-router-dom';
import IdiomButtom from '@/components/common/IdiomButton';
import Logo from '@/components/ui/Logo';
import { useI18n } from '@/context';

const Welcome = () => {
  const navigate = useNavigate();
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background text-on-background relative overflow-hidden">
      <div className="fixed inset-0 z-0 bg-mesh" />
      <div className="fixed inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[500px] h-[500px] bg-primary-container rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-between min-h-screen px-container-margin py-8">
        <header className="w-full flex justify-end">
          <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary-fixed-dim text-lg">language</span>
            <IdiomButtom />
          </div>
        </header>

        <div className="flex flex-col items-center text-center max-w-md w-full gap-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-secondary-container blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className=" flex items-center justify-center">
              <Logo variant="icon" size="gg" />
            </div>
          </div>

          <h1 className="text-[32px] font-bold leading-[40px] tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-container">AttnPay</span>
          </h1>

          <div className="gap-4 flex flex-col">
            <h2 className="text-[24px] font-semibold leading-[32px] text-on-surface tracking-[-0.01em]">{t('welcome.subtitle')}</h2>
            <p className="text-[16px] leading-6 text-on-surface-variant/80 px-4">
              {t('welcome.tagline')}
            </p>
          </div>
        </div>

        <div className="w-full max-w-sm flex flex-col gap-4 pb-8">
          <button 
            onClick={() => navigate('/signup')}
            className="w-full py-4 px-4 bg-primary-container rounded-xl flex items-center justify-between group neon-glow-primary active:scale-[0.98] transition-all"
          >
            <div className="flex flex-col items-start">
              <span className="text-[18px] font-semibold text-on-primary-container">{t('welcome.createAccount')}</span>
              <span className="text-[12px] text-on-primary-container/70">{t('welcome.startJourney')}</span>
            </div>
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <span className="material-symbols-outlined text-white">chevron_right</span>
            </div>
          </button>

          <button 
            onClick={() => navigate('/login')}
            className="w-full py-4 px-4 glass-panel rounded-xl flex items-center justify-between group active:scale-[0.98] transition-all"
          >
            <div className="flex flex-col items-start">
              <span className="text-[18px] font-semibold text-on-surface">{t('welcome.login')}</span>
              <span className="text-[12px] text-on-surface-variant/60">{t('welcome.alreadyHaveAccount')}</span>
            </div>
            <span className="material-symbols-outlined text-secondary-fixed-dim">login</span>
          </button>
        </div>

        <div className="absolute bottom-10 left-10 w-24 h-24 border-l border-b border-white/5 opacity-50" />
        <div className="absolute top-20 right-10 w-32 h-32 border-r border-t border-white/5 opacity-50" />
      </main>

      <div className="noise-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" type="fractalNoise" />
          </filter>
          <rect filter="url(#noiseFilter)" height="100%" width="100%" />
        </svg>
      </div>
    </div>
  );
};

export default Welcome;