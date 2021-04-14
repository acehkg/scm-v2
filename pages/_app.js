import Font from '../style/Font';
import GlobalStyles from '../style/GlobalStyles';
import { AnimatePresence } from 'framer-motion';
//Context for Navbar
import NavOpenProvider from '../context/MenuContext';
//layout components
import Header from '../components/Header/Header';
import Slider from '../components/Header/Slider';

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <>
      <NavOpenProvider>
        <Slider />
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </NavOpenProvider>
      <GlobalStyles />
      <Font />
    </>
  );
};

export default MyApp;
