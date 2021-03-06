import Link from 'next/link';
import styled from 'styled-components';
import Burger from './Burger';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  @media (max-width: 1024px) {
    width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const LinkContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.25rem;
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const DesktopLink = styled.a`
  text-decoration: none;
  color: #4f1111;
  transition: all ease-in-out 250ms;

  &:hover {
    cursor: pointer;
    scale: 1.05;
  }
`;

const Navbar = () => {
  return (
    <>
      <NavContainer>
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
          <Link href='/l'>
            <DesktopLink>NEWS</DesktopLink>
          </Link>
          <Link href='/'>
            <DesktopLink>CONTACT</DesktopLink>
          </Link>
        </LinkContainer>
      </NavContainer>

      <Burger />
    </>
  );
};

export default Navbar;
