import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { UnstyledLink } from '../styles/globalStyles';

const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 80vh;
`;
const TextContainer = styled.div`
  width: 50%;
  margin-left: 3rem;

  @media (max-width: 1023px) {
    margin: 0;
    text-align: center;
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 15;
  }
`;
const Title = styled.h1`
  color: ${(props) => props.theme.textColour};
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 700;
`;

const Motto = styled.p`
  color: ${(props) => props.theme.textColour};
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  @media (max-width: 370px) {
    display: none;
  }
`;

const OurMalt = styled(UnstyledLink)`
  display: block;
  width: 40%;
  height: 3rem;
  font-size: clamp(1rem, 2vw, 1.5rem);
  line-height: 3.2rem;
  text-align: center;
  color: ${(props) => props.theme.whiteColour};
  background-color: ${(props) => props.theme.blueColour};
  border-radius: 3rem;
  @media (max-width: 1024px) {
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
  @media (max-width: 420px) {
    width: 100%;
    margin: 0;
    text-align: center;
  }
`;
const LandingImage = styled.div`
  width: 50%;

  @media (max-width: 1023px) {
    width: 70vw;
    position: absolute;
    top: 0;
    right: 0;
  }
`;
const Home = () => {
  return (
    <Content>
      <TextContainer>
        <Title>ONTARIO GRAIN. ONTARIO MALT.</Title>
        <Motto>
          Locally grown then crafted with care. Better ingredients make better
          beer.
        </Motto>
        <Link href='/malt'>
          <OurMalt>SEE OUR MALT</OurMalt>
        </Link>
      </TextContainer>
      <LandingImage>
        <Image
          src='/images/barley.png'
          alt='Barley'
          layout='responsive'
          width={700}
          height={629}
        />
      </LandingImage>
    </Content>
  );
};

export default Home;
