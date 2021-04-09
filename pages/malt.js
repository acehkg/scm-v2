import faunadb from 'faunadb';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { stagger } from '../animations/Animations';
//layout components
import BatchCard from '../components/BatchCard';

const Analysis = ({ batches }) => {
  return (
    <PageWrapper
      exit={{ opacity: 0 }}
      initial='initial'
      animate='animate'
      variants={stagger}
    >
      {batches.map((b) => {
        return <BatchCard key={b.id} batch={b} />;
      })}
    </PageWrapper>
  );
};
const PageWrapper = styled(motion.div)`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 834px) {
    flex-direction: unset;
    height: 75%;
  }
`;

export const getStaticProps = async () => {
  const faunaClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });

  const q = faunadb.query;

  const { data } = await faunaClient.query(
    q.Map(
      q.Paginate(q.Match(q.Index('all_Batches'))),
      q.Lambda('ref', q.Get(q.Var('ref')))
    )
  );
  const batches = data.map((batch) => {
    const slug = `/malt/${batch.data.batch}`;

    const malt = {
      ...batch.data,
      slug,
    };
    return malt;
  });

  return {
    props: {
      batches,
    },
  };
};
export default Analysis;
