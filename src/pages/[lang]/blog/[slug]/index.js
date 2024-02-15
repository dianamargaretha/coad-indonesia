import React from 'react'
import { gql, useQuery } from "@apollo/client";
import { sanitize } from '@/utils/miscellaneous';
import Loader from '@/components/Loader';
import { useRouter } from 'next/router';
import { format } from 'date-fns'
import PublicHead from '@/components/PublicHead';

const index = () => {
    const router = useRouter();
    const { slug } = router?.query;
    const MY_QUERY = gql`
    query MyQuery($id: ID!){
        post(id: $id, idType: SLUG) {
            excerpt
            id
            title
            content
            slug
            date
            blog {
                metaDescription
              }
            featuredImage {
                node {
                sourceUrl(size: LARGE)
                altText
                }
            }
          }
    }
    `
    const variables = {
        id: slug,
    };

    const { data, loading, error } = useQuery(MY_QUERY, { variables })
    return (
        <div className='container mt-16 mb-24'>
            <PublicHead
                title={data?.post?.title ?? `COAD Indonesia | pintu-high-speed-door, overhead-door, garage-door | Catalog | Gallery | COAD`}
                description={data?.post?.blog?.metaDescription ?? `COAD is the largest company for automatic doors in Indonesia. Producing and repairing high speed door, overhead door, garage door. Guaranteed warranty program`} />
            <h2 className='text-4xl text-center uppercase mb-4'>{data?.post?.title}</h2>
            {loading ? '' : <p className="text-lg text-center mb-16">{format(data?.post?.date, 'dd MMMM yyyy') ?? ''}</p>}
            <div className='wp-section'>
                {loading ?
                    <div className='flex justify-center'>
                        <Loader />
                    </div> : <div dangerouslySetInnerHTML={{ __html: sanitize(data?.post?.content ?? '') }} />
                }
            </div>
        </div>
    )
}

export default index