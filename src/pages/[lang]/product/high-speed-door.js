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

const highSpeedDoor = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const { data, loading, error } = useQuery(gql`
    query {
        post(id: "high-speed-door", idType: SLUG) {
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
                }
              }
          }
    }
    `);

    const { gallery, title, spec, specdetail } = data?.post?.detailProduct?.product ?? {}
    return (
        <div className='section-product'>
            <div className='container mt-12 pb-28'>
                <div className='flex gap-16'>
                    <div className='w-5/12'>
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

                    <div className='w-7/12'>
                        <div>
                            <h2 className='title mb-2'>{title}</h2>
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

            <div className="pb-28">
                <div className='container'>
                    <div className='section-title'>
                        <h2 className='title'>{isCurrentLang('Specification Detail', 'Detail Spesifikasi')}</h2>
                    </div>
                    {specdetail?.map((list, index) => {
                        return (
                            <div className='each-spec-wrapper border-b pt-8 pb-3' key={index}>
                                <h3 className='title'>{list?.title}</h3>
                                <div className="flex gap-4 items-center pb-3">
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

        </div>
    )
}

export default highSpeedDoor