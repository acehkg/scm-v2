import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const Batch = styled.div`
  justify-self: center;
  max-height: 25rem;
  width: clamp(280px, 80vw, 22rem);
  background: red;
  text-align: center;
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const BagImage = styled(Image)``;

const BatchCard = ({ batch }) => {
  return (
    <Batch>
      <BagImage
        src='/images/bag.jpg'
        alt='Simcoe County Malt Bag'
        layout='responsive'
        width={1920}
        height={1080}
      />
      <h2>{batch.name}</h2>
      <h3>{batch.type}</h3>
      <h3>{batch.variety}</h3>
    </Batch>
  );
};

export default BatchCard;
