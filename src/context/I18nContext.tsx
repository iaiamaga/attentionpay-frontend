import { createContext, useContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

type Language = 'pt-BR' | 'en';

interface TranslationStrings {
  [key: string]: string | TranslationStrings;
}

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string>) => string;
  isRTL: boolean;
}

const translations: Record<Language, TranslationStrings> = {
  'pt-BR': {
    common: {
      loading: 'Carregando...',
      error: 'Erro',
      success: 'Sucesso',
      cancel: 'Cancelar',
      confirm: 'Confirmar',
      save: 'Salvar',
      delete: 'Excluir',
      edit: 'Editar',
      back: 'Voltar',
      next: 'Próximo',
      previous: 'Anterior',
      search: 'Buscar',
      noResults: 'Nenhum resultado encontrado',
    },
    auth: {
      login: 'Entrar',
      logout: 'Sair',
      signup: 'Cadastrar',
      email: 'E-mail',
      password: 'Senha',
      confirmPassword: 'Confirmar Senha',
      forgotPassword: 'Esqueceu a senha?',
      createAccount: 'Criar Conta',
      alreadyHaveAccount: 'Já possui conta?',
      welcomeBack: 'Bem-vindo de volta',
    },
    dashboard: {
      title: 'Dashboard',
      attentionScore: 'Attention Score',
      weeklyView: 'Visão Semanal',
      total: 'Total',
      hoursPerDay: 'Horas/Dia',
      points: 'Pontos',
      gains: 'Ganhos',
      uptime: 'Uptime',
      consumption: 'Consumo',
    },
    profile: {
      title: 'Perfil',
      overview: 'Visão Geral',
      activities: 'Atividades',
      settings: 'Configurações',
      personalData: 'Dados Pessoais',
      connectedWallet: 'Wallet Conectada',
    },
    settings: {
      title: 'Configurações',
      account: 'Conta',
      changeEmail: 'Alterar E-mail',
      changePassword: 'Alterar Senha',
      security: 'Segurança',
      connectedWallets: 'Wallets Conectadas',
      deleteAccount: 'Excluir Conta',
    },
  },
  'en': {
    common: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      cancel: 'Cancel',
      confirm: 'Confirm',
      save: 'Save',
      delete: 'Delete',
      edit: 'Edit',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      search: 'Search',
      noResults: 'No results found',
    },
    auth: {
      login: 'Login',
      logout: 'Logout',
      signup: 'Sign Up',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      forgotPassword: 'Forgot password?',
      createAccount: 'Create Account',
      alreadyHaveAccount: 'Already have an account?',
      welcomeBack: 'Welcome back',
    },
    dashboard: {
      title: 'Dashboard',
      attentionScore: 'Attention Score',
      weeklyView: 'Weekly View',
      total: 'Total',
      hoursPerDay: 'Hours/Day',
      points: 'Points',
      gains: 'Gains',
      uptime: 'Uptime',
      consumption: 'Consumption',
    },
    profile: {
      title: 'Profile',
      overview: 'Overview',
      activities: 'Activities',
      settings: 'Settings',
      personalData: 'Personal Data',
      connectedWallet: 'Connected Wallet',
    },
    settings: {
      title: 'Settings',
      account: 'Account',
      changeEmail: 'Change Email',
      changePassword: 'Change Password',
      security: 'Security',
      connectedWallets: 'Connected Wallets',
      deleteAccount: 'Delete Account',
    },
  },
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [storedLanguage, setStoredLanguage] = useLocalStorage<Language>('language', 'pt-BR');
  const [language, setLanguageState] = useState<Language>(storedLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    setStoredLanguage(lang);
  }, [setStoredLanguage]);

  const t = useCallback((key: string, params?: Record<string, string>): string => {
    const keys = key.split('.');
    let value: string | TranslationStrings = translations[language];
    
    for (const k of keys) {
      if (typeof value === 'object' && value !== null && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    if (typeof value !== 'string') {
      return key;
    }

    if (params) {
      return Object.entries(params).reduce(
        (str, [paramKey, paramValue]) => str.replace(new RegExp(`{${paramKey}}`, 'g'), paramValue),
        value
      );
    }

    return value;
  }, [language]);

  useEffect(() => {
    document.documentElement.lang = language === 'pt-BR' ? 'pt-BR' : 'en';
  }, [language]);

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, isRTL: false }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

export default I18nContext;