import TypoGraphy from '../components/Typography';
import Button from '../components/Button';
import styled from 'styled-components';
import mainImg from '../assets/mainImg.svg';

const NoneLogin = () => {
  return (
    <Container>
      <Column style={{ marginLeft: '362px', marginTop: '229px' }}>
        <TypoGraphy text="앗, 로그인부터!" size="main" />
        <TypoGraphy
          text="로그인/회원가입 이후 내 포트폴리오를 입력할 수 있어요."
          size="h3"
          style={{ marginTop: '38px' }}
        />
        <TypoGraphy
          text="기존 가입 회원은 가입한 방법으로 로그인해주세요."
          size="h3"
          style={{ marginTop: '10px' }}
        />
        <Button text={'로그인하기'} style={{ marginTop: '68px' }} />
      </Column>
      <img src={mainImg} style={{ marginTop: '229px' }} />
    </Container>
  );
};
export default NoneLogin;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: #f6f8fe;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;
