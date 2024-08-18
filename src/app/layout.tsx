import { Layout } from '@/components/layout';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils'
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';

const fontSans = FontSans({
    subsets: [ 'latin' ],
    variable: '--font-sans',
})

export const metadata: Metadata = {
    title: 'Powerimo',
    description: 'Open source project',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
        <head/>
        <body
            className={cn(
                'min-h-screen bg-background font-sans antialiased',
                fontSans.variable,
            )}
        >
        <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
        >
            <Layout>
                {children}
            </Layout>
        </ThemeProvider>
        </body>
        </html>
    );
}
