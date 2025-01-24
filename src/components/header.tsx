'use client';

import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLocale } from './locale-provider';
import { i18n } from '@/i18n-config';
import { useRouter } from 'next/navigation';

export function Header() {
    const { theme, setTheme } = useTheme();
    const { locale } = useLocale();
    const router = useRouter();

    return (
        <header className='sticky top-0 flex h-16 gap-4 bg-background'>
            <div className='flex container items-center px-4 md:px-6'>
                <div className='flex items-center gap-4 ml-auto md:gap-2 lg:gap-4'>
                    <Select
                        value={locale}
                        onValueChange={(locale) => router.replace(`/${locale}`)}
                    >
                        <SelectTrigger className='w-full'>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {i18n.locales.map((locale) => (
                                <SelectItem
                                    key={locale.code}
                                    value={locale.code}
                                >
                                    {locale.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Button
                        variant='ghost'
                        size='icon'
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className=''
                    >
                        <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                        <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                    </Button>
                </div>
            </div>
        </header>
    );
}
