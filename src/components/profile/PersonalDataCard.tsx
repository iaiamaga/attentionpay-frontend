import GlassCard from '@/components/common/GlassCard';
import { useAuth } from '@/context';

interface PersonalDataItem {
  label: string;
  value: string;
  highlight?: boolean;
}

interface PersonalDataCardProps {
  data?: PersonalDataItem[];
}

const PersonalDataCard = ({ data }: PersonalDataCardProps) => {
  const { user } = useAuth();
  
  const defaultData: PersonalDataItem[] = [
    { label: 'NOME COMPLETO', value: user?.name || 'Alexandre Novaes de Oliveira' },
    { label: 'MEMBRO DESDE', value: user?.createdAt ? new Date(user.createdAt).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }) : 'Março, 2024' },
    { label: 'ID DE ACESSO', value: '#NX-9982-CORE', highlight: true },
  ];

  const displayData = data || defaultData;

  return (
    <GlassCard className="p-6 shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-white/5">
      <div className="flex items-center gap-2 mb-4">
        <span className="material-symbols-outlined text-primary-container">badge</span>
        <h3 className="text-[18px] font-semibold leading-6">Dados Pessoais</h3>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {displayData.map((item, index) => (
          <div key={index} className="space-y-1">
            <p className="text-[12px] font-bold tracking-wider text-on-surface-variant/50 uppercase">{item.label}</p>
            <p className={`text-[16px] leading-6 ${item.highlight ? 'text-secondary font-mono' : 'text-on-surface'}`}>
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default PersonalDataCard;