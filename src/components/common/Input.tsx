import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, icon, className, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-[12px] font-bold tracking-wider text-secondary px-1 uppercase">
          {label}
        </label>
      )}
      <div className="relative group">
        {icon && (
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors text-lg">
            {icon}
          </span>
        )}
        <input
          ref={ref}
          className={`
            w-full ${icon ? 'pl-12' : 'px-4'} pr-4 py-4
            bg-surface-container-low border border-white/10 rounded-lg
            text-on-surface placeholder:text-on-surface-variant/40
            focus:border-primary-container focus:ring-1 focus:ring-primary-container
            outline-none transition-all
            ${error ? 'border-error' : ''}
            ${className || ''}
          `}
          {...props}
        />
      </div>
      {error && (
        <span className="text-[12px] text-error px-1">{error}</span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;