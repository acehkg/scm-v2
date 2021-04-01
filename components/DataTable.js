import styled from 'styled-components';
import { motion } from 'framer-motion';
import { staggerShort, fadeInUp } from '../animations/Animations';

const Table = styled(motion.div)`
  width: 80%;
  display: grid;
  margin: 0 auto;
  padding-top: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  grid-gap: 1rem;
`;

const Cell = styled(motion.div)`
  color: ${(props) => props.theme.textColour};
  text-align: center;
`;
const Labels = styled.p`
  font-size: 1rem;
`;
const Values = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const DataTable = ({ data }) => {
  const cards = Object.entries(data);

  return (
    <Table variants={staggerShort}>
      {cards.map((card) => {
        return (
          <Cell variants={fadeInUp} key={card[0]}>
            <Labels>{card[0]}</Labels>
            <Values>{card[1]}</Values>
          </Cell>
        );
      })}
    </Table>
  );
};

export default DataTable;
