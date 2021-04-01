import { useEffect } from 'react';
import styled from 'styled-components';
import MobileLinks from './MobileLinks';
import useNav from '../../hooks/useNav';

const Panel = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background-color: var(--dark-grey);
  transition: transform 0.2s ease-out;
  transform: translateX(${(props) => (props.open ? '0' : '100%')});
`;

const Slider = () => {
  const { open } = useNav();
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
      <MobileLinks />
    </Panel>
  );
};

export default Slider;
