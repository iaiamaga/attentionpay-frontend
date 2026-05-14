import { createContext, useContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import ptBR from '@/idioms/pt-BR.json';
import en from '@/idioms/en.json';

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
  'pt-BR': ptBR,
  'en': en,
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