import GlassCard from '../common/GlassCard';

interface BalanceCardProps {
  balance: number;
  currency?: string;
}

const BalanceCard = ({ balance, currency = 'BRL' }: BalanceCardProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency,
    }).format(value);
  };

  return (
    <GlassCard className="p-6">
      <p className="text-[12px] text-[rgba(255,255,255,0.7)] mb-2">Saldo Total</p>
      <p className="text-3xl font-bold text-white">{formatCurrency(balance)}</p>
      <div className="mt-4 flex gap-2">
        <div className="h-1 flex-1 bg-[rgba(108,92,231,0.3)] rounded-full overflow-hidden">
          <div className="h-full bg-[#6c5ce7] w-[70%]" />
        </div>
      </div>
    </GlassCard>
  );
};

export default BalanceCard;