import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/ui/Logo';

const Loading = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    const timer = setTimeout(() => {
      navigate('/welcome');
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col overflow-hidden relative">
      <main className="relative flex-grow flex flex-col items-center justify-center p-container-margin circuit-bg min-h-screen">
        <div className="absolute inset-0 z-0 opacity-40 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-container/20 via-transparent to-secondary-container/20" />
          <div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent blur-[100px]" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full animate-in fade-in zoom-in duration-1000">
          <div className="mb-xl relative group">
            <div className="absolute inset-0 bg-secondary-container/20 blur-3xl rounded-full scale-150 group-hover:scale-[1.75] transition-transform duration-700" />
            <div className="relative w-48 h-48 glass-panel rounded-full flex items-center justify-center border-white/20 shadow-[0_0_50px_rgba(0,217,255,0.2)]">
              <Logo variant="icon" size="lg" />
            </div>
          </div>

          <div className="space-y-sm">
            <h1 className="text-[32px] font-bold leading-[40px] tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-secondary to-secondary-container">
              AttnPay
            </h1>
            <p className="text-[18px] mb-8 font-semibold leading-6 text-on-surface-variant/80 tracking-wide">
              Sua atenção, seu poder.
            </p>
          </div>

          <div className="mt-xl w-full max-w-[240px] px-sm">
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-secondary-container neon-glow-secondary rounded-full transition-all duration-300 ease-out" 
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-md flex justify-between items-center text-[12px] font-bold tracking-wider text-on-surface-variant/60">
              <span>Sincronizando...</span>
              <span>{progress}%</span>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed inset-0 pointer-events-none bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
    </div>
  );
};

export default Loading;