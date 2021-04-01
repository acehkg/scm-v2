import { useEffect } from 'react';
import styled from 'styled-components';
//layout components
import ButtonClick from '../components/Interfaces/ButtonClick';
import DataTable from '../components/DataTable';
//media queries
import { mediaQueries } from '../styles/mediaqueries';

const AnalysisSlider = ({ analysis, open, setOpen }) => {
  useEffect(() => {
    if (open === true) {
      document.body.style.overflow = 'hidden';
    }
    if (open !== true) {
      document.body.style.overflow = 'revert';
    }
  }, [open]);

  const analysisDisplay = {
    Moisture: analysis.moisture,
    Color: analysis.color,
    Friability: analysis.friability,
    'Coarse Extract': analysis.coarse,
    'Diastatic Power': analysis.diastaticPower,
    Filtration: analysis.filtration,
    pH: analysis.ph,
  };
  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <Panel open={open}>
      <TableWrapper>
        <DataTable data={analysisDisplay} />
      </TableWrapper>
      <ButtonWrapper>
        <ButtonClick onClick={handleClose} size='small' text='CLOSE' />
        <ButtonClick size='small' text='FULL SPECS' />
      </ButtonWrapper>
    </Panel>
  );
};

const Panel = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: var(--light-grey);
  transition: transform 0.2s ease-out;
  transform: translateX(${(props) => (props.open ? '0' : '100%')});
  z-index: 3;

  @media (min-width: ${mediaQueries.mobileLarge}) {
    height: 50%;
    transition: transform 0.2s ease-out;
    transform: translateY(${(props) => (props.open ? '0' : '-100%')});
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 50%;
  height: 7rem;
  justify-content: space-between;
  margin: 0 auto;
  flex-direction: column;
  padding-top: 1rem;
`;

const TableWrapper = styled.div`
  @media (min-width: ${mediaQueries.mobileSmall}) {
    padding-top: 3rem;
  }
`;
export default AnalysisSlider;
