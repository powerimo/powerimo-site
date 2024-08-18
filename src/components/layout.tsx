import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import * as React from 'react';

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex min-h-screen w-full flex-col'>
            <Header/>
            <div className='flex-1 container content-center p-4 md:p-6 prose prose-slate lg:prose-xl dark:prose-invert'>
                {children}
            </div>
            <Footer/>
        </div>
    );
}