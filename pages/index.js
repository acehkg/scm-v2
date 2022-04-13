//components
import ConstructionHeader from '../components/Header/ConstructionHeader';
import ConstructionHeading from '../components/ConstructionHeading';
import ConstructionLinks from '../components/ConstructionLinks';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 70vh;
`;

const Construction = () => {
  return (
    <Wrapper>
      <ConstructionHeader />
      <ConstructionHeading />
      <ConstructionLinks />
    </Wrapper>
  );
};

export default Construction;
