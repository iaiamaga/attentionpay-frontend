import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';
import Toggle from '@/components/common/Toggle';

const Settings = () => {
  const navigate = useNavigate();
  const [twoFA, setTwoFA] = useState(true);
  const [pushAlerts, setPushAlerts] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Header />
      
      <main className="pt-24 pb-28 px-container-margin max-w-2xl mx-auto space-y-4">
        <section className="glass-panel p-6 flex items-center gap-6 rounded-xl">
          <div className="relative">
            <img 
              alt="User Profile" 
              className="w-20 h-20 rounded-full border-2 border-secondary-container object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYdAu01cV07V8pYWp-08vLreZLjBVPz90v8XtcZ1hRG8om2UrXr47JzFTk2Jup-uGV5c4DQjRF95i-VP1f5M4UGT5TLrquo-cqKtZJOaRItOdz7mYey-h7rmlCqDJiGwfivp857cjaNn2NdNvivEC8W3G6NLgSk13YsLrKY9cBYhmbzQ31FlIkNcuipN_3-pAQ9fCcFxOHMGBGu2PQr2s5M0uRz-UaMYpxBg3t9_dWXpCvkQXxuVBj90L7OXV5l0oahvDaBk3LgHeP"
            />
            <div className="absolute bottom-0 right-0 bg-primary-container p-1 rounded-full border-2 border-background">
              <span className="material-symbols-outlined text-[16px] text-white">edit</span>
            </div>
          </div>
          <div>
            <h2 className="text-[24px] font-semibold leading-[32px] text-on-surface tracking-[-0.01em]">Alex Rivera</h2>
            <p className="text-[14px] leading-5 text-on-surface-variant/70">alex.rivera@attnpay.tech</p>
            <div className="mt-2">
              <span className="bg-secondary-container/20 text-secondary-container px-2 py-1 rounded-full text-[12px] font-bold tracking-wider uppercase">PRO MEMBER</span>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-4">
          <div className="glass-panel rounded-xl overflow-hidden">
            <div className="p-4 border-b border-white/10 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">account_circle</span>
              <h3 className="text-[18px] font-semibold leading-6">Conta</h3>
            </div>
            <div className="p-4 space-y-4">
              <button className="w-full flex items-center justify-between hover:bg-white/5 p-3 rounded-lg transition-colors group">
                <div className="text-left">
                  <p className="text-[16px] leading-6">Alterar E-mail</p>
                  <p className="text-[14px] leading-5 text-on-surface-variant/60">alex.rivera@attnpay.tech</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
              </button>
              <button className="w-full flex items-center justify-between hover:bg-white/5 p-3 rounded-lg transition-colors group">
                <div className="text-left">
                  <p className="text-[16px] leading-6">Alterar Senha</p>
                  <p className="text-[14px] leading-5 text-on-surface-variant/60">Atualizada há 3 meses</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">lock</span>
              </button>
            </div>
          </div>

          <div className="glass-panel rounded-xl overflow-hidden">
            <div className="p-4 border-b border-white/10 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-container">shield</span>
              <h3 className="text-[18px] font-semibold leading-6">Segurança</h3>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between p-3">
                <div>
                  <p className="text-[16px] leading-6">Autenticação 2FA</p>
                  <p className="text-[14px] leading-5 text-on-surface-variant/60">Proteja sua conta com um segundo passo</p>
                </div>
                <Toggle checked={twoFA} onChange={setTwoFA} variant="purple" />
              </div>
              <button className="w-full flex items-center justify-between hover:bg-white/5 p-3 rounded-lg transition-colors">
                <div className="text-left">
                  <p className="text-[16px] leading-6">Dispositivos Conectados</p>
                  <p className="text-[14px] leading-5 text-on-surface-variant/60">3 sessões ativas no momento</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">devices</span>
              </button>
            </div>
          </div>

          <div className="glass-panel rounded-xl overflow-hidden">
            <div className="p-4 border-b border-white/10 flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary">palette</span>
              <h3 className="text-[18px] font-semibold leading-6">Aparência & Idioma</h3>
            </div>
            <div className="p-4 space-y-6">
              <div>
                <p className="text-[12px] font-bold tracking-wider text-on-surface-variant/70 uppercase mb-2">Modo do Tema</p>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setTheme('dark')}
                    className={`flex-1 glass-panel py-4 flex flex-col items-center gap-1 rounded-lg ${theme === 'dark' ? 'border-primary-container neon-glow-purple' : 'opacity-40'}`}
                  >
                    <span className="material-symbols-outlined text-primary">dark_mode</span>
                    <span className="text-[14px] leading-5">Dark</span>
                  </button>
                  <button 
                    onClick={() => setTheme('light')}
                    className={`flex-1 glass-panel py-4 flex flex-col items-center gap-1 rounded-lg ${theme === 'light' ? 'border-primary-container neon-glow-purple' : 'opacity-40'}`}
                  >
                    <span className="material-symbols-outlined">light_mode</span>
                    <span className="text-[14px] leading-5">Light</span>
                  </button>
                </div>
              </div>

              <div>
                <p className="text-[12px] font-bold tracking-wider text-on-surface-variant/70 uppercase mb-2">Cor de Acento</p>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-container border-2 border-white neon-glow-purple cursor-pointer"></div>
                  <div className="w-10 h-10 rounded-full bg-secondary-container cursor-pointer"></div>
                  <div className="w-10 h-10 rounded-full bg-tertiary-container cursor-pointer"></div>
                  <div className="w-10 h-10 rounded-full bg-error-container cursor-pointer"></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-[16px] leading-6">Idioma do Sistema</p>
                <div className="flex bg-surface-container rounded-lg p-1 border border-white/5">
                  <button className="px-4 py-1 bg-primary-container rounded-md text-[12px] font-bold tracking-wider text-white">PT</button>
                  <button className="px-4 py-1 text-[12px] font-bold tracking-wider text-on-surface-variant/60">EN</button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass-panel p-4 rounded-xl space-y-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">visibility</span>
                <h3 className="text-[18px] font-semibold leading-6">Privacidade</h3>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[14px] leading-5">Perfil Público</span>
                <div className="w-10 h-5 bg-surface-container-highest rounded-full relative">
                  <div className="absolute left-1 top-1 w-3 h-3 bg-on-surface-variant rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="glass-panel p-4 rounded-xl space-y-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">notifications_active</span>
                <h3 className="text-[18px] font-semibold leading-6">Notificações</h3>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[14px] leading-5">Push Alerts</span>
                <Toggle checked={pushAlerts} onChange={setPushAlerts} variant="cyan" />
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-xl overflow-hidden">
            <div className="p-4 border-b border-white/10 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-container">account_balance_wallet</span>
              <h3 className="text-[18px] font-semibold leading-6">Conectar Wallet</h3>
            </div>
            <div className="p-4 space-y-4">
              <button 
                onClick={() => navigate('/connect-wallet')}
                className="w-full flex items-center justify-between hover:bg-white/5 p-3 rounded-lg transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                    <img 
                      alt="Phantom Wallet Icon" 
                      className="w-8 h-8 object-contain" 
                      src="https://lh3.googleusercontent.com/aida/ADBb0uiajNc7E5Ln3Vq-dEdEjJh2gza0gpgQHX59hmc57XtkM5zHGNkJxCiRiEy6fD74MUkKI6K1h3e7BGlDSkxl6h-0uiCb2Qh-OYO5RsN7aOuPB1rBcbNACf1Rr9dVIbUV9EQMMAYkLUkLdWZ_W59iAKbvTyDfnDyJmPuIkH3rovoDT9RnSuaCtLD1h-k2Mmcs8d6sdanX3Dqnov96mePZJbff52GqP2RuODjE1hIRbB6AmEl9_JgMpSVr20F7na57QQSfGlxpLE6Vaw"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-[16px] leading-6 text-on-surface">Phantom Wallet</p>
                    <p className="text-[14px] leading-5 text-on-surface-variant/60">Conectar via extensão ou app</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">link</span>
              </button>
              <button 
                onClick={() => navigate('/connect-wallet')}
                className="w-full flex items-center justify-between hover:bg-white/5 p-3 rounded-lg transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center border border-white/10 group-hover:border-secondary-container/50 transition-colors overflow-hidden">
                    <img 
                      alt="WalletConnect Icon" 
                      className="w-8 h-8 object-contain" 
                      src="https://lh3.googleusercontent.com/aida/ADBb0uh4aYRtQJHKh0pHic1uFEXra8S54ekSbLX0RSyqSnZeWzcbI1tOvHwPDJVtpvQzFMFtd2536RBfuVlFH9LmQ-UOHCCDlVJbBZ26T7mAGAhwx7rrMu3vJalQYN21Mww8f5yO22QTLnnOHsmVg4XLu4C97P-CsG9GFllle0g3FnVhV99MnsRx2zImOULzzCHKua0gJ6mKKeV2i_anPdVv1FuVvTIHbm0rji7FGdw7RYT6rS5cJPZIJKfXylmGk_lfTl1q1xM8eRcK5Ew"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-[16px] leading-6 text-on-surface">WalletConnect</p>
                    <p className="text-[14px] leading-5 text-on-surface-variant/60">Escanear QR Code</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">link</span>
              </button>
            </div>
          </div>

          <button className="w-full glass-panel p-4 rounded-xl text-error font-semibold text-[18px] leading-6 text-center border border-error/20 hover:bg-error/5 transition-colors">
            Encerrar Sessão
          </button>

          <div className="py-6 text-center">
            <p className="text-[12px] font-bold tracking-widest text-on-surface-variant/30 uppercase">AttnPay Ecosystem v2.4.0</p>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Settings;