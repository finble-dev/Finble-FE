import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
//components
import TypoGraphy from '../../../components/Typography';
import { Btn10, Btn60 } from '../../../components/Button';
import { AddedItem } from '../components/AddedItem';
import { ETFItem } from '../components/ETFItem';
// assets
import { TextRow, TextWrap, Img } from '../../../assets/styles/styles';
import { ETFList } from '../../../assets/ETFList';
import { myStock } from '../../../assets/myStock';
import modalImg from '../../../assets/img/lab/캐릭터.png';
// interface
import { ETF } from '../../../interface/interface';
import { Link } from 'react-router-dom';

interface exp {
  isExp?: boolean;
  setIsExp?: any;
}

const Experiment = ({ isExp, setIsExp }: exp) => {
  const [toggleFlag, setToggleFlag] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [expNum, setExpNum] = useState(0);
  // 해외, 채권, 금 카테고리 선택 여부
  const [cateFlag, setCateFlag] = useState([true, false, false]);
  const [ETFFlag, setETFFlag] = useState([
    [false, false],
    [false, false],
    [false],
  ]);
  const changeFlag = (listNum: number, itemNum: number) => {
    let newList = [];

    for (let i = 0; i < ETFFlag.length; i++) {
      let newItem = [];
      for (let j = 0; j < ETFFlag[i].length; j++) {
        if (i === listNum && j === itemNum) {
          newItem.push(!ETFFlag[i][j]);
        } else {
          newItem.push(ETFFlag[i][j]);
        }
      }
      newList.push(newItem);
    }

    setETFFlag(newList);
  };

  const [ETFValue, setETFValue] = useState([[0, 0], [0, 0], [0]]);

  const changeETFValue = (listNum: number, itemNum: number, e: any) => {
    let newList = [];

    for (let i = 0; i < ETFValue.length; i++) {
      let newItem = [];
      for (let j = 0; j < ETFValue[i].length; j++) {
        if (i === listNum && j === itemNum) {
          newItem.push(e.target.value);
        } else {
          newItem.push(ETFValue[i][j]);
        }
      }
      newList.push(newItem);
    }

    setETFValue(newList);
  };

  const [myStk, setMyStk] = useState([{ name: '카카오', per: 0 }]) as any;
  useEffect(() => {
    if (myStock.length === 0) setModalOpen(true);
    else setMyStk(myStock);
  }, []);
  const changeMine = (num: number, event: any) => {
    let newStk = [] as any;

    myStk.map((item: { name: string; per: number }, idx: number) =>
      idx === num
        ? newStk.push({ name: item.name, per: event.target.value })
        : newStk.push({ name: item.name, per: item.per })
    );

    setMyStk(newStk);
  };

  const [totalPer, setTotal] = useState(0);

  useEffect(() => {
    let newTotal = 0 as number;
    ETFValue.map((items: any, listNum: number) =>
      items.map(
        (item: any, itemNum: number) =>
          (newTotal += Number(ETFValue[listNum][itemNum]))
      )
    );
    myStk.map((item: any, idx: number) => (newTotal += Number(item.per)));
    setTotal(newTotal);
  }, [ETFValue, myStk]);

  const onClickBtn = (idx: number) => {
    let newList = [];
    for (let i = 0; i < 3; i++) {
      if (i == idx) newList.push(true);
      else newList.push(false);
    }
    setCateFlag(newList);
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
        <TextWrap lineHeight={30} padding="25px 0">
          <TypoGraphy
            text="민성님의 편안한 투자를 위해 대표적인 ETF들을 선별해봤어요."
            color="var(--type-gray-1)"
            size="b1"
          />
          <TypoGraphy
            text="이제 여러 자산을 내 포트폴리오에 넣었다 뺐다 하며 비중을 조절해보세요."
            color="var(--type-gray-1)"
            size="b1"
          />
        </TextWrap>

        <div
          onClick={() => {
            setToggleFlag(!toggleFlag);
          }}
        >
          <TypoGraphy
            text="> 어디서부터 시작해야 할지 모르겠다면?"
            color="var(--main-blue)"
            size="b1"
            style={{ cursor: 'pointer' }}
          />
        </div>

        {toggleFlag ? (
          <TextWrap lineHeight={30} padding="25px 0 0 0">
            <TypoGraphy
              text="가장 유명한 전략인 '60/40 전략'을 따라가보는 건 어떨까요? "
              color="var(--type-gray-2)"
              size="b1"
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
          </TextWrap>
        ) : (
          <></>
        )}

        <Row
          style={{ marginTop: '44px' }}
          blurFlag={myStock.length === 0 ? true : false}
        >
          <Box>
            <Row>
              {btn.map((item: any, idx: number) => (
                <div
                  onClick={() => onClickBtn(idx)}
                  style={{ marginRight: '10px' }}
                  key={idx}
                >
                  {cateFlag[idx] === true ? (
                    <Btn60 text={item.name} type={'outline_able'} />
                  ) : (
                    <Btn60 text={item.name} type={'outline_disable'} />
                  )}
                </div>
              ))}
            </Row>

            {cateFlag.map((item: any, idx: number) =>
              item ? (
                <div key={idx}>
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
                </div>
              ) : (
                <div key={idx}></div>
              )
            )}
            {ETFList.map((itemList: Array<ETF>, listNum: number) =>
              cateFlag[listNum] ? (
                itemList.map((item: ETF, itemNum: number) => (
                  <ETFItem
                    item={item}
                    changeFlag={changeFlag}
                    ETFFlag={ETFFlag}
                    listNum={listNum}
                    itemNum={itemNum}
                    key={itemNum}
                  />
                ))
              ) : (
                <div key={listNum}></div>
              )
            )}
          </Box>
          <Box>
            <TypoGraphy text="보유 종목" size="small" />
            <SubBox>
              <RetainBox>
                <Row style={{ justifyContent: 'space-between' }}>
                  <TypoGraphy
                    text="종목 이름"
                    color="var(--type-gray-2)"
                    size="b3"
                  />
                  <TypoGraphy
                    text="비중"
                    color="var(--type-gray-2)"
                    size="b3"
                  />
                </Row>
                {myStk.map(
                  (item: { name: string; per: number }, idx: number) => (
                    <Row
                      style={{
                        marginBottom: '32px',
                        justifyContent: 'space-between',
                      }}
                      key={idx}
                    >
                      <TypoGraphy text={item.name} size="b2" />
                      <InputBox>
                        <InputArea
                          value={myStk[idx].per}
                          onChange={(e) => {
                            changeMine(idx, e);
                          }}
                        />
                        <TypoGraphy
                          text="%"
                          size="input"
                          color="var(--type-gray-3)"
                        />
                      </InputBox>
                    </Row>
                  )
                )}
              </RetainBox>
              <Line />
              <TextWrap padding="0 0 20px 0">
                <TypoGraphy text="추가 종목" size="small" />
              </TextWrap>
              {ETFList.map((items: any, listNum: number) =>
                items.map((item: any, itemNum: number) =>
                  ETFFlag[listNum][itemNum] ? (
                    <AddedItem
                      listNum={listNum}
                      itemNum={itemNum}
                      ETFValue={ETFValue}
                      changeETFValue={changeETFValue}
                      changeFlag={changeFlag}
                      key={itemNum}
                    />
                  ) : (
                    <div key={listNum}></div>
                  )
                )
              )}
            </SubBox>
            <Footer>
              {totalPer === 100 ? (
                <TypoGraphy
                  text="합이 100%가 되어야 합니다."
                  size="b2"
                  color="var(--type-gray-2)"
                  style={{ marginRight: '11px' }}
                />
              ) : (
                <TypoGraphy
                  text="합이 100%가 되어야 합니다."
                  size="b2"
                  color="red"
                  style={{ marginRight: '11px' }}
                />
              )}

              <InputBox>
                <InputArea value={totalPer} />
                <TypoGraphy text="%" size="input" color="var(--type-gray-3)" />
              </InputBox>
            </Footer>
          </Box>
        </Row>

        <ButtonContainer>
          <div
            onClick={() => {
              if (totalPer === 100) {
                setIsExp(true);
                setExpNum(expNum + 1);
              }
            }}
          >
            {isExp ? (
              <Btn10 text={'실험 다시 해보기'} type="check" />
            ) : (
              <Btn10 text={'실험 결과 확인하기'} type="check" />
            )}
          </div>
        </ButtonContainer>
        <ReactModal
          ariaHideApp={false}
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          style={{
            overlay: {
              position: 'absolute',
              top: '2050px',
              backdropFilter: 'blur(10px)',
            },
            content: {
              margin: 'auto',
              width: '815px',
              height: '495px',
              background: 'var(--type-white)',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              borderRadius: '20px',
            },
          }}
        >
          <ModalOpen>
            <TextRow>
              <TypoGraphy
                text="보유 중인 주식을 입력 후에 테스트해볼 수 있어요!"
                size="t2"
                style={{ marginTop: '54px', marginBottom: '40px' }}
              />
            </TextRow>
            <img src={modalImg} style={{ marginBottom: '50px' }} />
            <Link to="/stock">
              <Btn60 type="able" text="내 주식 입력하러 가기>" />
            </Link>
          </ModalOpen>
        </ReactModal>
      </Column>
    </Container>
  );
};
export default Experiment;

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #dfe9ff;
`;

const Row = styled.div<{ blurFlag?: boolean }>`
  display: flex;
  flex-direction: row;
  margin-bottom: 21px;
  filter: ${(props) => (props.blurFlag === true ? 'blur(10px)' : 'blur(0px)')};
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  height: 70px;
  align-items: center;
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

const SubBox = styled.div`
  width: 562px;
  height: 610px;

  overflow: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #c2d4fe;
    border-radius: 10px;
    height: 367px;
  }
`;

const RetainBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  margin-top: 100px;
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #dedede;
  margin-bottom: 21px;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 89px;
  height: 38px;
  background: #ffffff;
  border: 0.910972px solid #dedede;
  border-radius: 5.46583px;
  padding: 15px 10px;
  font-size: var(--fs-input);
  font-weight: var(--fw-input);
`;

const InputArea = styled.input`
  width: 100%;
  font-size: var(--fs-input);
  font-weight: var(--fw-input);
  border: none;
  outline: none;

  &::placeholder {
    color: var(--type-gray-5);
  }
`;

// modal
const ModalOpen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  backdrop-filter: blur(10px);
`;
const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 100%;
  // padding: 0 0 40px 0;
`;
