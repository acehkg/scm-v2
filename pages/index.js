import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { UnstyledLink } from '../components/styles/globalStyles';

const Content = styled.div`
  height: 88vh;
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }
  @media (max-width: 768px) {
    margin-top: 12vh;
  }
`;
const TextContainer = styled.div`
  width: 50%;
  @media (max-width: 1024px) {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  @media (max-width: 420px) {
    height: 70%;
  }
`;
const Title = styled.h1`
  color: #4f1111;
  margin-left: 3rem;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 700;
  @media (max-width: 1024px) {
    margin: 0;
    text-align: center;
  }
`;

const Motto = styled.p`
  color: #4f1111;
  margin-left: 3rem;
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  @media (max-width: 1024px) {
    margin: 0;
    text-align: center;
  }
`;

const OurMalt = styled(UnstyledLink)`
  display: block;
  width: 40%;
  height: 3rem;
  margin-left: 3rem;
  font-size: clamp(1rem, 2vw, 1.5rem);
  line-height: 3.2rem;
  text-align: center;
  color: #fff;
  background-color: #09344f;
  border-radius: 3rem;
  @media (max-width: 1024px) {
    width: 80%;
    margin: 0;
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
  margin-bottom: 4.5rem;

  @media (max-width: 1024px) {
    margin-bottom: 0;
  }
`;
const Home = () => {
  return (
    <>
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
            src='/images/logolargered.png'
            alt='Simcoe County Malt Logo'
            layout='responsive'
            width={2000}
            height={1600}
          />
        </LandingImage>
      </Content>
    </>
  );
};

export default Home;
