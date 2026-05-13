interface WalletCardProps {
  name?: string;
  address?: string;
  icon?: string;
  onClick?: () => void;
}

const WalletCard = ({ 
  name = 'Phantom Wallet', 
  address = '7a8b9c...d3e4f5',
  icon = 'https://lh3.googleusercontent.com/aida/ADBb0uiajNc7E5Ln3Vq-dEdEjJh2gza0gpgQHX59hmc57XtkM5zHGNkJxCiRiEy6fD74MUkKI6K1h3e7BGlDSkxl6h-0uiCb2Qh-OYO5RsN7aOuPB1rBcbNACf1Rr9dVIbUV9EQMMAYkLUkLdWZ_W59iAKbvTyDfnDyJmPuIkH3rovoDT9RnSuaCtLD1h-k2Mmcs8d6sdanX3Dqnov96mePZJbff52GqP2RuODjE1hIRbB6AmEl9_JgMpSVr20F7na57QQSfGlxpLE6Vaw',
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