export interface Transaction {
  id: string;
  walletId: string;
  type: 'PIX' | 'CRYPTO' | 'TRANSFER' | 'RECEIVE';
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  description?: string;
  recipientName?: string;
  recipientKey?: string;
  createdAt: Date;
}

export interface CreateTransactionDTO {
  walletId: string;
  type: 'PIX' | 'CRYPTO' | 'TRANSFER' | 'RECEIVE';
  amount: number;
  description?: string;
  recipientName?: string;
  recipientKey?: string;
}