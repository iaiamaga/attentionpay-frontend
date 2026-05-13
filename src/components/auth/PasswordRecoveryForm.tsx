import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePasswordStrength } from '@/hooks';
import PasswordInput from '@/components/ui/PasswordInput';
import ActionButton from '@/components/ui/ActionButton';
import GlassCard from '@/components/common/GlassCard';

const PasswordRecoveryForm = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const strength = usePasswordStrength(password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword && strength.score >= 3) {
      setShowSuccess(true);
      setTimeout(() => navigate('/dashboard'), 3000);
    }
  };

  if (showSuccess) {
    return (
      <div className="absolute inset-0 bg-surface-container/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 z-20 rounded-xl">
        <div className="w-20 h-20 bg-secondary-container/20 rounded-full flex items-center justify-center mb-6 border border-secondary-container/30">
          <span className="material-symbols-outlined text-secondary-container text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
        </div>
        <h3 className="text-[24px] font-semibold leading-[32px] text-on-surface tracking-[-0.01em]">Sucesso!</h3>
        <p className="text-[16px] leading-6 text-on-surface-variant/80 mt-1 mb-8">
          Sua senha foi redefinida com sucesso no sistema AttnPay.
        </p>
        <ActionButton onClick={() => navigate('/dashboard')}>
          Ir para o Dashboard
        </ActionButton>
      </div>
    );
  }

  return (
    <GlassCard className="p-6 shadow-2xl relative overflow-hidden">
      <div className="mb-6">
        <h2 className="text-[24px] font-semibold leading-[32px] text-on-surface tracking-[-0.01em]">Redefinir Senha</h2>
        <p className="text-[14px] leading-5 text-on-surface-variant/70 mt-1">
          Crie uma senha forte para proteger sua conta.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <PasswordInput
          label="Nova Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          showToggle
          showStrengthIndicator
        />

        <PasswordInput
          label="Confirmar Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="••••••••"
          showToggle
        />

        <ActionButton 
          type="submit" 
          fullWidth
          icon={<span className="material-symbols-outlined">arrow_forward</span>}
        >
          Salvar e Acessar
        </ActionButton>
      </form>
    </GlassCard>
  );
};

export default PasswordRecoveryForm;