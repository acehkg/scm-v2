import styled from 'styled-components';
import Link from 'next/link';

export const UnstyledLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    cursor: pointer;
  }
`;

export const PageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;
