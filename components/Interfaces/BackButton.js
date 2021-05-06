import Link from 'next/link';
import styled from 'styled-components';
import { ArrowLeft } from 'react-feather';

const BackButton = ({ size, color, href, text, fontSize }) => {
  return (
    <Link href={href}>
      <Wrapper>
        <ArrowLeft size={size} color={color} />
        <Text color={color} font={fontSize}>
          {text}
        </Text>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.div`
  display: flex;
  //width: 100px;
  align-items: center;
  cursor: pointer;
`;
const Text = styled.span`
  font-size: ${(props) => props.font};
  color: ${(props) => props.color};
`;
export default BackButton;
