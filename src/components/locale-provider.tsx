'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { i18n } from '../i18n-config';

export const LocaleContext = createContext<{ locale: string; setLocale: (locale: string) => void }>({
    locale: '',
    setLocale: () => {},
});

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    const [locale, setLocalState] = useState<string>('');

    const setLocale = useCallback((newLocale: string) => {
        setLocalState(newLocale);
        localStorage.setItem('locale', newLocale);
    }, []);

    useEffect(() => {
        const isLocaleValid = (locale: string | null | undefined): boolean =>
            !!locale && i18n.locales.some((l) => l.code === locale);

        const getLocale = (): string => {
            const pathLocale = pathname?.split('/')[1];
            if (isLocaleValid(pathLocale)) return pathLocale;

            const storedLocale = localStorage.getItem('locale');
            if (isLocaleValid(storedLocale)) return storedLocale!;

            const browserLocale = navigator.language.split('-')[0];
            if (isLocaleValid(browserLocale)) return browserLocale;

            return i18n.defaultLocale;
        };

        setLocale(getLocale());
    }, [pathname, setLocale]);

    return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => {
    const context = useContext(LocaleContext);
    if (!context) {
        throw new Error('useLocale must be used within a LocaleProvider');
    }
    return context;
};
