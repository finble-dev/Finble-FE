import ReactModal from 'react-modal';
import styled from 'styled-components';
import { Container, Img, TextRow, TextWrap } from '../../assets/styles/styles';
import { Btn10 } from '../../components/Button';
import TypoGraphy from '../../components/Typography';
import NoneLogin from '../Login/NoneLogin';
import closeIcon from '../../assets/icons/close.svg';
import { useEffect, useState } from 'react';
import Modal from './components/Modal/Modal1';
import { Link } from 'react-router-dom';

import { nameState, firstNameState } from '../../store/slice/userSlice';
import { tokenState } from '../../store/slice/tokenSlice';
import { useSelector } from 'react-redux';
import StockBox from './components/StockBox';
import { getPortfolio } from '../../network/api';
import Header from '../../components/Header';

const MyStock = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([] as any);
  const [totalGain, setTotalGain] = useState(0);
  const [totalRate, setTotalRate] = useState(0);
  const token = useSelector(tokenState);
  const name = useSelector(nameState); // 성 + 이름
  const firstName = useSelector(firstNameState); // 이름
  let total = 0;

  const getPortfolioAPI = async () => {
    if (name != '') {
      await getPortfolio(token, setData, setTotalGain, setTotalRate);
    }
  };

  // // 포트폴리오 조회 api 연결
  useEffect(() => {
    getPortfolioAPI();
  });

  // 내 주식 진단하기 버튼 활성화
  let link, button;
  if (Array.from(data).length != 0) {
    link = '/diagnosis';
    button = 'check';
  } else {
    link = '/stock';
    button = 'disable_check';
  }

  // 총 자산 계산
  for (var i = 0; i < Array.from(data).length; i++) {
    total = total + data[i].present_val;
  }

  return (
    <>
      <Header />
      <div style={{ marginTop: '70px' }}></div>
      {name !== '' ? (
        <Wrap>
          <Container>
            <Title>
              <div>
                <TypoGraphy text={firstName + '님의 포트폴리오'} size="t1" />
                <TextWrap padding="15px 0 40px 0">
                  <TypoGraphy
                    text="보유 중인 주식을 입력하고 내 투자 현황까지 진단 받아보세요."
                    color="var(--type-gray-2)"
                    size="b1"
                  />
                </TextWrap>
              </div>
              <BtnWrapper to={link}>
                <Btn10 text="내 주식 진단받기 >" type={button} />
              </BtnWrapper>
            </Title>
            <BoxContainer>
              <Box height="224px" padding={27}>
                <TextWrap padding="22px 0 20px 0">
                  <TypoGraphy
                    text="총 자산"
                    size="b3"
                    color="var(--type-gray-2)"
                  />
                </TextWrap>
                <TextRow>
                  <TypoGraphy
                    text={'' + Math.floor(total).toLocaleString('ko-KR')}
                    size="t1"
                  />
                  <TypoGraphy
                    text="&nbsp;원"
                    size="t1"
                    color="var(--type-gray-2)"
                  />
                </TextRow>
                <TextWrap padding="5px 0">
                  <TypoGraphy
                    text={`${totalGain.toLocaleString(
                      'ko-KR'
                    )}원 (${totalRate.toFixed(1)}%)`}
                    size="12px"
                    color="var(--type-gray-2)"
                  />
                </TextWrap>
              </Box>
              <Box height="100%" padding={0}>
                <TextWrap padding="22px 27px 20px 27px">
                  <TypoGraphy text="보유 종목 입력" size="small" />
                </TextWrap>
                <div
                  onClick={() => setModalOpen(true)}
                  style={{ padding: '0 27px' }}
                >
                  <Btn10 type="big_add" text="+ 추가하기" />
                </div>

                {Array.from(data).length === 0 ? (
                  <TextWrap align="center" padding="100px 0 0 0">
                    <TypoGraphy
                      text="아직 추가된 종목이 없어요"
                      size="b2"
                      color="var(--type-gray-4)"
                    />
                  </TextWrap>
                ) : (
                  <StockListWrap>
                    {data.map((i: any, index: number) => (
                      <StockBox stock={i} key={index} />
                    ))}
                  </StockListWrap>
                )}
              </Box>
            </BoxContainer>
          </Container>

          {/* modal */}
          <ReactModal
            ariaHideApp={false}
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            style={{
              overlay: {
                position: 'fixed',
                background: 'rgba(0, 0, 0, 0.3)',
                zIndex: 10000,
              },
              content: {
                margin: 'auto',
                width: '544px',
                height: '714px',
                background: 'var(--type-white)',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                borderRadius: '20px',
                padding: 0,
              },
            }}
          >
            <ModalOpen>
              <TitleWrap>
                <TypoGraphy text="종목 추가하기" size="t3" />
                <div onClick={() => setModalOpen(false)}>
                  <Img src={closeIcon} />
                </div>
              </TitleWrap>
              <Modal setModalOpen={setModalOpen} />
            </ModalOpen>
          </ReactModal>
        </Wrap>
      ) : (
        <NoneLogin />
      )}
    </>
  );
};
export default MyStock;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background: var(--type-gray-6);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 68px 0;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const BtnWrapper = styled(Link)`
  height: fit-content;
`;

const BoxContainer = styled.div`
  width: 100%;
  height: 710px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const Box = styled.div<{ height?: string; padding?: number }>`
  background: var(--type-white);
  width: 590px;
  height: ${(props) => props.height || 'auto'};
  border-radius: 10px;
  padding: 0 ${(props) => props.padding || 0}px;
`;
const StockListWrap = styled.div`
  overflow: auto;
  height: 460px;
  margin: 15px 0;
  padding: 0 11px 0 27px;

  &::-webkit-scrollbar {
    width: 16px;
  }
  &::-webkit-scrollbar-thumb {
    height: 124px;
    background-color: #ccd8ff;
    border-radius: 12px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
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
`;
const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 33px 34px 0px 34px;
`;
