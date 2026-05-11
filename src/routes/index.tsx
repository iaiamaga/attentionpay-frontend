import { Routes, Route, Navigate } from 'react-router-dom';
import Loading from '@/pages/Loading';
import Welcome from '@/pages/Welcome';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import ForgotPassword from '@/pages/ForgotPassword';
import PasswordRecovery from '@/pages/PasswordRecovery';
import Dashboard from '@/pages/Dashboard';
import FinancialDetail from '@/pages/FinancialDetail';
import Profile from '@/pages/Profile';
import Settings from '@/pages/Settings';
import Support from '@/pages/Support';
import SupportChat from '@/pages/SupportChat';
import ConnectWallet from '@/pages/ConnectWallet';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/loading" element={<Loading />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/password-recovery" element={<PasswordRecovery />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/financial" element={<FinancialDetail />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/support" element={<Support />} />
      <Route path="/support-chat" element={<SupportChat />} />
      <Route path="/connect-wallet" element={<ConnectWallet />} />
      <Route path="*" element={<Navigate to="/loading" replace />} />
    </Routes>
  );
};

export default AppRoutes;