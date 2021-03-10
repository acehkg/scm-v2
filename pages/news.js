import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';
import styled from 'styled-components';
import { PageContainer } from '../components/styles/globalStyles';

const ArticleLink = styled.div`
  display: flex;
  margin-top: 1rem;
  h3 {
    margin-right: 2rem;
  }
  &:hover {
    cursor: pointer;
  }
`;
const News = ({ articles }) => {
  return (
    <PageContainer>
      {articles.map((article) => {
        return (
          <Link key={article.id} href={article.slug}>
            <div>
              <ArticleLink>
                <h3>{article.title}</h3>
                <h3>Published on: {article.date}</h3>
              </ArticleLink>
              <p>{article.description}</p>
            </div>
          </Link>
        );
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
