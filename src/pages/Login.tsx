import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col relative overflow-hidden circuit-bg">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]" />

      <header className="bg-surface/60 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(108,92,231,0.2)] flex justify-between items-center px-container-margin py-4 fixed top-0 w-full z-50">
        <div className="flex items-center gap-2">
          <img 
            alt="AttnPay Logo" 
            className="w-10 h-10 object-contain rounded-full" 
            src="https://lh3.googleusercontent.com/aida/ADBb0ui4-rG_SkLvEVF2ayng_rDz3LghNi1OMQ3ApHArn7st7mPT4mUhRHZVqaUpg5RK9pTxf8-rug1pD-r35869S58sFNgXTQWVgFmI8Q_GPy8GehWSzTA_UblKjps_5gcw9yWLHfyypPXEpuQbY_d37dbvgmKEtxIHmiUddz3sMgILE4F8H_dnvvM_wyOnUP5K3chbplAdURRXlEA8ChlJ4P5lJjS_C1WX_ht44pKmUx6B3Ja1XamwsTAy2dVJhXoaUw_1Z8GCpHuUNQ"
          />
          <span className="text-[32px] font-bold leading-[40px] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-secondary-container to-secondary">AttnPay</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-on-surface-variant/70 hover:bg-white/10 p-2 rounded-full transition-colors active:scale-95">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-container-margin pt-32 pb-16">
        <div className="w-full max-w-md">
          <div className="glass-panel rounded-xl p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="mb-6">
                <h1 className="text-[24px] font-semibold leading-[32px] text-on-surface tracking-[-0.01em] mb-1">Bem-vindo de volta</h1>
                <p className="text-[14px] leading-5 text-on-surface-variant">Acesse o núcleo do sistema com sua credencial.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[12px] font-bold tracking-wider text-on-surface-variant block uppercase">E-MAIL</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-secondary-container transition-colors">alternate_email</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-surface-container-lowest border border-white/10 rounded-lg py-3 pl-11 pr-4 text-[16px] leading-6 text-on-surface placeholder:text-outline/50 focus:outline-none focus:ring-1 focus:ring-secondary-container transition-all"
                      placeholder="nome@exemplo.com"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-end">
                    <label className="text-[12px] font-bold tracking-wider text-on-surface-variant block uppercase">SENHA</label>
                    <button 
                      onClick={() => navigate('/forgot-password')}
                      className="text-[10px] font-bold tracking-wider text-primary hover:text-secondary transition-colors"
                    >
                      ESQUECEU A SENHA?
                    </button>
                  </div>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-secondary-container transition-colors">lock</span>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-surface-container-lowest border border-white/10 rounded-lg py-3 pl-11 pr-12 text-[16px] leading-6 text-on-surface placeholder:text-outline/50 focus:outline-none focus:ring-1 focus:ring-secondary-container transition-all"
                      placeholder="••••••••"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors"
                    >
                      <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between py-1">
                  <div className="flex items-center gap-2">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="sr-only peer" 
                      />
                      <div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white/40 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container peer-checked:after:bg-white neon-glow-secondary"></div>
                    </label>
                    <span className="text-[14px] leading-5 text-on-surface-variant">Lembrar-me</span>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary-container hover:bg-primary py-3 rounded-lg text-[18px] font-semibold leading-6 text-on-primary-container transition-all neon-glow-primary active:scale-95 flex items-center justify-center gap-2"
                >
                  Acessar minha conta
                  <span className="material-symbols-outlined">login</span>
                </button>
              </form>

              <div className="flex items-center gap-4 my-6">
                <div className="h-[1px] flex-grow bg-white/10" />
                <span className="text-[12px] font-bold tracking-wider text-outline/60 shrink-0">OU CONTINUE COM</span>
                <div className="h-[1px] flex-grow bg-white/10" />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <button className="flex items-center justify-center py-2 px-4 glass-panel rounded-lg hover:bg-white/10 transition-colors group">
                  <img 
                    alt="Google" 
                    className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkRhjGF0isTiDg1jZ3SU21_ebPd0nN7c2hpHRd7tNIAOe9Haaw0hMf4oogzYU0AoZRLdY7n_KDO-PyMYCnC7SQbehZx-gGDMLiBbby1NDPJ5rSkKH_Czsh01guMVknTbnQOfSFIgsVIxmxRJhxvfo0XJXI9vf0Fgrm8-XgSgOIwXRBZJTrSmjn7dmGDyD1wqbJJqBgxCfb2kel64qx61ahLG63t4E6AwubrEmeYGyLbMJW3fxUp6zrMVWje2HfnGqRZ_j2rX12DRdW" 
                  />
                </button>
                <button className="flex items-center justify-center py-2 px-4 glass-panel rounded-lg hover:bg-white/10 transition-colors group">
                  <span className="material-symbols-outlined text-on-surface/70 group-hover:text-on-surface transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>ios</span>
                </button>
                <button className="flex items-center justify-center py-2 px-4 glass-panel rounded-lg hover:bg-white/10 transition-colors group">
                  <svg className="w-6 h-6 fill-on-surface/70 group-hover:fill-on-surface transition-colors" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </button>
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
          </div>

          <div className="mt-6 flex justify-center gap-2 flex-wrap">
            <div className="flex items-center gap-1 px-4 py-1 bg-surface-container-high/40 rounded-full border border-white/5">
              <span className="material-symbols-outlined text-[14px] text-secondary">verified_user</span>
              <span className="text-[10px] font-bold tracking-wider text-outline">SECURE AUTHENTICATION V2.0</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-1 bg-surface-container-high/40 rounded-full border border-white/5">
              <span className="material-symbols-outlined text-[14px] text-outline">language</span>
              <select className="bg-transparent border-none text-[10px] text-outline font-bold tracking-wider focus:ring-0 p-0 cursor-pointer">
                <option className="bg-surface-container-high text-on-surface" value="pt-br">PT-BR</option>
                <option className="bg-surface-container-high text-on-surface" value="en">EN</option>
              </select>
            </div>
          </div>
        </div>
      </main>

      <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-3 bg-surface-container-low/40 backdrop-blur-2xl border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] md:hidden">
        <button className="flex flex-col items-center justify-center text-on-surface-variant/60 p-3 hover:text-primary transition-all duration-300">
          <span className="material-symbols-outlined">grid_view</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant/60 p-3 hover:text-primary transition-all duration-300">
          <span className="material-symbols-outlined">insights</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant/60 p-3 hover:text-primary transition-all duration-300">
          <span className="material-symbols-outlined">add_circle</span>
        </button>
        <button className="flex flex-col items-center justify-center text-on-surface-variant/60 p-3 hover:text-primary transition-all duration-300">
          <span className="material-symbols-outlined">layers</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-primary/20 text-secondary shadow-[0_0_15px_rgba(0,217,255,0.4)] rounded-full p-3 active:scale-90 transition-all duration-300">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
        </button>
      </nav>
    </div>
  );
};

export default Login;