import React from 'react'
import isCurrentLang from '@/utils/isCurrentLang'
import { gql, useQuery } from "@apollo/client";
import { useRouter } from 'next/router'
import Loader from '@/components/Loader';
import PublicHead from '@/components/PublicHead';
import Image from 'next/image';

const Benefit = ({ imgUrl, title, fileUrl, type }) => {
    return (
        <div className='card-benefit'>
            <a href={fileUrl} download target='_blank'>
                <div className='flex gap-2 justify-start items-center mb-4'>
                    <div className={`icon ${type === 'docs' ? 'docs' : ''}`}></div>
                    <h2 className='text-h5-m lg:text-h5'>{title}</h2>
                </div>
                <div className='w-[248px] h-[248px] md:w-[343px] md:h-[343px] relative'>
                    <div className='absolute image-container left-0 top-0' style={{ height: '100%' }}>
                        <Image src={imgUrl} alt={title} fill style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            </a>
        </div>
    )
}

const catalog = () => {
    const router = useRouter()
    const { data, loading, error } = useQuery(gql`
    query {
        post(id: "gallery-drawings", idType: SLUG) {
            galleryDrawing {
              drawing {
                fieldGroupName
                file {
                  mediaItemUrl
                }
                thumb {
                  sourceUrl
                }
                title
                type
              }
            }
          }
    }
    `);
    const { drawing } = data?.post?.galleryDrawing ?? {}
    return (
        <div className='gallery-wrapper'>
            <PublicHead
                title="COAD Indonesia | pintu-high-speed-door, overhead-door, garage-door | Catalog | Drawings | COAD"
                description="COAD is the largest company for automatic doors in Indonesia. Producing and repairing high speed door, overhead door, garage door. Guaranteed warranty program" />
            <div className='container py-16'>
                <div className='section-title'>
                    <h2 className='title uppercase'>{isCurrentLang('Drawings', 'Gambar')}</h2>
                </div>
                {loading && <div className='flex justify-center'>
                    <Loader />
                </div>}
                <div className='flex flex-wrap justify-center md:justify-start gap-4'>
                    {drawing?.map((list, index) => {
                        return (
                            <Benefit key={index} type={list?.type} title={list?.title} fileUrl={list?.file?.mediaItemUrl} imgUrl={list?.thumb?.sourceUrl} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default catalog