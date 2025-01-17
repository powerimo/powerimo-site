'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { i18n } from '../i18n-config';

export const LocaleContext = createContext<{ locale: string; setLocale: (locale: string) => void }>({
    locale: i18n.defaultLocale,
    setLocale: () => {},
});

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
    const [locale, setLocale] = useState<string>(i18n.defaultLocale);

    useEffect(() => {
        const storedLocale = localStorage.getItem('locale');
        const browserLocale = navigator.language.split('-')[0];
        const currentLocale =
            storedLocale ||
            (i18n.locales.map((l) => l.code).includes(browserLocale) ? browserLocale : i18n.defaultLocale);

        setLocale(currentLocale);
    }, []);

    useEffect(() => {
        if (!locale) return;

        const storedLocale = localStorage.getItem('locale');
        if (storedLocale !== locale) localStorage.setItem('locale', locale);
    }, [locale]);

    return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => {
    const context = useContext(LocaleContext);
    if (!context) {
        throw new Error('useLocale must be used within a LocaleProvider');
    }
    return context;
};
