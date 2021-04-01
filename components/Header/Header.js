import styled from 'styled-components';
//layout components
import Burger from './Burger';
import DesktopLinks from './DesktopLinks';
import Logo from './Logo';

const Head = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 1rem;
`;

const Header = () => {
  return (
    <Head>
      <Logo
        src='/images/logored.png'
        alt='Simcoe County Malt'
        height={322}
        width={402}
      />
      <DesktopLinks />
      <Burger />
    </Head>
  );
};

export default Header;
