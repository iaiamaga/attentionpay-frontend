import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context';
import { useTimer } from '@/hooks';
import VerificationInput from '@/components/ui/VerificationInput';
import ActionButton from '@/components/ui/ActionButton';
import GlassCard from '@/components/common/GlassCard';

const VerificationForm = () => {
  const navigate = useNavigate();
  const { isLoading } = useAuth();
  
  const { formattedTime, restart, isComplete } = useTimer({
    initialTime: 59,
    onComplete: () => console.log('Timer completed'),
    autoStart: true,
  });

  const handleComplete = useCallback((code: string) => {
    if (code.length === 6) {
      setTimeout(() => navigate('/dashboard'), 500);
    }
  }, [navigate]);

  const handleResend = () => {
    restart(59);
  };

  const handleVerify = () => {
    navigate('/dashboard');
  };

  return (
    <GlassCard className="p-6 space-y-8 neon-glow-secondary relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
      
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-container/10 border border-secondary/20 mb-4">
          <span className="material-symbols-outlined text-secondary text-[32px]">mark_email_unread</span>
        </div>
        <h2 className="text-[24px] font-semibold leading-[32px] text-on-surface tracking-[-0.01em]">Verifique seu E-mail</h2>
        <p className="text-[14px] leading-5 text-on-surface-variant/80">
          Enviamos um código de 6 dígitos para o seu endereço de e-mail cadastrado.
        </p>
      </div>

      <div className="flex flex-col space-y-6">
        <VerificationInput 
          length={6} 
          onComplete={handleComplete}
        />

        <div className="flex items-center justify-between text-[12px] font-bold tracking-wider px-1">
          <span className="text-on-surface-variant/60 uppercase">Expira em</span>
          <div className="flex items-center gap-1 text-secondary">
            <span className="material-symbols-outlined text-base">schedule</span>
            <span>{formattedTime}</span>
          </div>
        </div>

        <ActionButton 
          onClick={handleVerify}
          fullWidth
          loading={isLoading}
          icon={<span className="material-symbols-outlined">verified</span>}
        >
          Verificar
        </ActionButton>
      </div>

      <div className="pt-4 border-t border-white/10 text-center">
        <p className="text-[14px] leading-5 text-on-surface-variant">
          Não recebeu o código? 
          <button 
            onClick={handleResend}
            disabled={isComplete}
            className="text-secondary font-bold hover:underline ml-1 transition-all disabled:opacity-50"
          >
            Reenviar agora
          </button>
        </p>
      </div>
    </GlassCard>
  );
};

export default VerificationForm;