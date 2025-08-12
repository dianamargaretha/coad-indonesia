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
import Image from 'next/image';

// gallery - photo
const Benefit = ({ imgUrl, title }) => {
    return (
        <div className='benefit flex justify-center items-center p-4 w-[280px] h-[280px] md:w-[375px] md:h-[375px] relative'>
            <div className='absolute image-container left-0 top-0'>
                <Image src={imgUrl} alt={title} fill className={'image'} />
            </div>
            <div className='relative z-10 p-4'>
                <div className='p-2 border-4 border-white'>
                    <h2 className='title text-3xl bg-white p-2 font-light uppercase word-spacing-[-0.15em]'>{title}</h2>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
	const {slug} = await context?.query;
	return { props: {
		metaSlug: slug
	} }
}

const video = ({metaSlug}) => {
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
            <PublicHead
                title="COAD Indonesia | pintu-high-speed-door, overhead-door, garage-door | Catalog | Gallery | COAD"
                description="COAD is the largest company for automatic doors in Indonesia. Producing and repairing high speed door, overhead door, garage door. Guaranteed warranty program"
				canonical={`/gallery/photo/${metaSlug}`} />
            <div className='gallery-wrapper'>
                <div className='container py-16'>
                    <div className='section-title'>
                        <h2 className='title uppercase'>{isCurrentLang('Photos', 'Foto')}</h2>
                    </div>
                    <TabsPhoto />
                    {loading && <div className='flex justify-center'>
                        <Loader />
                    </div>}
                    <div className='flex flex-wrap justify-center md:justify-start gap-4'>
                        {photogroup?.map((list, index) => {
                            return (
                                <div key={index} className='flex justify-center' onClick={() => handleModalSlide(list?.slug)}>
                                    <Benefit key={index} title={list?.title} imgUrl={list?.thumb?.sourceUrl} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {showModal && (
                <div className='fixed top-0 left-0 w-full h-[100vh] z-[100000] bg-white overflow-scroll flex justify-center items-center'>
                    <div className='max-w-[640px] lg:max-w-[700px] w-full'>
                        <div className='absolute top-4 right-4 cursor-pointer' onClick={() => isShowModal(false)}>close</div>
                        <Swiper
                            className='test lg:h-[700px] w-full'
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
                                        <div className='benefit flex items-center p-4 w-[280px] h-[280px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] relative'>
                                            <div className='absolute left-0 top-0 image-container'>
                                                <Image src={list?.thumb?.sourceUrl} alt={list?.title} layout="fill" className={'image'} />
                                            </div>
                                            <div className='relative p-4 z-10'>
                                                {list?.title && <h2 className='title text-2xl text-white p-2 border-4 border-white font-light uppercase word-spacing-[-0.15em]'>{list?.title}</h2>}
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