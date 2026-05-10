import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

interface Transaction {
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

const transactions: Transaction[] = [];

export const transactionController = {
  getTransactions: (req: Request, res: Response) => {
    const walletId = req.params.walletId;
    const walletTransactions = transactions.filter(t => t.walletId === walletId);
    res.json(walletTransactions);
  },

  createTransaction: (req: Request, res: Response) => {
    const { walletId, type, amount, description, recipientName, recipientKey } = req.body;
    
    const newTransaction: Transaction = {
      id: uuidv4(),
      walletId,
      type,
      amount,
      status: 'pending',
      description,
      recipientName,
      recipientKey,
      createdAt: new Date(),
    };

    transactions.push(newTransaction);
    res.status(201).json(newTransaction);
  },

  getRecentTransactions: (req: Request, res: Response) => {
    const userId = req.params.userId;
    // In a real app, filter by user's wallets
    const recent = transactions.slice(0, 10);
    res.json(recent);
  },
};