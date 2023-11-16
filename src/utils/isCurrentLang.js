import React from 'react'
import { useRouter } from "next/router";

const isCurrentLang = (valEn, valId) => {
    const router = useRouter();
    return router.query.lang === 'en' ? valEn : valId
}

export default isCurrentLang