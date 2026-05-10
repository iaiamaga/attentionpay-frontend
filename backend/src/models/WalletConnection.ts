export interface WalletConnection {
  id: string;
  userId: string;
  provider: 'phantom' | 'walletconnect';
  address: string;
  connectedAt: Date;
}

export interface CreateWalletConnectionDTO {
  userId: string;
  provider: 'phantom' | 'walletconnect';
  address: string;
}