import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
//import Burger from './Burger';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  width: 90%;
  margin: 0 auto;
  padding-top: 1rem;
  padding-bottom: 3rem;
`;

const Links = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.25rem;
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 834px) {
    display: none;
  }
`;

const DesktopLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.textColour};
  transition: all ease-in-out 250ms;

  &:hover {
    cursor: pointer;
    scale: 1.05;
  }
`;

const Logo = styled.div`
  width: 10rem;

  @media (max-width: 400px) {
    width: 8rem;
  }
`;
const Navbar = () => {
  return (
    <>
      <NavBar>
        <Logo>
          <Image
            src='/images/logored.png'
            alt='Simcoe County Malt'
            layout='responsive'
            width={402}
            height={322}
          />
        </Logo>
        <Links>
          <Link href='/'>
            <DesktopLink>HOME</DesktopLink>
          </Link>
          <Link href='/malt'>
            <DesktopLink>OUR MALT</DesktopLink>
          </Link>
          <Link href='/maltschool'>
            <DesktopLink>LEARN</DesktopLink>
          </Link>
          <Link href='/news'>
            <DesktopLink>NEWS</DesktopLink>
          </Link>
          <Link href='/'>
            <DesktopLink>CONTACT</DesktopLink>
          </Link>
        </Links>
      </NavBar>
    </>
  );
};

export default Navbar;
