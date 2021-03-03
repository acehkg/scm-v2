import fs from 'fs';
import matter from 'gray-matter';
import marked from 'marked';
import styled from 'styled-components';
import { PageContainer } from '../../components/styles/globalStyles';

const Article = ({ article: { data, content } }) => {
  const html = marked(content);
  return (
    <PageContainer>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </PageContainer>
  );
};

export const getStaticPaths = () => {
  const directory = `${process.cwd()}/content/maltschool`;
  const filenames = fs.readdirSync(directory);
  const paths = filenames.map((filename) => {
    return {
      params: {
        article: filename.replace('.md', ''),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const article = context.params.article;
  const filePath = `${process.cwd()}/content/maltschool/${article}.md`;
  const fileContent = fs.readFileSync(filePath).toString();
  const { data, content } = matter(fileContent);
  return {
    props: {
      article: {
        data,
        content,
      },
    },
  };
};
export default Article;
