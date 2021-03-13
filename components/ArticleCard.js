import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const Card = styled.div`
  width: 40%;
  padding: 1rem;
  height: 25rem;
  position: relative;
  background: rgba(31, 7, 7, 0.1);
`;

const TextBlock = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const Title = styled.h2`
  margin: 0;
`;

const Description = styled.p``;

const ArticleLink = styled.a`
  display: block;
  width: 60%;
  margin: 1rem auto;
  height: 2.5rem;
  font-size: 1rem;
  line-height: 2.6rem;
  text-align: center;
  color: #fff;
  background-color: #4f1111;

  &:hover {
    cursor: pointer;
  }
`;

const ArticleCard = ({ article }) => {
  return (
    <Card>
      <Image
        src={`/images${article.slug}.jpg`}
        alt={article.title}
        layout='responsive'
        width={1200}
        height={675}
      />
      <TextBlock>
        <Title>{article.title}</Title>
        <Description>{article.description}</Description>
      </TextBlock>

      <Link href={article.slug}>
        <ArticleLink>READ ARTICLE</ArticleLink>
      </Link>
    </Card>
  );
};

export default ArticleCard;
