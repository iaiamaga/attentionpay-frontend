import { NavLink } from 'react-router-dom';

const BottomNav = () => {
  const navItems = [
    { path: '/dashboard', label: 'Início', icon: '🏠' },
    { path: '/financial', label: 'Financeiro', icon: '💰' },
    { path: '/support', label: 'Suporte', icon: '🎧' },
    { path: '/profile', label: 'Perfil', icon: '👤' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[rgba(28,27,35,0.6)] backdrop-blur-[12px] border-t border-[rgba(255,255,255,0.1)] px-4 py-2">
      <div className="flex justify-between items-center">
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex flex-col items-center gap-1 px-3 py-2 rounded-lg
              transition-colors text-[12px]
              ${isActive ? 'text-[#00d9ff]' : 'text-[rgba(255,255,255,0.7)]'}
            `}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;