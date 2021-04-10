import styled from 'styled-components';
import Link from 'next/link';
import useNav from '../../hooks/useNav';

const Wrapper = styled.nav`
  height: 100%;
  width: 100%;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const MobileLinks = () => {
  const { setOpen } = useNav();

  const handleNav = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      <Link href={'/'}>
        <Links onClick={handleNav}>HOME</Links>
      </Link>
      <Link href={'/malt'}>
        <Links onClick={handleNav}>MALT</Links>
      </Link>
      <Link href={'/news'}>
        <Links onClick={handleNav}>NEWS</Links>
      </Link>
      <Link href={'/maltschool'}>
        <Links onClick={handleNav}>BLOG</Links>
      </Link>
    </Wrapper>
  );
};

const Links = styled.a`
  color: var(--white-color);
  font-size: 1.5rem;
`;
export default MobileLinks;
