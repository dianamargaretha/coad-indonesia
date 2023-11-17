import React from 'react'
import { gql, useQuery } from "@apollo/client";
import Loader from '@/components/Loader';
import isCurrentLang from '@/utils/isCurrentLang'
// gallery - photo
const Benefit = ({ imgUrl, title }) => {
    return (
        <div className='card-benefit'>
            <div className='flex gap-2 justify-start items-center mb-4'>
                <h2 className='text-h5-m lg:text-h5 font-semibold'>{title}</h2>
            </div>
            <img width='100%' src={imgUrl} alt={title} />
        </div>
    )
}


const video = () => {
    const { data, loading, error } = useQuery(gql`
    query {
        post(id: "gallery-photo", idType: SLUG) {
            galleryphoto {
              catalog {
                thumb {
                  sourceUrl
                }
                title
              }
            }
          }
    }
    `);
    const { catalog } = data?.post?.galleryphoto ?? {}
    console.log(catalog)
    return (
        <div>
            <div className='gallery-wrapper'>
                <div className='container py-16'>
                    <div className='section-title'>
                        <h2 className='title uppercase'>{isCurrentLang('Photos', 'Foto')}</h2>
                    </div>
                    {loading && <div className='flex justify-center'>
                        <Loader />
                    </div>}
                    <div className='flex flex-wrap justify-center gap-4'>
                        {catalog?.map((list, index) => {
                            return <Benefit key={index} title={list?.title} imgUrl={list?.thumb?.sourceUrl} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default video