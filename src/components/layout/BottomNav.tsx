import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const navItems = [
    { path: '/dashboard', icon: 'grid_view', label: 'Início' },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 flex justify-center px-8 py-3 bg-surface-container-low/40 backdrop-blur-2xl border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] rounded-t-xl">
      <div className="flex justify-center gap-8">
        {navItems.map((item) => {
          const isActive = item.path === location.pathname;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center p-3 transition-all duration-300 ${
                isActive 
                  ? 'text-primary' 
                  : 'text-on-surface-variant/60 hover:text-on-surface'
              }`}
            >
              <span 
                className="material-symbols-outlined " 
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'neon-glow-white'" }}
              >
                {item.icon}
              </span>
            </button>
          );
        })}
        <button
          onClick={() => navigate('/profile')}
          className={`flex flex-col items-center justify-center p-1 transition-all duration-300 ${
            location.pathname === '/profile' 
              ? 'text-primary' 
              : 'text-on-surface-variant/60 hover:text-on-surface'
          }`}
        >
          <img 
            src={user?.avatar} 
            alt="Profile"
            className={`w-8 h-8 rounded-full object-cover border border-white/20 ${
              location.pathname === '/profile' ? 'neon-glow-white' : ''
            }`}
          />
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;