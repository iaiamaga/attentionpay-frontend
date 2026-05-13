import { useState, InputHTMLAttributes } from 'react';

interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  showToggle?: boolean;
  showStrengthIndicator?: boolean;
}

const PasswordInput = ({
  label,
  error,
  showToggle = true,
  showStrengthIndicator = false,
  className,
  ...props
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const passwordValue = props.value as string | undefined;
  const passwordStrength = passwordValue
    ? [
        passwordValue.length >= 8,
        /[A-Z]/.test(passwordValue),
        /[0-9]/.test(passwordValue),
        /[^A-Za-z0-9]/.test(passwordValue),
      ].filter(Boolean).length
    : 0;

  const getStrengthLabel = () => {
    if (passwordStrength === 0) return '';
    if (passwordStrength === 1) return 'Fraca';
    if (passwordStrength === 2) return 'Média';
    if (passwordStrength === 3) return 'Boa';
    return 'Forte';
  };

  const getStrengthColor = () => {
    if (passwordStrength <= 1) return 'bg-error';
    if (passwordStrength === 2) return 'bg-warning';
    if (passwordStrength === 3) return 'bg-primary';
    return 'bg-secondary-container';
  };

  return (
    <div className="space-y-1">
      {label && (
        <label className="text-[12px] font-bold tracking-wider text-on-surface-variant block uppercase">
          {label}
        </label>
      )}
      <div className="relative group">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-secondary-container transition-colors">
          lock
        </span>
        <input
          type={showPassword ? 'text' : 'password'}
          className={`
            w-full bg-surface-container-lowest border border-white/10 rounded-lg 
            py-3 pl-11 pr-12 text-[16px] leading-6 text-on-surface 
            placeholder:text-outline/50 focus:outline-none focus:ring-1 
            focus:ring-secondary-container transition-all
            ${error ? 'border-error' : ''}
            ${className || ''}
          `}
          {...props}
        />
        {showToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined">
              {showPassword ? 'visibility_off' : 'visibility'}
            </span>
          </button>
        )}
      </div>

      {showStrengthIndicator && props.value && (
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold tracking-wider text-on-surface-variant/60 uppercase">Força</span>
            <span className="text-[10px] font-bold tracking-wider text-secondary-container uppercase">
              {getStrengthLabel()}
            </span>
          </div>
          <div className="flex gap-1 h-1.5 w-full">
            {[1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`flex-1 rounded-full ${
                  level <= passwordStrength
                    ? getStrengthColor()
                    : 'bg-white/10'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {error && (
        <span className="text-[12px] text-error px-1">{error}</span>
      )}
    </div>
  );
};

export default PasswordInput;