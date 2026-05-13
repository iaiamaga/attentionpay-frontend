import logoImage from '@/assets/logo-attnpay.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'gg';
  variant?: 'full' | 'icon';
  className?: string;
  onClick?: () => void;
}

const sizes = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-14 h-14',
  gg: 'w-20 h-20',
};

const textSizes = {
  sm: 'text-[24px]',
  md: 'text-[28px]',
  lg: 'text-[32px]',
  gg: 'text-[40px]',
};

const Logo = ({ size = 'md', variant = 'full', className = '' }: LogoProps) => {
  if (variant === 'icon') {
    return (
      <img
        alt="AttnPay Logo"
        className={`${sizes[size]} rounded-full object-cover ] ${className}`}
        src={logoImage}
      />
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        alt="AttnPay Logo"
        className={`${sizes[size]} rounded-full object-cover border border-primary/30 shadow-[0_0_10px_rgba(198,191,255,0.3)] shadow-[0_0_15px_rgba(0,217,255,0.4)]`}
        src={logoImage}
      />
      <span className={`${textSizes[size]} font-bold leading-[40px] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-container to-secondary-container`}>
        AttnPay
      </span>
    </div>
  );
};

export default Logo;