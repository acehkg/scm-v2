import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
const MainText = styled.h1`
  color: var(--blue-color);
  font-size: 2rem;
`;

const ConstructionHeading = () => {
  return (
    <Wrapper>
      <MainText MainText> WEBSITE UNDER CONSTRUCTION</MainText>
    </Wrapper>
  );
};

export default ConstructionHeading;
