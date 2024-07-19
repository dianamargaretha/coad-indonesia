import '@/styles/globals.css'
import '@/styles/scss/style.scss'
import '@/styles/wp.scss'
import clientApollo from '@/lib/apollo-config'
import { ApolloProvider } from '@apollo/client'
import { configureLanguage } from "../utils/language";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ButtonToTop from '@/components/ButtonToTop';
import PublicHead from '@/components/PublicHead';
import ButtonFacebook from '@/components/ButtonFacebook';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

const App = props => {
  const { Component, pageProps } = props;
  console.log('!!!!!!!!!!!!!!');
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
        <GoogleTagManager gtmId="AW-349252447" />
        <GoogleAnalytics gaId="AW-349252447" />
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

