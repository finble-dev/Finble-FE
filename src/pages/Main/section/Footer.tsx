import TypoGraphy from '../../../components/Typography';
import { Btn60 } from '../../../components/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TextWrap, Row } from '../../../assets/styles/styles';
import mainSub6 from '../../../assets/img/main/mainSub6.png';

const Footer = () => {
  return (
    <Container>
      <Wrapper style={{ marginRight: '200px' }}>
        <TextWrap padding="0 0 40px 0">
          <TypoGraphy text="편안한 주식, 핀블과 함께 시작해보세요!" size="h1" />
        </TextWrap>
        <Link to="/lab">
          <Btn60 type="able" text="지금 바로 시작하기" />
        </Link>
      </Wrapper>
      <img src={mainSub6} style={{ marginTop: '20px' }} />
    </Container>
  );
};
export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 446px;
  background: linear-gradient(95.87deg, #c2d4fe 17.05%, #8baeff 90.04%);
`;

const Wrapper = styled.div`
  // width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
