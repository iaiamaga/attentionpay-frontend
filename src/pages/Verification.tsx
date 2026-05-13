import { AuthLayout, PageContainer } from '@/components/layout';
import VerificationForm from '@/components/auth/VerificationForm';

const Verification = () => {
  return (
    <AuthLayout>
      <PageContainer maxWidth="md">
        <VerificationForm />
      </PageContainer>
    </AuthLayout>
  );
};

export default Verification;