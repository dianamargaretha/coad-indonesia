import React, { useRef, useState } from 'react';
import { gql, useQuery } from "@apollo/client";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import isCurrentLang from '@/utils/isCurrentLang';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PublicHead from '@/components/PublicHead';

const Benefit = ({ thumb, title, link, lang }) => {
    return (
        <Link href={{
            pathname: `/[lang]/product/${link}`,
            query: { lang: lang }
        }}>
            <div className='relative flex justify-center items-center'>

                <Image
                    src={thumb}
                    alt={title}
                    width={270}
                    height={337}
                    priority
                />
                <div className='absolute bg-white mx-10 p-2 text-center text-xs'>{title}</div>

            </div>
        </Link>
    )
}

const highSpeedDoor = () => {
    const router = useRouter()
    const lang = router?.query?.lang

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const { data, loading, error } = useQuery(gql`
    query {
        post(id: "c-2-slim-type", idType: SLUG) {
            detailProduct {
                product {
                  gallery {
                    thumb {
                      sourceUrl
                    }
                  }
                  title
                  spec {
                    specList
                    title
                  }
                  specdetail {
                    specList
                    title
                    thumb {
                        sourceUrl
                      }
                  }
                  specdetailgroup {
                    title
                    listspec {
                      desc
                      title
                      thumb {
                        sourceUrl
                      }
                    }
                  }
                }
              }
          }
    }
    `);

    const { gallery, title, spec, specdetail, specdetailgroup } = data?.post?.detailProduct?.product ?? {}
    return (
        <div className='section-product'>
            <PublicHead
                title="high speed door indonesia , industrial door, rapid door, high speed rolling door- convenience auto door | K-2(Slim Model) | Speed door | Product | COAD"
                description=" this page shows Slim Model. This high speed door's motor is mounted to the drum and the automatic doors have a strong advantage in waterproofing." />
            <div className='container mt-12 pb-28'>
                <div className='flex flex-col md:flex-row  gap-16'>
                    <div className='w-12/12 md:w-5/12'>
                        <div>
                            <Swiper
                                style={{
                                    '--swiper-navigation-color': '#fff',
                                    '--swiper-pagination-color': '#fff',
                                }}
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                            >
                                {gallery?.map(((thumb, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={thumb?.thumb?.sourceUrl} />
                                    </SwiperSlide>
                                )))}
                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                spaceBetween={10}
                                slidesPerView={6}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper"
                            >
                                {gallery?.map(((thumb, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={thumb?.thumb?.sourceUrl} />
                                    </SwiperSlide>
                                )))}
                            </Swiper>
                        </div>
                    </div>

                    <div className='w-12/12 md:w-7/12'>
                        <div>
                            <h2 className='title mb-1'>{title}</h2>
                            <div className='flex justify-start gap-4 mb-4 text-[#8c93a0]'>
                                <h4 className='font-bold'>Category :</h4>
                                <p>High Speed Door</p>
                            </div>
                            <h3 className='subtitle mb-4'>{isCurrentLang('Specification', 'Spesifikasi')}</h3>

                            <div>
                                {spec?.map((list, index) => {
                                    return (
                                        <dl className="border-b py-4" key={index}>
                                            <div className="flex flex-col pb-3">
                                                <dt className="mb-1 text-gray-500 text-lg font-semibold md:text-lg dark:text-gray-400">{list?.title}</dt>
                                                <dd className='list-disc'>
                                                    <div dangerouslySetInnerHTML={{ __html: list?.specList }} />
                                                </dd>
                                            </div>
                                        </dl>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Spec table */}
            <div className='pb-28 spec-table'>
                <div className='container'>
                    <div className='section-title'>
                        <h2 className='title'>{isCurrentLang('Specification', 'Spesifikasi')}</h2>
                    </div>
                    <div className='flex gap-4 header-title-wrap'>
                        <div className='flex-1'></div>
                        <div className='flex-1'>
                            <div className='header-title'>
                                <span>Standard Model <br /> C-VE</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div className='header-title'>
                                <span>Standard Model <br /> C-2</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div className='header-title'>
                                <span>Standard Model <br /> C-3</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-0 md:gap-4 list list-first' data-title='>Maximum Size'>
                        <div className='flex-1'>Maximum Size</div>
                        <div className='flex-1'>
                            <div>
                                <span>(W) 6000mm * (H) 5000mm</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <span>(W) 8000mm * (H) 6000mm</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <span>(W) 8000mm * (H) 6000mm</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 list' data-title='Opening/closing speed'>
                        <div className='flex-1'>Opening/closing speed</div>
                        <div className='flex-1'>
                            <div>
                                <span>0.4 - 1.0 m/s</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <span>~1.5 m/s</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <span>~1.5 m/s</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 list' data-title='Maximum wind speed'>
                        <div className='flex-1'>Maximum wind speed</div>
                        <div className='flex-1'>
                            <div>
                                <span>20m/sec</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <span>20m/sec</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <span>40m/sec</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 list' data-title='Curtains'>
                        <div className='flex-1'>Curtains</div>
                        <div className='flex-1'>
                            <div>
                                <span>PVC sheet 1mm</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <span>PVC sheet 2mm</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <span>PVC sheet 2mm</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 list' data-title='Windshield Safety bar'>
                        <div className='flex-1'>Windshield Safety bar</div>
                        <div className='flex-1'>
                            <div>
                                <span><img className='mx-auto' src='/assets/ornamen/check-mark.svg' alt='check' /></span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <span><img className='mx-auto' src='/assets/ornamen/check-mark.svg' alt='check' /></span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <span><img className='mx-auto' src='/assets/ornamen/check-mark.svg' alt='check' /></span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 list' data-title='Internal structure'>
                        <div className='flex-1'>Internal structure</div>
                        <div className='flex-1'>
                            <div>
                                <span>Built-in self-contained bristles</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <span>Built-in self-contained bristles</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <span>The two sides of the curtains are linked by a closed zipper (TOOTH)</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 list' data-title='Self-healing feature'>
                        <div className='flex-1'>Self-healing feature</div>
                        <div className='flex-1'>
                            <div>
                                <span><img className='mx-auto' src='/assets/ornamen/close-icon.svg' alt='close' /></span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <span><img className='mx-auto' src='/assets/ornamen/close-icon.svg' alt='close' /></span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <span><img className='mx-auto' src='/assets/ornamen/check-mark.svg' alt='check' /></span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 list' data-title='Outstanding Features'>
                        <div className='flex-1'>Outstanding Features</div>
                        <div className='flex-1'>
                            <div>
                                <span>Low cost</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <span>Suitable for many different production plants</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <span>Save on maintenance costs with auto-recovery
                                    Can design doors with large sizes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-28">
                <div className='container'>
                    <div className='section-title'>
                        <h2 className='title'>{isCurrentLang('Specification Detail', 'Detail Spesifikasi')}</h2>
                    </div>
                    {specdetailgroup && (
                        <div className='each-spec-wrapper border-b pt-8 pb-3'>
                            <h3 className='title'>{specdetailgroup?.title}</h3>
                            <div className='flex flex-wrap flex-row  pt-8 pb-3'>
                                {specdetailgroup?.listspec?.map(list => (
                                    <div className='w-12/12 md:w-6/12'>
                                        <div className="flex flex-col md:flex-row gap-4 items-center pb-3">
                                            {list?.thumb && <div className="flex-shrink-0 pt-4">
                                                <img className=':w-[180px] object-contain' src={list?.thumb?.sourceUrl} alt="Spec Motor" />
                                            </div>}
                                            <div className="detail flex-1 min-w-0 pt-8 ms-4">
                                                <div dangerouslySetInnerHTML={{ __html: list?.desc }} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {specdetail?.map((list, index) => {
                        return (
                            <div className='each-spec-wrapper border-b pt-8 pb-3' key={index}>
                                <h3 className='title'>{list?.title}</h3>
                                <div className="flex flex-col md:flex-row  gap-4 items-center pb-3">
                                    {list?.thumb && <div className="flex-shrink-0 pt-4">
                                        <img className='w-[180px] object-contain' src={list?.thumb?.sourceUrl} alt="Spec Motor" />
                                    </div>}
                                    <div className="detail flex-1 min-w-0 pt-8 ms-4">
                                        <div dangerouslySetInnerHTML={{ __html: list?.specList }} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='py-28 bg-[#f9f9f9]'>
                <div className='container'>
                    <div className='section-title'>
                        <h2 className='title'>{isCurrentLang('Other Product', 'Product Lainnya')}</h2>
                    </div>
                    <div className='flex flex-wrap gap-4'>
                        <Benefit link='standard-model-c-1' lang={lang} thumb={'/assets/coad-images/product/C-1-Standard-Type/1.png'} title='COAD C-1 Standard Type' />
                        <Benefit link='recovery-type-c-3' lang={lang} thumb={'/assets/coad-images/product/C-3-Recovery-Type/1.png'} title='COAD C-3 Recovery Type' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default highSpeedDoor