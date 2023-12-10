import React from 'react'
import isCurrentLang from '@/utils/isCurrentLang'
import { gql, useQuery } from "@apollo/client";
import { useRouter } from 'next/router'
import Loader from '@/components/Loader';
import PublicHead from '@/components/PublicHead';

const Benefit = ({ imgUrl, title, fileUrl, type }) => {
    return (
        <div className='card-benefit'>
            <a href={fileUrl} download target='_blank'>
                <div className='flex gap-2 justify-start items-center mb-4'>
                    <div className={`icon ${type === 'docs' ? 'docs' : ''}`}></div>
                    <h2 className='text-h5-m lg:text-h5'>{title}</h2>
                </div>
                <img width='100%' src={imgUrl} alt={title} />
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
            <PublicHead title="high speed door indonesia , industrial door, rapid door, high speed rolling door- convenience auto door | Catalog | Drawings | COAD" />
            <div className='container py-16'>
                <div className='section-title'>
                    <h2 className='title uppercase'>{isCurrentLang('Drawings', 'Gambar')}</h2>
                </div>
                {loading && <div className='flex justify-center'>
                    <Loader />
                </div>}
                <div className='flex flex-wrap justify-start gap-4'>
                    {drawing?.map((list, index) => {
                        return (
                            <div key={index}>
                                <Benefit type={list?.type} title={list?.title} fileUrl={list?.file?.mediaItemUrl} imgUrl={list?.thumb?.sourceUrl} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default catalog