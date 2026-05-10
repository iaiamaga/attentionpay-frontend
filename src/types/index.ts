export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  avatar?: string;
  language: 'pt-BR' | 'en';
  createdAt: Date;
}

export interface Wallet {
  id: string;
  userId: string;
  type: 'PIX' | 'CRYPTO';
  balance: number;
  address?: string;
}

export interface Transaction {
  id: string;
  walletId: string;
  type: 'PIX' | 'CRYPTO' | 'TRANSFER' | 'RECEIVE';
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  timestamp: Date;
  metadata?: {
    description?: string;
    recipientName?: string;
    recipientKey?: string;
  };
}

export interface WalletConnection {
  id: string;
  userId: string;
  provider: 'phantom' | 'walletconnect';
  address: string;
  connectedAt: Date;
}

export interface SupportTicket {
  id: string;
  userId: string;
  subject: string;
  messages: Array<{
    id: string;
    from: 'user' | 'support';
    content: string;
    timestamp: Date;
  }>;
  status: 'open' | 'pending' | 'closed';
  createdAt: Date;
}

export interface UserSettings {
  userId: string;
  theme: 'dark' | 'light';
  language: 'pt-BR' | 'en';
  notifications: {
    email: boolean;
    push: boolean;
  };
}