import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LanguageSelector from './LanguageSelector'
import isCurrentLang from '@/utils/isCurrentLang';
import Image from 'next/image';
if (typeof window !== "undefined") {
    // Init ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
}


const Navbar = () => {
    const router = useRouter();
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    useEffect(() => {
        // Clean up all scroll trigger
        const handleKillScrollTrigger = () => {
            ScrollTrigger.getAll().forEach(st => st.kill())
        }
        router.events.on('routeChangeStart', handleKillScrollTrigger)
        return () => {
            router.events.off('routeChangeStart', handleKillScrollTrigger);
        };
    }, [router])

    return (
        <div>
            <header>
                {/* Menu mobile */}
                <div className="block lg:hidden py-4">
                    <div className='container'>
                        <div className='flex justify-between items-center'>
                            <div>
                                <Link href={{
                                    pathname: '/[lang]/',
                                    query: { lang: router?.query?.lang }
                                }}>
                                    <div className="header-logo">
                                        <img width={100} src='/assets/coad-images/coad.png' alt='Coad Indonesia' />
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <button
                                    className={`menu-burger focus:outline:none`}
                                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                                >
                                    <div className="bar1"></div>
                                    <div className="bar2"></div>
                                    <div className="bar3"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Menu Desktop */}
                <div className="hidden lg:block">
                    <div className='header-top border-b py-2'>
                        <div className='container'>
                            <div className="flex justify-between items-center">
                                <div className="header-top-left">
                                    <div className='flex gap-16'>
                                        <div className='flex gap-2'>
                                            <div>
                                                <a href='https://www.youtube.com/channel/UCUQKv9js7oDcl0afO7tPfXw' target='_blank'>
                                                    <img width={24} height={24} src='/assets/images/socmed/yt.svg' alt='Youtube Coad Indonesia' />
                                                </a>
                                            </div>
                                            <div>
                                                <a href='https://www.facebook.com/profile.php?id=100063706263984&viewas=&show_switched_toast=false&show_switched_tooltip=false&is_tour_dismissed=false&is_tour_completed=false&show_podcast_settings=false&show_community_review_changes=false&should_open_composer=false&badge_type=NEW_MEMBER&show_community_rollback_toast=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true' target='_blank'>
                                                    <img width={24} height={24} src='/assets/images/socmed/fb.svg' alt='Facebook Coad Indonesia' />
                                                </a>
                                            </div>
                                            <div>
                                                <a href='https://www.linkedin.com/company/pt-blue-sky-indonusa-pintu-high-speed-door' target='_blank'>
                                                    <img width={24} height={24} src='/assets/images/socmed/link.svg' alt='LinkedIn Coad Indonesia' />
                                                </a>
                                            </div>
                                            <div>
                                                <a href='https://www.coadautodoor.com/' target='_blank'>
                                                    <img width={24} height={24} src='/assets/images/socmed/blogger-round-color-icon.svg' alt='Blog Coad Indonesia' />
                                                </a>
                                            </div>
                                            <div>
                                                <a href='https://pintuhighspeeddoor.com/' target='_blank'>
                                                    <img width={24} height={24} src='/assets/images/socmed/wordpress.png' alt='Wordpress Coad Indonesia' />
                                                </a>
                                            </div>
                                            <div>
                                                <a href='https://coadindonesiaoverheaddoorgaragedoor.wordpress.com/' target='_blank'>
                                                    <img width={24} height={24} src='/assets/images/socmed/wordpress.png' alt='Wordpress Coad Indonesia' />
                                                </a>
                                            </div>
                                        </div>
                                        <div className='flex gap-4'>
                                            <a href='tel:02129916111'>
                                                <div className='flex items-start gap-2'>
                                                    <img className='mt-[6px]' src='/assets/coad-images/telephone-icon-dark.svg' alt='Contact Us Coad Indonesia' />
                                                    <p>+62-21-299-16111</p>
                                                </div>
                                            </a>
                                            <a href='mailto:mkt@coad.co.id'>
                                                <div className='flex items-start gap-2'>
                                                    <img className='mt-[6px]' src='/assets/coad-images/email-icon-dark.svg' alt='Email Coad Indonesia' />
                                                    <p>mkt@coad.co.id</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-top-right text-matterhorn">
                                    <LanguageSelector />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-middle header-sticky">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="header-middle-wrap position-relative">
                                        <Link href={{
                                            pathname: '/[lang]/',
                                            query: { lang: router?.query?.lang }
                                        }}>
                                            <div className="header-logo">
                                                <img width={200} src='/assets/coad-images/coad.png' alt='Coad Indonesia' />
                                            </div>
                                        </Link>

                                        <div className="main-menu d-none d-lg-block">
                                            <nav className="main-nav">
                                                <ul>
                                                    <li>
                                                        <Link href={{
                                                            pathname: '/[lang]/',
                                                            query: { lang: router?.query?.lang }
                                                        }}>{isCurrentLang('Home', 'Beranda')}</Link>
                                                    </li>
                                                    <li>
                                                        <Link href={{
                                                            pathname: '/[lang]/about-us',
                                                            query: { lang: router?.query?.lang }
                                                        }}>{isCurrentLang('About Us', 'Tentang Kami')}</Link>
                                                    </li>
                                                    <li className="drop-holder">
                                                        <a href="#"
                                                        >Product
                                                            <i className="pe-7s-angle-down"></i>
                                                        </a>
                                                        <ul className="drop-menu">
                                                            <li>
                                                                <Link href={{
                                                                    pathname: '/[lang]/product/standard-model-c-1',
                                                                    query: { lang: router?.query?.lang }
                                                                }}>{isCurrentLang('High Speed Door', 'High Speed Door')}</Link>
                                                            </li>
                                                            <li>
                                                                <Link href={{
                                                                    pathname: '/[lang]/product/industrial-overhead-door-30',
                                                                    query: { lang: router?.query?.lang }
                                                                }}>{isCurrentLang('Overhead Door', 'Overhead Door')}</Link>
                                                            </li>
                                                            <li>
                                                                <Link href={{
                                                                    pathname: '/[lang]/product/garage-door-40',
                                                                    query: { lang: router?.query?.lang }
                                                                }}>{isCurrentLang('Garage Door', 'Garage Door')}</Link>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="drop-holder">
                                                        <a href="#"
                                                        >Gallery
                                                            <i className="pe-7s-angle-down"></i>
                                                        </a>
                                                        <ul className="drop-menu">
                                                            <li>
                                                                <Link href={{
                                                                    pathname: '/[lang]/gallery/photo',
                                                                    query: { lang: router?.query?.lang }
                                                                }}>{isCurrentLang('Photo', 'Foto')}</Link>
                                                            </li>
                                                            <li>
                                                                <Link href={{
                                                                    pathname: '/[lang]/gallery/catalog',
                                                                    query: { lang: router?.query?.lang }
                                                                }}>{isCurrentLang('Catalog', 'Katalog')}</Link>
                                                            </li>
                                                            <li>
                                                                <Link href={{
                                                                    pathname: '/[lang]/gallery/drawings',
                                                                    query: { lang: router?.query?.lang }
                                                                }}>{isCurrentLang('Drawings', 'Gambar')}</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="drop-holder">
                                                        <a href="#"
                                                        >Blog
                                                            <i className="pe-7s-angle-down"></i>
                                                        </a>
                                                        <ul className="drop-menu">
                                                            <li>
                                                                <a href="https://pintuhighspeeddoor.com/" target='_blank'>Blog High Speed Door</a>
                                                            </li>
                                                            <li>
                                                                <a href="https://coadindonesiaoverheaddoorgaragedoor.wordpress.com/" target='_blank'>Blog Over Head Door</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <Link href={{
                                                            pathname: '/[lang]/contact-us',
                                                            query: { lang: router?.query?.lang }
                                                        }}>{isCurrentLang('Contact Us', 'Hubungi Kami')}</Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
            {showMobileMenu && (
                <div className='fixed top-0 left-0 w-screen h-screen bg-white z-[100]'>
                    <div className='relative mobile-menu'>
                        <div className='w-full'>
                            <div className="container">
                                <div className='flex justify-between items-center mb-8'>
                                    <div>
                                        <Link href={{
                                            pathname: '/[lang]/',
                                            query: { lang: router?.query?.lang }
                                        }}>
                                            <div className="header-logo">
                                                <img width={100} src='/assets/coad-images/coad.png' alt='Coad Indonesia' />
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <button onClick={() => setShowMobileMenu(!showMobileMenu)}>Close</button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className='flex flex-col'>
                                        <li className='h-12 px-3 font-semibold flex items-center' onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                            <Link href={{
                                                pathname: '/[lang]/',
                                                query: { lang: router?.query?.lang }
                                            }}>{isCurrentLang('Home', 'Beranda')}</Link>
                                        </li>
                                        <li className='h-12 px-3 font-semibold flex items-center' onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                            <Link href={{
                                                pathname: '/[lang]/about-us',
                                                query: { lang: router?.query?.lang }
                                            }}>{isCurrentLang('About Us', 'Tentang Kami')}</Link>
                                        </li>
                                        <li>
                                            <button className="group focus:outline-none w-full">
                                                <div className="flex items-center justify-between h-12 px-3 font-semibold hover:bg-gray-200">
                                                    <span className="truncate">Product</span>
                                                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
                                                    <div className='flex items-center h-8 px-4 text-sm hover:bg-gray-200' onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                                        <Link href={{
                                                            pathname: '/[lang]/product/standard-model-c-1',
                                                            query: { lang: router?.query?.lang }
                                                        }}>{isCurrentLang('High Speed Door', 'High Speed Door')}</Link>
                                                    </div>
                                                    <div className='flex items-center h-8 px-4 text-sm hover:bg-gray-200' onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                                        <Link href={{
                                                            pathname: '/[lang]/product/industrial-overhead-door-30',
                                                            query: { lang: router?.query?.lang }
                                                        }}>{isCurrentLang('Overhead Door', 'Overhead Door')}</Link>
                                                    </div>
                                                    <div className='flex items-center h-8 px-4 text-sm hover:bg-gray-200' onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                                        <Link href={{
                                                            pathname: '/[lang]/product/garage-door-40',
                                                            query: { lang: router?.query?.lang }
                                                        }}>{isCurrentLang('Garage Door', 'Garage Door')}</Link>
                                                    </div>
                                                </div>
                                            </button>
                                        </li>

                                        <li>
                                            <button className="w-full group focus:outline-none">
                                                <div className="flex items-center justify-between h-12 px-3 font-semibold hover:bg-gray-200">
                                                    <span className="truncate">Gallery</span>
                                                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
                                                    <div className='flex items-center h-8 px-4 text-sm hover:bg-gray-200' onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                                        <Link href={{
                                                            pathname: '/[lang]/gallery/photo',
                                                            query: { lang: router?.query?.lang }
                                                        }}>{isCurrentLang('Photo', 'Foto')}</Link>
                                                    </div>
                                                    <div className='flex items-center h-8 px-4 text-sm hover:bg-gray-200' onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                                        <Link href={{
                                                            pathname: '/[lang]/gallery/catalog',
                                                            query: { lang: router?.query?.lang }
                                                        }}>{isCurrentLang('Catalog', 'Katalog')}</Link>
                                                    </div>
                                                    <div className='flex items-center h-8 px-4 text-sm hover:bg-gray-200' onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                                        <Link href={{
                                                            pathname: '/[lang]/gallery/drawings',
                                                            query: { lang: router?.query?.lang }
                                                        }}>{isCurrentLang('Drawings', 'Gambar')}</Link>
                                                    </div>
                                                </div>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="w-full group focus:outline-none">
                                                <div className="flex items-center justify-between h-12 px-3 font-semibold hover:bg-gray-200">
                                                    <span className="truncate">Blog</span>
                                                    <svg className="h-4 w-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
                                                    <div className='flex items-center h-8 px-4 text-sm hover:bg-gray-200' onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                                        <a href="https://pintuhighspeeddoor.com/" target='_blank'>Blog High Speed Door</a>
                                                    </div>
                                                    <div className='flex items-center h-8 px-4 text-sm hover:bg-gray-200' onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                                        <a href="https://coadindonesiaoverheaddoorgaragedoor.wordpress.com/" target='_blank'>Blog Over Head Door</a>
                                                    </div>
                                                </div>
                                            </button>
                                        </li>
                                        <li className='h-12 px-3 font-semibold flex items-center' onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                            <Link href={{
                                                pathname: '/[lang]/contact-us',
                                                query: { lang: router?.query?.lang }
                                            }}>{isCurrentLang('Contact Us', 'Hubungi Kami')}</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar