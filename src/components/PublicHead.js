import Head from 'next/head'

const PublicHead = ({ title, description }) => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="google-site-verification" content="69YMIGUYzbOr0U6fU9zQjPIiiaa3-GNp4IUUWBm3dDw" />
            <meta name="description" content={description}></meta>
            <link rel="shortcut icon" href="/favicon-32x32.png" />
        </Head>
    )
}

export default PublicHead