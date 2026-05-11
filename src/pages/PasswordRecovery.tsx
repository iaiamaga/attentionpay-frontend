import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordRecovery = () => {
  const navigate = useNavigate();
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
        <div className="flex items-center gap-2">
          <img 
            alt="AttnPay Logo" 
            className="w-8 h-8 rounded-full object-cover border border-primary/30 shadow-[0_0_10px_rgba(198,191,255,0.3)]" 
            src="https://lh3.googleusercontent.com/aida/ADBb0ui4-rG_SkLvEVF2ayng_rDz3LghNi1OMQ3ApHArn7st7mPT4mUhRHZVqaUpg5RK9pTxf8-rug1pD-r35869S58sFNgXTQWVgFmI8Q_GPy8GehWSzTA_UblKjps_5gcw9yWLHfyypPXEpuQbY_d37dbvgmKEtxIHmiUddz3sMgILE4F8H_dnvvM_wyOnUP5K3chbplAdURRXlEA8ChlJ4P5lJjS_C1WX_ht44pKmUx6B3Ja1XamwsTAy2dVJhXoaUw_1Z8GCpHuUNQ"
          />
          <span className="text-[32px] font-bold leading-[40px] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-secondary-container to-primary-container">AttnPay</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 px-2 py-1 rounded-full bg-surface-container-high/50 border border-white/5 hover:bg-white/10 transition-colors text-[12px] font-bold tracking-wider">
            <span className="text-primary">PT</span>
            <span className="opacity-30">|</span>
            <span className="text-on-surface-variant">EN</span>
          </button>
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
            VOLTAR PARA LOGIN
          </a>

          <section className="glass-panel rounded-xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
            <header className="mb-8">
              <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mb-4 border border-primary/20 neon-glow-primary">
                <span className="material-symbols-outlined text-primary text-[32px]">lock_reset</span>
              </div>
              <h2 className="text-[24px] font-semibold leading-[32px] text-on-surface tracking-[-0.01em] mb-1">Esqueceu a senha?</h2>
              <p className="text-[14px] leading-5 text-on-surface-variant">
                Insira o e-mail associado à sua conta AttnPay e enviaremos as instruções de redefinição.
              </p>
            </header>

            {sent ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-secondary-container/20 flex items-center justify-center mx-auto mb-4 border border-secondary-container/30">
                  <span className="material-symbols-outlined text-secondary-container text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>mark_email_read</span>
                </div>
                <h3 className="text-[24px] font-semibold leading-[32px] text-on-surface tracking-[-0.01em] mb-2">Email Enviado!</h3>
                <p className="text-[16px] leading-6 text-on-surface-variant mb-6">
                  Enviamos as instruções de recuperação para <span className="text-secondary font-semibold">{email}</span>. Verifique sua caixa de entrada.
                </p>
                <button 
                  onClick={() => navigate('/login')}
                  className="w-full py-4 bg-primary-container text-on-primary-container text-[18px] font-semibold leading-6 rounded-lg neon-glow-primary hover:brightness-110 transition-all"
                >
                  Voltar para Login
                </button>
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <label className="text-[12px] font-bold tracking-wider text-on-surface-variant px-1 block uppercase">
                      E-MAIL DO USUÁRIO
                    </label>
                    <div className="relative group neon-border-focus transition-all duration-300 rounded-lg bg-surface-container-low border border-white/5">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/60 group-focus-within:text-secondary">mail</span>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent border-none py-4 pl-12 pr-4 rounded-lg text-[16px] leading-6 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-0"
                        placeholder="nome@exemplo.com"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary-container text-on-primary-container text-[18px] font-semibold leading-6 rounded-lg shadow-[0_0_20px_rgba(108,92,231,0.2)] hover:shadow-[0_0_30px_rgba(108,92,231,0.4)] active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    Enviar Instruções
                    <span className="material-symbols-outlined text-xl">send</span>
                  </button>
                </form>

                <div className="flex items-center gap-4 my-6">
                  <div className="flex-grow h-[1px] bg-white/10" />
                  <span className="text-[12px] font-bold tracking-wider text-on-surface-variant/40">OU</span>
                  <div className="flex-grow h-[1px] bg-white/10" />
                </div>

                <button className="w-full py-4 glass-panel rounded-lg text-[18px] font-semibold leading-6 text-on-surface hover:bg-white/10 transition-colors active:scale-95">
                  Suporte Técnico
                </button>
              </>
            )}
          </section>

          <footer className="text-center space-y-4">
            <p className="text-[14px] leading-5 text-on-surface-variant/60">
              Problemas ao receber o código? <a className="text-secondary hover:underline" href="#">Tentar outro método</a>
            </p>
          </footer>
        </div>
      </main>

      <aside className="hidden lg:flex fixed right-10 top-1/2 -translate-y-1/2 w-1/3 flex-col gap-6 pointer-events-none opacity-40">
        <div className="glass-panel p-12 rounded-full aspect-square flex items-center justify-center border border-primary/20 relative overflow-hidden">
          <img 
            alt="Security Graphic" 
            className="w-64 h-64 object-contain relative z-10" 
            src="https://lh3.googleusercontent.com/aida/ADBb0ui4-rG_SkLvEVF2ayng_rDz3LghNi1OMQ3ApHArn7st7mPT4mUhRHZVqaUpg5RK9pTxf8-rug1pD-r35869S58sFNgXTQWVgFmI8Q_GPy8GehWSzTA_UblKjps_5gcw9yWLHfyypPXEpuQbY_d37dbvgmKEtxIHmiUddz3sMgILE4F8H_dnvvM_wyOnUP5K3chbplAdURRXlEA8ChlJ4P5lJjS_C1WX_ht44pKmUx6B3Ja1XamwsTAy2dVJhXoaUw_1Z8GCpHuUNQ"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
        </div>
      </aside>

      <footer className="p-6 text-center">
        <p className="text-[12px] font-bold tracking-widest text-on-surface-variant/40 uppercase">
          Secure Gateway • AttnPay Protocol v4.0
        </p>
      </footer>
    </div>
  );
};

export default PasswordRecovery;