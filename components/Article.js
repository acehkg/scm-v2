import styled from 'styled-components';
import marked from 'marked';

const Container = styled.div`
  width: 60%;
  margin: 3rem auto;
  @media (max-width: 768px) {
    margin-top: 15vh;
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
