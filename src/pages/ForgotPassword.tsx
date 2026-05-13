import { Logo } from '@/components/ui';
import PasswordRecoveryForm from '@/components/auth/PasswordRecoveryForm';

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col items-center justify-center p-container-margin relative">
      <div className="fixed top-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary-container/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-5%] left-[-5%] w-[350px] h-[350px] bg-secondary-container/10 rounded-full blur-[100px] pointer-events-none" />

      <main className="w-full max-w-[440px] z-10">
        <header className="flex items-center justify-center gap-4 mb-8">
          <Logo size="lg" />
          <div className="flex flex-col">
            <span className="text-[32px] font-bold leading-[40px] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-secondary-container to-primary">
              AttnPay
            </span>
            <p className="text-[14px] leading-5 text-on-surface-variant/80 -mt-1">Secure Authentication</p>
          </div>
        </header>

        <PasswordRecoveryForm />

        <footer className="mt-8 text-center space-y-4">
          <a 
            className="text-[12px] font-bold tracking-wider text-on-surface-variant/60 hover:text-primary transition-colors flex items-center justify-center gap-1" 
            href="#"
          >
            <span className="material-symbols-outlined text-lg">help</span>
            Precisa de ajuda com o acesso?
          </a>
        </footer>
      </main>
    </div>
  );
};

export default ForgotPassword;