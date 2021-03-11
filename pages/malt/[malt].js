import faunadb from 'faunadb';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import DataTable from '../../components/DataTable.js';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100vh;
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

const Title = styled.h2``;
const Malt = ({ malt }) => {
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
          <h3>{malt.name}</h3>
          <h3>
            {malt.variety} {malt.grain}
          </h3>
          <h3>{malt.grown}</h3>
          <h3>{malt.harvested}</h3>
          <h3>{malt.malted}</h3>
        </InfoContainer>
      </Container>
      <DataTable formattedData={formattedMalt} />
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

  const malt = {
    ...batchTarget[0].data,
    ...batchTarget[0].data.analysis,
    //name: batchTarget[0].data.name,
    //batch: batchTarget[0].data.batch,
    //analysis: batchTarget[0].data.analysis,
  };
  return {
    props: {
      malt,
    },
  };
};

export default Malt;
