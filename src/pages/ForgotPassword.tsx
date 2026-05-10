import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import GlassCard from '@/components/common/GlassCard';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Implement password recovery
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1000);
  };

  if (sent) {
    return (
      <div className="min-h-screen bg-[#13121b] flex flex-col p-6">
        <button 
          onClick={() => navigate('/login')} 
          className="text-white/70 hover:text-white mb-8"
        >
          ← Voltar
        </button>
        <GlassCard className="p-8 text-center">
          <div className="text-4xl mb-4">📧</div>
          <h2 className="text-xl font-semibold text-white mb-2">Email enviado!</h2>
          <p className="text-[rgba(255,255,255,0.7)]">
            Verifique sua caixa de entrada para redefinir sua senha.
          </p>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#13121b] flex flex-col p-6">
      <button 
        onClick={() => navigate('/login')} 
        className="text-white/70 hover:text-white mb-8"
      >
        ← Voltar
      </button>

      <h1 className="text-2xl font-bold text-white mb-2">Esqueci a senha</h1>
      <p className="text-[rgba(255,255,255,0.7)] mb-8">
        Informe seu email para recuperar o acesso
      </p>

      <GlassCard className="p-6 space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button 
            type="submit" 
            variant="primary" 
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Enviar email'}
          </Button>
        </form>
      </GlassCard>
    </div>
  );
};

export default ForgotPassword;