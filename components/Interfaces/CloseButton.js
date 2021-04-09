import styled from 'styled-components';

const StyledClose = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  width: 2rem;
  height: 2rem;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: var(--red-color);
    border-radius: 10px;
    transform-origin: 4.5px;
    transition: opacity 0.1s ease;
    background-color: ${(props) => props.color};
    &:nth-child(1) {
      transform: rotate(45deg);
      opacity: ${(open) => (open ? '1' : '0')};
    }

    &:nth-child(2) {
      transform: rotate(-45deg);
      opacity: ${(open) => (open ? '1' : '0')};
    }
  }
`;

const Close = ({ open, setOpen, color }) => {
  return (
    <StyledClose
      onClick={() => {
        setOpen(!open);
      }}
      open={open}
      color={color}
    >
      <div />
      <div />
    </StyledClose>
  );
};

export default Close;
