import { useState } from 'react';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';
import ProfileHeader from '@/components/profile/ProfileHeader';
import SupportTab from '@/pages/SupportTab';
import SettingsTab from '@/pages/SettingsTab';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'VISÃO GERAL' },
    { id: 'activities', label: 'ATIVIDADES' },
    { id: 'settings', label: 'CONFIGURAÇÕES' },
  ];

  const personalData = [
    { label: 'NOME COMPLETO', value: 'Alexandre Novaes de Oliveira' },
    { label: 'MEMBRO DESDE', value: 'Março, 2024' },
    { label: 'ID DE ACESSO', value: '#NX-9982-CORE', highlight: true },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Header />
      
      <main className="pt-[88px] pb-24">
        <div className="mb-8">
          <ProfileHeader />
        </div>
        
        
        <nav className="mt-8 px-4 ">
          <div className="flex justify-center max-w-md mx-auto gap-2 md:gap-4 overflow-x-auto no-scrollbar pb-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
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

        <div className="mt-6 px-container-margin">
          {activeTab === 'overview' && (
            <div className="max-w-2xl mx-auto">
              <div className="glass-panel rounded-xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-white/5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary-container">badge</span>
                  <h3 className="text-[18px] font-semibold leading-6">Dados Pessoais</h3>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {personalData.map((item, index) => (
                    <div key={index} className="space-y-1">
                      <p className="text-[12px] font-bold tracking-wider text-on-surface-variant/50 uppercase">{item.label}</p>
                      <p className={`text-[16px] leading-6 ${item.highlight ? 'text-secondary font-mono' : 'text-on-surface'}`}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'activities' && <SupportTab />}
          
          {activeTab === 'settings' && <SettingsTab />}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Profile;