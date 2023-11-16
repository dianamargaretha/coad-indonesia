import React from 'react'
import isCurrentLang from '@/utils/isCurrentLang'

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
    return (
        <div>
            <div className='gallery-wrapper'>
                <div className='container py-16'>
                    <div className='section-title'>
                        <h2 className='title uppercase'>{isCurrentLang('Photos', 'Foto')}</h2>
                    </div>
                    <div className='flex flex-wrap justify-center gap-4'>
                        <Benefit title={'COAD C-1 Standard Type'} imgUrl={'/assets/coad-images/product/C-1-Standard-Type/1.png'} />
                        <Benefit title={'COAD C-2 Slim Type'} imgUrl={'/assets/coad-images/product/C-2-Slim-Type/1.png'} />
                        <Benefit title={'COAD C-3 Recovery Type'} imgUrl={'/assets/coad-images/product/C-3-Recovery-Type/1.png'} />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default video