import React, { useEffect, useState } from 'react'
import { gql, useQuery } from "@apollo/client";
import Image from 'next/image';
// import gsap from "gsap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import bannerAbout from '/public/assets/coad-images/banner-about.png'
import isCurrentLang from '@/utils/isCurrentLang';

// Init ScrollTrigger
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

// import required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import PublicHead from '@/components/PublicHead';

const aboutUs = () => {
    const { data, loading, error } = useQuery(gql`
        query {
            post(id: "about-us", idType: SLUG) {
                aboutus {
                  certification {
                    certification {
                      sourceUrl
                    }
                  }
                  aboutUs {
                    historyDetail
                    historyDetailEn
                    misi
                    misiEn
                    visi
                    visiEn
                  }
                  ourBranch {
                    address
                    country
                    email
                    phone
                  }
                }
              }
        }
        `);

    const { certification, aboutUs, ourBranch } = data?.post?.aboutus ?? {}

    //Clear ScrollTrigger other route
    useEffect(() => {
        ScrollTrigger.killAll();
    }, [])

    //Homebanner Slide First Reload
    const AboutAnimation = (completeAnimation) => {
        //timeline
        const tl = gsap
            .timeline({ defaults: { duration: 0.6 } })
            .fromTo('.banner h2', {
                x: 40,
                autoAlpha: 0
            }, {
                ease: 'power1.easeIn',
                x: 0,
                autoAlpha: 1
            }, "<0.5")
    }

    const [animationComplete, setAnimationComplete] = useState(false)

    // Enter Page Animate
    const completeAnimation = () => {
        setAnimationComplete(true)
    }
    useEffect(() => {
        AboutAnimation(completeAnimation)
    }, [])

    return (
        <div className='about-us'>
            <PublicHead
                title="COAD Indonesia | pintu-high-speed-door, overhead-door, garage-door | About us  | Company | COAD"
                description='COAD is the largest company for automatic doors in Indonesia. Producing and repairing high speed door, overhead door, garage door. Guaranteed warranty program'
				canonical='/about-us' />
            <div className='banner overflow-hidden'>
                <Image src={bannerAbout}
                    // objectFit="cover"
                    fill
                    alt="About Coad Indonesia" />
                <div className='container relative z-2'>

                    <h2><span className='py-4 px-8  bg-white/50 inline-flex'>{isCurrentLang('ABOUT US', 'TENTANG KAMI')} </span></h2>

                </div>
            </div>
            <div className='container about-banner-content py-24'>
                <span className='about-sub-title'>{isCurrentLang('OUR HISTORY', 'SEJARAH KAMI')}</span>
                <h2 className='about-title'>COAD INDONESIA</h2>
                <div className='short-desc mt-8 tracking-wide'>
                    <div dangerouslySetInnerHTML={{ __html: isCurrentLang(aboutUs?.historyDetailEn, aboutUs?.historyDetail) }} />
                </div>
            </div>
            <div className='our-vision-mission bg-[#f4f4f4]'>
                <div className='container py-28'>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex-1 bg-white text-neutral-50 px-10 py-16 rounded-xl'>
                            <div className='flex flex-col gap-4 items-center'>
                                <Image src={'/assets/coad-images/ic-our-vision.svg'} width={52} height={52} alt='our vision' />
                                <h3>{isCurrentLang('Our Vision', 'Visi Kami')}</h3>
                                <div className='desc'>
                                    <div dangerouslySetInnerHTML={{ __html: isCurrentLang(aboutUs?.visiEn, aboutUs?.visi) }} />
                                </div>
                            </div>
                        </div>
                        <div className='flex-1 bg-white text-neutral-50 px-10 py-16 rounded-xl'>
                            <div className='flex flex-col gap-4 items-center'>
                                <Image src={'/assets/coad-images/ic-our-mission.svg'} width={52} height={52} alt='our mission' />
                                <h3>{isCurrentLang('Our Mission', 'Misi Kami')}</h3>
                                <div className='desc'>
                                    <div dangerouslySetInnerHTML={{ __html: isCurrentLang(aboutUs?.misiEn, aboutUs?.misi) }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='our-branch py-28'>
                <div className='container'>
                    <div className='section-title'>
                        <h2 className='title'>{isCurrentLang('Our Branch', 'Cabang Kami')}</h2>
                    </div>
                    <div className='flex flex-wrap gap-8'>
                        {ourBranch?.map((item, index) => (
                            <div className='flex-1' key={index}>
                                <h3 className='uppercase font-bold tracking-wider mb-6'>{item?.country}</h3>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex items-start gap-2'>
                                        <img className='mt-[6px]' src='/assets/coad-images/location-pin-dark.svg' alt={`Address Coad ${item?.country}`} />
                                        <p> {item?.address}</p>
                                    </div>
                                    <div className='flex items-start gap-2'>
                                        <img className='mt-[6px]' src='/assets/coad-images/telephone-icon-dark.svg' alt={`Contact Us Coad ${item?.country}`} />
                                        <p>{item?.phone}</p>
                                    </div>
                                    <div className='flex items-start gap-2'>
                                        <img className='mt-[6px]' src='/assets/coad-images/email-icon-dark.svg' alt={`Email Coad ${item?.country}`} />
                                        <p>{item?.email}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='bg-[#f4f4f4] py-28'>
                <div className='container'>
                    <div className='section-title'>
                        <h2 className='title'>{isCurrentLang('Patents and certifications', 'Hak Paten dan Sertifikasi')}</h2>
                    </div>

                    <Swiper
                        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                        initialSlide={3}
                        loop={true}
                        slidesPerView={"auto"}
                        spaceBetween={32}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                spaceBetween: 20
                            },
                            768: {
                                spaceBetween: 32
                            }
                        }}
                    >
                        {certification?.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    src={item?.certification?.sourceUrl}
                                    alt={index}
                                    width={270}
                                    height={337}
                                    priority
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default aboutUs