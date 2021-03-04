import styled from 'styled-components';
import { PageContainer } from './styles/globalStyles';
import marked from 'marked';

const Article = ({ content, data }) => {
  const html = marked(content);
  return (
    <PageContainer>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </PageContainer>
  );
};

export default Article;
