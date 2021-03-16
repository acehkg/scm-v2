import styled from 'styled-components';

const Table = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  grid-gap: 1rem;
  margin: 2rem auto;
`;

const Cell = styled.div`
  color: ${(props) => props.theme.textColour};
  text-align: center;
`;
const Labels = styled.h3`
  font-size: 1.25rem;
`;
const Values = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const DataTable = ({ data }) => {
  const cards = Object.entries(data);

  return (
    <Table>
      {cards.map((card) => {
        return (
          <Cell key={card[0]}>
            <Labels>{card[0]}</Labels>
            <Values>{card[1]}</Values>
          </Cell>
        );
      })}
    </Table>
  );
};

export default DataTable;
