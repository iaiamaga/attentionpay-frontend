import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import GlassCard from '@/components/common/GlassCard';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Implement login logic
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#13121b] flex flex-col p-6">
      <button 
        onClick={() => navigate('/welcome')} 
        className="text-white/70 hover:text-white mb-8"
      >
        ← Voltar
      </button>

      <h1 className="text-2xl font-bold text-white mb-2">Bem-vindo de volta</h1>
      <p className="text-[rgba(255,255,255,0.7)] mb-8">Entre com sua conta</p>

      <GlassCard className="p-6 space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button 
            type="submit" 
            variant="primary" 
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </Button>
        </form>

        <button 
          onClick={() => navigate('/forgot-password')}
          className="block w-full text-center text-sm text-[#00d9ff] hover:underline"
        >
          Esqueci minha senha
        </button>
      </GlassCard>
    </div>
  );
};

export default Login;