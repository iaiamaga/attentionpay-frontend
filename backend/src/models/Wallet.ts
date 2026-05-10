export interface Wallet {
  id: string;
  userId: string;
  type: 'PIX' | 'CRYPTO';
  balance: number;
  address?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateWalletDTO {
  userId: string;
  type: 'PIX' | 'CRYPTO';
  address?: string;
}