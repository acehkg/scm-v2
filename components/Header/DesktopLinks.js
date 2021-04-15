import styled from 'styled-components';
import Link from 'next/link';

const Wrapper = styled.nav`
  display: none;
  @media (min-width: 835px) {
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
      <Link href={'/blog'}>
        <Links>BLOG</Links>
      </Link>
      <Link href={'/contact'}>
        <Links>CONTACT</Links>
      </Link>
    </Wrapper>
  );
};
const Border = styled.div`
  width: 100%;
  background-color: var(--blue-color);
  height: 2px;
  transition: 0.5s transform ease;
`;
const Links = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0 2rem;
  color: var(--red-color);
  transition: transform 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
  &:hover:after {
    opacity: 1;
    width: 70%;
  }

  &:after {
    position: absolute;
    border: 0 solid transparent;
    height: 0;
    border-bottom: 2px solid var(--blue-color);
    content: '';
    width: 0;
    bottom: -0.25rem;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: all 0.3s ease;
  }
`;
export default DesktopLinks;
