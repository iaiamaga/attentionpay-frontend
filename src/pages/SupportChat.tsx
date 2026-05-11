import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';

interface Message {
  id: number;
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

const SupportChat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: 'bot', text: 'Olá! Sou o assistente AttnPay. Verifiquei que sua última transação de R$ 450,00 foi concluída com sucesso. Posso ajudar com algo específico sobre ela ou outro assunto?', time: '14:02' },
    { id: 2, sender: 'user', text: 'Preciso anexar o comprovante da transação que mencionei para contestar uma taxa.', time: '14:05' },
    { id: 3, sender: 'bot', text: 'Entendido. Você pode carregar o arquivo clicando no ícone de clipe ou arrastando-o para cá. Formatos aceitos: JPG, PNG e PDF.', time: '14:06' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickActions = [
    { icon: 'account_balance_wallet', label: 'Segunda via de Boleto' },
    { icon: 'lock_reset', label: 'Redefinir Senha' },
    { icon: 'support_agent', label: 'Falar com Humano' },
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const newMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      text: inputValue,
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col relative">
      <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <Header 
        right={
          <button 
            onClick={() => navigate('/support')}
            className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-on-surface-variant/70">arrow_back</span>
          </button>
        } 
      />
      
      <main className="flex-1 mt-24 mb-32 px-container-margin max-w-4xl mx-auto w-full flex flex-col gap-6">
        <div className="text-center py-6">
          <h2 className="text-[24px] font-semibold leading-[32px] text-on-surface tracking-[-0.01em] mb-1">Como podemos ajudar hoje?</h2>
          <p className="text-[16px] leading-6 text-on-surface-variant">O assistente virtual AttnPay está pronto para te atender.</p>
        </div>

        <div className="flex flex-col gap-6 overflow-y-auto">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`flex items-start gap-4 max-w-[85%] ${message.sender === 'user' ? 'self-end flex-row-reverse' : ''}`}
            >
              {message.sender === 'bot' ? (
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-container neon-glow-primary">
                  <span className="material-symbols-outlined text-on-primary-container text-lg">smart_toy</span>
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary-container neon-glow-secondary overflow-hidden border border-white/20">
                  <img 
                    alt="Avatar" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPtlwxrA0RsMeN5tIGuPEVYzN6jPftF-IF9p6Ts7zmGiKgI5wkqVV94CstqTeHKjdctxzBsYKriUbIekHmIBCIsaMmTP6x5WgNWs2o-LboR8qHksMiN6f8oyfSeTXtGlEjjR-8elAHspV417-Vygse-LX95pdG69WQq7FWlhixeYRbPjgASEwGy-2Yem5GqFPtj9lGOFVXHKJqgZWDhzqkM5I0Hzd1LqKdyeVp1bP8rHazNipDQhAmMAnrKQVNNgkDLNBSkNV_He1c"
                  />
                </div>
              )}
              
              <div className={`glass-panel p-4 rounded-xl ${
                message.sender === 'user' 
                  ? 'bg-secondary-container/20 border border-secondary-container/30 rounded-tr-none text-right' 
                  : 'rounded-tl-none'
              }`}>
                <p className="text-[16px] leading-6">{message.text}</p>
                <span className="block mt-1 text-[10px] font-bold tracking-wider text-on-surface-variant/50">{message.time}</span>
              </div>
            </div>
          ))}

          {messages.length === 3 && (
            <div className="flex flex-wrap gap-2 ml-12">
              {quickActions.map((action, index) => (
                <button 
                  key={index}
                  className="bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all rounded-full px-4 py-2 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-primary text-lg">{action.icon}</span>
                  <span className="text-[12px] font-bold tracking-wider text-primary">{action.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </main>

      <div className="fixed bottom-20 md:bottom-24 left-0 w-full px-container-margin pb-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-xl p-2 flex items-end gap-3 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
            <div className="flex gap-1 pb-1 pl-1">
              <button className="material-symbols-outlined text-on-surface-variant/70 hover:text-secondary-container transition-colors p-2">attach_file</button>
              <button className="material-symbols-outlined text-on-surface-variant/70 hover:text-secondary-container transition-colors p-2">image</button>
            </div>
            <div className="flex-1 relative">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
                className="w-full bg-surface-container-lowest/50 border border-white/5 rounded-lg py-3 px-4 text-[16px] leading-6 focus:outline-none focus:border-secondary-container/50 focus:ring-1 focus:ring-secondary-container/50 resize-none max-h-32 min-h-[48px]"
                placeholder="Digite sua mensagem..."
              />
            </div>
            <button 
              onClick={handleSend}
              className="bg-primary-container text-on-primary-container p-3 rounded-lg mb-1 mr-1 hover:scale-105 active:scale-95 transition-all shadow-lg neon-glow-primary"
            >
              <span className="material-symbols-outlined text-lg">send</span>
            </button>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default SupportChat;