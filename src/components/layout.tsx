'use client';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import { useLocale } from './locale-provider';

export function Layout({ children }: { children: React.ReactNode }) {
    const { locale } = useLocale();

    return (
        <div
            lang={locale}
            className='min-h-screen flex flex-col'
        >
            <Header />
            <div className='flex-1 container content-center p-4 md:p-6 prose prose-slate lg:prose-xl dark:prose-invert'>
                {children}
            </div>
            <Footer />
        </div>
    );
}
