import styled from 'styled-components';
import Link from 'next/link';
import { mediaQueries } from '../../style/mediaqueries';

const Wrapper = styled.nav`
  display: none;
  @media (min-width: ${mediaQueries.ipad}) {
    padding: 1rem 0;
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
const DesktopLinks = () => {
  return (
    <Wrapper>
      <Link href={'/'}>
        <Links>HOME</Links>
      </Link>
      <Link href={'/malt'}>
        <Links>MALT</Links>
      </Link>
      <Link href={'/news'}>
        <Links>NEWS</Links>
      </Link>
      <Link href={'/maltschool'}>
        <Links>LEARN</Links>
      </Link>
    </Wrapper>
  );
};

const Links = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0 2rem;
  color: var(--red-color);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    color: var(--redlightened-color);
  }
`;
export default DesktopLinks;
