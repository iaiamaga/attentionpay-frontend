import { createContext, useContext, ReactNode, useState, useEffect, useCallback } from 'react';
import { User } from '@/types';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (name: string, email: string, password: string) => Promise<void>;
  updateUser: (user: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const MOCK_USER: User = {
  id: '1',
  email: 'alex.rivera@attnpay.tech',
  name: 'Alexandre Novaes de Oliveira',
  phone: '+55 11 99999-9999',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrh1ASNxsJom4MKV7OoLtpIwl_0ffDPvyUwQMAmomJzU3v0rLoYxmCxphKxE8ZYcvwylAYgTmEoeUiz8bUJus8K09FJl-3pnCnCArN41Gwp3yNcFsG8USKQUZgFFEDM7Ce3piUfNFpwCkG-lFI-g1Fsb11eRLun451lMjQsq-tK0fY31PyptHtQdyKM__xhhCF8_YYQ7R1mo6zNb7z9ppk4XbUNBYrmotYVAI8vm4-ngzZRjy8X0zKB13OaoMViflL2NJZZfF1n-5F',
  language: 'pt-BR',
  createdAt: new Date('2024-03-01'),
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authToken, setAuthToken, removeAuthToken] = useLocalStorage<string | null>('auth_token', null);

  useEffect(() => {
    const initializeAuth = async () => {
      if (authToken) {
        setUser(MOCK_USER);
      }
      setIsLoading(false);
    };
    initializeAuth();
  }, [authToken]);

  const login = useCallback(async (email: string, _password: string) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setUser({ ...MOCK_USER, email });
    setAuthToken('mock_token_' + Date.now());
    setIsLoading(false);
  }, [setAuthToken]);

  const signup = useCallback(async (name: string, email: string, _password: string) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    const newUser: User = {
      ...MOCK_USER,
      id: Date.now().toString(),
      name,
      email,
      createdAt: new Date(),
    };
    setUser(newUser);
    setAuthToken('mock_token_' + Date.now());
    setIsLoading(false);
  }, [setAuthToken]);

  const logout = useCallback(() => {
    setUser(null);
    removeAuthToken();
  }, [removeAuthToken]);

  const updateUser = useCallback((userData: Partial<User>) => {
    setUser(prev => prev ? { ...prev, ...userData } : null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        signup,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthContext;