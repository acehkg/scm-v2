import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
//Animation
import { motion } from 'framer-motion';
import { fadeInDown, fadeInUp, stagger } from '../animations/Animations';
//Layout Components
import ButtonLink from '../components/Interfaces/ButtonLink';

const FeatureImage = ({ variants }) => {
  return (
    <ImageWrapper variants={variants}>
      <Image
        src='/images/barley-768-2.png'
        alt='Barley'
        layout='responsive'
        width={768}
        height={569}
      />
    </ImageWrapper>
  );
};
const ImageWrapper = styled(motion.div)`
  width: 100%;
  z-index: -1;
`;

const Banner = ({ variants }) => {
  return (
    <TitleContainer variants={variants}>
      <Title>ONTARIO GRAIN.</Title>
      <Title>ONTARIO MALT.</Title>
    </TitleContainer>
  );
};

const TitleContainer = styled(motion.div)``;
const Title = styled.h1`
  color: var(--text-color);
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
  color: var(--text-color);
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  line-height: 1.5;
`;

const CallToAction = ({ variants, text }) => {
  return (
    <motion.div variants={variants}>
      <ButtonLink href='/' size='large' text={text} />
    </motion.div>
  );
};

const Home = () => {
  return (
    <Wrapper
      exit={{ opacity: 0 }}
      initial='initial'
      animate='animate'
      variants={stagger}
    >
      <FeatureImage variants={fadeInUp} />

      <Banner variants={fadeInUp} />
      <Motto variants={fadeInUp} />
      <CallToAction variants={fadeInUp} text='SEE OUR MALT' />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  height: 100%;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export default Home;