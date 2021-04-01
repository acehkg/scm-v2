import styled from 'styled-components';
import { ArrowLeft } from 'react-feather';

const BackButton = ({ size, color }) => {
  return (
    <>
      <ArrowLeft size={size} color={color} />
      <Back color={color}>BACK</Back>
    </>
  );
};

const Back = styled.p`
  font-size: 0.75rem;
  color: ${(props) => props.color};
`;
export default BackButton;
