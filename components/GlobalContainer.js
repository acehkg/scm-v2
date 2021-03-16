import styled from 'styled-components';
import useNav from '../hooks/useNav';

const GlobalContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
  font-family: 'Poppins', sans-serif;
  background: #fff;
  overflow-y: ${({ open }) => (open ? 'hidden' : 'visible')};
  height: ${({ open }) => (open ? '100vh' : 'unset')};
`;

const Container = ({ children }) => {
  const { open } = useNav();

  return <GlobalContainer open={open}>{children}</GlobalContainer>;
};

export default Container;
