import styled from 'styled-components';

const SIZES = {
  small: {
    '--fontSize': 16 / 16 + 'rem',
    '--padding': 0.75 + 'rem',
  },
  medium: {
    '--fontSize': 24 / 16 + 'rem',
    '--padding': 1 + 'rem',
    '--display': 'grid',
    '--columns': '1fr 1fr',
  },

  large: {
    '--fontSize': 24 / 16 + 'rem',
    '--padding': 1 + 'rem',
    '--display': 'grid',
    '--columns': '1fr 1fr 1fr',
  },
};

const CreatePanel = ({ analysis, dataSize, size }) => {
  const PANELS = {
    verySmall: {
      Moisture: analysis.moisture,
      Color: analysis.color,
      Friability: analysis.friability,
      'Coarse Extract': analysis.coarse,
      'Diastatic Power': analysis.diastaticPower,
      pH: analysis.ph,
    },
    small: {
      Moisture: analysis.moisture,
      Color: analysis.color,
      Friability: analysis.friability,
      'Coarse Extract': analysis.coarse,
      FAN: analysis.fan,
      'Diastatic Power': analysis.diastaticPower,
      Filtration: analysis.filtration,
      pH: analysis.ph,
    },

    medium: {
      Moisture: analysis.moisture,
      Color: analysis.color,
      Friability: analysis.friability,
      'Fine Extract': analysis.fine,
      'Coarse Extract': analysis.coarse,
      'Fine/Coarse Difference': analysis.fcDiff,
      'Total Protein': analysis.totalProtein,
      'Soluble Protein': analysis.solubleProtein,
      'S/T Ratio': analysis.stRatio,
      FAN: analysis.fan,
      'Diastatic Power': analysis.diastaticPower,
      'Alpha Amaylase': analysis.alphaAmalyase,
      'Beta Glucan': analysis.betaGlucan,
      Filtration: analysis.filtration,
      Turbidity: analysis.turbidity,
      pH: analysis.ph,
    },
    large: {
      Moisture: analysis.moisture,
      Color: analysis.color,
      Friability: analysis.friability,
      'Fine Extract': analysis.fine,
      'Coarse Extract': analysis.coarse,
      'Fine/Coarse Difference': analysis.fcDiff,
      'Total Protein': analysis.totalProtein,
      'Soluble Protein': analysis.solubleProtein,
      'S/T Ratio': analysis.stRatio,
      FAN: analysis.fan,
      'Diastatic Power': analysis.diastaticPower,
      'Alpha Amaylase': analysis.alphaAmalyase,
      'Beta Glucan': analysis.betaGlucan,
      Filtration: analysis.filtration,
      Turbidity: analysis.turbidity,
      pH: analysis.ph,
    },
  };
  const styles = SIZES[size];
  const panel = PANELS[dataSize];
  const cards = Object.entries(panel);
  return (
    <Wrapper style={styles}>
      {cards.map((card) => {
        return (
          <ValueWrapper style={styles} key={card[0]}>
            <Values style={styles}>{card[0]}</Values>
            <Values style={styles}>{card[1]}</Values>
          </ValueWrapper>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: var(--display);
  grid-template-columns: var(--columns);
`;
const ValueWrapper = styled.div`
  padding: var(--padding);
`;
const Values = styled.p`
  font-size: var(--fontSize);
`;
export default CreatePanel;
