import React from 'react'
import { useRouter } from "next/router";
import Navbar from '@/components/Navbar';
const test = () => {
    const router = useRouter()
    return (
        <div>
            <div>
                {router.query.lang === 'en' ? 'test en' : 'tes id'}
            </div>
        </div>
    )
}

export default test