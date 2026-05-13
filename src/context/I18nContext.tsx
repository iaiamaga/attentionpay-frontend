import { createContext, useContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

type Language = 'pt-BR' | 'en';

interface TranslationStrings {
  [key: string]: string | string[] | TranslationStrings;
}

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string>) => string | string[];
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
      date: 'Data',
      time: 'Hora',
      events: 'Eventos',
      score: 'Score',
      hours: 'Horas',
      gains: 'Ganhos',
      attentionEvents: 'Eventos de Atenção',
      scoreOfEvents: 'Score de Eventos',
      welcome: 'Bem vind',
      welcomeBack: ' ao seu Dashboard de hoje.',
      weekDays: ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB', 'DOM'],
      weeklyView: 'Visão Semanal',
      total: 'Total',
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
      editAvatar: 'Editar Avatar',
      clickToChange: 'Clique na foto para alterar',
      selectAvatar: 'Selecione um avatar',
    },
    settings: {
      title: 'Configurações',
      account: 'Conta',
      changeEmail: 'Alterar E-mail',
      changePassword: 'Alterar Senha',
      security: 'Segurança',
      connectedWallets: 'Wallets Conectadas',
      deleteAccount: 'Excluir Conta',
      appearance: 'Aparência',
      language: 'Idioma',
      connectedAccounts: 'Contas Conectadas',
    },
    welcome: {
      createAccount: 'Criar Conta',
      startJourney: 'Comece sua jornada agora',
      alreadyHaveAccount: 'Já possui uma conta?',
      login: 'Entrar',
      tagline: 'Sua atenção, seu poder.',
    },
    passwordRecovery: {
      emailInstructions: 'Insira o e-mail associado à sua conta AttnPay e enviaremos as instruções de redefinição.',
      resetPassword: 'Redefinir Senha',
      checkEmail: 'Verifique seu e-mail',
      emailSent: 'Enviamos as instruções de redefinição para o seu e-mail.',
      backToLogin: 'Voltar para o Login',
    },
    support: {
      title: 'Central de Ajuda',
      searchPlaceholder: 'Como podemos ajudar?',
      faq: 'Perguntas Frequentes',
      contact: 'Fale Conosco',
      ticket: 'Abrir Ticket',
      timelineTitle: 'Histórico de Atendimentos',
      status: {
        pending: 'Pendente',
        answered: 'Respondido',
        resolved: 'Resolvido',
      },
    },
    footer: {
      rights: 'Todos os direitos reservados.',
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
      date: 'Date',
      time: 'Time',
      events: 'Events',
      score: 'Score',
      hours: 'Hours',
      gains: 'Gains',
      attentionEvents: 'Attention Events',
      scoreOfEvents: 'Score of Events',
      welcome: 'Welcome',
      welcomeBack: ' to your Dashboard today.',
      weekDays: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
      weeklyView: 'Weekly View',
      total: 'Total',
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
      editAvatar: 'Edit Avatar',
      clickToChange: 'Click on the photo to change',
      selectAvatar: 'Select an avatar',
    },
    settings: {
      title: 'Settings',
      account: 'Account',
      changeEmail: 'Change Email',
      changePassword: 'Change Password',
      security: 'Security',
      connectedWallets: 'Connected Wallets',
      deleteAccount: 'Delete Account',
      appearance: 'Appearance',
      language: 'Language',
      connectedAccounts: 'Connected Accounts',
    },
    welcome: {
      createAccount: 'Create Account',
      startJourney: 'Start your journey now',
      alreadyHaveAccount: 'Already have an account?',
      login: 'Login',
      tagline: 'Your attention, your power.',
    },
    passwordRecovery: {
      emailInstructions: 'Enter the email associated with your AttnPay account and we will send the reset instructions.',
      resetPassword: 'Reset Password',
      checkEmail: 'Check your email',
      emailSent: 'We have sent the reset instructions to your email.',
      backToLogin: 'Back to Login',
    },
    support: {
      title: 'Help Center',
      searchPlaceholder: 'How can we help?',
      faq: 'FAQ',
      contact: 'Contact Us',
      ticket: 'Open Ticket',
      timelineTitle: 'Support History',
      status: {
        pending: 'Pending',
        answered: 'Answered',
        resolved: 'Resolved',
      },
    },
    footer: {
      rights: 'All rights reserved.',
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

  const t = useCallback((key: string, params?: Record<string, string>): string | string[] => {
    const keys = key.split('.');
    let value: unknown = translations[language];
    
    for (const k of keys) {
      if (typeof value === 'object' && value !== null && k in (value as Record<string, unknown>)) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    if (Array.isArray(value)) {
      return value;
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