import Container from '../components/GlobalContainer';
import NavOpenProvider from '../context/MenuContext';
import Navbar from '../components/Navbar';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/globalStyles';
import Burger from '../components/Burger';
import { AnimatePresence } from 'framer-motion';

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <NavOpenProvider>
      <Normalize />
      <ThemeProvider theme={theme}>
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
