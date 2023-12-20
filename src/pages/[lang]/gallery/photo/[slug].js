import React from 'react'
import { gql, useQuery } from "@apollo/client";
import Loader from '@/components/Loader';
import isCurrentLang from '@/utils/isCurrentLang'
import PublicHead from '@/components/PublicHead';
import { useRouter } from "next/router";
import TabsPhoto from '@/components/TabsPhoto';

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
    const router = useRouter();
    const { slug } = router?.query;
    const MY_QUERY = gql`
    query MyQuery($id: ID!){
        post(id: $id, idType: SLUG) {
            galleryPhoto {
              catalog {
                thumb {
                  sourceUrl
                }
                title
              }
            }
          }
    }
`;

    const variables = {
        id: slug,
    };
    const { data, loading, error } = useQuery(MY_QUERY, { variables });
    const { catalog } = data?.post?.galleryPhoto ?? {}
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