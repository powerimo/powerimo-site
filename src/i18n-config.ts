type Locale = {
    code: string;
    name: string;
};

export const i18n: {
    defaultLocale: string;
    locales: Locale[];
} = {
    defaultLocale: 'en',
    locales: [
        { code: 'cs', name: 'Čeština' },
        { code: 'de', name: 'Deutsch' },
        { code: 'el', name: 'Ελληνικά' },
        { code: 'en', name: 'English' },
        { code: 'es', name: 'Español' },
        { code: 'fi', name: 'Suomi' },
        { code: 'fr', name: 'Français' },
        { code: 'hr', name: 'Hrvatski' },
        { code: 'hu', name: 'Magyar' },
        { code: 'it', name: 'Italiano' },
        { code: 'kk', name: 'Қазақ' },
        { code: 'pl', name: 'Polski' },
        { code: 'pt', name: 'Português' },
        { code: 'ro', name: 'Română' },
        { code: 'ru', name: 'Русский' },
        { code: 'sr', name: 'Српски' },
        { code: 'tr', name: 'Türkçe' },
        { code: 'uk', name: 'Українська' },
        { code: 'zh', name: '中文 (简体)' },
    ],
};
