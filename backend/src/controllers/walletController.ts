import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

interface Wallet {
  id: string;
  userId: string;
  type: 'PIX' | 'CRYPTO';
  balance: number;
  address?: string;
  createdAt: Date;
}

const wallets: Wallet[] = [];

export const walletController = {
  getWallets: (req: Request, res: Response) => {
    const userId = req.params.userId;
    const userWallets = wallets.filter(w => w.userId === userId);
    res.json(userWallets);
  },

  createWallet: (req: Request, res: Response) => {
    const { userId, type, address } = req.body;
    
    const newWallet: Wallet = {
      id: uuidv4(),
      userId,
      type,
      balance: 0,
      address,
      createdAt: new Date(),
    };

    wallets.push(newWallet);
    res.status(201).json(newWallet);
  },

  getBalance: (req: Request, res: Response) => {
    const walletId = req.params.walletId;
    const wallet = wallets.find(w => w.id === walletId);
    
    if (!wallet) {
      return res.status(404).json({ error: 'Wallet não encontrada' });
    }

    res.json({ balance: wallet.balance });
  },

  updateBalance: (req: Request, res: Response) => {
    const walletId = req.params.walletId;
    const { amount } = req.body;
    
    const wallet = wallets.find(w => w.id === walletId);
    
    if (!wallet) {
      return res.status(404).json({ error: 'Wallet não encontrada' });
    }

    wallet.balance += amount;
    res.json({ balance: wallet.balance });
  },
};