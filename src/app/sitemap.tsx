import type { MetadataRoute } from 'next';

import { i18n } from '@/i18n-config';

const { locales } = i18n;

const baseUrl = process.env.BASE_URL || 'https://powerimo.org';

export default function sitemap(): MetadataRoute.Sitemap {
        const entries = locales.map(locale => ({
        url: `${baseUrl}/${locale.code}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
        alternates: {
            languages: {
                ...locales.reduce((acc, altLocale) => {
                    acc[altLocale.code] = `${baseUrl}/${altLocale.code}`;
                    return acc;
                }, {} as Record<string, string>),
                'x-default': baseUrl,
            },
        },
    }));

    entries.push({
        url: baseUrl,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 1,
        alternates: {
            languages: {
                ...locales.reduce((acc, altLocale) => {
                    acc[altLocale.code] = `${baseUrl}/${altLocale.code}`;
                    return acc;
                }, {} as Record<string, string>),
                'x-default': baseUrl,
            },
        },
    });

    return entries;
}

export const dynamic = 'force-static';
