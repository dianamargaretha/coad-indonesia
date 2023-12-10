import '@/styles/globals.css'
import '@/styles/scss/style.scss'
import clientApollo from '@/lib/apollo-config'
import { ApolloProvider } from '@apollo/client'
import { configureLanguage } from "../utils/language";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ButtonToTop from '@/components/ButtonToTop';
import ContactUs from '@/components/ContactUs';
import PublicHead from '@/components/PublicHead';
// import useScreenSize from '@/utils/useScreenSize';
// import NavbarMobile from '@/components/NavbarMobile';

const App = props => {
  const { Component, pageProps } = props;
  // const screenSize = useScreenSize();
  // console.log({ screenSize })

  return (
    <ApolloProvider client={clientApollo}>
      <div>
        {/* {screenSize?.width < 1024 ? <NavbarMobile /> : <Navbar />} */}
        <PublicHead title="high-speed-door, rapid-door, pintu-high-speed-door, pintu-rapid-door, harga-high-speed-door, harga-rapid-door, jual-high-speed-door, jual-rapid-door, pvc-roller-shutter-door- CONVENIENCE auto door | COAD CONVENIENCE AUTO DOOR" />
        <Navbar />
        <Component {...pageProps} />
        {/* <ContactUs /> */}
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

