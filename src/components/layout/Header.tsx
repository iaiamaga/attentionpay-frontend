import { ReactNode } from 'react';
import IdiomButton from '@/components/common/IdiomButton';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  right?: ReactNode;
  showSearch?: boolean;
}

const Header = ({ right }: HeaderProps) => {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-container-margin py-4 bg-surface/60 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(108,92,231,0.2)]">
      <div className="flex items-center gap-2">
        <img 
          alt="AttnPay Logo" 
          className="w-8 h-8 rounded-full object-cover border border-primary/30 shadow-[0_0_10px_rgba(198,191,255,0.3)] shadow-[0_0_15px_rgba(0,217,255,0.4)]" 
          src="https://lh3.googleusercontent.com/aida/ADBb0ui4-rG_SkLvEVF2ayng_rDz3LghNi1OMQ3ApHArn7st7mPT4mUhRHZVqaUpg5RK9pTxf8-rug1pD-r35869S58sFNgXTQWVgFmI8Q_GPy8GehWSzTA_UblKjps_5gcw9yWLHfyypPXEpuQbY_d37dbvgmKEtxIHmiUddz3sMgILE4F8H_dnvvM_wyOnUP5K3chbplAdURRXlEA8ChlJ4P5lJjS_C1WX_ht44pKmUx6B3Ja1XamwsTAy2dVJhXoaUw_1Z8GCpHuUNQ"
        />
        <span className="text-[32px] font-bold leading-[40px] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-container to-secondary-container">AttnPay</span>
      </div>
      <div className="flex items-center gap-4">
        <IdiomButton />
        {right}
      </div>
    </header>
  );
};

export default Header;