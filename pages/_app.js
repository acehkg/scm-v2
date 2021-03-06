import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { Normalize } from 'styled-normalize';

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
  font-family: 'Poppins', sans-serif;
  height: 100vh;
  color: #5c4e4e;
  background: #fff;
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Normalize />
      <Container>
        <Navbar />
        <Component {...pageProps} />
      </Container>
    </>
  );
};

export default MyApp;
