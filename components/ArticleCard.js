import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/Animations';

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  padding: 1rem;
  min-height: 30rem;
  margin-bottom: 2rem;
  background: var(--light-grey);
  color: var(--text-color);
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

const ArticleLink = styled(motion.a)`
  display: block;
  width: 60%;
  height: 2.5rem;
  font-size: 1rem;
  line-height: 2.6rem;
  text-align: center;
  color: var(--white-color);
  background-color: var(--blue-color);

  &:hover {
    cursor: pointer;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const ArticleCard = ({ article }) => {
  return (
    <Card variants={fadeInUp}>
      <ImageContainer>
        <Image
          src={`/images${article.slug}.jpg`}
          alt={article.title}
          layout='responsive'
          width={1200}
          height={675}
        />
      </ImageContainer>
      <TextBlock>
        <Title>{article.title}</Title>
        <Description>{article.description}</Description>
      </TextBlock>

      <Link href={article.slug}>
        <ArticleLink whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          READ ARTICLE
        </ArticleLink>
      </Link>
    </Card>
  );
};

export default ArticleCard;
