import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

interface WalletConnection {
  id: string;
  userId: string;
  provider: 'phantom' | 'walletconnect';
  address: string;
  connectedAt: Date;
}

const connections: WalletConnection[] = [];

export const walletConnectionController = {
  connect: (req: Request, res: Response) => {
    const { userId, provider, address } = req.body;
    
    const newConnection: WalletConnection = {
      id: uuidv4(),
      userId,
      provider,
      address,
      connectedAt: new Date(),
    };

    connections.push(newConnection);
    res.status(201).json(newConnection);
  },

  disconnect: (req: Request, res: Response) => {
    const connectionId = req.params.id;
    const index = connections.findIndex(c => c.id === connectionId);
    
    if (index === -1) {
      return res.status(404).json({ error: 'Conexão não encontrada' });
    }

    connections.splice(index, 1);
    res.json({ message: 'Wallet desconectada' });
  },

  getConnections: (req: Request, res: Response) => {
    const userId = req.params.userId;
    const userConnections = connections.filter(c => c.userId === userId);
    res.json(userConnections);
  },
};