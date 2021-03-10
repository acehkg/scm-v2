import styled from 'styled-components';

const Table = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: 2rem;
  margin: 2rem auto;
  @media (max-width: 768px) {
    margin-top: 15vh;
  }
`;

const Cell = styled.div`
  color: #4f1111;
  text-align: center;
  border: 1px #09344f solid;
  border-radius: 5%;
`;
const Labels = styled.h3``;
const Values = styled.p``;

const DataTable = ({ formattedData }) => {
  const cards = Object.entries(formattedData);

  return (
    <Table>
      {cards.map((card) => {
        return (
          <Cell>
            <Labels>{card[0]}</Labels>
            <Values>{card[1]}</Values>
          </Cell>
        );
      })}
    </Table>
  );
};

export default DataTable;
