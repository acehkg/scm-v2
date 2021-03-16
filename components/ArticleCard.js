import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const Card = styled.div`
  margin: 2rem;
  width: 40%;
  padding: 1rem;
  min-height: 30rem;
  position: relative;
  background: ${(props) => props.theme.greyColour};
  color: ${(props) => props.theme.textColour};
  @media (max-width: 834px) {
    width: 70%;
  }

  @media (max-width: 420px) {
    min-height: 26rem;
  }
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
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  //margin: 1rem auto;
  height: 2.5rem;
  font-size: 1rem;
  line-height: 2.6rem;
  text-align: center;
  color: ${(props) => props.theme.whiteColour};
  background-color: ${(props) => props.theme.redColour};

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
