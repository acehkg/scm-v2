import Link from 'next/link';
import styled from 'styled-components';
import { ArrowRight } from 'react-feather';

const ForwardButton = ({ size, color, href, text, fontSize }) => {
  return (
    <Link href={href}>
      <Wrapper>
        <Text color={color} font={fontSize}>
          {text}
        </Text>
        <ArrowRight size={size} color={color} />
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.div`
  display: flex;
  // width: 100%;
  align-items: center;
  cursor: pointer;
`;
const Text = styled.p`
  font-size: ${(props) => props.font};
  color: ${(props) => props.color};
`;
export default ForwardButton;
