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
import SpecOverheadDoor from '@/components/SpecOverheadDoor';

const Benefit = ({ thumb, title, link, lang }) => {
    return (
        <Link href={{
            pathname: `/[lang]/product/${link}`,
            query: { lang: lang }
        }}>
            <div className='benefit relative flex justify-center items-center'>

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
        post(id: "coad-20-stacking-overhead-door-2025", idType: SLUG) {
			products {
				title
				gallery {
					thumb {
					sourceUrl
					}
				}
				spec {
					title
					speclist
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
				specdetail {
					title
					speclist
					thumb {
					sourceUrl
					}
				}
			}
          }
    }
    `);
    const { gallery, title, spec, specdetailgroup, specdetail } = data?.post?.products ?? {}
    return (
        <div className='section-product'>
            <PublicHead
                title="COAD Indonesia | pintu-high-speed-door, overhead-door, garage-door | stacking overhead door 20 | Product | COAD"
                description="COAD is the largest company for automatic doors in Indonesia. Producing and repairing high speed door, overhead door, garage door. Guaranteed warranty program"
            />
            <div className='container mt-12 pb-28'>
                <div className='block md:hidden mb-8'>
                    <h2 className='title mb-1'>{title}</h2>
                    <div className='flex justify-start gap-4 mb-4 text-[#8c93a0]'>
                        <h4 className='font-bold'>Category :</h4>
                        <p>Overhead Door</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row  gap-16'>
                    <div className='w-12/12 md:w-7/12 order-2 md:order-1'>
                        <div>
                            <div className='hidden md:block'>
                                <h2 className='title mb-1'>{title}</h2>
                                <div className='flex justify-start gap-4 mb-4 text-[#8c93a0]'>
                                    <h4 className='font-bold'>Category :</h4>
                                    <p>Overhead Door</p>
                                </div>
                            </div>
                            <h3 className='subtitle mb-4'>{isCurrentLang('Specification', 'Spesifikasi')}</h3>

                            <div>
                                {spec?.map((list, index) => {
                                    return (
                                        <dl className="border-b py-4" key={index}>
                                            <div className="flex flex-col pb-3">
                                                <dt className="mb-1 text-gray-500 text-lg font-semibold md:text-lg dark:text-gray-400">{list?.title}</dt>
                                                <dd className='list-disc ml-3'>
                                                    <div dangerouslySetInnerHTML={{ __html: list?.speclist }} />
                                                </dd>
                                            </div>
                                        </dl>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className='w-12/12 md:w-5/12 order-1 md:order-2'>
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
            {/* Spec table */}
            <SpecOverheadDoor type={1} />
            <div className="pb-28">
                <div className='container'>
                    <div className='section-title'>
                        <h2 className='title'>{isCurrentLang('Specification Detail', 'Detail Spesifikasi')}</h2>
                    </div>
                    {specdetailgroup?.title && (
                        <div className='each-spec-wrapper border-b pt-8 pb-3'>
                            <h3 className='title'>{specdetailgroup?.title}</h3>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 pb-3'>
                                {specdetailgroup?.listspec?.map(list => (
                                    <div className='pb-4 md:pb-8'>
                                        <div className="flex flex-col gap-4 pb-3">
                                            {list?.thumb && <div className="flex-shrink-0 pt-4">
                                                <img className='w-full md:w-auto md:max-w-full px-4 object-contain' src={list?.thumb?.sourceUrl} alt={list?.title} />
                                            </div>}
                                            <div className="detail flex-1 min-w-0 pt-8 ms-4">
                                                <h4 className='text-xl mb-4 font-medium'>{list?.title}</h4>
                                                <div dangerouslySetInnerHTML={{ __html: list?.desc }} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {specdetail && (
                        <div className='each-spec-wrapper border-b pt-8 pb-3'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 pb-3'>
                                {specdetail?.map(list => (
                                    <div className='pb-4 md:pb-8'>
                                        <div className="flex flex-col gap-4 pb-3">

                                            <h3 className='title'>{list?.title}</h3>
                                            {list?.thumb && <div className="flex-shrink-0 pt-4">
                                                <img className='w-full md:w-auto md:max-w-full px-4 object-contain' src={list?.thumb?.sourceUrl} alt={list?.title} />
                                            </div>}
                                            <div className="detail flex-1 min-w-0 pt-8 ms-4 text-justify">
                                                <div dangerouslySetInnerHTML={{ __html: list?.speclist }} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className='py-28 bg-[#f9f9f9]'>
                <div className='container'>
                    <div className='section-title'>
                        <h2 className='title'>{isCurrentLang('Other Product', 'Product Lainnya')}</h2>
                    </div>
                    <div className='flex flex-wrap gap-4'>
                        <Benefit link='industrial-overhead-door-30' lang={lang} thumb={'/assets/coad-images/product/COAD-30-Industrial-Overhead-Door/1.jpeg'} title='COAD-30 Industrial Overhead Door' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default index