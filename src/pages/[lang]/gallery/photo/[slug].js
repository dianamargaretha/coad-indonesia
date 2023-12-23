import React, { useState } from 'react'
import { gql, useQuery } from "@apollo/client";
import Loader from '@/components/Loader';
import isCurrentLang from '@/utils/isCurrentLang'
import PublicHead from '@/components/PublicHead';
import { useRouter } from "next/router";
import TabsPhoto from '@/components/TabsPhoto';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

// import required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';

// gallery - photo
const Benefit = ({ imgUrl, title }) => {
    return (
        <div className='benefit flex items-center p-4 w-[280px] h-[280px] md:w-[375px] md:h-[375px] relative'>
            <img className='absolute w-full h-full object-cover left-0 top-0' width='100%' src={imgUrl} alt={title} />
            <div className='relative z-10'>
                <h2 className='title text-3xl text-white p-4 border-8 border-white font-light uppercase word-spacing-[-0.15em]'>{title}</h2>
            </div>
        </div>
    )
}


const video = () => {
    const router = useRouter();
    const [showModal, isShowModal] = useState(false);
    const [slideDetail, setSlideDetail] = useState()
    const { slug } = router?.query;

    const MY_QUERY = gql`
    query MyQuery($id: ID!){
        post(id: $id, idType: SLUG) {
            galleryPhotos {
                photogroup {
                  title
                  slug
                  thumb {
                    sourceUrl
                  }
                  slide {
                    title
                    thumb {
                      sourceUrl
                    }
                  }
                }
              }
          }
    }
    `

    const variables = {
        id: slug,
    };

    const { data, loading, error } = useQuery(MY_QUERY, { variables })
    const { photogroup } = data?.post?.galleryPhotos ?? {}
    const handleModalSlide = (slug) => {
        isShowModal(!showModal)
        setSlideDetail(photogroup?.filter(list => list.slug === slug))
    }
    return (
        <div>
            <PublicHead title="high speed door indonesia , industrial door, rapid door, high speed rolling door- convenience auto door | Catalog | Gallery | COAD" />
            <div className='gallery-wrapper'>
                <div className='container py-16'>
                    <div className='section-title'>
                        <h2 className='title uppercase'>{isCurrentLang('Photos', 'Foto')}</h2>
                    </div>
                    <TabsPhoto />
                    {loading && <div className='flex justify-center'>
                        <Loader />
                    </div>}
                    <div className='flex flex-wrap justify-start gap-4'>
                        {photogroup?.map((list, index) => {
                            return (
                                <div key={index} onClick={() => handleModalSlide(list?.slug)}>
                                    <Benefit key={index} title={list?.title} imgUrl={list?.thumb?.sourceUrl} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {showModal && (
                <div className='fixed top-0 left-0 w-full h-[100vh] z-[100000] bg-white overflow-scroll flex justify-center items-center'>
                    <div className='max-w-[500px] w-full p-4'>
                        <div className='absolute top-4 right-4 cursor-pointer' onClick={() => isShowModal(false)}>close</div>
                        <Swiper
                            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                            loop={false}
                            slidesPerView={1}
                            centeredSlides={true}
                            spaceBetween={32}
                            navigation
                            pagination={{ clickable: true }}
                            breakpoints={{
                                640: {
                                    spaceBetween: 20
                                },
                                768: {
                                    spaceBetween: 32
                                }
                            }}
                        >
                            {slideDetail[0].slide.map((list, index) => (
                                <SwiperSlide key={index}>
                                    <div className='flex justify-center'>
                                        <div className='benefit flex items-center p-4 w-[280px] h-[280px] md:w-[375px] md:h-[375px] relative'>
                                            <img className='absolute w-full h-full object-cover left-0 top-0' width='100%' src={list?.thumb?.sourceUrl} alt={list?.title} />
                                            <div className='relative z-10'>
                                                <h2 className='title text-2xl text-white p-2 border-4 border-white font-light uppercase word-spacing-[-0.15em]'>{list?.title}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}
        </div>
    )

}

export default video