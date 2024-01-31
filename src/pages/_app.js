import '@/styles/globals.css'
import '@/styles/scss/style.scss'
import clientApollo from '@/lib/apollo-config'
import { ApolloProvider } from '@apollo/client'
import Script from 'next/script'
import { configureLanguage } from "../utils/language";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ButtonToTop from '@/components/ButtonToTop';
import PublicHead from '@/components/PublicHead';
import ButtonFacebook from '@/components/ButtonFacebook';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

const App = props => {
  const { Component, pageProps } = props;
  return (
    <ApolloProvider client={clientApollo}>
      <div>
        <PublicHead
          title="COAD Indonesia | pintu-high-speed-door, overhead-door, garage-door"
          description="COAD is the largest company for automatic doors in Indonesia. Producing and repairing high speed door, overhead door, garage door. Guaranteed warranty program" />

        <Navbar />
        <Component {...pageProps} />

        <ButtonFacebook />
        <ButtonToTop />
        <Footer />
        <GoogleTagManager gtmId="G-W545Q1VWVX" />
        <GoogleAnalytics gaId="G-W545Q1VWVX" />
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
      </div>
    </ApolloProvider>
  );
};

App.getInitialProps = async ({ ctx }) => {
  const language = configureLanguage(ctx);

  return {
    language
  };
};

export default App;

