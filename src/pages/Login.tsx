import { AuthLayout, PageContainer } from '@/components/layout';
import LoginForm from '@/components/auth/LoginForm';

const Login = () => {
  return (
    <AuthLayout>
      <PageContainer maxWidth="md">
        <LoginForm />
      </PageContainer>
    </AuthLayout>
  );
};

export default Login;