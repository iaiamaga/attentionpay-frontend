import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';

const Settings = () => {
  const navigate = useNavigate();

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

          <button 
            onClick={() => navigate(-1)}
            className="w-full bg-primary-container text-on-primary-container p-4 rounded-xl font-semibold text-[18px] leading-6 text-center hover:brightness-110 transition-all"
          >
            Concluir
          </button>

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