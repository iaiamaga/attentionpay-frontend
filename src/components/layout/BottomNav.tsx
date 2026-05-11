import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', icon: 'grid_view', label: 'Início' },
    { path: '/financial', icon: 'insights', label: 'Financeiro' },
    { path: '/settings', icon: 'add_circle', accent: true, label: 'Adicionar' },
    { path: '/support', icon: 'layers', label: 'Suporte' },
    { path: '/profile', icon: 'person', active: true, label: 'Perfil' },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 bg-surface-container-low/40 backdrop-blur-2xl border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] px-4 py-3 flex justify-around items-center">
      {navItems.map((item) => {
        const isActive = item.path === location.pathname || item.active;
        
        if (item.accent) {
          return (
            <button
              key={item.path}
              className="flex flex-col items-center justify-center text-secondary-container shadow-[0_0_15px_rgba(0,217,255,0.4)] rounded-full p-3 active:scale-90"
            >
              <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                {item.icon}
              </span>
            </button>
          );
        }

        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center p-3 transition-all duration-300 active:scale-90 ${
              isActive ? 'bg-primary/20 text-secondary' : 'text-on-surface-variant/60'
            }`}
          >
            <span className={`material-symbols-outlined ${isActive ? 'text-secondary' : ''}`}>
              {item.icon}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;