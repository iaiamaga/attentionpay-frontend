import phantomIcon from '@/assets/icons/phantom_solana.png';
import walletConnectIcon from '@/assets/icons/wallet_connect_transp.png';

interface SocialButtonProps {
  provider: 'google' | 'phantom' | 'walletconnect';
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
}

interface ProviderConfig {
  icon: string;
  label: string;
  grayscale?: boolean;
}

const providerConfig: Record<string, ProviderConfig> = {
  google: {
    icon: '',
    label: 'Google',
    grayscale: true,
  },
  phantom: {
    icon: phantomIcon,
    label: 'Phantom',
  },
  walletconnect: {
    icon: walletConnectIcon,
    label: 'WalletConnect',
  },
};

const SocialButton = ({ provider, onClick, fullWidth = false, className = '' }: SocialButtonProps) => {
  const config = providerConfig[provider];

  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center gap-2 py-2 px-4 
        glass-panel rounded-lg hover:bg-white/10 transition-colors group
        border ${provider === 'walletconnect' ? 'border-secondary-container/50' : 'border-white/10'}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {provider === 'google' ? (
        <span className="material-symbols-outlined text-lg">account_circle</span>
      ) : (
        <img
          alt={config.label}
          className="w-8 h-8 object-contain"
          src={config.icon}
        />
      )}
      <span className={`text-[12px] font-bold tracking-wider ${provider === 'phantom' || provider === 'walletconnect' ? 'text-secondary-container' : ''}`}>
        {config.label}
      </span>
    </button>
  );
};

export default SocialButton;