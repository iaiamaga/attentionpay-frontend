import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, AuthProvider, I18nProvider, EventProvider } from '@/context';
import AppRoutes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <EventProvider>
            <I18nProvider>
              <AppRoutes />
            </I18nProvider>
          </EventProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;