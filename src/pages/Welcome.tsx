import { useNavigate } from 'react-router-dom';
import Button from '@/components/common/Button';
import GlassCard from '@/components/common/GlassCard';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#13121b] flex flex-col items-center justify-center p-5 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#6c5ce7] rounded-full opacity-15 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#00d9ff] rounded-full opacity-15 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-sm">
        <div className="relative mb-8">
          <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#ffd700] to-[#b8860b] flex items-center justify-center shadow-[0_0_60px_rgba(255,215,0,0.4)]">
            <svg 
              viewBox="0 0 24 24" 
              className="w-16 h-16 text-[#13121b]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path 
                d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="absolute -inset-3 rounded-2xl border border-[rgba(255,215,0,0.2)]" />
        </div>

        <h1 className="text-[32px] font-bold text-white mb-2 tracking-wide">
          AttnPay
        </h1>
        <p className="text-base text-[rgba(255,255,255,0.7)] mb-10">
          Sua atenção, seu poder.
        </p>

        <GlassCard className="w-full p-6 space-y-4">
          <Button 
            variant="primary" 
            className="w-full py-3.5 text-base font-medium"
            onClick={() => navigate('/login')}
          >
            Entrar
          </Button>
          <Button 
            variant="secondary" 
            className="w-full py-3.5 text-base font-medium"
            onClick={() => navigate('/signup')}
          >
            Cadastrar
          </Button>
        </GlassCard>

        <p className="mt-8 text-xs text-[rgba(255,255,255,0.5)] text-center leading-relaxed">
          Ao continuar, você aceita nossos <span className="text-[#00d9ff]">Termos de Uso</span> e <span className="text-[#00d9ff]">Política de Privacidade</span>
        </p>
      </div>
    </div>
  );
};

export default Welcome;