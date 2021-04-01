import styled from 'styled-components';
import { mediaQueries } from '../../styles/mediaqueries';
import useNav from '../../hooks/useNav';

const StyledBurger = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  width: 2rem;
  height: 2rem;
  @media (min-width: ${mediaQueries.ipad}) {
    display: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: var(--text-color);
    border-radius: 10px;
    transform-origin: 1px;
    transition: ${({ open }) =>
      open ? 'transform 0.1s linear' : 'transform 0.1s linear'};

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      visibility: ${({ open }) => (open ? 'hidden' : 'revert')};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Burger = () => {
  const { open, setOpen } = useNav();

  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
