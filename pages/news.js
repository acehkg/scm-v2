import fs from 'fs';
import matter from 'gray-matter';
import styled from 'styled-components';
import ArticleCard from '../components/ArticleCard';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;

  @media (max-width: 834px) {
    width: 90%;
    flex-direction: column;
  }
`;

const News = ({ articles }) => {
  return (
    <Container exit={{ opacity: 0 }}>
      {articles.map((article) => {
        return <ArticleCard key={article.id} article={article} />;
      })}
    </Container>
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
