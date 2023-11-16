import React from 'react'
import isCurrentLang from '@/utils/isCurrentLang'
import { gql, useQuery } from "@apollo/client";
import { useRouter } from 'next/router'

const Benefit = ({ imgUrl, title, fileUrl, type }) => {
    return (
        <div className='card-benefit'>
            <a href={fileUrl} download>
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
    console.log({ router })
    const { data, loading, error } = useQuery(gql`
    query {
        post(id: "gallery-catalog", idType: SLUG) {
            gallerycatalog {
              catalog {
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
    const { catalog } = data?.post?.gallerycatalog ?? {}
    console.log({ catalog })
    return (
        <div className='gallery-wrapper'>
            <div className='container py-16'>
                <div className='section-title'>
                    <h2 className='title uppercase'>{isCurrentLang('Catalog', 'Katalog')}</h2>
                </div>
                {loading && 'loading...'}
                <div className='flex flex-wrap justify-center gap-4'>
                    {catalog?.map((list, index) => {
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