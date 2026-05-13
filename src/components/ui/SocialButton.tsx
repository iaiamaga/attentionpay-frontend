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
    icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkRhjGF0isTiDg1jZ3SU21_ebPd0nN7c2hpHRd7tNIAOe9Haaw0hMf4oogzYU0AoZRLdY7n_KDO-PyMYCnC7SQbehZx-gGDMLiBbby1NDPJ5rSkKH_Czsh01guMVknTbnQOfSFIgsVIxmxRJhxvfo0XJXI9vf0Fgrm8-XgSgOIwXRBZJTrSmjn7dmGDyD1wqbJJqBgxCfb2kel64qx61ahLG63t4E6AwubrEmeYGyLbMJW3fxUp6zrMVWje2HfnGqRZ_j2rX12DRdW',
    label: 'Google',
    grayscale: true,
  },
  phantom: {
    icon: 'https://lh3.googleusercontent.com/aida/ADBb0uiajNc7E5Ln3Vq-dEdEjJh2gza0gpgQHX59hmc57XtkM5zHGNkJxCiRiEy6fD74MUkKI6K1h3e7BGlDSkxl6h-0uiCb2Qh-OYO5RsN7aOuPB1rBcbNACf1Rr9dVIbUV9EQMMAYkLUkLdWZ_W59iAKbvTyDfnDyJmPuIkH3rovoDT9RnSuaCtLD1h-k2Mmcs8d6sdanX3Dqnov96mePZJbff52GqP2RuODjE1hIRbB6AmEl9_JgMpSVr20F7na57QQSfGlxpLE6Vaw',
    label: 'Phantom',
  },
  walletconnect: {
    icon: 'https://lh3.googleusercontent.com/aida/ADBb0uh4aYRtQJHKh0pHic1uFEXra8S54ekSbLX0RSyqSnZeWzcbI1tOvHwPDJVtpvQzFMFtd2536RBfuVlFH9LmQ-UOHCCDlVJbBZ26T7mAGAhwx7rrMu3vJalQYN21Mww8f5yO22QTLnnOHsmVg4XLu4C97P-CsG9GFllle0g3FnVhV99MnsRx2zImOULzzCHKua0gJ6mKKeV2i_anPdVv1FuVvTIHbm0rji7FGdw7RYT6rS5cJPZIJKfXylmGk_lfTl1q1xM8eRcK5Ew',
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
        <img
          alt={config.label}
          className={`w-5 h-5 ${config.grayscale ? 'grayscale group-hover:grayscale-0 transition-all' : ''}`}
          src={config.icon}
        />
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