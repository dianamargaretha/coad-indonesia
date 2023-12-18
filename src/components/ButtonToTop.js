import React, { useEffect, useState } from 'react'
import classnames from 'classnames'

const ButtonToTop = ({ className }) => {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const updateIsShow = () =>
            setIsShow(window.innerHeight + window.scrollY + 100)

        document.addEventListener('scroll', updateIsShow)
        return () => document.removeEventListener('scroll', updateIsShow)
    }, [])

    return isShow && (
        <button
            type="button"
            className={classnames('fixed z-50 focus:outline-none bottom-7 right-[24px] bg-[red] rounded-md shadow-xl animate__animated animate__fadeIn', className)}
            onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
        >
            <svg className="w-[42px] h-[42px]" fill="none" stroke="#FFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
        </button>
    );
};

export default ButtonToTop;