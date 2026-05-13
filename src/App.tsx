import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, AuthProvider, I18nProvider } from '@/context';
import AppRoutes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <I18nProvider>
            <AppRoutes />
          </I18nProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;