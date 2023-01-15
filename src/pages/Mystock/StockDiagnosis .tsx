import styled from 'styled-components';
import Section1 from './section/Section1';
import Section2 from './section/Section2';

const StockDiagnosis = () => {
  return (
    <Container>
      <Section1 />
      <Section2 />
    </Container>
  );
};

export default StockDiagnosis;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
