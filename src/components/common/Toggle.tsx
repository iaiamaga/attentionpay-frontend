interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  variant?: 'purple' | 'cyan';
}

const Toggle = ({ checked, onChange, label, variant = 'purple' }: ToggleProps) => {
  const colors = {
    purple: 'bg-primary-container neon-glow-purple',
    cyan: 'bg-secondary-container neon-glow-cyan',
  };

  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <div 
        className={`
          w-12 h-6 rounded-full transition-colors relative
          ${checked ? colors[variant] : 'bg-surface-container-highest'}
        `}
        onClick={() => onChange(!checked)}
      >
        <div
          className={`
            absolute top-1 w-4 h-4 rounded-full transition-all
            ${checked ? 'right-1 bg-white' : 'left-1 bg-on-surface-variant'}
          `}
        />
      </div>
      {label && <span className="text-sm text-on-surface">{label}</span>}
    </label>
  );
};

export default Toggle;