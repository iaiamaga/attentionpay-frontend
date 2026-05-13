interface LanguageToggleProps {
  currentLanguage?: 'pt' | 'en';
  onChange?: (lang: 'pt' | 'en') => void;
  showLabel?: boolean;
  className?: string;
}

const LanguageToggle = ({ 
  currentLanguage = 'pt', 
  onChange,
  showLabel = true,
  className = '' 
}: LanguageToggleProps) => {
  return (
    <div className={`flex items-center gap-1 px-2 py-1 rounded-full bg-surface-container-high/50 border border-white/5 hover:bg-white/10 transition-colors text-[12px] font-bold tracking-wider ${className}`}>
      <button
        onClick={() => onChange?.('pt')}
        className={`px-1 transition-colors ${
          currentLanguage === 'pt' 
            ? 'text-secondary-fixed-dim' 
            : 'text-on-surface-variant/50 hover:text-on-surface'
        }`}
      >
        PT
      </button>
      {showLabel && <span className="text-on-surface-variant/30">/</span>}
      <button
        onClick={() => onChange?.('en')}
        className={`px-1 transition-colors ${
          currentLanguage === 'en' 
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