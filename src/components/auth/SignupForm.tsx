import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, useI18n } from '@/context';

import ActionButton from '@/components/ui/ActionButton';
import GlassCard from '@/components/common/GlassCard';
import SocialButton from '@/components/ui/SocialButton';

const SignupForm = () => {
  const navigate = useNavigate();
  const { signup, isLoading } = useAuth();
  const { t } = useI18n();
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

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  const handleWalletLogin = () => {
    navigate('/connect-wallet');
  };

  return (
    <GlassCard className="p-6 shadow-2xl relative overflow-hidden border-l-4 border-primary-container">
      <form>
       <div className="flex flex-col items-center mb-8 text-center">
          <h1 className="text-[32px] font-bold leading-[40px] tracking-tight text-on-surface mb-1">AttnPay</h1>
          <p className="text-[14px] leading-5 text-on-surface-variant">{t('auth.signupSubtitle')}</p>
        </div>

        <div className="grid gap-2 mb-8">
          <SocialButton provider="google" onClick={handleGoogleLogin} />
          <SocialButton provider="walletconnect" onClick={handleWalletLogin} />
        </div>
     

        <ActionButton 
          type="submit" 
          fullWidth 
          loading={isLoading}
          icon={<span className="material-symbols-outlined">arrow_forward</span>}
        >
          {isLoading ? t('auth.creatingAccount') : t('auth.createAccount')}
        </ActionButton>

        <div className="text-center pt-6">
          <p className="text-[14px] leading-5 text-on-surface-variant">
            {t('auth.alreadyHaveAccountLogin')}
            <button 
              type="button"
              onClick={() => navigate('/login')}
              className="text-primary font-semibold hover:underline"
            >
              {t('auth.loginAction')}
            </button>
          </p>
        </div>
      </form>
    </GlassCard>
  );
};

export default SignupForm;