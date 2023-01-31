import TypoGraphy from '../../../components/Typography';
import { Btn60 } from '../../../components/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TextWrap } from '../../../assets/styles/styles';
import mainSub6 from '../../../assets/img/main/mainSub6.png';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <TextWrap padding="0 0 40px 0">
          <TypoGraphy text="편안한 주식, 핀블과 함께 시작해보세요!" size="h1" />
        </TextWrap>
        <Link to="/lab">
          <Btn60 type="able" text="지금 바로 시작하기" />
        </Link>
      </Wrapper>
    </Container>
  );
};
export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 318px;
  background: url(${mainSub6});
  background-position: center center;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1060px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
