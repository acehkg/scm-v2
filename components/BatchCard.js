import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { stagger, fadeInUp, slideRightFadeIn } from '../animations/Animations';
//Layout Components
import ButtonLink from '../components/Interfaces/ButtonLink';

const CardWrapper = styled(motion.div)`
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 100%;
  text-align: center;
`;

const BatchImage = ({ batch, variants }) => {
  return (
    <ImageWrapper variants={variants}>
      <Image
        src={`/images/products/${batch.batch}.png`}
        alt='Simcoe County Malt Bag'
        layout='responsive'
        width={1024}
        height={768}
      />
    </ImageWrapper>
  );
};
const ImageWrapper = styled(motion.div)`
  width: 100%;
`;
const BatchInfo = ({ batch, variants }) => {
  return (
    <InfoWrapper variants={variants}>
      <Title>{batch.name}</Title>
      <Title>Type: {batch.type}</Title>
    </InfoWrapper>
  );
};
const InfoWrapper = styled(motion.div)`
  padding-bottom: 1.5rem;
`;

const Title = styled(motion.p)`
  font-size: 1.5rem;
  padding: 0.5rem 0;
`;

const SeeMalt = ({ variants, text, href, size }) => {
  return (
    <motion.div variants={variants}>
      <ButtonLink href={href} size={size} text={text} />
    </motion.div>
  );
};
const BatchCard = ({ batch }) => {
  return (
    <CardWrapper variants={stagger}>
      <BatchImage batch={batch} variants={slideRightFadeIn} />
      <BatchInfo batch={batch} variants={fadeInUp} />
      <SeeMalt
        href={batch.slug}
        size='medium'
        text='DETAILS'
        variants={fadeInUp}
      />
    </CardWrapper>
  );
};

export default BatchCard;
