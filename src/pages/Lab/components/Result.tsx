import TypoGraphy from '../../../components/Typography';
import styled from 'styled-components';
import { TextRow, TextWrap, Row } from '../../../assets/styles/styles';
import { useState } from 'react';

const Experiment = () => {
  const [modalFlag, setModalFlag] = useState(false);

  return (
    <Container>
      <Column>
        <TypoGraphy text="투자 실험 결과" size="h1" />
      </Column>
    </Container>
  );
};
export default Experiment;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 120px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 1200px;
  margin-top: 120px;
`;
