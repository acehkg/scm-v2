import fs from 'fs';
import matter from 'gray-matter';
import styled from 'styled-components';
import ArticleCard from '../components/ArticleCard';
import { motion } from 'framer-motion';
import { stagger } from '../animations/Animations';
import PageSeo from '../components/SEO';

const meta = {
  title: 'Blog',
  description: 'The latest articles from the Simcoe County Malt Blog ',
  image: '/images/logolargered.png',
};

const Container = styled(motion.div)`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 2rem;
  justify-items: center;

  @media (min-width: 390px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const Maltschool = ({ articles }) => {
  return (
    <>
      <PageSeo meta={meta} />
      <Container
        exit={{ opacity: 0 }}
        initial='initial'
        animate='animate'
        variants={stagger}
      >
        {articles.map((article) => {
          return <ArticleCard key={article.id} article={article} />;
        })}
      </Container>
    </>
  );
};
export const getStaticProps = async () => {
  const directory = `${process.cwd()}/content/blog`;
  const filenames = fs.readdirSync(directory);
  const articles = filenames.map((filename) => {
    //read the file from the fs
    const fileContent = fs.readFileSync(`${directory}/${filename}`).toString();
    //pull out frontmatter
    const { data } = matter(fileContent);
    //return name, slug
    const slug = `/blog/${filename.replace('.md', '')}`;
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
