import NoneLogin from '../NoneLogin';
import Section1 from './section/Section1';
import Section2 from './section/Section2';
import Experiment from './section/Experiment';
import Result from './section/Result';
import styled from 'styled-components';

import ReactModal from 'react-modal';
import { useState, useEffect } from 'react';
import { Img, TextRow, TextWrap } from '../../assets/styles/styles';

import TypoGraphy from '../../components/Typography';
import closeIcon from '../../assets/icons/close.svg';
import modalImg from '../../assets/img/lab/modalImg.png';

interface login {
  isLogin: boolean;
}

const list1 = [
  [
    ['blue', '가상의 돈'],
    ['black', '을 나눠서'],
    ['blue', '투자'],
    ['black', '해보고, 어떤 결과가 나올지'],
  ],
  [
    ['blue', '미리 테스트'],
    ['black', '해보는 기능이에요. 지금 나의 상황과 비교하면서'],
  ],
  [['black', "'이렇게 투자했으면 어땠을까?' 하는 궁금증을 풀어보세요."]],
];

const Lab = ({ isLogin }: login) => {
  const [modalOpen, setModalOpen] = useState(true);
  const [isExp, setIsExp] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      {isLogin ? (
        <Container>
          <Section1 />
          <Section2 />
          <Experiment isExp={isExp} setIsExp={setIsExp} />
          {isExp ? <Result /> : <></>}
          <ReactModal
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            style={{
              overlay: {
                position: 'fixed',
                background: 'rgba(0, 0, 0, 0.3)',
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
              <TitleWrap>
                <div onClick={() => setModalOpen(false)}>
                  <Img src={closeIcon} />
                </div>
              </TitleWrap>
              {/* <Row style={{ marginTop: '-32px' }}> */}
              <TextRow>
                <TypoGraphy
                  text="투자 실험"
                  size="t1"
                  color="var(--main-blue)"
                />
                <TypoGraphy
                  text="이 무엇인가요?"
                  size="t1"
                  style={{ marginBottom: '16px' }}
                />
              </TextRow>
              {/* </Row> */}
              <img src={modalImg} />

              <TextWrap lineHeight={34} padding="32px 0 0 0">
                {list1.map((items: any, idx: number) => (
                  <TextRow align="center">
                    {items.map((item: any, idx: number) =>
                      item[0] === 'black' ? (
                        <TypoGraphy
                          text={item[1]}
                          size="b1"
                          color="var(--type-gray-2)"
                        />
                      ) : (
                        <TypoGraphy
                          text={item[1]}
                          color="var(--main-blue)"
                          size="b1"
                        />
                      )
                    )}
                  </TextRow>
                ))}
              </TextWrap>
            </ModalOpen>
          </ReactModal>
        </Container>
      ) : (
        <NoneLogin />
      )}
    </>
  );
};
export default Lab;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f7f8fa;
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
  justify-content: end;
  width: 100%;
  height: 100%;
  // padding: 0 0 40px 0;
`;
