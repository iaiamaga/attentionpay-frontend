import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import Avatar from '@/components/common/Avatar';
import GlassCard from '@/components/common/GlassCard';
import Button from '@/components/common/Button';

const Profile = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Meus Dados', onClick: () => {} },
    { label: 'Redes Sociais', onClick: () => {} },
    { label: 'Alterar Email', onClick: () => {} },
    { label: 'Alterar Telefone', onClick: () => {} },
  ];

  return (
    <Layout>
      <Header 
        title="Perfil" 
        showBack 
        onBack={() => navigate('/dashboard')}
      />

      <div className="p-4 space-y-6">
        <div className="flex flex-col items-center">
          <Avatar name="João Silva" size="lg" />
          <h2 className="text-xl font-semibold text-white mt-4">João Silva</h2>
          <p className="text-[rgba(255,255,255,0.7)]">joao@email.com</p>
        </div>

        <GlassCard className="p-4 space-y-3">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full text-left p-3 text-white/80 hover:bg-[rgba(255,255,255,0.05)] rounded-lg transition-colors flex justify-between items-center"
              onClick={item.onClick}
            >
              <span>{item.label}</span>
              <span className="text-white/50">→</span>
            </button>
          ))}
        </GlassCard>

        <Button 
          variant="primary" 
          className="w-full"
          onClick={() => navigate('/settings')}
        >
          Configurações
        </Button>

        <button className="w-full text-center text-[#ff7675] text-sm">
          Sair da conta
        </button>
      </div>
    </Layout>
  );
};

export default Profile;