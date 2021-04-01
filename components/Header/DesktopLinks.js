import styled from 'styled-components';
import Link from 'next/link';
import { mediaQueries } from '../../styles/mediaqueries';

const Wrapper = styled.nav`
  display: none;
  @media (min-width: ${mediaQueries.ipad}) {
    padding: 1rem 0;
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
const DesktopLinks = () => {
  return (
    <Wrapper>
      <Link href={'/'}>
        <a>HOME</a>
      </Link>
    </Wrapper>
  );
};

export default DesktopLinks;
