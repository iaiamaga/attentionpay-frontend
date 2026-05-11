import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';

const Support = () => {
  const navigate = useNavigate();

  const documents = [
    { name: 'FATURA_MAR_24.PDF', size: '2.4 MB', type: 'PDF', icon: 'visibility' },
    { name: 'RELATÓRIO_ANUAL.XLSX', size: '1.1 MB', type: 'TABLE', icon: 'download' },
  ];

  const timelineEvents = [
    { 
      category: 'FINANCEIRO', 
      time: 'HOJE • 14:32', 
      title: 'Recebimento Confirmado', 
      desc: 'Fluxo consolidado de AttnPay',
      icon: 'payments',
      color: 'text-secondary-container',
      borderColor: 'border-secondary-container/40',
      hasButton: true
    },
    { 
      category: 'TAREFA', 
      time: 'HOJE • 10:15', 
      title: 'Validação de Identidade', 
      desc: 'Fluxo consolidado de AttnPay',
      icon: 'task_alt',
      color: 'text-primary',
      borderColor: 'border-primary-container/40',
      borderLeft: 'border-l-primary-container'
    },
    { 
      category: 'SISTEMA', 
      time: 'ONTEM • 23:59', 
      title: 'Backup de Segurança', 
      desc: 'A sincronização da rede AttnPay foi finalizada e criptografada.',
      icon: 'settings_input_component',
      color: 'text-on-surface-variant',
      borderColor: 'border-white/20',
      dimmed: true
    },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Header />
      
      <main className="flex-1 pt-24 pb-32 px-container-margin max-w-lg mx-auto w-full">
        <section className="mb-6">
          <div className="flex items-end justify-between mb-4">
            <div>
              <h2 className="text-[24px] font-semibold leading-[32px] text-primary tracking-[-0.01em]">Atividades</h2>
              <p className="text-[14px] leading-5 text-on-surface-variant">Fluxo consolidado de AttnPay</p>
            </div>
            <div className="glass-panel px-4 py-2 rounded-xl">
              <span className="text-[12px] font-bold tracking-wider text-secondary">PRO PROFILE</span>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-[18px] font-semibold leading-6 text-on-surface mb-4 flex items-center gap-1">
            <span className="material-symbols-outlined text-secondary-container">folder_open</span>
            Documentos Recentes
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {documents.map((doc, index) => (
              <div key={index} className="glass-panel p-4 rounded-xl group cursor-pointer hover:border-secondary-container/50 transition-all">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-2 border border-white/5 bg-surface-container">
                  <div className="w-full h-full bg-gradient-to-br from-primary-container/20 to-secondary-container/20" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-secondary-container scale-125">{doc.icon}</span>
                  </div>
                </div>
                <p className="text-[12px] font-bold tracking-wider text-on-surface truncate">{doc.name}</p>
                <p className="text-[10px] text-on-surface-variant/60 uppercase">{doc.size} • {doc.type}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative">
          <h3 className="text-[18px] font-semibold leading-6 text-on-surface mb-4 flex items-center gap-1">
            <span className="material-symbols-outlined text-primary">analytics</span>
            Timeline de Eventos
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
                        DETALHES
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
      </main>

      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50">
        <button 
          onClick={() => navigate('/settings')}
          className="bg-primary-container text-on-primary-container w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(108,92,231,0.5)] active:scale-90 transition-transform hover:brightness-110"
        >
          <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

export default Support;