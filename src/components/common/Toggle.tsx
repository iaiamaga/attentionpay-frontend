interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

const Toggle = ({ checked, onChange, label }: ToggleProps) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <div 
        className={`
          w-11 h-6 rounded-full transition-colors relative
          ${checked ? 'bg-[#6c5ce7]' : 'bg-[rgba(255,255,255,0.1)]'}
        `}
        onClick={() => onChange(!checked)}
      >
        <div
          className={`
            absolute top-1 w-4 h-4 rounded-full bg-white transition-transform
            ${checked ? 'left-6' : 'left-1'}
          `}
        />
      </div>
      {label && <span className="text-sm text-white/70">{label}</span>}
    </label>
  );
};

export default Toggle;