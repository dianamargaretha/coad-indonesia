import React from 'react'
import isCurrentLang from '@/utils/isCurrentLang'
import { gql, useQuery } from "@apollo/client";
const Footer = () => {
    const { data: dataHomePage, loading: loadingHomePage, error: errorHomePage } = useQuery(gql`
  query {
    post(id: "homepage", idType: SLUG) {
      homepage {
        footer {
          branch {
            country
            flag
            link
          }
        }
      }
    }
  }
  `);

    const { footer } = dataHomePage?.post?.homepage ?? {}
    console.log({ footer })
    return (
        <footer>
            <div className='container'>
                <div className='flex justify-start py-10'>
                    <div className='w-4/12'>
                        <h3 className='uppercase font-bold tracking-wider mb-6'>{isCurrentLang('COAD BRANCH', 'CABANG COAD')}</h3>
                        <div className='flex flex-col gap-2'>
                            {footer?.branch?.map((item, index) => (
                                <a href={item?.link} target='_blank' key={index}>
                                    <div className='flex items-center gap-2' key={index}>
                                        <img className='mt-[6px]' src={`/assets/coad-images/${item.flag}`} alt={`Coad ${item?.country}`} />
                                        <p>{item?.country}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className='w-4/12'>
                        <h3 className='uppercase font-bold tracking-wider mb-6'>{isCurrentLang('Contact Info', 'Kontak Kami')}</h3>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-start gap-2'>
                                <img className='mt-[6px]' src='/assets/coad-images/location-pin.svg' alt='Address Coad Indonesia' />
                                <p><span className='block'>PT Bluesky Indonusa,</span>
                                    The Belleza Shopping Arcade Lt. 1 Unit 106
                                    Jl. Letjen Soepeno, Grogol Utara, Kebayoran Lama, Jakarta Selatan</p>
                            </div>
                            <div className='flex items-start gap-2'>
                                <img className='mt-[6px]' src='/assets/coad-images/telephone-icon.svg' alt='Contact Us Coad Indonesia' />
                                <p>+62-21-299-16111</p>
                            </div>
                            <div className='flex items-start gap-2'>
                                <img className='mt-[6px]' src='/assets/coad-images/email-icon.svg' alt='Email Coad Indonesia' />
                                <p>mkt@coad.co.id</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full border-b opacity-50 border-white"></div>
                <div className='flex justify-between py-10'>
                    <img width={300} src='/assets/coad-images/coad.png' alt='Coad Indonesia' />
                    <p>2023 Copyright &copy; COAD INDO</p>

                </div>
            </div>

        </footer>
    )
}

export default Footer