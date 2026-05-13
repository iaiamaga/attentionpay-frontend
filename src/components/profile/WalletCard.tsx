import phantomIcon from '@/assets/icons/phantom_solana.png';

interface WalletCardProps {
  name?: string;
  address?: string;
  icon?: string;
  onClick?: () => void;
}

const WalletCard = ({ 
  name = 'Phantom Wallet', 
  address = '7a8b9c...d3e4f5',
  icon = phantomIcon,
  onClick
}: WalletCardProps) => {
  return (
    <button 
      onClick={onClick}
      className="glass-panel rounded-xl p-4 flex items-center gap-4 hover:border-secondary-container/50 transition-all cursor-pointer w-full"
    >
      <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center border border-white/10">
        <img 
          alt={name} 
          className="w-8 h-8 object-contain" 
          src={icon}
        />
      </div>
      <div className="flex-1 text-left">
        <p className="text-[14px] font-semibold text-on-surface">{name}</p>
        <p className="text-[12px] text-on-surface-variant/60 font-mono">{address}</p>
      </div>
      <span className="material-symbols-outlined text-secondary-container">open_in_new</span>
    </button>
  );
};

export default WalletCard;