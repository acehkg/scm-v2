import faunadb from 'faunadb';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { UnstyledLink } from '../../styles/globalStyles';
import { motion } from 'framer-motion';
import { slideRightFadeIn, fadeInUp } from '../../animations/Animations';

const Container = styled(motion.div)`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 1023px) {
    flex-direction: row;
  }
`;

const InfoContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;
const ImageContainer = styled(motion.div)`
  width: 100%;
`;

const Title = styled(motion.h2)`
  margin: 1rem 0;
  font-size: 1.25rem;
  font-weight: 400;
  color: ${(props) => props.theme.textColour};
`;

const Analysis = styled(UnstyledLink)`
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

const LinkMotion = styled(motion.div)`
  width: 100%;
`;

const BackToMalt = styled(motion.a)`
  text-decoration: none;
  color: ${(props) => props.theme.blueColour};
  font-size: 0.75rem;
  text-align: center;
`;

const Malt = ({ malt, analysisSlug }) => {
  return (
    <Container exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <ImageContainer variants={slideRightFadeIn}>
        <Image
          src={`/images/products/${malt.batch}.png`}
          alt={`${malt.name}`}
          layout='responsive'
          width={1024}
          height={768}
        />
      </ImageContainer>

      <InfoContainer variants={fadeInUp}>
        <Title>{malt.name}</Title>
        <Title>
          {malt.variety} {malt.grain}
        </Title>
        <Title>{malt.grown}</Title>
        <Title>Harvested {malt.harvested}</Title>
        <Title>Malted {malt.malted}</Title>
        <Title>${malt.price / 100} 25kg Bag</Title>
        <LinkMotion whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href={analysisSlug}>
            <Analysis>SEE ANALYSIS</Analysis>
          </Link>
        </LinkMotion>
        <Link href='/malt'>
          <BackToMalt whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            BACK TO ALL MALT
          </BackToMalt>
        </Link>
      </InfoContainer>
    </Container>
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
    ...batchTarget[0].data.analysis,
  };
  return {
    props: {
      malt,
      analysisSlug,
    },
  };
};

export default Malt;
