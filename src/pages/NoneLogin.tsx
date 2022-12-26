import TypoGraphy from '../components/Typography';
import Button from '../components/Button';
import styled from 'styled-components';
import mainImg from '../assets/mainImg.svg';

const NoneLogin = () => {
  return (
    <Wrapper>
      <Container>
        <Column>
          <TypoGraphy text="앗, 로그인부터!" size="h1" />
          <TextWrap>
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
          <Button text={'로그인하기'} size="medium" width={404} height={75} />
        </Column>
        <ImgContainer>
          <Img src={mainImg} />
        </ImgContainer>
      </Container>
    </Wrapper>
  );
};
export default NoneLogin;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 83.06px);
  background: #f6f8fe;
`;
const Container = styled.div`
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
const TextWrap = styled.div`
  padding: 3rem 0 4rem 0;
  line-height: 44.99px;
`;

const ImgContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: flex-end;
  justify-contents: center;
`;
const Img = styled.img`
  width: 100%;
`;
