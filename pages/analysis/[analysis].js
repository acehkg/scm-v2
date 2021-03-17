import faunadb from 'faunadb';
import Link from 'next/link';
import styled from 'styled-components';
import DataTable from '../../components/DataTable';
import { motion } from 'framer-motion';
import { fadeInDown } from '../../animations/Animations';

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const Back = styled(motion.div)`
  font-size: 1.25rem;
  display: block;
  width: 40%;
  margin: 1rem auto;
  height: 2.5rem;
  line-height: 2.6rem;
  text-align: center;
  color: ${(props) => props.theme.whiteColour};
  background-color: ${(props) => props.theme.buttonColour};
  border-radius: ${(props) => props.theme.buttonRadius};

  & :hover {
    cursor: pointer;
  }

  @media (min-width: 767px) {
    width: 20%;
  }
`;

const Analysis = ({ malt, slug }) => {
  const formattedMalt = {
    Plumps: malt.plumps,
    Thins: malt.thins,
    Moisture: malt.moisture,
    Friability: malt.friability,
    FineExtract: malt.fine,
    CoarseExtract: malt.coarse,
    FCDifference: malt.fcDiff,
    Color: malt.color,
    BetaGlucan: malt.betaGlucan,
    TotalProtein: malt.totalProtein,
    SolubleProtein: malt.solubleProtein,
    STRatio: malt.stRatio,
    FAN: malt.fan,
    DiastaticPower: malt.diastaticPower,
    AlphaAmaylase: malt.alphaAmaylase,
    Filtration: malt.filtration,
    Turbidity: malt.turbidity,
    pH: malt.ph,
  };

  return (
    <Container exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <Link href={slug}>
        <Back
          variants={fadeInDown}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          BACK
        </Back>
      </Link>
      <DataTable data={formattedMalt} />
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
        analysis: batch.data.batch,
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
  const analysisTarget = context.params.analysis;
  const batchTarget = data.filter((b) => b.data.batch === analysisTarget);
  const slug = `/malt/${batchTarget[0].data.batch}`;
  const malt = {
    ...batchTarget[0].data.analysis,
  };
  return {
    props: {
      malt,
      slug,
    },
  };
};

export default Analysis;
