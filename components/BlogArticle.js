import styled from 'styled-components';
import marked from 'marked';
import BackButton from './Interfaces/BackButton';

const Container = styled.div`
  width: 80%;
  margin: 3rem auto;
  color: var(--text-color);

  @media (min-width: 1024px) {
    width: 60%;
  }

  h2 {
    font-size: 1.5rem;
    padding: 1rem 0;
  }

  p {
    line-height: 1.8;
  }

  a {
    color: var(--blue-color);
    transition: transform 0.2s ease;

    &:hover {
      color: var(--blueLightened-color);
      transform: scale(1.1);
    }
  }
`;
const ButtonWrapper = styled.div`
  padding-top: 1rem;
`;
const Article = ({ content }) => {
  const html = marked(content);
  return (
    <Container>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <ButtonWrapper>
        <BackButton
          size={24}
          color='var(--text-color)'
          href='/blog'
          text='BACK'
          fontSize='1rem'
        />{' '}
      </ButtonWrapper>
    </Container>
  );
};

export default Article;
