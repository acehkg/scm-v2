import styled from 'styled-components';
import { useRouter } from 'next/router';

const BatchForm = styled.div`
  width: 80%;
  margin: 3rem auto;
  text-align: center;
`;

const Find = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = e.target[0].value;
    router.push(`/malt/${id}`);
  };
  return (
    <BatchForm>
      <form onSubmit={handleSubmit}>
        <input type='text' />
        <input type='submit' />
      </form>
    </BatchForm>
  );
};

export default Find;
