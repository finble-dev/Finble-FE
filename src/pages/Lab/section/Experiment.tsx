import TypoGraphy from '../../../components/Typography';
import { Btn10, Btn60 } from '../../../components/Button';
import styled from 'styled-components';
import { TextRow, TextWrap } from '../../../assets/styles/styles';

import { useState, useEffect } from 'react';

interface exp {
  isExp?: boolean;
  setIsExp?: any;
}

const Experiment = ({ isExp, setIsExp }: exp) => {
  const [modalFlag, setModalFlag] = useState(false);
  const [expNum, setExpNum] = useState(0);
  const [btnFlag, setBtnFlag] = useState([true, false, false]);
  const btn = [
    {
      name: '해외',
      text1: '국내 증시 이슈에 대비해 해외에도 자산을 배분해보세요.',
      text2: '먼저 꾸준히 우상향해온 미국 시장에 투자하는 건 어떨까요?',
    },
    {
      name: '채권',
      text1: '채권의 가격은 주식 시장과 반대로 움직이는 경향이 있어요.',
      text2: '작년 같은 하락장에서 수익률을 안정적으로 지켜줘요.',
    },
    {
      name: '금',
      text1: '금은 우크라이나 전쟁처럼 큰 경제 위기가 닥쳤을 때',
      text2: '가격이 오르는 대표적인 안전자산이에요.',
    },
  ];

  const onClickBtn = (idx: number) => {
    let newList = [];
    for (let i = 0; i < 3; i++) {
      if (i == idx) newList.push(true);
      else newList.push(false);
    }
    setBtnFlag(newList);
  };

  useEffect(() => {
    if (isExp) {
      window.scrollTo({ top: 2400, left: 0, behavior: 'smooth' });
    }
  }, [expNum]);

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
          <Box>
            <Row>
              {btn.map((item: any, idx: number) => (
                <div
                  onClick={() => onClickBtn(idx)}
                  style={{ marginRight: '10px' }}
                >
                  {btnFlag[idx] === true ? (
                    <Btn60 text={item.name} type={'outline_able'} />
                  ) : (
                    <Btn60 text={item.name} type={'outline_disable'} />
                  )}
                </div>
              ))}
            </Row>

            {btnFlag.map((item: any, idx: number) =>
              item ? (
                <>
                  <TypoGraphy
                    text={btn[idx].text1}
                    color="var(--type-gray-2)"
                    size="b3"
                  />
                  <TypoGraphy
                    text={btn[idx].text2}
                    color="var(--type-gray-2)"
                    size="b3"
                  />
                </>
              ) : (
                <></>
              )
            )}
          </Box>
          <Box></Box>
        </Row>

        <ButtonContainer>
          <div
            onClick={() => {
              setIsExp(true);
              setExpNum(expNum + 1);
            }}
          >
            {isExp ? (
              <Btn10 text={'실험 다시 해보기'} type="check" />
            ) : (
              <Btn10 text={'실험 결과 확인하기'} type="check" />
            )}
          </div>
        </ButtonContainer>
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

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 21px;
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
  padding: 24px 30px;
`;

const BtnBox = styled.div`
  display: flex;
  align-items: center;
  width: 580px;
  height: 48px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  margin-top: 100px;
`;