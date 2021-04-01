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
        <a onClick={handleNav}>HOME</a>
      </Link>
    </Wrapper>
  );
};
export default MobileLinks;
