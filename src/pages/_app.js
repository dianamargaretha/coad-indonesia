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
// import Script from 'next/script'
import { useEffect } from 'react';
import { initializeGoogleTagManager } from '@/lib/googleTagManager';
import { initialize, logPageView } from '@/lib/analytics';

const App = props => {
  const { Component, pageProps } = props;
  useEffect(() => {
    initialize();
    logPageView();
    // Initialize Google Tag Manager with your GTM ID
    initializeGoogleTagManager('AW-349252447');
  }, [])
  return (
    <ApolloProvider client={clientApollo}>
      {/* <Script id="google-tag" src={`https://www.googletagmanager.com/gtm.js?id=G-W545Q1VWVX`} />
      <Script id="google-ads" src={`https://www.googletagmanager.com/gtm.js?id=AW-349252447`} /> */}
      <div>
        <PublicHead
          title="COAD Indonesia | pintu-high-speed-door, overhead-door, garage-door"
          description="COAD is the largest company for automatic doors in Indonesia. Producing and repairing high speed door, overhead door, garage door. Guaranteed warranty program" />

        <Navbar />
        <Component {...pageProps} />

        <ButtonFacebook />
        <ButtonToTop />
        <Footer />
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

