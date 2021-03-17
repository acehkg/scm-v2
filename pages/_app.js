import Container from '../components/GlobalContainer';
import NavOpenProvider from '../context/MenuContext';
import Navbar from '../components/Navbar';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/globalStyles';
import Burger from '../components/Burger';
import { AnimatePresence } from 'framer-motion';
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
    <NavOpenProvider>
      <Normalize />
      <ThemeProvider theme={theme}>
        <PageHead meta={meta} />
        <Container>
          <Navbar />
          <Burger />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Container>
      </ThemeProvider>
    </NavOpenProvider>
  );
};

export default MyApp;
