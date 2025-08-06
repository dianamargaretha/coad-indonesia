import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image';
if (typeof window !== "undefined") {
    // Init ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
}


const NavbarMobile = () => {
    const router = useRouter()
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
            {/* Menu Mobile */}
            <div className="menu">
                <div className='menu-close'>
                    <div className='nav-button-wrapper flex items-center toggleMenu'>
                        <div className='nav-toggle-wrap'>
                            <svg id="burger" width="20" className="openmenu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="white">
                                <path className="top" d="M0 9h30v2H0z" />
                                <path className="bottom" d="M0 19h30v2H0z" />
                            </svg>
                            Menu
                        </div>
                        <span className='ml-5 text-sm font-semibold hidden lg:inline-flex'>MENU</span>
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
            </div>
        </div>
    )
}

export default NavbarMobile