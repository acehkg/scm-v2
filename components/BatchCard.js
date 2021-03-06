import styled from 'styled-components';
import { motion } from 'framer-motion';
import { stagger, fadeInUp, slideRightFadeIn } from '../animations/Animations';
//Layout Components
import ForwardButton from '../components/Interfaces/ForwardButton';

const CardWrapper = styled(motion.div)`
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BatchImage = ({ batch, variants }) => {
  return (
    <ImageWrapper variants={variants}>
      <img
        src={`/images/products/${batch.batch}.png`}
        alt='Simcoe County Malt Bag'
      />
    </ImageWrapper>
  );
};
const ImageWrapper = styled(motion.div)`
  img {
    width: 100%;
    height: auto;

    @media (min-width: 1024px) {
      width: 90%;
    }
  }
`;
const BatchInfo = ({ batch, variants }) => {
  return (
    <InfoWrapper variants={variants}>
      <Title>{batch.name}</Title>
      <Batch>Batch # {batch.batch}</Batch>
    </InfoWrapper>
  );
};
const InfoWrapper = styled(motion.div)`
  padding-bottom: 1.5rem;
  color: var(--red-color);
`;

const Title = styled(motion.p)`
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
`;

const Batch = styled(motion.p)`
  font-size: 1rem;
  text-align: center;
`;
const SeeMalt = ({ variants, text, href, size, fontSize }) => {
  return (
    <DetailsWrapper variants={variants}>
      <ForwardButton
        size={size}
        color='var(--red-color)'
        href={href}
        text={text}
        fontSize={fontSize}
        type='link'
      />
    </DetailsWrapper>
  );
};
const DetailsWrapper = styled(motion.div)``;
const BatchCard = ({ batch }) => {
  return (
    <CardWrapper variants={stagger}>
      <BatchImage batch={batch} variants={slideRightFadeIn} />
      <BatchInfo batch={batch} variants={fadeInUp} />
      <SeeMalt
        href={batch.slug}
        size={24}
        text='DETAILS'
        variants={fadeInUp}
        fontSize='1rem'
      />
    </CardWrapper>
  );
};

export default BatchCard;
