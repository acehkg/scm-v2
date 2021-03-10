import faunadb from 'faunadb';
import DataTable from '../../components/DataTable.js';

const Malt = ({ malt }) => {
  const formattedMalt = {
    Batch: malt.batch,
    Name: malt.name,
    Grain: malt.grain,
    Variety: malt.variety,
    Grown: malt.grown,
    Harvested: malt.harvested,
    Malted: malt.malted,
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

  return <DataTable formattedData={formattedMalt} />;
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
