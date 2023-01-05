import TypoGraphy from '../components/Typography';
import { Btn60 } from '../components/Button';
import styled from 'styled-components';
import googleLogin from '../assets/img/googleLogin.png';
import noneLoginBg from '../assets/img/noneLoginBg.png';
import ReactModal from 'react-modal';
import { useState } from 'react';
import { Img, ImgContainer } from '../assets/styles/styles';
import closeIcon from '../assets/icons/close.svg';

const NoneLogin = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container>
      <Wrapper>
        <TypoGraphy text="앗, 로그인부터!" size="h1" />
        <TextWrap padding="40px 0 50px 0">
          <TypoGraphy
            text="로그인/회원가입 이후 내 포트폴리오를 입력할 수 있어요."
            size="t3"
            color="var(--type-gray-2)"
          />
          <TypoGraphy
            text="기존 가입 회원은 가입한 방법으로 로그인해주세요."
            size="t3"
            color="var(--type-gray-2)"
          />
        </TextWrap>
        <BtnWrapper onClick={() => setModalOpen(true)}>
          <Btn60 type="able" text="로그인하기" />
        </BtnWrapper>
      </Wrapper>

      {/* modal */}
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
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '20px',
          },
        }}
      >
        <ModalOpen>
          <IconWrapper onClick={() => setModalOpen(false)}>
            <Img src={closeIcon} />
          </IconWrapper>
          <TypoGraphy text="시작하기" size="t1" />
          <TextWrap lineHeight={35.04} padding="44px 0 40px 0">
            <TypoGraphy
              text="주린이들을 위한 분산 투자 가이드, 핀블"
              size="t3"
              color="var(--type-gray-2)"
            />
            <TypoGraphy
              text="포트폴리오 분석을 시작해보세요"
              size="t3"
              color="var(--type-gray-2)"
            />
          </TextWrap>
          <ImgContainer width="440px">
            <Img src={googleLogin} />
          </ImgContainer>
          <TextWrap lineHeight={21} padding="40px 0 0 0">
            <TypoGraphy
              text="로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을 의미하며,"
              size="b3"
              color="var(--type-gray-4)"
            />
            <TypoGraphy
              text="서비스 이용을 위해 이메일과 이름, 프로필 이미지를 수집합니다."
              size="b3"
              color="var(--type-gray-4)"
            />
          </TextWrap>
        </ModalOpen>
      </ReactModal>
    </Container>
  );
};
export default NoneLogin;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 70px);
  background-image: url(${noneLoginBg});
  background-position: center center;
  background-size: cover;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  max-width: 1200px;
`;

const TextWrap = styled.div<{ lineHeight?: number; padding?: string }>`
  padding: ${(props) => props.padding || 0};
  line-height: ${(props) => props.lineHeight || 44.99}px;
`;
const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
`;
const BtnWrapper = styled.div`
  width: fit-content;
`;

// modal
const ModalOpen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
