const LOGO_URL = 'https://lh3.googleusercontent.com/aida/ADBb0ui4-rG_SkLvEVF2ayng_rDz3LghNi1OMQ3ApHArn7st7mPT4mUhRHZVqaUpg5RK9pTxf8-rug1pD-r35869S58sFNgXTQWVgFmI8Q_GPy8GehWSzTA_UblKjps_5gcw9yWLHfyypPXEpuQbY_d37dbvgmKEtxIHmiUddz3sMgILE4F8H_dnvvM_wyOnUP5K3chbplAdURRXlEA8ChlJ4P5lJjS_C1WX_ht44pKmUx6B3Ja1XamwsTAy2dVJhXoaUw_1Z8GCpHuUNQ';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon';
  className?: string;
  onClick?: () => void;
}

const sizes = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-14 h-14',
};

const textSizes = {
  sm: 'text-[24px]',
  md: 'text-[28px]',
  lg: 'text-[32px]',
};

const Logo = ({ size = 'md', variant = 'full', className = '' }: LogoProps) => {
  if (variant === 'icon') {
    return (
      <img
        alt="AttnPay Logo"
        className={`${sizes[size]} rounded-full object-cover border border-primary/30 shadow-[0_0_10px_rgba(198,191,255,0.3)] shadow-[0_0_15px_rgba(0,217,255,0.4)] ${className}`}
        src={LOGO_URL}
      />
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        alt="AttnPay Logo"
        className={`${sizes[size]} rounded-full object-cover border border-primary/30 shadow-[0_0_10px_rgba(198,191,255,0.3)] shadow-[0_0_15px_rgba(0,217,255,0.4)]`}
        src={LOGO_URL}
      />
      <span className={`${textSizes[size]} font-bold leading-[40px] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-container to-secondary-container`}>
        AttnPay
      </span>
    </div>
  );
};

export default Logo;