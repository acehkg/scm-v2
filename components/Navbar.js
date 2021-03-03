import Link from 'next/link';
import styled from 'styled-components';
import Burger from './Burger';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  margin-left: 2rem;
  margin-top: 2rem;
  img {
    height: 15vh;
  }
`;

const LinkContainer = styled.div`
  margin-right: 2rem;
  margin-top: 2rem;
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.25rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const DesktopLink = styled.a`
  text-decoration: none;
  color: inherit;
  transition: all ease-in-out 250ms;

  &:hover {
    cursor: pointer;
    scale: 1.05;
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <img alt='Simcoe County Malt' src='/images/logored.png' />
      </LogoContainer>
      <LinkContainer>
        <Link href='/'>
          <DesktopLink>HOME</DesktopLink>
        </Link>
        <Link href='/malt'>
          <DesktopLink>OUR MALT</DesktopLink>
        </Link>
        <Link href='/maltschool'>
          <DesktopLink>LEARN</DesktopLink>
        </Link>
      </LinkContainer>
      <Burger />
    </NavContainer>
  );
};

export default Navbar;
