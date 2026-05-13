import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, useI18n } from '@/context';
import Input from '@/components/common/Input';
import ActionButton from '@/components/ui/ActionButton';
import SocialButton from '@/components/ui/SocialButton';
import Divider from '@/components/ui/Divider';
import GlassCard from '@/components/common/GlassCard';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  const { t } = useI18n();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  const handleWalletLogin = () => {
    navigate('/connect-wallet');
  };

  return (
    <GlassCard className="p-6 shadow-2xl relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10">
        <div className="mb-6">
          <h1 className="text-[24px] font-semibold leading-[32px] text-on-surface tracking-[-0.01em] mb-1">
            {t('auth.welcomeBack')}
          </h1>
          <p className="text-[14px] leading-5 text-on-surface-variant">
            Acesse o núcleo do sistema com sua credencial.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label={t('auth.email') as string}
            icon="alternate_email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nome@exemplo.com"
            required
          />

          <div className="space-y-1">
            <div className="flex justify-between items-end">
              <label className="text-[12px] font-bold tracking-wider text-on-surface-variant block uppercase">
                {t('auth.password')}
              </label> 
              <button 
                type="button"
                onClick={() => navigate('/password-recovery')}
                className="text-[10px] font-bold tracking-wider text-primary hover:text-secondary transition-colors"
              >
                {t('auth.forgotPassword')}
              </button>
            </div>
            <Input
              icon="lock"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <ActionButton 
            type="submit" 
            fullWidth 
            loading={isLoading}
            icon={<span className="material-symbols-outlined">login</span>}
          >
            {t('auth.login')}
          </ActionButton>
        </form>

        <Divider label="OU CONTINUE COM" />

        <div className="grid grid-cols-2 gap-2">
          <SocialButton provider="google" onClick={handleGoogleLogin} />
          <SocialButton provider="walletconnect" onClick={handleWalletLogin} />
        </div>

        <div className="mt-6 text-center">
          <p className="text-[14px] leading-5 text-on-surface-variant">
            Não tem conta? 
            <button 
              onClick={() => navigate('/signup')}
              className="text-secondary font-semibold hover:underline decoration-secondary-container decoration-2 underline-offset-4"
            >
              Cadastre-se
            </button>
          </p>
        </div>
      </div>
    </GlassCard>
  );
};

export default LoginForm;