import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/ui/Logo';
import LanguageToggle from '@/components/ui/LanguageToggle';
import { useI18n } from '@/context';

const PasswordRecovery = () => {
  const navigate = useNavigate();
  const { t } = useI18n();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col relative overflow-x-hidden">
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-secondary/10 blur-[120px] rounded-full" />

      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-container-margin py-4 bg-surface/60 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(108,92,231,0.2)]">
        <Logo size="sm" />
        <div className="flex items-center gap-4">
          <LanguageToggle />
          <span className="material-symbols-outlined text-on-surface-variant/70 hover:bg-white/10 p-2 rounded-full transition-colors cursor-pointer">help_outline</span>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-container-margin pt-24 pb-12 relative">
        <div className="w-full max-w-md space-y-6 relative z-10">
          <a 
            onClick={() => navigate('/login')}
            className="inline-flex items-center gap-1 text-secondary text-[12px] font-bold tracking-wider hover:translate-x-[-4px] transition-transform active:scale-95 cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            {t('passwordRecovery.backToLogin').toString().toUpperCase()}
          </a>

          <section className="glass-panel rounded-xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
            <header className="mb-8">
              <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mb-4 border border-primary/20 neon-glow-primary">
                <span className="material-symbols-outlined text-primary text-[32px]">lock_reset</span>
              </div>
              <h2 className="text-[24px] font-semibold leading-[32px] text-on-surface tracking-[-0.01em] mb-1">{t('auth.forgotPassword')}</h2>
              <p className="text-[14px] leading-5 text-on-surface-variant">
                {t('passwordRecovery.emailInstructions')}
              </p>
            </header>

            {sent ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-secondary-container/20 flex items-center justify-center mx-auto mb-4 border border-secondary-container/30">
                  <span className="material-symbols-outlined text-secondary-container text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>mark_email_read</span>
                </div>
                <h3 className="text-[24px] font-semibold leading-[32px] text-on-surface tracking-[-0.01em] mb-2">{t('passwordRecovery.checkEmail')}</h3>
                <p className="text-[16px] leading-6 text-on-surface-variant mb-6">
                  {t('passwordRecovery.emailSent')}
                </p>
                <button 
                  onClick={() => navigate('/login')}
                  className="w-full py-4 bg-primary-container text-on-primary-container text-[18px] font-semibold leading-6 rounded-lg neon-glow-primary hover:brightness-110 transition-all"
                >
                  {t('passwordRecovery.backToLogin')}
                </button>
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <label className="text-[12px] font-bold tracking-wider text-on-surface-variant px-1 block uppercase">
                      {t('auth.email')}
                    </label>
                    <div className="relative group neon-border-focus transition-all duration-300 rounded-lg bg-surface-container-low border border-white/5">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/60 group-focus-within:text-secondary">mail</span>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nome@exemplo.com"
                        className="w-full bg-transparent text-on-surface pl-12 pr-4 py-3 text-[16px] outline-none"
                        required
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 bg-primary-container text-on-primary-container text-[18px] font-semibold leading-6 rounded-lg shadow-[0_0_20px_rgba(108,92,231,0.2)] hover:shadow-[0_0_30px_rgba(108,92,231,0.4)] active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    {t('passwordRecovery.resetPassword')}
                  </button>
                </form>
              </>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default PasswordRecovery;