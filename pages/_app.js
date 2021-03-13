import Navbar from '../components/Navbar';
import styled, { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

const theme = {
  redColour: '#4f1111',
  blueColour: '#09344f',
  whiteColour: '#ffffff',
  greyColour: 'rgba(31, 7, 7, 0.1)',
  textColour: '#4f1111',
};

const GlobalContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
  font-family: 'Poppins', sans-serif;
  background: #fff;
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Normalize />
      <GlobalContainer>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </GlobalContainer>
    </>
  );
};

export default MyApp;
