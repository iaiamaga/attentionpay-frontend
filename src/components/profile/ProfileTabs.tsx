interface ProfileTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const tabs = [
  { id: 'overview', label: 'VISÃO GERAL' },
  { id: 'activities', label: 'ATIVIDADES' },
  { id: 'settings', label: 'CONFIGURAÇÕES' },
];

const ProfileTabs = ({ activeTab, onTabChange }: ProfileTabsProps) => {
  return (
    <nav className="mt-8 px-4">
      <div className="flex justify-center max-w-md mx-auto gap-2 md:gap-4 overflow-x-auto no-scrollbar pb-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-shrink-0 px-4 md:px-6 py-2 rounded-full text-[12px] font-bold transition-colors ${
              activeTab === tab.id
                ? 'glass-panel text-secondary border-secondary/30 neon-glow-secondary'
                : 'text-on-surface-variant/60 hover:text-on-surface'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default ProfileTabs;