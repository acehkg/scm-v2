import useNav from '../hooks/useNav';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`
  position: absolute;
  width: 2rem;
  height: 2rem;
  right: 2rem;
  top: 4rem;
  z-index: 20;
  display: none;
  @media (max-width: 834px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  @media (max-width: 400px) {
    top: 3rem;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#4f1111' : '#5c4e4e')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: ${({ open }) => (open ? 'all 0.2s linear' : 'all 0.2s linear')};

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Burger = () => {
  const { open, setOpen } = useNav();

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} setOpen={setOpen} />
    </>
  );
};

export default Burger;
