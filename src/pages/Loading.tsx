import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        return prev + 10;
      });
    }, 150);

    const timer = setTimeout(() => {
      navigate('/welcome');
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#13121b] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#6c5ce7] rounded-full opacity-20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00d9ff] rounded-full opacity-20 blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative mb-8">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#ffd700] to-[#b8860b] flex items-center justify-center shadow-[0_0_40px_rgba(255,215,0,0.3)]">
            <svg 
              viewBox="0 0 24 24" 
              className="w-14 h-14 text-[#13121b]"
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
          <div className="absolute -inset-2 rounded-2xl border border-[rgba(255,215,0,0.3)] animate-pulse" />
        </div>

        <h1 className="text-3xl font-bold text-white mb-2 tracking-wide">
          AttnPay
        </h1>
        <p className="text-base text-[rgba(255,255,255,0.7)] mb-10">
          Sua atenção, seu poder.
        </p>

        <div className="w-48 h-1 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#6c5ce7] to-[#00d9ff] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="mt-4 text-xs text-[rgba(255,255,255,0.5)]">
          Sincronizando...
        </p>
      </div>
    </div>
  );
};

export default Loading;