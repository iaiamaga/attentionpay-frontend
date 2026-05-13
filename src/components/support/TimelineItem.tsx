import GlassCard from '@/components/common/GlassCard';

interface TimelineItemProps {
  category: string;
  time: string;
  title: string;
  description: string;
  icon: string;
  color?: string;
  borderColor?: string;
  borderLeft?: string;
  hasButton?: boolean;
  dimmed?: boolean;
}

const TimelineItem = ({ 
  category, 
  time, 
  title, 
  description, 
  icon,
  color = 'text-on-surface-variant',
  borderColor = 'border-white/20',
  borderLeft,
  hasButton = false,
  dimmed = false
}: TimelineItemProps) => {
  return (
    <div className="relative">
      <div className={`absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-surface-container-high border ${borderColor} flex items-center justify-center ${
        color === 'text-secondary-container' ? 'neon-glow-secondary' : 
        color === 'text-primary' ? 'neon-glow-primary' : ''
      }`}>
        <span className={`material-symbols-outlined ${color} text-lg`}>{icon}</span>
      </div>
      <GlassCard className={`p-4 rounded-xl ${borderLeft || ''} ${dimmed ? 'opacity-80' : ''}`}>
        <div className="flex justify-between items-start mb-1">
          <span className={`text-[12px] font-bold tracking-wider uppercase ${
            color === 'text-secondary-container' ? 'text-secondary-container' : 
            color === 'text-primary' ? 'text-primary' : 'text-on-surface-variant'
          }`}>
            {category}
          </span>
          <span className="text-[10px] font-bold tracking-wider text-on-surface-variant/50">{time}</span>
        </div>
        <h4 className="text-[18px] font-semibold leading-6 text-on-surface">{title}</h4>
        <p className="text-[14px] leading-5 text-on-surface-variant mt-1">{description}</p>
        {hasButton && (
          <div className="mt-4 flex gap-2">
            <button className="bg-white/5 hover:bg-white/10 px-4 py-1 rounded-full text-[12px] font-bold tracking-wider transition-colors border border-white/10">
              DETALHES
            </button>
          </div>
        )}
      </GlassCard>
    </div>
  );
};

export default TimelineItem;