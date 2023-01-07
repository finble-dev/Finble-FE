import TypoGraphy from '../../../components/Typography';
import { Btn10 } from '../../../components/Button';
import styled from 'styled-components';
import { TextRow, TextWrap, Row } from '../../../assets/styles/styles';

import { useState } from 'react';

const Experiment = () => {
  const [modalFlag, setModalFlag] = useState(false);

  return (
    <Container>
      <Column>
        <TypoGraphy text="투자 실험하기" size="h1" />
        <TypoGraphy
          text="민성님의 편안한 투자를 위해 대표적인 ETF들을 선별해봤어요."
          color="var(--type-gray-2)"
          size="b1"
          style={{ marginTop: '13px' }}
        />
        <TypoGraphy
          text="이제 여러 자산을 내 포트폴리오에 넣었다 뺐다 하며 비중을 조절해보세요."
          color="var(--type-gray-2)"
          size="b1"
        />
        <div
          onClick={() => {
            setModalFlag(!modalFlag);
          }}
        >
          <TypoGraphy
            text="> 어디서부터 시작해야 할지 모르겠다면?"
            color="var(--main-blue)"
            size="b1"
            style={{ marginTop: '28px', cursor: 'pointer' }}
          />
        </div>

        {modalFlag ? (
          <>
            <TypoGraphy
              text="가장 유명한 전략인 '60/40 전략'을 따라가보는 건 어떨까요? "
              color="var(--type-gray-2)"
              size="b1"
              style={{ marginTop: '37px' }}
            />
            <TypoGraphy
              text="'60/40 전략'은 주식과 채권의 비율을 60:40으로 투자하는 전략이에요."
              color="var(--type-gray-2)"
              size="b1"
            />
            <TypoGraphy
              text="보유 종목과 채권 ETF를 60:40의 비중으로 설정하는 것부터 시작해보세요."
              color="var(--type-gray-2)"
              size="b1"
            />
          </>
        ) : (
          <></>
        )}

        <Row style={{ marginTop: '45px' }}>
          <Box></Box>
          <Box></Box>
        </Row>

        <Btn10 text={'실험 결과 확인하기'} type={'check'} />
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
  background: #dfe9ff;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 1200px;
  margin-top: 120px;
  margin-bottom: 120px;
`;

const Box = styled.div`
  width: 591px;
  height: 730px;

  background: #ffffff;
  border-radius: 10px;
  margin-right: 22px;
`;
