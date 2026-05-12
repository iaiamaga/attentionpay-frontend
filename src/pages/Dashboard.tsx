import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';

const Dashboard = () => {
  const weeklyData = [
    { day: 'SEG', height: 'h-16', active: false },
    { day: 'TER', height: 'h-20', active: false },
    { day: 'QUA', height: 'h-24', active: true },
    { day: 'QUI', height: 'h-14', active: false },
    { day: 'SEX', height: 'h-[72px]', active: false },
    { day: 'SÁB', height: 'h-10', active: false },
    { day: 'DOM', height: 'h-8', active: false },
  ];

  return (
    <div 
      className="min-h-screen text-on-surface"
      style={{
        backgroundColor: '#13121b',
        backgroundImage: 'radial-gradient(circle at 50% -20%, #2900a0 0%, transparent 50%), radial-gradient(circle at 0% 100%, #003641 0%, transparent 40%)',
        backgroundAttachment: 'fixed'
      }}
    >
      <Header />
      
      <main className="pt-24 pb-32 px-container-margin max-w-7xl mx-auto space-y-6">
        <section className="glass-panel rounded-xl p-6 flex flex-col justify-between min-h-[160px] relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-[24px] font-semibold leading-[32px] text-on-surface tracking-[-0.01em]">Olá, Alex 👋</h1>
            <p className="text-[16px] leading-6 text-on-surface-variant mt-1">Seu foco está 12% maior que ontem.</p>
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
        </section>

        <section className="space-y-6">
          <div className="glass-panel rounded-xl p-6 relative overflow-hidden">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-[18px] font-semibold leading-6 text-on-surface-variant uppercase tracking-wider">Attention Score</h2>
                <p className="text-[12px] text-secondary">Nível: Diamante</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center py-4">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className="text-white/5" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="8"></circle>
                  <circle 
                    className="text-secondary-container" 
                    cx="96" 
                    cy="96" 
                    fill="transparent" 
                    r="88" 
                    stroke="currentColor" 
                    strokeDasharray="552.92" 
                    strokeDashoffset="110.58" 
                    strokeLinecap="round" 
                    strokeWidth="8"
                    style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                  ></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[48px] font-bold text-on-surface">82</span>
                  <span className="text-[12px] font-bold tracking-wider text-on-surface-variant">PONTOS</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6 border-t border-white/5 pt-6">
              <div className="text-center border-r border-white/5">
                <span className="text-[12px] font-bold tracking-wider text-on-surface-variant block mb-1">Horas/Dia</span>
                <span className="text-[18px] font-bold text-on-surface">6.4h</span>
              </div>
              <div className="text-center border-r border-white/5">
                <span className="text-[12px] font-bold tracking-wider text-on-surface-variant block mb-1">Pontos</span>
                <span className="text-[18px] font-bold text-primary">1,240</span>
              </div>
              <div className="text-center">
                <span className="text-[12px] font-bold tracking-wider text-on-surface-variant block mb-1">Ganhos</span>
                <span className="text-[18px] font-bold text-secondary-container">₿ 0.042</span>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[18px] font-semibold leading-6">Visão Semanal</h3>
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-bold tracking-wider text-on-surface-variant">Total:</span>
                <span className="text-[16px] font-bold text-primary">574 pts</span>
              </div>
            </div>
            <div className="flex justify-between items-end gap-2 h-32">
              {weeklyData.map((item, index) => (
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
                  ></div>
                  <span className={`text-[10px] font-bold ${item.active ? 'text-primary' : 'text-on-surface-variant'}`}>
                    {item.day}
                  </span>
                </button>
              ))}
            </div>
            <div className="mt-6 p-4 bg-surface-container-highest/30 rounded-lg border border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary-container text-[20px]">rocket_launch</span>
                </div>
                <div>
                  <p className="text-[14px] font-semibold">Bônus de Sequência</p>
                  <p className="text-[12px] text-on-surface-variant">Mantenha seu foco por mais 2 dias para 1.5x</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Dashboard;