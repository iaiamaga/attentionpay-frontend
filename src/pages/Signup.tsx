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

    if (password.length < 6) {
      setErrors({ password: 'Senha deve ter pelo menos 6 caracteres' });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  const passwordRequirements = [
    { met: password.length >= 6, text: 'Mínimo 6 caracteres' },
    { met: /[A-Z]/.test(password), text: 'Uma letra maiúscula' },
    { met: /[0-9]/.test(password), text: 'Um número' },
  ];

  return (
    <div className="min-h-screen bg-[#13121b] flex flex-col p-5 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#6c5ce7] rounded-full opacity-10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00d9ff] rounded-full opacity-10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <button 
          onClick={() => navigate('/welcome')} 
          className="text-[rgba(255,255,255,0.7)] hover:text-white transition-colors flex items-center gap-2 mb-6"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm">Voltar</span>
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ffd700] to-[#b8860b] flex items-center justify-center">
            <svg 
              viewBox="0 0 24 24" 
              className="w-6 h-6 text-[#13121b]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path 
                d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h1 className="text-[24px] font-semibold text-white">Criar conta</h1>
        </div>
        <p className="text-base text-[rgba(255,255,255,0.7)] mb-6">Junte-se ao AttnPay</p>

        <GlassCard className="p-5 space-y-4">
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
              placeholder="Telefone (opcional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div>
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
                required
              />
              {password && (
                <div className="mt-2 space-y-1">
                  {passwordRequirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center ${req.met ? 'bg-[#00b894]' : 'bg-[rgba(255,255,255,0.1)]'}`}>
                        {req.met && (
                          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className={`text-xs ${req.met ? 'text-[#00b894]' : 'text-[rgba(255,255,255,0.5)]'}`}>
                        {req.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
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
              className="w-full py-3.5 text-base font-medium"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Criando conta...
                </span>
              ) : 'Cadastrar'}
            </Button>
          </form>
        </GlassCard>

        <p className="mt-6 text-center text-sm text-[rgba(255,255,255,0.7)]">
          Já tem uma conta?{' '}
          <button 
            onClick={() => navigate('/login')}
            className="text-[#00d9ff] hover:underline font-medium"
          >
            Entrar
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;