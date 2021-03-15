import faunadb from 'faunadb';
import styled from 'styled-components';
import BatchCard from '../components/BatchCard';

const Container = styled.div`
  width: 80%;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-gap: 2rem;
  @media (max-width: 834px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

const Analysis = ({ batches }) => {
  return (
    <Container>
      {batches.map((b) => {
        return <BatchCard key={b.id} batch={b} />;
      })}
    </Container>
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
