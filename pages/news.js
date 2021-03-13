import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';
import styled from 'styled-components';
import ArticleCard from '../components/ArticleCard';
import { PageContainer } from '../components/styles/globalStyles';

const News = ({ articles }) => {
  return (
    <PageContainer>
      {articles.map((article) => {
        return <ArticleCard key={article.id} article={article} />;
      })}
    </PageContainer>
  );
};
export const getStaticProps = async () => {
  const directory = `${process.cwd()}/content/news`;
  const filenames = fs.readdirSync(directory);
  const articles = filenames.map((filename) => {
    //read the file from the fs
    const fileContent = fs.readFileSync(`${directory}/${filename}`).toString();
    //pull out frontmatter
    const { data } = matter(fileContent);
    //return name, slug
    const slug = `/news/${filename.replace('.md', '')}`;
    const article = {
      ...data,
      slug,
    };
    return article;
  });
  return {
    props: {
      articles,
    },
  };
};
export default News;