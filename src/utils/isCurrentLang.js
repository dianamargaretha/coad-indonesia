import React from 'react'
import { useRouter } from "next/router";

const isCurrentLang = (valEn, valId) => {
    const router = useRouter();
    return router.query.lang === 'id' ? valId : valEn
}

export default isCurrentLang