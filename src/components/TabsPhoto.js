import React from 'react'
import Link from 'next/link';
import { useRouter } from "next/router";

const TabsPhoto = () => {
    const router = useRouter();
    return (
        <div className="mb-8 font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="gallery-photo-tabs flex overflow-x-scroll gap-2 -mb-px text-sm md:text-xl">
                <li>
                    <Link href={{
                        pathname: '/[lang]/gallery/photo/[slug]',
                        query: { lang: router?.query?.lang, slug: 'gallery-photo-high-speed-door' },
                    }}>
                        <span className={`inline-block p-2 md:p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${router.query.slug === 'gallery-photo-high-speed-door' ? 'font-bold border-[#276f51] text-[#276f51]' : 'font-light'}`}>High Speed Door</span>
                    </Link>
                </li>
                <li>
                    <Link href={{
                        pathname: '/[lang]/gallery/photo/[slug]',
                        query: { lang: router?.query?.lang, slug: 'gallery-photo-overhead-door' },
                    }}>
                        <span className={`inline-block p-2 md:p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${router.query.slug === 'gallery-photo-overhead-door' ? 'font-bold border-[#276f51] text-[#276f51]' : 'font-light'}`}>Overhead Door</span>
                    </Link>
                </li>
                <li>
                    <Link href={{
                        pathname: '/[lang]/gallery/photo/[slug]',
                        query: { lang: router?.query?.lang, slug: 'gallery-photo-garage-door' },
                    }}>
                        <span className={`inline-block p-2 md:p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${router.query.slug === 'gallery-photo-garage-door' ? 'font-bold border-[#276f51] text-[#276f51]' : 'font-light'}`}>Garage Door</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default TabsPhoto