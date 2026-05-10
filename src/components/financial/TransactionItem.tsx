import { Transaction } from '@/types';

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(date));
  };

  const formatAmount = (amount: number, type: string) => {
    const prefix = type === 'RECEIVE' ? '+' : '-';
    return `${prefix}R$ ${Math.abs(amount).toFixed(2)}`;
  };

  const typeIcons: Record<string, string> = {
    PIX: '💸',
    CRYPTO: '₿',
    TRANSFER: '↔️',
    RECEIVE: '📥',
  };

  return (
    <div className="flex items-center gap-3 p-3 hover:bg-[rgba(255,255,255,0.03)] rounded-lg transition-colors">
      <div className="w-10 h-10 rounded-full bg-[rgba(108,92,231,0.2)] flex items-center justify-center text-lg">
        {typeIcons[transaction.type] || '💰'}
      </div>
      <div className="flex-1">
        <p className="text-sm text-white font-medium">
          {transaction.metadata?.description || transaction.type}
        </p>
        <p className="text-[12px] text-[rgba(255,255,255,0.5)]">
          {formatDate(transaction.timestamp)}
        </p>
      </div>
      <span className={`text-sm font-medium ${
        transaction.type === 'RECEIVE' ? 'text-[#00b894]' : 'text-white'
      }`}>
        {formatAmount(transaction.amount, transaction.type)}
      </span>
    </div>
  );
};

export default TransactionItem;