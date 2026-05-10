import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import WalletConnect from '@/components/wallet/WalletConnect';
import GlassCard from '@/components/common/GlassCard';

const ConnectWallet = () => {
  const navigate = useNavigate();
  const [connectedWallets, setConnectedWallets] = useState<Array<{provider: string; address: string}>>([]);

  const handleConnect = (provider: 'phantom' | 'walletconnect') => {
    // Implement wallet connection
    setConnectedWallets(prev => [...prev, { 
      provider, 
      address: '0x1234...5678' 
    }]);
  };

  const handleDisconnect = (provider: string) => {
    setConnectedWallets(prev => prev.filter(w => w.provider !== provider));
  };

  return (
    <Layout>
      <Header 
        title="Conectar Wallet" 
        showBack 
        onBack={() => navigate('/dashboard')}
      />

      <div className="p-4 space-y-4">
        <WalletConnect onConnect={handleConnect} />

        {connectedWallets.length > 0 && (
          <GlassCard className="p-4">
            <h3 className="text-sm font-semibold text-white mb-4">Wallets Conectadas</h3>
            <div className="space-y-3">
              {connectedWallets.map((wallet, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-[rgba(0,0,0,0.2)] rounded-lg">
                  <div>
                    <p className="text-white font-medium">{wallet.provider}</p>
                    <p className="text-xs text-[rgba(255,255,255,0.5)]">{wallet.address}</p>
                  </div>
                  <button 
                    onClick={() => handleDisconnect(wallet.provider)}
                    className="text-[#ff7675] text-sm"
                  >
                    Desconectar
                  </button>
                </div>
              ))}
            </div>
          </GlassCard>
        )}
      </div>
    </Layout>
  );
};

export default ConnectWallet;