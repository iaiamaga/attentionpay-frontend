import { AuthLayout, PageContainer } from '@/components/layout';
import SignupForm from '@/components/auth/SignupForm';

const Signup = () => {
  return (
    <AuthLayout>
      <PageContainer maxWidth="md">
        <SignupForm />
        
      </PageContainer>
    </AuthLayout>
  );
};

export default Signup;