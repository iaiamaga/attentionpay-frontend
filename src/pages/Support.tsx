import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import GlassCard from '@/components/common/GlassCard';
import Button from '@/components/common/Button';

const Support = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const faqItems = [
    { question: 'Como fazer um PIX?', answer: 'Acesse a área de transfers e selecione a opção PIX.' },
    { question: 'Como conectar minha wallet?', answer: 'Vá em Configurações > Gerenciar Wallets.' },
    { question: 'Esqueci minha senha, agora quê?', answer: 'Clique em "Esqueci minha senha" na tela de login.' },
  ];

  return (
    <Layout>
      <Header 
        title="Suporte" 
        showBack 
        onBack={() => navigate('/dashboard')}
      />

      <div className="p-4 space-y-4">
        <GlassCard className="p-4">
          <h3 className="text-sm font-semibold text-white mb-4">Central de Ajuda</h3>
          <input
            type="text"
            placeholder="Buscar ajuda..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[rgba(0,0,0,0.2)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white placeholder-[rgba(255,255,255,0.3)] focus:outline-none focus:border-[#6c5ce7]"
          />
        </GlassCard>

        <div className="space-y-2">
          {faqItems.map((item, index) => (
            <GlassCard key={index} className="p-4">
              <h4 className="text-sm font-medium text-white mb-2">{item.question}</h4>
              <p className="text-xs text-[rgba(255,255,255,0.7)]">{item.answer}</p>
            </GlassCard>
          ))}
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-white">Precisa de mais ajuda?</h3>
          <Button variant="primary" className="w-full">
            💬 Chat com Suporte
          </Button>
          <Button variant="secondary" className="w-full">
            📧 Enviar Email
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Support;