import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';

const Dashboard = () => {
  const navigate = useNavigate();

  const activities = [
    { type: 'primary-container' as const, title: 'Deploy #2841', time: 'Há 10 minutos' },
    { type: 'secondary-container' as const, title: 'Nova Conexão Peer', time: 'Há 2 horas' },
    { type: 'error' as const, title: 'Alerta de Segurança', time: 'Ontem, 23:45' },
  ];

  const tasks = [
    { label: 'Otimizar Smart Contract', checked: false },
    { label: 'Atualizar Core v2.4', checked: false },
    { label: 'Review de Nodes', checked: true },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Header />
      
      <main className="pt-24 pb-32 px-container-margin max-w-7xl mx-auto space-y-6">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 glass-panel rounded-xl p-6 flex flex-col justify-between min-h-[180px] relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-[24px] font-semibold leading-[32px] text-on-surface tracking-[-0.01em]">Olá, Alex 👋</h1>
              <p className="text-[16px] leading-6 text-on-surface-variant mt-1">Seu sistema está operando em 98.4% de eficiência.</p>
            </div>
            <div className="flex gap-6 mt-6 relative z-10">
              <div>
                <span className="text-[12px] font-bold tracking-wider text-secondary uppercase block mb-1">Uptime</span>
                <span className="text-[18px] font-semibold leading-6 text-on-surface">14d 08h 22m</span>
              </div>
              <div>
                <span className="text-[12px] font-bold tracking-wider text-secondary uppercase block mb-1">Consumo</span>
                <span className="text-[18px] font-semibold leading-6 text-on-surface">1.2kW/h</span>
              </div>
            </div>
            <div className="absolute top-0 right-0 h-full w-1/3 opacity-20 pointer-events-none">
              <img 
                className="h-full w-full object-cover grayscale" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrh1ASNxsJom4MKV7OoLtpIwl_0ffDPvyUwQMAmomJzU3v0rLoYxmCxphKxE8ZYcvwylAYgTmEoeUiz8bUJus8K09FJl-3pnCnCArN41Gwp3yNcFsG8USKQUZgFFEDM7Ce3piUfNFpwCkG-lFI-g1Fsb11eRLun451lMjQsq-tK0fY31PyptHtQdyKM__xhhCF8_YYQ7R1mo6zNb7z9ppk4XbUNBYrmotYVAI8vm4-ngzZRjy8X0zKB13OaoMViflL2NJZZfF1n-5F" 
                alt=""
              />
            </div>
          </div>

          <div className="glass-panel rounded-xl p-6 border-l-4 border-secondary-container">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[12px] font-bold tracking-wider text-on-surface-variant uppercase">Wallet Balance</span>
                <h2 className="text-[32px] font-bold leading-[40px] text-secondary-container mt-1">₿ 0.452</h2>
              </div>
              <span className="material-symbols-outlined text-secondary-container text-[32px]">account_balance_wallet</span>
            </div>
            <div className="h-16 flex items-end gap-1">
              <div className="w-full bg-secondary-container/20 h-4 rounded-t-sm"></div>
              <div className="w-full bg-secondary-container/30 h-8 rounded-t-sm"></div>
              <div className="w-full bg-secondary-container/40 h-6 rounded-t-sm"></div>
              <div className="w-full bg-secondary-container/60 h-10 rounded-t-sm"></div>
              <div className="w-full bg-secondary-container/80 h-12 rounded-t-sm neon-glow-secondary"></div>
              <div className="w-full bg-secondary-container h-9 rounded-t-sm"></div>
              <div className="w-full bg-secondary-container/50 h-7 rounded-t-sm"></div>
            </div>
            <p className="text-[14px] leading-5 text-on-surface-variant mt-3 flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-secondary">trending_up</span>
              +12.4% este mês
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="md:col-span-2 lg:col-span-2 glass-panel rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[18px] font-semibold leading-6">Desempenho da Rede</h3>
              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
              </div>
            </div>
            <div className="h-48 w-full bg-surface-container-highest/20 rounded-lg relative overflow-hidden">
              <svg className="absolute bottom-0 left-0 w-full h-full opacity-60" viewBox="0 0 400 150">
                <path d="M0,150 L0,80 C40,70 80,120 120,90 C160,60 200,80 240,40 C280,0 320,60 360,50 C400,40 400,150 400,150 Z" fill="url(#grad1)"></path>
                <defs>
                  <linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'rgba(108,92,231,0.5)', stopOpacity: 1 }}></stop>
                    <stop offset="100%" style={{ stopColor: 'rgba(108,92,231,0)', stopOpacity: 0 }}></stop>
                  </linearGradient>
                </defs>
                <path d="M0,80 C40,70 80,120 120,90 C160,60 200,80 240,40 C280,0 320,60 360,50 C400,40 400,40" fill="none" stroke="#c6bfff" strokeWidth="2"></path>
              </svg>
            </div>
          </div>

          <div className="md:col-span-1 lg:col-span-1 glass-panel rounded-xl p-6">
            <h3 className="text-[18px] font-semibold leading-6 mb-6">Atividades Recentes</h3>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex gap-4">
                  <div className="relative flex flex-col items-center">
                    <div className={`w-2 h-2 rounded-full bg-${activity.type}`}></div>
                    {index < activities.length - 1 && <div className="w-px h-full bg-white/10 mt-1"></div>}
                  </div>
                  <div>
                    <p className="text-[14px] leading-5 font-semibold">{activity.title}</p>
                    <p className="text-[12px] text-on-surface-variant">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-1 lg:col-span-1 glass-panel rounded-xl p-6">
            <h3 className="text-[18px] font-semibold leading-6 mb-4">Tarefas</h3>
            <div className="space-y-3">
              {tasks.map((task, index) => (
                <label key={index} className={`flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group ${task.checked ? 'opacity-50' : ''}`}>
                  <div className={`w-5 h-5 rounded border border-white/20 flex items-center justify-center ${task.checked ? 'bg-primary-container border-primary-container' : ''}`}>
                    {task.checked && <span className="material-symbols-outlined text-[14px] text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>}
                    {!task.checked && <span className="material-symbols-outlined text-[14px] text-primary hidden group-hover:block">check</span>}
                  </div>
                  <span className={`text-[14px] leading-5 ${task.checked ? 'line-through' : ''}`}>{task.label}</span>
                </label>
              ))}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 h-64">
          <div className="glass-panel rounded-xl relative overflow-hidden group">
            <img 
              alt="Visualização de segurança da rede AttnPay" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida/ADBb0ui4-rG_SkLvEVF2ayng_rDz3LghNi1OMQ3ApHArn7st7mPT4mUhRHZVqaUpg5RK9pTxf8-rug1pD-r35869S58sFNgXTQWVgFmI8Q_GPy8GehWSzTA_UblKjps_5gcw9yWLHfyypPXEpuQbY_d37dbvgmKEtxIHmiUddz3sMgILE4F8H_dnvvM_wyOnUP5K3chbplAdURRXlEA8ChlJ4P5lJjS_C1WX_ht44pKmUx6B3Ja1XamwsTAy2dVJhXoaUw_1Z8GCpHuUNQ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <span className="text-[12px] font-bold tracking-wider text-secondary-container uppercase">Security Status</span>
              <h4 className="text-[24px] font-semibold leading-[32px] text-on-surface tracking-[-0.01em]">Protocols: Locked</h4>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-6 flex flex-col justify-center items-center text-center">
            <div className="w-20 h-20 rounded-full border-4 border-primary-container flex items-center justify-center mb-4 neon-glow-primary">
              <span className="material-symbols-outlined text-[40px] text-primary">query_stats</span>
            </div>
            <h4 className="text-[18px] font-semibold leading-6">Sincronização Completa</h4>
            <p className="text-[14px] leading-5 text-on-surface-variant mt-1 max-w-xs">Todos os blocos foram validados e o registro está atualizado.</p>
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

export default Dashboard;