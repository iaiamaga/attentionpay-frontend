import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '@/components/common/Loader';

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/welcome');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#13121b] flex flex-col items-center justify-center gap-4">
      <div className="text-4xl mb-4">👁️</div>
      <h1 className="text-2xl font-bold text-white">AttnPay</h1>
      <p className="text-[rgba(255,255,255,0.7)]">Sua atenção, seu poder.</p>
      <div className="mt-8">
        <Loader size="lg" />
      </div>
    </div>
  );
};

export default Loading;