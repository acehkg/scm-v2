import Font from '../styles/Font';
import GlobalStyles from '../styles/GlobalStyles';
import { AnimatePresence } from 'framer-motion';
//Context for Navbar
import NavOpenProvider from '../context/MenuContext';
//layout components
import Header from '../components/Header/Header';
import Slider from '../components/Header/Slider';
//SEO
import PageHead from '../components/Head';

const meta = {
  title: 'Simcoe County Malt Inc.',
  description:
    'Locally grown barley crafted with care into premium malt. Better ingredients make better beer.',
  image: '/images/logolargered.png',
  site: 'https://scm-v2.vercel.app',
};

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <>
      <NavOpenProvider>
        <PageHead meta={meta} />
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
