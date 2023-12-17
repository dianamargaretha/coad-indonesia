import Head from 'next/head'

const PublicHead = ({ title, description }) => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="description" content={description}></meta>
            <link rel="shortcut icon" href="/favicon-32x32.png" />
        </Head>
    )
}

export default PublicHead