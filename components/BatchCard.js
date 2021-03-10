import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { UnstyledLink } from '../components/styles/globalStyles';

const Batch = styled.div`
  justify-self: center;
  max-height: 30rem;
  width: clamp(280px, 80vw, 22rem);
  text-align: center;
  color: #4f1111;
  border: #09344f 1px solid;
  border-radius: 5%;
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const BatchInfo = styled.div``;

const BagImage = styled.div`
  margin: 1rem;
`;

const BatchLink = styled(UnstyledLink)`
  display: block;
  width: 80%;
  margin: 1rem auto;
  height: 2.5rem;
  font-size: 1rem;
  line-height: 2.6rem;
  text-align: center;
  color: #fff;
  background-color: #09344f;
  border-radius: 3rem;
`;
const BatchCard = ({ batch }) => {
  return (
    <Batch>
      <BagImage>
        <Image
          src='/images/bag.jpg'
          alt='Simcoe County Malt Bag'
          layout='responsive'
          width={1920}
          height={1080}
        />
      </BagImage>
      <BatchInfo>
        <h2>{batch.name}</h2>
        <h3>{batch.type}</h3>
        <h3>{batch.variety}</h3>
        <h3>${batch.price / 100} / 25Kg</h3>
        <Link href={batch.slug}>
          <BatchLink>QUALITY ANALYSIS</BatchLink>
        </Link>
      </BatchInfo>
    </Batch>
  );
};

export default BatchCard;
