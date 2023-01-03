import TypoGraphy from '../../../components/Typography';
import { Btn60 } from '../../../components/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Column>
          <TypoGraphy text="먼저 본인의 투자 현황을 입력하고" size="t3" />
          <TypoGraphy text="실험을 시작해보세요!" size="t3" />
        </Column>
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
  height: 214px;
  background-color: #f6f8fe;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  line-height: 42.67px;
`;
