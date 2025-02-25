import React, { useReducer, useState, useRef, useEffect } from 'react'
import Recaptcha from 'react-google-recaptcha';
import isCurrentLang from '@/utils/isCurrentLang'
import { validateInput, validateForm } from '@/lib/validation'
import PublicHead from '@/components/PublicHead';
import { gql, useQuery } from "@apollo/client";

import { trackContactUs } from "@/lib/analytics"
import ModalApply from '@/components/ModalApply';
import service from '@/lib/service';
import Image from 'next/image';

const InputText = ({ required, ...props }) => {
    const { id, label, type, value, maxLength } = props;
    return (
        <div className='input-container'>
            <label className={value && 'filled'} htmlFor={id}>
                {label}
                {required &&
                    <span className='text-other-30'> *</span>
                }
            </label>
            <input type={type ?? 'text'} maxLength={maxLength ?? 100} {...props} />
        </div>
    )
}

const InputTextArea = ({ required, ...props }) => {
    const { id, label, value, maxLength } = props;
    return (
        <div className='input-container'>
            <label className={value && 'filled'} htmlFor={id}>
                {label}
                {required &&
                    <span className='text-other-30'> *</span>
                }
            </label>
            <textarea rows={4} maxLength={maxLength ?? 500} {...props} />
        </div>
    )
}


const initialState = (initialState) => ({
    name: "",
    email: "",
    phone: "",
    content: "",
    ...initialState,
})

const reducer = (state, { type, name, value }) => {
    switch (type) {
        case "changeInput":
            return {
                ...state,
                [name]: value,
            }
        case "reset":
            return {
                name: "",
                email: "",
                phone: "",
                content: ""
            }
        default:
            console.error(`There is no ${type} type in reducer`)
            return { ...state }
    }
}

const contactUs = () => {
    const { data, loading: loadingCms, error } = useQuery(gql`
    query {
        post(id: "contact-us", idType: SLUG) {
            contactUs {
              desc
              descEn
            }
          }
        }
    `);
    const { contactUs } = data?.post ?? {}

    const captcha = useRef(null)

    const [captchaStatus, setCaptchaStatus] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState({ value: null, message: null })
    const [state, dispatch] = useReducer(reducer, initialState())

    useEffect(() => {
        if (captchaStatus) validateInput("jobform", "captcha")
    }, [captchaStatus]);

    const resetState = () => {
        dispatch({ type: "reset" })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = Object.fromEntries(new FormData(event.target).entries());
        try {
            setLoading(true)
            const response = await fetch('/api/contact', {
                method: 'post',
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    content: data.content
                })
            });

            if (!response.ok) {
                throw new Error(`response status: ${response.status}`)
            }
            captcha.current.reset()
            resetState()
            setStatus({ value: true, message: null })
            trackContactUs(email, 'Success')
            setLoading(false)
            setIsModalOpen(true)
        } catch (err) {
            setStatus({ value: false, message: "Failed! please try again later." })
            trackContactUs(email, 'Failed')
            setLoading(false)
            setIsModalOpen(true)
        }
    }
    const handleChange = ({ currentTarget: { name, value } }) => {
        setStatus({ value: null, message: null })
        switch (name) {
            case "phone":
                const newValue = value.replace(/[^0-9]/g, "")
                dispatch({ type: "changeInput", name, value: newValue })
                break
            default:
                dispatch({ type: "changeInput", name, value })
        }

        validateInput("jobform", name)
    }
    const LoadingSend = () => {
        return (
            <div className="inline-flex leading-8 items-center">
                <span className="mr-5">{isCurrentLang('Send Information', 'Kirim')}</span> <span><Image src='/icons/ic-loading.svg' height={20} width={20} /></span>
            </div>
        )
    }
    return (
        <div>
            <ModalApply isOpen={isModalOpen} status={status} position={state.email} close={() => setIsModalOpen(!isModalOpen)} />
            <PublicHead
                title="COAD Indonesia | pintu-high-speed-door, overhead-door, garage-door | Cs center | COAD"
                description="COAD is the largest company for automatic doors in Indonesia. Producing and repairing high speed door, overhead door, garage door. Guaranteed warranty program | COAD Estimate inquiry" />
            <div className='container mt-10'>
                <div className='section-title'>
                    <h2 className='title uppercase'>{isCurrentLang('Contact Us', 'Hubungi Kami')}</h2>
                </div>
                <div className='flex flex-col md:flex-row gap-2 md:gap-8'>
                    <div className='w-12/12 md:w-6/12'>
                        <div className='flex'>
                            <div className='w-12/12 md:w-6/12'>
                                <p className='mb-4'>{isCurrentLang(contactUs?.descEn, contactUs?.desc)}</p>
                                <ul>
                                    <li>Email : marketing@highspeeddoorindonesiacoad.com</li>
                                    <li>Phone : +62-21-299-16111</li>
                                </ul>


                            </div>
                        </div>
                        <form onSubmit={handleSubmit} id="jobform" name="jobform" className='form-apply mt-12'>
                            <div className='container'>
                                <div className='grid grid-cols-1 mb-10 md:mb-20'>
                                    <div>
                                        <InputText id="name" name='name' label={isCurrentLang('Your Full Name', 'Nama Lengkap')} onChange={handleChange} value={state.name} className="validate[required]" required maxLength={100} disabled={loading} />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-10 mb-10 md:mb-20'>
                                    <div className='col-span-2 md:col-span-1'>
                                        <InputText type="text" id="email" name='email' label={isCurrentLang('Your Email', 'Email')} onChange={handleChange} value={state.email} className="validate[required,email]" required maxLength={100} disabled={loading} />
                                    </div>
                                    <div className='col-span-2 md:col-span-1'>
                                        <InputText id="phone" name='phone' label={isCurrentLang('Your Phone', 'Nomor Telephon')} onChange={handleChange} value={state.phone} className="validate[required]" required maxLength={15} disabled={loading} />
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 mb-10 md:mb-20'>
                                    <div>
                                        <InputTextArea id="content" name="content" label={isCurrentLang("Content", 'Konten')} onChange={handleChange} value={state.content} className="validate[required]" required maxLength={500} disabled={loading} />
                                        {/* <InputText id="content" name='content' label='Content' onChange={handleChange} value={state.name} className="validate[required]" required maxLength={500} disabled={loading} /> */}
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 mb-10 md:mb-20'>
                                    <Recaptcha
                                        ref={captcha}
                                        render="explicit"
                                        sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY}
                                        onChange={() => {
                                            setCaptchaStatus(true)
                                        }}
                                    />
                                    <div className='input-container'>
                                        <input
                                            className="validate[required]"
                                            type="hidden"
                                            id="captcha"
                                            name="captcha"
                                            value={captchaStatus ? captchaStatus : ""}
                                        />
                                    </div>
                                </div>


                                <div className='mb-20 lg:mb-40 xl:mb-30'>
                                    <button
                                        onClick={() => trackContactUs('Submit Contact Us')}
                                        disabled={loading}
                                        type="submit" className='button-send btn btn-custom-size lg-size btn-primary'>{loading ? <LoadingSend /> : isCurrentLang('Send Information', 'Kirim')}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='w-12/12 md:w-6/12 mb-4'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.29632552944!2d106.781861!3d-6.220927!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f12d82b5cad9%3A0xec3043c856077a11!2sThe%20Bellezza%20Shopping%20Arcade!5e0!3m2!1sen!2sid!4v1703346478174!5m2!1sen!2sid"
                            width="100%"
                            height="auto"
                            style={{ border: 0, minHeight: '450px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contactUs