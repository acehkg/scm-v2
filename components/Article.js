import styled from 'styled-components';
import marked from 'marked';

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

const Article = ({ content, data }) => {
  const html = marked(content);
  return (
    <Container>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  );
};

export default Article;
