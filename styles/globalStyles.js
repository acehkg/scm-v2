import styled from 'styled-components';
import Link from 'next/link';

export const UnstyledLink = styled.a`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

export const PageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const theme = {
  redColour: '#4f1111',
  blueColour: '#09344f',
  whiteColour: '#ffffff',
  greyColour: 'rgba(31, 7, 7, 0.1)',
  textColour: '#4f1111',
  buttonColour: '#09344f',
  buttonRadius: '3rem',
};
