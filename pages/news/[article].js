import fs from 'fs';
import matter from 'gray-matter';
import Article from '../../components/NewsArticle';
import PageSeo from '../../components/SEO';

const ArticleNews = ({ article: { data, content } }) => {
  return (
    <>
      <PageSeo meta={data} />
      <Article content={content} data={data} />
    </>
  );
};

export const getStaticPaths = () => {
  const directory = `${process.cwd()}/content/news`;
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
  const filePath = `${process.cwd()}/content/news/${article}.md`;
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
export default ArticleNews;
