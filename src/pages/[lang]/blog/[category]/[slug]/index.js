import React from 'react'
import { gql, useQuery } from "@apollo/client";
import { sanitize } from '@/utils/miscellaneous';
import Loader from '@/components/Loader';
import { useRouter } from 'next/router';
import { format } from 'date-fns'
import PublicHead from '@/components/PublicHead';
import { NextSeo } from 'next-seo';


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
            featuredImage {
                node {
                sourceUrl(size: LARGE)
                altText
                }
            }
            seo {
                title
                metaDesc
                metaRobotsNoindex
                metaRobotsNofollow
                opengraphAuthor
                opengraphDescription
                opengraphTitle
                opengraphImage {
                  sourceUrl
                }
                opengraphSiteName
                opengraphPublishedTime
                twitterTitle
                twitterDescription
                twitterImage {
                  sourceUrl
                }
                opengraphUrl
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
            <style jsx global>{`
               html {
                    font-size: 62.5%; /* 1rem = 10px */
                    scroll-behavior: smooth;
                }
                body {
                    font-size: 1.8rem;
                }
                .btn-fb {
                    bottom: 7.5rem;
                    right: 2rem;
                }
            `}</style>
            <NextSeo
                title={data?.post?.seo?.title}
                description={data?.post?.seo?.opengraphDescription || data?.post?.seo?.metaDesc}
                canonical={data?.post?.seo?.opengraphUrl}
                noindex={"noindex" === data?.post?.seo?.metaRobotsNoindex}
                nofollow={"nofollow" === data?.post?.seo?.metaRobotsNofollow}
                openGraph={{
                    type: 'website',
                    locale: 'en_US',
                    url: data?.post?.seo?.opengraphUrl,
                    title: data?.post?.seo?.opengraphTitle,
                    description: data?.post?.seo?.opengraphDescription,
                    images: [
                        {
                            url: data?.post?.seo?.opengraphImage?.sourceUrl,
                            width: 1280,
                            height: 720
                        }
                    ],
                    /* eslint-disable */
                    site_name: data?.post?.seo?.opengraphSiteName
                    /* eslint-enable */
                }}
            />
            <PublicHead
                title={data?.post?.title ?? `COAD Indonesia | pintu-high-speed-door, overhead-door, garage-door | Catalog | Gallery | COAD`}
                description={data?.post?.blog?.metaDescription ?? `COAD is the largest company for automatic doors in Indonesia. Producing and repairing high speed door, overhead door, garage door. Guaranteed warranty program`}
                data={data}
                asPath={router?.asPath}
            />
            <h1 className='text-4xl md:text-[4.25rem] md:leading-tight font-extrabold text-center uppercase mb-8'>{data?.post?.title}</h1>
            {loading ? '' : <p className="text-3xl text-center mb-16">{format(data?.post?.date, 'dd MMMM yyyy') ?? ''}</p>}
            <div className='wp-section'>
                <div>
                    {loading ?
                        <div className='flex justify-center'>
                            <Loader />
                        </div> : <div className='entry-content' dangerouslySetInnerHTML={{ __html: sanitize(data?.post?.content ?? '') }} />
                    }
                </div>
            </div>
        </div>
    )
}

export default index