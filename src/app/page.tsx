'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from '@/components/locale-provider';
import { useEffect } from 'react';

export default function Page() {
    const { locale } = useLocale();
    const router = useRouter();

    useEffect(() => {
        if (!!locale)
            router.replace(`/${locale}`);
    }, [locale, router]);

    return <div>Please wait...</div>;
}
