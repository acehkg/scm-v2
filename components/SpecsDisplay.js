import styled from 'styled-components';
import DataTable from './DataTable';

const Slider = styled.div`
  position: absolute;
  top: 1rem;
  left: 0;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: column nowrap;
  background: ${(props) => props.theme.whiteColour};
  //background: rgba(0, 0, 0, 0.2);
  //backdrop-filter: blur(40px);
  border-radius: 1rem;
  //background-clip: padding-box;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
  position: fixed;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-110%)')};
  //height: 100vh;
  width: 50%;
  transition: transform 0.3s ease-in-out;
  z-index: 15;
`;

const SpecsDisplay = ({ open, data }) => {
  return (
    <Slider open={open}>
      <DataTable data={data} />
    </Slider>
  );
};

export default SpecsDisplay;
