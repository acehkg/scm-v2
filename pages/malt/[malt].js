import { useState } from 'react';
import faunadb from 'faunadb';
import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  slideRightFadeIn,
  fadeInUp,
  stagger,
} from '../../animations/Animations';
//Layout Components
import ForwardButton from '../../components/Interfaces/ForwardButton';
import BackButton from '../../components/Interfaces/BackButton';
import AnalysisSlider from '../../components/AnalysisSlider';

const PageWrapper = styled(motion.div)`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  text-align: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    height: 70%;
  }
`;

const MaltImage = ({ malt, variants }) => {
  return (
    <ImageWrapper variants={variants}>
      <img src='/images/malt.jpg' alt={`${malt.name}`} />
    </ImageWrapper>
  );
};
const ImageWrapper = styled(motion.div)`
  img {
    width: 80%;
    height: auto;
    border-radius: 50%;

    @media (min-width: 1024px) {
      width: 30%;
    }
  }
`;

const MaltInfo = ({ variants, malt }) => {
  return (
    <InfoWrapper variants={variants}>
      <Title>
        {malt.variety} {malt.grain}
      </Title>
      <Title>{malt.grown}</Title>
      <Title>Malted {malt.malted}</Title>
    </InfoWrapper>
  );
};

const InfoWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  align-items: center;
  justify-content: space-evenly;
  color: var(--red-color);
`;

const Title = styled(motion.h2)`
  padding-top: 0.5rem;
  font-size: 1.25rem;
  font-weight: 400;
`;

const BackWrapper = styled(motion.div)``;
const SeeAnalysis = ({ variants, text, onClick, size, fontSize, color }) => {
  return (
    <AnalysisWrapper variants={variants}>
      <ForwardButton
        onClick={onClick}
        text={text}
        size={size}
        type='button'
        fontSize={fontSize}
        color={color}
      />
    </AnalysisWrapper>
  );
};

const AnalysisWrapper = styled(motion.div)`
  padding-bottom: 1rem;
`;

const InfoImageWrapper = styled(motion.div)`
  padding-top: 1rem;
  width: 100%;
`;

const Malt = ({ malt }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <PageWrapper
      exit={{ opacity: 0 }}
      initial='initial'
      animate='animate'
      variants={stagger}
    >
      <BackWrapper variants={fadeInUp}>
        <BackButton
          size={24}
          color='var(--red-color)'
          href='/malt'
          text='BACK'
          fontSize='1rem'
        />
      </BackWrapper>
      <InfoImageWrapper variants={fadeInUp}>
        <MaltImage malt={malt} variants={slideRightFadeIn} />
        <MaltInfo malt={malt} variants={fadeInUp} />
      </InfoImageWrapper>
      <SeeAnalysis
        variants={fadeInUp}
        onClick={handleOpen}
        size={24}
        text='ANALYSIS'
        fontSize='1rem'
        color='var(--red-color)'
      />
      <AnalysisSlider malt={malt} open={open} setOpen={setOpen} />
    </PageWrapper>
  );
};

export const getStaticPaths = async () => {
  const faunaClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });

  const q = faunadb.query;

  const { data } = await faunaClient.query(
    q.Map(
      q.Paginate(q.Match(q.Index('all_Batches'))),
      q.Lambda('ref', q.Get(q.Var('ref')))
    )
  );
  const paths = data.map((batch) => {
    return {
      params: {
        malt: batch.data.batch,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const faunaClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });

  const q = faunadb.query;

  const { data } = await faunaClient.query(
    q.Map(
      q.Paginate(q.Match(q.Index('all_Batches'))),
      q.Lambda('ref', q.Get(q.Var('ref')))
    )
  );
  const batchNumber = context.params.malt;
  const batchTarget = data.filter((b) => b.data.batch === batchNumber);
  const analysisSlug = `/analysis/${batchTarget[0].data.batch}`;
  const malt = {
    ...batchTarget[0].data,
    //...batchTarget[0].data.analysis,
  };
  return {
    props: {
      malt,
      analysisSlug,
    },
  };
};

export default Malt;
