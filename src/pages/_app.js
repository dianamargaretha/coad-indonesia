import '@/styles/globals.css'
import '@/styles/scss/style.scss'
import clientApollo from '@/lib/apollo-config'
import { ApolloProvider } from '@apollo/client'
import { configureLanguage } from "../utils/language";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ButtonToTop from '@/components/ButtonToTop';
import PublicHead from '@/components/PublicHead';
import ButtonFacebook from '@/components/ButtonFacebook';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script';

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
        <Script src='/log.js' />
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

