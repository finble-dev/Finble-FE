import TypoGraphy from '../components/Typography';
import Button from '../components/Button';
import styled from 'styled-components';
import googleLogin from '../assets/img/googleLogin.png';
import mainImg from '../assets/mainImg.svg';
import ReactModal from 'react-modal';
import { useState } from 'react';
import { Img, ImgContainer } from '../assets/styles/styles';

const NoneLogin = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Column>
          <TypoGraphy text="앗, 로그인부터!" size="h1" />
          <TextWrap padding={3}>
            <TypoGraphy
              text="로그인/회원가입 이후 내 포트폴리오를 입력할 수 있어요."
              size="h3"
              style={{ fontSize: '22px' }}
            />
            <TypoGraphy
              text="기존 가입 회원은 가입한 방법으로 로그인해주세요."
              size="h3"
              style={{ fontSize: '22px' }}
            />
          </TextWrap>
          <div onClick={() => setModalOpen(true)}>
            <Button text={'로그인하기'} size="medium" width={404} height={75} />
          </div>
        </Column>
        <ImgContainer>
          <Img src={mainImg} />
        </ImgContainer>

        {/* modal */}
        <ReactModal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          style={{
            overlay: {
              position: 'fixed',
              background: 'rgba(0, 0, 0, 0.2)',
            },
            content: {
              margin: 'auto',
              width: '857.72px',
              height: '532.17px',
              background: 'var(--type-white)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '15.9955px',
            },
          }}
        >
          <ModalOpen>
            <TypoGraphy text="시작하기" size="h1" />
            <TextWrap lineHeight={33.39}>
              <TypoGraphy
                text="주린이들을 위한 분산 투자 가이드, 포겟미낫"
                size="b1"
                style={{ fontSize: '22px', color: '#515151' }}
              />
              <TypoGraphy
                text="포트폴리오 분석을 시작해보세요"
                size="b1"
                style={{ fontSize: '22px', color: '#515151' }}
              />
            </TextWrap>
            <ImgContainer width="427px">
              <Img src={googleLogin} />
            </ImgContainer>
            <TextWrap lineHeight={26}>
              <TypoGraphy
                text="로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을 의미하며,"
                size="b1"
                style={{ fontSize: '16px', color: '#a8a8a8' }}
              />
              <TypoGraphy
                text="서비스 이용을 위해 이메일과 이름, 프로필 이미지를 수집합니다."
                size="b1"
                style={{ fontSize: '16px', color: '#a8a8a8' }}
              />
            </TextWrap>
          </ModalOpen>
        </ReactModal>
      </Wrapper>
    </Container>
  );
};
export default NoneLogin;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 83.06px);
  background: #f6f8fe;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1200px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
`;
const TextWrap = styled.div<{ lineHeight?: number; padding?: number }>`
  padding: ${(props) => props.padding || 0}rem 0;
  line-height: ${(props) => props.lineHeight || 44.99}px;
`;

/*const ImgContainer = styled.div<{ width?: string }>`
  width: ${(props) => props.width || '70%'};
  display: flex;
  align-items: flex-end;
  justify-contents: center;
`;
const Img = styled.img`
  width: 100%;
`;*/

// modal
const ModalOpen = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
