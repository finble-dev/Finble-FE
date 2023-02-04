import NoneLogin from '../Login/NoneLogin';
import Experiment from './section/Experiment';
import Result from './section/Result';
import Intro from './section/Intro';
import styled from 'styled-components';

import ReactModal from 'react-modal';
import { useState, useEffect } from 'react';
import { Img, TextRow, TextWrap } from '../../assets/styles/styles';

import TypoGraphy from '../../components/Typography';
import closeIcon from '../../assets/icons/close.svg';
import modalImg from '../../assets/img/lab/modalImg.png';
import { initData } from './initData';

import { nameState } from '../../store/slice/userSlice';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';

const list1 = [
  [
    ['blue', '가상의 돈'],
    ['black', '을 나눠서\u00A0'],
    ['blue', '투자'],
    ['black', '해보고, 어떤 결과가 나올지'],
  ],
  [
    ['blue', '미리 테스트'],
    ['black', '해보는 기능이에요. 지금 나의 상황과 비교하면서'],
  ],
  [['black', "'이렇게 투자했으면 어땠을까?' 하는 궁금증을 풀어보세요."]],
];

const Lab = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const [isExp, setIsExp] = useState(false);
  const name = useSelector(nameState);
  const [data, setData] = useState(initData);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <Header />
      {/* <div style={{ marginTop: '50px' }}></div> */}
      {name !== '' ? (
        <Container>
          <Intro />
          <Experiment
            isExp={isExp}
            setIsExp={setIsExp}
            data={data}
            setData={setData}
          />
          {data != initData ? <Result data={data} /> : <></>}
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
                width: '612px',
                height: '348px',
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
                <img
                  src={closeIcon}
                  style={{
                    height: '19px',
                    width: '19px',
                    cursor: 'pointer',
                    zIndex: 99,
                  }}
                  onClick={() => {
                    setModalOpen(false);
                  }}
                />
              </TitleWrap>
              <TextRow style={{ marginTop: '-20px' }}>
                <TypoGraphy
                  text="투자 실험"
                  size="t2"
                  color="var(--main-blue)"
                />
                <TypoGraphy text="이 무엇인가요?" size="t2" />
              </TextRow>
              <img
                src={modalImg}
                style={{
                  height: '130px',
                  marginTop: '10px',
                  marginBottom: '10px',
                }}
              />

              <TextWrap lineHeight={30}>
                {list1.map((items: any, itemsIdx: number) => (
                  <TextRow
                    align="center"
                    key={`Lab_list1_${itemsIdx}`}
                    style={{ height: '30px' }}
                  >
                    {items.map((item: any, itemIdx: number) =>
                      item[0] === 'black' ? (
                        <TypoGraphy
                          text={item[1]}
                          size="b2"
                          color="var(--type-gray-2)"
                          key={`Lab_list1_0_${itemIdx}`}
                        />
                      ) : (
                        <TypoGraphy
                          text={item[1]}
                          color="var(--main-blue)"
                          size="b2"
                          key={`Lab_list1_1_${itemIdx}`}
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
