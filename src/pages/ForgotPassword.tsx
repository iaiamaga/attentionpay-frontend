import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword] = useState(false);
  const [showConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  const passwordStrength = [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[0-9]/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ].filter(Boolean).length;

  const getStrengthLabel = () => {
    if (passwordStrength === 0) return '';
    if (passwordStrength === 1) return 'Fraca';
    if (passwordStrength === 2) return 'Média';
    if (passwordStrength === 3) return 'Boa';
    return 'Forte';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword && password.length >= 8) {
      setShowSuccess(true);
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col items-center justify-center p-container-margin relative">
      <div className="fixed top-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary-container/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-5%] left-[-5%] w-[350px] h-[350px] bg-secondary-container/10 rounded-full blur-[100px] pointer-events-none" />

      <main className="w-full max-w-[440px] z-10">
        <header className="flex items-center justify-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-secondary-container/30 shadow-lg neon-glow-secondary">
            <img 
              alt="AttnPay Logo" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida/ADBb0ui4-rG_SkLvEVF2ayng_rDz3LghNi1OMQ3ApHArn7st7mPT4mUhRHZVqaUpg5RK9pTxf8-rug1pD-r35869S58sFNgXTQWVgFmI8Q_GPy8GehWSzTA_UblKjps_5gcw9yWLHfyypPXEpuQbY_d37dbvgmKEtxIHmiUddz3sMgILE4F8H_dnvvM_wyOnUP5K3chbplAdURRXlEA8ChlJ4P5lJjS_C1WX_ht44pKmUx6B3Ja1XamwsTAy2dVJhXoaUw_1Z8GCpHuUNQ"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-[32px] font-bold leading-[40px] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-secondary-container to-primary">
              AttnPay
            </h1>
            <p className="text-[14px] leading-5 text-on-surface-variant/80 -mt-1">Secure Authentication</p>
          </div>
        </header>

        <div className="glass-panel p-6 rounded-xl shadow-2xl relative overflow-hidden">
          <div className="flex justify-end gap-2 mb-6">
            <button 
              onClick={() => setLanguage('pt')}
              className={`text-[12px] font-bold tracking-wider pb-1 px-1 ${language === 'pt' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant/50 hover:text-on-surface'}`}
            >
              PT
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`text-[12px] font-bold tracking-wider pb-1 px-1 ${language === 'en' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant/50 hover:text-on-surface'}`}
            >
              EN
            </button>
          </div>

          <div className="mb-6">
            <h2 className="text-[24px] font-semibold leading-[32px] text-on-surface tracking-[-0.01em]">Redefinir Senha</h2>
            <p className="text-[14px] leading-5 text-on-surface-variant/70 mt-1">
              Crie uma senha forte para proteger sua conta no ecossistema AttnPay.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[12px] font-bold tracking-widest text-on-surface-variant uppercase">
                Nova Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-surface-container-lowest border border-white/10 rounded-lg px-4 py-4 text-[16px] leading-6 text-on-surface focus:outline-none focus:border-secondary-container focus:ring-1 focus:ring-secondary-container transition-all placeholder:text-on-surface-variant/30"
                  placeholder="••••••••"
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 cursor-pointer hover:text-secondary-container transition-colors">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-bold tracking-wider text-on-surface-variant/60 uppercase">Força da Senha</span>
                <span className="text-[10px] font-bold tracking-wider text-secondary-container uppercase">{getStrengthLabel()}</span>
              </div>
              <div className="flex gap-1 h-1.5 w-full">
                {[1, 2, 3, 4].map((level) => (
                  <div 
                    key={level}
                    className={`flex-1 rounded-full ${
                      level <= passwordStrength 
                        ? 'bg-secondary-container neon-glow-secondary' 
                        : 'bg-white/10'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[12px] font-bold tracking-widest text-on-surface-variant uppercase">
                Confirmar Senha
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-surface-container-lowest border border-white/10 rounded-lg px-4 py-4 text-[16px] leading-6 text-on-surface focus:outline-none focus:border-secondary-container focus:ring-1 focus:ring-secondary-container transition-all placeholder:text-on-surface-variant/30"
                  placeholder="••••••••"
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50">
                  check_circle
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-container text-on-primary-container text-[18px] font-semibold leading-6 py-4 rounded-lg flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all shadow-lg neon-glow-primary"
            >
              <span>Salvar e Acessar</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </form>

          {showSuccess && (
            <div className="absolute inset-0 bg-surface-container/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 z-20">
              <div className="w-20 h-20 bg-secondary-container/20 rounded-full flex items-center justify-center mb-6 border border-secondary-container/30">
                <span className="material-symbols-outlined text-secondary-container text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <h3 className="text-[24px] font-semibold leading-[32px] text-on-surface tracking-[-0.01em]">Sucesso!</h3>
              <p className="text-[16px] leading-6 text-on-surface-variant/80 mt-1 mb-8">
                Sua senha foi redefinida com sucesso no sistema AttnPay. Você já pode acessar sua conta.
              </p>
              <button 
                onClick={() => navigate('/dashboard')}
                className="bg-secondary-container text-on-secondary-container text-[18px] font-semibold leading-6 px-8 py-4 rounded-lg hover:brightness-110 transition-all"
              >
                Ir para o Dashboard
              </button>
            </div>
          )}
        </div>

        <footer className="mt-8 text-center space-y-4">
          <a 
            className="text-[12px] font-bold tracking-wider text-on-surface-variant/60 hover:text-primary transition-colors flex items-center justify-center gap-1" 
            href="#"
          >
            <span className="material-symbols-outlined text-lg">help</span>
            Precisa de ajuda com o acesso?
          </a>

          <div className="mt-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            <img 
              alt="Abstract cybersecurity concept" 
              className="w-full h-12 object-cover rounded-full" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC99GW3wyNm5qbvbG0VZWwsdD1U0gdaDGTq0RHti-e5t51IPE3RWHW3EcBriry41cT7B1nDMOKaPtNDr9cvL_xMy8WykPIvVEOl0K8LVSIAaGsk27Cbe2kQ7m0uS2z740RyGjxyfAKGSeelnIADKALMJaufNFb6-KZfmr6qy9jlkrKEQejUpCdosRDj7-nJILeqZAoTcsW7tt9MedOP8HkpLhhkkVOoXmoor1yG0d_cxw8DIt-98ihxdCFbSafcOGWYWCzkWrCsb8sV"
            />
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ForgotPassword;