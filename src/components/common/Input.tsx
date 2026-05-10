import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = ({ label, error, className, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-[12px] font-medium text-[rgba(255,255,255,0.7)]">
          {label}
        </label>
      )}
      <input
        className={`
          bg-[rgba(0,0,0,0.2)] border border-[rgba(255,255,255,0.1)]
          rounded-lg px-4 py-3 text-white placeholder-[rgba(255,255,255,0.3)]
          focus:outline-none focus:border-[#6c5ce7] transition-colors
          ${error ? 'border-[#ff7675]' : ''}
          ${className || ''}
        `}
        {...props}
      />
      {error && (
        <span className="text-[12px] text-[#ff7675]">{error}</span>
      )}
    </div>
  );
};

export default Input;