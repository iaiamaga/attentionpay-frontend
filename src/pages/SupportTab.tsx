import { useI18n } from '@/context';

const SupportTab = () => {
  const { t } = useI18n();

  const timelineEvents = [
    { 
      category: t('activities.financial') as string, 
      time: `${t('activities.today')} • 14:32`, 
      title: t('activities.paymentReceived'), 
      desc: t('activities.consolidatedFlow'),
      icon: 'payments',
      color: 'text-secondary-container',
      borderColor: 'border-secondary-container/40',
      hasButton: true
    },
    { 
      category: t('activities.task') as string, 
      time: `${t('activities.today')} • 10:15`, 
      title: t('activities.identityValidation'), 
      desc: t('activities.consolidatedFlow'),
      icon: 'task_alt',
      color: 'text-primary',
      borderColor: 'border-primary-container/40',
      borderLeft: 'border-l-primary-container'
    },
    { 
      category: t('activities.system') as string, 
      time: `${t('activities.yesterday')} • 23:59`, 
      title: t('activities.securityBackup'), 
      desc: t('activities.syncCompleted'),
      icon: 'settings_input_component',
      color: 'text-on-surface-variant',
      borderColor: 'border-white/20',
      dimmed: true
    },
  ];

  return (
    <div className="max-w-lg mx-auto w-full space-y-8">
      <section>
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="text-[24px] font-semibold leading-[32px] text-primary tracking-[-0.01em]">{t('activities.title')}</h2>
            <p className="text-[14px] leading-5 text-on-surface-variant">{t('activities.subtitle')}</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-[18px] font-semibold leading-6 text-on-surface mb-4 flex items-center gap-1">
          <span className="material-symbols-outlined text-primary">analytics</span>
          {t('activities.eventTimeline')}
        </h3>
        <div className="relative ml-4 pl-8 border-l-2 border-white/10 space-y-6">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative">
              <div className={`absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-surface-container-high border ${event.borderColor} flex items-center justify-center ${
                event.color === 'text-secondary-container' ? 'neon-glow-secondary' : 
                event.color === 'text-primary' ? 'neon-glow-primary' : ''
              }`}>
                <span className={`material-symbols-outlined ${event.color} text-lg`}>{event.icon}</span>
              </div>
              <div className={`glass-panel p-4 rounded-xl ${event.borderLeft || ''} ${event.dimmed ? 'opacity-80' : ''}`}>
                <div className="flex justify-between items-start mb-1">
                  <span className={`text-[12px] font-bold tracking-wider uppercase ${event.color === 'text-secondary-container' ? 'text-secondary-container' : event.color === 'text-primary' ? 'text-primary' : 'text-on-surface-variant'}`}>
                    {event.category}
                  </span>
                  <span className="text-[10px] font-bold tracking-wider text-on-surface-variant/50">{event.time}</span>
                </div>
                <h4 className="text-[18px] font-semibold leading-6 text-on-surface">{event.title}</h4>
                <p className="text-[14px] leading-5 text-on-surface-variant mt-1">{event.desc}</p>
                {event.hasButton && (
                  <div className="mt-4 flex gap-2">
                    <button className="bg-white/5 hover:bg-white/10 px-4 py-1 rounded-full text-[12px] font-bold tracking-wider transition-colors border border-white/10">
                      {t('activities.details')}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="flex justify-center py-4">
            <div className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-primary-container mx-2 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportTab;