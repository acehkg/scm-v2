import styled from 'styled-components';
import Link from 'next/link';

const MobileLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    margin: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-flow: column nowrap;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(40px);
    border-radius: 1rem;
    background-clip: padding-box;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(110%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 50%;
    transition: transform 0.3s ease-in-out;
    z-index: 16;
    a {
      color: ${(props) => props.theme.textColour};
      text-decoration: none;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <MobileLinks open={open}>
      <Link href='/'>
        <a>HOME</a>
      </Link>
      <Link href='/malt'>
        <a>OUR MALT</a>
      </Link>
      <Link href='/maltschool'>
        <a>LEARN</a>
      </Link>
      <Link href='/news'>
        <a>NEWS</a>
      </Link>
      <Link href='/'>
        <a>CONTACT</a>
      </Link>
    </MobileLinks>
  );
};

export default RightNav;
