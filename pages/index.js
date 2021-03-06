import styled from 'styled-components';
//Animation
import { motion } from 'framer-motion';
import { fadeInDown, fadeInUp, stagger } from '../animations/Animations';
//Layout Components
import ButtonLink from '../components/Interfaces/ButtonLink';
//SEO
import PageSeo from '../components/SEO';

const meta = {
  title: 'Simcoe County Malt Inc.',
  description:
    'Ontario grown barley crafted with care into premium malt. Better ingredients make better beer.',
  image: '/images/logolargered.png',
  site: 'https://scm-v2.vercel.app',
};

const FeatureImage = ({ variants }) => {
  return (
    <ImageWrapper variants={variants}>
      <img src='/images/barley-768-2.png' alt='Barley' />
    </ImageWrapper>
  );
};
const ImageWrapper = styled(motion.div)`
  img {
    width: 100%;
    height: auto;
  }
`;

const Banner = ({ variants }) => {
  return (
    <TitleContainer variants={variants}>
      <Title>ONTARIO GRAIN.</Title>
      <Title>ONTARIO MALT.</Title>
    </TitleContainer>
  );
};

const TitleContainer = styled(motion.div)`
  text-align: center;
`;
const Title = styled.h1`
  color: var(--red-color);
  font-size: clamp(1.5rem, 3vw, 3rem);
  font-weight: 700;
`;

const Motto = ({ variants }) => {
  return (
    <MottoText variants={variants}>
      Locally grown then crafted with care. Better ingredients make better beer.
    </MottoText>
  );
};
const MottoText = styled(motion.p)`
  text-align: center;
  color: var(--red-color);
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  line-height: 1.5;
`;

const CallToAction = ({ variants, text, href, size }) => {
  return (
    <motion.div variants={variants}>
      <ButtonLink href={href} size={size} text={text} />
    </motion.div>
  );
};

const Home = () => {
  return (
    <>
      <PageSeo meta={meta} />
      <Wrapper
        exit={{ opacity: 0 }}
        initial='initial'
        animate='animate'
        variants={stagger}
      >
        <FeatureImage variants={fadeInDown} />
        <TextWrapper>
          <Banner variants={fadeInUp} />
          <Motto variants={fadeInUp} />
          <CallToAction
            variants={fadeInUp}
            text='SEE OUR MALT'
            href='/malt'
            size='large'
          />
        </TextWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled(motion.div)`
  height: 100%;
  width: 80%;
  margin: 0 auto;

  @media (min-width: 834px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;
    height: 70%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

export default Home;
