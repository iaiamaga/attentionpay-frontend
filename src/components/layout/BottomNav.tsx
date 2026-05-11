import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', icon: 'grid_view', activeIcon: true, label: 'Início' },
    { path: '/financial', icon: 'insights', label: 'Financeiro' },
    { path: '/settings', icon: 'add_circle', accent: true, label: 'Adicionar' },
    { path: '/support', icon: 'layers', label: 'Suporte' },
    { path: '/profile', icon: 'person', label: 'Perfil' },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-3 bg-surface-container-low/40 backdrop-blur-2xl border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] rounded-t-xl">
      {navItems.map((item) => {
        const isActive = item.path === location.pathname;
        
        if (item.accent) {
          return (
            <div key={item.path} className="w-14"></div>
          );
        }

        if (item.activeIcon) {
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center justify-center bg-primary/20 text-secondary shadow-[0_0_15px_rgba(0,217,255,0.4)] rounded-full p-3 active:scale-90 transition-all duration-300"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                {item.icon}
              </span>
            </button>
          );
        }

        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center text-on-surface-variant/60 p-3 hover:text-primary active:scale-90 transition-all duration-300 ${isActive ? 'text-primary' : ''}`}
          >
            <span className="material-symbols-outlined">
              {item.icon}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;