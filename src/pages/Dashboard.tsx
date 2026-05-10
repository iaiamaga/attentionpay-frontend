import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import BalanceCard from '@/components/financial/BalanceCard';
import TransactionItem from '@/components/financial/TransactionItem';
import GlassCard from '@/components/common/GlassCard';
import { Transaction } from '@/types';

const Dashboard = () => {
  const navigate = useNavigate();

  const mockTransactions: Transaction[] = [
    { id: '1', walletId: '1', type: 'PIX', amount: 150.00, status: 'completed', timestamp: new Date() },
    { id: '2', walletId: '1', type: 'RECEIVE', amount: 200.00, status: 'completed', timestamp: new Date() },
    { id: '3', walletId: '1', type: 'PIX', amount: 75.50, status: 'completed', timestamp: new Date() },
  ];

  return (
    <Layout>
      <Header title="AttnPay" right={
        <button onClick={() => navigate('/settings')} className="text-white/70">
          ⚙️
        </button>
      } />

      <div className="p-4 space-y-4">
        <BalanceCard balance={2500.00} />

        <GlassCard className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-white">Atividade Recente</h3>
            <button 
              onClick={() => navigate('/financial')}
              className="text-xs text-[#00d9ff]"
            >
              Ver todas
            </button>
          </div>
          <div className="space-y-1">
            {mockTransactions.map(tx => (
              <TransactionItem key={tx.id} transaction={tx} />
            ))}
          </div>
        </GlassCard>

        <div className="grid grid-cols-2 gap-4">
          <GlassCard className="p-4 cursor-pointer hover:bg-[rgba(255,255,255,0.05)]" onClick={() => navigate('/connect-wallet')}>
            <div className="text-2xl mb-2">🔗</div>
            <p className="text-sm text-white">Conectar Wallet</p>
          </GlassCard>
          <GlassCard className="p-4 cursor-pointer hover:bg-[rgba(255,255,255,0.05)]" onClick={() => navigate('/support')}>
            <div className="text-2xl mb-2">🎧</div>
            <p className="text-sm text-white">Suporte</p>
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;