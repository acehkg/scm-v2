import faunadb from 'faunadb';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { UnstyledLink } from '../../styles/globalStyles';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 1023px) {
    flex-direction: row;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;
const ImageContainer = styled.div`
  width: 100%;
`;

const Title = styled.h2`
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
  background-color: ${(props) => props.theme.redColour};
`;
const Malt = ({ malt, analysisSlug }) => {
  return (
    <>
      <Container>
        <ImageContainer>
          <Image
            src={`/images/products/${malt.batch}.png`}
            alt={`${malt.name}`}
            layout='responsive'
            width={1024}
            height={768}
          />
        </ImageContainer>

        <InfoContainer>
          <Title>{malt.name}</Title>
          <Title>
            {malt.variety} {malt.grain}
          </Title>
          <Title>{malt.grown}</Title>
          <Title>Harvested {malt.harvested}</Title>
          <Title>Malted {malt.malted}</Title>
          <Title>${malt.price / 100} 25kg Bag</Title>
          <Link href={analysisSlug}>
            <Analysis>SEE ANALYSIS</Analysis>
          </Link>
        </InfoContainer>
      </Container>
    </>
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
