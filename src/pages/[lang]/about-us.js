import React, { useEffect } from 'react'
import { gql, useQuery } from "@apollo/client";
import Image from 'next/image';
// import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import bannerAbout from '/public/assets/coad-images/banner-about.png'
import isCurrentLang from '@/utils/isCurrentLang';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

// import required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';

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
                }
              }
        }
        `);

    const { certification } = data?.post?.aboutus ?? {}
    console.log(certification)

    useEffect(() => {
        ScrollTrigger.killAll();
    }, [])

    return (
        <div className='about-us'>
            <div className='banner'>
                <Image src={bannerAbout}
                    objectFit="cover"
                    fill
                    alt="About Coad Indonesia" />
                <div className='container relative z-2'>
                    <h2>ABOUT US</h2>
                </div>
            </div>
            <div className='container about-banner-content py-24'>
                <span className='about-sub-title'>OUR HISTORY</span>
                <h2 className='about-title'>COAD INDONESIA</h2>
                <div className='short-desc'>
                    <p>COAD Indonesia sudah dipercaya bertahun-tahun untuk menghasilkan pintu industri terbaik, high speed door. Bergerak di bidang manufaktur dan pemasangan high speed door, overhead door, dan garage door, COAD Indonesia menggunakan material berkualitas untuk menghadirkan keamanan dan kecepatan bagi area Anda. COAD memberikan garansi dan after-sales service untuk setiap pintu yang terjual, dan selalu jadikan kepuasan pelanggan sebagai hal yang utama.</p>
                    <p>Dengan teknisi berpengalaman dan cekatan yang siap berikan service terbaik untuk kebutuhan pintu Anda, COAD berhasil dipercaya oleh banyak merk ternama di Indonesia. Kini, COAD Indonesia telah menjangkau seluruh area Pulau Jawa dan Bali. COAD Indonesia pastikan akan terus memberikan produk dan service terbaik sebagai merk pintu industri unggulan di Indonesia.</p>
                    <p>COAD Indonesia has been trusted for many years to produce the finest industrial doors, especially high-speed doors. Specializing in the manufacturing and installation of high-speed doors, overhead doors, and garage doors, COAD Indonesia utilizes high-quality materials to provide security and speed for your business. COAD offers warranties and after-sales service for every door sold, always prioritizing customer satisfaction.</p>
                    <p>With experienced and efficient technicians ready to provide the best service for your door needs, COAD has earned the trust of many renowned brands in Indonesia. Today, COAD Indonesia has expanded its reach to cover all areas of Java and Bali. COAD Indonesia is committed to continuously delivering top-notch products and services as the leading brand in the industrial door industry in Indonesia.</p>
                </div>
            </div>
            <div className='our-vision-mission bg-[#f4f4f4] py-28'>
                <div className='container'>
                    {/* <div className='section-title'>
                        <h2 className='title'>{isCurrentLang('Our Client', 'Klien Kami')}</h2>
                    </div> */}
                    <div className='flex gap-4'>
                        <div className='flex-1 bg-white text-neutral-50 px-10 py-16 rounded-xl'>
                            <div className='flex flex-col gap-4 items-center'>
                                <Image src={'/assets/coad-images/ic-our-vision.svg'} width={52} height={52} />
                                <h3>Our Vision</h3>
                                <div className='desc'>
                                    <p>Menjadi supplier high speed door nomor 1 di Indonesia.</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1 bg-white text-neutral-50 px-10 py-16 rounded-xl'>
                            <div className='flex flex-col gap-4 items-center'>
                                <Image src={'/assets/coad-images/ic-our-mission.svg'} width={52} height={52} />
                                <h3>Our Mission</h3>
                                <div className='desc'>
                                    <ol>
                                        <li>Selalu memberikan high speed door berkualitas terbaik untuk konsumen di Indonesia,</li>
                                        <li>Memperhatikan kesejahteraan karyawan yang kemudian mendukung kepuasan pelanggan,</li>
                                        <li>Menjadi merk yang kuat dan mampu bersaing secara regional dan global.</li>
                                    </ol>
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
                        <div className='flex-1'>
                            <h3 className='uppercase font-bold tracking-wider mb-6'>KOREA</h3>
                            <div className='flex flex-col gap-4'>
                                <div className='flex items-start gap-2'>
                                    <img className='mt-[6px]' src='/assets/coad-images/location-pin-dark.svg' alt='Address Coad Indonesia' />
                                    <p> 202-37, Hyundai Kia-ro, Namyang-eup, Hwangseong-si, Gyeonggi-do</p>
                                </div>
                                <div className='flex items-start gap-2'>
                                    <img className='mt-[6px]' src='/assets/coad-images/telephone-icon-dark.svg' alt='Contact Us Coad Indonesia' />
                                    <p>+82-02-1899-7081</p>
                                </div>
                                <div className='flex items-start gap-2'>
                                    <img className='mt-[6px]' src='/assets/coad-images/email-icon-dark.svg' alt='Email Coad Indonesia' />
                                    <p>sales@coaddoor.com</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <h3 className='uppercase font-bold tracking-wider mb-6'>JEPANG</h3>
                            <div className='flex flex-col gap-4'>
                                <div className='flex items-start gap-2'>
                                    <img className='mt-[6px]' src='/assets/coad-images/location-pin-dark.svg' alt='Address Coad Indonesia' />
                                    <p>9F, 1-8-17 Edobori, Nishi-ku, Osaka City, Japan</p>
                                </div>
                                <div className='flex items-start gap-2'>
                                    <img className='mt-[6px]' src='/assets/coad-images/telephone-icon-dark.svg' alt='Contact Us Coad Indonesia' />
                                    <p> +81-0120-920-684</p>
                                </div>
                                <div className='flex items-start gap-2'>
                                    <img className='mt-[6px]' src='/assets/coad-images/email-icon-dark.svg' alt='Email Coad Indonesia' />
                                    <p>sheetshutter@coadjapan.com</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <h3 className='uppercase font-bold tracking-wider mb-6'>VIETNAM</h3>
                            <div className='flex flex-col gap-4'>
                                <div className='flex items-start gap-2'>
                                    <img className='mt-[6px]' src='/assets/coad-images/location-pin-dark.svg' alt='Address Coad Indonesia' />
                                    <p>595 Lê Thị Riêng, Khu phố 3, Phường Thới An, Quận 12, TP.HCM</p>
                                </div>
                                <div className='flex items-start gap-2'>
                                    <img className='mt-[6px]' src='/assets/coad-images/telephone-icon-dark.svg' alt='Contact Us Coad Indonesia' />
                                    <p>+84-366-999-242</p>
                                </div>
                                <div className='flex items-start gap-2'>
                                    <img className='mt-[6px]' src='/assets/coad-images/email-icon-dark.svg' alt='Email Coad Indonesia' />
                                    <p>coadhcm@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='our-vision-mission bg-[#f4f4f4] py-28'>
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