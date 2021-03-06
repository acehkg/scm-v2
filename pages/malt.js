import faunadb from 'faunadb';
import Link from 'next/link';
import styled from 'styled-components';
import BatchCard from '../components/BatchCard';
import { UnstyledLink } from '../components/styles/globalStyles';

const Container = styled.div`
  @media (max-width: 768px) {
    margin-top: 15vh;
  }
`;

const BatchContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-gap: 2rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

const SearchButton = styled(UnstyledLink)`
  display: block;
  width: 30%;
  margin: 3rem auto;
  height: 3rem;
  font-size: clamp(1rem, 2vw, 1.5rem);
  line-height: 3.2rem;
  text-align: center;
  color: #fff;
  background-color: #09344f;
  border-radius: 3rem;

  @media (max-width: 700px) {
    display: none;
  }
`;

const Analysis = ({ batches }) => {
  return (
    <Container>
      <Link href='/malt/find'>
        <SearchButton>SEARCH BY BATCH #</SearchButton>
      </Link>

      <BatchContainer>
        {batches.map((b) => {
          return <BatchCard key={b.id} batch={b} />;
        })}
      </BatchContainer>
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
