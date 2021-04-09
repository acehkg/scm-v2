import { useEffect } from 'react';
import styled from 'styled-components';
//panel creation utility
import CreateAnalysisPanels from './CreateAnalysisPanels';
//layout components
import ButtonClick from './Interfaces/ButtonClick';
import CloseButton from './Interfaces/CloseButton';

const SmallAnalysis = ({ analysis, size, dataSize }) => {
  return (
    <SmallWrapper>
      <CreateAnalysisPanels
        size={size}
        dataSize={dataSize}
        analysis={analysis}
      />
    </SmallWrapper>
  );
};

const SmallWrapper = styled.div`
  @media (min-width: 374px) {
    display: none;
  }
`;
const MobileAnalysis = ({ analysis, size, dataSize }) => {
  return (
    <MobileWrapper>
      <CreateAnalysisPanels
        size={size}
        dataSize={dataSize}
        analysis={analysis}
      />
    </MobileWrapper>
  );
};

const MobileWrapper = styled.div`
  display: none;
  @media (min-width: 375px) and (max-width: 767px) {
    display: block;
  }
`;
const IpadAnalysis = ({ analysis, size, dataSize }) => {
  return (
    <IpadWrapper>
      <CreateAnalysisPanels
        size={size}
        dataSize={dataSize}
        analysis={analysis}
      />
    </IpadWrapper>
  );
};

const IpadWrapper = styled.div`
  display: none;
  @media (min-width: 768px) and (max-width: 1023px) {
    display: block;
  }
`;
const DesktopAnalysis = ({ analysis, size, dataSize }) => {
  return (
    <DesktopWrapper>
      <CreateAnalysisPanels
        size={size}
        dataSize={dataSize}
        analysis={analysis}
      />
    </DesktopWrapper>
  );
};

const DesktopWrapper = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;

const AnalysisSlider = ({ analysis, open, setOpen }) => {
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
      <SmallAnalysis analysis={analysis} dataSize='verySmall' size='small' />
      <MobileAnalysis analysis={analysis} dataSize='small' size='small' />
      <IpadAnalysis analysis={analysis} dataSize='medium' size='medium' />
      <DesktopAnalysis analysis={analysis} dataSize='large' size='large' />
      <CloseWrapper>
        <CloseButton open={open} setOpen={setOpen} />
      </CloseWrapper>
    </Panel>
  );
};

const Panel = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  overflow: scroll;
  padding-top: 2rem;
  background-color: var(--light-grey);
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => (props.open ? '0' : '100%')});
  z-index: 3;

  @media (min-width: 768px) {
    //height: 100%;

    transition: transform 0.3s ease-in-out;
    transform: translateY(${(props) => (props.open ? '0' : '-100%')});
  }
`;
const CloseWrapper = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
`;
export default AnalysisSlider;
