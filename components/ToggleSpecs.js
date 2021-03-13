import { useState } from 'react';
import styled from 'styled-components';
import SpecsDisplay from './SpecsDisplay';

const Toggle = styled.button`
  display: block;
  width: 60%;
  margin: 1rem auto;
  height: 2.5rem;
  font-size: 1rem;
  line-height: 2.6rem;
  text-align: center;
  color: ${(props) => props.theme.whiteColour};
  background-color: ${(props) => props.theme.redColour}; ;
`;
const ToggleSpecs = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Toggle open={open} onClick={() => setOpen(!open)}>
        {open ? 'CLOSE' : 'SEE ANALYSIS'}
      </Toggle>
      <SpecsDisplay open={open} data={data} />
    </>
  );
};

export default ToggleSpecs;
