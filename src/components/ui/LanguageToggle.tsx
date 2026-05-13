import { useI18n } from '@/context';

interface LanguageToggleProps {
  showLabel?: boolean;
  className?: string;
}

const LanguageToggle = ({ 
  showLabel = true,
  className = '' 
}: LanguageToggleProps) => {
  const { language, setLanguage } = useI18n();

  const currentLang = language === 'pt-BR' ? 'pt' : 'en';

  return (
    <div className={`flex items-center gap-1 px-2 py-1 rounded-full bg-surface-container-high/50 border border-white/5 hover:bg-white/10 transition-colors text-[12px] font-bold tracking-wider ${className}`}>
      <button
        onClick={() => setLanguage('pt-BR')}
        className={`px-1 transition-colors ${
          currentLang === 'pt' 
            ? 'text-secondary-fixed-dim' 
            : 'text-on-surface-variant/50 hover:text-on-surface'
        }`}
      >
        PT
      </button>
      {showLabel && <span className="text-on-surface-variant/30">/</span>}
      <button
        onClick={() => setLanguage('en')}
        className={`px-1 transition-colors ${
          currentLang === 'en' 
            ? 'text-secondary-fixed-dim' 
            : 'text-on-surface-variant/50 hover:text-on-surface'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;