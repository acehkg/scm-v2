import styled from 'styled-components';
//layout components
import Logo from './Logo';

const Head = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 1rem;
`;

const ConstructionHeader = () => {
  return (
    <Head>
      <Logo src='/images/logored.png' alt='Simcoe County Malt' />
    </Head>
  );
};

export default ConstructionHeader;
