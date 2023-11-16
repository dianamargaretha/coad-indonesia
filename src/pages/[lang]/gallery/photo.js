import React from 'react'
import isCurrentLang from '@/utils/isCurrentLang'


const video = () => {
    return (
        <div>
            <div className='container'>
                <div className='section-title py-16'>
                    <h2 className='title uppercase'>{isCurrentLang('Photos', 'Foto')}</h2>
                </div>
            </div>
        </div>
    )
}

export default video