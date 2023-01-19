import TypoGraphy from '../../components/Typography';
import { Btn60 } from '../../components/Button';
import styled from 'styled-components';
import noneLoginBg from '../../assets/img/noneLoginBg.png';
import { useState } from 'react';
import { TextWrap } from '../../assets/styles/styles';
import LoginModal from '../../components/LoginModal';
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
      <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </Container>
  );
};
export default NoneLogin;

const Container = styled.div`
  display: flex;
  justify-content: center;
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
  padding-top: 220px;
  max-width: 1200px;
`;

const BtnWrapper = styled.div`
  width: fit-content;
`;
