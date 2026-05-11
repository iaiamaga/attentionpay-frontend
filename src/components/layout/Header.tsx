import { ReactNode } from 'react';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  right?: ReactNode;
}

const Header = ({ right }: HeaderProps) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(108,92,231,0.2)]">
      <div className="flex justify-between items-center px-container-margin py-4">
        <div className="flex items-center gap-2">
          <img 
            alt="AttnPay Logo" 
            className="w-8 h-8 rounded-full border border-secondary-container/50 shadow-[0_0_10px_rgba(0,217,255,0.3)]" 
            src="https://lh3.googleusercontent.com/aida/ADBb0ui4-rG_SkLvEVF2ayng_rDz3LghNi1OMQ3ApHArn7st7mPT4mUhRHZVqaUpg5RK9pTxf8-rug1pD-r35869S58sFNgXTQWVgFmI8Q_GPy8GehWSzTA_UblKjps_5gcw9yWLHfyypPXEpuQbY_d37dbvgmKEtxIHmiUddz3sMgILE4F8H_dnvvM_wyOnUP5K3chbplAdURRXlEA8ChlJ4P5lJjS_C1WX_ht44pKmUx6B3Ja1XamwsTAy2dVJhXoaUw_1Z8GCpHuUNQ"
          />
          <span className="text-[32px] font-bold leading-[40px] tracking-tight text-secondary-container">AttnPay</span>
        </div>
        <div className="flex items-center gap-4">
          {right || (
            <button className="hover:bg-white/10 transition-colors p-2 rounded-full active:scale-95">
              <span className="material-symbols-outlined text-on-surface-variant/70">notifications</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;