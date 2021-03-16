import Container from '../components/GlobalContainer';
import NavOpenProvider from '../context/MenuContext';
import Navbar from '../components/Navbar';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/globalStyles';
import Burger from '../components/Burger';

const MyApp = ({ Component, pageProps }) => {
  return (
    <NavOpenProvider>
      <Normalize />
      <ThemeProvider theme={theme}>
        <Container>
          <Navbar />
          <Burger />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </NavOpenProvider>
  );
};

export default MyApp;
