import axios from 'axios';
import { useEffect, useState } from 'react';

const url = '/api/getAllBatches';
const Analysis = () => {
  const [analysisData, setAnalysisData] = useState([]);

  useEffect(() => {
    const fetchAnalysis = async () => {
      const response = await axios.get(url);
      const batches = response.data;
      setAnalysisData(batches);
    };
    fetchAnalysis();
  }, []);
  return analysisData.map((batch) => {
    return (
      <div>
        <span>{batch.id}</span>
      </div>
    );
  });
};
export default Analysis;
