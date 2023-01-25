import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
//components
import TypoGraphy from '../../../components/Typography';
import { Btn10, Btn60 } from '../../../components/Button';
import { AddedItem } from '../components/AddedItem';
import { ETFItem } from '../components/ETFItem';
// assets
import { TextRow, TextWrap } from '../../../assets/styles/styles';
import { ETFList } from '../../../assets/ETFList';
import modalImg from '../../../assets/img/lab/캐릭터.png';
// interface
import { ETF } from '../../../interface/interface';
import { Link } from 'react-router-dom';

import { tokenState, firstNameState } from '../../../store/slice/userSlice';
import { useSelector } from 'react-redux';
import { SERVER } from '../../../network/config';

interface exp {
  isExp?: boolean;
  setIsExp?: any;
}

const Experiment = ({ isExp, setIsExp }: exp) => {
  const [toggleFlag, setToggleFlag] = useState(false);
  const [expNum, setExpNum] = useState(0);
  // 해외, 채권, 금 카테고리 선택 여부
  const [cateFlag, setCateFlag] = useState([true, false, false]);
  const [ETFFlag, setETFFlag] = useState([
    [
      { symbol: 'SPY', flag: false },
      { symbol: 'QQQ', flag: false },
    ],
    [
      { symbol: 'IEF', flag: false },
      { symbol: 'TLT', flag: false },
    ],
    [{ symbol: 'GLD', flag: false }],
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const name = useSelector(firstNameState);
  const token = useSelector(tokenState);
  const [retainStock, setRetainStock] = useState([]);
  const [addedStock, setAddedStock] = useState([]);
  const [totalPer, setTotal] = useState(0);

  const setFlag = (stockList: any) => {
    let newList = [];

    for (let i = 0; i < ETFFlag.length; i++) {
      let newItem = [];
      for (let j = 0; j < ETFFlag[i].length; j++) {
        if (
          stockList.findIndex((item: any) => item === ETFFlag[i][j].symbol) !==
          -1
        ) {
          newItem.push({
            symbol: ETFFlag[i][j].symbol,
            flag: true,
          });
        } else {
          newItem.push({
            symbol: ETFFlag[i][j].symbol,
            flag: false,
          });
        }
      }
      newList.push(newItem);
    }
    setETFFlag(newList);
  };

  // 첫 렌더링 시 유저 포트폴리오 가져오고 modal flag 설정
  useEffect(() => {
    fetch(`${SERVER}/test-portfolio/`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((res) => {
        // console.log(res);
        // 유저 보유 종목 & 추가 종목 불러오기
        setRetainStock(res.data_retain);
        setAddedStock(res.data_add);
        let symbolList = [];

        // 모달창 유무 설정
        if (res.data_add === ([] as any)) setModalOpen(true);

        // 새로운 total 비율 설정
        let newTotal = 0 as number;
        for (let i = 0; i < res.data_add.length; i++) {
          symbolList.push(res.data_add[i].stock_detail.symbol);
          newTotal += Number(res.data_add[i].portfolio.ratio);
        }
        for (let i = 0; i < res.data_retain.length; i++) {
          symbolList.push(res.data_retain[i].stock_detail.symbol);
          newTotal += Number(res.data_retain[i].portfolio.ratio);
        }
        setTotal(newTotal);
        setFlag(symbolList);
      })
      .catch((err) => console.log(err));
  });

  const changeMine = (id: number, event: any) => {
    let data = JSON.stringify({ id: id, ratio: event.target.value });
    if (event.target.value === '') {
      data = JSON.stringify({ id: id, ratio: 0 });
    }
    fetch(`${SERVER}/test-portfolio/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: data,
    })
      .then((response) => response.json())
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => console.log(err));
  };

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

  const getResult = () => {
    console.log('실험중 ... ');

    fetch(`${SERVER}/test-portfolio/analysis/`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Column>
        <TypoGraphy text="투자 실험하기" size="h1" />
        <TextWrap lineHeight={30} padding="25px 0">
          <TypoGraphy
            text={`${name}님의 편안한 투자를 위해 대표적인 ETF들을 선별해봤어요.`}
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
          blurFlag={retainStock.length === 0 ? true : false}
        >
          {/* 선택한 ETF 버튼따라 list 보여줌 */}
          <Box>
            <Row>
              {btn.map((item: any, idx: number) => (
                <div
                  onClick={() => onClickBtn(idx)}
                  style={{ marginRight: '10px' }}
                  key={`btn_${idx}`}
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
                <div key={`cateFlag_0_${idx}`}>
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
                <div key={`cateFlag_1_${idx}`}></div>
              )
            )}
            {ETFList.map((itemList: Array<ETF>, listNum: number) =>
              cateFlag[listNum] ? (
                itemList.map((item: ETF, itemNum: number) => (
                  <ETFItem
                    item={item}
                    ETFFlag={ETFFlag}
                    listNum={listNum}
                    itemNum={itemNum}
                    key={`ETFLIST_${listNum}_${itemNum}`}
                  />
                ))
              ) : (
                <div key={`ETFLIST_${listNum}`}></div>
              )
            )}
          </Box>

          {/* 보유종목, 추가종목 박스 */}
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
                <>
                  {retainStock !== undefined ? (
                    <>
                      {retainStock.map((item: any, idx: number) => (
                        <Row
                          style={{
                            marginBottom: '32px',
                            justifyContent: 'space-between',
                          }}
                          key={`myStk_${idx}`}
                        >
                          <TypoGraphy text={item.stock_detail.name} size="b2" />
                          <InputBox>
                            <InputArea
                              value={item.portfolio.ratio}
                              onChange={(e) => {
                                changeMine(item.portfolio.id, e);
                              }}
                            />
                            <TypoGraphy
                              text="%"
                              size="input"
                              color="var(--type-gray-3)"
                            />
                          </InputBox>
                        </Row>
                      ))}
                    </>
                  ) : (
                    <></>
                  )}
                </>
              </RetainBox>
              <Line />
              <TextWrap padding="0 0 20px 0">
                <TypoGraphy text="추가 종목" size="small" />
              </TextWrap>
              {addedStock.map((item: any, idx: number) => (
                <AddedItem
                  item={item}
                  changeMine={changeMine}
                  // changeFlag={changeFlag}
                  key={`ETFLIST2_${idx}`}
                />
              ))}
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
                getResult();
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
