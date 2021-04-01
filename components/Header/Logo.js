import styled from 'styled-components';
import Image from 'next/image';
import { mediaQueries } from '../../styles/mediaqueries';

const Wrapper = styled.div`
  width: 100px;

  @media (min-width: ${mediaQueries.ipad}) {
    width: 150px;
  }
`;
const Logo = ({ src, alt, height, width }) => {
  return (
    <Wrapper>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout='responsive'
      />
    </Wrapper>
  );
};
export default Logo;
