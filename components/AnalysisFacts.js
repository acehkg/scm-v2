import styled from 'styled-components';

const AnalysisFacts = ({ analysis }) => {
  return (
    <TableWrapper>
      <PerformanceFacts>
        <FactsHeader>
          <FactsTitle>Quality Analysis</FactsTitle>
          <p>Montana State University</p>
          <p>Malt Quality Lab</p>
        </FactsHeader>
        <FactsTable>
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan='3'>
                <p>Moisture {analysis.moisture} %</p>
              </th>
            </tr>
            <tr>
              <th colSpan='3'>
                <p>Color {analysis.color} &deg;SRM</p>
              </th>
            </tr>
            <tr>
              <th colSpan='3'>
                <p>Friability {analysis.friability} %</p>
              </th>
            </tr>
            <tr>
              <th colSpan='3'>
                <p>Plumps {analysis.plumps} %</p>
              </th>
            </tr>
            <tr>
              <th colSpan='3'>
                <p>Fine Extract {analysis.fine} %</p>
              </th>
            </tr>
            <tr>
              <th colSpan='3'>
                <p>Coarse Extract {analysis.coarse} %</p>
              </th>
            </tr>
            <tr>
              <th colSpan='3'>
                <p>F/C Difference {analysis.fcDiff}</p>
              </th>
            </tr>
            <tr>
              <th colSpan='3'>
                <p>Total Protein {analysis.totalProtein} %</p>
              </th>
            </tr>
            <tr>
              <th colSpan='3'>
                <p>Soluble Protein {analysis.solubleProtein} %</p>
              </th>
            </tr>
            <tr>
              <th colSpan='3'>
                <p>S/T Ratio {analysis.stRatio}</p>
              </th>
            </tr>
            <tr>
              <th colSpan='3'>
                <p>FAN {analysis.fan} mg/L</p>
              </th>
            </tr>
            <tr>
              <th colSpan='3'>
                <p>Diastatic Power {analysis.diastaticPower} &deg;L</p>
              </th>
            </tr>
            <tr>
              <th colSpan='3'>
                <p>Alpha Amylase {analysis.alphaAmaylase} D.U.</p>
              </th>
            </tr>
            <tr>
              <th colSpan='3'>
                <p>Beta Glucan {analysis.betaGlucan} mg/L</p>
              </th>
            </tr>
            <tr>
              <th colSpan='3'>
                <p>Filtration Time {analysis.filtration}</p>
              </th>
            </tr>
            <tr>
              <th colSpan='3'>
                <p>Turbidity {analysis.turbidity} NTU</p>
              </th>
            </tr>
            <ThickEnd>
              <th colSpan='3'>
                <p>pH {analysis.ph}</p>
              </th>
              <td></td>
            </ThickEnd>
          </tbody>
        </FactsTable>
      </PerformanceFacts>
    </TableWrapper>
  );
};
export default AnalysisFacts;

const TableWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PerformanceFacts = styled.section`
  border: 1px solid black;
  margin: 2.5rem 1rem;
  float: left;
  width: 280px;
  padding: 0.5rem;

  table {
    border-collapse: collapse;
  }
`;

const FactsHeader = styled.header`
  border-bottom: 10px solid black;
  padding: 0 0 0.25rem 0;
  margin: 0 0 0.5rem 0;
  text-align: left;
  p {
    margin: 0;
  }
`;

const FactsTitle = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  margin: 0 0 0.25rem 0;
`;

const FactsTable = styled.table`
  width: 100%;
  thead tr {
    th,
    td {
      border: 0;
    }
  }
  th,
  td {
    font-weight: normal;
    text-align: left;
    padding: 0.25rem 0;
    border-top: 1px solid black;
    white-space: nowrap;
  }
  td {
    &:last-child {
      text-align: right;
    }
  }
`;

const ThickEnd = styled.tr`
  border-bottom: 10px solid black;
`;
