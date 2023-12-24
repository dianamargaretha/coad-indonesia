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
import SpecHighSpeedDoor from '@/components/SpecHighSpeedDoor';

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
        post(id: "c-3-recovery-type", idType: SLUG) {
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
                title="high speed door indonesia , industrial door, rapid door, high speed rolling door- convenience auto door | K-3(Recovery Model) | Speed door | Product | COAD"
                description="this page shows Restoring Model. Premium automatic speed doors that automatically recover without additional cost to repair collision" />
            <div className='container mt-12 pb-28'>
                <div className='flex flex-col md:flex-row  gap-16'>
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
                                        <div className='image-container left-0 top-0'>
                                            <Image src={thumb?.thumb?.sourceUrl} alt={index} layout="fill" className={'image'} />
                                        </div>
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
                                        <div className='image-container left-0 top-0'>
                                            <Image src={thumb?.thumb?.sourceUrl} alt={index} layout="fill" className={'image'} />
                                        </div>
                                    </SwiperSlide>
                                )))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pb-28'>
                <div className='container'>
                    <div className='section-title'>
                        <h2 className='title'>{isCurrentLang('Video Detail', 'Detail Video')}</h2>
                    </div>
                    <video width="60%" height="240" controls>
                        <source src="/assets/coad-images/product/video/C-3.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            {/* Spec table */}
            <SpecHighSpeedDoor />
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
                                                <img className='w-[180px] object-contain' src={list?.thumb?.sourceUrl} alt="Spec Motor" />
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
                        <Benefit link='standard-model-c-1' lang={lang} thumb={'/assets/coad-images/product/C-1-Standard-Type/1.png'} title='COAD C-1 Standard Type' />
                        <Benefit link='slim-type-c-2' lang={lang} thumb={'/assets/coad-images/product/C-2-Slim-Type/1.png'} title='COAD C-2 Slim Type' />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default highSpeedDoor