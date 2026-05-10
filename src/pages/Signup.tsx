import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '@/components/common/Input';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) return;
    setLoading(true);
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  const passwordStrength = [
    formData.password.length >= 6,
    /[A-Z]/.test(formData.password),
    /[0-9]/.test(formData.password),
    /[^A-Za-z0-9]/.test(formData.password),
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-background text-on-surface font-sans flex flex-col overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      <style>{`
        body {
          background-color: #13121b;
          background-image: radial-gradient(circle at 50% -20%, #2900a0 0%, transparent 50%),
                            radial-gradient(circle at 0% 100%, #003641 0%, transparent 40%);
          background-attachment: fixed;
        }
      `}</style>

      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-container-margin py-4 bg-surface/60 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(108,92,231,0.2)]">
        <div className="flex items-center gap-2">
          <img 
            alt="AttnPay Logo" 
            className="w-8 h-8 rounded-full object-cover border border-primary/30 shadow-[0_0_10px_rgba(198,191,255,0.3)]" 
            src="https://lh3.googleusercontent.com/aida/ADBb0ui4-rG_SkLvEVF2ayng_rDz3LghNi1OMQ3ApHArn7st7mPT4mUhRHZVqaUpg5RK9pTxf8-rug1pD-r35869S58sFNgXTQWVgFmI8Q_GPy8GehWSzTA_UblKjps_5gcw9yWLHfyypPXEpuQbY_d37dbvgmKEtxIHmiUddz3sMgILE4F8H_dnvvM_wyOnUP5K3chbplAdURRXlEA8ChlJ4P5lJjS_C1WX_ht44pKmUx6B3Ja1XamwsTAy2dVJhXoaUw_1Z8GCpHuUNQ" 
          />
          <span className="text-[32px] font-bold leading-[40px] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-container to-secondary-container">AttnPay</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 px-2 py-1 rounded-full bg-surface-container-high/50 border border-white/5 hover:bg-white/10 transition-colors text-[12px] font-bold tracking-wider">
            <span className="text-primary">PT-BR</span>
            <span className="opacity-30">|</span>
            <span className="text-on-surface-variant">EN</span>
          </button>
          <span className="material-symbols-outlined text-primary hover:bg-white/10 transition-colors p-2 rounded-full cursor-pointer">notifications</span>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-container-margin pt-32 pb-8 relative">
        <div className="absolute inset-0 pointer-events-none opacity-20 flex justify-center items-center overflow-hidden">
          <div className="w-[800px] h-[800px] bg-cover bg-center mix-blend-screen grayscale" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida/ADBb0ui4-rG_SkLvEVF2ayng_rDz3LghNi1OMQ3ApHArn7st7mPT4mUhRHZVqaUpg5RK9pTxf8-rug1pD-r35869S58sFNgXTQWVgFmI8Q_GPy8GehWSzTA_UblKjps_5gcw9yWLHfyypPXEpuQbY_d37dbvgmKEtxIHmiUddz3sMgILE4F8H_dnvvM_wyOnUP5K3chbplAdURRXlEA8ChlJ4P5lJjS_C1WX_ht44pKmUx6B3Ja1XamwsTAy2dVJhXoaUw_1Z8GCpHuUNQ')` }} />
        </div>

        <div className="w-full max-w-md z-10">
          <form onSubmit={handleSubmit} className="glass-panel p-6 rounded-xl shadow-2xl relative border-l-4 border-primary-container">
            <div className="flex flex-col items-center mb-8 text-center">
              <div className="w-16 h-16 rounded-xl bg-surface-container-highest flex items-center justify-center mb-4 border border-white/10 neon-glow-primary overflow-hidden">
                <img 
                  alt="Logo" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida/ADBb0ui4-rG_SkLvEVF2ayng_rDz3LghNi1OMQ3ApHArn7st7mPT4mUhRHZVqaUpg5RK9pTxf8-rug1pD-r35869S58sFNgXTQWVgFmI8Q_GPy8GehWSzTA_UblKjps_5gcw9yWLHfyypPXEpuQbY_d37dbvgmKEtxIHmiUddz3sMgILE4F8H_dnvvM_wyOnUP5K3chbplAdURRXlEA8ChlJ4P5lJjS_C1WX_ht44pKmUx6B3Ja1XamwsTAy2dVJhXoaUw_1Z8GCpHuUNQ"
                />
              </div>
              <h1 className="text-[32px] font-bold leading-[40px] tracking-tight text-on-surface mb-1">AttnPay</h1>
              <p className="text-[14px] leading-5 text-on-surface-variant">Crie sua conta para começar a operar</p>
            </div>

            <div className="space-y-6">
              <Input
                label="Nome Completo"
                icon="person"
                placeholder="Ex: João Silva"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />

              <Input
                label="Email"
                icon="alternate_email"
                type="email"
                placeholder="nome@exemplo.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />

              <div className="space-y-1">
                <Input
                  label="Senha"
                  icon="lock"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <div className="pt-2 px-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-bold tracking-wider text-on-surface-variant uppercase">Força da Senha</span>
                    <span className="text-[10px] font-bold tracking-wider text-secondary-container uppercase">
                      {passwordStrength === 1 ? 'Fraca' : passwordStrength === 2 ? 'Média' : passwordStrength === 3 ? 'Boa' : passwordStrength === 4 ? 'Segura' : ''}
                    </span>
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full flex gap-1">
                    <div className={`h-full w-1/4 rounded-full ${passwordStrength >= 1 ? 'bg-secondary-container neon-glow-secondary' : 'bg-white/10'}`} />
                    <div className={`h-full w-1/4 rounded-full ${passwordStrength >= 2 ? 'bg-secondary-container neon-glow-secondary' : 'bg-white/10'}`} />
                    <div className={`h-full w-1/4 rounded-full ${passwordStrength >= 3 ? 'bg-secondary-container neon-glow-secondary' : 'bg-white/10'}`} />
                    <div className={`h-full w-1/4 rounded-full ${passwordStrength >= 4 ? 'bg-secondary-container neon-glow-secondary' : 'bg-white/10'}`} />
                  </div>
                </div>
              </div>

              <Input
                label="Confirmar Senha"
                icon="verified_user"
                type="password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
              />

              <div className="flex items-start gap-4 pt-2">
                <div className="relative flex items-center h-5">
                  <input
                    className="w-5 h-5 rounded bg-surface-container-low border border-white/20 text-primary-container focus:ring-primary-container focus:ring-offset-background transition-all"
                    id="terms"
                    type="checkbox"
                    checked={terms}
                    onChange={(e) => setTerms(e.target.checked)}
                  />
                </div>
                <label className="text-[14px] leading-5 text-on-surface-variant" htmlFor="terms">
                  Eu aceito os <a className="text-secondary-container hover:underline" href="#">Termos de Uso</a> e a <a className="text-secondary-container hover:underline" href="#">Política de Privacidade</a>.
                </label>
              </div>

              <button
                type="submit"
                disabled={!terms || loading}
                className="w-full py-4 bg-primary-container text-on-primary-container font-semibold text-[18px] leading-6 rounded-xl neon-glow-primary transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Criando conta...' : 'Criar Conta'}
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>

              <div className="text-center pt-6">
                <p className="text-[14px] leading-5 text-on-surface-variant">
                  Já possui uma conta? <a className="text-primary font-semibold hover:underline" href="#" onClick={() => navigate('/login')}>Faça login</a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 my-8">
              <div className="h-px flex-grow bg-white/10" />
              <span className="text-[12px] font-bold tracking-wider text-on-surface-variant/40">OU ENTRE COM</span>
              <div className="h-px flex-grow bg-white/10" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="flex items-center justify-center gap-2 py-4 glass-panel rounded-lg hover:bg-white/10 transition-colors">
                <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWo9mY1W-jzX8D2f65o3k95airh5gn6y9EJg4bkwUg2qAqKkMoG7qUCKzI4ktIWG0TX_FUD7WO41TjcGoX3KEjs1GwTRALdSDxh014H4em4Fz7jxIAQcWuHPxX4YoRylc07Pe26OQcSEfJ2kyTv-keI50F4JLS5M2y4cW7ASncMGdmc_V0UIWmxwsIRWaPNOI9RwGrAEOcFXtcszay7BVygOcP9H_BOqczJZXEduNAMsUsWnPY5Gf5-BaV4UB3hXhcRP6XxEGM9Wbo" />
                <span className="text-[12px] font-bold tracking-wider">Google</span>
              </button>
              <button type="button" className="flex items-center justify-center gap-2 py-4 glass-panel rounded-lg hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-xl">ios</span>
                <span className="text-[12px] font-bold tracking-wider">Apple</span>
              </button>
            </div>
          </form>
        </div>
      </main>

      <footer className="py-8 px-container-margin text-center">
        <p className="text-[12px] font-bold tracking-widest text-on-surface-variant/30 uppercase">
          © 2024 AttnPay Ecosystem. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Signup;