import styled from 'styled-components';
import { ArrowDown } from 'react-feather';

const DownButton = ({ size, color, href, text, fontSize }) => {
  return (
    <Download href={href} target='_blank'>
      <Wrapper>
        <ArrowDown size={size} color={color} />
        <Text color={color} font={fontSize}>
          {text}
        </Text>
      </Wrapper>
    </Download>
  );
};

const Download = styled.a``;
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

export default DownButton;
