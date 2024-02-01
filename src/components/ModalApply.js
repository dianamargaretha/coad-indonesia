import React from 'react'
// import Button from 'components/Button'
import Image from 'next/image'
import Link from 'next/link'
import isCurrentLang from '@/utils/isCurrentLang'

const ModalApply = ({ isOpen, status, position, close }) => {
    return (
        <div className={isOpen ? 'block' : 'hidden'}>
            <div className='bg-[#050d21] opacity-80 overflow-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full'></div>
            <div tabIndex='-1' className='overflow-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full'>
                <div className='relative w-full max-w-lg h-full md:h-auto m-auto mt-40'>
                    <div className='relative bg-white rounded-lg shadow dark:bg-gray-700 p-10'>
                        <div className='absolute top-4 right-4 px-2 py-2 cursor-pointer bg-[#b4b1b1]' onClick={close}>
                            <Image src={'/assets/images/close-hd.svg'} width={18} height={18} />
                        </div>
                        <div className='text-center'>
                            <Image src={`/icons/${status.value ? 'ic-form-success.svg' : 'ic-form-failed.svg'}`} height={90} width={90} className='mb-10 mx-auto' />
                            <h5 className='text-h5 text-[#333] my-8'>
                                {status.value ? <>{isCurrentLang('Your email has been successfully submitted', 'Email anda berhasil di kirim')}</> :
                                    <>{isCurrentLang('Your email can’t be submitted', 'Email anda tidak berhasil dikirim')}</>}
                            </h5>
                            <p className='text-p2 text-[#333] mb-10'>
                                {status.value ? <>{isCurrentLang('Thanks! We have received your email.', 'Terimakasih! Kami telah menerima email anda.')}<br /> {isCurrentLang('While you are waiting you can explore more about COAD Indonesia.', 'Kamu bisa melanjutkan mencari info mengenai COAD Indonesia.')}</> :
                                    <>{isCurrentLang('Uh-oh! Something went wrong.', 'Maaf! Terjadi kesalahan.')}<br />{isCurrentLang('Please keep calm and send via email.', 'Kamu bisa menghubungi kami melalui email.')}</>}
                            </p>
                            <Link href={`${status.value ? '/' : 'mailto:marketing@highspeeddoorindonesiacoad.com?subject=Email '} ${position}`} passHref>
                                <div
                                    className='btn !bg-[#318a68]'>
                                    <>
                                        <span className='label'>  {status.value ? isCurrentLang('Go to home', 'Kembali ke beranda') : isCurrentLang('Send email', 'Kirim email')}</span>
                                    </>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalApply