import { ReactNode } from 'react';

interface SettingsItemProps {
  label: string;
  value?: string;
  description?: string;
  onClick?: () => void;
  icon?: ReactNode;
  rightElement?: ReactNode;
  variant?: 'default' | 'wallet' | 'danger';
  className?: string;
}

const SettingsItem = ({ 
  label, 
  value, 
  description, 
  onClick,
  icon,
  rightElement,
  variant = 'default',
  className = '' 
}: SettingsItemProps) => {
  const variantStyles = {
    default: 'hover:bg-white/5',
    wallet: 'hover:border-primary/50',
    danger: 'hover:bg-error/5',
  };

  return (
    <button 
      onClick={onClick}
      className={`
        w-full flex items-center justify-between p-3 rounded-lg 
        transition-colors group text-left
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {icon ? (
        <div className="flex items-center gap-4">
          <div className={`
            w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center 
            border border-white/10 group-hover:border-primary/50 transition-colors overflow-hidden
          `}>
            {icon}
          </div>
          <div className="text-left">
            <p className="text-[16px] leading-6 text-on-surface">{label}</p>
            {description && (
              <p className="text-[14px] leading-5 text-on-surface-variant/60">{description}</p>
            )}
          </div>
        </div>
      ) : (
        <div className="text-left">
          <p className="text-[16px] leading-6">{label}</p>
          {value && (
            <p className="text-[14px] leading-5 text-on-surface-variant/60">{value}</p>
          )}
          {description && (
            <p className="text-[14px] leading-5 text-on-surface-variant/60">{description}</p>
          )}
        </div>
      )}
      
      {rightElement || (
        <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">
          chevron_right
        </span>
      )}
    </button>
  );
};

export default SettingsItem;