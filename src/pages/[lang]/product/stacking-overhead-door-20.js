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

const index = () => {
    const router = useRouter()
    const lang = router?.query?.lang

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const { data, loading, error } = useQuery(gql`
    query {
        post(id: "coad-20-stacking-overhead-door", idType: SLUG) {
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
                title="high speed door indonesia , industrial door, rapid door, high speed rolling door- convenience auto door | overhead door | Product | COAD"
                description="this page shows over head door. this industrial door is designed for Logistics Center' doors." />
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
                                <p>Overhead Door</p>
                            </div>
                            <h3 className='subtitle mb-4'>{isCurrentLang('Specification', 'Spesifikasi')}</h3>

                            <div>
                                {spec?.map((list, index) => {
                                    return (
                                        <dl className="border-b py-4" key={index}>
                                            <div className="flex flex-col pb-3">
                                                <dt className="mb-1 text-gray-500 text-lg font-semibold md:text-lg dark:text-gray-400">{list?.title}</dt>
                                                <dd className='list-disc ml-3'>
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
                                <span>Overhead Door Model <br /> C-20</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div className='header-title'>
                                <span>Overhead Door Model <br /> C-30</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-0 md:gap-4 list list-first' data-title='>Maximum Size'>
                        <div className='flex-1'>Maximum Size</div>
                        <div className='flex-1'>
                            <div>
                                <span>(W) 8000mm * (H) 5000mm</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <span>(W) 11000mm * (H) 8000mm</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 list' data-title='Opening/closing speed'>
                        <div className='flex-1'>Opening/closing speed</div>
                        <div className='flex-1'>
                            <div>
                                <span>0.3~0.7m/s</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <span>0.2~0.3m/s</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 list' data-title='Maximum wind speed'>
                        <div className='flex-1'>Maximum wind speed</div>
                        <div className='flex-1'>
                            <div>
                                <span>45m/sec</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <span>45m/sec</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 list' data-title='Thermal conductivity'>
                        <div className='flex-1'>Thermal conductivity</div>
                        <div className='flex-1'>
                            <div>
                                <span>0.021W/mk</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <span>0.021W/mk</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 list' data-title='Operation principle'>
                        <div className='flex-1'>Operation principle</div>
                        <div className='flex-1'>
                            <div>
                                <span>Chain</span>
                                <span>
                                    <img className='mx-auto' src='/assets/ornamen/chain.png' alt='chain' />
                                </span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <span>Cable</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 list' data-title='Rolling door type'>
                        <div className='flex-1'>Rolling door type</div>
                        <div className='flex-1'>
                            <div>
                                <span>Stacking</span>
                                <span>
                                    <img className='mx-auto' src='/assets/ornamen/stacking.png' alt='stacking' />
                                </span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <span>Basic series of sliding doors, vertical</span>
                                <div className='flex flex-wrap'>
                                    <div className='w-1/2'>
                                        <img className='mx-auto' src='/assets/ornamen/door-tb-1.png' alt='doors' />
                                    </div>
                                    <div className='w-1/2'>
                                        <img className='mx-auto' src='/assets/ornamen/door-tb-2.png' alt='doors' />
                                    </div>
                                    <div className='w-1/2'>
                                        <img className='mx-auto' src='/assets/ornamen/door-tb-3.png' alt='doors' />
                                    </div>
                                    <div className='w-1/2'>
                                        <img className='mx-auto' src='/assets/ornamen/door-tb-4.png' alt='doors' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 list' data-title='Panel'>
                        <div className='flex-1'>Panel</div>
                        <div className='flex-1'>
                            <div>
                                <span>Polyurethane (PU) 50mm</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <span>Polyurethane (PU) 50mm</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 list' data-title='Motor'>
                        <div className='flex-1'>Motor</div>
                        <div className='flex-1'>
                            <div>
                                <span>SUMITOMO HYPONIC-GEARED MOTOR(IP44)</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <span>OVERHEADDOOR WORM GEAR MOTOR (90Nm-160Nm)</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 list' data-title='Outstanding Features'>
                        <div className='flex-1'>Outstanding Features</div>
                        <div className='flex-1'>
                            <div>
                                <span className='text-[#37A76B]'>Specialized for narrow ceilings, 3 times faster than conventional doors</span>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div>
                                <span className='text-[#37A76B]'>Save energy and provide an effective anti-theft solution</span>
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
                    {specdetailgroup?.title && (
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
                                <div className="flex flex-col md:flex-row gap-4 items-center pb-3">
                                    {list?.thumb && <div className=" pt-4">
                                        <img className='w-[180px] object-contain' src={list?.thumb?.sourceUrl} alt="Spec Motor" />
                                    </div>}
                                    <div className="detail min-w-0 pt-8 ms-4">
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
                        <Benefit link='industrial-overhead-door-30' lang={lang} thumb={'/assets/coad-images/product/COAD-30-Industrial-Overhead-Door/1.png'} title='COAD Industrial Overhead Door 30' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default index