import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import GlassCard from '@/components/common/GlassCard';
import Toggle from '@/components/common/Toggle';
import Button from '@/components/common/Button';

const Settings = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState<'pt-BR' | 'en'>('pt-BR');
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(true);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt-BR' ? 'en' : 'pt-BR');
  };

  return (
    <Layout>
      <Header 
        title="Configurações" 
        showBack 
        onBack={() => navigate('/dashboard')}
      />

      <div className="p-4 space-y-4">
        <GlassCard className="p-4">
          <h3 className="text-sm font-semibold text-white mb-4">Aparência</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-white/70">Modo Escuro</span>
              <Toggle checked={darkMode} onChange={setDarkMode} />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Idioma</span>
              <button 
                onClick={toggleLanguage}
                className="text-[#00d9ff]"
              >
                {language === 'pt-BR' ? 'Português' : 'English'}
              </button>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-4">
          <h3 className="text-sm font-semibold text-white mb-4">Notificações</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-white/70">Email</span>
              <Toggle checked={emailNotif} onChange={setEmailNotif} />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/70">Push</span>
              <Toggle checked={pushNotif} onChange={setPushNotif} />
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-4">
          <h3 className="text-sm font-semibold text-white mb-4">Segurança</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 text-white/80 hover:bg-[rgba(255,255,255,0.05)] rounded-lg transition-colors flex justify-between items-center">
              <span>Alterar Senha</span>
              <span className="text-white/50">→</span>
            </button>
            <button className="w-full text-left p-3 text-white/80 hover:bg-[rgba(255,255,255,0.05)] rounded-lg transition-colors flex justify-between items-center">
              <span>2FA</span>
              <span className="text-white/50">→</span>
            </button>
            <button className="w-full text-left p-3 text-white/80 hover:bg-[rgba(255,255,255,0.05)] rounded-lg transition-colors flex justify-between items-center">
              <span>Biometria</span>
              <span className="text-white/50">→</span>
            </button>
          </div>
        </GlassCard>

        <Button 
          variant="secondary" 
          className="w-full"
          onClick={() => navigate('/connect-wallet')}
        >
          Gerenciar Wallets
        </Button>
      </div>
    </Layout>
  );
};

export default Settings;