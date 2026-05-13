import { useNavigate } from 'react-router-dom';
import { DashboardLayout, PageContainer } from '@/components/layout';
import { Timeline } from '@/components/support';

const Support = () => {
  const navigate = useNavigate();

  const timelineEvents = [
    { 
      category: 'FINANCEIRO', 
      time: 'HOJE • 14:32', 
      title: 'Recebimento Confirmado', 
      description: 'Fluxo consolidado de AttnPay',
      icon: 'payments',
      color: 'text-secondary-container',
      borderColor: 'border-secondary-container/40',
      hasButton: true
    },
    { 
      category: 'TAREFA', 
      time: 'HOJE • 10:15', 
      title: 'Validação de Identidade', 
      description: 'Fluxo consolidado de AttnPay',
      icon: 'task_alt',
      color: 'text-primary',
      borderColor: 'border-primary-container/40',
      borderLeft: 'border-l-primary-container'
    },
    { 
      category: 'SISTEMA', 
      time: 'ONTEM • 23:59', 
      title: 'Backup de Segurança', 
      description: 'A sincronização da rede AttnPay foi finalizada e criptografada.',
      icon: 'settings_input_component',
      color: 'text-on-surface-variant',
      borderColor: 'border-white/20',
      dimmed: true
    },
  ];

  return (
    <DashboardLayout>
      <PageContainer maxWidth="lg">
        <section className="mb-6">
          <div className="flex items-end justify-between mb-4">
            <div>
              <h2 className="text-[24px] font-semibold leading-[32px] text-primary tracking-[-0.01em]">Atividades</h2>
              <p className="text-[14px] leading-5 text-on-surface-variant">Fluxo consolidado de AttnPay</p>
            </div>
          </div>
        </section>

        <Timeline events={timelineEvents} />

        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50">
          <button 
            onClick={() => navigate('/settings')}
            className="bg-primary-container text-on-primary-container w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(108,92,231,0.5)] active:scale-90 transition-transform hover:brightness-110"
          >
            <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
          </button>
        </div>
      </PageContainer>
    </DashboardLayout>
  );
};

export default Support;