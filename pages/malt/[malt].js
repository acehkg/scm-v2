import { useState } from 'react';
import faunadb from 'faunadb';
import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideRightFadeIn, fadeInUp } from '../../animations/Animations';
//Layout Components
import ButtonLink from '../../components/Interfaces/ButtonLink';
import ButtonClick from '../../components/Interfaces/ButtonClick';
import AnalysisSlider from '../../components/AnalysisSlider';
import BackButton from '../../components/Interfaces/BackButton';

const PageWrapper = styled(motion.div)`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const MaltImage = ({ malt, variants }) => {
  return (
    <ImageWrapper variants={variants}>
      <Image
        src={`/images/products/${malt.batch}.png`}
        alt={`${malt.name}`}
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

const MaltInfo = ({ variants, malt }) => {
  return (
    <InfoWrapper variants={variants}>
      <Title>{malt.name}</Title>
      <Title>
        {malt.variety} {malt.grain}
      </Title>
      <Title>{malt.grown}</Title>
      <Title>Harvested {malt.harvested}</Title>
      <Title>Malted {malt.malted}</Title>
    </InfoWrapper>
  );
};

const InfoWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Title = styled(motion.h2)`
  padding-top: 0.5rem;
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--text-color);
`;

const BackToMalt = ({ variants, text, href, size }) => {
  return (
    <BackWrapper variants={variants}>
      <ButtonLink href={href} size={size} text={text} />
    </BackWrapper>
  );
};

const BackWrapper = styled(motion.div)`
  padding-bottom: 1rem;
`;
const SeeAnalysis = ({ variants, text, onClick, size }) => {
  return (
    <AnalysisWrapper variants={variants}>
      <ButtonClick onClick={onClick} text={text} size={size} />
    </AnalysisWrapper>
  );
};

const AnalysisWrapper = styled(motion.div)`
  padding-bottom: 1rem;
`;
const Malt = ({ malt }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <PageWrapper exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <BackButton size={24} color='var(--red-color)' />
      <MaltImage malt={malt} variants={slideRightFadeIn} />
      <MaltInfo malt={malt} variants={fadeInUp} />
      <SeeAnalysis
        variants={fadeInUp}
        onClick={handleOpen}
        size='small'
        text='ANALYSIS'
      />
      {/*<BackToMalt
        href='/malt'
        size='small'
        text='ALL MALT'
        variants={fadeInUp}
      />*/}
      <AnalysisSlider analysis={malt.analysis} open={open} setOpen={setOpen} />
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
