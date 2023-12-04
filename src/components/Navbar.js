import React, { useEffect } from 'react'
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

    // Menu
    useEffect(() => {
        gsap.set('.navigation', { xPercent: 0, yPercent: 0 })
        var hamburgerMotion = new gsap.timeline()
            .to('.menu', { duration: 0.4, autoAlpha: 1 }, 0)
            .add('rotate')
            .to(' .top', .4, { y: '5' }, 'rotate')
            .to(' .bottom', .4, { y: '-5' }, 'rotate')
            .to(' .top', .4, { rotationZ: 45, transformOrigin: '50% 50%' }, 'rotate')
            .to(' .bottom', .4, { rotationZ: -45, transformOrigin: '50% 50%' }, 'rotate')
            .from('.navigation li', { duration: 0.6, y: 80, ease: 'Power1.easeOut', autoAlpha: 0, stagger: 0.05 }, 0.5)
            .from('.menu-info > div', { duration: 0.5, y: 100, ease: 'Power1.easeOut', autoAlpha: 0 }, "<")
            .reverse()

        document.querySelectorAll(".toggleMenu").forEach(burgerMenu => {
            burgerMenu.addEventListener("click", () => hamburgerMotion.reversed(!hamburgerMotion.reversed()))
        })

        return () => {
            document.querySelectorAll(".toggleMenu").forEach(burgerMenu =>
                burgerMenu.removeEventListener("click", () => hamburgerMotion.reversed(!hamburgerMotion.reversed()))
            )
        }
    }, [])
    return (
        <div>
            <header>
                {/* Menu Mobile */}
                {/* <div className="menu menu-mobile block md:hidden">
                    <div className='menu-close'>
                        <div className='nav-button-wrapper flex items-center toggleMenu'>
                            <div className='nav-toggle-wrap'>
                                <svg id="burger" width="20" className="openmenu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="white">
                                    <path className="top" d="M0 9h30v2H0z" />
                                    <path className="bottom" d="M0 19h30v2H0z" />
                                </svg>
                                Menuu
                            </div>
                            <span className='ml-5 text-sm font-semibold'>MENU</span>
                        </div>
                    </div>
                    <div className='main-menu'>
                        <nav className="navigation">
                            <ul className='grid grid-cols-12 gap-0 lg:gap-10'>
                                <div className='nav-wrapper col-span-12 lg:col-span-6'>
                                    <li>
                                        <Link href="/">
                                            <span className={`toggleMenu ${router.pathname == "/" ? "active" : ""}`}>Home</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about">
                                            <span className={`toggleMenu ${router.pathname == "/about" ? "active" : ""}`}>About</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/expertise">
                                            <span className={`toggleMenu ${router.pathname == "/expertise" ? "active" : ""}`}>Expertise</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#home-project">
                                            <span className={`toggleMenu ${router.pathname == "/#home-project" ? "active" : ""}`}>Projects</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/careers">
                                            <span className={`toggleMenu ${router.pathname == "/careers" ? "active" : ""}`}>Careers</span>
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </nav>
                    </div>
                </div> */}
                {/* Menu Desktop */}
                <div className="">
                    <div className='header-top border-b py-2'>
                        <div className='container'>
                            <div className="flex justify-between items-center">
                                <div className="header-top-left">
                                    <div className='flex gap-2'>
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
                                            <a href='https://www.youtube.com/channel/UCUQKv9js7oDcl0afO7tPfXw' target='_blank'>
                                                <img width={24} height={24} src='/assets/images/socmed/yt.svg' alt='Youtube Coad Indonesia' />
                                            </a>
                                        </div>
                                        <div>
                                            <a href='https://www.coadautodoor.com/' target='_blank'>
                                                <img width={24} height={24} src='/assets/images/socmed/blogger-round-color-icon.svg' alt='Blog Coad Indonesia' />
                                            </a>
                                        </div>
                                        <div>
                                            <a href='https://pintuhighspeeddoor.com/' target='_blank'>
                                                <img width={24} height={24} src='/assets/images/socmed/blogger-round-color-icon.svg' alt='Wordpress Coad Indonesia' />
                                            </a>
                                        </div>
                                        <div>
                                            <a href='https://coadindonesiaoverheaddoorgaragedoor.wordpress.com/' target='_blank'>
                                                <img width={24} height={24} src='/assets/images/socmed/blogger-round-color-icon.svg' alt='Wordpress Coad Indonesia' />
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
                                                <img width={300} src='/assets/coad-images/coad-indonesia.png' alt='Coad Indonesia' />
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
                                                            {/* <li>
                                                                <Link href={{
                                                                    pathname: '/[lang]',
                                                                    query: { lang: router?.query?.lang }
                                                                }}>{isCurrentLang('Sensor', 'Sensor')}</Link>
                                                            </li> */}
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
        </div >
    )
}

export default Navbar