import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { UnstyledLink } from '../styles/globalStyles';

const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  //height: 100vh;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }
`;
const TextContainer = styled.div`
  width: 50%;
  margin-left: 3rem;

  @media (max-width: 1024px) {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 1rem 0;
    text-align: center;
  }
`;

const TitleContainer = styled.div``;
const Title = styled.h1`
  color: ${(props) => props.theme.textColour};
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 700;
`;

const Motto = styled.p`
  color: ${(props) => props.theme.textColour};
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  line-height: 1.5;
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
    width: 100%;
  }
`;
const LandingImage = styled.div`
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Home = () => {
  return (
    <Content>
      <TextContainer>
        <TitleContainer>
          <Title>ONTARIO GRAIN.</Title>
          <Title>ONTARIO MALT.</Title>
        </TitleContainer>
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
          width={768}
          height={569}
        />
      </LandingImage>
    </Content>
  );
};

export default Home;
