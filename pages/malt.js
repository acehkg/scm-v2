import faunadb from 'faunadb';
import { PageContainer } from '../components/styles/globalStyles';

const Analysis = ({ batches }) => {
  return (
    <PageContainer>
      {batches.map((batch) => {
        return <h1>{batch.slug}</h1>;
      })}
    </PageContainer>
  );
};

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
