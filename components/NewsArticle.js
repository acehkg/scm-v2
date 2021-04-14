import styled from 'styled-components';
import marked from 'marked';
import BackButton from './Interfaces/BackButton';

const Container = styled.div`
  width: 60%;
  margin: 3rem auto;
  color: var(--text-color);

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
const Article = ({ content, data }) => {
  const html = marked(content);
  return (
    <Container>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <ButtonWrapper>
        <BackButton
          size={24}
          color='var(--text-color)'
          href='/news'
          text='BACK'
          fontSize='1rem'
        />{' '}
      </ButtonWrapper>
    </Container>
  );
};

export default Article;
