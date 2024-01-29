import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/assets/favicon.ico" sizes="any" />
        {/* Plugin wa chat default */}
        <script
          type="text/javascript"
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          id="aisensy-wa-widget"
          widget-id="67nxE5"
        >
        </script>

        <script
          dangerouslySetInnerHTML={{
            __html:
              `(function(w,l){` +
              `w[l] = w[l] || [];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});` +
              `})(window,'dataLayer');`,
          }}
        />

      </Head>
      <body>
        <Main />
        <NextScript />

        {/* <!-- LOGGER(TM) TRACKING SCRIPT V.40 FOR logger.co.kr / 112018 : COMBINE TYPE / DO NOT ALTER THIS SCRIPT. --> */}
        <Script id="TRK_LID">
          {`var _TRK_LID = "112018";var _L_TD = "ssl.logger.co.kr";var _TRK_CDMN = ".highspeeddoorindonesiacoad.com";`}
        </Script>
        <Script id="CDN_DOMAIN">
          {`var _CDN_DOMAIN = location.protocol == "https:" ? "https://fs.bizspring.net" : "http://fs.bizspring.net";
          (function (b, s) { var f = b.getElementsByTagName(s)[0], j = b.createElement(s); j.async = true; j.src = '//fs.bizspring.net/fs4/bstrk.1.js'; f.parentNode.insertBefore(j, f); })(document, 'script');`}
        </Script>
        <noscript><img alt="Logger Script" width="1" height="1" src="http://ssl.logger.co.kr/tracker.1.tsp?u=112018&amp;js=N" /></noscript>
        {/* <!-- END OF LOGGER TRACKING SCRIPT --> */}
      </body>
    </Html>
  )
}
