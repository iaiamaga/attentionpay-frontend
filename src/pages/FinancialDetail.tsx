import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import GlassCard from '@/components/common/GlassCard';
import TransactionItem from '@/components/financial/TransactionItem';
import Chart from '@/components/financial/Chart';
import { Transaction } from '@/types';

const FinancialDetail = () => {
  const navigate = useNavigate();

  const mockTransactions: Transaction[] = [
    { id: '1', walletId: '1', type: 'PIX', amount: 150.00, status: 'completed', timestamp: new Date() },
    { id: '2', walletId: '1', type: 'RECEIVE', amount: 200.00, status: 'completed', timestamp: new Date() },
    { id: '3', walletId: '1', type: 'PIX', amount: 75.50, status: 'completed', timestamp: new Date() },
    { id: '4', walletId: '1', type: 'TRANSFER', amount: 50.00, status: 'completed', timestamp: new Date() },
    { id: '5', walletId: '1', type: 'PIX', amount: 300.00, status: 'completed', timestamp: new Date() },
  ];

  const chartData = [
    { date: '01/05', value: 1800 },
    { date: '02/05', value: 2100 },
    { date: '03/05', value: 1950 },
    { date: '04/05', value: 2300 },
    { date: '05/05', value: 2500 },
  ];

  return (
    <Layout>
      <Header 
        title="Financeiro" 
        showBack 
        onBack={() => navigate('/dashboard')}
      />

      <div className="p-4 space-y-4">
        <GlassCard className="p-4">
          <h3 className="text-sm font-semibold text-white mb-4">Evolução Patrimonial</h3>
          <Chart data={chartData} />
        </GlassCard>

        <div className="flex gap-4">
          <GlassCard className="flex-1 p-4">
            <p className="text-[12px] text-[rgba(255,255,255,0.7)]">Receitas</p>
            <p className="text-xl font-bold text-[#00b894]">R$ 2.500</p>
          </GlassCard>
          <GlassCard className="flex-1 p-4">
            <p className="text-[12px] text-[rgba(255,255,255,0.7)]">Despesas</p>
            <p className="text-xl font-bold text-[#ff7675]">R$ 800</p>
          </GlassCard>
        </div>

        <GlassCard className="p-4">
          <h3 className="text-sm font-semibold text-white mb-4">Todas as Transações</h3>
          <div className="space-y-1">
            {mockTransactions.map(tx => (
              <TransactionItem key={tx.id} transaction={tx} />
            ))}
          </div>
        </GlassCard>
      </div>
    </Layout>
  );
};

export default FinancialDetail;