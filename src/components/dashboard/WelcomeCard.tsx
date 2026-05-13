import GlassCard from '@/components/common/GlassCard';
import { useAuth } from '@/context';

interface WelcomeCardProps {
  uptime?: string;
  consumption?: string;
  focusChange?: string;
}

const WelcomeCard = ({ 
  uptime = '14d 08h 22m', 
  consumption = '1.2kW/h',
  focusChange = '12% maior que ontem'
}: WelcomeCardProps) => {
  const { user } = useAuth();
  const userName = user?.name?.split(' ')[0] || 'Alex';

  return (
    <GlassCard className="p-6 flex flex-col justify-between min-h-[160px] relative overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-[24px] font-semibold leading-[32px] text-on-surface tracking-[-0.01em]">
          Olá, {userName} 👋
        </h1>
        <p className="text-[16px] leading-6 text-on-surface-variant mt-1">
          Seu foco está {focusChange}.
        </p>
      </div>
      <div className="flex gap-6 mt-6 relative z-10">
        <div>
          <span className="text-[12px] font-bold tracking-wider text-secondary uppercase block mb-1">Uptime</span>
          <span className="text-[18px] font-semibold leading-6 text-on-surface">{uptime}</span>
        </div>
        <div>
          <span className="text-[12px] font-bold tracking-wider text-secondary uppercase block mb-1">Consumo</span>
          <span className="text-[18px] font-semibold leading-6 text-on-surface">{consumption}</span>
        </div>
      </div>
      <div className="absolute top-0 right-0 h-full w-1/3 opacity-20 pointer-events-none">
        <img 
          className="h-full w-full object-cover grayscale" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrh1ASNxsJom4MKV7OoLtpIwl_0ffDPvyUwQMAmomJzU3v0rLoYxmCxphKxE8ZYcvwylAYgTmEoeUiz8bUJus8K09FJl-3pnCnCArN41Gwp3yNcFsG8USKQUZgFFEDM7Ce3piUfNFpwCkG-lFI-g1Fsb11eRLun451lMjQsq-tK0fY31PyptHtQdyKM__xhhCF8_YYQ7R1mo6zNb7z9ppk4XbUNBYrmotYVAI8vm4-ngzZRjy8X0zKB13OaoMViflL2NJZZfF1n-5F" 
          alt=""
        />
      </div>
    </GlassCard>
  );
};

export default WelcomeCard;