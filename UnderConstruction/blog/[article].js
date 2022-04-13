import fs from 'fs';
import matter from 'gray-matter';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Article from '../../components/BlogArticle';
import PageSeo from '../../components/SEO';
import { fadeInUp } from '../../animations/Animations';

const PageWrapper = styled(motion.div)``;

const ArticlePage = ({ article: { data, content } }) => {
  return (
    <>
      <PageSeo meta={data} />
      <PageWrapper
        exit={{ opacity: 0 }}
        initial='initial'
        animate='animate'
        variants={fadeInUp}
      >
        <Article content={content} data={data} />
      </PageWrapper>
    </>
  );
};

export const getStaticPaths = () => {
  const directory = `${process.cwd()}/content/blog`;
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
  const filePath = `${process.cwd()}/content/blog/${article}.md`;
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
export default ArticlePage;
