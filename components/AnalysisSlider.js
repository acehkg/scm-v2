import { useEffect } from 'react';
import styled from 'styled-components';
import AnalysisFacts from './AnalysisFacts';
import CloseButton from './Interfaces/CloseButton';

const AnalysisSlider = ({ malt, open, setOpen }) => {
  useEffect(() => {
    if (open === true) {
      document.body.style.overflow = 'hidden';
    }
    if (open !== true) {
      document.body.style.overflow = 'revert';
    }
  }, [open]);
  return (
    <Panel open={open}>
      <AnalysisFacts analysis={malt.analysis} />
      <CloseWrapper>
        <CloseButton open={open} setOpen={setOpen} color='var(--red-color)' />
      </CloseWrapper>
    </Panel>
  );
};

export default AnalysisSlider;

const Panel = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  overflow: scroll;
  padding-top: 2rem;
  background-color: var(--white-color);
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => (props.open ? '0' : '-100%')});
  z-index: 3;
`;

const CloseWrapper = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
`;
