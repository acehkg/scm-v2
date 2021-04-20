import { useEffect } from 'react';
import { useRouter } from 'next/router';
//Google Analytics
import { pageView } from '../utils/GoogleAnalytics';
//Global Styling
import Font from '../style/Font';
import GlobalStyles from '../style/GlobalStyles';
//Page Transitions
import { AnimatePresence } from 'framer-motion';
//Context for Navbar
import NavOpenProvider from '../context/MenuContext';
//layout components
import Header from '../components/Header/Header';
import Slider from '../components/Header/Slider';

const MyApp = ({ Component, pageProps }) => {
  //tracking navigation using GA
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageView(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <NavOpenProvider>
        <Slider />
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </NavOpenProvider>
      <GlobalStyles />
      <Font />
    </>
  );
};

export default MyApp;
