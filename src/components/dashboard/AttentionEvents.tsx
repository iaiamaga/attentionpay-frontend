import GlassCard from '@/components/common/GlassCard';
import { useI18n } from '@/context';

const AttentionEvents = () => {
  const { t } = useI18n();
  const events = 49;
  const scoreEvents = events / 10;
  
  const hours = events > 0 
    ? `${Math.floor(events * 0.1)}h ${(events * 3) % 60}m`
    : '0h 0m';

  const radius = 88;
  const circumference = 2 * Math.PI * radius;
  const progress = (scoreEvents / 100) * circumference;
  const offset = circumference - progress;

  return (
    <GlassCard className="p-6 relative overflow-hidden">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-[18px] font-semibold leading-6 text-on-surface-variant uppercase tracking-wider">{t('common.attentionEvents')}</h2>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center py-4">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full transform -rotate-90">
            <circle 
              className="text-white/5" 
              cx="96" 
              cy="96" 
              fill="transparent" 
              r={radius} 
              stroke="currentColor" 
              strokeWidth="8"
            />
            <circle 
              className="text-secondary-container" 
              cx="96" 
              cy="96" 
              fill="transparent" 
              r={radius} 
              stroke="currentColor" 
              strokeDasharray={circumference} 
              strokeDashoffset={offset} 
              strokeLinecap="round" 
              strokeWidth="8"
              style={{ transition: 'stroke-dashoffset 0.5s ease' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[48px] font-bold text-on-surface">{scoreEvents}%</span>
            <span className="text-[12px] font-bold tracking-wider text-on-surface-variant">{t('common.events')}</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mt-6 border-t border-white/5 pt-6">
        <div className="text-center border-r border-white/5">
          <span className="text-[12px] font-bold tracking-wider text-on-surface-variant block mb-1">{t('common.hours')}</span>
          <span className="text-[18px] font-bold text-on-surface">{hours}</span>
        </div>
        <div className="text-center border-r border-white/5">
          <span className="text-[12px] font-bold tracking-wider text-on-surface-variant block mb-1">{t('common.events')}</span>
          <span className="text-[18px] font-bold text-primary">{events}</span>
        </div>
        <div className="text-center">
          <span className="text-[12px] font-bold tracking-wider text-on-surface-variant block mb-1">{t('common.gains')}</span>
          <span className="text-[18px] font-bold text-secondary-container">$ 8</span>
        </div>
      </div>
    </GlassCard>
  );
};

export default AttentionEvents;