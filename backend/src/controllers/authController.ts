import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

interface UserStore {
  id: string;
  email: string;
  passwordHash: string;
  name: string;
  phone?: string;
  language: string;
}

const users: UserStore[] = [];

export const authController = {
  register: async (req: Request, res: Response) => {
    try {
      const { email, password, name, phone } = req.body;

      const existingUser = users.find(u => u.email === email);
      if (existingUser) {
        return res.status(400).json({ error: 'Email já cadastrado' });
      }

      const passwordHash = await bcrypt.hash(password, 10);
      
      const newUser: UserStore = {
        id: uuidv4(),
        email,
        passwordHash,
        name,
        phone,
        language: 'pt-BR',
      };

      users.push(newUser);
      
      res.status(201).json({ 
        user: { 
          id: newUser.id, 
          email: newUser.email, 
          name: newUser.name,
          language: newUser.language 
        } 
      });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar conta' });
    }
  },

  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const user = users.find(u => u.email === email);
      if (!user) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }

      const isValid = await bcrypt.compare(password, user.passwordHash);
      if (!isValid) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }

      res.json({ 
        user: { 
          id: user.id, 
          email: user.email, 
          name: user.name,
          language: user.language 
        } 
      });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao fazer login' });
    }
  },

  forgotPassword: async (req: Request, res: Response) => {
    try {
      const { email } = req.body;
      res.json({ message: 'Email de recuperação enviado' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao processar solicitação' });
    }
  },
};