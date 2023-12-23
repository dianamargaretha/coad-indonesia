import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google'
import { gql, useQuery } from "@apollo/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import aboutUsBanner from '/public/assets/images/about-us-banner.png';
const inter = Inter({ subsets: ['latin'] })

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
import Image from 'next/image';
import isCurrentLang from '@/utils/isCurrentLang';
import IntroOverlay from '@/components/IntroOverlay';
import PublicHead from '@/components/PublicHead';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

export default function Home() {
  const router = useRouter()
  const [mute, setMute] = useState(true)
  const { data, loading, error } = useQuery(gql`
    query {
      post(id: "home-slide-banner", idType: SLUG) {
        homeSlideBanner {
          slideBanner {
            slideBanner {
              sourceUrl
            }
            subtitle
            title
            desc
            descEn
            isvideo
            videobanner {
              mediaItemUrl
            }
          }
        }
      }
    }
  `);

  const { data: dataProduct, loading: loadingProduct, error: errorProduct } = useQuery(gql`
  query {
    post(id: "product-category", idType: SLUG) {
      productCategory {
        product {
          linkto
          title
          thumb {
            sourceUrl
          }
        }
      }
    }
  }
`);

  const { data: dataHomePage, loading: loadingHomePage, error: errorHomePage } = useQuery(gql`
  query {
    post(id: "homepage", idType: SLUG) {
      homepage {
        productlistinfo {
          title
          titleEn
          productlist {
            description
            descriptionEn
            listnumber
          }
        }
        productunggulan {
          productname
          productcategory
          linkproduct
          imageproduct {
            sourceUrl
          }
        }
        aboutus {
          desc
          descEn
          title
          titleEn
        }
        ourclient {
          description
          descriptionEn
          listclient {
            logo {
              sourceUrl
            }
          }
        }
      }
    }
  }
  `);

  const { slideBanner } = data?.post?.homeSlideBanner ?? {};
  const { productlistinfo, productunggulan, aboutus, ourclient } = dataHomePage?.post?.homepage ?? {}


  //Clear ScrollTrigger other route
  useEffect(() => {
    ScrollTrigger.killAll();
  }, [])

  //Homebanner Slide First Reload
  const HomeAnimation = (completeAnimation) => {
    //timeline
    const tl = gsap
      .timeline({ defaults: { duration: 0.6 } })
      .fromTo('.swiper-wrapper .swiper-slide.swiper-slide-active .slide-img', {
        duration: 1,
        scale: 1.2,
        autoAlpha: 0
      }, {
        ease: 'power1.easeIn',
        duration: 1,
        scale: 1,
        autoAlpha: 1
      })
      .fromTo('.swiper-wrapper .swiper-slide.swiper-slide-active .slide-content .title', {
        x: 40,
        autoAlpha: 0
      }, {
        ease: 'power1.easeIn',
        x: 0,
        autoAlpha: 1
      }, "<0.5")
      .fromTo('.swiper-wrapper .swiper-slide.swiper-slide-active .slide-content .subtitle', {
        x: 40,
        autoAlpha: 0
      }, {
        ease: 'power1.easeIn',
        x: 0,
        autoAlpha: 1
      }, "<0.3")
      .fromTo('.swiper-wrapper .swiper-slide.swiper-slide-active .slide-content .short-desc', {
        x: 40,
        autoAlpha: 0
      }, {
        ease: 'power1.easeIn',
        x: 0,
        autoAlpha: 1
      }, "<0.2")
  }

  const [animationComplete, setAnimationComplete] = useState(false)

  // Enter Page Animate
  const completeAnimation = () => {
    setAnimationComplete(true)
  }
  useEffect(() => {
    HomeAnimation(completeAnimation)
  }, [loading, loadingProduct, loadingHomePage])

  //Product Category
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-product-category',
        start: "-10% center",
        end: "bottom center",
        toggleActions: "restart pause resume pause",
        markers: false
      }
    })
      .from('.section-product-category .title', {
        autoAlpha: 0,
        x: 100,
        duration: 0.5
      })
  }, [loading, loadingProduct, loadingHomePage])

  //Product Info List
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-worldwide',
        start: "-15% center",
        end: "bottom center",
        toggleActions: "restart pause resume pause",
        markers: false
      }
    })
      .from('.section-worldwide .info-title', {
        autoAlpha: 0,
        y: 100,
        duration: 0.5,
        delay: 0.1
      })
      .from(".section-worldwide .info-detail-list .list", {
        duration: 0.8,
        autoAlpha: 0,
        y: 100,
        delay: 0.1,
        stagger: 0.2,
      }, 0);
  }, [loading, loadingProduct, loadingHomePage])

  //About Us
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-about-us',
        start: "10% center",
        end: "bottom center",
        toggleActions: "restart pause resume pause",
        markers: false
      }
    })
      .from('.section-about-us h2.title', {
        autoAlpha: 0,
        x: 100,
        duration: 0.5
      })
      .from('.section-about-us .homebanner-about-us-desc', {
        autoAlpha: 0,
        y: 100,
        duration: 0.5
      }, 0)
      .from('.section-about-us .homebanner-about-us', {
        autoAlpha: 0,
        y: 100,
        duration: 1
      }, 0)
  }, [loading, loadingProduct, loadingHomePage])

  //Our Client
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-our-client',
        start: "10% center",
        toggleActions: "restart pause resume pause",
        markers: false
      }
    })
      .from('.section-our-client h2.title', {
        autoAlpha: 0,
        x: 100,
        duration: 0.5
      })
      .from('.section-our-client h3.desc', {
        autoAlpha: 0,
        x: 100,
        duration: 0.5
      })
      .from('.section-our-client .list-client', {
        autoAlpha: 0,
        y: 100,
        duration: 0.5
      }, 0.5)
  }, [loading, loadingProduct, loadingHomePage])

  if (loading || loadingProduct || loadingHomePage) return <IntroOverlay />
  return (
    <main
      className={`${inter.className}`}
    >
      <PublicHead
        title="high-speed-door, rapid-door, pintu-high-speed-door, pintu-rapid-door, harga-high-speed-door, harga-rapid-door, jual-high-speed-door, jual-rapid-door, pvc-roller-shutter-door- CONVENIENCE auto door | COAD CONVENIENCE AUTO DOOR"
        description="COAD CONVENIENCE Auto Doors is the Korea’s largest company specializing in automatic doors. Focused on customers’ requirements to provide the excellent products and services" />
      {/* <Navbar /> */}
      <div className='min-h-screen'>
        <section className='overflow-hidden'>
          <Swiper
            navigation
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            className="banner-swiper"
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            onSlideChangeTransitionStart={function() {
              // bullet
              gsap
                .timeline({ defaults: { duration: 0.6 } })
                .fromTo('.swiper-wrapper .swiper-slide.swiper-slide-active .slide-img', {
                  duration: 1,
                  scale: 1.2,
                  autoAlpha: 0
                }, {
                  ease: 'power1.easeIn',
                  duration: 1,
                  scale: 1,
                  autoAlpha: 1
                })
                .fromTo('.swiper-wrapper .swiper-slide.swiper-slide-active .slide-content .title', {
                  x: 40,
                  autoAlpha: 0
                }, {
                  ease: 'power1.easeIn',
                  x: 0,
                  autoAlpha: 1
                }, "<0.5")
                .fromTo('.swiper-wrapper .swiper-slide.swiper-slide-active .slide-content .subtitle', {
                  x: 40,
                  autoAlpha: 0
                }, {
                  ease: 'power1.easeIn',
                  x: 0,
                  autoAlpha: 1
                }, "<0.3")
                .fromTo('.swiper-wrapper .swiper-slide.swiper-slide-active .slide-content .short-desc', {
                  x: 40,
                  autoAlpha: 0
                }, {
                  ease: 'power1.easeIn',
                  x: 0,
                  autoAlpha: 1
                }, "<0.2")
            }}
          >
            {slideBanner?.map((slide, idx) => (
              <SwiperSlide key={idx}>
                {slide?.isvideo === "true" ? (
                  <div className="videowrapper">
                    <div className='banner-image'>
                      <ReactPlayer
                        className="video"
                        url={slide?.videobanner?.mediaItemUrl}
                        width='100%'
                        height='100%'
                        muted={mute}
                        playing={true}
                        controls={false}
                        loop={true}
                        playsinline
                      />
                    </div>
                  </div>
                ) : (
                  <div className='slide-style-2 animation-style-02'>
                    <div className="slide-inner bg-height py-6 px-16">
                      <div className='banner-image absolute top-0 left-0 object-cover bg-cover bg-center w-full h-full brightness-75' style={{ backgroundImage: `url(${slide?.slideBanner?.sourceUrl})` }}></div>
                      <div className="relative z-10 w-full flex gap-0 md:gap-16">
                        <div className="flex-auto md:flex-[7]">
                          <div className="slide-content">
                            <div className='max-w-[640px]'>
                              <h2 className="title mb-4">
                                <span className='block'>{slide.title}</span>
                              </h2>
                              <p className="subtitle mb-10">
                                {slide.subtitle}
                              </p>
                              <p className="short-desc mb-10">
                                {isCurrentLang(slide.descEn, slide.desc)}
                              </p>
                              <div className="button-wrap pt-8 pb-2">
                                <a href='https://api.whatsapp.com/send?phone=6281211102255&text=Hi' target='_blank'>
                                  <span
                                    className="btn btn-custom-size lg-size btn-primary"
                                  >{isCurrentLang('Contact Us', 'Hubungi Kami')}</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-0 md:flex-[5]">
                        </div>
                      </div>
                    </div>
                  </div>
                )
                }
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <section className='py-28 section-product-category overflow-hidden'>
          <div className='bg-ornamen'></div>
          <div className='container'>
            <div className='section-title'>
              <h2 className='title'>{isCurrentLang('Featured Product', 'Produk Unggulan')}</h2>
            </div>
            <div>
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
                {productunggulan?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Link href={{
                      pathname: `/[lang]/product/${item?.linkproduct}`,
                      query: { lang: router?.query?.lang }
                    }}>
                      <div className='each-product-unggulan relative flex justify-center items-center'>
                        <Image
                          src={item?.imageproduct?.sourceUrl}
                          alt={index}
                          width={270}
                          height={337}
                          priority
                        />
                        <div className='label absolute bg-white  p-2 text-center text-xs'>
                          {item?.productname}
                        </div>
                      </div>

                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
        <section className='mt-0 md:mt-28 section-worldwide overflow-hidden'>
          <div className='container'>
            <div className='flex flex-col md:flex-row gap-16'>
              <div className='flex-1'>
                <div className='info-title'>
                  <div className='info-box'>
                    <div className='info-box-inner'>
                      <div className='content'>
                        <h3 className='info-title font-bold'>{isCurrentLang(productlistinfo?.titleEn, productlistinfo?.title)}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='info-detail-list'>
                {productlistinfo?.productlist?.map((product, idx) => (
                  <div className='list flex' key={idx}>
                    <h5>{product?.listnumber}</h5>
                    <div className='list-text'>
                      <h3>{isCurrentLang(product?.descriptionEn, product?.description)}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className='section-about-us pt-28 overflow-hidden'>
          <div className='container'>
            <div className='section-title'>
              <h2 className='title'>{isCurrentLang('About Us', 'Tentang Kami')}</h2>
            </div>
            <div className='flex flex-col md:flex-row flex-wrap justify-center md:justify-start gap-4'>
              <div className='flex items-center flex-1 homebanner-about-us-desc'>
                <div className='flex flex-col justify-center w-[80%]'>
                  <h3 className='text-4xl font-bold text-[#37a76b] mb-3'>COAD Indonesia:</h3>
                  <p className='text-2xl font-bold text-[#333333] mb-6'>{isCurrentLang(aboutus?.titleEn, aboutus?.title)}</p>
                  <p className='text-xl text-[#666666] leading-normal'>{isCurrentLang(aboutus?.descEn, aboutus?.desc)}</p>
                </div>
              </div>
              <div className='flex-1 homebanner-about-us'>
                <Image src={aboutUsBanner} alt='about us' width={'100%'} />
              </div>
            </div>
          </div>
        </section>
        <section className='mt-28 pb-24 section-our-client overflow-hidden'>
          <div className='container'>
            <div className='section-title'>
              <h2 className='title'>{isCurrentLang('Trusted By Our Client', 'Dipercaya Oleh Klien Kami')}</h2>
            </div>
            <div className='flex flex-wrap justify-center md:justify-start gap-4'>
              <div className='flex-initial w-[70%]'>
                <h3 className='desc text-xl text-[#666666] leading-normal'>{isCurrentLang(ourclient?.descriptionEn, ourclient?.description)}</h3>
              </div>
            </div>
            <div className='list-client'>
              <div className='flex flex-wrap gap-8 mt-16 mx-auto justify-center items-center'>
                <Swiper
                  modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                  initialSlide={3}
                  loop={false}
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
                  {ourclient?.listclient?.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className='each' key={index}>
                        <Image
                          src={item?.logo?.sourceUrl}
                          alt={item?.logo?.sourceUrl}
                          width={120}
                          height={120}
                          className="w-full h-auto"
                          priority
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
