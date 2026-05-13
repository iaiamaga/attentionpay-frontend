import { AuthLayout, PageContainer } from '@/components/layout';
import VerificationForm from '@/components/auth/VerificationForm';

const Verification = () => {
  return (
    <AuthLayout>
      <PageContainer maxWidth="md">
        <VerificationForm />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
          <div className="glass-panel p-4 rounded-xl flex items-center gap-3 border border-white/5">
            <span className="material-symbols-outlined text-primary-container">shield</span>
            <span className="text-[12px] font-bold tracking-wider text-on-surface-variant/70 uppercase">Criptografia de ponta</span>
          </div>
          <div className="glass-panel p-4 rounded-xl flex items-center gap-3 border border-white/5">
            <span className="material-symbols-outlined text-secondary-container">lock</span>
            <span className="text-[12px] font-bold tracking-wider text-on-surface-variant/70 uppercase">Pagamentos Seguros</span>
          </div>
          <div className="glass-panel p-4 rounded-xl flex items-center gap-3 border border-white/5">
            <span className="material-symbols-outlined text-tertiary">fingerprint</span>
            <span className="text-[12px] font-bold tracking-wider text-on-surface-variant/70 uppercase">Identidade protegida</span>
          </div>
        </div>
      </PageContainer>
    </AuthLayout>
  );
};

export default Verification;