import fs from 'fs';
import matter from 'gray-matter';
import styled from 'styled-components';
import ArticleCard from '../components/ArticleCard';

const Container = styled.div`
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

const Maltschool = ({ articles }) => {
  return (
    <Container>
      {articles.map((article) => {
        return <ArticleCard key={article.id} article={article} />;
      })}
    </Container>
  );
};
export const getStaticProps = async () => {
  const directory = `${process.cwd()}/content/maltschool`;
  const filenames = fs.readdirSync(directory);
  const articles = filenames.map((filename) => {
    //read the file from the fs
    const fileContent = fs.readFileSync(`${directory}/${filename}`).toString();
    //pull out frontmatter
    const { data } = matter(fileContent);
    //return name, slug
    const slug = `/maltschool/${filename.replace('.md', '')}`;
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
export default Maltschool;
