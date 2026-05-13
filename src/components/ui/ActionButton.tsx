import { ButtonHTMLAttributes, ReactNode } from 'react';
import Loader from '../common/Loader';

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  fullWidth?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

const ActionButton = ({
  variant = 'primary',
  fullWidth = false,
  loading = false,
  icon,
  children,
  className = '',
  disabled,
  ...props
}: ActionButtonProps) => {
  const baseStyles = 'py-3 px-4 rounded-lg font-semibold text-[18px] leading-6 transition-all duration-200 flex items-center justify-center gap-2';

  const variants = {
    primary: 'bg-primary-container text-on-primary-container hover:brightness-110 shadow-lg shadow-primary/30 neon-glow-primary',
    secondary: 'border border-secondary-container text-secondary-container bg-transparent hover:bg-secondary-container/10',
    ghost: 'bg-transparent text-on-surface-variant/70 hover:text-on-surface hover:bg-white/5',
    danger: 'bg-error/20 text-error border border-error/30 hover:bg-error/30',
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'active:scale-95'}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <Loader size="sm" />
      ) : (
        <>
          {icon}
          {children}
        </>
      )}
    </button>
  );
};

export default ActionButton;