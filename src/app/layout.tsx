import { LocaleProvider } from '@/components/locale-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Layout } from '@/components/layout';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Powerimo',
    description: 'Empowering Developers with Open Source Excellence',
    keywords: 'Open Source',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className={inter.variable} suppressHydrationWarning>
            <head />
            <body>
                <LocaleProvider>
                    <ThemeProvider
                        attribute='class'
                        defaultTheme='system'
                        enableSystem
                        disableTransitionOnChange
                    >
                        <Layout>{children}</Layout>
                    </ThemeProvider>
                </LocaleProvider>
            </body>
        </html>
    );
}
