import Link from 'next/link';
import styled from 'styled-components';
import { ArrowRight } from 'react-feather';

const ForwardButton = ({
  size,
  color,
  href,
  text,
  fontSize,
  type,
  onClick,
}) => {
  if (type === 'link') {
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
  }
  if (type === 'button') {
    return (
      <Wrapper onClick={onClick}>
        <Text color={color} font={fontSize}>
          {text}
        </Text>
        <ArrowRight size={size} color={color} />
      </Wrapper>
    );
  }
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

const ButtonWrapper = styled.button`
  display: flex;
  // width: 100%;
  align-items: center;
  cursor: pointer;
`;
export default ForwardButton;
