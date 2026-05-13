import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context';
import Input from '@/components/common/Input';
import ActionButton from '@/components/ui/ActionButton';
import GlassCard from '@/components/common/GlassCard';

const SignupForm = () => {
  const navigate = useNavigate();
  const { signup, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    try {
      await signup(formData.name, formData.email, formData.password);
      navigate('/verification');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <GlassCard className="p-6 shadow-2xl relative overflow-hidden border-l-4 border-primary-container">
      <div className="flex flex-col items-center mb-8 text-center">
        <h1 className="text-[32px] font-bold leading-[40px] tracking-tight text-on-surface mb-1">AttnPay</h1>
        <p className="text-[14px] leading-5 text-on-surface-variant">Crie sua conta para começar a operar</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Nome Completo"
          icon="person"
          placeholder="Ex: João Silva"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />

        <Input
          label="Email"
          icon="alternate_email"
          type="email"
          placeholder="nome@exemplo.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />

        <Input
          label="Senha"
          icon="lock"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />

        <Input
          label="Confirmar Senha"
          icon="verified_user"
          type="password"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          required
        />

        <ActionButton 
          type="submit" 
          fullWidth 
          loading={isLoading}
          icon={<span className="material-symbols-outlined">arrow_forward</span>}
        >
          {isLoading ? 'Criando conta...' : 'Criar Conta'}
        </ActionButton>

        <div className="text-center pt-6">
          <p className="text-[14px] leading-5 text-on-surface-variant">
            Já possui uma conta? 
            <button 
              type="button"
              onClick={() => navigate('/login')}
              className="text-primary font-semibold hover:underline"
            >
              Faça login
            </button>
          </p>
        </div>
      </form>
    </GlassCard>
  );
};

export default SignupForm;