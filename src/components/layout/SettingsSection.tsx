import { ReactNode } from 'react';

interface SettingsSectionProps {
  title: string;
  icon?: string;
  children: ReactNode;
  className?: string;
}

const SettingsSection = ({ title, icon, children, className = '' }: SettingsSectionProps) => {
  return (
    <div className={`glass-panel rounded-xl overflow-hidden ${className}`}>
      <div className="p-4 border-b border-white/10 flex items-center gap-2">
        {icon && (
          <span className="material-symbols-outlined text-primary">{icon}</span>
        )}
        <h3 className="text-[18px] font-semibold leading-6">{title}</h3>
      </div>
      <div className="p-4 space-y-4">
        {children}
      </div>
    </div>
  );
};

export default SettingsSection;