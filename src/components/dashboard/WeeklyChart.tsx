import GlassCard from '@/components/common/GlassCard';
import { useI18n } from '@/context';

interface WeeklyData {
  day: string;
  height: string;
  active?: boolean;
}

interface WeeklyChartProps {
  data?: WeeklyData[];
  totalEvents?: number;
}

const WeeklyChart = ({ 
  data, 
  totalEvents = 574 
}: WeeklyChartProps) => {
  const { t } = useI18n();
  const today = new Date().getDay();
  const weekDays = t('common.weekDays') as unknown as string[];
  
  const dayToIndex: Record<number, number> = {
    0: 6,
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 5,
  };
  
  const activeIndex = dayToIndex[today];

  const defaultData: WeeklyData[] = [
    { day: weekDays[0], height: 'h-16', active: activeIndex === 0 },
    { day: weekDays[1], height: 'h-20', active: activeIndex === 1 },
    { day: weekDays[2], height: 'h-24', active: activeIndex === 2 },
    { day: weekDays[3], height: 'h-14', active: activeIndex === 3 },
    { day: weekDays[4], height: 'h-[72px]', active: activeIndex === 4 },
    { day: weekDays[5], height: 'h-10', active: activeIndex === 5 },
    { day: weekDays[6], height: 'h-8', active: activeIndex === 6 },
  ];

  const chartData = data || defaultData;

  return (
    <GlassCard className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[18px] font-semibold leading-6">{t('common.weeklyView')}</h3>
        <div className="flex items-center gap-2">
          <span className="text-[12px] font-bold tracking-wider text-on-surface-variant">{t('common.total')}:</span>
          <span className="text-[16px] font-bold text-primary">{totalEvents} {t('common.events')}</span>
        </div>
      </div>
      
      <div className="flex justify-between items-end gap-2 h-32">
        {chartData.map((item, index) => (
          <button 
            key={index} 
            className="flex flex-col items-center gap-2 flex-1 group"
          >
            <div 
              className={`w-full rounded-t-sm transition-colors ${
                item.active 
                  ? 'bg-primary/40 h-24 border-t-2 border-primary' 
                  : 'bg-white/5 group-hover:bg-primary/20'
              } ${item.height}`}
            />
            <span className={`text-[10px] font-bold ${item.active ? 'text-primary' : 'text-on-surface-variant'}`}>
              {item.day}
            </span>
          </button>
        ))}
      </div>
    </GlassCard>
  );
};

export default WeeklyChart;