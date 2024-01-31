import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/assets/favicon.ico" sizes="any" />
        <script
          type="text/javascript"
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          id="aisensy-wa-widget"
          widget-id="gDCw2g"
        >
        </script>

      </Head>
      <body>
        <Main />
        <NextScript />
        {/* <!-- LOGGER(TM) TRACKING SCRIPT V.40 FOR logger.co.kr / 112018 : COMBINE TYPE / DO NOT ALTER THIS SCRIPT. --> */}
        <noscript><img alt="Logger Script" width="1" height="1" src="http://ssl.logger.co.kr/tracker.1.tsp?u=112018&amp;js=N" /></noscript>
        {/* <!-- END OF LOGGER TRACKING SCRIPT --> */}
      </body>
    </Html>
  )
}
