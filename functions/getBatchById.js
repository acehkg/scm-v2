const faunadb = require('faunadb');

const faunaClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });

const q = faunadb.query;

exports.handler = async (event) => {
  const batch = JSON.parse(event.body);
  const { data } = await faunaClient.query(
    q.Map(
      q.Paginate(q.Match(q.Index('analysis_byBatch'), `${batch.id}`)),
      q.Lambda('Ref', q.Get(q.Var('Ref')))
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
