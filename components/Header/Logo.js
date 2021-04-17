import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
  cursor: pointer;
`;

const Image = styled.img`
  width: 100px;
  height: auto;

  @media (min-width: 768px) {
    width: 150px;
  }
`;
const Logo = ({ src, alt }) => {
  return (
    <Wrapper>
      <Link href='/'>
        <Image src={src} alt={alt} />
      </Link>
    </Wrapper>
  );
};
export default Logo;
