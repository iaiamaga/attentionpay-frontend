import GlassCard from '@/components/common/GlassCard';
import { useAuth, useI18n } from '@/context';

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
  const { t, language } = useI18n();
  
  const defaultData: PersonalDataItem[] = [
    { label: t('profile.fullName') as string, value: user?.name || 'Alexandre Novaes de Oliveira' },
    { label: t('profile.memberSince') as string, value: user?.createdAt ? new Date(user.createdAt).toLocaleDateString(language === 'pt-BR' ? 'pt-BR' : 'en-US', { month: 'long', year: 'numeric' }) : (language === 'pt-BR' ? 'Março, 2024' : 'March, 2024') },
  ];

  const displayData = data || defaultData;

  return (
    <GlassCard className="p-6 shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-white/5">
      <div className="flex items-center gap-2 mb-4">
        <span className="material-symbols-outlined text-primary-container">badge</span>
        <h3 className="text-[18px] font-semibold leading-6">{t('profile.personalData')}</h3>
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