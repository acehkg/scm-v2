import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/Animations';
import ButtonLink from '../components/Interfaces/ButtonLink';

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 1rem;
  color: var(--text-color);
`;

const ImageContainer = styled.div`
  img {
    border-radius: var(--photo-radius);
    width: 100%;
    height: auto;
  }
`;
const ArticleButton = ({ article }) => {
  return <ButtonLink size='small' href={article.slug} text='READ POST' />;
};
const TitleSection = ({ article }) => {
  return (
    <TextWrapper>
      <Border />
      <Title>{article.title}</Title>
      <Description>{article.description}</Description>
      <ArticleButton article={article} />
    </TextWrapper>
  );
};

const Border = styled.div`
  background: var(--red-color);
  width: 100%;
  height: 3px;
`;
const TextWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  padding: 1rem 0;
  font-size: 1.5rem;
`;

const Description = styled.p`
  padding-bottom: 1rem;
`;

const ArticleCard = ({ article }) => {
  return (
    <Card variants={fadeInUp}>
      <ImageContainer>
        <img src={`/images${article.slug}.jpg`} alt={article.title} />
      </ImageContainer>
      <TitleSection article={article} />
    </Card>
  );
};

export default ArticleCard;
