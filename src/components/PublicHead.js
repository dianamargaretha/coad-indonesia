import Head from 'next/head'

const PublicHead = ({ title = 'COAD Indonesia | pintu-high-speed-door, overhead-door, garage-door', description = 'COAD is the largest company for automatic doors in Indonesia. Producing and repairing high speed door, overhead door, garage door. Guaranteed warranty program', canonical = "" }) => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="google-site-verification" content="69YMIGUYzbOr0U6fU9zQjPIiiaa3-GNp4IUUWBm3dDw" />
            <meta name="description" content={description}></meta>
            <link rel="shortcut icon" href="/favicon-32x32.png" />
			<link rel="canonical" href={`https://highspeeddoorindonesiacoad.com/id${canonical}`}></link>
			<link rel="alternate" hreflang="en"href={`https://highspeeddoorindonesiacoad.com/en${canonical}`} />
        </Head>
    )
}

export default PublicHead