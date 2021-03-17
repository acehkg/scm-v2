import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { UnstyledLink } from '../styles/globalStyles';
import { motion } from 'framer-motion';
import { stagger, fadeInDown, fadeInUp } from '../animations/Animations';

const Batch = styled(motion.div)`
  justify-self: center;
  max-height: 30rem;
  width: clamp(280px, 80vw, 22rem);
  text-align: center;
  color: ${(props) => props.theme.textColour};
  border-radius: 5%;
  @media (max-width: 834px) {
    margin-bottom: 2rem;
  }
`;

const BatchInfo = styled(motion.div)``;

const BatchLink = styled(UnstyledLink)`
  display: block;
  width: 60%;
  margin: 1rem auto;
  height: 2.5rem;
  font-size: 1rem;
  line-height: 2.6rem;
  text-align: center;
  color: ${(props) => props.theme.whiteColour};
  background-color: ${(props) => props.theme.buttonColour};
  border-radius: ${(props) => props.theme.buttonRadius};
`;

const Title = styled(motion.h3)`
  font-size: 1rem;
`;
const BatchCard = ({ batch }) => {
  return (
    <Batch variants={stagger}>
      <motion.div variants={fadeInUp}>
        <Image
          src={`/images/products/${batch.batch}.png`}
          alt='Simcoe County Malt Bag'
          layout='responsive'
          width={1024}
          height={768}
        />
      </motion.div>
      <BatchInfo variants={fadeInUp}>
        <Title>{batch.name}</Title>
        <Title>Type: {batch.type}</Title>
        <motion.div>
          <Link href={batch.slug}>
            <BatchLink>DETAILS</BatchLink>
          </Link>
        </motion.div>
      </BatchInfo>
    </Batch>
  );
};

export default BatchCard;
