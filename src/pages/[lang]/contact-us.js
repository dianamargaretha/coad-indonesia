import React, { useReducer, useState, useRef } from 'react'
import Recaptcha from 'react-google-recaptcha';
import isCurrentLang from '@/utils/isCurrentLang'
import { validateInput, validateForm } from '@/lib/validation'
import PublicHead from '@/components/PublicHead';
import { gql, useQuery } from "@apollo/client";

import { trackContactUs } from "@/lib/analytics"


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
                phone: ""
            }
        default:
            console.error(`There is no ${type} type in reducer`)
            return { ...state }
    }
}

const contactUs = () => {
    const [state, dispatch] = useReducer(reducer, initialState())
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState({ value: null, message: null })
    const [captchaStatus, setCaptchaStatus] = useState(false)


    const captcha = useRef(null)

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
    const handleSubmit = (e = {}) => {
        e?.preventDefault()
        if (validateForm("jobform")) {
            setLoading(true)
            setStatus({ value: null, message: null })
            if (state.where === "other") state.where = state.whereotherdesc

            const { resume, name, email, content, phone } = state
            const formData = new FormData()
            formData.append("full-name", name)
            formData.append("email", email)
            formData.append("phone", phone)
            formData.append("content", content)

            // service.post(process.env.NEXT_PUBLIC_WP_URI + "/wp-json/contact-form-7/v1/contact-forms/49/feedback", formData, {
            //     headers: {
            //         "Content-Type": "multipart/form-data",
            //     },
            // })
            //     .then(({ data }) => {
            //         setLoading(false)
            //         if (data.status === "mail_sent") {
            //             captcha.current.reset()
            //             resetState()
            //             setStatus({ value: true, message: null })
            //             trackCareerApply(position, 'Success')
            //             setLoading(false)
            //             setIsModalOpen(true)
            //         } else {
            //             const message = `${data.message} ${data.invalidFields ? data.invalidFields.map(({ message }) => `${message}`) : ""}`
            //             setStatus({ value: false, message })
            //             trackCareerApply(position, 'Failed')
            //             setLoading(false)
            //             setIsModalOpen(true)
            //         }
            //     })
            //     .catch((err) => {
            //         setStatus({ value: false, message: "Failed! please try again later." })
            //         trackCareerApply(position, 'Failed')
            //         setLoading(false)
            //         console.error(err)
            //         setIsModalOpen(true)
            //     })
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
    return (
        <div>
            <PublicHead
                title="high speed door indonesia , industrial door, rapid door, high speed rolling door- convenience auto door | 견적문의 | Cs center | COAD"
                description="COAD Estimate inquiry" />
            <div className='container mt-10'>
                <div className='section-title'>
                    <h2 className='title uppercase'>{isCurrentLang('Contact Us', 'Hubungi Kami')}</h2>
                </div>
                <div className='flex flex-col md:flex-row gap-2 md:gap-8'>
                    <div className='w-12/12 md:w-6/12'>
                        <div className='flex'>
                            <div className='w-12/12 md:w-6/12'>
                                <p>{isCurrentLang(contactUs?.descEn, contactUs?.desc)}</p>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} id="jobform" name="jobform" className='form-apply mt-12'>
                            <div className='container'>
                                <div className='grid grid-cols-1 mb-10 md:mb-20'>
                                    <div>
                                        <InputText id="name" name='name' label='Your Full Name' onChange={handleChange} value={state.name} className="validate[required]" required maxLength={100} disabled={loading} />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-10 mb-10 md:mb-20'>
                                    <div className='col-span-2 md:col-span-1'>
                                        <InputText type="text" id="email" name='email' label='Your Email' onChange={handleChange} value={state.email} className="validate[required,email]" required maxLength={100} disabled={loading} />
                                    </div>
                                    <div className='col-span-2 md:col-span-1'>
                                        <InputText id="phone" name='phone' label='Your Phone' onChange={handleChange} value={state.phone} className="validate[required]" required maxLength={15} disabled={loading} />
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 mb-10 md:mb-20'>
                                    <div>
                                        <InputTextArea id="content" name="content" label="Content" onChange={handleChange} value={state.content} className="validate[required]" required maxLength={500} disabled={loading} />
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