import isCurrentLang from "@/utils/isCurrentLang";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

export default function Custom404() {
    // const router = useRouter()
    // const lang = router?.asPath.split('/')[1]
    // useEffect(() => {
    //     router.push({
    //         pathname: '/[lang]',
    //         query: { lang: lang }
    //     })
    // }, [lang])
    return (
        <div className="container">
            <div className="min-h-[50vh] flex justify-center items-center">
                <h1>{isCurrentLang('Sorry, page you are search not found', 'Maaf, halaman yang anda cari tidak ditemukan')}</h1>
            </div>
        </div >
    )
}