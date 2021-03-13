import styled from 'styled-components';

const Table = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  grid-gap: 1rem;
  margin: 2rem auto;
  @media (max-width: 768px) {
    margin-top: 15vh;
  }
`;

const Cell = styled.div`
  color: ${(props) => props.theme.textColour};
  text-align: center;
  border: 1px ${(props) => props.theme.blueColour} solid;
  border-radius: 5%;
`;
const Labels = styled.h3`
  font-size: 1rem;
`;
const Values = styled.p``;

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
