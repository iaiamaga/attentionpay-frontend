import GlassCard from '@/components/common/GlassCard';

interface WeeklyData {
  day: string;
  height: string;
  active?: boolean;
}

interface WeeklyChartProps {
  data?: WeeklyData[];
  totalPoints?: number;
}

const WeeklyChart = ({ 
  data, 
  totalPoints = 574 
}: WeeklyChartProps) => {
  const defaultData: WeeklyData[] = [
    { day: 'SEG', height: 'h-16', active: false },
    { day: 'TER', height: 'h-20', active: false },
    { day: 'QUA', height: 'h-24', active: true },
    { day: 'QUI', height: 'h-14', active: false },
    { day: 'SEX', height: 'h-[72px]', active: false },
    { day: 'SÁB', height: 'h-10', active: false },
    { day: 'DOM', height: 'h-8', active: false },
  ];

  const chartData = data || defaultData;

  return (
    <GlassCard className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[18px] font-semibold leading-6">Visão Semanal</h3>
        <div className="flex items-center gap-2">
          <span className="text-[12px] font-bold tracking-wider text-on-surface-variant">Total:</span>
          <span className="text-[16px] font-bold text-primary">{totalPoints} pts</span>
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