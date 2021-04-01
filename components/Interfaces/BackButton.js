import Link from 'next/link';
import styled from 'styled-components';
import { ArrowLeft } from 'react-feather';

const BackButton = ({ size, color, href }) => {
  return (
    <Link href={href}>
      <Wrapper>
        <ArrowLeft size={size} color={color} />
        <Back color={color}>BACK</Back>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 50px;
  align-items: center;
`;
const Back = styled.p`
  font-size: 0.75rem;
  color: ${(props) => props.color};
`;
export default BackButton;
