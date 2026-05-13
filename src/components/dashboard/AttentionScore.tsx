import GlassCard from '@/components/common/GlassCard';

interface AttentionScoreProps {
  score: number;
  level?: string;
  hoursPerDay?: string;
  points?: string;
  gains?: string;
}

const AttentionScore = ({ 
  score = 82, 
  level = 'Diamante',
  hoursPerDay = '6.4h',
  points = '1,240',
  gains = '₿ 0.042'
}: AttentionScoreProps) => {
  const radius = 88;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 100) * circumference;
  const offset = circumference - progress;

  return (
    <GlassCard className="p-6 relative overflow-hidden">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-[18px] font-semibold leading-6 text-on-surface-variant uppercase tracking-wider">Attention Score</h2>
          <p className="text-[12px] text-secondary">Nível: {level}</p>
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
            <span className="text-[48px] font-bold text-on-surface">{score}</span>
            <span className="text-[12px] font-bold tracking-wider text-on-surface-variant">PONTOS</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mt-6 border-t border-white/5 pt-6">
        <div className="text-center border-r border-white/5">
          <span className="text-[12px] font-bold tracking-wider text-on-surface-variant block mb-1">Horas/Dia</span>
          <span className="text-[18px] font-bold text-on-surface">{hoursPerDay}</span>
        </div>
        <div className="text-center border-r border-white/5">
          <span className="text-[12px] font-bold tracking-wider text-on-surface-variant block mb-1">Pontos</span>
          <span className="text-[18px] font-bold text-primary">{points}</span>
        </div>
        <div className="text-center">
          <span className="text-[12px] font-bold tracking-wider text-on-surface-variant block mb-1">Ganhos</span>
          <span className="text-[18px] font-bold text-secondary-container">{gains}</span>
        </div>
      </div>
    </GlassCard>
  );
};

export default AttentionScore;