import { useState, useEffect } from 'react';
import GlassCard from '@/components/common/GlassCard';
import { useAuth, useI18n } from '@/context';
import logoImage from '@/assets/logo-attnpay.png';

interface WelcomeCardProps {
  uptime?: string;
  consumption?: string;
}

const WelcomeCard = ({ }: WelcomeCardProps) => {
  const { user } = useAuth();
  const { t } = useI18n();
  const userName = user?.name?.split(' ')[0] || 'Alex';

  const [currentDate, setCurrentDate] = useState<string>('');
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      
      const day = now.getDate().toString().padStart(2, '0');
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const year = now.getFullYear();
      setCurrentDate(`${day}/${month}/${year}`);
      
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <GlassCard className="p-6 flex flex-col justify-between min-h-[160px] relative overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-[24px] font-semibold leading-[32px] text-on-surface tracking-[-0.01em]">
          {t('common.welcome')}, {userName} 👋
        </h1>
        <p className="text-[16px] leading-6 text-on-surface-variant mt-1">
          {t('common.welcomeBack')}
        </p>
      </div>
      <div className="flex gap-6 mt-6 relative z-10">
        <div>
          <span className="text-[12px] font-bold tracking-wider text-secondary uppercase block mb-1">{t('common.date')}</span>
          <span className="text-[18px] font-semibold leading-6 text-on-surface">{currentDate}</span>
        </div>
        <div>
          <span className="text-[12px] font-bold tracking-wider text-secondary uppercase block mb-1">{t('common.time')}</span>
          <span className="text-[18px] font-semibold leading-6 text-on-surface">{currentTime}</span>
        </div>
      </div>
      <div className="absolute top-0 right-0 h-full w-1/3 opacity-20 pointer-events-none">
        <img 
          className="h-full w-full object-cover grayscale" 
          src={logoImage}
          alt=""
        />
      </div>
    </GlassCard>
  );
};

export default WelcomeCard;