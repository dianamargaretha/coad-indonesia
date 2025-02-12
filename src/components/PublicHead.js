import Head from 'next/head'

const PublicHead = ({ title, description, asPath }) => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="google-site-verification" content="69YMIGUYzbOr0U6fU9zQjPIiiaa3-GNp4IUUWBm3dDw" />
            <meta name="description" content={description}></meta>
            <link rel="shortcut icon" href="/favicon-32x32.png" />
            <link rel="canonical" href={`https://highspeeddoorindonesiacoad.com/${asPath}/`} class="yoast-seo-meta-tag"></link>
        </Head>
    )
}

export default PublicHead