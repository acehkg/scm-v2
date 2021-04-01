import styled from 'styled-components';
import Link from 'next/link';

const SIZES = {
  small: {
    '--borderRadius': 2 + 'px',
    '--fontSize': 16 / 16 + 'rem',
    '--padding': '4px 12px',
  },
  medium: {
    '--borderRadius': 2 + 'px',
    '--fontSize': 18 / 16 + 'rem',
    '--padding': '12px 20px',
  },
  large: {
    '--borderRadius': 8 + 'px',
    '--fontSize': 21 / 16 + 'rem',
    '--padding': '16px 32px',
  },
};

const ButtonLink = ({ size, href, text }) => {
  const styles = SIZES[size];

  return (
    <Link href={href}>
      <ButtonBase style={styles}>{text}</ButtonBase>
    </Link>
  );
};

const ButtonBase = styled.a`
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

export default ButtonLink;
