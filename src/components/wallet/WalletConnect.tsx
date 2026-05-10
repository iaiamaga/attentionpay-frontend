import Button from '../common/Button';

interface WalletConnectProps {
  onConnect: (provider: 'phantom' | 'walletconnect') => void;
}

const WalletConnect = ({ onConnect }: WalletConnectProps) => {
  const wallets = [
    { id: 'phantom', name: 'Phantom', icon: '👻' },
    { id: 'walletconnect', name: 'WalletConnect', icon: '🔗' },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white mb-4">Conectar Wallet</h3>
      {wallets.map(wallet => (
        <Button
          key={wallet.id}
          variant="secondary"
          className="w-full flex items-center gap-3 justify-start px-4 py-4"
          onClick={() => onConnect(wallet.id as 'phantom' | 'walletconnect')}
        >
          <span className="text-2xl">{wallet.icon}</span>
          <span>{wallet.name}</span>
        </Button>
      ))}
    </div>
  );
};

export default WalletConnect;