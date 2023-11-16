import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default () => {
    const router = useRouter()
    console.log('language selector', { router })
    const [languages] = useState([
        {
            code: "en",
            name: "English",
        },
        {
            code: "id",
            name: "Indonesia",
        },
    ]);

    return (
        <ul className="flex gap-2 items-center">
            {languages.map((language) => {
                return (
                    <li key={language.code} className='flex justify-center items-center w-8 h-8 border rounded-full'>
                        <Link as={`/${language.code}/`} href={`/[lang]`}>
                            <img width={'18px'} src={`/assets/coad-images/icon-${language.code === "en" ? 'english' : 'id'}.svg`} />
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
