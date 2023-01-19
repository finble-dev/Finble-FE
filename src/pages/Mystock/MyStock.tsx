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
// import { SERVER } from '../../network/config';
import { GoogleToken } from '../Login/components/GoogleLogin';

interface login {
  isLogin: boolean;
}

const MyStock = ({ isLogin }: login) => {
  const [modalOpen, setModalOpen] = useState(false);

  // useEffect(() => {
  //   fetch(`${SERVER}/portfolio/`, {
  //     headers: {
  //       Authorization: `Bearer ${GoogleToken}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // });

  //임시
  const [diagonsis, setDiagonsis] = useState(true);
  let link, button;
  if (diagonsis) {
    link = '/diagnosis';
    button = 'check';
  } else {
    link = '/stock';
    button = 'disable_check';
  }

  return (
    <>
      {isLogin ? (
        <Wrap>
          <Container>
            <Title>
              <div>
                <TypoGraphy text="민성님의 포트폴리오" size="t1" />
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
              <Box height="224px">
                <TextWrap padding="22px 0 20px 0">
                  <TypoGraphy
                    text="총 자산"
                    size="b3"
                    color="var(--type-gray-2)"
                  />
                </TextWrap>
                <TextRow>
                  <TypoGraphy text="0&nbsp;" size="t1" />
                  <TypoGraphy text="원" size="t1" color="var(--type-gray-2)" />
                </TextRow>
              </Box>
              <Box height="100%">
                <TextWrap padding="22px 0 20px 0">
                  <TypoGraphy text="보유 종목 입력" size="small" />
                </TextWrap>
                <div onClick={() => setModalOpen(true)}>
                  <Btn10 type="big_add" text="+ 추가하기" />
                </div>
                <TextWrap align="center" padding="100px 0 0 0">
                  <TypoGraphy
                    text="아직 추가된 종목이 없어요"
                    size="b2"
                    color="var(--type-gray-4)"
                  />
                </TextWrap>
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
              <Modal />
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
  height: calc(100vh - 70px);
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
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const Box = styled.div<{ height?: string }>`
  background: var(--type-white);
  width: 590px;
  height: ${(props) => props.height || 'auto'};
  border-radius: 10px;
  padding: 0 27px;
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
