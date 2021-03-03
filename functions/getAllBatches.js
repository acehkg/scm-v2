const faunadb = require('faunadb');

const faunaClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });

const q = faunadb.query;

exports.handler = async (event, context) => {
  const { data } = await faunaClient.query(
    q.Map(
      q.Paginate(q.Match(q.Index('all_Batches'))),
      q.Lambda('ref', q.Get(q.Var('ref')))
    )
  );
  const batches = data.map((batch) => {
    return batch.data;
  });

  return {
    statusCode: 200,
    body: JSON.stringify(batches),
  };
};
