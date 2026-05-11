import { useState } from 'react';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'VISÃO GERAL' },
    { id: 'financial', label: 'FINANCEIRO' },
    { id: 'activities', label: 'ATIVIDADES' },
    { id: 'settings', label: 'CONFIGURAÇÕES' },
  ];

  const personalData = [
    { label: 'NOME COMPLETO', value: 'Alexandre Novaes de Oliveira' },
    { label: 'LOCALIZAÇÃO', value: 'Neo-Tokyo, Setor 07' },
    { label: 'MEMBRO DESDE', value: 'Março, 2024' },
    { label: 'ID DE ACESSO', value: '#NX-9982-CORE', highlight: true },
  ];

  const contactInfo = [
    { icon: 'mail', value: 'alex.nova@core.net', badge: 'Principal' },
    { icon: 'call', value: '+55 11 99923-0442' },
  ];

  const socialNetworks = [
    { name: 'LinkedIn', icon: 'share', color: 'bg-blue-600', status: 'Ativo', active: true },
    { name: 'GitHub', icon: 'terminal', color: 'bg-black', status: 'Ativo', active: true },
    { name: 'X / Twitter', icon: 'public', color: 'bg-slate-700', status: 'Desconectado', active: false },
  ];

  const activities = [
    { icon: 'security', color: 'text-primary-container', borderColor: 'border-primary', title: 'Autenticação Biométrica Atualizada', meta: 'Há 2 horas • Dispositivo: MOBILE-NX' },
    { icon: 'account_balance_wallet', color: 'text-secondary-container', borderColor: 'border-secondary', title: 'Transferência Recebida: 0.45 ETH', meta: 'Há 5 horas • De: Wal_88x...' },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Header />
      
      <main className="pt-[88px] pb-24">
        <section className="relative w-full h-48 md:h-64 overflow-hidden">
          <img 
            alt="Cover Banner" 
            className="w-full h-full object-cover opacity-80" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuByAKZu44IwwcaVS1-YIaaN2opmVOx49jBMm0ydMhaub-8z8mR2vGJj1jMC9BJUJAwOgcnXIyLtZem2b15L6Z5KFe5IX6r7UgxHnuCBriBmz12ZNhtFqKRVQFK10uXltKGjrIIPNZjifutl3PJxrPsKFBW-kR5A3Z1_JCynZgkjvna9a9PtlYuXM1gifqa7jXp43t33GaqcAPzoIXJkFHsBKQwXZesIMQcgRon9FfQ4yuemeHv5vxyWAn6KmeK4vNspj61vGJhUJcL9"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        <section className="px-container-margin -mt-20 relative z-10">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-primary-container via-secondary-container to-primary shadow-[0_0_30px_rgba(108,92,231,0.4)]">
                <img 
                  alt="User Avatar" 
                  className="w-full h-full rounded-full object-cover border-4 border-surface" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP9GRT06Ud0V7zkpLqZ9wI6yIG-yoakJSuaj4DFHDQ2ZnhvLRa5OR3sdIw2H2Lv0GPTA5O7Ixx6XDCskz9bwjnSJoiSpJweBx8RT98ycCdMdW46vInyJULEqImPMRCPSamWYz64uteMtYgygv43Md7tdVDBAnTIie0RC-LrHqVxtW7I-4NcLUNpKWbzxTLECERBwgPG6S1Guz5KecFSdFGjeo379htEhSX4o4dQyIl-fC2liGmbw1Fy2vrYGOtnhyN1-fASdr5zPQl"
                />
              </div>
              <div className="absolute bottom-1 right-1 w-8 h-8 bg-secondary-container rounded-full border-4 border-surface flex items-center justify-center neon-glow-secondary">
                <span className="material-symbols-outlined text-on-secondary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-[24px] font-semibold leading-[32px] text-on-surface tracking-[-0.01em]">Alex Nova</h2>
              <p className="text-[14px] leading-5 text-on-surface-variant/80">Senior Systems Architect @ Core Protocol</p>
            </div>
          </div>
        </section>

        <nav className="mt-8 px-container-margin sticky top-[88px] z-40 bg-background/80 backdrop-blur-md py-2">
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-6 py-2 rounded-full text-[12px] font-bold tracking-wider transition-colors ${
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

        <section className="mt-6 px-container-margin grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="glass-panel rounded-xl p-6 col-span-1 md:col-span-2 shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-white/5">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary-container">badge</span>
              <h3 className="text-[18px] font-semibold leading-6">Dados Pessoais</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {personalData.map((item, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-[12px] font-bold tracking-wider text-on-surface-variant/50 uppercase">{item.label}</p>
                  <p className={`text-[16px] leading-6 ${item.highlight ? 'text-secondary font-mono' : 'text-on-surface'}`}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-xl p-6 border-white/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-secondary-container">alternate_email</span>
                <h3 className="text-[18px] font-semibold leading-6">Contato</h3>
              </div>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-surface-variant">{contact.icon}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-[14px] leading-5 text-on-surface">{contact.value}</p>
                      {contact.badge && (
                        <span className="px-2 py-0.5 rounded text-[10px] bg-primary/20 text-primary uppercase font-bold">{contact.badge}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="mt-6 w-full py-4 rounded-lg bg-primary-container text-on-primary-container text-[12px] font-bold tracking-wider neon-glow-primary hover:brightness-110 transition-all">
              EDITAR CONTATOS
            </button>
          </div>

          <div className="glass-panel rounded-xl p-6 col-span-1 md:col-span-3 border-white/5">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-tertiary">link</span>
              <h3 className="text-[18px] font-semibold leading-6">Redes Conectadas</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {socialNetworks.map((network, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between p-4 rounded-xl bg-surface-container-high/40 border border-white/5 ${!network.active ? 'opacity-50' : ''}`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full ${network.color} flex items-center justify-center ${network.name === 'GitHub' ? 'border border-white/20' : ''}`}>
                      <span className="material-symbols-outlined text-white text-[14px]">{network.icon}</span>
                    </div>
                    <span className="text-[14px] leading-5 font-medium">{network.name}</span>
                  </div>
                  <span className={`text-[10px] font-bold flex items-center gap-1 uppercase tracking-wider ${network.active ? 'text-secondary' : 'text-on-surface-variant'}`}>
                    {network.active && <span className={`w-1.5 h-1.5 rounded-full bg-secondary ${network.name === 'LinkedIn' ? 'animate-pulse' : ''}`}></span>}
                    {network.status}
                  </span>
                </div>
              ))}
              <div className="flex items-center justify-between p-4 rounded-xl border border-dashed border-white/20 hover:bg-white/5 cursor-pointer transition-colors">
                <span className="text-[14px] leading-5 text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-[14px]">add</span>
                  Adicionar Rede
                </span>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-xl p-6 col-span-1 md:col-span-3 border-white/5">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">history</span>
                <h3 className="text-[18px] font-semibold leading-6">Atividade Recente</h3>
              </div>
              <button className="text-[12px] font-bold tracking-wider text-secondary">VER TUDO</button>
            </div>
            <div className="space-y-3">
              {activities.map((activity, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between p-4 rounded-lg bg-white/5 border-l-2 ${activity.borderColor}`}
                >
                  <div className="flex gap-4 items-center">
                    <span className={`material-symbols-outlined ${activity.color}`}>{activity.icon}</span>
                    <div>
                      <p className="text-[14px] leading-5 font-medium">{activity.title}</p>
                      <p className="text-[10px] text-on-surface-variant/60">{activity.meta}</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant/40">chevron_right</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Profile;