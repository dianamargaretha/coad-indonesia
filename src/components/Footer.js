import React from 'react'
import Link from 'next/link';
import { useRouter } from "next/router";
import isCurrentLang from '@/utils/isCurrentLang'
import { gql, useQuery } from "@apollo/client";
const Footer = () => {
    const router = useRouter()
    const { data: dataHomePage, loading: loadingHomePage, error: errorHomePage } = useQuery(gql`
        query {
            post(id: "homepage", idType: SLUG) {
            homepage {
                footer {
                branch {
                    country
                    flag
                    link
                }
                }
            }
            }
        }
  `);

    const { footer } = dataHomePage?.post?.homepage ?? {}
    return (
        <footer>
            <div className='py-6 section-sitemap overflow-hidden bg-[#e5e2e2]'>
                <div className='container'>
                    <div className='flex flex-col md:flex-row gap-8 md:gap-0'>
                        <div className='w-12/12 md:w-3/12'>
                            <Link href={{
                                pathname: '/[lang]/',
                                query: { lang: router?.query?.lang }
                            }}>
                                <img width={200} src='/assets/coad-images/coad.png' alt='Coad Indonesia' />
                            </Link>
                        </div>
                        <div className='w-12/12 md:w-3/12'>
                            <h3 className='uppercase font-bold tracking-wider mb-6'>{isCurrentLang('Company', 'Perusahaan Kami')}</h3>
                            <ul className='flex flex-col gap-1 tracking-wide'>
                                <li>
                                    <Link href={{
                                        pathname: '/[lang]/about-us',
                                        query: { lang: router?.query?.lang }
                                    }}>{isCurrentLang('About Us', 'Tentang Kami')}</Link>
                                </li>
                                <li>
                                    <Link href={{
                                        pathname: '/[lang]/contact-us',
                                        query: { lang: router?.query?.lang }
                                    }}>{isCurrentLang('Contact Us', 'Hubungi Kami')}</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='w-12/12 md:w-3/12'>
                            <h3 className='uppercase font-bold tracking-wider mb-6'>{isCurrentLang('Product', 'Produk Kami')}</h3>
                            <ul className='flex flex-col gap-1 tracking-wide'>
                                <li>
                                    <Link href={{
                                        pathname: '/[lang]/product/standard-model-c-1',
                                        query: { lang: router?.query?.lang }
                                    }}>{isCurrentLang('High Speed Door', 'High Speed Door')}</Link>
                                </li>
                                <li>
                                    <Link href={{
                                        pathname: '/[lang]/product/stacking-overhead-door-20',
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
                        </div>
                        <div className='w-12/12 md:w-3/12'>
                            <h3 className='uppercase font-bold tracking-wider mb-6'>{isCurrentLang('Gallery', 'Galeri Kami')}</h3>
                            <ul className='flex flex-col gap-1 tracking-wide'>
                                <li>
                                    <Link href={{
                                        pathname: '/[lang]/gallery/photo/[slug]',
                                        query: { lang: router?.query?.lang, slug: 'gallery-photo-high-speed-door' }
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
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-top'>
                <div className='container'>
                    <div className='flex flex-col md:flex-row gap-8 md:gap-4 justify-start pt-10 pb-6'>
                        <div className='w-12/12 md:w-3/12'>
                            <h3 className='uppercase font-bold tracking-wider mb-6'>{isCurrentLang('COAD BRANCH', 'CABANG COAD')}</h3>
                            <div className='flex flex-col gap-2 tracking-wide'>
                                {footer?.branch?.map((item, index) => (
                                    <a href={item?.link} target='_blank' key={index}>
                                        <div className='flex items-center gap-2' key={index}>
                                            <img className='mt-[6px]' src={`/assets/coad-images/${item.flag}`} alt={`Coad ${item?.country}`} />
                                            <p>{item?.country}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className='w-12/12 md:w-4/12'>
                            <h3 className='uppercase font-bold tracking-wider mb-6'>{isCurrentLang('Contact Info', 'Kontak Kami')}</h3>
                            <div className='flex flex-col gap-4 tracking-wide'>
                                <div className='flex items-start gap-2'>
                                    <img className='mt-[6px]' src='/assets/coad-images/location-pin.svg' alt='Address Coad Indonesia' />
                                    <p><span className='block'>PT Bluesky Indonusa,</span>
                                        The Belleza Shopping Arcade Lt. 1 Unit 106
                                        Jl. Letjen Soepeno, Grogol Utara, Kebayoran Lama, Jakarta Selatan</p>
                                </div>
                                <div className='flex items-start gap-2'>
                                    <img className='mt-[6px]' src='/assets/coad-images/telephone-icon.svg' alt='Contact Us Coad Indonesia' />
                                    <p>+62-21-299-16111</p>
                                </div>
                                <div className='flex items-start gap-2'>
                                    <img className='mt-[6px]' src='/assets/coad-images/email-icon.svg' alt='Email Coad Indonesia' />
                                    <p>mkt@coad.co.id</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-12/12 md:w-2/12'></div>
                        <div className='w-12/12 md:w-3/12'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.29632552944!2d106.781861!3d-6.220927!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f12d82b5cad9%3A0xec3043c856077a11!2sThe%20Bellezza%20Shopping%20Arcade!5e0!3m2!1sen!2sid!4v1703346478174!5m2!1sen!2sid"
                                width="100%"
                                height="auto"
                                style={{ border: 0, minHeight: '200px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[1px] opacity-50 bg-white"></div>
                <div className='container'>
                    <div className='flex justify-center items-center py-4'>
                        <p>2023 Copyright &copy; COAD INDO</p>
                    </div>
                </div>
            </div>
            {/* <div className='footer-bottom'>
                <div className='container'>
                    <div className="w-full opacity-50 border-white"></div>
                    <div className='flex justify-center items-center py-6'>
                        <p>2023 Copyright &copy; COAD INDO</p>
                    </div>
                </div>
            </div> */}

        </footer >
    )
}

export default Footer