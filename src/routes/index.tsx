import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Loading from '@/pages/Loading';
import Welcome from '@/pages/Welcome';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import ForgotPassword from '@/pages/ForgotPassword';
import PasswordRecovery from '@/pages/PasswordRecovery';
import Verification from '@/pages/Verification';
import Dashboard from '@/pages/Dashboard';
import Profile from '@/pages/Profile';
import ConnectWallet from '@/pages/ConnectWallet';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/loading" element={<Loading />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/password-recovery" element={<PasswordRecovery />} />
      <Route path="/verification" element={<Verification />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/connect-wallet"
        element={
          <ProtectedRoute>
            <ConnectWallet />
          </ProtectedRoute>
        }
      />

      {/* Default redirect */}
      <Route path="*" element={<Navigate to="/loading" replace />} />
    </Routes>
  );
};

export default AppRoutes;