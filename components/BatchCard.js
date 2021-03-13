import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { UnstyledLink } from '../styles/globalStyles';

const Batch = styled.div`
  justify-self: center;
  max-height: 30rem;
  width: clamp(280px, 80vw, 22rem);
  text-align: center;
  color: ${(props) => props.theme.redColour};
  // border: #09344f 1px solid;
  border-radius: 5%;
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const BatchInfo = styled.div``;

const BatchLink = styled(UnstyledLink)`
  display: block;
  width: 60%;
  margin: 1rem auto;
  height: 2.5rem;
  font-size: 1rem;
  line-height: 2.6rem;
  text-align: center;
  color: ${(props) => props.theme.whiteColour};
  background-color: ${(props) => props.theme.redColour};
  //border-radius: 1rem;
`;

const Title = styled.h3`
  font-size: 1rem;
`;
const BatchCard = ({ batch }) => {
  return (
    <Batch>
      <Image
        src={`/images/products/${batch.batch}.png`}
        alt='Simcoe County Malt Bag'
        layout='responsive'
        width={1024}
        height={768}
      />
      <BatchInfo>
        <Title>{batch.name}</Title>
        <Title>Type: {batch.type}</Title>
        <Link href={batch.slug}>
          <BatchLink>DETAILS</BatchLink>
        </Link>
      </BatchInfo>
    </Batch>
  );
};

export default BatchCard;
