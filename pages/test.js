import axios from 'axios';
import { useState } from 'react';

const Test = () => {
  const [batch, setBatch] = useState('');

  const handleSubmit = async (e) => {
    const url = '/api/getBatchById';

    e.preventDefault();
    const id = e.target[0].value;
    try {
      const response = await axios.post(url, { id });
      const batch = {
        ...response.data[0],
      };
      setBatch(batch);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' />
        <input type='submit' />
      </form>
      {batch === '' ? <span>Enter</span> : <span>{batch.id}</span>}
    </>
  );
};

export default Test;
