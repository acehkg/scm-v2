import styled from 'styled-components';

const SIZES = {
  small: {
    '--borderRadius': 4 + 'px',
    '--fontSize': 16 / 16 + 'rem',
    '--padding': '4px 12px',
  },
  medium: {
    '--borderRadius': 4 + 'px',
    '--fontSize': 18 / 16 + 'rem',
    '--padding': '12px 20px',
  },
  large: {
    '--borderRadius': 8 + 'px',
    '--fontSize': 21 / 16 + 'rem',
    '--padding': '16px 32px',
  },
};

const ButtonClick = ({ size, onClick, text }) => {
  const styles = SIZES[size];

  return (
    <ButtonBase onClick={onClick} style={styles}>
      {text}
    </ButtonBase>
  );
};

const ButtonBase = styled.button`
  font-size: var(--fontSize);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: 2px solid transparent;
  outline-color: var(--red-color);
  background-color: var(--blue-color);
  color: var(--white-color);

  &:focus {
    outline-offset: 4px;
  }

  &:hover {
    background-color: var(--blueLightened-color);
  }
`;

export default ButtonClick;
