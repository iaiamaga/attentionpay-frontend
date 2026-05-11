import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Verification = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(59);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      const digits = value.replace(/\D/g, '').slice(0, 6).split('');
      const newCode = [...code];
      digits.forEach((digit, i) => {
        if (index + i < 6) {
          newCode[index + i] = digit;
        }
      });
      setCode(newCode);
      const nextIndex = Math.min(index + digits.length, 5);
      inputRefs.current[nextIndex]?.focus();
      return;
    }

    if (/^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const fullCode = code.join('');
    if (fullCode.length === 6) {
      navigate('/dashboard');
    }
  };

  const handleResend = () => {
    setTimeLeft(59);
    setCode(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
  };

  const formatTime = (seconds: number) => {
    return `00:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col antialiased">
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(at 0% 0%, rgba(108, 92, 231, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(0, 217, 255, 0.1) 0px, transparent 50%)'
        }}
      />

      <header className="w-full flex justify-between items-center px-container-margin py-4 bg-surface/60 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(108,92,231,0.2)] relative z-10">
        <div className="flex items-center gap-2">
          <img 
            alt="AttnPay Logo" 
            className="w-10 h-10 rounded-full object-cover border border-primary/30 shadow-[0_0_10px_rgba(108,92,231,0.3)]" 
            src="https://lh3.googleusercontent.com/aida/ADBb0ui4-rG_SkLvEVF2ayng_rDz3LghNi1OMQ3ApHArn7st7mPT4mUhRHZVqaUpg5RK9pTxf8-rug1pD-r35869S58sFNgXTQWVgFmI8Q_GPy8GehWSzTA_UblKjps_5gcw9yWLHfyypPXEpuQbY_d37dbvgmKEtxIHmiUddz3sMgILE4F8H_dnvvM_wyOnUP5K3chbplAdURRXlEA8ChlJ4P5lJjS_C1WX_ht44pKmUx6B3Ja1XamwsTAy2dVJhXoaUw_1Z8GCpHuUNQ"
          />
          <h1 className="text-[32px] font-bold leading-[40px] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-container to-secondary-container">
            AttnPay
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 text-on-surface-variant/70 hover:text-primary transition-colors text-[12px] font-bold tracking-wider">
            <span className="material-symbols-outlined text-lg">language</span> EN / PT
          </button>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-container-margin relative z-10">
        <div className="w-full max-w-md glass-panel rounded-xl p-6 space-y-8 neon-glow-secondary relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-container/10 border border-secondary/20 mb-4">
              <span className="material-symbols-outlined text-secondary text-[32px]">mark_email_unread</span>
            </div>
            <h2 className="text-[24px] font-semibold leading-[32px] text-on-surface tracking-[-0.01em]">Verifique seu E-mail</h2>
            <p className="text-[14px] leading-5 text-on-surface-variant/80">
              Enviamos um código de 6 dígitos para o seu endereço de e-mail cadastrado. Por favor, insira-o abaixo para continuar.
            </p>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="flex justify-between gap-3">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => { inputRefs.current[index] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-14 text-center text-[24px] font-bold rounded-lg bg-surface-container border border-white/10 text-secondary focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none transition-all duration-300 shadow-inner"
                  placeholder="0"
                />
              ))}
            </div>

            <div className="flex items-center justify-between text-[12px] font-bold tracking-wider px-1">
              <span className="text-on-surface-variant/60 uppercase">Expira em</span>
              <div className="flex items-center gap-1 text-secondary">
                <span className="material-symbols-outlined text-base">schedule</span>
                <span>{formatTime(timeLeft)}</span>
              </div>
            </div>

            <button
              onClick={handleVerify}
              className="w-full py-4 px-4 bg-primary-container text-on-primary-container rounded-lg text-[18px] font-semibold leading-6 neon-glow-primary hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">verified</span>
              Verificar
            </button>
          </div>

          <div className="pt-4 border-t border-white/10 text-center">
            <p className="text-[14px] leading-5 text-on-surface-variant">
              Não recebeu o código? 
              <button 
                onClick={handleResend}
                className="text-secondary font-bold hover:underline ml-1 transition-all"
              >
                Reenviar agora
              </button>
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
          <div className="glass-panel p-4 rounded-xl flex items-center gap-3 border border-white/5">
            <span className="material-symbols-outlined text-primary-container">shield</span>
            <span className="text-[12px] font-bold tracking-wider text-on-surface-variant/70 uppercase">Criptografia de ponta</span>
          </div>
          <div className="glass-panel p-4 rounded-xl flex items-center gap-3 border border-white/5">
            <span className="material-symbols-outlined text-secondary-container">lock</span>
            <span className="text-[12px] font-bold tracking-wider text-on-surface-variant/70 uppercase">Pagamentos Seguros</span>
          </div>
          <div className="glass-panel p-4 rounded-xl flex items-center gap-3 border border-white/5">
            <span className="material-symbols-outlined text-tertiary">fingerprint</span>
            <span className="text-[12px] font-bold tracking-wider text-on-surface-variant/70 uppercase">Identidade protegida</span>
          </div>
        </div>
      </main>

      <footer className="w-full p-6 text-center relative z-10">
        <p className="text-[12px] font-bold tracking-widest text-on-surface-variant/40 uppercase">
          © 2024 NEON-CORE System Architecture. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Verification;