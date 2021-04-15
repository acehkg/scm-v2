import styled from 'styled-components';

const Wrapper = styled.div``;

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
      <Image src={src} alt={alt} />
    </Wrapper>
  );
};
export default Logo;
