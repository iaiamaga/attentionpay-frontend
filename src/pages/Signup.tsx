import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import GlassCard from '@/components/common/GlassCard';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (password !== confirmPassword) {
      setErrors({ confirmPassword: 'As senhas não coincidem' });
      return;
    }

    setLoading(true);
    // Implement signup logic
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

      <h1 className="text-2xl font-bold text-white mb-2">Criar conta</h1>
      <p className="text-[rgba(255,255,255,0.7)] mb-8">Junte-se ao AttnPay</p>

      <GlassCard className="p-6 space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="tel"
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={errors.confirmPassword}
            required
          />
          <Button 
            type="submit" 
            variant="primary" 
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Criando conta...' : 'Cadastrar'}
          </Button>
        </form>
      </GlassCard>
    </div>
  );
};

export default Signup;