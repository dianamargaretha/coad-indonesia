import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";
import { format } from 'date-fns'
import { getPageOffset, PER_PAGE_FIRST, PER_PAGE_REST, totalPagesCount } from '@/utils/pagination';
import Pagination from '@/components/blog/pagination';
import PublicHead from "@/components/PublicHead";
import isCurrentLang from "@/utils/isCurrentLang";

export default function BlogHome() {
    const router = useRouter();
    const { pageNo } = router?.query
    const offset = getPageOffset(pageNo)
    const MY_QUERY = gql`
    query MyQuery($perPage: Int, $offset: Int, $category: String){
      posts(where: { categoryName: $category, offsetPagination: { size: $perPage, offset: $offset }}) {
        nodes {
          id
          title
          content
          slug
          uri
          date
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
        }
        pageInfo {
          hasNextPage
          offsetPagination {
            total
            hasPrevious
            hasMore
          }
        }
      }
    }
    `
    const variables = {
        perPage: '1' === pageNo ? PER_PAGE_FIRST : PER_PAGE_REST,
        offset,
        category: router?.query?.category
    };

    const { data, loading, error } = useQuery(MY_QUERY, { variables })

    const pagesCount = totalPagesCount(data?.posts?.pageInfo?.offsetPagination?.total ?? 0);

    if (data?.posts?.nodes == 0) return <div className="container">No Data</div>
    return (
        <>
            <PublicHead
                title="COAD Indonesia | pintu-high-speed-door, overhead-door, garage-door | Blog | COAD"
                description="COAD is the largest company for automatic doors in Indonesia. Producing and repairing high speed door, overhead door, garage door. Guaranteed warranty program" />
            <div className="container my-8">
                <div className="flex justify-center">
                    <div className='section-title'>
                        <h2 className='title uppercase'>{isCurrentLang('Blog', 'Blog')}</h2>
                    </div>
                </div>
                {loading ?
                    <div className='flex justify-center'>
                        <Loader />
                    </div> :
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        {data?.posts?.nodes.map((post, index) => {
                            return (
                                <div className="mb-8 w-[280px] md:w-[280px]" key={index}>
                                    <Link href={{
                                        pathname: '/[lang]/blog/[category]/[slug]',
                                        query: { lang: router?.query?.lang, category: router?.query?.category, slug: post?.slug }
                                    }}>
                                        <figure className="flex overflow-hidden mb-4">
                                            <div className="relative benefit flex justify-center items-center p-4 w-[280px] h-[280px] md:w-[280px] md:h-[280px]">
                                                <Image src={post?.featuredImage?.node?.sourceUrl ?? '/assets/images/400x225.webp'} alt={post?.featuredImage?.node?.altText} layout="fill" />
                                            </div>
                                        </figure>
                                        <p className="text-sm mb-1">{format(post?.date, 'dd MMMM yyyy') ?? ''}</p>
                                        <h2 className="font-bold mb-2 text-lg hover:text-[#2b6f65] capitalize" dangerouslySetInnerHTML={{ __html: post?.title ?? '' }} />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                }
                <div className="pb-8">
                    <Pagination pagesCount={pagesCount} postName={router?.query?.category} />
                </div>
            </div>
        </>
    );
}