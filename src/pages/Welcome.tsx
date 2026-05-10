import { useNavigate } from 'react-router-dom';
import Button from '@/components/common/Button';
import GlassCard from '@/components/common/GlassCard';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#13121b] flex flex-col items-center justify-center p-6">
      <div className="text-6xl mb-6">👁️</div>
      <h1 className="text-3xl font-bold text-white mb-2">AttnPay</h1>
      <p className="text-[rgba(255,255,255,0.7)] mb-8">Sua atenção, seu poder.</p>

      <GlassCard className="w-full max-w-sm p-6 space-y-4">
        <Button 
          variant="primary" 
          className="w-full"
          onClick={() => navigate('/login')}
        >
          Entrar
        </Button>
        <Button 
          variant="secondary" 
          className="w-full"
          onClick={() => navigate('/signup')}
        >
          Cadastrar
        </Button>
      </GlassCard>

      <p className="mt-8 text-[12px] text-[rgba(255,255,255,0.5)]">
        Ao continuar, você aceita nossos Termos de Uso
      </p>
    </div>
  );
};

export default Welcome;